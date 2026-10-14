"""Check generated files, links, anchors, fonts and the shared reading structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import hashlib
import json
import re
import sys

pilot = Path(__file__).resolve().parents[1]
root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else pilot / 'preview/dist'
units = json.loads((pilot / 'preview/sections.json').read_text())['units']

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.links, self.ids, self.current, self.chapter_links = [], [], [], 0
        self.html = path.read_text()
        self.feed(self.html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if attrs.get('aria-current') == 'page':
            self.current.append(attrs.get('href'))
        if 'chapter-link' in attrs.get('class', '').split():
            self.chapter_links += 1
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])

pages = {p: Page(p) for p in root.glob('*.html')}
alignment = json.loads((pilot / 'preview/edition.json').read_text())
for manifest in ('transcription-v1.json', 'transcription-v2.json'):
    lock = json.loads((pilot / 'source' / manifest).read_text())
    for file, expected in lock['sha256'].items():
        assert hashlib.sha256((pilot / file).read_bytes()).hexdigest() == expected, file
assert sorted(n for unit in units for n in unit['sectionNumbers']) == list(range(1, 12))
errors, references = [], 0
for path, page in pages.items():
    if len(page.ids) != len(set(page.ids)):
        errors.append(f'{path.name}: duplicate IDs')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        references += 1
        target = path.parent / unquote(url.path) if url.path else path
        if target.is_dir():
            target /= 'index.html'
        # The historical explicit index.html address redirects to billiard.html.
        if target.name == 'index.html' and url.fragment:
            target = root / 'billiard.html'
        if not target.exists():
            errors.append(f'{path.name}: missing {link}')
        elif url.fragment and target.suffix == '.html':
            if unquote(url.fragment) not in pages[target].ids:
                errors.append(f'{path.name}: missing anchor {link}')
for unit in units:
    page = pages[root / unit['url']]
    assert len(re.findall(r'<h1[ >]', page.html)) == 1, unit['id']
    headings = re.findall(r'<h2[^>]*>(.*?)</h2>', page.html, re.S)
    assert headings[-2:] == ['Relation to the source', 'Sources and verification'], unit['id']
    assert headings.count('Relation to the source') == 1, unit['id']
    assert '<summary>Mathematical checks <span>Scope and evidence</span></summary>' in page.html, unit['id']
    assert unit['contents'][-1][0] == 'relation', unit['id']
    assert 'a modern reading' not in page.html.lower(), unit['id']
    for mode in ('original', 'modernized', 'reinterpreted'):
        panel = re.search(r'<section[^>]*id="panel-' + mode + r'"[^>]*>', page.html).group()
        assert ('hidden' in panel) == (mode != 'original'), (unit['id'], mode)
    groups = alignment['units'][unit['id']]['groups']
    assert len({g['id'] for g in groups}) == len(groups), unit['id']
    for mode in ('original', 'modernized'):
        folder = 'original/' + unit['originalVersion'] if mode == 'original' else mode
        source = (pilot / f"content/{folder}/{unit['id']}.md").read_text()
        passages = re.findall(r'<!-- passage:([\w-]+) -->', source)
        assert len(passages) == len(set(passages)), unit['id']
        expected = {f"{mode}-{unit['id']}-{id}" for id in passages}
        mapped = {id for group in groups for id in group[mode]}
        assert expected == mapped, (unit['id'], mode, expected ^ mapped)
    for group in groups:
        for mode in ('original', 'modernized', 'reinterpreted'):
            assert all(id in page.ids for id in group[mode]), group['id']
    assert 'id="edition-compare"' in page.html, unit['id']
    assert 'data-mode-choice=' not in page.html, unit['id']
    if unit['id'] == 'measure':
        assert '<div id="symplectic-proof">' in page.html
        assert 'proof-pair' not in page.html
    assert page.current == ['#top'], unit['id']
    assert page.chapter_links == len(units), unit['id']
    for anchor, _ in unit['contents']:
        assert anchor in page.ids, (unit['id'], anchor)
for css in root.rglob('*.css'):
    for resource in re.findall(r'url\([\'"]?([^\)\'\"]+)', css.read_text()):
        if not urlsplit(resource).scheme and not (css.parent / resource).exists():
            errors.append(f'{css.name}: missing resource {resource}')
assert not errors, '\n'.join(errors)
print(json.dumps({'readingUnits': len(units), 'localReferences': references, 'errors': errors}))

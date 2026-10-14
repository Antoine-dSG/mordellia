# Mordellia

[Read the mathematical editions](https://antoine-dsg.github.io/mordellia/): Birkhoff's *Dynamical Systems*, Chapter VI, and Dickson's *History of the Theory of Numbers*, Volume I, Preface and Chapter I.

The site offers Original, Modernized and Reinterpreted modes, aligned comparisons, source references and interactive mathematical examples. Birkhoff covers all eleven chapter sections; Dickson contains 28 selected source passages across seven reading units, not a full transcription of the historical catalogue.

## Website deployment

`site/` is the generated publication snapshot. `.github/workflows/pages.yml` publishes only this directory to GitHub Pages on a push to `main`. Set **Settings → Pages → Source → GitHub Actions**. The former blueprint and Lean documentation publishers have been retired so they cannot overwrite the edition site.

In the authoring workspace, run `node website/build.mjs --publish` from the parent Mordellia directory. This rebuilds both books, verifies the frozen transcription manifests and local links under the `/mordellia/` prefix, and refreshes this repository's `site/`. Review and commit the resulting snapshot, then push to `main`. The editable book sources and collection builder live in the parent workspace; do not hand-edit generated HTML here.

The existing `blueprint/` and `research/` files retain the separate Mordell equation catalogue and mathematical research records. Lean source files, dependency manifests, toolchain and CI have been removed; the website needs no Lean installation. The former `home_page/` source is retained for reference.


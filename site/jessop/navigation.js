'use strict';
window.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.reading-navigation');if(!menu)return;
 const mobile=matchMedia('(max-width:720px)');
 const setLayout=()=>{menu.open=!mobile.matches;menu.querySelector('summary').tabIndex=mobile.matches?0:-1};setLayout();mobile.addEventListener('change',setLayout);
 menu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(mobile.matches)menu.open=false}));
});

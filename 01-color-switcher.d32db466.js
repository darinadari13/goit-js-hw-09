!function(){var e,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");t.addEventListener("click",(function(n){n.preventDeafault,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(n){n.preventDeafault,clearInterval(e),t.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.d32db466.js.map

const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let a;e.addEventListener("click",(function(d){d.preventDeafault,a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(d){d.preventDeafault,clearInterval(a),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.1fee7875.js.map
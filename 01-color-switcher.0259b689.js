const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled",1);let d=null;const o=t=>{r.setAttribute("style",`background-color:#${Math.floor(16777215*Math.random()).toString(16)}`)};console.log(e.hasAttribute("disabled",1)),t.addEventListener("click",(()=>{d=setInterval(o,1e3),t.setAttribute("disabled",1),e.removeAttribute("disabled",1)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled",1),e.setAttribute("disabled",1)}));
//# sourceMappingURL=01-color-switcher.0259b689.js.map

!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),c=document.querySelector("input[name=amount]"),l=document.querySelector(".form");function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}console.log(),l.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(u.value),t=Number(c.value),r=Number(a.value),l=1;l<=t;l+=1)l>1&&(o+=r),d(l,o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success(" Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure(" Rejected promise ".concat(o," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.3f8f0a1c.js.map
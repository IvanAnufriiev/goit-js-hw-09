function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form");function u(e,t){const n={position:e,delay:t},o=Math.random()>.3;return new Promise(((e,r)=>{setTimeout((()=>{o?e(n):r(n)}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.delay.value);const o=Number(l.amount.value),r=Number(l.step.value);for(let t=1;t<=o;t+=1)u(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=r}));
//# sourceMappingURL=03-promises.3f870a83.js.map

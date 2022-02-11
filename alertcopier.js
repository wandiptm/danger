!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Sweetalert2=t()}(this,function(){"use strict";const t="SweetAlert2:",y=e=>e.charAt(0).toUpperCase()+e.slice(1),i=e=>Array.prototype.slice.call(e),a=e=>{console.warn("".concat(t," ").concat("object"==typeof e?e.join(" "):e))},v=e=>{console.error("".concat(t," ").concat(e))},n=[],o=(e,t)=>{e='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),n.includes(e)||(n.push(e),a(e))},w=e=>"function"==typeof e?e():e,C=e=>e&&"function"==typeof e.toPromise,k=e=>C(e)?e.toPromise():Promise.resolve(e),A=e=>e&&Promise.resolve(e)===e,r={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},s=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],c={},P=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],B=e=>Object.prototype.hasOwnProperty.call(r,e),x=e=>-1!==s.indexOf(e),E=e=>c[e],T=e=>{!e.backdrop&&e.allowOutsideClick&&a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)t=n,B(t)||a('Unknown parameter "'.concat(t,'"')),e.toast&&(t=n,P.includes(t)&&a('The parameter "'.concat(t,'" is incompatible with toasts'))),t=n,E(t)&&o(t,E(t));var t};var e=e=>{const t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const p=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),S=e(["success","warning","info","question","error"]),m=()=>document.body.querySelector(".".concat(p.container)),L=e=>{const t=m();return t?t.querySelector(e):null},O=e=>L(".".concat(e)),g=()=>O(p.popup),j=()=>O(p.icon),M=()=>O(p.title),D=()=>O(p["html-container"]),I=()=>O(p.image),H=()=>O(p["progress-steps"]),q=()=>O(p["validation-message"]),V=()=>L(".".concat(p.actions," .").concat(p.confirm)),N=()=>L(".".concat(p.actions," .").concat(p.deny));const R=()=>L(".".concat(p.loader)),F=()=>L(".".concat(p.actions," .").concat(p.cancel)),U=()=>O(p.actions),W=()=>O(p.footer),z=()=>O(p["timer-progress-bar"]),_=()=>O(p.close),K=()=>{const e=i(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex"));return t<e?1:e<t?-1:0});var t=i(g().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{const n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>ce(e))},Y=()=>!$(document.body,p["toast-shown"])&&!$(document.body,p["no-backdrop"]),Z=()=>g()&&$(g(),p.toast);function J(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];const n=z();ce(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))}const X={previousBodyPadding:null},l=(t,e)=>{if(t.textContent="",e){const n=new DOMParser,o=n.parseFromString(e,"text/html");i(o.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),i(o.querySelector("body").childNodes).forEach(e=>{t.appendChild(e)})}},$=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},G=(t,n)=>{i(t.classList).forEach(e=>{Object.values(p).includes(e)||Object.values(S).includes(e)||Object.values(n.showClass).includes(e)||t.classList.remove(e)})},Q=(e,t,n)=>{if(G(e,t),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return a("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));u(e,t.customClass[n])}},ee=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(p.popup," > .").concat(p[t]));case"checkbox":return e.querySelector(".".concat(p.popup," > .").concat(p.checkbox," input"));case"radio":return e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:checked"))||e.querySelector(".".concat(p.popup," > .").concat(p.radio," input:first-child"));case"range":return e.querySelector(".".concat(p.popup," > .").concat(p.range," input"));default:return e.querySelector(".".concat(p.popup," > .").concat(p.input))}},te=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},ne=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},u=(e,t)=>{ne(e,t,!0)},oe=(e,t)=>{ne(e,t,!1)},ie=(e,t)=>{var n=i(e.childNodes);for(let e=0;e<n.length;e++)if($(n[e],t))return n[e]},ae=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},d=function(e){e.style.display=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex"},h=e=>{e.style.display="none"},re=(e,t,n,o)=>{const i=e.querySelector(t);i&&(i.style[n]=o)},se=(e,t,n)=>{t?d(e,n):h(e)},ce=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),le=()=>!ce(V())&&!ce(N())&&!ce(F()),ue=e=>!!(e.scrollHeight>e.clientHeight),de=e=>{const t=window.getComputedStyle(e);var e=parseFloat(t.getPropertyValue("animation-duration")||"0"),n=parseFloat(t.getPropertyValue("transition-duration")||"0");return 0<e||0<n},pe=()=>"undefined"==typeof window||"undefined"==typeof document,me=100,f={},ge=()=>{f.previousActiveElement&&f.previousActiveElement.focus?(f.previousActiveElement.focus(),f.previousActiveElement=null):document.body&&document.body.focus()},he=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;f.restoreFocusTimeout=setTimeout(()=>{ge(),e()},me),window.scrollTo(t,n)}),fe='\n <div aria-labelledby="'.concat(p.title,'" aria-describedby="').concat(p["html-container"],'" class="').concat(p.popup,'" tabindex="-1">\n   <button type="button" class="').concat(p.close,'"></button>\n   <ul class="').concat(p["progress-steps"],'"></ul>\n   <div class="').concat(p.icon,'"></div>\n   <img class="').concat(p.image,'" />\n   <h2 class="').concat(p.title,'" id="').concat(p.title,'"></h2>\n   <div class="').concat(p["html-container"],'" id="').concat(p["html-container"],'"></div>\n   <input class="').concat(p.input,'" />\n   <input type="file" class="').concat(p.file,'" />\n   <div class="').concat(p.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(p.select,'"></select>\n   <div class="').concat(p.radio,'"></div>\n   <label for="').concat(p.checkbox,'" class="').concat(p.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(p.label,'"></span>\n   </label>\n   <textarea class="').concat(p.textarea,'"></textarea>\n   <div class="').concat(p["validation-message"],'" id="').concat(p["validation-message"],'"></div>\n   <div class="').concat(p.actions,'">\n     <div class="').concat(p.loader,'"></div>\n     <button type="button" class="').concat(p.confirm,'"></button>\n     <button type="button" class="').concat(p.deny,'"></button>\n     <button type="button" class="').concat(p.cancel,'"></button>\n   </div>\n   <div class="').concat(p.footer,'"></div>\n   <div class="').concat(p["timer-progress-bar-container"],'">\n     <div class="').concat(p["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),be=()=>{const e=m();return!!e&&(e.remove(),oe([document.documentElement,document.body],[p["no-backdrop"],p["toast-shown"],p["has-column"]]),!0)},ye=()=>{f.currentInstance.resetValidationMessage()},ve=()=>{const e=g(),t=ie(e,p.input),n=ie(e,p.file),o=e.querySelector(".".concat(p.range," input")),i=e.querySelector(".".concat(p.range," output")),a=ie(e,p.select),r=e.querySelector(".".concat(p.checkbox," input")),s=ie(e,p.textarea);t.oninput=ye,n.onchange=ye,a.onchange=ye,r.onchange=ye,s.oninput=ye,o.oninput=()=>{ye(),i.value=o.value},o.onchange=()=>{ye(),o.nextSibling.value=o.value}},we=e=>"string"==typeof e?document.querySelector(e):e,Ce=e=>{const t=g();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},ke=e=>{"rtl"===window.getComputedStyle(e).direction&&u(m(),p.rtl)},Ae=(e,t)=>{if(e instanceof HTMLElement)t.appendChild(e);else if("object"==typeof e){var n=e,o=t;if(n.jquery)Pe(o,n);else l(o,n.toString())}else e&&l(t,e)},Pe=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},Be=(()=>{if(pe())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),xe=(e,t)=>{var n,o,i,a,r,s=U(),c=R();(t.showConfirmButton||t.showDenyButton||t.showCancelButton?d:h)(s),Q(s,t,"actions"),s=s,n=c,o=t,i=V(),a=N(),r=F(),Ee(i,"confirm",o),Ee(a,"deny",o),Ee(r,"cancel",o),function(e,t,n,o){if(!o.buttonsStyling)return oe([e,t,n],p.styled);u([e,t,n],p.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,u(e,p["default-outline"]));o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,u(t,p["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,u(n,p["default-outline"]))}(i,a,r,o),o.reverseButtons&&(o.toast?(s.insertBefore(r,i),s.insertBefore(a,i)):(s.insertBefore(r,n),s.insertBefore(a,n),s.insertBefore(i,n))),l(c,t.loaderHtml),Q(c,t,"loader")};function Ee(e,t,n){se(e,n["show".concat(y(t),"Button")],"inline-block"),l(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=p[t],Q(e,n,"".concat(t,"Button")),u(e,n["".concat(t,"ButtonClass")])}const Te=(e,t)=>{var n,o,i=m();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||u([document.documentElement,document.body],p["no-backdrop"]),o=i,(n=t.position)in p?u(o,p[n]):(a('The "position" parameter is not valid, defaulting to "center"'),u(o,p.center)),n=i,!(o=t.grow)||"string"!=typeof o||(o="grow-".concat(o))in p&&u(n,p[o]),Q(i,t,"container"))};var b={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Se=["input","file","range","select","radio","checkbox","textarea"],Le=(e,r)=>{const s=g();var t,e=b.innerParams.get(e);const c=!e||r.input!==e.input;Se.forEach(e=>{var t=p[e];const n=ie(s,t);{var o=r.inputAttributes;const i=ee(g(),e);if(i){Oe(i);for(const a in o)i.setAttribute(a,o[a])}}n.className=t,c&&h(n)}),r.input&&(c&&(e=>{if(!Ie[e.input])return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));const t=De(e.input),n=Ie[e.input](t,e);d(n),setTimeout(()=>{te(n)})})(r),e=r,t=De(e.input),e.customClass&&u(t,e.customClass.input))},Oe=t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},je=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},Me=(e,t,n)=>{if(n.inputLabel){e.id=p.input;const i=document.createElement("label");var o=p["input-label"];i.setAttribute("for",e.id),i.className=o,u(i,n.customClass.inputLabel),i.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",i)}},De=e=>{e=p[e]||p.input;return ie(g(),e)},Ie={},He=(Ie.text=Ie.email=Ie.password=Ie.number=Ie.tel=Ie.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:A(t.inputValue)||a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),Me(e,e,t),je(e,t),e.type=t.input,e),Ie.file=(e,t)=>(Me(e,e,t),je(e,t),e),Ie.range=(e,t)=>{const n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,Me(n,e,t),e},Ie.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");l(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return Me(e,e,t),e},Ie.radio=e=>(e.textContent="",e),Ie.checkbox=(e,t)=>{const n=ee(g(),"checkbox");n.value="1",n.id=p.checkbox,n.checked=Boolean(t.inputValue);var o=e.querySelector("span");return l(o,t.inputPlaceholder),e},Ie.textarea=(n,e)=>{n.value=e.inputValue,je(n,e),Me(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(g()).width);new MutationObserver(()=>{var e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?g().style.width="".concat(e,"px"):g().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n},(e,t)=>{const n=D();Q(n,t,"htmlContainer"),t.html?(Ae(t.html,n),d(n,"block")):t.text?(n.textContent=t.text,d(n,"block")):h(n),Le(e,t)}),qe=(e,t)=>{var n=W();se(n,t.footer),t.footer&&Ae(t.footer,n),Q(n,t,"footer")},Ve=(e,t)=>{const n=_();l(n,t.closeButtonHtml),Q(n,t,"closeButton"),se(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},Ne=(e,t)=>{var e=b.innerParams.get(e),n=j();return e&&t.icon===e.icon?(ze(n,t),void Re(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(S).indexOf(t.icon)?(v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),h(n)):(d(n),ze(n,t),Re(n,t),void u(n,t.showClass.icon)):h(n)},Re=(e,t)=>{for(const n in S)t.icon!==n&&oe(e,S[n]);u(e,S[t.icon]),_e(e,t),Fe(),Q(e,t,"icon")},Fe=()=>{const e=g();var t=window.getComputedStyle(e).getPropertyValue("background-color");const n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Ue='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',We='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',ze=(e,t)=>{var n;e.textContent="",t.iconHtml?l(e,Ke(t.iconHtml)):"success"===t.icon?l(e,Ue):"error"===t.icon?l(e,We):(n={question:"?",warning:"!",info:"i"},l(e,Ke(n[t.icon])))},_e=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])re(e,n,"backgroundColor",t.iconColor);re(e,".swal2-success-ring","borderColor",t.iconColor)}},Ke=e=>'<div class="'.concat(p["icon-content"],'">').concat(e,"</div>"),Ye=(e,t)=>{const n=I();if(!t.imageUrl)return h(n);d(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),ae(n,"width",t.imageWidth),ae(n,"height",t.imageHeight),n.className=p.image,Q(n,t,"image")},Ze=(e,o)=>{const i=H();if(!o.progr
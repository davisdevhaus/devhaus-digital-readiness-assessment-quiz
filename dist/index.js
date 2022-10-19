"use strict";(()=>{var ht=Object.defineProperty,mt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var xe=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Ae=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))gt.call(t,n)&&Ae(e,n,t[n]);if(xe)for(var n of xe(t))yt.call(t,n)&&Ae(e,n,t[n]);return e},I=(e,t)=>mt(e,dt(t));var bt=Object.defineProperty,vt=(e,t,n)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>(vt(e,typeof t!="symbol"?t+"":t,n),n);function wt(e,t){let n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function We(e){if(y(e)){let t={};for(let n=0;n<e.length;n++){let s=e[n],o=q(s)?kt(s):We(s);if(o)for(let i in o)t[i]=o[i]}return t}else if(q(e)||E(e))return e}var xt=/;(?![^(]*\))/g,At=/:(.+)/;function kt(e){let t={};return e.split(xt).forEach(n=>{if(n){let s=n.split(At);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(q(e))t=e;else if(y(e))for(let n=0;n<e.length;n++){let s=De(e[n]);s&&(t+=s+" ")}else if(E(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}function _t(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=j(e[s],t[s]);return n}function j(e,t){if(e===t)return!0;let n=ke(e),s=ke(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=y(e),s=y(t),n||s)return n&&s?_t(e,t):!1;if(n=E(e),s=E(t),n||s){if(!n||!s)return!1;let o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(let r in e){let c=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(c&&!l||!c&&l||!j(e[r],t[r]))return!1}}return String(e)===String(t)}function U(e,t){return e.findIndex(n=>j(n,t))}var St=Object.assign,Pt=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},Et=Object.prototype.hasOwnProperty,fe=(e,t)=>Et.call(e,t),y=Array.isArray,X=e=>Ie(e)==="[object Map]",ke=e=>e instanceof Date,q=e=>typeof e=="string",pe=e=>typeof e=="symbol",E=e=>e!==null&&typeof e=="object",$t=Object.prototype.toString,Ie=e=>$t.call(e),Mt=e=>Ie(e).slice(8,-1),he=e=>q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,He=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ot=/-(\w)/g,Ct=He(e=>e.replace(Ot,(t,n)=>n?n.toUpperCase():"")),Lt=/\B([A-Z])/g,Fe=He(e=>e.replace(Lt,"-$1").toLowerCase()),Tt=(e,t)=>!Object.is(e,t),_e=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Nt;function Be(e,t){t=t||Nt,t&&t.active&&t.effects.push(e)}var Qe=e=>{let t=new Set(e);return t.w=0,t.n=0,t},ze=e=>(e.w&$)>0,Ge=e=>(e.n&$)>0,jt=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$},qt=e=>{let{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){let o=t[s];ze(o)&&!Ge(o)?o.delete(e):t[n++]=o,o.w&=~$,o.n&=~$}t.length=n}},te=new WeakMap,F=0,$=1,ne=30,H=[],L,G=Symbol(""),Se=Symbol(""),se=class{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],Be(this,s)}run(){if(!this.active)return this.fn();if(!H.includes(this))try{return H.push(L=this),It(),$=1<<++F,F<=ne?jt(this):Pe(this),this.fn()}finally{F<=ne&&qt(this),$=1<<--F,Ke(),H.pop();let t=H.length;L=t>0?H[t-1]:void 0}}stop(){this.active&&(Pe(this),this.onStop&&this.onStop(),this.active=!1)}};function Pe(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Rt(e,t){e.effect&&(e=e.effect.fn);let n=new se(e);t&&(St(n,t),t.scope&&Be(n,t.scope)),(!t||!t.lazy)&&n.run();let s=n.run.bind(n);return s.effect=n,s}function Wt(e){e.effect.stop()}var R=!0,me=[];function Dt(){me.push(R),R=!1}function It(){me.push(R),R=!0}function Ke(){let e=me.pop();R=e===void 0?!0:e}function V(e,t,n){if(!Ht())return;let s=te.get(e);s||te.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Qe()),Ft(o)}function Ht(){return R&&L!==void 0}function Ft(e,t){let n=!1;F<=ne?Ge(e)||(e.n|=$,n=!ze(e)):n=!e.has(L),n&&(e.add(L),L.deps.push(e))}function oe(e,t,n,s,o,i){let r=te.get(e);if(!r)return;let c=[];if(t==="clear")c=[...r.values()];else if(n==="length"&&y(e))r.forEach((l,a)=>{(a==="length"||a>=s)&&c.push(l)});else switch(n!==void 0&&c.push(r.get(n)),t){case"add":y(e)?he(n)&&c.push(r.get("length")):(c.push(r.get(G)),X(e)&&c.push(r.get(Se)));break;case"delete":y(e)||(c.push(r.get(G)),X(e)&&c.push(r.get(Se)));break;case"set":X(e)&&c.push(r.get(G));break}if(c.length===1)c[0]&&Ee(c[0]);else{let l=[];for(let a of c)a&&l.push(...a);Ee(Qe(l))}}function Ee(e,t){for(let n of y(e)?e:[...e])(n!==L||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}var Bt=wt("__proto__,__v_isRef,__isVue"),Ve=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(pe)),Qt=Je(),zt=Je(!0),$e=Gt();function Gt(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){let s=T(this);for(let i=0,r=this.length;i<r;i++)V(s,"get",i+"");let o=s[t](...n);return o===-1||o===!1?s[t](...n.map(T)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Dt();let s=T(this)[t].apply(this,n);return Ke(),s}}),e}function Je(e=!1,t=!1){return function(n,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_raw"&&o===(e?t?tn:Ze:t?en:Ye).get(n))return n;let i=y(n);if(!e&&i&&fe($e,s))return Reflect.get($e,s,o);let r=Reflect.get(n,s,o);return(pe(s)?Ve.has(s):Bt(s))||(e||V(n,"get",s),t)?r:re(r)?!i||!he(s)?r.value:r:E(r)?e?on(r):W(r):r}}var Kt=Vt();function Vt(e=!1){return function(t,n,s,o){let i=t[n];if(!e&&!rn(s)&&(s=T(s),i=T(i),!y(t)&&re(i)&&!re(s)))return i.value=s,!0;let r=y(t)&&he(n)?Number(n)<t.length:fe(t,n),c=Reflect.set(t,n,s,o);return t===T(o)&&(r?Tt(s,i)&&oe(t,"set",n,s):oe(t,"add",n,s)),c}}function Jt(e,t){let n=fe(e,t);e[t];let s=Reflect.deleteProperty(e,t);return s&&n&&oe(e,"delete",t,void 0),s}function Yt(e,t){let n=Reflect.has(e,t);return(!pe(t)||!Ve.has(t))&&V(e,"has",t),n}function Zt(e){return V(e,"iterate",y(e)?"length":G),Reflect.ownKeys(e)}var Ut={get:Qt,set:Kt,deleteProperty:Jt,has:Yt,ownKeys:Zt},Xt={get:zt,set(e,t){return!0},deleteProperty(e,t){return!0}},Ye=new WeakMap,en=new WeakMap,Ze=new WeakMap,tn=new WeakMap;function nn(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sn(e){return e.__v_skip||!Object.isExtensible(e)?0:nn(Mt(e))}function W(e){return e&&e.__v_isReadonly?e:Ue(e,!1,Ut,null,Ye)}function on(e){return Ue(e,!0,Xt,null,Ze)}function Ue(e,t,n,s,o){if(!E(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let i=o.get(e);if(i)return i;let r=sn(e);if(r===0)return e;let c=new Proxy(e,r===2?s:n);return o.set(e,c),c}function rn(e){return!!(e&&e.__v_isReadonly)}function T(e){let t=e&&e.__v_raw;return t?T(t):e}function re(e){return Boolean(e&&e.__v_isRef===!0)}Promise.resolve();var ie=!1,K=[],cn=Promise.resolve(),J=e=>cn.then(e),Me=e=>{K.includes(e)||K.push(e),ie||(ie=!0,J(ln))},ln=()=>{for(let e of K)e();K.length=0,ie=!1},an=/^(spellcheck|draggable|form|list|type)$/,ce=({el:e,get:t,effect:n,arg:s,modifiers:o})=>{let i;s==="class"&&(e._class=e.className),n(()=>{let r=t();if(s)o!=null&&o.camel&&(s=Ct(s)),ee(e,s,r,i);else{for(let c in r)ee(e,c,r[c],i&&i[c]);for(let c in i)(!r||!(c in r))&&ee(e,c,null)}i=r})},ee=(e,t,n,s)=>{if(t==="class")e.setAttribute("class",De(e._class?[e._class,n]:n)||"");else if(t==="style"){n=We(n);let{style:o}=e;if(!n)e.removeAttribute("style");else if(q(n))n!==s&&(o.cssText=n);else{for(let i in n)le(o,i,n[i]);if(s&&!q(s))for(let i in s)n[i]==null&&le(o,i,"")}}else!(e instanceof SVGElement)&&t in e&&!an.test(t)?(e[t]=n,t==="value"&&(e._value=n)):t==="true-value"?e._trueValue=n:t==="false-value"?e._falseValue=n:n!=null?e.setAttribute(t,n):e.removeAttribute(t)},Oe=/\s*!important$/,le=(e,t,n)=>{y(n)?n.forEach(s=>le(e,t,s)):t.startsWith("--")?e.setProperty(t,n):Oe.test(n)?e.setProperty(Fe(t),n.replace(Oe,""),"important"):e[t]=n},P=(e,t)=>{let n=e.getAttribute(t);return n!=null&&e.removeAttribute(t),n},S=(e,t,n,s)=>{e.addEventListener(t,n,s)},un=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,fn=["ctrl","shift","alt","meta"],pn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fn.some(n=>e[`${n}Key`]&&!t[n])},Xe=({el:e,get:t,exp:n,arg:s,modifiers:o})=>{if(!s)return;let i=un.test(n)?t(`(e => ${n}(e))`):t(`($event => { ${n} })`);if(s==="vue:mounted"){J(i);return}else if(s==="vue:unmounted")return()=>i();if(o){s==="click"&&(o.right&&(s="contextmenu"),o.middle&&(s="mouseup"));let r=i;i=c=>{if(!("key"in c&&!(Fe(c.key)in o))){for(let l in o){let a=pn[l];if(a&&a(c,o))return}return r(c)}}}S(e,s,i,o)},hn=({el:e,get:t,effect:n})=>{let s=e.style.display;n(()=>{e.style.display=t()?s:"none"})},et=({el:e,get:t,effect:n})=>{n(()=>{e.textContent=tt(t())})},tt=e=>e==null?"":E(e)?JSON.stringify(e,null,2):String(e),mn=({el:e,get:t,effect:n})=>{n(()=>{e.innerHTML=t()})},dn=({el:e,exp:t,get:n,effect:s,modifiers:o})=>{let i=e.type,r=n(`(val) => { ${t} = val }`),{trim:c,number:l=i==="number"}=o||{};if(e.tagName==="SELECT"){let a=e;S(e,"change",()=>{let u=Array.prototype.filter.call(a.options,f=>f.selected).map(f=>l?_e(_(f)):_(f));r(a.multiple?u:u[0])}),s(()=>{let u=n(),f=a.multiple;for(let p=0,v=a.options.length;p<v;p++){let b=a.options[p],w=_(b);if(f)y(u)?b.selected=U(u,w)>-1:b.selected=u.has(w);else if(j(_(b),u)){a.selectedIndex!==p&&(a.selectedIndex=p);return}}!f&&a.selectedIndex!==-1&&(a.selectedIndex=-1)})}else if(i==="checkbox"){S(e,"change",()=>{let u=n(),f=e.checked;if(y(u)){let p=_(e),v=U(u,p),b=v!==-1;if(f&&!b)r(u.concat(p));else if(!f&&b){let w=[...u];w.splice(v,1),r(w)}}else r(Ce(e,f))});let a;s(()=>{let u=n();y(u)?e.checked=U(u,_(e))>-1:u!==a&&(e.checked=j(u,Ce(e,!0))),a=u})}else if(i==="radio"){S(e,"change",()=>{r(_(e))});let a;s(()=>{let u=n();u!==a&&(e.checked=j(u,_(e)))})}else{let a=u=>c?u.trim():l?_e(u):u;S(e,"compositionstart",gn),S(e,"compositionend",yn),S(e,o!=null&&o.lazy?"change":"input",()=>{e.composing||r(a(e.value))}),c&&S(e,"change",()=>{e.value=e.value.trim()}),s(()=>{if(e.composing)return;let u=e.value,f=n();document.activeElement===e&&a(u)===f||u!==f&&(e.value=f)})}},_=e=>"_value"in e?e._value:e.value,Ce=(e,t)=>{let n=t?"_trueValue":"_falseValue";return n in e?e[n]:t},gn=e=>{e.target.composing=!0},yn=e=>{let t=e.target;t.composing&&(t.composing=!1,bn(t,"input"))},bn=(e,t)=>{let n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)},Le=Object.create(null),B=(e,t,n)=>nt(e,`return(${t})`,n),nt=(e,t,n)=>{let s=Le[t]||(Le[t]=vn(t));try{return s(e,n)}catch(o){console.error(o)}},vn=e=>{try{return new Function("$data","$el",`with($data){${e}}`)}catch(t){return console.error(`${t.message} in expression: ${e}`),()=>{}}},wn=({el:e,ctx:t,exp:n,effect:s})=>{J(()=>s(()=>nt(t.scope,n,e)))},xn={bind:ce,on:Xe,show:hn,text:et,html:mn,model:dn,effect:wn},An=(e,t,n)=>{let s=e.parentElement,o=new Comment("v-if");s.insertBefore(o,e);let i=[{exp:t,el:e}],r,c;for(;(r=e.nextElementSibling)&&(c=null,P(r,"v-else")===""||(c=P(r,"v-else-if")));)s.removeChild(r),i.push({exp:c,el:r});let l=e.nextSibling;s.removeChild(e);let a,u=-1,f=()=>{a&&(s.insertBefore(o,a.el),a.remove(),a=void 0)};return n.effect(()=>{for(let p=0;p<i.length;p++){let{exp:v,el:b}=i[p];if(!v||B(n.scope,v)){p!==u&&(f(),a=new Q(b,n),a.insert(s,o),s.removeChild(o),u=p);return}}u=-1,f()}),l},kn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Te=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,_n=/^\(|\)$/g,Sn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,Pn=(e,t,n)=>{let s=t.match(kn);if(!s)return;let o=e.nextSibling,i=e.parentElement,r=new Text("");i.insertBefore(r,e),i.removeChild(e);let c=s[2].trim(),l=s[1].trim().replace(_n,"").trim(),a,u=!1,f,p,v="key",b=e.getAttribute(v)||e.getAttribute(v=":key")||e.getAttribute(v="v-bind:key");b&&(e.removeAttribute(v),v==="key"&&(b=JSON.stringify(b)));let w;(w=l.match(Te))&&(l=l.replace(Te,"").trim(),f=w[1].trim(),w[2]&&(p=w[2].trim())),(w=l.match(Sn))&&(a=w[1].split(",").map(d=>d.trim()),u=l[0]==="[");let ve=!1,M,z,Y,pt=d=>{let x=new Map,h=[];if(y(d))for(let m=0;m<d.length;m++)h.push(Z(x,d[m],m));else if(typeof d=="number")for(let m=0;m<d;m++)h.push(Z(x,m+1,m));else if(E(d)){let m=0;for(let g in d)h.push(Z(x,d[g],m++,g))}return[h,x]},Z=(d,x,h,m)=>{let g={};a?a.forEach((O,k)=>g[O]=x[u?k:O]):g[l]=x,m?(f&&(g[f]=m),p&&(g[p]=h)):f&&(g[f]=h);let N=it(n,g),A=b?B(N.scope,b):h;return d.set(A,h),N.key=A,N},we=(d,x)=>{let h=new Q(e,d);return h.key=d.key,h.insert(i,x),h};return n.effect(()=>{let d=B(n.scope,c),x=Y;if([z,Y]=pt(d),!ve)M=z.map(h=>we(h,r)),ve=!0;else{for(let A=0;A<M.length;A++)Y.has(M[A].key)||M[A].remove();let h=[],m=z.length,g,N;for(;m--;){let A=z[m],O=x.get(A.key),k;O==null?k=we(A,g?g.el:r):(k=M[O],Object.assign(k.ctx.scope,A.scope),O!==m&&(M[O+1]!==g||N===g)&&(N=k,k.insert(i,g?g.el:r))),h.unshift(g=k)}M=h}}),o},st=({el:e,ctx:{scope:{$refs:t}},get:n,effect:s})=>{let o;return s(()=>{let i=n();t[i]=e,o&&i!==o&&delete t[o],o=i}),()=>{o&&delete t[o]}},En=/^(?:v-|:|@)/,$n=/\.([\w-]+)/g,ae=!1,ot=(e,t)=>{let n=e.nodeType;if(n===1){let s=e;if(s.hasAttribute("v-pre"))return;P(s,"v-cloak");let o;if(o=P(s,"v-if"))return An(s,o,t);if(o=P(s,"v-for"))return Pn(s,o,t);if((o=P(s,"v-scope"))||o===""){let c=o?B(t.scope,o):{};t=it(t,c),c.$template&&Mn(s,c.$template)}let i=P(s,"v-once")!=null;i&&(ae=!0),(o=P(s,"ref"))&&ue(s,st,`"${o}"`,t),Ne(s,t);let r=[];for(let{name:c,value:l}of[...s.attributes])En.test(c)&&c!=="v-cloak"&&(c==="v-model"?r.unshift([c,l]):c[0]==="@"||/^v-on\b/.test(c)?r.push([c,l]):je(s,c,l,t));for(let[c,l]of r)je(s,c,l,t);i&&(ae=!1)}else if(n===3){let s=e.data;if(s.includes(t.delimiters[0])){let o=[],i=0,r;for(;r=t.delimitersRE.exec(s);){let c=s.slice(i,r.index);c&&o.push(JSON.stringify(c)),o.push(`$s(${r[1]})`),i=r.index+r[0].length}i<s.length&&o.push(JSON.stringify(s.slice(i))),ue(e,et,o.join("+"),t)}}else n===11&&Ne(e,t)},Ne=(e,t)=>{let n=e.firstChild;for(;n;)n=ot(n,t)||n.nextSibling},je=(e,t,n,s)=>{let o,i,r;if(t=t.replace($n,(c,l)=>((r||(r={}))[l]=!0,"")),t[0]===":")o=ce,i=t.slice(1);else if(t[0]==="@")o=Xe,i=t.slice(1);else{let c=t.indexOf(":"),l=c>0?t.slice(2,c):t.slice(2);o=xn[l]||s.dirs[l],i=c>0?t.slice(c+1):void 0}o&&(o===ce&&i==="ref"&&(o=st),ue(e,o,n,s,i,r),e.removeAttribute(t))},ue=(e,t,n,s,o,i)=>{let r=t({el:e,get:(c=n)=>B(s.scope,c,e),effect:s.effect,ctx:s,exp:n,arg:o,modifiers:i});r&&s.cleanups.push(r)},Mn=(e,t)=>{if(t[0]==="#"){let n=document.querySelector(t);e.appendChild(n.content.cloneNode(!0));return}e.innerHTML=t},rt=e=>{let t=I(D({delimiters:["{{","}}"],delimitersRE:/\{\{([^]+?)\}\}/g},e),{scope:e?e.scope:W({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(ae)return Me(n),n;let s=Rt(n,{scheduler:()=>Me(s)});return t.effects.push(s),s}});return t},it=(e,t={})=>{let n=e.scope,s=Object.create(n);Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)),s.$refs=Object.create(n.$refs);let o=W(new Proxy(s,{set(i,r,c,l){return l===o&&!i.hasOwnProperty(r)?Reflect.set(n,r,c):Reflect.set(i,r,c,l)}}));return ct(o),I(D({},e),{scope:o})},ct=e=>{for(let t of Object.keys(e))typeof e[t]=="function"&&(e[t]=e[t].bind(e))},Q=class{constructor(t,n,s=!1){C(this,"template"),C(this,"ctx"),C(this,"key"),C(this,"parentCtx"),C(this,"isFragment"),C(this,"start"),C(this,"end"),this.isFragment=t instanceof HTMLTemplateElement,s?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),s?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=rt(n)),ot(this.template,this.ctx)}get el(){return this.start||this.template}insert(t,n=null){if(this.isFragment)if(this.start){let s=this.start,o;for(;s&&(o=s.nextSibling,t.insertBefore(s,n),s!==this.end);)s=o}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,n),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,n)}remove(){if(this.parentCtx&&Pt(this.parentCtx.blocks,this),this.start){let t=this.start.parentNode,n=this.start,s;for(;n&&(s=n.nextSibling,t.removeChild(n),n!==this.end);)n=s}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(Wt),this.ctx.cleanups.forEach(t=>t())}},qe=e=>e.replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),de=e=>{let t=rt();if(e&&(t.scope=W(e),ct(t.scope),e.$delimiters)){let[s,o]=t.delimiters=e.$delimiters;t.delimitersRE=new RegExp(qe(s)+"([^]+?)"+qe(o),"g")}t.scope.$s=tt,t.scope.$nextTick=J,t.scope.$refs=Object.create(null);let n;return{directive(s,o){return o?(t.dirs[s]=o,this):t.dirs[s]},mount(s){if(typeof s=="string"&&(s=document.querySelector(s),!s))return;s=s||document.documentElement;let o;return s.hasAttribute("v-scope")?o=[s]:o=[...s.querySelectorAll("[v-scope]")].filter(i=>!i.matches("[v-scope] [v-scope]")),o.length||(o=[s]),n=o.map(i=>new Q(i,t,!0)),this},unmount(){n.forEach(s=>s.teardown())}}},Re=document.currentScript;Re&&Re.hasAttribute("init")&&de().mount();async function ge(e){return e.isLoaded?!0:new Promise(t=>{e.addEventListener("DOMLoaded",()=>{t(!0)})})}async function ye(e){await Promise.all(e.map(ge))}var lt=W({scorePercentage:0,maxScorePercentage:100,i:0}),On=[{type:1,correctAnswer:0,question:"Which type of tools could help you the most by saving you cost and delivering you the most optimal results?",answers:["CDP","CRM","Product Analytics","Marketing Automation"]},{type:1,correctAnswer:2,question:"This tool helps collect and unify 1st party data, it\u2019s called a CDP but <u>what is a CDP?</u>",answers:["Customer Date Platform","Crisis Data Platform","Customer Data Platform","Critical Data Platform"]},{type:1,correctAnswer:3,question:"Which tool could help you drive optimal results with a lean cost?",subQuestion:`Now we\u2019re going cold and we\u2019re going top funnel. 
    You\u2019re tasked to get new <b>cold leads</b> for your organisation via <b>sending out emails</b> 
    to your target buyers and run ads in certain platform.`,answers:["Mailchimp","Hubspot Sales Hub","Salesforce Sales Cloud","Mailshake"]},{type:1,correctAnswer:0,question:"What is the data privacy law that governs Singapore's personal data protection?",answers:["CAN-SPAM Act","PDPA","GDPR","Murphy's Law"]},{type:1,correctAnswer:1,question:"Which one of these tools will help you the most without coding?",subQuestion:`<p>Now you\u2019ll need to put on your Product Marketing hat.</p><br/>
    You need to classify different types of user segments based on your form submission funnels via a user journey funnel data visualisation tool.`,answers:["Metabase","Heap","Google Analytics 4","Tableau","Segment"]},{type:1,correctAnswer:0,question:"Which of these tool will help you efficiently view your Marketing Data for free and without hassle on report building?",subQuestion:`<p><b>Now you\u2019ll need to put on your Analyst hat.</b></p><br/>
    You\u2019ve been running some Meta & Google search ads for the company to drive awareness and acquisition to your organisation\u2019s website.`,answers:["Snov.io","Google Data Studio","Pantone Notebook","Figma Jam"]},{type:1,correctAnswer:0,question:"Which of these tool will help you efficiently view your Marketing Data for free and without hassle on report building?",subQuestion:`<p><b>Now you\u2019ll need to put on your Analyst hat.</b></p><br/>
    You\u2019ve been running some Meta & Google search ads for the company to drive awareness and acquisition to your organisation\u2019s website.`,answers:["Snov.io","Google Data Studio","Pantone Notebook","Figma Jam"]}],at={possibleMaxScore:0,questions:On,finalVerdict:"CDP expert",animWrapper:null,animConfetti:null,showNotes:!1};function be(e){if(e>=0&&e<=60)return"a Noob";if(e>60&&e<=80)return"a decent Marketer";if(e>80)return"a Pro Marketer"}var ft,ut=(ft=window.Webflow)!=null?ft:[];ut.push(()=>{let e=I(D({store:lt},at),{async mounted(){let{lottie:t}=ut.require("lottie"),s=t.getRegisteredAnimations();await ye(s);let o=s.find(r=>{var c;return((c=r.wrapper)==null?void 0:c.id)==="confetti"});o.pause(),this.animWrapper=o.wrapper,this.animWrapper.style.display="none",this.animConfetti=o;let i=0;this.questions.forEach(r=>{(r.type===1||r.type===2)&&(i+=1),r.type===3&&(i+=4),r.type===4&&(i+=2)}),this.possibleMaxScore=i,this.mountQuestion(-1)},startQuiz(){this.showNotes=!0},reallyStartQuiz(){this.mountQuestion(0)},quizFinished(){be(this.store.scorePercentage)},mountQuestion(t){t>=this.questions.length&&this.quizFinished(),this.store.i=t},checkAnswer(t,n){let s=t.currentTarget,o=this.animWrapper,i=this.animConfetti,r=s.querySelector(".is-correct-icon");n===this.questions[this.store.i].correctAnswer?(r.style.display="block",r.classList.add("is-correct"),this.store.scorePercentage=this.store.scorePercentage+1/this.possibleMaxScore*100,o.style.display="block",i.goToAndPlay(0)):(s.classList.add("is-wrong"),s.querySelector(".is-wrong-icon").style.display="block"),setTimeout(()=>{this.mountQuestion(this.store.i+1);let c=document.querySelectorAll(".question-block");o.style.display="none",c.forEach(l=>{l.classList.remove("is-correct"),l.classList.remove("is-wrong"),l.querySelector(".is-correct-icon").style.display="none",l.querySelector(".is-wrong-icon").style.display="none"})},1e3)}});de(e).mount("#app")});})();

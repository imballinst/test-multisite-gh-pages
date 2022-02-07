var Xt=Object.defineProperty,zt=Object.defineProperties;var qt=Object.getOwnPropertyDescriptors;var ot=Object.getOwnPropertySymbols;var Gt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable;var nt=(t,e,o)=>e in t?Xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,oe=(t,e)=>{for(var o in e||(e={}))Gt.call(e,o)&&nt(t,o,e[o]);if(ot)for(var o of ot(e))Jt.call(e,o)&&nt(t,o,e[o]);return t},pe=(t,e)=>zt(t,qt(e));import{E as T,H as it,x as _,_ as Kt,j as q,a as Qt,I as Zt,e as We,z as _t,D as Re,J as fe,K as de,C as er}from"./vendor.e47ed5dd.js";var at=T.exports.createContext(),st=T.exports.createContext();function tr(t){var e=t.children,o=T.exports.useState(null),r=o[0],n=o[1],i=T.exports.useRef(!1);T.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=T.exports.useCallback(function(a){i.current||n(a)},[]);return T.exports.createElement(at.Provider,{value:r},T.exports.createElement(st.Provider,{value:s},e))}var lt=function(e){return Array.isArray(e)?e[0]:e},ut=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Le=function(e,o){if(typeof e=="function")return ut(e,o);e!=null&&(e.current=o)},ct=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},pt=typeof window!="undefined"&&window.document&&window.document.createElement?T.exports.useLayoutEffect:T.exports.useEffect,M="top",H="bottom",W="right",B="left",$e="auto",ve=[M,H,W,B],ne="start",he="end",rr="clippingParents",ft="viewport",ge="popper",or="reference",dt=ve.reduce(function(t,e){return t.concat([e+"-"+ne,e+"-"+he])},[]),vt=[].concat(ve,[$e]).reduce(function(t,e){return t.concat([e,e+"-"+ne,e+"-"+he])},[]),nr="beforeRead",ir="read",ar="afterRead",sr="beforeMain",lr="main",ur="afterMain",cr="beforeWrite",pr="write",fr="afterWrite",dr=[nr,ir,ar,sr,lr,ur,cr,pr,fr];function I(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ie(t){var e=N(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=N(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ht(t){if(typeof ShadowRoot=="undefined")return!1;var e=N(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function vr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!I(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function hr(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!L(n)||!I(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var gr={name:"applyStyles",enabled:!0,phase:"write",fn:vr,effect:hr,requires:["computeStyles"]};function U(t){return t.split("-")[0]}var ee=Math.max,Pe=Math.min,ae=Math.round;function se(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(L(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ae(o.width)/s||1),i>0&&(n=ae(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ne(t){var e=se(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function gt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&ht(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(t){return N(t).getComputedStyle(t)}function mr(t){return["table","td","th"].indexOf(I(t))>=0}function G(t){return((ie(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ee(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(ht(t)?t.host:null)||G(t)}function mt(t){return!L(t)||V(t).position==="fixed"?null:t.offsetParent}function yr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&L(t)){var r=V(t);if(r.position==="fixed")return null}for(var n=Ee(t);L(n)&&["html","body"].indexOf(I(n))<0;){var i=V(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function me(t){for(var e=N(t),o=mt(t);o&&mr(o)&&V(o).position==="static";)o=mt(o);return o&&(I(o)==="html"||I(o)==="body"&&V(o).position==="static")?e:o||yr(t)||e}function Ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ye(t,e,o){return ee(t,Pe(e,o))}function wr(t,e,o){var r=ye(t,e,o);return r>o?o:r}function yt(){return{top:0,right:0,bottom:0,left:0}}function wt(t){return Object.assign({},yt(),t)}function bt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var br=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,wt(typeof e!="number"?e:bt(e,ve))};function Or(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=U(o.placement),l=Ie(a),c=[B,W].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!s)){var d=br(n.padding,o),m=Ne(i),p=l==="y"?M:B,v=l==="y"?H:W,h=o.rects.reference[u]+o.rects.reference[l]-s[l]-o.rects.popper[u],g=s[l]-o.rects.reference[l],O=me(i),C=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],w=C-m[u]-d[v],b=C/2-m[u]/2+y,x=ye(f,b,w),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function xr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!gt(e.elements.popper,n)||(e.elements.arrow=n))}var Tr={name:"arrow",enabled:!0,phase:"main",fn:Or,effect:xr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function le(t){return t.split("-")[1]}var Cr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Rr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ae(e*n)/n||0,y:ae(o*n)/n||0}}function Ot(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof u=="function"?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),C=s.hasOwnProperty("y"),y=B,f=M,w=window;if(c){var b=me(o),x="clientHeight",R="clientWidth";if(b===N(o)&&(b=G(o),V(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===M||(n===B||n===W)&&i===he){f=H;var S=d&&w.visualViewport?w.visualViewport.height:b[x];h-=S-r.height,h*=l?1:-1}if(n===B||(n===M||n===H)&&i===he){y=W;var E=d&&w.visualViewport?w.visualViewport.width:b[R];p-=E-r.width,p*=l?1:-1}}var P=Object.assign({position:a},c&&Cr),j=u===!0?Rr({x:p,y:h}):{x:p,y:h};if(p=j.x,h=j.y,l){var A;return Object.assign({},P,(A={},A[f]=C?"0":"",A[y]=O?"0":"",A.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[f]=C?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function Pr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,c={placement:U(e.placement),variation:le(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ot(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ot(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Er={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Pr,data:{}},Se={passive:!0};function Sr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=N(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",o.update,Se)}),a&&l.addEventListener("resize",o.update,Se),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",o.update,Se)}),a&&l.removeEventListener("resize",o.update,Se)}}var Ar={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Sr,data:{}},kr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(t){return t.replace(/left|right|bottom|top/g,function(e){return kr[e]})}var jr={start:"end",end:"start"};function xt(t){return t.replace(/start|end/g,function(e){return jr[e]})}function Ue(t){var e=N(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Fe(t){return se(G(t)).left+Ue(t).scrollLeft}function Mr(t){var e=N(t),o=G(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Fe(t),y:a}}function Br(t){var e,o=G(t),r=Ue(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Fe(t),l=-r.scrollTop;return V(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ve(t){var e=V(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Tt(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:L(t)&&Ve(t)?t:Tt(Ee(t))}function we(t,e){var o;e===void 0&&(e=[]);var r=Tt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=N(r),s=n?[i].concat(i.visualViewport||[],Ve(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(we(Ee(s)))}function Ye(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Dr(t){var e=se(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Ct(t,e){return e===ft?Ye(Mr(t)):ie(e)?Dr(e):Ye(Br(G(t)))}function Hr(t){var e=we(Ee(t)),o=["absolute","fixed"].indexOf(V(t).position)>=0,r=o&&L(t)?me(t):t;return ie(r)?e.filter(function(n){return ie(n)&&gt(n,r)&&I(n)!=="body"}):[]}function Wr(t,e,o){var r=e==="clippingParents"?Hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var c=Ct(t,l);return a.top=ee(c.top,a.top),a.right=Pe(c.right,a.right),a.bottom=Pe(c.bottom,a.bottom),a.left=ee(c.left,a.left),a},Ct(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Rt(t){var e=t.reference,o=t.element,r=t.placement,n=r?U(r):null,i=r?le(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case M:l={x:s,y:e.y-o.height};break;case H:l={x:s,y:e.y+e.height};break;case W:l={x:e.x+e.width,y:a};break;case B:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var c=n?Ie(n):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case ne:l[c]=l[c]-(e[u]/2-o[u]/2);break;case he:l[c]=l[c]+(e[u]/2-o[u]/2);break}}return l}function be(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?rr:i,a=o.rootBoundary,l=a===void 0?ft:a,c=o.elementContext,u=c===void 0?ge:c,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=wt(typeof v!="number"?v:bt(v,ve)),g=u===ge?or:ge,O=t.rects.popper,C=t.elements[m?g:u],y=Wr(ie(C)?C:C.contextElement||G(t.elements.popper),s,l),f=se(t.elements.reference),w=Rt({reference:f,element:O,strategy:"absolute",placement:n}),b=Ye(Object.assign({},O,w)),x=u===ge?b:f,R={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},S=t.modifiersData.offset;if(u===ge&&S){var E=S[n];Object.keys(R).forEach(function(P){var j=[W,H].indexOf(P)>=0?1:-1,A=[M,H].indexOf(P)>=0?"y":"x";R[P]+=E[A]*j})}return R}function Lr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,c=l===void 0?vt:l,u=le(r),d=u?a?dt:dt.filter(function(v){return le(v)===u}):ve,m=d.filter(function(v){return c.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=be(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[U(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function $r(t){if(U(t)===$e)return[];var e=Ae(t);return[xt(t),e,xt(e)]}function Nr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,c=o.padding,u=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=U(g),C=O===g,y=l||(C||!v?[Ae(g)]:$r(g)),f=[g].concat(y).reduce(function(re,z){return re.concat(U(z)===$e?Lr(e,{placement:z,boundary:u,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:h}):z)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,S=f[0],E=0;E<f.length;E++){var P=f[E],j=U(P),A=le(P)===ne,Y=[M,H].indexOf(j)>=0,X=Y?"width":"height",k=be(e,{placement:P,boundary:u,rootBoundary:d,altBoundary:m,padding:c}),D=Y?A?W:B:A?H:M;w[X]>b[X]&&(D=Ae(D));var te=Ae(D),K=[];if(i&&K.push(k[j]<=0),a&&K.push(k[D]<=0,k[te]<=0),K.every(function(re){return re})){S=P,R=!1;break}x.set(P,K)}if(R)for(var Oe=v?3:1,Me=function(z){var ce=f.find(function(Te){var Q=x.get(Te);if(Q)return Q.slice(0,z).every(function(Be){return Be})});if(ce)return S=ce,"break"},ue=Oe;ue>0;ue--){var xe=Me(ue);if(xe==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var Ir={name:"flip",enabled:!0,phase:"main",fn:Nr,requiresIfExists:["offset"],data:{_skip:!1}};function Pt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function Et(t){return[M,W,H,B].some(function(e){return t[e]>=0})}function Ur(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=be(e,{elementContext:"reference"}),a=be(e,{altBoundary:!0}),l=Pt(s,r),c=Pt(a,n,i),u=Et(l),d=Et(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Fr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ur};function Vr(t,e,o){var r=U(t),n=[B,M].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[B,W].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Yr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=vt.reduce(function(u,d){return u[d]=Vr(d,e.rects,i),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}var Xr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yr};function zr(t){var e=t.state,o=t.name;e.modifiersData[o]=Rt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var qr={name:"popperOffsets",enabled:!0,phase:"read",fn:zr,data:{}};function Gr(t){return t==="x"?"y":"x"}function Jr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=be(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),O=U(e.placement),C=le(e.placement),y=!C,f=Ie(O),w=Gr(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,S=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,E=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(!!b){if(i){var A,Y=f==="y"?M:B,X=f==="y"?H:W,k=f==="y"?"height":"width",D=b[f],te=D+g[Y],K=D-g[X],Oe=p?-R[k]/2:0,Me=C===ne?x[k]:R[k],ue=C===ne?-R[k]:-x[k],xe=e.elements.arrow,re=p&&xe?Ne(xe):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:yt(),ce=z[Y],Te=z[X],Q=ye(0,x[k],re[k]),Be=y?x[k]/2-Oe-Q-ce-E.mainAxis:Me-Q-ce-E.mainAxis,Nt=y?-x[k]/2+Oe+Q+Te+E.mainAxis:ue+Q+Te+E.mainAxis,De=e.elements.arrow&&me(e.elements.arrow),It=De?f==="y"?De.clientTop||0:De.clientLeft||0:0,Ge=(A=P==null?void 0:P[f])!=null?A:0,Ut=D+Be-Ge-It,Ft=D+Nt-Ge,Je=ye(p?Pe(te,Ut):te,D,p?ee(K,Ft):K);b[f]=Je,j[f]=Je-D}if(a){var Ke,Vt=f==="x"?M:B,Yt=f==="x"?H:W,Z=b[w],Ce=w==="y"?"height":"width",Qe=Z+g[Vt],Ze=Z-g[Yt],He=[M,B].indexOf(O)!==-1,_e=(Ke=P==null?void 0:P[w])!=null?Ke:0,et=He?Qe:Z-x[Ce]-R[Ce]-_e+E.altAxis,tt=He?Z+x[Ce]+R[Ce]-_e-E.altAxis:Ze,rt=p&&He?wr(et,Z,tt):ye(p?et:Qe,Z,p?tt:Ze);b[w]=rt,j[w]=rt-Z}e.modifiersData[r]=j}}var Kr={name:"preventOverflow",enabled:!0,phase:"main",fn:Jr,requiresIfExists:["offset"]};function Qr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Zr(t){return t===N(t)||!L(t)?Ue(t):Qr(t)}function _r(t){var e=t.getBoundingClientRect(),o=ae(e.width)/t.offsetWidth||1,r=ae(e.height)/t.offsetHeight||1;return o!==1||r!==1}function eo(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&_r(e),i=G(e),s=se(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((I(e)!=="body"||Ve(i))&&(a=Zr(e)),L(e)?(l=se(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Fe(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function to(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function ro(t){var e=to(t);return dr.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function oo(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function no(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function At(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function io(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?St:n;return function(a,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:u,setOptions:function(O){var C=typeof O=="function"?O(u.options):O;h(),u.options=Object.assign({},i,u.options,C),u.scrollParents={reference:ie(a)?we(a):a.contextElement?we(a.contextElement):[],popper:we(l)};var y=ro(no([].concat(r,u.options.modifiers)));return u.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=u.elements,C=O.reference,y=O.popper;if(!!At(C,y)){u.rects={reference:eo(C,me(y),u.options.strategy==="fixed"),popper:Ne(y)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<u.orderedModifiers.length;f++){if(u.reset===!0){u.reset=!1,f=-1;continue}var w=u.orderedModifiers[f],b=w.fn,x=w.options,R=x===void 0?{}:x,S=w.name;typeof b=="function"&&(u=b({state:u,options:R,name:S,instance:p})||u)}}}},update:oo(function(){return new Promise(function(g){p.forceUpdate(),g(u)})}),destroy:function(){h(),m=!0}};if(!At(a,l))return p;p.setOptions(c).then(function(g){!m&&c.onFirstUpdate&&c.onFirstUpdate(g)});function v(){u.orderedModifiers.forEach(function(g){var O=g.name,C=g.options,y=C===void 0?{}:C,f=g.effect;if(typeof f=="function"){var w=f({state:u,name:O,instance:p,options:y}),b=function(){};d.push(w||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var ao=[Ar,qr,Er,gr,Xr,Ir,Kr,Tr,Fr],so=io({defaultModifiers:ao}),lo=typeof Element!="undefined",uo=typeof Map=="function",co=typeof Set=="function",po=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ke(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!=0;)if(!ke(t[r],e[r]))return!1;return!0}var i;if(uo&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!ke(r.value[1],e.get(r.value[0])))return!1;return!0}if(co&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(po&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!=0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!=0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(lo&&t instanceof Element)return!1;for(r=o;r--!=0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!ke(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var fo=function(e,o){try{return ke(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},vo=[],ho=function(e,o,r){r===void 0&&(r={});var n=T.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||vo},s=T.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],c=T.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:ct(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:ct(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),u=T.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return fo(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),d=T.exports.useRef();return pt(function(){d.current&&d.current.setOptions(u)},[u]),pt(function(){if(!(e==null||o==null)){var m=r.createPopper||so,p=m(e,o,u);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},go=function(){},mo=function(){return Promise.resolve(null)},yo=[];function wo(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?yo:i,a=t.referenceElement,l=t.onFirstUpdate,c=t.innerRef,u=t.children,d=T.exports.useContext(at),m=T.exports.useState(null),p=m[0],v=m[1],h=T.exports.useState(null),g=h[0],O=h[1];T.exports.useEffect(function(){Le(c,p)},[c,p]);var C=T.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=ho(a||d,p,C),f=y.state,w=y.styles,b=y.forceUpdate,x=y.update,R=T.exports.useMemo(function(){return{ref:v,style:w.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||go,update:x||mo}},[v,O,o,f,w,x,b]);return lt(u)(R)}function bo(t){var e=t.children,o=t.innerRef,r=T.exports.useContext(st),n=T.exports.useCallback(function(i){Le(o,i),ut(r,i)},[o,r]);return T.exports.useEffect(function(){return function(){return Le(o,null)}}),T.exports.useEffect(function(){},[r]),lt(e)({ref:n})}var kt=We.createContext({}),F=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},Oo=function(){},jt=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},xo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Mt=function(t){it(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,xo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),_({},a,{style:_({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("hover")&&{onMouseEnter:F(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:F(r.props.hideTooltip,a.onMouseLeave)},{style:_({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return q(kt.Provider,{value:this.contextValue,children:a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef})})},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Mt.contextType=kt;var To={childList:!0,subtree:!0},Bt=function(t){it(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,c=a.pageY;r.clearScheduled();var u={tooltipShown:!0};r.props.followCursor&&(u=_({},u,{pageX:l,pageY:c})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(u)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,c=a.pageY,u=r.getState()?"hideTooltip":"showTooltip";r[u]({pageX:l,pageY:c})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.getTriggerProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("click")&&{onClick:F(r.clickToggle,a.onClick),onTouchEnd:F(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:F(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&_({onMouseEnter:F(r.showTooltip,a.onMouseEnter),onMouseLeave:F(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:F(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:F(r.showTooltip,a.onFocus),onBlur:F(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,c=i.trigger,u=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,C=Kt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=q(wo,pe(oe({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(d)},C),{children:function(f){var w=f.ref,b=f.style,x=f.placement,R=f.arrowProps,S=f.isReferenceHidden,E=f.update;if(h&&n.popperOffset){var P=n.state,j=P.pageX,A=P.pageY,Y=n.popperOffset,X=Y.width,k=Y.height,D=j+X>window.pageXOffset+document.body.offsetWidth?j-X:j,te=A+k>window.pageYOffset+document.body.offsetHeight?A-k:A;b.transform="translate3d("+D+"px, "+te+"px, 0"}return q(Mt,{arrowProps:R,closeOnReferenceHidden:m,isReferenceHidden:S,placement:x,update:E,style:b,tooltip:a,trigger:c,mutationObserverOptions:O,clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w})}}));return Qt(tr,{children:[q(bo,{innerRef:u,children:function(f){var w=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}}),this.getState()&&(p?Zt.exports.createPortal(y,v):y)]})},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Bt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:Oo,placement:"right",portalContainer:jt()?document.body:null,trigger:"hover",usePortal:jt(),mutationObserverOptions:To,modifiers:[]};var Co=Bt;function je(){return je=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},je.apply(this,arguments)}function Ro(t,e){if(t==null)return{};var o=Po(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function Po(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var $=_t(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),J=8,Eo=Re.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat($("top",r,J*-1,"auto"),"px"),top:"".concat($("bottom",r,J*-1,"auto"),"px"),right:"".concat($("left",r,J*-1,"auto"),"px"),left:"".concat($("right",r,J*-1,"auto"),"px"),borderBottomWidth:"".concat($("top",r,"0",J),"px"),borderTopWidth:"".concat($("bottom",r,"0",J),"px"),borderRightWidth:"".concat($("left",r,"0",J),"px"),borderLeftWidth:"".concat($("right",r,"0",J),"px"),borderTopColor:$("top",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderBottomColor:$("bottom",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderLeftColor:$("left",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderRightColor:$("right",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent")}}),So=Re.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Xe=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,c=Ro(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return We.createElement(So,je({hasChrome:r,placement:o,ref:s},c,{color:l}),r&&We.createElement(Eo,je({placement:o,ref:a},i,{color:l})),n)};Xe.displayName="Tooltip";Xe.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Dt,Ht;function Ao(t,e){return Bo(t)||Mo(t,e)||jo(t,e)||ko()}function ko(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(t,e){if(!!t){if(typeof t=="string")return Wt(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Wt(t,e)}}function Wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function Mo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function Bo(t){if(Array.isArray(t))return t}function Lt(t,e){if(t==null)return{};var o=Do(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function Do(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function $t(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var ze=er.document,Ho=Re.div(Dt||(Dt=$t([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Wo=Re.g(Ht||(Ht=$t([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),qe=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,c=e.tooltipShown,u=e.onVisibilityChange,d=Lt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?Wo:Ho;return q(Co,{placement:n,trigger:r,modifiers:i,tooltipShown:c,onVisibilityChange:u,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,C=v.arrowRef,y=v.placement;return q(Xe,pe(oe({hasChrome:s,placement:y,tooltipRef:O,arrowRef:C,arrowProps:g()},h()),{children:typeof a=="function"?a({onHide:function(){return u(!1)}}):a}))},children:function(p){var v=p.getTriggerProps,h=p.triggerRef;return q(m,pe(oe(oe({ref:h},v()),d),{children:l}))}})};qe.displayName="WithTooltipPure";qe.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Lo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Lt(e,["startOpen","onVisibilityChange"]),i=T.exports.useState(o||!1),s=Ao(i,2),a=s[0],l=s[1],c=T.exports.useCallback(function(u){r&&r(u)===!1||l(u)},[r]);return T.exports.useEffect(function(){var u=function(){return c(!1)};ze.addEventListener("keydown",u,!1);var d=Array.from(ze.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",u),m.push(function(){try{p.contentWindow.document.removeEventListener("click",u)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){ze.removeEventListener("keydown",u),m.forEach(function(p){p()})}}),q(qe,pe(oe({},n),{tooltipShown:a,onVisibilityChange:c}))};Lo.displayName="WithToolTipState";export{Lo as WithToolTipState,Lo as WithTooltip,qe as WithTooltipPure};
//# sourceMappingURL=WithTooltip.539a52bb.js.map

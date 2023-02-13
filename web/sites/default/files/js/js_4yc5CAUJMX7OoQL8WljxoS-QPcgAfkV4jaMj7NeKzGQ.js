/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.13.6
//     https://underscorejs.org
//     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l="undefined"!=typeof DataView,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,y=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),b=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function j(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function w(n){return void 0===n}function A(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function x(n){var r="[object "+n+"]";return function(n){return a.call(n)===r}}var S=x("String"),O=x("Number"),M=x("Date"),E=x("RegExp"),B=x("Error"),N=x("Symbol"),I=x("ArrayBuffer"),T=x("Function"),k=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof k&&(T=function(n){return"function"==typeof n||!1});var D=T,R=x("Object"),F=l&&R(new DataView(new ArrayBuffer(8))),V="undefined"!=typeof Map&&R(new Map),P=x("DataView");var q=F?function(n){return null!=n&&D(n.getInt8)&&I(n.buffer)}:P,U=s||x("Array");function W(n,r){return null!=n&&f.call(n,r)}var z=x("Arguments");!function(){z(arguments)||(z=function(n){return W(n,"callee")})}();var L=z;function $(n){return O(n)&&y(n)}function C(n){return function(){return n}}function K(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function J(n){return function(r){return null==r?void 0:r[n]}}var G=J("byteLength"),H=K(G),Q=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var X=c?function(n){return h?h(n)&&!q(n):H(n)&&Q.test(a.call(n))}:C(!1),Y=J("length");function Z(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return!0===r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=b.length,u=n.constructor,o=D(u)&&u.prototype||e,i="constructor";for(W(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=b[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function nn(n){if(!_(n))return[];if(p)return p(n);var r=[];for(var t in n)W(n,t)&&r.push(t);return g&&Z(n,r),r}function rn(n,r){var t=nn(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function en(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}tn.VERSION=n,tn.prototype.value=function(){return this._wrapped},tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value,tn.prototype.toString=function(){return String(this._wrapped)};var un="[object DataView]";function on(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof tn&&(r=r._wrapped);t instanceof tn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;if(F&&"[object Object]"==i&&q(r)){if(!q(t))return!1;i=un}switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":case un:return n(en(r),en(t),e,o)}var f="[object Array]"===i;if(!f&&X(r)){if(G(r)!==G(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;f=!0}if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var c=r.constructor,l=t.constructor;if(c!==l&&!(D(c)&&c instanceof c&&D(l)&&l instanceof l)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var s=(e=e||[]).length;for(;s--;)if(e[s]===r)return o[s]===t;if(e.push(r),o.push(t),f){if((s=r.length)!==t.length)return!1;for(;s--;)if(!on(r[s],t[s],e,o))return!1}else{var p,v=nn(r);if(s=v.length,nn(t).length!==s)return!1;for(;s--;)if(p=v[s],!W(t,p)||!on(r[p],t[p],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function an(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Z(n,r),r}function fn(n){var r=Y(n);return function(t){if(null==t)return!1;var e=an(t);if(Y(e))return!1;for(var u=0;u<r;u++)if(!D(t[n[u]]))return!1;return n!==hn||!D(t[cn])}}var cn="forEach",ln="has",sn=["clear","delete"],pn=["get",ln,"set"],vn=sn.concat(cn,pn),hn=sn.concat(pn),yn=["add"].concat(sn,cn,ln),dn=V?fn(vn):x("Map"),gn=V?fn(hn):x("WeakMap"),bn=V?fn(yn):x("Set"),mn=x("WeakSet");function jn(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function _n(n){for(var r={},t=nn(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function wn(n){var r=[];for(var t in n)D(n[t])&&r.push(t);return r.sort()}function An(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,f=0;f<a;f++){var c=i[f];r&&void 0!==t[c]||(t[c]=o[c])}return t}}var xn=An(an),Sn=An(nn),On=An(an,!0);function Mn(n){if(!_(n))return{};if(v)return v(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function En(n){return U(n)?n:[n]}function Bn(n){return tn.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){var e=Nn(n,Bn(r));return w(e)?t:e}function Tn(n){return n}function kn(n){return n=Sn({},n),function(r){return rn(r,n)}}function Dn(n){return n=Bn(n),function(r){return Nn(r,n)}}function Rn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function Fn(n,r,t){return null==n?Tn:D(n)?Rn(n,r,t):_(n)&&!U(n)?kn(n):Dn(n)}function Vn(n,r){return Fn(n,r,1/0)}function Pn(n,r,t){return tn.iteratee!==Vn?tn.iteratee(n,r):Fn(n,r,t)}function qn(){}function Un(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}tn.toPath=En,tn.iteratee=Vn;var Wn=Date.now||function(){return(new Date).getTime()};function zn(n){var r=function(r){return n[r]},t="(?:"+nn(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},$n=zn(Ln),Cn=zn(_n(Ln)),Kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Jn=/(.)^/,Gn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Hn=/\\|'|\r|\n|\u2028|\u2029/g;function Qn(n){return"\\"+Gn[n]}var Xn=/^\s*(\w|\$)+\s*$/;var Yn=0;function Zn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=Mn(n.prototype),i=n.apply(o,u);return _(i)?i:o}var nr=j((function(n,r){var t=nr.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return Zn(n,e,this,this,i)};return e}));nr.placeholder=tn;var rr=j((function(n,r,t){if(!D(n))throw new TypeError("Bind must be called on a function");var e=j((function(u){return Zn(n,e,r,this,t.concat(u))}));return e})),tr=K(Y);function er(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=Y(n);o<i;o++){var a=n[o];if(tr(a)&&(U(a)||L(a)))if(r>1)er(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var ur=j((function(n,r){var t=(r=er(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=rr(n[e],n)}return n}));var or=j((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),ir=nr(or,tn,1);function ar(n){return function(){return!n.apply(this,arguments)}}function fr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var cr=nr(fr,2);function lr(n,r,t){r=Pn(r,t);for(var e,u=nn(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function sr(n){return function(r,t,e){t=Pn(t,e);for(var u=Y(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var pr=sr(1),vr=sr(-1);function hr(n,r,t,e){for(var u=(t=Pn(t,e,1))(r),o=0,i=Y(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function yr(n,r,t){return function(e,u,o){var a=0,f=Y(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+f,a):f=o>=0?Math.min(o+1,f):o+f+1;else if(t&&o&&f)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,f),$))>=0?o+a:-1;for(o=n>0?a:f-1;o>=0&&o<f;o+=n)if(e[o]===u)return o;return-1}}var dr=yr(1,pr,hr),gr=yr(-1,vr);function br(n,r,t){var e=(tr(n)?pr:lr)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function mr(n,r,t){var e,u;if(r=Rn(r,t),tr(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=nn(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function jr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function _r(n){var r=function(r,t,e,u){var o=!tr(r)&&nn(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var f=o?o[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,Rn(t,u,4),e,o)}}var wr=_r(1),Ar=_r(-1);function xr(n,r,t){var e=[];return r=Pn(r,t),mr(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function Sr(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function Or(n,r,t){r=Pn(r,t);for(var e=!tr(n)&&nn(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function Mr(n,r,t,e){return tr(n)||(n=jn(n)),("number"!=typeof t||e)&&(t=0),dr(n,r,t)>=0}var Er=j((function(n,r,t){var e,u;return D(r)?u=r:(r=Bn(r),e=r.slice(0,-1),r=r[r.length-1]),jr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=Nn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function Br(n,r){return jr(n,Dn(r))}function Nr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e>o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}var Ir=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Tr(n){return n?U(n)?i.call(n):S(n)?n.match(Ir):tr(n)?jr(n,Tn):jn(n):[]}function kr(n,r,t){if(null==r||t)return tr(n)||(n=jn(n)),n[Un(n.length-1)];var e=Tr(n),u=Y(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=Un(i,o),f=e[i];e[i]=e[a],e[a]=f}return e.slice(0,r)}function Dr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=Pn(e,u),mr(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var Rr=Dr((function(n,r,t){W(n,t)?n[t].push(r):n[t]=[r]})),Fr=Dr((function(n,r,t){n[t]=r})),Vr=Dr((function(n,r,t){W(n,t)?n[t]++:n[t]=1})),Pr=Dr((function(n,r,t){n[t?0:1].push(r)}),!0);function qr(n,r,t){return r in t}var Ur=j((function(n,r){var t={},e=r[0];if(null==n)return t;D(e)?(r.length>1&&(e=Rn(e,r[1])),r=an(n)):(e=qr,r=er(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),Wr=j((function(n,r){var t,e=r[0];return D(e)?(e=ar(e),r.length>1&&(t=r[1])):(r=jr(er(r,!1,!1),String),e=function(n,t){return!Mr(r,t)}),Ur(n,e,t)}));function zr(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Lr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:zr(n,n.length-r)}function $r(n,r,t){return i.call(n,null==r||t?1:r)}var Cr=j((function(n,r){return r=er(r,!0,!0),xr(n,(function(n){return!Mr(r,n)}))})),Kr=j((function(n,r){return Cr(n,r)}));function Jr(n,r,t,e){A(r)||(e=t,t=r,r=!1),null!=t&&(t=Pn(t,e));for(var u=[],o=[],i=0,a=Y(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?Mr(o,c)||(o.push(c),u.push(f)):Mr(u,f)||u.push(f)}return u}var Gr=j((function(n){return Jr(er(n,!0,!0))}));function Hr(n){for(var r=n&&Nr(n,Y).length||0,t=Array(r),e=0;e<r;e++)t[e]=Br(n,e);return t}var Qr=j(Hr);function Xr(n,r){return n._chain?tn(r).chain():r}function Yr(n){return mr(wn(n),(function(r){var t=tn[r]=n[r];tn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Xr(this,t.apply(tn,n))}})),tn}mr(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];tn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Xr(this,t)}})),mr(["concat","join","slice"],(function(n){var r=t[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Xr(this,n)}}));var Zr=Yr({__proto__:null,VERSION:n,restArguments:j,isObject:_,isNull:function(n){return null===n},isUndefined:w,isBoolean:A,isElement:function(n){return!(!n||1!==n.nodeType)},isString:S,isNumber:O,isDate:M,isRegExp:E,isError:B,isSymbol:N,isArrayBuffer:I,isDataView:q,isArray:U,isFunction:D,isArguments:L,isFinite:function(n){return!N(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:$,isTypedArray:X,isEmpty:function(n){if(null==n)return!0;var r=Y(n);return"number"==typeof r&&(U(n)||S(n)||L(n))?0===r:0===Y(nn(n))},isMatch:rn,isEqual:function(n,r){return on(n,r)},isMap:dn,isWeakMap:gn,isSet:bn,isWeakSet:mn,keys:nn,allKeys:an,values:jn,pairs:function(n){for(var r=nn(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:_n,functions:wn,methods:wn,extend:xn,extendOwn:Sn,assign:Sn,defaults:On,create:function(n,r){var t=Mn(n);return r&&Sn(t,r),t},clone:function(n){return _(n)?U(n)?n.slice():xn({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=Bn(r)).length,e=0;e<t;e++){var u=r[e];if(!W(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=Pn(r,t);for(var e=nn(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:C,noop:qn,toPath:En,property:Dn,propertyOf:function(n){return null==n?qn:function(r){return In(n,r)}},matcher:kn,matches:kn,times:function(n,r,t){var e=Array(Math.max(0,n));r=Rn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Un,now:Wn,escape:$n,unescape:Cn,templateSettings:Kn,template:function(n,r,t){!r&&t&&(r=t),r=On({},r,tn.templateSettings);var e=RegExp([(r.escape||Jn).source,(r.interpolate||Jn).source,(r.evaluate||Jn).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,(function(r,t,e,i,a){return o+=n.slice(u,a).replace(Hn,Qn),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r})),o+="';\n";var i,a=r.variable;if(a){if(!Xn.test(a))throw new Error("variable is not a bare identifier: "+a)}else o="with(obj||{}){\n"+o+"}\n",a="obj";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(a,"_",o)}catch(n){throw n.source=o,n}var f=function(n){return i.call(this,n,tn)};return f.source="function("+a+"){\n"+o+"}",f},result:function(n,r,t){var e=(r=Bn(r)).length;if(!e)return D(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=D(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Yn+"";return n?n+r:r},chain:function(n){var r=tn(n);return r._chain=!0,r},iteratee:Vn,partial:nr,bind:rr,bindAll:ur,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return W(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:or,defer:ir,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var f=function(){a=!1===t.leading?0:Wn(),e=null,i=n.apply(u,o),e||(u=o=null)},c=function(){var c=Wn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(f,l)),i};return c.cancel=function(){clearTimeout(e),a=0,e=u=o=null},c},debounce:function(n,r,t){var e,u,o,i,a,f=function(){var c=Wn()-u;r>c?e=setTimeout(f,r-c):(e=null,t||(i=n.apply(a,o)),e||(o=a=null))},c=j((function(c){return a=this,o=c,u=Wn(),e||(e=setTimeout(f,r),t&&(i=n.apply(a,o))),i}));return c.cancel=function(){clearTimeout(e),e=o=a=null},c},wrap:function(n,r){return nr(r,n)},negate:ar,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:fr,once:cr,findKey:lr,findIndex:pr,findLastIndex:vr,sortedIndex:hr,indexOf:dr,lastIndexOf:gr,find:br,detect:br,findWhere:function(n,r){return br(n,kn(r))},each:mr,forEach:mr,map:jr,collect:jr,reduce:wr,foldl:wr,inject:wr,reduceRight:Ar,foldr:Ar,filter:xr,select:xr,reject:function(n,r,t){return xr(n,ar(Pn(r)),t)},every:Sr,all:Sr,some:Or,any:Or,contains:Mr,includes:Mr,include:Mr,invoke:Er,pluck:Br,where:function(n,r){return xr(n,kn(r))},max:Nr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=tr(n)?n:jn(n)).length;a<f;a++)null!=(e=n[a])&&e<o&&(o=e);else r=Pn(r,t),mr(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return kr(n,1/0)},sample:kr,sortBy:function(n,r,t){var e=0;return r=Pn(r,t),Br(jr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:Rr,indexBy:Fr,countBy:Vr,partition:Pr,toArray:Tr,size:function(n){return null==n?0:tr(n)?n.length:nn(n).length},pick:Ur,omit:Wr,first:Lr,head:Lr,take:Lr,initial:zr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:$r(n,Math.max(0,n.length-r))},rest:$r,tail:$r,drop:$r,compact:function(n){return xr(n,Boolean)},flatten:function(n,r){return er(n,r,!1)},without:Kr,uniq:Jr,unique:Jr,union:Gr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Y(n);e<u;e++){var o=n[e];if(!Mr(r,o)){var i;for(i=1;i<t&&Mr(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Cr,unzip:Hr,transpose:Hr,zip:Qr,object:function(n,r){for(var t={},e=0,u=Y(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:Yr,default:tn});return Zr._=Zr,Zr}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        return true;
      }
      k += 1;
    }
    return false;
  };
};
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(r){var n=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(t,e,i){n.Backbone=r(n,i,t,e)})}else if(typeof exports!=="undefined"){var t=require("underscore"),e;try{e=require("jquery")}catch(t){}r(n,exports,t,e)}else{n.Backbone=r(n,{},n._,n.jQuery||n.Zepto||n.ender||n.$)}})(function(t,h,x,e){var i=t.Backbone;var a=Array.prototype.slice;h.VERSION="1.4.1";h.$=e;h.noConflict=function(){t.Backbone=i;return this};h.emulateHTTP=false;h.emulateJSON=false;var r=h.Events={};var o=/\s+/;var l;var u=function(t,e,i,r,n){var s=0,a;if(i&&typeof i==="object"){if(r!==void 0&&"context"in n&&n.context===void 0)n.context=r;for(a=x.keys(i);s<a.length;s++){e=u(t,e,a[s],i[a[s]],n)}}else if(i&&o.test(i)){for(a=i.split(o);s<a.length;s++){e=t(e,a[s],r,n)}}else{e=t(e,i,r,n)}return e};r.on=function(t,e,i){this._events=u(n,this._events||{},t,e,{context:i,ctx:this,listening:l});if(l){var r=this._listeners||(this._listeners={});r[l.id]=l;l.interop=false}return this};r.listenTo=function(t,e,i){if(!t)return this;var r=t._listenId||(t._listenId=x.uniqueId("l"));var n=this._listeningTo||(this._listeningTo={});var s=l=n[r];if(!s){this._listenId||(this._listenId=x.uniqueId("l"));s=l=n[r]=new p(this,t)}var a=c(t,e,i,this);l=void 0;if(a)throw a;if(s.interop)s.on(e,i);return this};var n=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,r){try{t.on(e,i,r)}catch(t){return t}};r.off=function(t,e,i){if(!this._events)return this;this._events=u(s,this._events,t,e,{context:i,listeners:this._listeners});return this};r.stopListening=function(t,e,i){var r=this._listeningTo;if(!r)return this;var n=t?[t._listenId]:x.keys(r);for(var s=0;s<n.length;s++){var a=r[n[s]];if(!a)break;a.obj.off(e,i,this);if(a.interop)a.off(e,i)}if(x.isEmpty(r))this._listeningTo=void 0;return this};var s=function(t,e,i,r){if(!t)return;var n=r.context,s=r.listeners;var a=0,o;if(!e&&!n&&!i){for(o=x.keys(s);a<o.length;a++){s[o[a]].cleanup()}return}o=e?[e]:x.keys(t);for(;a<o.length;a++){e=o[a];var h=t[e];if(!h)break;var l=[];for(var u=0;u<h.length;u++){var c=h[u];if(i&&i!==c.callback&&i!==c.callback._callback||n&&n!==c.context){l.push(c)}else{var f=c.listening;if(f)f.off(e,i)}}if(l.length){t[e]=l}else{delete t[e]}}return t};r.once=function(t,e,i){var r=u(f,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(r,e,i)};r.listenToOnce=function(t,e,i){var r=u(f,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,r)};var f=function(t,e,i,r){if(i){var n=t[e]=x.once(function(){r(e,n);i.apply(this,arguments)});n._callback=i}return t};r.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];u(d,this._events,t,void 0,i);return this};var d=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)v(n,r);if(s)v(s,[e].concat(r))}return t};var v=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};var p=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};p.prototype.on=r.on;p.prototype.off=function(t,e){var i;if(this.interop){this._events=u(s,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};p.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};r.bind=r.on;r.unbind=r.off;x.extend(h,r);var g=h.Model=function(t,e){var i=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=x.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};var r=x.result(this,"defaults");i=x.defaults(x.extend({},r,i),r);this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};x.extend(g.prototype,r,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return x.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return x.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!x.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(t==null)return this;var r;if(typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i||(i={});if(!this._validate(r,i))return false;var n=i.unset;var s=i.silent;var a=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=x.clone(this.attributes);this.changed={}}var h=this.attributes;var l=this.changed;var u=this._previousAttributes;for(var c in r){e=r[c];if(!x.isEqual(h[c],e))a.push(c);if(!x.isEqual(u[c],e)){l[c]=e}else{delete l[c]}n?delete h[c]:h[c]=e}if(this.idAttribute in r){var f=this.id;this.id=this.get(this.idAttribute);this.trigger("changeId",this,f,i)}if(!s){if(a.length)this._pending=i;for(var d=0;d<a.length;d++){this.trigger("change:"+a[d],this,h[a[d]],i)}}if(o)return this;if(!s){while(this._pending){i=this._pending;this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,x.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,x.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!x.isEmpty(this.changed);return x.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?x.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var i={};var r;for(var n in t){var s=t[n];if(x.isEqual(e[n],s))continue;i[n]=s;r=true}return r?i:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return x.clone(this._previousAttributes)},fetch:function(i){i=x.extend({parse:true},i);var r=this;var n=i.success;i.success=function(t){var e=i.parse?r.parse(t,i):t;if(!r.set(e,i))return false;if(n)n.call(i.context,r,t,i);r.trigger("sync",r,t,i)};G(this,i);return this.sync("read",this,i)},save:function(t,e,i){var r;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=x.extend({validate:true,parse:true},i);var n=i.wait;if(r&&!n){if(!this.set(r,i))return false}else if(!this._validate(r,i)){return false}var s=this;var a=i.success;var o=this.attributes;i.success=function(t){s.attributes=o;var e=i.parse?s.parse(t,i):t;if(n)e=x.extend({},r,e);if(e&&!s.set(e,i))return false;if(a)a.call(i.context,s,t,i);s.trigger("sync",s,t,i)};G(this,i);if(r&&n)this.attributes=x.extend({},o,r);var h=this.isNew()?"create":i.patch?"patch":"update";if(h==="patch"&&!i.attrs)i.attrs=r;var l=this.sync(h,this,i);this.attributes=o;return l},destroy:function(e){e=e?x.clone(e):{};var i=this;var r=e.success;var n=e.wait;var s=function(){i.stopListening();i.trigger("destroy",i,i.collection,e)};e.success=function(t){if(n)s();if(r)r.call(e.context,i,t,e);if(!i.isNew())i.trigger("sync",i,t,e)};var t=false;if(this.isNew()){x.defer(e.success)}else{G(this,e);t=this.sync("delete",this,e)}if(!n)s();return t},url:function(){var t=x.result(this,"urlRoot")||x.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},x.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=x.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,x.extend(e,{validationError:i}));return false}});var m=h.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,x.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var _={add:true,remove:false};var E=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};x.extend(m.prototype,r,{model:g,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,x.extend({merge:false},e,_))},remove:function(t,e){e=x.extend({},e);var i=!x.isArray(t);t=i?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return i?r[0]:r},set:function(t,e){if(t==null)return;e=x.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var i=!x.isArray(t);t=i?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var n=[];var s=[];var a=[];var o=[];var h={};var l=e.add;var u=e.merge;var c=e.remove;var f=false;var d=this.comparator&&r==null&&e.sort!==false;var v=x.isString(this.comparator)?this.comparator:null;var p,g;for(g=0;g<t.length;g++){p=t[g];var m=this.get(p);if(m){if(u&&p!==m){var _=this._isModel(p)?p.attributes:p;if(e.parse)_=m.parse(_,e);m.set(_,e);a.push(m);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;n.push(m)}t[g]=m}else if(l){p=t[g]=this._prepareModel(p,e);if(p){s.push(p);this._addReference(p,e);h[p.cid]=true;n.push(p)}}}if(c){for(g=0;g<this.length;g++){p=this.models[g];if(!h[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&l&&c;if(n.length&&b){y=this.length!==n.length||x.some(this.models,function(t,e){return t!==n[e]});this.models.length=0;E(this.models,n,0);this.length=this.models.length}else if(s.length){if(d)f=true;E(this.models,s,r==null?this.length:r);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(g=0;g<s.length;g++){if(r!=null)e.index=r+g;p=s[g];p.trigger("add",p,this,e)}if(f||y)this.trigger("sort",this,e);if(s.length||o.length||a.length){e.changes={added:s,removed:o,merged:a};this.trigger("update",this,e)}}return i?t[0]:t},reset:function(t,e){e=e?x.clone(e):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],e)}e.previousModels=this.models;this._reset();t=this.add(t,x.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,x.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,x.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return a.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var i=e.length;if(x.isFunction(e))e=e.bind(this);if(i===1||x.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(i){i=x.extend({parse:true},i);var r=i.success;var n=this;i.success=function(t){var e=i.reset?"reset":"set";n[e](t,i);if(r)r.call(i.context,n,t,i);n.trigger("sync",n,t,i)};G(this,i);return this.sync("read",this,i)},create:function(t,e){e=e?x.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new b(this,I)},keys:function(){return new b(this,k)},entries:function(){return new b(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?x.clone(e):{};e.collection=this;var i;if(this.model.prototype){i=new this.model(t,e)}else{i=this.model(t,e)}if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes,n.idAttribute);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof g},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="changeId"){var n=this.modelId(e.previousAttributes(),e.idAttribute);var s=this.modelId(e.attributes,e.idAttribute);if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var y=typeof Symbol==="function"&&Symbol.iterator;if(y){m.prototype[y]=m.prototype.values}var b=function(t,e){this._collection=t;this._kind=e;this._index=0};var I=1;var k=2;var S=3;if(y){b.prototype[y]=function(){return this}}b.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===I){e=t}else{var i=this._collection.modelId(t.attributes,t.idAttribute);if(this._kind===k){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var A=h.View=function(t){this.cid=x.uniqueId("view");this.preinitialize.apply(this,arguments);x.extend(this,x.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];x.extend(A.prototype,r,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=x.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!x.isFunction(i))i=this[i];if(!i)continue;var r=e.match(T);this.delegate(r[1],r[2],i.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=x.extend({},x.result(this,"attributes"));if(this.id)t.id=x.result(this,"id");if(this.className)t["class"]=x.result(this,"className");this.setElement(this._createElement(x.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(x.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var H=function(r,t,n,s){switch(t){case 1:return function(){return r[n](this[s])};case 2:return function(t){return r[n](this[s],t)};case 3:return function(t,e){return r[n](this[s],C(t,this),e)};case 4:return function(t,e,i){return r[n](this[s],C(t,this),e,i)};default:return function(){var t=a.call(arguments);t.unshift(this[s]);return r[n].apply(r,t)}}};var $=function(i,r,t,n){x.each(t,function(t,e){if(r[e])i.prototype[e]=H(r,t,e,n)})};var C=function(e,t){if(x.isFunction(e))return e;if(x.isObject(e)&&!t._isModel(e))return R(e);if(x.isString(e))return function(t){return t.get(e)};return e};var R=function(t){var e=x.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};x.each([[m,M,"models"],[g,N,"attributes"]],function(t){var i=t[0],e=t[1],r=t[2];i.mixin=function(t){var e=x.reduce(x.functions(t),function(t,e){t[e]=0;return t},{});$(i,t,e,r)};$(i,x,e,r)});h.sync=function(t,e,r){var i=j[t];x.defaults(r||(r={}),{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON});var n={type:i,dataType:"json"};if(!r.url){n.url=x.result(e,"url")||V()}if(r.data==null&&e&&(t==="create"||t==="update"||t==="patch")){n.contentType="application/json";n.data=JSON.stringify(r.attrs||e.toJSON(r))}if(r.emulateJSON){n.contentType="application/x-www-form-urlencoded";n.data=n.data?{model:n.data}:{}}if(r.emulateHTTP&&(i==="PUT"||i==="DELETE"||i==="PATCH")){n.type="POST";if(r.emulateJSON)n.data._method=i;var s=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",i);if(s)return s.apply(this,arguments)}}if(n.type!=="GET"&&!r.emulateJSON){n.processData=false}var a=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(a)a.call(r.context,t,e,i)};var o=r.xhr=h.ajax(x.extend(n,r));e.trigger("request",e,o,r);return o};var j={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};h.ajax=function(){return h.$.ajax.apply(h.$,arguments)};var O=h.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;x.extend(O.prototype,r,{preinitialize:function(){},initialize:function(){},route:function(i,r,n){if(!x.isRegExp(i))i=this._routeToRegExp(i);if(x.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;h.history.route(i,function(t){var e=s._extractParameters(i,t);if(s.execute(n,e,r)!==false){s.trigger.apply(s,["route:"+r].concat(e));s.trigger("route",r,e);h.history.trigger("route",s,r,e)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,e){h.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=x.result(this,"routes");var t,e=x.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return x.map(i,function(t,e){if(e===i.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=h.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;x.extend(B.prototype,r,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=x.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var i=document.body;var r=i.insertBefore(this.iframe,i.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var n=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){n("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){n("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(e){if(!this.matchRoot())return false;e=this.fragment=this.getFragment(e);return x.some(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=t.replace(W,"");var n=this.decodeFragment(t);if(this.fragment===n)return;this.fragment=n;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});h.history=new B;var D=function(t,e){var i=this;var r;if(t&&x.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}x.extend(r,i,e);r.prototype=x.create(i.prototype,t);r.prototype.constructor=r;r.__super__=i.prototype;return r};g.extend=m.extend=O.extend=A.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(e,i){var r=i.error;i.error=function(t){if(r)r.call(i.context,e,t,i);e.trigger("error",e,t,i)}};return h});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }
  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');
    if ($contextuals.length <= 1) {
      return;
    }
    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }
  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var title = '';
    var $regionHeading = $region.find('h2');
    if ($regionHeading.length) {
      title = $regionHeading[0].textContent.trim();
    }
    var model = new contextual.StateModel({
      title: title
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', Drupal.deprecatedProperty({
      target: {
        $el: $contextual,
        $region: $region,
        model: model
      },
      deprecatedProperty: 'model',
      message: 'The model property is deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no replacement.'
    }));
    adjustIfNestedAndOverlapping($contextual);
  }
  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $(once('contextual-render', '[data-contextual-id]', context));
      if ($placeholders.length === 0) {
        return;
      }
      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));
        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }
        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });
      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);
              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));
                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });
  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var _this = this;
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      var $trigger = this.$el.find('.trigger');
      $trigger.each(function (index, element) {
        element.textContent = Drupal.t('@action @title configuration options', {
          '@action': !isOpen ? _this.options.strings.open : _this.options.strings.close,
          '@title': _this.model.get('title')
        });
      }).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var touchStart = false;
      return {
        touchstart: function touchstart() {
          touchStart = true;
        },
        mouseenter: function mouseenter() {
          if (!touchStart) {
            this.model.set('regionIsHovered', true);
          }
        },
        mouseleave: function mouseleave() {
          if (!touchStart) {
            this.model.close().blur().set('regionIsHovered', false);
          }
        },
        mousemove: function mousemove() {
          touchStart = false;
        }
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      var touchStart = false;
      return {
        touchstart: function touchstart() {
          touchStart = true;
        },
        mouseenter: function mouseenter() {
          if (!touchStart) {
            this.model.focus();
          }
        },
        mousemove: function mousemove() {
          touchStart = false;
        },
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);
      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }
      return this;
    }
  });
})(Drupal, Backbone);;
/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,i=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},a=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},l=function e(t,o,i){for(var a=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,i);i.flatten?a.push.apply(a,d):a.push({scope:u,candidates:d})}else{r.call(u,n)&&i.filter(u)&&(o||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(u),s=!i.shadowRootFilter||i.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,i);i.flatten?a.push.apply(a,p):a.push({scope:u,candidates:p})}else l.unshift.apply(l,u.children)}}return a},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||i(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var a=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(a,"details:not([open]) *"))return!0;var l=i(e).host,u=(null==l?void 0:l.ownerDocument.contains(l))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var c=e;e;){var d=e.parentElement,f=i(e);if(d&&!d.shadowRoot&&!0===o(d))return s(e);e=e.assignedSlot?e.assignedSlot:d||f===e.ownerDocument?d:f.host}e=c}if(u)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(f(t)||u(t)<0||!p(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},m=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a(e,t.includeContainer,p.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,m)&&p(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&h(t,e)},e.tabbable=function(e,t){return function e(t){var n=[],o=[];return t.forEach((function(t,r){var i=!!t.scope,a=i?t.scope:t,l=u(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):o.push({documentOrder:r,tabIndex:l,item:t,isScope:i,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)}((t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):a(e,t.includeContainer,h.bind(null,t)))},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('.vertical-tabs__pane').each(function (index, pane) {
      $(pane).data('verticalTab').focus();
    });
  };
  Drupal.behaviors.verticalTabs = {
    attach: function attach(context) {
      var width = drupalSettings.widthBreakpoint || 640;
      var mq = "(max-width: ".concat(width, "px)");
      if (window.matchMedia(mq).matches) {
        return;
      }
      $(once('vertical-tabs-fragments', 'body')).on('formFragmentLinkClickOrHashChange.verticalTabs', handleFragmentLinkClickOrHashChange);
      once('vertical-tabs', '[data-vertical-tabs-panes]', context).forEach(function (verticalTab) {
        var $this = $(verticalTab).addClass('vertical-tabs__panes');
        var focusID = $this.find(':hidden.vertical-tabs__active-tab')[0].value;
        var tabFocus;
        var $details = $this.find('> details');
        if ($details.length === 0) {
          return;
        }
        var tabList = $('<ul class="vertical-tabs__menu"></ul>');
        $this.wrap('<div class="vertical-tabs clearfix"></div>').before(tabList);
        $details.each(function () {
          var $that = $(this);
          var $summary = $that.find('> summary');
          var verticalTab = new Drupal.verticalTab({
            title: $summary.length ? $summary[0].textContent : '',
            details: $that
          });
          tabList.append(verticalTab.item);
          $that.removeClass('collapsed').removeAttr('open').addClass('vertical-tabs__pane').data('verticalTab', verticalTab);
          if (this.id === focusID) {
            tabFocus = $that;
          }
        });
        $(tabList).find('> li').eq(0).addClass('first');
        $(tabList).find('> li').eq(-1).addClass('last');
        if (!tabFocus) {
          var $locationHash = $this.find(window.location.hash);
          if (window.location.hash && $locationHash.length) {
            tabFocus = $locationHash.closest('.vertical-tabs__pane');
          } else {
            tabFocus = $this.find('> .vertical-tabs__pane').eq(0);
          }
        }
        if (tabFocus.length) {
          tabFocus.data('verticalTab').focus();
        }
      });
    }
  };
  Drupal.verticalTab = function (settings) {
    var self = this;
    $.extend(this, settings, Drupal.theme('verticalTab', settings));
    this.link.attr('href', "#".concat(settings.details.attr('id')));
    this.link.on('click', function (e) {
      e.preventDefault();
      self.focus();
    });
    this.link.on('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        self.focus();
        $('.vertical-tabs__pane :input:visible:enabled').eq(0).trigger('focus');
      }
    });
    this.details.on('summaryUpdated', function () {
      self.updateSummary();
    }).trigger('summaryUpdated');
  };
  Drupal.verticalTab.prototype = {
    focus: function focus() {
      this.details.siblings('.vertical-tabs__pane').each(function () {
        var tab = $(this).data('verticalTab');
        tab.details.hide();
        tab.details.removeAttr('open');
        tab.item.removeClass('is-selected');
      }).end().show().siblings(':hidden.vertical-tabs__active-tab')[0].value = this.details.attr('id');
      this.details.attr('open', true);
      this.item.addClass('is-selected');
      $('#active-vertical-tab').remove();
      this.link.append("<span id=\"active-vertical-tab\" class=\"visually-hidden\">".concat(Drupal.t('(active tab)'), "</span>"));
    },
    updateSummary: function updateSummary() {
      this.summary.html(this.details.drupalGetSummary());
    },
    tabShow: function tabShow() {
      this.item.show();
      this.item.closest('.js-form-type-vertical-tabs').show();
      this.item.parent().children('.vertical-tabs__menu-item').removeClass('first').filter(':visible').eq(0).addClass('first');
      this.details.removeClass('vertical-tab--hidden').show();
      this.focus();
      return this;
    },
    tabHide: function tabHide() {
      this.item.hide();
      this.item.parent().children('.vertical-tabs__menu-item').removeClass('first').filter(':visible').eq(0).addClass('first');
      this.details.addClass('vertical-tab--hidden').hide().removeAttr('open');
      var $firstTab = this.details.siblings('.vertical-tabs__pane:not(.vertical-tab--hidden)').eq(0);
      if ($firstTab.length) {
        $firstTab.data('verticalTab').focus();
      } else {
        this.item.closest('.js-form-type-vertical-tabs').hide();
      }
      return this;
    }
  };
  Drupal.theme.verticalTab = function (settings) {
    var tab = {};
    tab.title = $('<strong class="vertical-tabs__menu-item-title"></strong>');
    tab.title[0].textContent = settings.title;
    tab.item = $('<li class="vertical-tabs__menu-item" tabindex="-1"></li>').append(tab.link = $('<a href="#"></a>').append(tab.title).append(tab.summary = $('<span class="vertical-tabs__menu-item-summary"></span>')));
    return tab;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function ($, Drupal, drupalSettings) {
  var showWeight = JSON.parse(localStorage.getItem('Drupal.tableDrag.showWeight'));
  Drupal.behaviors.tableDrag = {
    attach: function attach(context, settings) {
      function initTableDrag(table, base) {
        if (table.length) {
          Drupal.tableDrag[base] = new Drupal.tableDrag(table[0], settings.tableDrag[base]);
        }
      }
      Object.keys(settings.tableDrag || {}).forEach(function (base) {
        initTableDrag($(once('tabledrag', "#".concat(base), context)), base);
      });
    }
  };
  Drupal.tableDrag = function (table, tableSettings) {
    var _this = this;
    var self = this;
    var $table = $(table);
    this.$table = $(table);
    this.table = table;
    this.tableSettings = tableSettings;
    this.dragObject = null;
    this.rowObject = null;
    this.oldRowElement = null;
    this.oldY = null;
    this.changed = false;
    this.maxDepth = 0;
    this.rtl = $(this.table).css('direction') === 'rtl' ? -1 : 1;
    this.striping = $(this.table).data('striping') === 1;
    this.scrollSettings = {
      amount: 4,
      interval: 50,
      trigger: 70
    };
    this.scrollInterval = null;
    this.scrollY = 0;
    this.windowHeight = 0;
    this.$toggleWeightButton = null;
    this.indentEnabled = false;
    Object.keys(tableSettings || {}).forEach(function (group) {
      Object.keys(tableSettings[group] || {}).forEach(function (n) {
        if (tableSettings[group][n].relationship === 'parent') {
          _this.indentEnabled = true;
        }
        if (tableSettings[group][n].limit > 0) {
          _this.maxDepth = tableSettings[group][n].limit;
        }
      });
    });
    if (this.indentEnabled) {
      this.indentCount = 1;
      var indent = Drupal.theme('tableDragIndentation');
      var testRow = $('<tr></tr>').addClass('draggable').appendTo(table);
      var testCell = $('<td></td>').appendTo(testRow).prepend(indent).prepend(indent);
      var $indentation = testCell.find('.js-indentation');
      this.indentAmount = $indentation.get(1).offsetLeft - $indentation.get(0).offsetLeft;
      testRow.remove();
    }
    $table.find('> tr.draggable, > tbody > tr.draggable').each(function () {
      self.makeDraggable(this);
    });
    var $toggleWeightWrapper = $(Drupal.theme('tableDragToggle'));
    this.$toggleWeightButton = $toggleWeightWrapper.find('[data-drupal-selector="tabledrag-toggle-weight"]');
    this.$toggleWeightButton.on('click', $.proxy(function (e) {
      e.preventDefault();
      this.toggleColumns();
    }, this));
    $table.before($toggleWeightWrapper);
    self.initColumns();
    $(document).on('touchmove', function (event) {
      return self.dragRow(event.originalEvent.touches[0], self);
    });
    $(document).on('touchend', function (event) {
      return self.dropRow(event.originalEvent.touches[0], self);
    });
    $(document).on('mousemove pointermove', function (event) {
      return self.dragRow(event, self);
    });
    $(document).on('mouseup pointerup', function (event) {
      return self.dropRow(event, self);
    });
    $(window).on('storage', $.proxy(function (e) {
      if (e.originalEvent.key === 'Drupal.tableDrag.showWeight') {
        showWeight = JSON.parse(e.originalEvent.newValue);
        this.displayColumns(showWeight);
      }
    }, this));
  };
  Drupal.tableDrag.prototype.initColumns = function () {
    var _this2 = this;
    var $table = this.$table;
    var hidden;
    var cell;
    var columnIndex;
    Object.keys(this.tableSettings || {}).forEach(function (group) {
      Object.keys(_this2.tableSettings[group]).some(function (tableSetting) {
        var field = $table.find(".".concat(_this2.tableSettings[group][tableSetting].target)).eq(0);
        if (field.length && _this2.tableSettings[group][tableSetting].hidden) {
          hidden = _this2.tableSettings[group][tableSetting].hidden;
          cell = field.closest('td');
          return true;
        }
        return false;
      });
      if (hidden && cell[0]) {
        columnIndex = cell.parent().find('> td').index(cell.get(0)) + 1;
        $table.find('> thead > tr, > tbody > tr, > tr').each(_this2.addColspanClass(columnIndex));
      }
    });
    this.displayColumns(showWeight);
  };
  Drupal.tableDrag.prototype.addColspanClass = function (columnIndex) {
    return function () {
      var $row = $(this);
      var index = columnIndex;
      var cells = $row.children();
      var cell;
      cells.each(function (n) {
        if (n < index && this.colSpan && this.colSpan > 1) {
          index -= this.colSpan - 1;
        }
      });
      if (index > 0) {
        cell = cells.filter(":nth-child(".concat(index, ")"));
        if (cell[0].colSpan && cell[0].colSpan > 1) {
          cell.addClass('tabledrag-has-colspan');
        } else {
          cell.addClass('tabledrag-hide');
        }
      }
    };
  };
  Drupal.tableDrag.prototype.displayColumns = function (displayWeight) {
    if (displayWeight) {
      this.showColumns();
    } else {
      this.hideColumns();
    }
    this.$toggleWeightButton.html(Drupal.theme('toggleButtonContent', displayWeight));
    $(once.filter('tabledrag', 'table')).trigger('columnschange', !!displayWeight);
  };
  Drupal.tableDrag.prototype.toggleColumns = function () {
    showWeight = !showWeight;
    this.displayColumns(showWeight);
    if (showWeight) {
      localStorage.setItem('Drupal.tableDrag.showWeight', showWeight);
    } else {
      localStorage.removeItem('Drupal.tableDrag.showWeight');
    }
  };
  Drupal.tableDrag.prototype.hideColumns = function () {
    var $tables = $(once.filter('tabledrag', 'table'));
    $tables.find('.tabledrag-hide').css('display', 'none');
    $tables.find('.tabledrag-handle').css('display', '');
    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan -= 1;
    });
  };
  Drupal.tableDrag.prototype.showColumns = function () {
    var $tables = $(once.filter('tabledrag', 'table'));
    $tables.find('.tabledrag-hide').css('display', '');
    $tables.find('.tabledrag-handle').css('display', 'none');
    $tables.find('.tabledrag-has-colspan').each(function () {
      this.colSpan += 1;
    });
  };
  Drupal.tableDrag.prototype.rowSettings = function (group, row) {
    var field = $(row).find(".".concat(group));
    var tableSettingsGroup = this.tableSettings[group];
    return Object.keys(tableSettingsGroup).map(function (delta) {
      var targetClass = tableSettingsGroup[delta].target;
      var rowSettings;
      if (field.is(".".concat(targetClass))) {
        rowSettings = {};
        Object.keys(tableSettingsGroup[delta]).forEach(function (n) {
          rowSettings[n] = tableSettingsGroup[delta][n];
        });
      }
      return rowSettings;
    }).filter(function (rowSetting) {
      return rowSetting;
    })[0];
  };
  Drupal.tableDrag.prototype.makeDraggable = function (item) {
    var self = this;
    var $item = $(item);
    $item.find('td:first-of-type').find('a').addClass('menu-item__link');
    var $handle = $(Drupal.theme('tableDragHandle'));
    var $indentationLast = $item.find('td:first-of-type').find('.js-indentation').eq(-1);
    if ($indentationLast.length) {
      $indentationLast.after($handle);
      self.indentCount = Math.max($item.find('.js-indentation').length, self.indentCount);
    } else {
      $item.find('td').eq(0).prepend($handle);
    }
    $handle.on('mousedown touchstart pointerdown', function (event) {
      event.preventDefault();
      if (event.originalEvent.type === 'touchstart') {
        event = event.originalEvent.touches[0];
      }
      self.dragStart(event, self, item);
    });
    $handle.on('click', function (e) {
      e.preventDefault();
    });
    $handle.on('focus', function () {
      self.safeBlur = true;
    });
    $handle.on('blur', function (event) {
      if (self.rowObject && self.safeBlur) {
        self.dropRow(event, self);
      }
    });
    $handle.on('keydown', function (event) {
      if (event.keyCode !== 9 && !self.rowObject) {
        self.rowObject = new self.row(item, 'keyboard', self.indentEnabled, self.maxDepth, true);
      }
      var keyChange = false;
      var groupHeight;
      switch (event.keyCode) {
        case 37:
        case 63234:
          keyChange = true;
          self.rowObject.indent(-1 * self.rtl);
          break;
        case 38:
        case 63232:
          {
            var $previousRow = $(self.rowObject.element).prev('tr').eq(0);
            var previousRow = $previousRow.get(0);
            while (previousRow && $previousRow.is(':hidden')) {
              $previousRow = $(previousRow).prev('tr').eq(0);
              previousRow = $previousRow.get(0);
            }
            if (previousRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'up';
              keyChange = true;
              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                while (previousRow && $previousRow.find('.js-indentation').length) {
                  $previousRow = $(previousRow).prev('tr').eq(0);
                  previousRow = $previousRow.get(0);
                  groupHeight += $previousRow.is(':hidden') ? 0 : previousRow.offsetHeight;
                }
                if (previousRow) {
                  self.rowObject.swap('before', previousRow);
                  window.scrollBy(0, -groupHeight);
                }
              } else if (self.table.tBodies[0].rows[0] !== previousRow || $previousRow.is('.draggable')) {
                self.rowObject.swap('before', previousRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, -parseInt(item.offsetHeight, 10));
              }
              $handle.trigger('focus');
            }
            break;
          }
        case 39:
        case 63235:
          keyChange = true;
          self.rowObject.indent(self.rtl);
          break;
        case 40:
        case 63233:
          {
            var $nextRow = $(self.rowObject.group).eq(-1).next('tr').eq(0);
            var nextRow = $nextRow.get(0);
            while (nextRow && $nextRow.is(':hidden')) {
              $nextRow = $(nextRow).next('tr').eq(0);
              nextRow = $nextRow.get(0);
            }
            if (nextRow) {
              self.safeBlur = false;
              self.rowObject.direction = 'down';
              keyChange = true;
              if ($(item).is('.tabledrag-root')) {
                groupHeight = 0;
                var nextGroup = new self.row(nextRow, 'keyboard', self.indentEnabled, self.maxDepth, false);
                if (nextGroup) {
                  $(nextGroup.group).each(function () {
                    groupHeight += $(this).is(':hidden') ? 0 : this.offsetHeight;
                  });
                  var nextGroupRow = $(nextGroup.group).eq(-1).get(0);
                  self.rowObject.swap('after', nextGroupRow);
                  window.scrollBy(0, parseInt(groupHeight, 10));
                }
              } else {
                self.rowObject.swap('after', nextRow);
                self.rowObject.interval = null;
                self.rowObject.indent(0);
                window.scrollBy(0, parseInt(item.offsetHeight, 10));
              }
              $handle.trigger('focus');
            }
            break;
          }
      }
      if (self.rowObject && self.rowObject.changed === true) {
        $(item).addClass('drag');
        if (self.oldRowElement) {
          $(self.oldRowElement).removeClass('drag-previous');
        }
        self.oldRowElement = item;
        if (self.striping === true) {
          self.restripeTable();
        }
        self.onDrag();
      }
      if (keyChange) {
        return false;
      }
    });
    $handle.on('keypress', function (event) {
      switch (event.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          return false;
      }
    });
  };
  Drupal.tableDrag.prototype.dragStart = function (event, self, item) {
    self.dragObject = {};
    self.dragObject.initOffset = self.getPointerOffset(item, event);
    self.dragObject.initPointerCoords = self.pointerCoords(event);
    if (self.indentEnabled) {
      self.dragObject.indentPointerPos = self.dragObject.initPointerCoords;
    }
    if (self.rowObject) {
      $(self.rowObject.element).find('a.tabledrag-handle').trigger('blur');
    }
    self.rowObject = new self.row(item, 'pointer', self.indentEnabled, self.maxDepth, true);
    self.table.topY = $(self.table).offset().top;
    self.table.bottomY = self.table.topY + self.table.offsetHeight;
    $(item).addClass('drag');
    $('body').addClass('drag');
    if (self.oldRowElement) {
      $(self.oldRowElement).removeClass('drag-previous');
    }
    self.oldY = self.pointerCoords(event).y;
  };
  Drupal.tableDrag.prototype.dragRow = function (event, self) {
    if (self.dragObject) {
      self.currentPointerCoords = self.pointerCoords(event);
      var y = self.currentPointerCoords.y - self.dragObject.initOffset.y;
      var x = self.currentPointerCoords.x - self.dragObject.initOffset.x;
      if (y !== self.oldY) {
        self.rowObject.direction = y > self.oldY ? 'down' : 'up';
        self.oldY = y;
        var scrollAmount = self.checkScroll(self.currentPointerCoords.y);
        clearInterval(self.scrollInterval);
        if (scrollAmount > 0 && self.rowObject.direction === 'down' || scrollAmount < 0 && self.rowObject.direction === 'up') {
          self.setScroll(scrollAmount);
        }
        var currentRow = self.findDropTargetRow(x, y);
        if (currentRow) {
          if (self.rowObject.direction === 'down') {
            self.rowObject.swap('after', currentRow, self);
          } else {
            self.rowObject.swap('before', currentRow, self);
          }
          if (self.striping === true) {
            self.restripeTable();
          }
        }
      }
      if (self.indentEnabled) {
        var xDiff = self.currentPointerCoords.x - self.dragObject.indentPointerPos.x;
        var indentDiff = Math.round(xDiff / self.indentAmount);
        var indentChange = self.rowObject.indent(indentDiff);
        self.dragObject.indentPointerPos.x += self.indentAmount * indentChange * self.rtl;
        self.indentCount = Math.max(self.indentCount, self.rowObject.indents);
      }
      return false;
    }
  };
  Drupal.tableDrag.prototype.dropRow = function (event, self) {
    var droppedRow;
    var $droppedRow;
    if (self.rowObject !== null) {
      droppedRow = self.rowObject.element;
      $droppedRow = $(droppedRow);
      if (self.rowObject.changed === true) {
        self.updateFields(droppedRow);
        Object.keys(self.tableSettings || {}).forEach(function (group) {
          var rowSettings = self.rowSettings(group, droppedRow);
          if (rowSettings.relationship === 'group') {
            Object.keys(self.rowObject.children || {}).forEach(function (n) {
              self.updateField(self.rowObject.children[n], group);
            });
          }
        });
        self.rowObject.markChanged();
        if (self.changed === false) {
          $(Drupal.theme('tableDragChangedWarning')).insertBefore(self.table).hide().fadeIn('slow');
          self.changed = true;
        }
      }
      if (self.indentEnabled) {
        self.rowObject.removeIndentClasses();
      }
      if (self.oldRowElement) {
        $(self.oldRowElement).removeClass('drag-previous');
      }
      $droppedRow.removeClass('drag').addClass('drag-previous');
      self.oldRowElement = droppedRow;
      self.onDrop();
      self.rowObject = null;
    }
    if (self.dragObject !== null) {
      self.dragObject = null;
      $('body').removeClass('drag');
      clearInterval(self.scrollInterval);
    }
  };
  Drupal.tableDrag.prototype.pointerCoords = function (event) {
    if (event.pageX || event.pageY) {
      return {
        x: event.pageX,
        y: event.pageY
      };
    }
    return {
      x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
      y: event.clientY + document.body.scrollTop - document.body.clientTop
    };
  };
  Drupal.tableDrag.prototype.getPointerOffset = function (target, event) {
    var docPos = $(target).offset();
    var pointerPos = this.pointerCoords(event);
    return {
      x: pointerPos.x - docPos.left,
      y: pointerPos.y - docPos.top
    };
  };
  Drupal.tableDrag.prototype.findDropTargetRow = function (x, y) {
    var _this3 = this;
    var rows = $(this.table.tBodies[0].rows).not(':hidden');
    var _loop = function _loop(n) {
      var row = rows[n];
      var $row = $(row);
      var rowY = $row.offset().top;
      var rowHeight = void 0;
      if (row.offsetHeight === 0) {
        rowHeight = parseInt(row.firstChild.offsetHeight, 10) / 2;
      } else {
        rowHeight = parseInt(row.offsetHeight, 10) / 2;
      }
      if (y > rowY - rowHeight && y < rowY + rowHeight) {
        if (_this3.indentEnabled) {
          if (Object.keys(_this3.rowObject.group).some(function (o) {
            return _this3.rowObject.group[o] === row;
          })) {
            return {
              v: null
            };
          }
        } else if (row === _this3.rowObject.element) {
          return {
            v: null
          };
        }
        if (!_this3.rowObject.isValidSwap(row)) {
          return {
            v: null
          };
        }
        while ($row.is(':hidden') && $row.prev('tr').is(':hidden')) {
          $row = $row.prev('tr:first-of-type');
          row = $row.get(0);
        }
        return {
          v: row
        };
      }
    };
    for (var n = 0; n < rows.length; n++) {
      var _ret = _loop(n);
      if (_typeof(_ret) === "object") return _ret.v;
    }
    return null;
  };
  Drupal.tableDrag.prototype.updateFields = function (changedRow) {
    var _this4 = this;
    Object.keys(this.tableSettings || {}).forEach(function (group) {
      _this4.updateField(changedRow, group);
    });
  };
  Drupal.tableDrag.prototype.updateField = function (changedRow, group) {
    var rowSettings = this.rowSettings(group, changedRow);
    var $changedRow = $(changedRow);
    var sourceRow;
    var $previousRow;
    var previousRow;
    var useSibling;
    if (rowSettings.relationship === 'self' || rowSettings.relationship === 'group') {
      sourceRow = changedRow;
    } else if (rowSettings.relationship === 'sibling') {
      $previousRow = $changedRow.prev('tr:first-of-type');
      previousRow = $previousRow.get(0);
      var $nextRow = $changedRow.next('tr:first-of-type');
      var nextRow = $nextRow.get(0);
      sourceRow = changedRow;
      if ($previousRow.is('.draggable') && $previousRow.find(".".concat(group)).length) {
        if (this.indentEnabled) {
          if ($previousRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
            sourceRow = previousRow;
          }
        } else {
          sourceRow = previousRow;
        }
      } else if ($nextRow.is('.draggable') && $nextRow.find(".".concat(group)).length) {
        if (this.indentEnabled) {
          if ($nextRow.find('.js-indentations').length === $changedRow.find('.js-indentations').length) {
            sourceRow = nextRow;
          }
        } else {
          sourceRow = nextRow;
        }
      }
    } else if (rowSettings.relationship === 'parent') {
      $previousRow = $changedRow.prev('tr');
      previousRow = $previousRow;
      while ($previousRow.length && $previousRow.find('.js-indentation').length >= this.rowObject.indents) {
        $previousRow = $previousRow.prev('tr');
        previousRow = $previousRow;
      }
      if ($previousRow.length) {
        sourceRow = $previousRow.get(0);
      } else {
        sourceRow = $(this.table).find('tr.draggable:first-of-type').get(0);
        if (sourceRow === this.rowObject.element) {
          sourceRow = $(this.rowObject.group[this.rowObject.group.length - 1]).next('tr.draggable').get(0);
        }
        useSibling = true;
      }
    }
    this.copyDragClasses(sourceRow, changedRow, group);
    rowSettings = this.rowSettings(group, changedRow);
    if (useSibling) {
      rowSettings.relationship = 'sibling';
      rowSettings.source = rowSettings.target;
    }
    var targetClass = ".".concat(rowSettings.target);
    var targetElement = $changedRow.find(targetClass).get(0);
    if (targetElement) {
      var sourceClass = ".".concat(rowSettings.source);
      var sourceElement = $(sourceClass, sourceRow).get(0);
      switch (rowSettings.action) {
        case 'depth':
          targetElement.value = $(sourceElement).closest('tr').find('.js-indentation').length;
          break;
        case 'match':
          targetElement.value = sourceElement.value;
          break;
        case 'order':
          {
            var siblings = this.rowObject.findSiblings(rowSettings);
            if ($(targetElement).is('select')) {
              var values = [];
              $(targetElement).find('option').each(function () {
                values.push(this.value);
              });
              var maxVal = values[values.length - 1];
              $(siblings).find(targetClass).each(function () {
                if (values.length > 0) {
                  this.value = values.shift();
                } else {
                  this.value = maxVal;
                }
              });
            } else {
              var weight = 0;
              var $siblingTarget = $(siblings[0]).find(targetClass);
              if ($siblingTarget.length) {
                weight = parseInt($siblingTarget[0].value, 10) || 0;
              }
              $(siblings).find(targetClass).each(function () {
                this.value = weight;
                weight++;
              });
            }
            break;
          }
      }
    }
  };
  Drupal.tableDrag.prototype.copyDragClasses = function (sourceRow, targetRow, group) {
    var sourceElement = $(sourceRow).find(".".concat(group));
    var targetElement = $(targetRow).find(".".concat(group));
    if (sourceElement.length && targetElement.length) {
      targetElement[0].className = sourceElement[0].className;
    }
  };
  Drupal.tableDrag.prototype.checkScroll = function (cursorY) {
    var de = document.documentElement;
    var b = document.body;
    var windowHeight = window.innerHeight || (de.clientHeight && de.clientWidth !== 0 ? de.clientHeight : b.offsetHeight);
    this.windowHeight = windowHeight;
    var scrollY;
    if (document.all) {
      scrollY = !de.scrollTop ? b.scrollTop : de.scrollTop;
    } else {
      scrollY = window.pageYOffset ? window.pageYOffset : window.scrollY;
    }
    this.scrollY = scrollY;
    var trigger = this.scrollSettings.trigger;
    var delta = 0;
    if (cursorY - scrollY > windowHeight - trigger) {
      delta = trigger / (windowHeight + scrollY - cursorY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return delta * this.scrollSettings.amount;
    }
    if (cursorY - scrollY < trigger) {
      delta = trigger / (cursorY - scrollY);
      delta = delta > 0 && delta < trigger ? delta : trigger;
      return -delta * this.scrollSettings.amount;
    }
  };
  Drupal.tableDrag.prototype.setScroll = function (scrollAmount) {
    var self = this;
    this.scrollInterval = setInterval(function () {
      self.checkScroll(self.currentPointerCoords.y);
      var aboveTable = self.scrollY > self.table.topY;
      var belowTable = self.scrollY + self.windowHeight < self.table.bottomY;
      if (scrollAmount > 0 && belowTable || scrollAmount < 0 && aboveTable) {
        window.scrollBy(0, scrollAmount);
      }
    }, this.scrollSettings.interval);
  };
  Drupal.tableDrag.prototype.restripeTable = function () {
    $(this.table).find('> tbody > tr.draggable, > tr.draggable').filter(':visible').filter(':odd').removeClass('odd').addClass('even').end().filter(':even').removeClass('even').addClass('odd');
  };
  Drupal.tableDrag.prototype.onDrag = function () {
    return null;
  };
  Drupal.tableDrag.prototype.onDrop = function () {
    return null;
  };
  Drupal.tableDrag.prototype.row = function (tableRow, method, indentEnabled, maxDepth, addClasses) {
    var $tableRow = $(tableRow);
    this.element = tableRow;
    this.method = method;
    this.group = [tableRow];
    this.groupDepth = $tableRow.find('.js-indentation').length;
    this.changed = false;
    this.table = $tableRow.closest('table')[0];
    this.indentEnabled = indentEnabled;
    this.maxDepth = maxDepth;
    this.direction = '';
    if (this.indentEnabled) {
      this.indents = $tableRow.find('.js-indentation').length;
      this.children = this.findChildren(addClasses);
      this.group = this.group.concat(this.children);
      for (var n = 0; n < this.group.length; n++) {
        this.groupDepth = Math.max($(this.group[n]).find('.js-indentation').length, this.groupDepth);
      }
    }
  };
  Drupal.tableDrag.prototype.row.prototype.findChildren = function (addClasses) {
    var parentIndentation = this.indents;
    var currentRow = $(this.element, this.table).next('tr.draggable');
    var rows = [];
    var child = 0;
    function rowIndentation(indentNum, el) {
      var self = $(el);
      if (child === 1 && indentNum === parentIndentation) {
        self.addClass('tree-child-first');
      }
      if (indentNum === parentIndentation) {
        self.addClass('tree-child');
      } else if (indentNum > parentIndentation) {
        self.addClass('tree-child-horizontal');
      }
    }
    while (currentRow.length) {
      if (currentRow.find('.js-indentation').length > parentIndentation) {
        child++;
        rows.push(currentRow[0]);
        if (addClasses) {
          currentRow.find('.js-indentation').each(rowIndentation);
        }
      } else {
        break;
      }
      currentRow = currentRow.next('tr.draggable');
    }
    if (addClasses && rows.length) {
      $(rows[rows.length - 1]).find(".js-indentation:nth-child(".concat(parentIndentation + 1, ")")).addClass('tree-child-last');
    }
    return rows;
  };
  Drupal.tableDrag.prototype.row.prototype.isValidSwap = function (row) {
    var $row = $(row);
    if (this.indentEnabled) {
      var prevRow;
      var nextRow;
      if (this.direction === 'down') {
        prevRow = row;
        nextRow = $row.next('tr').get(0);
      } else {
        prevRow = $row.prev('tr').get(0);
        nextRow = row;
      }
      this.interval = this.validIndentInterval(prevRow, nextRow);
      if (this.interval.min > this.interval.max) {
        return false;
      }
    }
    if (this.table.tBodies[0].rows[0] === row && $row.is(':not(.draggable)')) {
      return false;
    }
    return true;
  };
  Drupal.tableDrag.prototype.row.prototype.swap = function (position, row) {
    this.group.forEach(function (row) {
      Drupal.detachBehaviors(row, drupalSettings, 'move');
    });
    $(row)[position](this.group);
    this.group.forEach(function (row) {
      Drupal.attachBehaviors(row, drupalSettings);
    });
    this.changed = true;
    this.onSwap(row);
  };
  Drupal.tableDrag.prototype.row.prototype.validIndentInterval = function (prevRow, nextRow) {
    var $prevRow = $(prevRow);
    var maxIndent;
    var minIndent = nextRow ? $(nextRow).find('.js-indentation').length : 0;
    if (!prevRow || $prevRow.is(':not(.draggable)') || $(this.element).is('.tabledrag-root')) {
      maxIndent = 0;
    } else {
      maxIndent = $prevRow.find('.js-indentation').length + ($prevRow.is('.tabledrag-leaf') ? 0 : 1);
      if (this.maxDepth) {
        maxIndent = Math.min(maxIndent, this.maxDepth - (this.groupDepth - this.indents));
      }
    }
    return {
      min: minIndent,
      max: maxIndent
    };
  };
  Drupal.tableDrag.prototype.row.prototype.indent = function (indentDiff) {
    var $group = $(this.group);
    if (!this.interval) {
      var prevRow = $(this.element).prev('tr').get(0);
      var nextRow = $group.eq(-1).next('tr').get(0);
      this.interval = this.validIndentInterval(prevRow, nextRow);
    }
    var indent = this.indents + indentDiff;
    indent = Math.max(indent, this.interval.min);
    indent = Math.min(indent, this.interval.max);
    indentDiff = indent - this.indents;
    for (var n = 1; n <= Math.abs(indentDiff); n++) {
      if (indentDiff < 0) {
        $group.find('.js-indentation:first-of-type').remove();
        this.indents--;
      } else {
        $group.find('td:first-of-type').prepend(Drupal.theme('tableDragIndentation'));
        this.indents++;
      }
    }
    if (indentDiff) {
      this.changed = true;
      this.groupDepth += indentDiff;
      this.onIndent();
    }
    return indentDiff;
  };
  Drupal.tableDrag.prototype.row.prototype.findSiblings = function (rowSettings) {
    var siblings = [];
    var directions = ['prev', 'next'];
    var rowIndentation = this.indents;
    var checkRowIndentation;
    for (var d = 0; d < directions.length; d++) {
      var checkRow = $(this.element)[directions[d]]();
      while (checkRow.length) {
        if (checkRow.find(".".concat(rowSettings.target))) {
          if (this.indentEnabled) {
            checkRowIndentation = checkRow.find('.js-indentation').length;
          }
          if (!this.indentEnabled || checkRowIndentation === rowIndentation) {
            siblings.push(checkRow[0]);
          } else if (checkRowIndentation < rowIndentation) {
            break;
          }
        } else {
          break;
        }
        checkRow = checkRow[directions[d]]();
      }
      if (directions[d] === 'prev') {
        siblings.reverse();
        siblings.push(this.element);
      }
    }
    return siblings;
  };
  Drupal.tableDrag.prototype.row.prototype.removeIndentClasses = function () {
    var _this5 = this;
    Object.keys(this.children || {}).forEach(function (n) {
      $(_this5.children[n]).find('.js-indentation').removeClass('tree-child').removeClass('tree-child-first').removeClass('tree-child-last').removeClass('tree-child-horizontal');
    });
  };
  Drupal.tableDrag.prototype.row.prototype.markChanged = function () {
    var marker = Drupal.theme('tableDragChangedMarker');
    var cell = $(this.element).find('td:first-of-type');
    if (cell.find('abbr.tabledrag-changed').length === 0) {
      cell.append(marker);
    }
  };
  Drupal.tableDrag.prototype.row.prototype.onIndent = function () {
    return null;
  };
  Drupal.tableDrag.prototype.row.prototype.onSwap = function (swappedRow) {
    return null;
  };
  $.extend(Drupal.theme, {
    tableDragChangedMarker: function tableDragChangedMarker() {
      return "<abbr class=\"warning tabledrag-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr>");
    },
    tableDragIndentation: function tableDragIndentation() {
      return '<div class="js-indentation indentation">&nbsp;</div>';
    },
    tableDragChangedWarning: function tableDragChangedWarning() {
      return "<div class=\"tabledrag-changed-warning messages messages--warning\" role=\"alert\">".concat(Drupal.theme('tableDragChangedMarker'), " ").concat(Drupal.t('You have unsaved changes.'), "</div>");
    },
    tableDragToggle: function tableDragToggle() {
      return "<div class=\"tabledrag-toggle-weight-wrapper\" data-drupal-selector=\"tabledrag-toggle-weight-wrapper\">\n            <button type=\"button\" class=\"link tabledrag-toggle-weight\" data-drupal-selector=\"tabledrag-toggle-weight\"></button>\n            </div>";
    },
    toggleButtonContent: function toggleButtonContent(show) {
      return show ? Drupal.t('Hide row weights') : Drupal.t('Show row weights');
    },
    tableDragHandle: function tableDragHandle() {
      return "<a href=\"#\" title=\"".concat(Drupal.t('Drag to re-order'), "\"\n        class=\"tabledrag-handle\"><div class=\"handle\"></div></a>");
    }
  });
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress--fullscreen"><div class="ajax-progress__throbber ajax-progress__throbber--fullscreen">&nbsp;</div></div>';
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="ajax-progress__throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress--throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"ajax-progress__message\">".concat(message, "</div>");
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Drupal) {
  Drupal.Message = function () {
    function _class() {
      var messageWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      _classCallCheck(this, _class);
      if (!messageWrapper) {
        this.messageWrapper = Drupal.Message.defaultWrapper();
      } else {
        this.messageWrapper = messageWrapper;
      }
    }
    _createClass(_class, [{
      key: "add",
      value: function add(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!options.hasOwnProperty('type')) {
          options.type = 'status';
        }
        if (typeof message !== 'string') {
          throw new Error('Message must be a string.');
        }
        Drupal.Message.announce(message, options);
        options.id = options.id ? String(options.id) : "".concat(options.type, "-").concat(Math.random().toFixed(15).replace('0.', ''));
        if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
          var type = options.type;
          throw new Error("The message type, ".concat(type, ", is not present in Drupal.Message.getMessageTypeLabels()."));
        }
        this.messageWrapper.appendChild(Drupal.theme('message', {
          text: message
        }, options));
        return options.id;
      }
    }, {
      key: "select",
      value: function select(id) {
        return this.messageWrapper.querySelector("[data-drupal-message-id^=\"".concat(id, "\"]"));
      }
    }, {
      key: "remove",
      value: function remove(id) {
        return this.messageWrapper.removeChild(this.select(id));
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this = this;
        Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'), function (message) {
          _this.messageWrapper.removeChild(message);
        });
      }
    }], [{
      key: "defaultWrapper",
      value: function defaultWrapper() {
        var wrapper = document.querySelector('[data-drupal-messages]');
        if (!wrapper) {
          wrapper = document.querySelector('[data-drupal-messages-fallback]');
          wrapper.removeAttribute('data-drupal-messages-fallback');
          wrapper.setAttribute('data-drupal-messages', '');
          wrapper.classList.remove('hidden');
        }
        return wrapper.innerHTML === '' ? Drupal.Message.messageInternalWrapper(wrapper) : wrapper.firstElementChild;
      }
    }, {
      key: "getMessageTypeLabels",
      value: function getMessageTypeLabels() {
        return {
          status: Drupal.t('Status message'),
          error: Drupal.t('Error message'),
          warning: Drupal.t('Warning message')
        };
      }
    }, {
      key: "announce",
      value: function announce(message, options) {
        if (!options.priority && (options.type === 'warning' || options.type === 'error')) {
          options.priority = 'assertive';
        }
        if (options.announce !== '') {
          Drupal.announce(options.announce || message, options.priority);
        }
      }
    }, {
      key: "messageInternalWrapper",
      value: function messageInternalWrapper(messageWrapper) {
        var innerWrapper = document.createElement('div');
        innerWrapper.setAttribute('class', 'messages__wrapper');
        messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
        return innerWrapper;
      }
    }]);
    return _class;
  }();
  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
      id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages messages--".concat(type));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.setAttribute('aria-label', messagesTypes[type]);
    messageWrapper.innerHTML = "".concat(text);
    return messageWrapper;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
      id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages messages--".concat(type));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('aria-labelledby', "".concat(id, "-title"));
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.innerHTML = "\n    <div class=\"messages__header\">\n      <h2 id=\"".concat(id, "-title\" class=\"messages__title\">\n        ").concat(messagesTypes[type], "\n      </h2>\n    </div>\n    <div class=\"messages__content\">\n      ").concat(text, "\n    </div>\n  ");
    return messageWrapper;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }
      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };
  $.fn.drupalSetSummary = function (callback) {
    var self = this;
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }
    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };
  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }
      $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }
  function fieldsList(form) {
    return [].map.call(form.querySelectorAll('[name][id]'), function (el) {
      return el.id;
    });
  }
  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
      var formFields;
      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
          form.removeAttribute('data-drupal-form-fields');
          $(form).off('.formUpdated');
        });
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          if (!$element.length) {
            return;
          }
          var emptyValue = $element[0].value === '';
          var defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element[0].value);
          }
        });
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };
  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once) {
  Drupal.behaviors.ckEditor5warn = {
    attach: function attach() {
      var isIE11 = !!document.documentMode;
      var editorSelect = once('editor-ie11-warning', '[data-drupal-selector="filter-format-edit-form"] [data-drupal-selector="edit-editor-editor"], [data-drupal-selector="filter-format-add-form"] [data-drupal-selector="edit-editor-editor"]');
      if (typeof editorSelect[0] !== 'undefined') {
        var select = editorSelect[0];
        var selectMessageContainer = document.createElement('div');
        select.parentNode.after(selectMessageContainer, select);
        var selectMessages = new Drupal.Message(selectMessageContainer);
        var editorSettings = document.querySelector('#editor-settings-wrapper');
        var addIE11Warning = function addIE11Warning() {
          selectMessages.add(Drupal.t('CKEditor 5 is not compatible with Internet Explorer. Text fields using CKEditor 5 will fall back to plain HTML editing without CKEditor for users of Internet Explorer.'), {
            type: 'warning',
            id: 'ie_11_warning'
          });
          if (isIE11) {
            selectMessages.add(Drupal.t('Text editor toolbar settings are not available in Internet Explorer. They will be available in other <a href="@supported-browsers">supported browsers</a>.', {
              '@supported-browsers': 'https://www.drupal.org/docs/system-requirements/browser-requirements'
            }), {
              type: 'error',
              id: 'ie_11_error'
            });
            editorSettings.hidden = true;
          }
        };
        var updateWarningStatus = function updateWarningStatus() {
          if (select.value === 'ckeditor5' && !select.hasAttribute('data-error-switching-to-ckeditor5')) {
            addIE11Warning();
          } else {
            if (selectMessages.select('ie_11_warning')) {
              selectMessages.remove('ie_11_warning');
            }
            if (selectMessages.select('ie_11_error')) {
              selectMessages.remove('ie_11_error');
            }
          }
        };
        updateWarningStatus();
        var editorSelectObserver = new MutationObserver(function (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            var switchToCKEditor5Complete = mutations[i].type === 'attributes' && mutations[i].attributeName === 'disabled' && !select.disabled;
            var fixedErrorsPreventingSwitchToCKEditor5 = mutations[i].type === 'attributes' && mutations[i].attributeName === 'data-error-switching-to-ckeditor5' && !select.hasAttribute('data-error-switching-to-ckeditor5');
            if (switchToCKEditor5Complete || fixedErrorsPreventingSwitchToCKEditor5) {
              updateWarningStatus();
            }
          }
        });
        editorSelectObserver.observe(select, {
          attributes: true
        });
      }
    }
  };
})(Drupal, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once) {
  Drupal.behaviors.allowedTagsListener = {
    attach: function attach(context) {
      once('ajax-conflict-prevention', '[data-drupal-selector="filter-format-edit-form"], [data-drupal-selector="filter-format-add-form"]', context).forEach(function (form) {
        form.addEventListener('submit', function () {
          once.filter('drupal-ajax', '[data-drupal-selector="filter-format-edit-form"] [disabled], [data-drupal-selector="filter-format-add-form"] [disabled]').forEach(function (disabledElement) {
            disabledElement.removeAttribute('disabled');
          });
        });
      });
    }
  };
  var originalAjaxEventResponse = Drupal.Ajax.prototype.eventResponse;
  Drupal.Ajax.prototype.eventResponse = function ckeditor5AjaxEventResponse() {
    if (this.ckeditor5_only) {
      if (this.$form[0].querySelector('#edit-editor-editor').value !== 'ckeditor5') {
        return;
      }
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    originalAjaxEventResponse.apply(this, args);
  };
})(Drupal, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.filterStatus = {
    attach: function attach(context, settings) {
      var $context = $(context);
      once('filter-status', '#filters-status-wrapper input.form-checkbox', context).forEach(function (checkbox) {
        var $checkbox = $(checkbox);
        var $row = $context.find("#".concat($checkbox.attr('id').replace(/-status$/, '-weight'))).closest('tr');
        var $filterSettings = $context.find("[data-drupal-selector='".concat($checkbox.attr('id').replace(/-status$/, '-settings'), "']"));
        var filterSettingsTab = $filterSettings.data('verticalTab');
        $checkbox.on('click.filterUpdate', function () {
          if ($checkbox.is(':checked')) {
            $row.show();
            if (filterSettingsTab) {
              filterSettingsTab.tabShow().updateSummary();
            } else {
              $filterSettings.show();
            }
          } else {
            $row.hide();
            if (filterSettingsTab) {
              filterSettingsTab.tabHide().updateSummary();
            } else {
              $filterSettings.hide();
            }
          }
          Drupal.tableDrag['filter-order'].restripeTable();
        });
        if (filterSettingsTab) {
          filterSettingsTab.details.drupalSetSummary(function () {
            return $checkbox.is(':checked') ? Drupal.t('Enabled') : Drupal.t('Disabled');
          });
        }
        $checkbox.triggerHandler('click.filterUpdate');
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.verticalTab = function (settings) {
    var tab = {};
    tab.title = $('<strong class="vertical-tabs__menu-item-title"></strong>');
    tab.title[0].textContent = settings.title;
    tab.item = $('<li class="vertical-tabs__menu-item" tabindex="-1"></li>').append(tab.link = $('<a href="#" class="vertical-tabs__menu-link"></a>').append($('<span class="vertical-tabs__menu-link-content"></span>').append(tab.title).append(tab.summary = $('<span class="vertical-tabs__menu-link-summary"></span>'))));
    return tab;
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  function DetailsSummarizedContent(node) {
    this.$node = $(node);
    this.setupSummary();
  }
  $.extend(DetailsSummarizedContent, {
    instances: []
  });
  $.extend(DetailsSummarizedContent.prototype, {
    setupSummary: function setupSummary() {
      this.$detailsSummarizedContentWrapper = $(Drupal.theme('detailsSummarizedContentWrapper'));
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper);
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = this.$node.drupalGetSummary();
      this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText', text));
    }
  });
  Drupal.behaviors.detailsSummary = {
    attach: function attach(context) {
      DetailsSummarizedContent.instances = DetailsSummarizedContent.instances.concat(once('details', 'details', context).map(function (details) {
        return new DetailsSummarizedContent(details);
      }));
    }
  };
  Drupal.DetailsSummarizedContent = DetailsSummarizedContent;
  Drupal.theme.detailsSummarizedContentWrapper = function () {
    return "<span class=\"summary\"></span>";
  };
  Drupal.theme.detailsSummarizedContentText = function (text) {
    return text ? " (".concat(text, ")") : '';
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $(once('detailsAria', 'body')).on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';
        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);
    var anchor = window.location.hash && window.location.hash !== '#' ? ", ".concat(window.location.hash) : '';
    if (this.$node.find(".error".concat(anchor)).length) {
      this.$node.attr('open', true);
    }
    this.setupSummaryPolyfill();
  }
  $.extend(CollapsibleDetails, {
    instances: []
  });
  $.extend(CollapsibleDetails.prototype, {
    setupSummaryPolyfill: function setupSummaryPolyfill() {
      var $summary = this.$node.find('> summary');
      $summary.attr('tabindex', '-1');
      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($summary).after(document.createTextNode(' '));
      $('<a class="details-title"></a>').attr('href', "#".concat(this.$node.attr('id'))).prepend($summary.contents()).appendTo($summary);
      $summary.append(this.$summary).on('click', $.proxy(this.onSummaryClick, this));
    },
    onSummaryClick: function onSummaryClick(e) {
      this.toggle();
      e.preventDefault();
    },
    toggle: function toggle() {
      var _this = this;
      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');
      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }
      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });
  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }
      once('collapse', 'details', context).forEach(function (detail) {
        detail.classList.add('collapse-processed');
        CollapsibleDetails.instances.push(new CollapsibleDetails(detail));
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };
  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);
  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Modernizr, Drupal) {
  Drupal.behaviors.claroDetails = {
    attach: function attach(context) {
      $(once('claroDetails', context === document ? 'html' : context)).on('click', function (event) {
        if (event.target.nodeName === 'SUMMARY') {
          $(event.target).trigger('focus');
        }
      });
    }
  };
  Drupal.behaviors.claroDetailsToggleShim = {
    attach: function attach(context) {
      if (Modernizr.details || !Drupal.CollapsibleDetails.instances.length) {
        return;
      }
      $(once('claroDetailsToggleShim', 'details .details-title', context)).on('keypress', function (event) {
        var keyCode = event.keyCode || event.charCode;
        if (keyCode === 32) {
          $(event.target).closest('summary').trigger('click');
          event.preventDefault();
        }
      });
    }
  };
  Drupal.theme.detailsSummarizedContentWrapper = function () {
    return "<span class=\"claro-details__summary-summary\"></span>";
  };
  Drupal.theme.detailsSummarizedContentText = function (text) {
    return text || '';
  };
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, Drupal, document) {
  if (Drupal.filterConfiguration) {
    Drupal.filterConfiguration.liveSettingParsers.filter_html = {
      getRules: function getRules() {
        var currentValue = document.querySelector('#edit-filters-filter-html-settings-allowed-html').value;
        var rules = Drupal.behaviors.filterFilterHtmlUpdating._parseSetting(currentValue);
        var rule = new Drupal.FilterHTMLRule();
        rule.restrictedTags.tags = ['*'];
        rule.restrictedTags.forbidden.attributes = ['style', 'on*'];
        rules.push(rule);
        return rules;
      }
    };
  }
  function difference() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.reduce(function (mainData, otherData) {
      return mainData.filter(function (data) {
        return !otherData.includes(data);
      });
    });
  }
  Drupal.behaviors.filterFilterHtmlUpdating = {
    $allowedHTMLFormItem: null,
    $allowedHTMLDescription: null,
    userTags: {},
    autoTags: null,
    newFeatures: {},
    attach: function attach(context, settings) {
      var that = this;
      once('filter-filter_html-updating', '[name="filters[filter_html][settings][allowed_html]"]', context).forEach(function (formItem) {
        that.$allowedHTMLFormItem = $(formItem);
        that.$allowedHTMLDescription = that.$allowedHTMLFormItem.closest('.js-form-item').find('#edit-filters-filter-html-settings-allowed-html--description');
        that.userTags = that._parseSetting(formItem.value);
        $(document).on('drupalEditorFeatureAdded', function (e, feature) {
          that.newFeatures[feature.name] = feature.rules;
          that._updateAllowedTags();
        }).on('drupalEditorFeatureModified', function (e, feature) {
          if (that.newFeatures.hasOwnProperty(feature.name)) {
            that.newFeatures[feature.name] = feature.rules;
            that._updateAllowedTags();
          }
        }).on('drupalEditorFeatureRemoved', function (e, feature) {
          if (that.newFeatures.hasOwnProperty(feature.name)) {
            delete that.newFeatures[feature.name];
            that._updateAllowedTags();
          }
        });
        that.$allowedHTMLFormItem.on('change.updateUserTags', function () {
          that.userTags = difference(Object.values(that._parseSetting(this.value)), Object.values(that.autoTags));
        });
      });
    },
    _updateAllowedTags: function _updateAllowedTags() {
      var _this = this;
      this.autoTags = this._calculateAutoAllowedTags(this.userTags, this.newFeatures);
      this.$allowedHTMLDescription.find('.editor-update-message').remove();
      if (Object.keys(this.autoTags).length > 0) {
        this.$allowedHTMLDescription.append(Drupal.theme('filterFilterHTMLUpdateMessage', this.autoTags));
        var userTagsWithoutOverrides = {};
        Object.keys(this.userTags).filter(function (tag) {
          return !_this.autoTags.hasOwnProperty(tag);
        }).forEach(function (tag) {
          userTagsWithoutOverrides[tag] = _this.userTags[tag];
        });
        this.$allowedHTMLFormItem.val("".concat(this._generateSetting(userTagsWithoutOverrides), " ").concat(this._generateSetting(this.autoTags)));
      } else {
        this.$allowedHTMLFormItem.val(this._generateSetting(this.userTags));
      }
    },
    _calculateAutoAllowedTags: function _calculateAutoAllowedTags(userAllowedTags, newFeatures) {
      var editorRequiredTags = {};
      Object.keys(newFeatures || {}).forEach(function (featureName) {
        var feature = newFeatures[featureName];
        var featureRule;
        var filterRule;
        var tag;
        for (var f = 0; f < feature.length; f++) {
          featureRule = feature[f];
          for (var t = 0; t < featureRule.required.tags.length; t++) {
            tag = featureRule.required.tags[t];
            if (!editorRequiredTags.hasOwnProperty(tag)) {
              filterRule = new Drupal.FilterHTMLRule();
              filterRule.restrictedTags.tags = [tag];
              filterRule.restrictedTags.allowed.attributes = featureRule.required.attributes.slice(0);
              if (userAllowedTags[tag] !== undefined && userAllowedTags[tag].restrictedTags.allowed.classes[0] !== '') {
                filterRule.restrictedTags.allowed.classes = featureRule.required.classes.slice(0);
              }
              editorRequiredTags[tag] = filterRule;
            } else {
              filterRule = editorRequiredTags[tag];
              filterRule.restrictedTags.allowed.attributes = [].concat(_toConsumableArray(filterRule.restrictedTags.allowed.attributes), _toConsumableArray(featureRule.required.attributes));
              if (userAllowedTags[tag] !== undefined && userAllowedTags[tag].restrictedTags.allowed.classes[0] !== '') {
                filterRule.restrictedTags.allowed.classes = [].concat(_toConsumableArray(filterRule.restrictedTags.allowed.classes), _toConsumableArray(featureRule.required.classes));
              }
            }
          }
        }
      });
      var autoAllowedTags = {};
      Object.keys(editorRequiredTags).forEach(function (tag) {
        if (!userAllowedTags.hasOwnProperty(tag)) {
          autoAllowedTags[tag] = editorRequiredTags[tag];
        } else {
          var requiredAttributes = editorRequiredTags[tag].restrictedTags.allowed.attributes;
          var allowedAttributes = userAllowedTags[tag].restrictedTags.allowed.attributes;
          var needsAdditionalAttributes = requiredAttributes.length && difference(requiredAttributes, allowedAttributes).length;
          var requiredClasses = editorRequiredTags[tag].restrictedTags.allowed.classes;
          var allowedClasses = userAllowedTags[tag].restrictedTags.allowed.classes;
          var needsAdditionalClasses = requiredClasses.length && difference(requiredClasses, allowedClasses).length;
          if (needsAdditionalAttributes || needsAdditionalClasses) {
            autoAllowedTags[tag] = userAllowedTags[tag].clone();
          }
          if (needsAdditionalAttributes) {
            autoAllowedTags[tag].restrictedTags.allowed.attributes = [].concat(_toConsumableArray(allowedAttributes), _toConsumableArray(requiredAttributes));
          }
          if (needsAdditionalClasses) {
            autoAllowedTags[tag].restrictedTags.allowed.classes = [].concat(_toConsumableArray(allowedClasses), _toConsumableArray(requiredClasses));
          }
        }
      });
      return autoAllowedTags;
    },
    _parseSetting: function _parseSetting(setting) {
      var tag;
      var rule;
      var attributes;
      var attribute;
      var allowedTags = setting.match(/(<[^>]+>)/g);
      var rules = {};
      for (var t = 0; t < allowedTags.length; t++) {
        var $tagObject = $(allowedTags[t]);
        tag = $tagObject.prop('tagName').toLowerCase();
        rule = new Drupal.FilterHTMLRule();
        rule.restrictedTags.tags = [tag];
        attributes = $tagObject.prop('attributes');
        for (var i = 0; i < attributes.length; i++) {
          attribute = attributes.item(i);
          var attributeName = attribute.nodeName;
          if (attributeName === 'class') {
            var attributeValue = attribute.textContent;
            rule.restrictedTags.allowed.classes = attributeValue.split(' ');
          } else {
            rule.restrictedTags.allowed.attributes.push(attributeName);
          }
        }
        rules[tag] = rule;
      }
      return rules;
    },
    _generateSetting: function _generateSetting(tags) {
      return Object.keys(tags).reduce(function (setting, tag) {
        var rule = tags[tag];
        var allowedClasses = rule.restrictedTags.allowed.classes;
        if (setting.length) {
          setting += ' ';
        }
        setting += "<".concat(tag);
        if (rule.restrictedTags.allowed.attributes.length) {
          setting += " ".concat(rule.restrictedTags.allowed.attributes.join(' '));
        }
        if (allowedClasses.length === 1 && allowedClasses[0] === '') {
          setting += ' class';
        } else if (allowedClasses.length) {
          setting += " class=\"".concat(allowedClasses.join(' '), "\"");
        }
        setting += '>';
        return setting;
      }, '');
    }
  };
  Drupal.theme.filterFilterHTMLUpdateMessage = function (tags) {
    var html = '';
    var tagList = Drupal.behaviors.filterFilterHtmlUpdating._generateSetting(tags);
    html += '<p class="editor-update-message">';
    html += Drupal.t('Based on the text editor configuration, these tags have automatically been added: <strong>@tag-list</strong>.', {
      '@tag-list': tagList
    });
    html += '</p>';
    return html;
  };
})(jQuery, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.claroTableDrag = {
    attach: function attach(context, settings) {
      var createItemWrapBoundaries = function createItemWrapBoundaries(row) {
        var $row = $(row);
        var $firstCell = $row.find('td:first-of-type').eq(0).wrapInner(Drupal.theme('tableDragCellContentWrapper')).wrapInner($(Drupal.theme('tableDragCellItemsWrapper')).addClass('js-tabledrag-cell-content'));
        var $targetElem = $firstCell.find('.js-tabledrag-cell-content');
        $targetElem.eq(0).find('> .tabledrag-cell-content__item > .js-tabledrag-handle, > .tabledrag-cell-content__item > .js-indentation').prependTo($targetElem);
      };
      Object.keys(settings.tableDrag || {}).forEach(function (base) {
        once('claroTabledrag', $(context).find("#".concat(base)).find('> tr.draggable, > tbody > tr.draggable')).forEach(createItemWrapBoundaries);
      });
    }
  };
  $.extend(Drupal.tableDrag.prototype.row.prototype, {
    markChanged: function markChanged() {
      var marker = $(Drupal.theme('tableDragChangedMarker')).addClass('js-tabledrag-changed-marker');
      var cell = $(this.element).find('td:first-of-type');
      if (cell.find('.js-tabledrag-changed-marker').length === 0) {
        cell.find('.js-tabledrag-handle').after(marker);
      }
    },
    onIndent: function onIndent() {
      $(this.table).find('.tabledrag-cell > .js-indentation').each(function (index, indentToMove) {
        var $indentToMove = $(indentToMove);
        var $cellContent = $indentToMove.siblings('.tabledrag-cell-content');
        $indentToMove.prependTo($cellContent);
      });
    }
  });
  $.extend(Drupal.theme, {
    tableDragIndentation: function tableDragIndentation() {
      return '<div class="js-indentation indentation"><svg xmlns="http://www.w3.org/2000/svg" class="tree" width="25" height="25" viewBox="0 0 25 25"><path class="tree__item tree__item-child-ltr tree__item-child-last-ltr tree__item-horizontal tree__item-horizontal-right" d="M12,12.5 H25" stroke="#888"/><path class="tree__item tree__item-child-rtl tree__item-child-last-rtl tree__item-horizontal tree__horizontal-left" d="M0,12.5 H13" stroke="#888"/><path class="tree__item tree__item-child-ltr tree__item-child-rtl tree__item-child-last-ltr tree__item-child-last-rtl tree__vertical tree__vertical-top" d="M12.5,12 v-99" stroke="#888"/><path class="tree__item tree__item-child-ltr tree__item-child-rtl tree__vertical tree__vertical-bottom" d="M12.5,12 v99" stroke="#888"/></svg></div>';
    },
    tableDragChangedWarning: function tableDragChangedWarning() {
      return "<div class=\"tabledrag-changed-warning messages messages--warning\" role=\"alert\">".concat(Drupal.theme('tableDragChangedMarker'), " ").concat(Drupal.t('You have unsaved changes.'), "</div>");
    },
    tableDragHandle: function tableDragHandle() {
      return "<a href=\"#\" title=\"".concat(Drupal.t('Drag to re-order'), "\" class=\"tabledrag-handle js-tabledrag-handle\"></a>");
    },
    tableDragToggle: function tableDragToggle() {
      return "<div class=\"tabledrag-toggle-weight-wrapper\" data-drupal-selector=\"tabledrag-toggle-weight-wrapper\">\n            <button type=\"button\" class=\"link action-link tabledrag-toggle-weight\" data-drupal-selector=\"tabledrag-toggle-weight\"></button>\n            </div>";
    },
    toggleButtonContent: function toggleButtonContent(show) {
      var classes = ['action-link', 'action-link--extrasmall', 'tabledrag-toggle-weight'];
      var text = '';
      if (show) {
        classes.push('action-link--icon-hide');
        text = Drupal.t('Hide row weights');
      } else {
        classes.push('action-link--icon-show');
        text = Drupal.t('Show row weights');
      }
      return "<span class=\"".concat(classes.join(' '), "\">").concat(text, "</a>");
    },
    tableDragCellContentWrapper: function tableDragCellContentWrapper() {
      return '<div class="tabledrag-cell-content__item"></div>';
    },
    tableDragCellItemsWrapper: function tableDragCellItemsWrapper() {
      return '<div class="tabledrag-cell-content"></div>';
    }
  });
})(jQuery, Drupal);;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, document) {
  Drupal.editorConfiguration = {
    addedFeature: function addedFeature(feature) {
      $(document).trigger('drupalEditorFeatureAdded', feature);
    },
    removedFeature: function removedFeature(feature) {
      $(document).trigger('drupalEditorFeatureRemoved', feature);
    },
    modifiedFeature: function modifiedFeature(feature) {
      $(document).trigger('drupalEditorFeatureModified', feature);
    },
    featureIsAllowedByFilters: function featureIsAllowedByFilters(feature) {
      function emptyProperties(section) {
        return section.attributes.length === 0 && section.classes.length === 0 && section.styles.length === 0;
      }
      function generateUniverseFromFeatureRequirements(feature) {
        var properties = ['attributes', 'styles', 'classes'];
        var universe = {};
        for (var r = 0; r < feature.rules.length; r++) {
          var featureRule = feature.rules[r];
          var requiredTags = featureRule.required.tags;
          for (var t = 0; t < requiredTags.length; t++) {
            universe[requiredTags[t]] = {
              tag: false,
              touchedByAllowedPropertyRule: false
            };
          }
          if (emptyProperties(featureRule.required)) {
            continue;
          }
          for (var p = 0; p < properties.length; p++) {
            var property = properties[p];
            for (var pv = 0; pv < featureRule.required[property].length; pv++) {
              var propertyValue = featureRule.required[property];
              universe[requiredTags]["".concat(property, ":").concat(propertyValue)] = false;
            }
          }
        }
        return universe;
      }
      function findPropertyValueOnTag(universe, tag, property, propertyValue, allowing) {
        if (!universe.hasOwnProperty(tag)) {
          return false;
        }
        var key = "".concat(property, ":").concat(propertyValue);
        if (allowing) {
          universe[tag].touchedByAllowedPropertyRule = true;
        }
        if (propertyValue.indexOf('*') === -1) {
          if (universe.hasOwnProperty(tag) && universe[tag].hasOwnProperty(key)) {
            if (allowing) {
              universe[tag][key] = true;
            }
            return true;
          }
          return false;
        }
        var atLeastOneFound = false;
        var regex = key.replace(/\*/g, '[^ ]*');
        Object.keys(universe[tag]).forEach(function (key) {
          if (key.match(regex)) {
            atLeastOneFound = true;
            if (allowing) {
              universe[tag][key] = true;
            }
          }
        });
        return atLeastOneFound;
      }
      function findPropertyValuesOnAllTags(universe, property, propertyValues, allowing) {
        var atLeastOneFound = false;
        Object.keys(universe).forEach(function (tag) {
          if (findPropertyValuesOnTag(universe, tag, property, propertyValues, allowing)) {
            atLeastOneFound = true;
          }
        });
        return atLeastOneFound;
      }
      function findPropertyValuesOnTag(universe, tag, property, propertyValues, allowing) {
        if (tag === '*') {
          return findPropertyValuesOnAllTags(universe, property, propertyValues, allowing);
        }
        var atLeastOneFound = false;
        propertyValues.forEach(function (propertyValue) {
          if (findPropertyValueOnTag(universe, tag, property, propertyValue, allowing)) {
            atLeastOneFound = true;
          }
        });
        return atLeastOneFound;
      }
      function deleteAllTagsFromUniverseIfAllowed(universe) {
        var atLeastOneDeleted = false;
        Object.keys(universe).forEach(function (tag) {
          if (deleteFromUniverseIfAllowed(universe, tag)) {
            atLeastOneDeleted = true;
          }
        });
        return atLeastOneDeleted;
      }
      function deleteFromUniverseIfAllowed(universe, tag) {
        if (tag === '*') {
          return deleteAllTagsFromUniverseIfAllowed(universe);
        }
        if (universe.hasOwnProperty(tag) && Object.keys(universe[tag]).filter(function (key) {
          return key !== 'touchedByAllowedPropertyRule';
        }).every(function (key) {
          return universe[tag][key];
        })) {
          delete universe[tag];
          return true;
        }
        return false;
      }
      function anyForbiddenFilterRuleMatches(universe, filterStatus) {
        var properties = ['attributes', 'styles', 'classes'];
        var allRequiredTags = Object.keys(universe);
        var filterRule;
        for (var i = 0; i < filterStatus.rules.length; i++) {
          filterRule = filterStatus.rules[i];
          if (filterRule.allow === false) {
            var intersection = filterRule.tags.filter(function (tag) {
              return allRequiredTags.includes(tag);
            });
            if (intersection.length > 0) {
              return true;
            }
          }
        }
        for (var n = 0; n < filterStatus.rules.length; n++) {
          filterRule = filterStatus.rules[n];
          if (filterRule.restrictedTags.tags.length && !emptyProperties(filterRule.restrictedTags.forbidden)) {
            for (var j = 0; j < filterRule.restrictedTags.tags.length; j++) {
              var tag = filterRule.restrictedTags.tags[j];
              for (var k = 0; k < properties.length; k++) {
                var property = properties[k];
                if (findPropertyValuesOnTag(universe, tag, property, filterRule.restrictedTags.forbidden[property], false)) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      }
      function markAllowedTagsAndPropertyValues(universe, filterStatus) {
        var properties = ['attributes', 'styles', 'classes'];
        var filterRule;
        var tag;
        for (var l = 0; Object.keys(universe).length > 0 && l < filterStatus.rules.length; l++) {
          filterRule = filterStatus.rules[l];
          if (filterRule.allow === true) {
            for (var m = 0; Object.keys(universe).length > 0 && m < filterRule.tags.length; m++) {
              tag = filterRule.tags[m];
              if (universe.hasOwnProperty(tag)) {
                universe[tag].tag = true;
                deleteFromUniverseIfAllowed(universe, tag);
              }
            }
          }
        }
        for (var i = 0; Object.keys(universe).length > 0 && i < filterStatus.rules.length; i++) {
          filterRule = filterStatus.rules[i];
          if (filterRule.restrictedTags.tags.length && !emptyProperties(filterRule.restrictedTags.allowed)) {
            for (var j = 0; Object.keys(universe).length > 0 && j < filterRule.restrictedTags.tags.length; j++) {
              tag = filterRule.restrictedTags.tags[j];
              for (var k = 0; k < properties.length; k++) {
                var property = properties[k];
                if (findPropertyValuesOnTag(universe, tag, property, filterRule.restrictedTags.allowed[property], true)) {
                  deleteFromUniverseIfAllowed(universe, tag);
                }
              }
            }
          }
        }
      }
      function filterStatusAllowsFeature(filterStatus, feature) {
        if (!filterStatus.active) {
          return true;
        }
        if (feature.rules.length === 0) {
          return true;
        }
        if (filterStatus.rules.length === 0) {
          return true;
        }
        var universe = generateUniverseFromFeatureRequirements(feature);
        if (anyForbiddenFilterRuleMatches(universe, filterStatus)) {
          return false;
        }
        markAllowedTagsAndPropertyValues(universe, filterStatus);
        if (filterStatus.rules.some(function (_ref) {
          var allow = _ref.allow;
          return allow;
        })) {
          if (Object.keys(universe).length === 0) {
            return true;
          }
          if (!Object.keys(universe).every(function (tagName) {
            return universe[tagName].tag;
          })) {
            return false;
          }
          var tags = Object.keys(universe);
          for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            if (universe.hasOwnProperty(tag)) {
              if (universe[tag].touchedByAllowedPropertyRule === false) {
                delete universe[tag];
              }
            }
          }
          return Object.keys(universe).length === 0;
        }
        return true;
      }
      Drupal.filterConfiguration.update();
      return Object.keys(Drupal.filterConfiguration.statuses).every(function (filterID) {
        return filterStatusAllowsFeature(Drupal.filterConfiguration.statuses[filterID], feature);
      });
    }
  };
  Drupal.EditorFeatureHTMLRule = function () {
    this.required = {
      tags: [],
      attributes: [],
      styles: [],
      classes: []
    };
    this.allowed = {
      tags: [],
      attributes: [],
      styles: [],
      classes: []
    };
    this.raw = null;
  };
  Drupal.EditorFeature = function (name) {
    this.name = name;
    this.rules = [];
  };
  Drupal.EditorFeature.prototype.addHTMLRule = function (rule) {
    this.rules.push(rule);
  };
  Drupal.FilterStatus = function (name) {
    this.name = name;
    this.active = false;
    this.rules = [];
  };
  Drupal.FilterStatus.prototype.addHTMLRule = function (rule) {
    this.rules.push(rule);
  };
  Drupal.FilterHTMLRule = function () {
    this.tags = [];
    this.allow = null;
    this.restrictedTags = {
      tags: [],
      allowed: {
        attributes: [],
        styles: [],
        classes: []
      },
      forbidden: {
        attributes: [],
        styles: [],
        classes: []
      }
    };
    return this;
  };
  Drupal.FilterHTMLRule.prototype.clone = function () {
    var clone = new Drupal.FilterHTMLRule();
    clone.tags = this.tags.slice(0);
    clone.allow = this.allow;
    clone.restrictedTags.tags = this.restrictedTags.tags.slice(0);
    clone.restrictedTags.allowed.attributes = this.restrictedTags.allowed.attributes.slice(0);
    clone.restrictedTags.allowed.styles = this.restrictedTags.allowed.styles.slice(0);
    clone.restrictedTags.allowed.classes = this.restrictedTags.allowed.classes.slice(0);
    clone.restrictedTags.forbidden.attributes = this.restrictedTags.forbidden.attributes.slice(0);
    clone.restrictedTags.forbidden.styles = this.restrictedTags.forbidden.styles.slice(0);
    clone.restrictedTags.forbidden.classes = this.restrictedTags.forbidden.classes.slice(0);
    return clone;
  };
  Drupal.filterConfiguration = {
    statuses: {},
    liveSettingParsers: {},
    update: function update() {
      Object.keys(Drupal.filterConfiguration.statuses || {}).forEach(function (filterID) {
        Drupal.filterConfiguration.statuses[filterID].active = $("[name=\"filters[".concat(filterID, "][status]\"]")).is(':checked');
        if (Drupal.filterConfiguration.liveSettingParsers[filterID]) {
          Drupal.filterConfiguration.statuses[filterID].rules = Drupal.filterConfiguration.liveSettingParsers[filterID].getRules();
        }
      });
    }
  };
  Drupal.behaviors.initializeFilterConfiguration = {
    attach: function attach(context, settings) {
      once('filter-editor-status', '#filters-status-wrapper input.form-checkbox', context).forEach(function (checkbox) {
        var $checkbox = $(checkbox);
        var nameAttribute = $checkbox.attr('name');
        var filterID = nameAttribute.substring(8, nameAttribute.indexOf(']'));
        Drupal.filterConfiguration.statuses[filterID] = new Drupal.FilterStatus(filterID);
      });
    }
  };
})(jQuery, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }
    return typeof a === 'undefined' || typeof b === 'undefined';
  }
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }
    return a && b;
  }
  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;
      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };
      for (var i = 0; i < il; i++) {
        _loop(i);
      }
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };
  states.Dependent = function (args) {
    var _this = this;
    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };
  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;
      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }
        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }
      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);
      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;
      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;
        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }
      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }
      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };
      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };
  states.Trigger = function (args) {
    $.extend(this, args);
    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);
      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };
  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;
      var trigger = states.Trigger.states[this.state];
      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }
      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);
        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };
  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;
    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }
    return new states.State(state);
  };
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).prop('disabled', e.value).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).prop('checked', e.value);
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
/*! Sortable 1.15.0 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function M(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function f(t,e,n){t.removeEventListener(e,n,!y&&d)}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=A(t,!0),i=k(t)[e];o;){var r=k(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=A(o,!1)}return!1}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function A(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height)}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","")}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=M({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var H=[],L={initializeByDefault:!0},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](M({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](M({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=M(M({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,M({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=!0},cloneNowShown:function(){et=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n})}},o))}var G=["evt"];function U(t){W(M({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t))}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=!1,wt=!1,Et=[],Dt=!1,St=!1,_t=[],Ct=!1,Tt=[],xt="undefined"!=typeof document,Ot=n,At=w||y?"cssFloat":"float",Mt=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[At]||r&&"none"===n[At]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},kt=function(){!Nt&&Z&&P(Z,"display","none")},Rt=function(){!Nt&&Z&&P(Z,"display","")};xt&&!c&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=!1},!0);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o)}}var i,r,a}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target)}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Mt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,!1))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,!1))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt)}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;yt=!1,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,!1),I(q,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt()}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,!0,Ot,!0,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt)}I(Z=q.cloneNode(!0),n.ghostClass,!1),I(Z,n.fallbackClass,!0),I(Z,n.dragClass,!0),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).removeAttribute("id"),tt.draggable=!1,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,!1),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}))}),e||I(q,i.dragClass,!0),e?(wt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=!0,u&&P(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=!1;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,!0),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(!1);if(wt=!1,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(!0);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(!1);if((l=g&&a===n.target?g:l)&&(w=k(l)),!1!==Ft($,a,q,o,l,w,n,!!l))return x(),g&&g.nextSibling?a.insertBefore(q,g.nextSibling):a.appendChild(q),V=a,A(),O(!0)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,!0));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,!0);if(m===q)return O(!1);if(w=k(l=m),!1!==Ft($,a,q,o,l,w,n,!1))return x(),a.insertBefore(q,m),V=a,A(),O(!0)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=!1,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?!0:Dt)n=!0;else if(1===mt?s<t+vt:o-vt<s)return-mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(!1);mt=v;var C=(gt=l).nextElementSibling,E=!1,D=Ft($,a,q,o,l,w,n,E=1===v);if(!1!==D)return 1!==D&&-1!==D||(E=1===D),Ct=!0,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),A(),O(!0)}if(a.contains(q))return O(!1)}return!1}function T(t,e){z(t,f,M({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:A},e))}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,!1),I(q,e.ghostClass,!0)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function A(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,!1),I(q,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=!0}),Tt.length=ut=dt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return N(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n)},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=!0))},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=!1)):this._hideClone()}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault()}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return!!N(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=M(M({},Bt.utils),t.utils)),K.mount(t)})},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.15.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid)}),Zt=[]}function Jt(){clearInterval(Vt)}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,!0===Wt&&(Wt=A(e,!0)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=A(h,!1)));$t=u}},30),c=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:c},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:c},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=!1,he=!1,fe=!1;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t)})}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=A(t,!0),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=A(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Qt()),ee(e,i.options,t,n)},10),Gt=r,Ut=a)):this.options.bubbleScroll&&A(t,!0)!==O()?ee(e,this.options,A(t,!1),!1):Qt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;te=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=!1!==o(n)?(I(n,i.swapClass,!0),n):null,t&&t!==te&&I(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,!1),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){te=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.avoidImplicitDeselect||(o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag))),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ae=t},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=!1,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,!1),ce[n]===ae&&I(ue[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(!1,n),ue.forEach(function(t){P(t,"display","")}),e(),se=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),se=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t)}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute")}),e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&C(t,e)}),de=he=!0)),t.animateAll(function(){de=he=!1,n.options.animation&&ce.forEach(function(t){T(t)}),n.options.sort&&ge()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),he=!1,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=!1,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t))}),he=!0),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,!0),le.top-=e.f,le.left-=e.e)},dragOverAnimationComplete:function(){he&&(he=!1,ge())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae,originalEvent:e});else{if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae,originalEvent:e}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,!0),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g],originalEvent:e}))}else ie=ae;re=s}fe&&this.isMultiDrag&&(he=!1,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++}),a===B(ae)&&(d=!1,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=!0)}),d&&r("update"))),ce.forEach(function(t){T(t)}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,ue.length=0},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,!1),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvent:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,!0),ce.push(t))},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,!1),ce.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e})}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Drupal, drupalSettings, $, JSON, once, Sortable, _ref) {
  var tabbable = _ref.tabbable;
  var toolbarHelp = [{
    message: Drupal.t("The toolbar buttons that don't fit the user's browser window width will be grouped in a dropdown. If multiple toolbar rows are preferred, those can be configured by adding an explicit wrapping breakpoint wherever you want to start a new row.", null, {
      context: 'CKEditor 5 toolbar help text, default, no explicit wrapping breakpoint'
    }),
    button: 'wrapping',
    condition: false
  }, {
    message: Drupal.t('You have configured a multi-row toolbar by using an explicit wrapping breakpoint. This may not work well in narrow browser windows. To use automatic grouping, remove any of these divider buttons.', null, {
      context: 'CKEditor 5 toolbar help text, with explicit wrapping breakpoint'
    }),
    button: 'wrapping',
    condition: true
  }];
  var Observable = function () {
    function Observable(value) {
      _classCallCheck(this, Observable);
      this._listeners = [];
      this._value = value;
    }
    _createClass(Observable, [{
      key: "notify",
      value: function notify() {
        var _this = this;
        this._listeners.forEach(function (listener) {
          return listener(_this._value);
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(listener) {
        this._listeners.push(listener);
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(val) {
        if (val !== this._value) {
          this._value = val;
          this.notify();
        }
      }
    }]);
    return Observable;
  }();
  var getSelectedButtons = function getSelectedButtons(selected, dividers, available) {
    return selected.map(function (id) {
      return _objectSpread({}, [].concat(_toConsumableArray(dividers), _toConsumableArray(available)).find(function (button) {
        return button.id === id;
      }));
    });
  };
  var updateSelectedButtons = function updateSelectedButtons(selection, textarea) {
    var newValue = JSON.stringify(selection);
    var priorValue = textarea.innerHTML;
    textarea.value = newValue;
    textarea.innerHTML = newValue;
    textarea.dispatchEvent(new CustomEvent('change', {
      detail: {
        priorValue: priorValue
      }
    }));
  };
  var addToSelectedButtons = function addToSelectedButtons(selection, element, announceChange) {
    var list = _toConsumableArray(selection.value);
    list.push(element.dataset.id);
    selection.value = list;
    if (announceChange) {
      setTimeout(function () {
        announceChange(element.dataset.label);
      });
    }
  };
  var removeFromSelectedButtons = function removeFromSelectedButtons(selection, element, announceChange) {
    var list = _toConsumableArray(selection.value);
    var index = Array.from(element.parentElement.children).findIndex(function (child) {
      return child === element;
    });
    list.splice(index, 1);
    selection.value = list;
    if (announceChange) {
      setTimeout(function () {
        announceChange(element.dataset.label);
      });
    }
  };
  var moveWithinSelectedButtons = function moveWithinSelectedButtons(selection, element, dir) {
    var list = _toConsumableArray(selection.value);
    var index = Array.from(element.parentElement.children).findIndex(function (child) {
      return child === element;
    });
    var condition = dir < 0 ? index > 0 : index < list.length - 1;
    if (condition) {
      list.splice(index + dir, 0, list.splice(index, 1)[0]);
      selection.value = list;
    }
  };
  var copyToActiveButtons = function copyToActiveButtons(selection, element, announceChange) {
    var list = _toConsumableArray(selection.value);
    list.push(element.dataset.id);
    selection.value = list;
    setTimeout(function () {
      if (announceChange) {
        announceChange(element.dataset.label);
      }
    });
  };
  var render = function render(root, selectedButtons, availableButtons, dividerButtons) {
    var toolbarHelpText = toolbarHelp.filter(function (helpItem) {
      return selectedButtons.value.includes(helpItem.button) === helpItem.condition;
    }).map(function (helpItem) {
      return helpItem.message;
    });
    var existingToolbarHelpText = document.querySelector('[data-drupal-selector="ckeditor5-admin-help-message"]');
    if (existingToolbarHelpText && toolbarHelpText.join('').trim() !== existingToolbarHelpText.textContent.trim()) {
      Drupal.announce(toolbarHelpText.join(' '));
    }
    root.innerHTML = Drupal.theme.ckeditor5Admin({
      availableButtons: Drupal.theme.ckeditor5AvailableButtons({
        buttons: availableButtons.filter(function (button) {
          return !selectedButtons.value.includes(button.id);
        })
      }),
      dividerButtons: Drupal.theme.ckeditor5DividerButtons({
        buttons: dividerButtons
      }),
      activeToolbar: Drupal.theme.ckeditor5SelectedButtons({
        buttons: getSelectedButtons(selectedButtons.value, dividerButtons, availableButtons)
      }),
      helpMessage: toolbarHelpText
    });
    new Sortable(root.querySelector('[data-button-list="ckeditor5-toolbar-active-buttons"]'), {
      group: {
        name: 'toolbar',
        put: ['divider', 'available']
      },
      sort: true,
      store: {
        set: function set(sortable) {
          selectedButtons.value = sortable.toArray();
        }
      }
    });
    var toolbarAvailableButtons = new Sortable(root.querySelector('[data-button-list="ckeditor5-toolbar-available-buttons"]'), {
      group: {
        name: 'available',
        put: ['toolbar']
      },
      sort: false,
      onAdd: function onAdd(event) {
        if (dividerButtons.find(function (dividerButton) {
          return dividerButton.id === event.item.dataset.id;
        })) {
          var newIndex = event.newIndex;
          setTimeout(function () {
            document.querySelectorAll('.ckeditor5-toolbar-available__buttons li')[newIndex].remove();
          });
        }
      }
    });
    new Sortable(root.querySelector('[data-button-list="ckeditor5-toolbar-divider-buttons"]'), {
      group: {
        name: 'divider',
        put: false,
        pull: 'clone',
        sort: 'false'
      }
    });
    root.querySelectorAll('[data-drupal-selector="ckeditor5-toolbar-button"]').forEach(function (element) {
      var expandButton = function expandButton(event) {
        event.currentTarget.querySelectorAll('.ckeditor5-toolbar-button').forEach(function (buttonElement) {
          buttonElement.setAttribute('data-expanded', true);
        });
      };
      var retractButton = function retractButton(event) {
        event.currentTarget.querySelectorAll('.ckeditor5-toolbar-button').forEach(function (buttonElement) {
          buttonElement.setAttribute('data-expanded', false);
        });
      };
      element.addEventListener('mouseenter', expandButton);
      element.addEventListener('focus', expandButton);
      element.addEventListener('mouseleave', retractButton);
      element.addEventListener('blur', retractButton);
      element.addEventListener('keyup', function (event) {
        var supportedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
        var dir = document.documentElement.dir;
        if (supportedKeys.includes(event.key)) {
          if (event.currentTarget.dataset.divider.toLowerCase() === 'true') {
            switch (event.key) {
              case 'ArrowDown':
                {
                  var announceChange = function announceChange(name) {
                    Drupal.announce(Drupal.t('Button @name has been copied to the active toolbar.', {
                      '@name': name
                    }));
                  };
                  copyToActiveButtons(selectedButtons, event.currentTarget, announceChange);
                  root.querySelector('[data-button-list="ckeditor5-toolbar-active-buttons"] li:last-child').focus();
                  break;
                }
            }
          } else if (selectedButtons.value.includes(event.currentTarget.dataset.id)) {
            var index = Array.from(element.parentElement.children).findIndex(function (child) {
              return child === element;
            });
            switch (event.key) {
              case 'ArrowLeft':
                {
                  var leftOffset = dir === 'ltr' ? -1 : 1;
                  moveWithinSelectedButtons(selectedButtons, event.currentTarget, leftOffset);
                  root.querySelectorAll('[data-button-list="ckeditor5-toolbar-active-buttons"] li')[index + leftOffset].focus();
                  break;
                }
              case 'ArrowRight':
                {
                  var rightOffset = dir === 'ltr' ? 1 : -1;
                  moveWithinSelectedButtons(selectedButtons, event.currentTarget, rightOffset);
                  root.querySelectorAll('[data-button-list="ckeditor5-toolbar-active-buttons"] li')[index + rightOffset].focus();
                  break;
                }
              case 'ArrowUp':
                {
                  var _announceChange = function _announceChange(name) {
                    Drupal.announce(Drupal.t('Button @name has been removed from the active toolbar.', {
                      '@name': name
                    }));
                  };
                  removeFromSelectedButtons(selectedButtons, event.currentTarget, _announceChange);
                  if (!dividerButtons.find(function (dividerButton) {
                    return event.currentTarget.dataset.id === dividerButton.id;
                  })) {
                    root.querySelector("[data-button-list=\"ckeditor5-toolbar-available-buttons\"] [data-id=\"".concat(event.currentTarget.dataset.id, "\"]")).focus();
                  }
                  break;
                }
            }
          } else if (toolbarAvailableButtons.toArray().includes(event.currentTarget.dataset.id)) {
            switch (event.key) {
              case 'ArrowDown':
                {
                  var _announceChange2 = function _announceChange2(name) {
                    Drupal.announce(Drupal.t('Button @name has been moved to the active toolbar.', {
                      '@name': name
                    }));
                  };
                  addToSelectedButtons(selectedButtons, event.currentTarget, _announceChange2);
                  root.querySelector('[data-button-list="ckeditor5-toolbar-active-buttons"] li:last-child').focus();
                  break;
                }
            }
          }
        }
      });
    });
  };
  Drupal.behaviors.ckeditor5Admin = {
    attach: function attach(context) {
      once('ckeditor5-admin-toolbar', '#ckeditor5-toolbar-app').forEach(function (container) {
        var selectedTextarea = context.querySelector('#ckeditor5-toolbar-buttons-selected');
        var available = Object.entries(JSON.parse(context.querySelector('#ckeditor5-toolbar-buttons-available').innerHTML)).map(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            name = _ref3[0],
            attrs = _ref3[1];
          return _objectSpread({
            name: name,
            id: name
          }, attrs);
        });
        var dividers = [{
          id: 'divider',
          name: '|',
          label: Drupal.t('Divider')
        }, {
          id: 'wrapping',
          name: '-',
          label: Drupal.t('Wrapping')
        }];
        var selected = new Observable(JSON.parse(selectedTextarea.innerHTML).map(function (name) {
          return [].concat(dividers, _toConsumableArray(available)).find(function (button) {
            return button.name === name;
          }).id;
        }));
        var mapSelection = function mapSelection(selection) {
          return selection.map(function (id) {
            return [].concat(dividers, _toConsumableArray(available)).find(function (button) {
              return button.id === id;
            }).name;
          });
        };
        selected.subscribe(function (selection) {
          updateSelectedButtons(mapSelection(selection), selectedTextarea);
          render(container, selected, available, dividers);
        });
        [context.querySelector('#ckeditor5-toolbar-buttons-available'), context.querySelector('[class*="editor-settings-toolbar-items"]')].filter(function (el) {
          return el;
        }).forEach(function (el) {
          el.classList.add('visually-hidden');
        });
        render(container, selected, available, dividers);
      });
      once('safari-focus-fix', '.ckeditor5-toolbar-item').forEach(function (item) {
        item.addEventListener('keydown', function (e) {
          var keyCodeDirections = {
            9: 'tab',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
          };
          if (['tab', 'left', 'up', 'right', 'down'].includes(keyCodeDirections[e.keyCode])) {
            var hideTip = false;
            var isActive = e.target.closest('[data-button-list="ckeditor5-toolbar-active__buttons"]');
            if (isActive) {
              if (['tab', 'left', 'up', 'right'].includes(keyCodeDirections[e.keyCode])) {
                hideTip = true;
              }
            } else if (['tab', 'down'].includes(keyCodeDirections[e.keyCode])) {
              hideTip = true;
            }
            if (hideTip) {
              e.target.querySelector('[data-expanded]').setAttribute('data-expanded', 'false');
            }
          }
        });
      });
      var updateUiStateStorage = function updateUiStateStorage(states) {
        var form = document.querySelector('#filter-format-edit-form, #filter-format-add-form');
        var currentStates = form.hasAttribute('data-drupal-ui-state') ? JSON.parse(form.getAttribute('data-drupal-ui-state')) : {};
        form.setAttribute('data-drupal-ui-state', JSON.stringify(_objectSpread(_objectSpread({}, currentStates), states)));
      };
      var getUiStateStorage = function getUiStateStorage(property) {
        var form = document.querySelector('#filter-format-edit-form, #filter-format-add-form');
        if (form === null) {
          return;
        }
        return form.hasAttribute('data-drupal-ui-state') ? JSON.parse(form.getAttribute('data-drupal-ui-state'))[property] : null;
      };
      once('ui-state-storage', '#filter-format-edit-form, #filter-format-add-form').forEach(function (form) {
        form.setAttribute('data-drupal-ui-state', JSON.stringify({}));
      });
      var maintainActiveVerticalTab = function maintainActiveVerticalTab(verticalTabs) {
        var id = verticalTabs.id;
        var activeTab = getUiStateStorage("".concat(id, "-active-tab"));
        if (activeTab) {
          setTimeout(function () {
            var activeTabLink = document.querySelector(activeTab);
            activeTabLink.click();
            if (id !== 'plugin-settings-wrapper') {
              return;
            }
            if (document.activeElement !== document.body) {
              return;
            }
            var targetTabPane = document.querySelector(activeTabLink.getAttribute('href'));
            if (targetTabPane) {
              var tabbableElements = tabbable(targetTabPane);
              if (tabbableElements.length) {
                tabbableElements[0].focus();
              }
            }
          });
        }
        verticalTabs.querySelectorAll('.vertical-tabs__menu').forEach(function (tab) {
          tab.addEventListener('click', function (e) {
            var state = {};
            var href = e.target.closest('[href]').getAttribute('href').split('--')[0];
            state["".concat(id, "-active-tab")] = "#".concat(id, " [href^='").concat(href, "']");
            updateUiStateStorage(state);
          });
        });
      };
      once('maintainActiveVerticalTab', '#plugin-settings-wrapper, #filter-settings-wrapper').forEach(maintainActiveVerticalTab);
      var selectedButtons = document.querySelector('#ckeditor5-toolbar-buttons-selected');
      once('textarea-listener', selectedButtons).forEach(function (textarea) {
        textarea.addEventListener('change', function (e) {
          var buttonName = document.activeElement.getAttribute('data-id');
          if (!buttonName) {
            return;
          }
          var focusSelector = '';
          if (['divider', 'wrapping'].includes(buttonName)) {
            var oldConfig = JSON.parse(e.detail.priorValue);
            var newConfig = JSON.parse(e.target.innerHTML);
            if (oldConfig.length > newConfig.length) {
              for (var item = 0; item < newConfig.length; item++) {
                if (newConfig[item] !== oldConfig[item]) {
                  focusSelector = "[data-button-list=\"ckeditor5-toolbar-active-buttons\"] li:nth-child(".concat(Math.min(item - 1, 0), ")");
                  break;
                }
              }
            } else if (oldConfig.length < newConfig.length) {
              focusSelector = '[data-button-list="ckeditor5-toolbar-active-buttons"] li:last-child';
            } else {
              document.querySelectorAll("[data-button-list=\"ckeditor5-toolbar-active-buttons\"] [data-id='".concat(buttonName, "']")).forEach(function (divider, index) {
                if (divider === document.activeElement) {
                  focusSelector = "".concat(buttonName, "|").concat(index);
                }
              });
            }
          } else {
            focusSelector = "[data-id='".concat(buttonName, "']");
          }
          updateUiStateStorage({
            focusSelector: focusSelector
          });
        });
        textarea.addEventListener('focus', function () {
          var focusSelector = getUiStateStorage('focusSelector');
          if (focusSelector) {
            if (focusSelector.includes('|')) {
              var _focusSelector$split = focusSelector.split('|'),
                _focusSelector$split2 = _slicedToArray(_focusSelector$split, 2),
                buttonName = _focusSelector$split2[0],
                count = _focusSelector$split2[1];
              document.querySelectorAll("[data-button-list=\"ckeditor5-toolbar-active-buttons\"] [data-id='".concat(buttonName, "']")).forEach(function (item, index) {
                if (index === parseInt(count, 10)) {
                  item.focus();
                }
              });
            } else {
              var toFocus = document.querySelector(focusSelector);
              if (toFocus) {
                toFocus.focus();
              }
            }
          }
        });
      });
    }
  };
  Drupal.theme.ckeditor5SelectedButtons = function (_ref4) {
    var buttons = _ref4.buttons;
    return "\n      <ul class=\"ckeditor5-toolbar-tray ckeditor5-toolbar-active__buttons\" data-button-list=\"ckeditor5-toolbar-active-buttons\" role=\"listbox\" aria-orientation=\"horizontal\" aria-labelledby=\"ckeditor5-toolbar-active-buttons-label\">\n        ".concat(buttons.map(function (button) {
      return Drupal.theme.ckeditor5Button({
        button: button,
        listType: 'active'
      });
    }).join(''), "\n      </ul>\n    ");
  };
  Drupal.theme.ckeditor5DividerButtons = function (_ref5) {
    var buttons = _ref5.buttons;
    return "\n      <ul class=\"ckeditor5-toolbar-tray ckeditor5-toolbar-divider__buttons\" data-button-list=\"ckeditor5-toolbar-divider-buttons\" role=\"listbox\" aria-orientation=\"horizontal\" aria-labelledby=\"ckeditor5-toolbar-divider-buttons-label\">\n        ".concat(buttons.map(function (button) {
      return Drupal.theme.ckeditor5Button({
        button: button,
        listType: 'divider'
      });
    }).join(''), "\n      </ul>\n    ");
  };
  Drupal.theme.ckeditor5AvailableButtons = function (_ref6) {
    var buttons = _ref6.buttons;
    return "\n      <ul class=\"ckeditor5-toolbar-tray ckeditor5-toolbar-available__buttons\" data-button-list=\"ckeditor5-toolbar-available-buttons\" role=\"listbox\" aria-orientation=\"horizontal\" aria-labelledby=\"ckeditor5-toolbar-available-buttons-label\">\n        ".concat(buttons.map(function (button) {
      return Drupal.theme.ckeditor5Button({
        button: button,
        listType: 'available'
      });
    }).join(''), "\n      </ul>\n    ");
  };
  Drupal.theme.ckeditor5Button = function (_ref7) {
    var _ref7$button = _ref7.button,
      label = _ref7$button.label,
      id = _ref7$button.id,
      listType = _ref7.listType;
    var buttonInstructions = {
      divider: Drupal.t('Press the down arrow key to use this divider in the active button list'),
      available: Drupal.t('Press the down arrow key to activate'),
      active: Drupal.t('Press the up arrow key to deactivate. Use the right and left arrow keys to move position')
    };
    var visuallyHiddenLabel = Drupal.t("@listType button @label", {
      '@listType': listType !== 'divider' ? listType : 'available',
      '@label': label
    });
    return "\n      <li class=\"ckeditor5-toolbar-item ckeditor5-toolbar-item-".concat(id, "\" role=\"option\" tabindex=\"0\" data-drupal-selector=\"ckeditor5-toolbar-button\" data-id=\"").concat(id, "\" data-label=\"").concat(label, "\" data-divider=\"").concat(listType === 'divider', "\">\n        <span class=\"ckeditor5-toolbar-button ckeditor5-toolbar-button-").concat(id, "\">\n          <span class=\"visually-hidden\">").concat(visuallyHiddenLabel, ". ").concat(buttonInstructions[listType], "</span>\n        </span>\n        <span class=\"ckeditor5-toolbar-tooltip\" aria-hidden=\"true\">").concat(label, " </span>\n      </li>\n    ");
  };
  Drupal.theme.ckeditor5Admin = function (_ref8) {
    var availableButtons = _ref8.availableButtons,
      dividerButtons = _ref8.dividerButtons,
      activeToolbar = _ref8.activeToolbar,
      helpMessage = _ref8.helpMessage;
    return "\n    <div data-drupal-selector=\"ckeditor5-admin-help-message\">\n      <p>".concat(helpMessage.join('</p><p>'), "</p>\n    </div>\n    <div class=\"ckeditor5-toolbar-disabled\">\n      <div class=\"ckeditor5-toolbar-available\">\n        <label id=\"ckeditor5-toolbar-available-buttons-label\">").concat(Drupal.t('Available buttons'), "</label>\n        ").concat(availableButtons, "\n      </div>\n      <div class=\"ckeditor5-toolbar-divider\">\n        <label id=\"ckeditor5-toolbar-divider-buttons-label\">").concat(Drupal.t('Button divider'), "</label>\n        ").concat(dividerButtons, "\n      </div>\n    </div>\n    <div class=\"ckeditor5-toolbar-active\">\n      <label id=\"ckeditor5-toolbar-active-buttons-label\">").concat(Drupal.t('Active toolbar'), "</label>\n      ").concat(activeToolbar, "\n    </div>\n    ");
  };
  var originalFilterStatusAttach = Drupal.behaviors.filterStatus.attach;
  Drupal.behaviors.filterStatus.attach = function (context, settings) {
    var filterStatusCheckboxes = document.querySelectorAll('#filters-status-wrapper input.form-checkbox');
    once.remove('filter-status', filterStatusCheckboxes);
    $(filterStatusCheckboxes).off('click.filterUpdate');
    originalFilterStatusAttach(context, settings);
  };
  Drupal.behaviors.tabErrorsVisible = {
    attach: function attach(context) {
      context.querySelectorAll('details .form-item .error').forEach(function (item) {
        var details = item.closest('details');
        if (details.style.display === 'none') {
          var tabSelect = document.querySelector("[href='#".concat(details.id, "']"));
          if (tabSelect) {
            tabSelect.click();
          }
        }
      });
    }
  };
})(Drupal, drupalSettings, jQuery, JSON, once, Sortable, tabbable);;

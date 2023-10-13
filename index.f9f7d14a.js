let e;var t,r,n,i,o,a,s,c,u,l,d,p,h,f,g,m,v,y,b,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function w(e){return e&&e.__esModule?e.default:e}var k={},E={},S=_.parcelRequire3a11;null==S&&((S=function(e){if(e in k)return k[e].exports;if(e in E){var t=E[e];delete E[e];var r={id:e,exports:{}};return k[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){E[e]=t},_.parcelRequire3a11=S);var $={},O={},F=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
O=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
F("object"==typeof self&&self)||F("object"==typeof _&&_)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||O||Function("return this")();var j={},L={};// Detect IE8's incomplete defineProperty implementation
j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var x={},M={};M=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;x=M?P.bind(P):function(){return P.apply(P,arguments)};var T={}.propertyIsEnumerable,I=Object.getOwnPropertyDescriptor;a=I&&!T.call({1:2},1)?function(e){var t=I(this,e);return!!t&&t.enumerable}:T;var q={};q=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var D={},H={},A={},N=Function.prototype,U=N.call,C=M&&N.bind.bind(U,U),R={},V=(A=M?C:function(e){return function(){return U.apply(e,arguments)}})({}.toString),W=A("".slice);R=function(e){return W(V(e),8,-1)};var z=Object,G=A("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
H=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?G(e,""):z(e)}:z;var Q={},B={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
B=function(e){return null==e};var J=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
Q=function(e){if(B(e))throw J("Can't call method on "+e);return e},D=function(e){return H(Q(e))};var Y={},K={},X={},Z={},ee={},et="object"==typeof document&&document.all,er=(ee={all:et,IS_HTMLDDA:void 0===et&&void 0!==et}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Z=ee.IS_HTMLDDA?function(e){return"function"==typeof e||e===er}:function(e){return"function"==typeof e};var en=ee.all;X=ee.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Z(e)||e===en}:function(e){return"object"==typeof e?null!==e:Z(e)};var ei={},eo={};eo=function(e,t){var r;return arguments.length<2?(r=O[e],Z(r)?r:void 0):O[e]&&O[e][t]};var ea={};ea=A({}.isPrototypeOf);var es={},ec={},eu={},el={};el="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ed=O.process,ep=O.Deno,eh=ed&&ed.versions||ep&&ep.version,ef=eh&&eh.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(c=(s=ef.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!c&&el&&(!(s=el.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=el.match(/Chrome\/(\d+)/))&&(c=+s[1]),eu=c;var eg=O.String;es=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ec=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eg(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eu&&eu<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var em=Object;ei=es?function(e){return"symbol"==typeof e}:function(e){var t=eo("Symbol");return Z(t)&&ea(t.prototype,em(e))};var ev={},ey={},eb={},e_=String;eb=function(e){try{return e_(e)}catch(e){return"Object"}};var ew=TypeError;// `Assert: IsCallable(argument) is true`
ey=function(e){if(Z(e))return e;throw ew(eb(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ev=function(e,t){var r=e[t];return B(r)?void 0:ey(r)};var ek={},eE=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ek=function(e,t){var r,n;if("string"===t&&Z(r=e.toString)&&!X(n=x(r,e))||Z(r=e.valueOf)&&!X(n=x(r,e))||"string"!==t&&Z(r=e.toString)&&!X(n=x(r,e)))return n;throw eE("Can't convert object to primitive value")};var eS={},e$={};e$=!1;var eO={},eF={},ej=Object.defineProperty;eF=function(e,t){try{ej(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var eL="__core-js_shared__";eO=O[eL]||eF(eL,{}),(eS=function(e,t){return eO[e]||(eO[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:e$?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var ex={},eM={},eP=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eM=function(e){return eP(Q(e))};var eT=A({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
ex=Object.hasOwn||function(e,t){return eT(eM(e),t)};var eI={},eq=0,eD=Math.random(),eH=A(1..toString);eI=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eH(++eq+eD,36)};var eA=O.Symbol,eN=eS("wks"),eU=es?eA.for||eA:eA&&eA.withoutSetter||eI,eC=TypeError,eR=(ex(eN,t="toPrimitive")||(eN[t]=ec&&ex(eA,t)?eA[t]:eU("Symbol."+t)),eN[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
K=function(e,t){if(!X(e)||ei(e))return e;var r,n=ev(e,eR);if(n){if(void 0===t&&(t="default"),r=x(n,e,t),!X(r)||ei(r))return r;throw eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),ek(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Y=function(e){var t=K(e,"string");return ei(t)?t:t+""};var eV={},eW={},ez=O.document,eG=X(ez)&&X(ez.createElement);eW=function(e){return eG?ez.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eV=!j&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eQ=Object.getOwnPropertyDescriptor;o=j?eQ:function(e,t){if(e=D(e),t=Y(t),eV)try{return eQ(e,t)}catch(e){}if(ex(e,t))return q(!x(a,e,t),e[t])};var eB={},eJ={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eJ=j&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eK=String,eX=TypeError;// `Assert: Type(argument) is Object`
eY=function(e){if(X(e))return e;throw eX(eK(e)+" is not an object")};var eZ=TypeError,e0=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,e2="enumerable",e3="configurable",e4="writable";u=j?eJ?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e1(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e3 in r?r[e3]:n[e3],enumerable:e2 in r?r[e2]:n[e2],writable:!1})}return e0(e,t,r)}:e0:function(e,t,r){if(eY(e),t=Y(t),eY(r),eV)try{return e0(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eZ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=j?function(e,t,r){return u(e,t,q(1,r))}:function(e,t,r){return e[t]=r,e};var e7={},e9={},e5=Function.prototype,e8=j&&Object.getOwnPropertyDescriptor,e6=ex(e5,"name")&&(!j||j&&e8(e5,"name").configurable),te={},tt=A(Function.toString);Z(eO.inspectSource)||(eO.inspectSource=function(e){return tt(e)}),te=eO.inspectSource;var tr={},tn={},ti=O.WeakMap;tn=Z(ti)&&/native code/.test(String(ti));var to={},ta=eS("keys");to=function(e){return ta[e]||(ta[e]=eI(e))};var ts={};ts={};var tc="Object already initialized",tu=O.TypeError,tl=O.WeakMap;if(tn||eO.state){var tp=eO.state||(eO.state=new tl);/* eslint-disable no-self-assign -- prototype methods protection */tp.get=tp.get,tp.has=tp.has,tp.set=tp.set,/* eslint-enable no-self-assign -- prototype methods protection */l=function(e,t){if(tp.has(e))throw tu(tc);return t.facade=e,tp.set(e,t),t},d=function(e){return tp.get(e)||{}},p=function(e){return tp.has(e)}}else{var th=to("state");ts[th]=!0,l=function(e,t){if(ex(e,th))throw tu(tc);return t.facade=e,eB(e,th,t),t},d=function(e){return ex(e,th)?e[th]:{}},p=function(e){return ex(e,th)}}var tf=(tr={set:l,get:d,has:p,enforce:function(e){return p(e)?d(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!X(t)||(r=d(t)).type!==e)throw tu("Incompatible receiver, "+e+" required");return r}}}).enforce,tg=tr.get,tm=String,tv=Object.defineProperty,ty=A("".slice),tb=A("".replace),t_=A([].join),tw=j&&!L(function(){return 8!==tv(function(){},"length",{value:8}).length}),tk=String(String).split("String"),tE=e9=function(e,t,r){"Symbol("===ty(tm(t),0,7)&&(t="["+tb(tm(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ex(e,"name")||e6&&e.name!==t)&&(j?tv(e,"name",{value:t,configurable:!0}):e.name=t),tw&&r&&ex(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&ex(r,"constructor")&&r.constructor?j&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return ex(n,"source")||(n.source=t_(tk,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tE(function(){return Z(this)&&tg(this).source||te(this)},"toString"),e7=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Z(r)&&e9(r,o,n),n.global)i?e[t]=r:eF(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tS={},t$={},tO={},tF={},tj={},tL={},tx=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tL=Math.trunc||function(e){var t=+e;return(t>0?tM:tx)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tL(t)};var tP=Math.max,tT=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tF=function(e,t){var r=tj(e);return r<0?tP(r+t,0):tT(r,t)};var tI={},tq={},tD=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tq=function(e){return e>0?tD(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tI=function(e){return tq(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tH=function(e){return function(t,r,n){var i,o=D(t),a=tI(o),s=tF(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tH(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tH(!1)}.indexOf,tN=A([].push);tO=function(e,t){var r,n=D(e),i=0,o=[];for(r in n)!ex(ts,r)&&ex(n,r)&&tN(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)ex(n,r=t[i++])&&(~tA(o,r)||tN(o,r));return o};var tU=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");h=Object.getOwnPropertyNames||function(e){return tO(e,tU)},f=Object.getOwnPropertySymbols;var tC=A([].concat);// all object keys, includes non-enumerable and symbols
t$=eo("Reflect","ownKeys")||function(e){var t=h(eY(e));return f?tC(t,f(e)):t},tS=function(e,t,r){for(var n=t$(t),i=0;i<n.length;i++){var a=n[i];ex(e,a)||r&&ex(r,a)||u(e,a,o(t,a))}};var tR={},tV=/#|\.prototype\./,tW=function(e,t){var r=tG[tz(e)];return r===tB||r!==tQ&&(Z(t)?L(t):!!t)},tz=tW.normalize=function(e){return String(e).replace(tV,".").toLowerCase()},tG=tW.data={},tQ=tW.NATIVE="N",tB=tW.POLYFILL="P";tR=tW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/$=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[c]||eF(c,{}):(O[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tS(a,i)}(e.sham||i&&i.sham)&&eB(a,"sham",!0),e7(r,n,a,e)}};var tJ={},tY={},tK=Function.prototype,tX=tK.apply,tZ=tK.call;// eslint-disable-next-line es/no-reflect -- safe
tY="object"==typeof Reflect&&Reflect.apply||(M?tZ.bind(tX):function(){return tZ.apply(tX,arguments)});var t0={},t1={},t2=(t1=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return A(e)})(t1.bind);// optional / simple context binding
t0=function(e,t){return ey(e),void 0===t?e:M?t2(e,t):function(){return e.apply(t,arguments)}};var t3={};t3=eo("document","documentElement");var t4={};t4=A([].slice);var t7={},t9=TypeError;t7=function(e,t){if(e<t)throw t9("Not enough arguments");return e};var t5={};// eslint-disable-next-line redos/no-vulnerable -- safe
t5=/(?:ipad|iphone|ipod).*applewebkit/i.test(el);var t8={};t8="process"===R(O.process);var t6=O.setImmediate,re=O.clearImmediate,rt=O.process,rr=O.Dispatch,rn=O.Function,ri=O.MessageChannel,ro=O.String,ra=0,rs={},rc="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
g=O.location});var ru=function(e){if(ex(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rd=function(e){ru(e.data)},rp=function(e){// old engines have not location.origin
O.postMessage(ro(e),g.protocol+"//"+g.host)};t6&&re||(t6=function(e){t7(arguments.length,1);var t=Z(e)?e:rn(e),r=t4(arguments,1);return rs[++ra]=function(){tY(t,void 0,r)},m(ra),ra},re=function(e){delete rs[e]},t8?m=function(e){rt.nextTick(rl(e))}:rr&&rr.now?m=function(e){rr.now(rl(e))}:ri&&!t5?(y=(v=new ri).port2,v.port1.onmessage=rd,m=t0(y.postMessage,y)):O.addEventListener&&Z(O.postMessage)&&!O.importScripts&&g&&"file:"!==g.protocol&&!L(rp)?(m=rp,O.addEventListener("message",rd,!1)):m=rc in eW("script")?function(e){t3.appendChild(eW("script"))[rc]=function(){t3.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rh=(tJ={set:t6,clear:re}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rh},{clearImmediate:rh});var rf=tJ.set,rg={},rm={};/* global Bun -- Deno case */rm="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=O.Function,ry=/MSIE .\./.test(el)||rm&&((r=O.Bun.version.split(".")).length<3||"0"===r[0]&&(r[1]<3||"3"===r[1]&&"0"===r[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rg=function(e,t){var r=t?2:1;return ry?function(n,i/* , ...arguments */){var o=t7(arguments.length,1)>r,a=Z(n)?n:rv(n),s=o?t4(arguments,r):[],c=o?function(){tY(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rb=O.setImmediate?rg(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==rb},{setImmediate:rb});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new F(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function v(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=m.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=r_}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=r_:Function("r","regeneratorRuntime = r")(r_)}const rw="https://forkify-api.herokuapp.com/api/v2/recipes/",rk="20d4de36-4184-4264-9cf0-538b617cbe58",rE=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rS={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},r$=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rE(`${rw}${e}?key=${rk}`);rS.recipe=r$(t),rS.bookmarks.some(t=>t.id===e)?rS.recipe.bookmarked=!0:rS.recipe.bookmarked=!1,console.log(rS.recipe)}catch(e){throw(//temp error handling
console.error(`${e} 💥💥💥`),e)}},rF=async function(e){try{rS.search.query=e;let t=await rE(`${rw}?search=${e}&key=${rk}`);console.log(t),rS.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),rS.search.page=1}catch(e){throw console.error(`${e} 💥💥💥`),e}},rj=function(e=rS.search.page){rS.search.page=e;let t=(e-1)*rS.search.resultsPerPage,r=e*rS.search.resultsPerPage;//0;
return rS.search.results.slice(t,r)},rL=function(e){rS.recipe.ingredients.forEach(t=>{// newQt = oldQt * newServings / oldServings  -> formula
t.quantity=t.quantity*e/rS.recipe.servings}),rS.recipe.servings=e},rx=function(){localStorage.setItem("bookmarks",JSON.stringify(rS.bookmarks))},rM=function(e){// Add bookmark
rS.bookmarks.push(e),e.id==rS.recipe.id&&(rS.recipe.bookmarked=!0),//persist bookmark array in local storage
rx()},rP=function(e){// Delete bookmarker from bookmarks array
let t=rS.bookmarks.findIndex(t=>t.id===e);rS.bookmarks.splice(t,1),e==rS.recipe.id&&(rS.recipe.bookmarked=!1),//persist bookmark array in local storage
rx()};!function(){let e=localStorage.getItem("bookmarks");e&&(rS.bookmarks=JSON.parse(e))}();const rT=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("Wrong ingredient format!! Please use the correct Format :P");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rE(`${rw}?key=${rk}`,r);console.log(n),rS.recipe=r$(n),rM(rS.recipe)}catch(e){throw e}};var rI={};rI=new URL(S("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rq{_data;/**
   *  Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} [render = true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup is returned if render=false
   * @this {Object} View instance
   * @author Cristian De la Torre
   * @todo Finish implementation
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/w(rI)}#icon-loader"></use>
    </svg>
  </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/w(rI)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
    </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/w(rI)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
    </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var e=i(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(n(this.numerator)){var e=i(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},b=Fraction;class rD extends rq{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){//multiple events has the  same function:
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
//solution
["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServing(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/w(rI)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/w(rI)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>
          <svg>
            <use href="${/*@__PURE__*/w(rI)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>
          <svg>
            <use href="${/*@__PURE__*/w(rI)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
        <use href="${/*@__PURE__*/w(rI)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/w(rI)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMArkupIngredients).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href= "${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/w(rI)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `}_generateMArkupIngredients(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/w(rI)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new b(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>
      `}}var rH=new rD;class rA{#e=document.querySelector(".search");//change .# for ._
getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rN=new rA,rU=new class extends rq{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""} " href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>
                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                        <svg>
                            <use href="${/*@__PURE__*/w(rI)}#icon-user"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    `}};class rC extends rq{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_message="";_generateMarkup(){return this._data.map(e=>rU.render(e,!1)).join("")}}var rR=new rC;class rV extends rq{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){// e.preventDefault();
let r=t.target.closest(".btn--inline");if(!r)return;console.log(r);let n=+r.dataset.goto;console.log("goint to page: "+n),e(n)})}//refactor
_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
(console.log("this is the number of pages:  "+t),1===e&&t>1)?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1} </span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/w(rI)}#icon-arrow-right"></use>
          </svg>
        </button
      `:e===t&&t>1?`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/w(rI)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/w(rI)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>

        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1} </span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/w(rI)}#icon-arrow-right"></use>
          </svg>
        </button
      `:"")}}var rW=new rV;class rz extends rq{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){// console.log(this._data);
return this._data.map(e=>rU.render(e,!1)).join("")}}var rG=new rz;class rQ extends rq{_parentElement=document.querySelector(".upload");_message="Recipe was succesfully uploaded =D ";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");keepValues=!1;constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){// this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
// this._btnOpen.addEventListener('click', this._restoreForm);
this._btnOpen.addEventListener("click",()=>{this.toggleWindow(),this._restoreForm()})}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(t){console.log(" ---- this is the PE",this),this._parentElement.addEventListener("submit",function(r){r.preventDefault();let n=[...new FormData(this)],i=Object.fromEntries(n);e=Object.assign({},i),t(i)})}_restoreForm(){console.log("Im restoring ... ");let t=`
            <form class="upload">
            <div class="upload__column">
              <h3 class="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input value="${this.keepValues?e.title:""}" required name="title" type="text" />
              <label>URL</label>
              <input value="${this.keepValues?e.sourceUrl:""}" required name="sourceUrl" type="text" />
              <label>Image URL</label>
              <input value="${this.keepValues?e.image:""}" required name="image" type="text" />
              <label>Publisher</label>
              <input value="" required name="publisher" type="text" />
              <label>Prep time</label>
              <input value="${this.keepValues?e.cookingTime:""}" required name="cookingTime" type="number" />
              <label>Servings</label>
              <input value="${this.keepValues?e.servings:""}" required name="servings" type="number" />
            </div>

            <div class="upload__column">
              <h3 class="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                value="${this.keepValues?e["ingredient-1"]:""}"
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 2</label>
              <input
                value="${this.keepValues?e["ingredient-2"]:""}"
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 3</label>
              <input
                value="${this.keepValues?e["ingredient-3"]:""}"
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 4</label>
              <input
                value = "${this.keepValues?e["ingredient-4"]:""}"
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 5</label>
              <input
                value = "${this.keepValues?e["ingredient-5"]:""}"
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 6</label>
              <input
                value = "${this.keepValues?e["ingredient-6"]:""}"
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
            </div>

            <button class="btn upload__btn">
              <svg>
                <use href="src/img/icons.svg#icon-upload-cloud"></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t),this.keepValues=!1}}var rB=new rQ;const rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rH.renderSpinner(),rR.update(rj()),rG.update(rS.bookmarks),// 2) loading recipe
await rO(e),rH.render(rS.recipe)}catch(e){rH.renderError(),console.log(e)}},rY=async function(){try{rR.renderSpinner(),console.log(rR);// 1). Get seach query
let e=rN.getQuery();if(!e)return;// 2). Search Result
await rF(e),rR.render(rj()),rW.render(rS.search)}catch(e){console.log(e)}},rK=async function(e){try{rB.renderSpinner(),// Upload the new recipe data
await rT(e),console.log(rS.recipe),rH.render(rS.recipe),rB.renderMessage(void 0),rG.render(rS.bookmarks),// Change ID in the URL
window.history.pushState(null,"",`#${rS.recipe.id}`),// Close Form Window
setTimeout(function(){rB.toggleWindow()},1500)}catch(e){console.log("\uD83D\uDCA5",e),rB.renderError(e.message),rB.keepValues=!0;// setTimeout(function () {
//   addRecipeView.toggleWindow();
//   addRecipeView._restoreForm(true);
// }, MODAL_CLOSE_SEC * 2000);
}};rG.addHandlerRender(function(){rG.render(rS.bookmarks)}),rH.addHandlerRender(rJ),rH.addHandlerUpdateServing(function(e){// Update the recipe servings in state
rL(e),rH.update(rS.recipe)}),rH.addHandlerAddBookmark(function(){rS.recipe.bookmarked?rP(rS.recipe.id):rM(rS.recipe),rH.update(rS.recipe),rG.render(rS.bookmarks)}),rN.addHandlerSearch(rY),rW.addHandlerClick(function(e){console.log(" we are going too "+e),rR.render(rj(e)),rW.render(rS.search)}),rB.addHandlerUpload(rK);//# sourceMappingURL=index.f9f7d14a.js.map

//# sourceMappingURL=index.f9f7d14a.js.map

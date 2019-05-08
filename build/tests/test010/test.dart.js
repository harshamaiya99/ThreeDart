{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.ls(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iu(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={ic:function ic(a){this.a=a},
ia:function(){return new P.ca("No element")},
kh:function(){return new P.ca("Too many elements")},
o:function o(a){this.a=a},
en:function en(){},
bv:function bv(){},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eR:function eR(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eS:function eS(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(){},
dH:function dH(){},
dG:function dG(){},
bL:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
l9:function(a){return v.types[H.a4(a)]},
lg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iax},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ag(a)
if(typeof u!=="string")throw H.f(H.bG(a))
return u},
ky:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eF(u)
t=u[0]
s=u[1]
return new H.fc(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c6:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
by:function(a){return H.kp(a)+H.ir(H.bg(a),0,null)},
kp:function(a){var u,t,s,r,q,p,o,n,m
u=J.R(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icn){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bL(r.length>1&&C.i.aC(r,0)===36?C.i.b3(r,1):r)},
j2:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kx:function(a){var u,t,s,r
u=H.b([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bG(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.b9(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bG(r))}return H.j2(u)},
j3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bG(s))
if(s<0)throw H.f(H.bG(s))
if(s>65535)return H.kx(a)}return H.j2(a)},
ie:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b9(u,10))>>>0,56320|u&1023)}throw H.f(P.aq(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kw:function(a){var u=H.bx(a).getFullYear()+0
return u},
ku:function(a){var u=H.bx(a).getMonth()+1
return u},
kq:function(a){var u=H.bx(a).getDate()+0
return u},
kr:function(a){var u=H.bx(a).getHours()+0
return u},
kt:function(a){var u=H.bx(a).getMinutes()+0
return u},
kv:function(a){var u=H.bx(a).getSeconds()+0
return u},
ks:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
B:function(a){throw H.f(H.bG(a))},
k:function(a,b){if(a==null)J.bi(a)
throw H.f(H.cC(a,b))},
cC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
u=H.a4(J.bi(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.br(b,a,"index",null,u)
return P.fa(b,"index",null)},
l6:function(a,b,c){if(a>c)return new P.bz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end","Invalid value")
return new P.aw(!0,b,"end",null)},
bG:function(a){return new P.aw(!0,a,null,null)},
l2:function(a){if(typeof a!=="number")throw H.f(H.bG(a))
return a},
f:function(a){var u
if(a==null)a=new P.dh()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jH})
u.name=""}else u.toString=H.jH
return u},
jH:function(){return J.ag(this.dartException)},
q:function(a){throw H.f(a)},
x:function(a){throw H.f(P.b3(a))},
aL:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
je:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iY:function(a,b){return new H.f5(a,b==null?null:b.method)},
id:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eI(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.i0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.b9(s,16)&8191)===10)switch(r){case 438:return u.$1(H.id(H.e(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iY(H.e(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jK()
p=$.jL()
o=$.jM()
n=$.jN()
m=$.jQ()
l=$.jR()
k=$.jP()
$.jO()
j=$.jT()
i=$.jS()
h=q.a8(t)
if(h!=null)return u.$1(H.id(H.H(t),h))
else{h=p.a8(t)
if(h!=null){h.method="call"
return u.$1(H.id(H.H(t),h))}else{h=o.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=m.a8(t)
if(h==null){h=l.a8(t)
if(h==null){h=k.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=j.a8(t)
if(h==null){h=i.a8(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iY(H.H(t),h))}}return u.$1(new H.fR(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ds()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aw(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ds()
return a},
bJ:function(a){var u
if(a==null)return new H.e_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e_(a)},
l8:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.V(0,a[t],a[s])}return b},
lf:function(a,b,c,d,e,f){H.d(a,"$ib7")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.p("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lf)
a.$identity=u
return u},
k9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.R(d).$ia){u.$reflectionInfo=d
s=H.ky(u).r}else s=d
r=e?Object.create(new H.fr().constructor.prototype):Object.create(new H.bP(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aC
if(typeof p!=="number")return p.D()
$.aC=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iN(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.l9,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iL:H.i4
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iN(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
k6:function(a,b,c,d){var u=H.i4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iN:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k8(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k6(t,!r,u,b)
if(t===0){r=$.aC
if(typeof r!=="number")return r.D()
$.aC=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bQ
if(q==null){q=H.ec("self")
$.bQ=q}return new Function(r+H.e(q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aC
if(typeof r!=="number")return r.D()
$.aC=r+1
o+=r
r="return function("+o+"){return this."
q=$.bQ
if(q==null){q=H.ec("self")
$.bQ=q}return new Function(r+H.e(q)+"."+H.e(u)+"("+o+");}")()},
k7:function(a,b,c,d){var u,t
u=H.i4
t=H.iL
switch(b?-1:a){case 0:throw H.f(H.kB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k8:function(a,b){var u,t,s,r,q,p,o,n
u=$.bQ
if(u==null){u=H.ec("self")
$.bQ=u}t=$.iK
if(t==null){t=H.ec("receiver")
$.iK=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.k7(r,!p,s,b)
if(r===1){u="return function(){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+");"
t=$.aC
if(typeof t!=="number")return t.D()
$.aC=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+", "+n+");"
t=$.aC
if(typeof t!=="number")return t.D()
$.aC=t+1
return new Function(u+t+"}")()},
iu:function(a,b,c,d,e,f,g){return H.k9(a,b,H.a4(c),d,!!e,!!f,g)},
i4:function(a){return a.a},
iL:function(a){return a.c},
ec:function(a){var u,t,s,r,q
u=new H.bP("self","target","receiver","name")
t=J.eF(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aA(a,"String"))},
ma:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"double"))},
ll:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"num"))},
is:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aA(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aA(a,"int"))},
jF:function(a,b){throw H.f(H.aA(a,H.bL(H.H(b).substring(2))))},
ln:function(a,b){throw H.f(H.k5(a,H.bL(H.H(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.jF(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.ln(a,b)},
hW:function(a){if(a==null)return a
if(!!J.R(a).$ia)return a
throw H.f(H.aA(a,"List<dynamic>"))},
lh:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ia)return a
if(u[b])return a
H.jF(a,b)},
jz:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
e7:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jz(J.R(a))
if(u==null)return!1
return H.jq(u,null,b,null)},
i:function(a,b){var u,t
if(a==null)return a
if($.io)return a
$.io=!0
try{if(H.e7(a,b))return a
u=H.hZ(b)
t=H.aA(a,u)
throw H.f(t)}finally{$.io=!1}},
iv:function(a,b){if(a!=null&&!H.it(a,b))H.q(H.aA(a,H.hZ(b)))
return a},
aA:function(a,b){return new H.fH("TypeError: "+P.er(a)+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
k5:function(a,b){return new H.ed("CastError: "+P.er(a)+": type '"+H.ju(a)+"' is not a subtype of type '"+b+"'")},
ju:function(a){var u,t
u=J.R(a)
if(!!u.$ibR){t=H.jz(u)
if(t!=null)return H.hZ(t)
return"Closure"}return H.by(a)},
ls:function(a){throw H.f(new P.ei(H.H(a)))},
kB:function(a){return new H.fh(a)},
jA:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bg:function(a){if(a==null)return
return a.$ti},
mb:function(a,b,c){return H.bK(a["$a"+H.e(c)],H.bg(b))},
hR:function(a,b,c,d){var u
H.H(c)
H.a4(d)
u=H.bK(a["$a"+H.e(c)],H.bg(b))
return u==null?null:u[d]},
a3:function(a,b,c){var u
H.H(b)
H.a4(c)
u=H.bK(a["$a"+H.e(b)],H.bg(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a4(b)
u=H.bg(a)
return u==null?null:u[b]},
hZ:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
H.h(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bL(a[0].name)+H.ir(a,1,b)
if(typeof a=="function")return H.bL(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.e(b[t])}if('func' in a)return H.kT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.i.D(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bf(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bf(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bf(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.l7(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bf(d[c],b)+(" "+H.e(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ir:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.aU("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.i(0)+">"},
bK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cB:function(a,b,c,d){var u,t
H.H(b)
H.hW(c)
H.H(d)
if(a==null)return!1
u=H.bg(a)
t=J.R(a)
if(t[b]==null)return!1
return H.jx(H.bK(t[d],u),null,c,null)},
h:function(a,b,c,d){H.H(b)
H.hW(c)
H.H(d)
if(a==null)return a
if(H.cB(a,b,c,d))return a
throw H.f(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bL(b.substring(2))+H.ir(c,0,null),v.mangledGlobalNames)))},
jx:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.av(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.av(a[t],b,c[t],d))return!1
return!0},
m8:function(a,b,c){return a.apply(b,H.bK(J.R(b)["$a"+H.e(c)],H.bg(b)))},
jC:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="D"||a===-1||a===-2||H.jC(u)}return!1},
it:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="D"||b===-1||b===-2||H.jC(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.it(a,"type" in b?b.type:null))return!0
if('func' in b)return H.e7(a,b)}u=J.R(a).constructor
t=H.bg(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.av(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.it(a,b))throw H.f(H.aA(a,H.hZ(b)))
return a},
av:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.av(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.jq(a,b,c,d)
if('func' in a)return c.name==="b7"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.av("type" in a?a.type:null,b,s,d)
else if(H.av(a,b,s,d))return!0
else{if(!('$i'+"bX" in t.prototype))return!1
r=t.prototype["$a"+"bX"]
q=H.bK(r,u?a.slice(1):null)
return H.av(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jx(H.bK(m,u),b,p,d)},
jq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.av(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.av(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.av(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.av(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lk(h,b,g,d)},
lk:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.av(c[r],d,a[r],b))return!1}return!0},
m9:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
li:function(a){var u,t,s,r,q,p
u=H.H($.jB.$1(a))
t=$.hP[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.jw.$2(a,u))
if(u!=null){t=$.hP[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hY(s)
$.hP[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hV[u]=s
return s}if(q==="-"){p=H.hY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jE(a,s)
if(q==="*")throw H.f(P.jf(u))
if(v.leafTags[u]===true){p=H.hY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jE(a,s)},
jE:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hY:function(a){return J.iA(a,!1,null,!!a.$iax)},
lj:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hY(u)
else return J.iA(u,c,null,null)},
ld:function(){if(!0===$.iz)return
$.iz=!0
H.le()},
le:function(){var u,t,s,r,q,p,o,n
$.hP=Object.create(null)
$.hV=Object.create(null)
H.lc()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jG.$1(q)
if(p!=null){o=H.lj(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lc:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bF(C.P,H.bF(C.U,H.bF(C.A,H.bF(C.A,H.bF(C.T,H.bF(C.Q,H.bF(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jB=new H.hS(q)
$.jw=new H.hT(p)
$.jG=new H.hU(o)},
bF:function(a,b){return a(b)||b},
kj:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.ey("Illegal RegExp pattern ("+String(r)+")",a,null))},
lq:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iD:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fc:function fc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fF:function fF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f5:function f5(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
i0:function i0(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bR:function bR(){},
fx:function fx(){},
fr:function fr(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
ed:function ed(a){this.a=a},
fh:function fh(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function d3(a,b){this.a=a
this.$ti=b},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
eH:function eH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function(a){return a},
cx:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cC(b,a))},
kS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.l6(a,b,c))
return b},
de:function de(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
df:function df(){},
f2:function f2(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
l7:function(a){return J.iS(a?Object.keys(a):[],null)},
lm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hQ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iz==null){H.ld()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.jf("Return interceptor for "+H.e(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iE()]
if(q!=null)return q
q=H.li(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.iE(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
ki:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.i3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aq(a,0,4294967295,"length",null))
return J.iS(new Array(a),b)},
iS:function(a,b){return J.eF(H.b(a,[b]))},
eF:function(a){H.hW(a)
a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cY.prototype
return J.cX.prototype}if(typeof a=="string")return J.bu.prototype
if(a==null)return J.cZ.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.hQ(a)},
iw:function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.hQ(a)},
ix:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.hQ(a)},
iy:function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.cn.prototype
return a},
af:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.hQ(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
jZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iw(a).l(a,b)},
k_:function(a,b,c,d){return J.af(a).f7(a,b,c,d)},
e8:function(a,b){return J.af(a).hB(a,b)},
iH:function(a,b){return J.af(a).A(a,b)},
i1:function(a,b){return J.ix(a).a2(a,b)},
k0:function(a){return J.af(a).giD(a)},
bh:function(a){return J.R(a).gG(a)},
bN:function(a){return J.ix(a).gP(a)},
bi:function(a){return J.iw(a).gn(a)},
k1:function(a){return J.af(a).gjI(a)},
i2:function(a,b){return J.af(a).aO(a,b)},
iI:function(a){return J.ix(a).jA(a)},
k2:function(a,b,c){return J.iy(a).b4(a,b,c)},
k3:function(a){return J.iy(a).jQ(a)},
ag:function(a){return J.R(a).i(a)},
a_:function a_(){},
eG:function eG(){},
cZ:function cZ(){},
d0:function d0(){},
f7:function f7(){},
cn:function cn(){},
ba:function ba(){},
aE:function aE(a){this.$ti=a},
ib:function ib(a){this.$ti=a},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d_:function d_(){},
cY:function cY(){},
cX:function cX(){},
bu:function bu(){}},P={
kH:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.l_()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bH(new P.h7(u),1)).observe(t,{childList:true})
return new P.h6(u,t,s)}else if(self.setImmediate!=null)return P.l0()
return P.l1()},
kI:function(a){self.scheduleImmediate(H.bH(new P.h8(H.i(a,{func:1,ret:-1})),0))},
kJ:function(a){self.setImmediate(H.bH(new P.h9(H.i(a,{func:1,ret:-1})),0))},
kK:function(a){P.ih(C.q,H.i(a,{func:1,ret:-1}))},
ih:function(a,b){var u
H.i(b,{func:1,ret:-1})
u=C.h.Z(a.a,1000)
return P.kQ(u<0?0:u,b)},
jd:function(a,b){var u
H.i(b,{func:1,ret:-1,args:[P.aJ]})
u=C.h.Z(a.a,1000)
return P.kR(u<0?0:u,b)},
kQ:function(a,b){var u=new P.e0(!0)
u.f2(a,b)
return u},
kR:function(a,b){var u=new P.e0(!1)
u.f3(a,b)
return u},
kL:function(a,b){var u,t,s
b.a=1
try{a.eb(new P.hh(b),new P.hi(b),null)}catch(s){u=H.an(s)
t=H.bJ(s)
P.lo(new P.hj(b,u,t))}},
jl:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iau")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.cr(b,t)}else{t=H.d(b.c,"$iaO")
b.a=2
b.c=a
a.d9(t)}},
cr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia6")
t=t.b
p=q.a
o=q.b
t.toString
P.hL(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cr(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.d(m,"$ia6")
t=t.b
p=m.a
o=m.b
t.toString
P.hL(null,null,t,p,o)
return}j=$.Q
if(j!=l)$.Q=l
else j=null
t=b.c
if(t===8)new P.hn(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hm(s,b,m).$0()}else if((t&2)!==0)new P.hl(u,s,b).$0()
if(j!=null)$.Q=j
t=s.b
if(!!J.R(t).$ibX){if(t.a>=4){i=H.d(o.c,"$iaO")
o.c=null
b=o.b8(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jl(t,o)
return}}h=b.b
i=H.d(h.c,"$iaO")
h.c=null
b=h.b8(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia6")
h.a=8
h.c=p}u.a=h
t=h}},
kW:function(a,b){if(H.e7(a,{func:1,args:[P.K,P.ae]}))return H.i(a,{func:1,ret:null,args:[P.K,P.ae]})
if(H.e7(a,{func:1,args:[P.K]}))return H.i(a,{func:1,ret:null,args:[P.K]})
throw H.f(P.i3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kV:function(){var u,t
for(;u=$.bE,u!=null;){$.cA=null
t=u.b
$.bE=t
if(t==null)$.cz=null
u.a.$0()}},
kZ:function(){$.ip=!0
try{P.kV()}finally{$.cA=null
$.ip=!1
if($.bE!=null)$.iF().$1(P.jy())}},
jt:function(a){var u=new P.dO(H.i(a,{func:1,ret:-1}))
if($.bE==null){$.cz=u
$.bE=u
if(!$.ip)$.iF().$1(P.jy())}else{$.cz.b=u
$.cz=u}},
kY:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
u=$.bE
if(u==null){P.jt(a)
$.cA=$.cz
return}t=new P.dO(a)
s=$.cA
if(s==null){t.b=u
$.cA=t
$.bE=t}else{t.b=s.b
s.b=t
$.cA=t
if(t.b==null)$.cz=t}},
lo:function(a){var u,t
u={func:1,ret:-1}
H.i(a,u)
t=$.Q
if(C.l===t){P.hN(null,null,C.l,a)
return}t.toString
P.hN(null,null,t,H.i(t.cb(a),u))},
jc:function(a,b){var u,t
u={func:1,ret:-1}
H.i(b,u)
t=$.Q
if(t===C.l){t.toString
return P.ih(a,b)}return P.ih(a,H.i(t.cb(b),u))},
kF:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aJ]}
H.i(b,u)
t=$.Q
if(t===C.l){t.toString
return P.jd(a,b)}s=t.dm(b,P.aJ)
$.Q.toString
return P.jd(a,H.i(s,u))},
hL:function(a,b,c,d,e){var u={}
u.a=d
P.kY(new P.hM(u,e))},
jr:function(a,b,c,d,e){var u,t
H.i(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
js:function(a,b,c,d,e,f,g){var u,t
H.i(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
kX:function(a,b,c,d,e,f,g,h,i){var u,t
H.i(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
hN:function(a,b,c,d){var u
H.i(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cb(d):c.iE(d,-1)
P.jt(d)},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null
this.c=0},
hF:function hF(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aO:function aO(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hg:function hg(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a
this.b=null},
fs:function fs(){},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
cb:function cb(){},
ft:function ft(){},
aJ:function aJ(){},
a6:function a6(a,b){this.a=a
this.b=b},
hI:function hI(){},
hM:function hM(a,b){this.a=a
this.b=b},
ht:function ht(){},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function(a,b,c){H.hW(a)
return H.h(H.l8(a,new H.aF([b,c])),"$iiT",[b,c],"$aiT")},
kk:function(a,b){return new H.aF([a,b])},
d4:function(a,b,c,d){return new P.hr([d])},
im:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kP:function(a,b,c){var u=new P.dU(a,b,[c])
u.c=a.e
return u},
kg:function(a,b,c){var u,t
if(P.iq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cF()
C.a.h(t,a)
try{P.kU(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.ja(b,H.lh(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
i9:function(a,b,c){var u,t,s
if(P.iq(a))return b+"..."+c
u=new P.aU(b)
t=$.cF()
C.a.h(t,a)
try{s=u
s.a=P.ja(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function(a){var u,t
for(u=0;t=$.cF(),u<t.length;++u)if(a===t[u])return!0
return!1},
kU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.m],"$aa")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.e(u.gE())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gE();++s
if(!u.w()){if(s<=4){C.a.h(b,H.e(o))
return}q=H.e(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE();++s
for(;u.w();o=n,n=m){m=u.gE();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.e(o)
q=H.e(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
iU:function(a,b){var u,t,s
u=P.d4(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s)u.h(0,H.A(a[s],b))
return u},
iV:function(a){var u,t
u={}
if(P.iq(a))return"{...}"
t=new P.aU("")
try{C.a.h($.cF(),a)
t.a+="{"
u.a=!0
a.a_(0,new P.eP(u,t))
t.a+="}"}finally{u=$.cF()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hr:function hr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bD:function bD(a){this.a=a
this.c=this.b=null},
dU:function dU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eM:function eM(){},
S:function S(){},
eO:function eO(){},
eP:function eP(a,b){this.a=a
this.b=b},
bw:function bw(){},
hy:function hy(){},
dV:function dV(){},
bS:function bS(){},
bT:function bT(){},
ep:function ep(){},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eC:function eC(a){this.a=a},
fT:function fT(a){this.a=a},
fU:function fU(){},
hG:function hG(a){this.b=this.a=0
this.c=a},
ke:function(a){if(a instanceof H.bR)return a.i(0)
return"Instance of '"+H.by(a)+"'"},
km:function(a,b,c,d){var u,t
H.A(b,d)
u=J.ki(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.V(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
kn:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gP(a);s.w();)C.a.h(t,H.A(s.gE(),c))
if(b)return t
return H.h(J.eF(t),"$ia",u,"$aa")},
ig:function(a,b,c){var u,t
u=P.y
H.h(a,"$il",[u],"$al")
if(a.constructor===Array){H.h(a,"$iaE",[u],"$aaE")
t=a.length
c=P.j4(b,c,t,null,null,null)
return H.j3(b>0||c<t?C.a.eB(a,b,c):a)}return P.kD(a,b,c)},
kD:function(a,b,c){var u,t,s
H.h(a,"$il",[P.y],"$al")
u=J.bN(a)
for(t=0;t<b;++t)if(!u.w())throw H.f(P.aq(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gE())
return H.j3(s)},
kz:function(a,b,c){return new H.eH(a,H.kj(a,!1,!0,!1))},
ja:function(a,b,c){var u=J.bN(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gE())
while(u.w())}else{a+=H.e(u.gE())
for(;u.w();)a=a+c+H.e(u.gE())}return a},
jp:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.y],"$aa")
if(c===C.x){u=$.jY().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iN(H.A(b,H.a3(c,"bS",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ie(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
ka:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cO:function(a){if(a>=10)return""+a
return"0"+a},
iP:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
er:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ke(a)},
k4:function(a){return new P.aw(!1,null,null,a)},
i3:function(a,b,c){return new P.aw(!0,a,b,c)},
fa:function(a,b,c){return new P.bz(null,null,!0,a,b,"Value not in range")},
aq:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
j4:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.aq(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aq(b,a,c,"end",f))
return b}return c},
br:function(a,b,c,d,e){var u=H.a4(e==null?J.bi(b):e)
return new P.eE(b,u,!0,a,c,"Index out of range")},
as:function(a){return new P.fS(a)},
jf:function(a){return new P.fQ(a)},
j9:function(a){return new P.ca(a)},
b3:function(a){return new P.eg(a)},
p:function(a){return new P.dR(a)},
iC:function(a){H.lm(a)},
G:function G(){},
ab:function ab(a,b){this.a=a
this.b=b},
w:function w(){},
b5:function b5(a){this.a=a},
el:function el(){},
em:function em(){},
b6:function b6(){},
dh:function dh(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eE:function eE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a){this.a=a},
fQ:function fQ(a){this.a=a},
ca:function ca(a){this.a=a},
eg:function eg(a){this.a=a},
f6:function f6(){},
ds:function ds(){},
ei:function ei(a){this.a=a},
dR:function dR(a){this.a=a},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(){},
y:function y(){},
l:function l(){},
aD:function aD(){},
a:function a(){},
D:function D(){},
a5:function a5(){},
K:function K(){},
ae:function ae(){},
m:function m(){},
aU:function aU(a){this.a=a},
l5:function(a){var u,t
u=J.R(a)
if(!!u.$ib8){t=u.gdu(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.e3(a.data,a.height,a.width)},
l4:function(a){if(a instanceof P.e3)return{data:a.a,height:a.b,width:a.c}
return a},
l3:function(a,b){var u={}
a.a_(0,new P.hO(u))
return u},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
eu:function eu(a,b){this.a=a
this.b=b},
ev:function ev(){},
ew:function ew(){},
hq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hs:function hs(){},
ar:function ar(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c7:function c7(){},
n:function n(){},
cI:function cI(){},
cU:function cU(){},
dl:function dl(){},
bA:function bA(){},
dp:function dp(){},
dw:function dw(){},
dF:function dF(){}},W={
iJ:function(a){var u=document.createElement("a")
return u},
i5:function(a,b){var u=document.createElement("canvas")
return u},
kc:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a7(u,a,b,c)
t.toString
u=W.z
u=new H.co(new W.aa(t),H.i(new W.eo(),{func:1,ret:P.G,args:[u]}),[u])
return H.d(u.gaz(u),"$iL")},
kd:function(a){H.d(a,"$ibo")
return"wheel"},
bW:function(a){var u,t,s
u="element tag unavailable"
try{t=J.k1(a)
if(typeof t==="string")u=a.tagName}catch(s){H.an(s)}return u},
hp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jn:function(a,b,c,d){var u,t
u=W.hp(W.hp(W.hp(W.hp(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d,e){var u,t
u=W.jv(new W.hf(c),W.j)
t=u!=null
if(t&&!0){H.i(u,{func:1,args:[W.j]})
if(t)J.k_(a,b,u,!1)}return new W.he(a,b,u,!1,[e])},
jm:function(a){var u,t
u=W.iJ(null)
t=window.location
u=new W.be(new W.hx(u,t))
u.eQ(a)
return u},
kM:function(a,b,c,d){H.d(a,"$iL")
H.H(b)
H.H(c)
H.d(d,"$ibe")
return!0},
kN:function(a,b,c,d){var u,t,s
H.d(a,"$iL")
H.H(b)
H.H(c)
u=H.d(d,"$ibe").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jo:function(){var u,t,s,r,q
u=P.m
t=P.iU(C.t,u)
s=H.v(C.t,0)
r=H.i(new W.hD(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hC(t,P.d4(null,null,null,u),P.d4(null,null,null,u),P.d4(null,null,null,u),null)
t.f1(null,new H.eS(C.t,r,[s,u]),q,null)
return t},
jv:function(a,b){var u
H.i(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.l)return a
return u.dm(a,b)},
t:function t(){},
cG:function cG(){},
e9:function e9(){},
bO:function bO(){},
b0:function b0(){},
bj:function bj(){},
bk:function bk(){},
b1:function b1(){},
bU:function bU(){},
eh:function eh(){},
ao:function ao(){},
bV:function bV(){},
ek:function ek(){},
cP:function cP(){},
cQ:function cQ(){},
hb:function hb(a,b){this.a=a
this.b=b},
L:function L(){},
eo:function eo(){},
j:function j(){},
bo:function bo(){},
ex:function ex(){},
cV:function cV(){},
bq:function bq(){},
cW:function cW(){},
b8:function b8(){},
bZ:function bZ(){},
aG:function aG(){},
d5:function d5(){},
c2:function c2(){},
a0:function a0(){},
aa:function aa(a){this.a=a},
z:function z(){},
c4:function c4(){},
dm:function dm(){},
fi:function fi(){},
bB:function bB(){},
dt:function dt(){},
du:function du(){},
fw:function fw(){},
cc:function cc(){},
aK:function aK(){},
az:function az(){},
fE:function fE(){},
bd:function bd(){},
h3:function h3(){},
aN:function aN(){},
cp:function cp(){},
cq:function cq(){},
dQ:function dQ(){},
dW:function dW(){},
ha:function ha(){},
hc:function hc(a){this.a=a},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
he:function he(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hf:function hf(a){this.a=a},
be:function be(a){this.a=a},
ai:function ai(){},
dg:function dg(a){this.a=a},
f4:function f4(a){this.a=a},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(){},
hz:function hz(){},
hA:function hA(){},
hC:function hC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hD:function hD(){},
hB:function hB(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
al:function al(){},
hx:function hx(a,b){this.a=a
this.b=b},
e4:function e4(a){this.a=a},
hH:function hH(a){this.a=a},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e2:function e2(){},
e5:function e5(){},
e6:function e6(){}},O={
i6:function(a){var u=new O.V([a])
u.bH(a)
return u},
V:function V(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c1:function c1(){this.b=this.a=null},
d8:function d8(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eU:function eU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c0:function c0(){},
eV:function eV(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aH:function aH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eX:function eX(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eY:function eY(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bC:function bC(){}},E={
kA:function(a,b){var u=new E.fd(a,b)
u.eK(a,b)
return u},
kE:function(a,b,c,d,e){var u,t,s,r
u=J.R(a)
if(!!u.$ibj)return E.jb(a,!0,!0,!0,!1)
t=W.i5(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdr(a).h(0,t)
r=E.jb(t,!0,!0,!0,!1)
r.a=a
return r},
jb:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dB()
t=P.kl(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.o.bC(a,"webgl",t)
s=H.d(s==null?C.o.bC(a,"experimental-webgl",t):s,"$ibA")
if(s==null)H.q(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kA(s,a)
r=new T.fy(s)
r.b=H.a4((s&&C.b).cF(s,3379))
r.c=H.a4(C.b.cF(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dI(a)
q=new X.eJ()
q.c=new X.ak(!1,!1,!1)
q.shy(P.d4(null,null,null,P.y))
r.b=q
q=new X.eZ(r)
q.f=0
q.r=V.bc()
q.x=V.bc()
q.Q=1
q.ch=1
r.c=q
q=new X.eN(r)
q.r=0
q.x=V.bc()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fD(r)
q.e=0
q.f=V.bc()
q.r=V.bc()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfm(H.b([],[[P.cb,P.K]]))
q=r.z
p=document
o=W.a0
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.Z(p,"contextmenu",H.i(r.gfX(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.Z(a,"focus",H.i(r.gh2(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.Z(a,"blur",H.i(r.gfR(),l),!1,m))
q=r.z
k=W.aG
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.Z(p,"keyup",H.i(r.gh6(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.Z(p,"keydown",H.i(r.gh4(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousedown",H.i(r.gha(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mouseup",H.i(r.ghe(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousemove",H.i(r.ghc(),n),!1,o))
k=r.z
j=W.aN;(k&&C.a).h(k,W.Z(a,H.H(W.kd(a)),H.i(r.ghg(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.Z(p,"mousemove",H.i(r.gfZ(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.Z(p,"mouseup",H.i(r.gh0(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.Z(p,"pointerlockchange",H.i(r.ghi(),l),!1,m))
m=r.z
l=W.az
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.Z(a,"touchstart",H.i(r.ghv(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchend",H.i(r.ghr(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchmove",H.i(r.ght(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ab(Date.now(),!1)
u.cy=0
u.dc()
return u},
eb:function eb(){},
ac:function ac(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
dB:function dB(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(a){this.a=a}},Z={
ik:function(a,b,c){var u
H.h(c,"$ia",[P.y],"$aa")
u=a.createBuffer()
C.b.al(a,b,u)
C.b.dq(a,b,new Int16Array(H.cy(c)),35044)
C.b.al(a,b,null)
return new Z.dN(b,u)},
at:function(a){return new Z.aM(a)},
dN:function dN(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h4:function h4(a){this.a=a},
cK:function cK(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a){this.a=a}},D={
J:function(){var u=new D.bn()
u.sab(null)
u.saS(null)
u.c=null
u.d=0
return u},
ee:function ee(){},
bn:function bn(){var _=this
_.d=_.c=_.b=_.a=null},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
u:function u(a){this.a=a
this.b=null},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bt:function bt(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
F:function F(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b4:function b4(){var _=this
_.d=_.c=_.b=_.a=null},
W:function W(){},
d2:function d2(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dj:function dj(){},
dr:function dr(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){}},X={cL:function cL(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},eJ:function eJ(){var _=this
_.d=_.c=_.b=_.a=null},d6:function d6(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eN:function eN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},aS:function aS(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eZ:function eZ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c3:function c3(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f9:function f9(){},dD:function dD(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fD:function fD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dI:function dI(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kf:function(a,b,c,d,e,f,g){var u,t
u=new X.ez()
t=new V.bl(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.j6
if(t==null){t=V.j5(0,0,1,1)
$.j6=t}u.r=t
return u},
cM:function cM(){},
ez:function ez(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){}},V={
lt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.es(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.i.a9("null",c)
return C.i.a9(C.j.ec(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
bI:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.w],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.V(u,p,C.i.a9(u[p],s))}return u},
iB:function(a,b){return C.j.jN(Math.pow(b,C.O.cr(Math.log(H.l2(a))/Math.log(b))))},
da:function(){var u=$.iX
if(u==null){u=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iX=u}return u},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iW:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.B(0,Math.sqrt(c.F(c)))
t=b.aW(u)
s=t.B(0,Math.sqrt(t.F(t)))
r=u.aW(s)
q=new V.O(a.a,a.b,a.c)
p=s.O(0).F(q)
o=r.O(0).F(q)
n=u.O(0).F(q)
return V.aI(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bc:function(){var u=$.j0
if(u==null){u=new V.a2(0,0)
$.j0=u}return u},
j1:function(){var u=$.c5
if(u==null){u=new V.ay(0,0,0)
$.c5=u}return u},
j5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dn(a,b,c,d)},
dM:function(){var u=$.jj
if(u==null){u=new V.O(0,0,0)
$.jj=u}return u},
jk:function(){var u=$.ji
if(u==null){u=new V.O(0,1,0)
$.ji=u}return u},
kG:function(){var u=$.fV
if(u==null){u=new V.O(0,0,1)
$.fV=u}return u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a){this.a=a},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a7:function a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
a2:function a2(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
P:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aC(a,0)
t=C.i.aC(b,0)
s=new V.fb()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fj()
u.eL(a)
return u},
fC:function(){var u,t
u=new V.fB()
t=P.m
u.shU(new H.aF([t,V.c9]))
u.shY(new H.aF([t,V.ce]))
u.c=null
return u},
aP:function aP(){},
aj:function aj(){},
d7:function d7(){},
ad:function ad(){this.a=null},
fb:function fb(){this.b=this.a=null},
fj:function fj(){this.a=null},
c9:function c9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b){this.a=a
this.b=b
this.c=null},
fB:function fB(){this.c=this.b=this.a=null},
cf:function cf(a){this.b=a
this.a=this.c=null},
lp:function(a){P.kF(C.K,new V.i_(a))},
kC:function(a,b){var u=new V.fn()
u.eN(a,!0)
return u},
b2:function b2(){},
i_:function i_(a){this.a=a},
ej:function ej(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eA:function eA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eB:function eB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fn:function fn(){this.b=this.a=null},
fp:function fp(a){this.a=a},
fo:function fo(a){this.a=a},
fq:function fq(a){this.a=a}},U={
i7:function(){var u=new U.ef()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
iO:function(a){var u=new U.cN()
u.a=a
return u},
ef:function ef(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){this.b=this.a=null},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dJ:function dJ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cR:function cR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ko:function(a,b){var u,t
u=a.ad
t=new A.eT(b,u)
t.eM(b,u)
t.eJ(a,b)
return t},
ii:function(a,b,c,d,e){var u=new A.fI(a,b,c,e)
u.f=d
u.si8(P.km(d,0,!1,P.y))
return u},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a){this.a=a},
eT:function eT(a,b){var _=this
_.bd=_.dA=_.bc=_.ad=_.an=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dQ=_.cl=_.dP=_.bq=_.dO=_.dN=_.bp=_.bo=_.dM=_.dL=_.bn=_.bm=_.bl=_.dK=_.dJ=_.bk=_.dI=_.dH=_.bj=_.dG=_.dF=_.bi=_.bh=_.dE=_.dD=_.bg=_.bf=_.dC=_.dB=_.be=null
_.cq=_.dU=_.cp=_.dT=_.co=_.dS=_.cn=_.dR=_.cm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eW:function eW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=t
_.go=u
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.r1=a5
_.r2=a6
_.rx=a7
_.ry=a8
_.x1=a9
_.x2=b0
_.y1=b1
_.y2=b2
_.an=b3
_.ad=b4
_.bc=b5},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ci:function ci(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cl:function cl(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
cm:function cm(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n},
c8:function c8(){},
bm:function bm(a,b){this.a=a
this.b=b},
dE:function dE(){},
fO:function fO(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hK:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cw:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.O(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.O(o+a3,n+a1,m+a2)
u.b=l
k=new V.O(o-a3,n-a1,m-a2)
u.c=k
j=new V.O(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hK(t)
f=F.hK(u.b)
e=F.lr(d,a0,new F.hJ(u,F.hK(u.c),F.hK(u.d),f,g,c),b)
if(e!=null)a.ji(e)},
lr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,{func:1,ret:-1,args:[F.aB,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.j8()
t=H.b([],[F.aB])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ij(null,null,new V.bl(p,0,0,1),null,null,new V.a2(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cg(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ij(null,null,new V.bl(j,i,h,1),null,null,new V.a2(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cg(d))}}u.d.iz(a+1,b+1,t)
return u},
cS:function(a,b,c){var u,t
u=new F.Y()
t=a.a
if(t==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
j8:function(){var u,t
u=new F.dq()
t=new F.fW(u)
t.b=!1
t.si9(H.b([],[F.aB]))
u.a=t
t=new F.fm(u)
t.sc1(H.b([],[F.bb]))
u.b=t
t=new F.fl(u)
t.sfz(H.b([],[F.aR]))
u.c=t
t=new F.fk(u)
t.sfn(H.b([],[F.Y]))
u.d=t
u.e=null
return u},
ij:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aB()
t=new F.h0(u)
t.sc1(H.b([],[F.bb]))
u.b=t
t=new F.h_(u)
s=[F.aR]
t.sfA(H.b([],s))
t.sfB(H.b([],s))
u.c=t
t=new F.fX(u)
s=[F.Y]
t.sfo(H.b([],s))
t.sfp(H.b([],s))
t.sfq(H.b([],s))
u.d=t
h=$.jU()
u.e=0
t=$.aY()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aX().a)!==0?e:null
u.x=(s&$.aW().a)!==0?b:null
u.y=(s&$.aZ().a)!==0?f:null
u.z=(s&$.b_().a)!==0?g:null
u.Q=(s&$.jV().a)!==0?c:null
u.ch=(s&$.bM().a)!==0?i:0
u.cx=(s&$.aV().a)!==0?a:null
return u},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Y:function Y(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aR:function aR(){this.b=this.a=null},
bb:function bb(){this.a=null},
dq:function dq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a
this.b=null},
fl:function fl(a){this.a=a
this.b=null},
fm:function fm(a){this.a=a
this.b=null},
aB:function aB(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h1:function h1(a){this.a=a},
fW:function fW(a){this.a=a
this.c=this.b=null},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a
this.c=this.b=null},
h0:function h0(a){this.a=a
this.b=null}},T={cd:function cd(){},dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},fy:function fy(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fz:function fz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
jD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.kC("Test 010",!0)
t=W.i5(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.A(u.a,t)
s=[P.m]
u.dj(H.b(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],s))
u.dj(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.en(document,"testCanvas")
if(r==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.kE(r,!0,!0,!0,!1)
p=new E.ac()
p.a=""
p.b=!0
s=E.ac
p.sfe(0,O.i6(s))
p.y.b2(p.gjj(),p.gjm())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.scI(0,null)
p.saX(null)
o=F.j8()
F.cw(o,null,null,1,1,1,0,0,1)
F.cw(o,null,null,1,1,0,1,0,3)
F.cw(o,null,null,1,1,0,0,1,2)
F.cw(o,null,null,1,1,-1,0,0,0)
F.cw(o,null,null,1,1,0,-1,0,0)
F.cw(o,null,null,1,1,0,0,-1,3)
o.aJ()
p.scI(0,o)
n=new U.bY()
m=U.a1
n.bH(m)
n.b2(n.gfJ(),n.ghn())
n.e=null
n.f=V.da()
n.r=0
l=q.r
k=new U.dK()
j=U.i7()
j.scE(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sa4(0,0)
j.scw(100)
j.sR(0)
j.sci(0.5)
k.b=j
i=k.gaF()
j.gq().h(0,i)
j=U.i7()
j.scE(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sa4(0,0)
j.scw(100)
j.sR(0)
j.sci(0.5)
k.c=j
j.gq().h(0,i)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
h=new X.ak(!1,!1,!1)
g=k.d
k.d=h
j=[X.ak]
i=new D.F("modifiers",g,h,k,j)
i.b=!0
k.M(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.F("invertX",i,!1,k,[P.G])
i.b=!0
k.M(i)}i=k.r
if(i!==!0){k.r=!0
i=new D.F("invertY",i,!0,k,[P.G])
i.b=!0
k.M(i)}k.aV(l)
n.h(0,k)
l=q.r
k=new U.dJ()
i=U.i7()
i.scE(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa4(0,0)
i.scw(100)
i.sR(0)
i.sci(0.2)
k.b=i
i.gq().h(0,k.gaF())
k.c=null
k.d=!1
k.e=2.5
k.f=2
k.r=4
k.y=!1
k.x=!1
k.z=0
k.Q=null
k.ch=0
k.cx=null
k.cy=null
h=new X.ak(!0,!1,!1)
g=k.c
k.c=h
i=new D.F("modifiers",g,h,k,j)
i.b=!0
k.M(i)
k.aV(l)
n.h(0,k)
l=q.r
k=new U.dL()
k.c=0.01
k.d=0
k.e=0
h=new X.ak(!1,!1,!1)
k.b=h
j=new D.F("modifiers",null,h,k,j)
j.b=!0
k.M(j)
k.aV(l)
n.h(0,k)
p.saX(n)
f=new O.d8()
f.sfb(O.i6(V.a7))
f.e.b2(f.gfN(),f.gfP())
n=new O.aH(f,"emission")
n.c=C.c
n.f=new V.X(0,0,0)
f.f=n
n=new O.aH(f,"ambient")
n.c=C.c
n.f=new V.X(0,0,0)
f.r=n
n=new O.aH(f,"diffuse")
n.c=C.c
n.f=new V.X(0,0,0)
f.x=n
n=new O.aH(f,"invDiffuse")
n.c=C.c
n.f=new V.X(0,0,0)
f.y=n
n=new O.eY(f,"specular")
n.c=C.c
n.f=new V.X(0,0,0)
n.ch=100
f.z=n
n=new O.eV(f,"bump")
n.c=C.c
f.Q=n
f.ch=null
n=new O.aH(f,"reflect")
n.c=C.c
n.f=new V.X(0,0,0)
f.cx=n
n=new O.eX(f,"refract")
n.c=C.c
n.f=new V.X(0,0,0)
n.ch=1
f.cy=n
n=new O.eU(f,"alpha")
n.c=C.c
n.f=1
f.db=n
n=new D.d2()
n.bH(D.W)
n.sfk(H.b([],[D.b4]))
n.shx(H.b([],[D.dj]))
n.shT(H.b([],[D.dr]))
n.si5(H.b([],[D.dy]))
n.si6(H.b([],[D.dz]))
n.si7(H.b([],[D.dA]))
n.Q=null
n.ch=null
n.cH(n.gfL(),n.ghl(),n.ghp())
f.dx=n
l=n.Q
if(l==null){l=D.J()
n.Q=l
n=l}else n=l
n.h(0,f.ghF())
n=f.dx
l=n.ch
if(l==null){l=D.J()
n.ch=l
n=l}else n=l
n.h(0,f.gb6())
f.dy=null
n=f.dx
e=V.jk()
l=U.iO(V.iW(V.j1(),e,new V.O(1,1,-3)))
d=new V.X(1,1,1)
k=new D.b4()
k.c=new V.X(1,1,1)
k.a=V.kG()
g=k.b
k.b=l
l.gq().h(0,k.geS())
m=new D.F("mover",g,k.b,k,[m])
m.b=!0
k.ap(m)
if(!k.c.t(0,d)){g=k.c
k.c=d
m=new D.F("color",g,d,k,[V.X])
m.b=!0
k.ap(m)}n.h(0,k)
n=f.r
n.sam(0,new V.X(0,0,1))
n=f.x
n.sam(0,new V.X(0,1,0))
n=f.z
n.sam(0,new V.X(1,0,0))
n=f.z
if(n.c===C.c){n.c=C.f
n.bG()
n.c4(100)
m=n.a
m.a=null
m.X(null)}n.c4(10)
n=f.Q
m=q.f
l=m.a
c=l.createTexture()
C.b.aI(l,34067,c)
C.b.bx(l,34067,10242,10497)
C.b.bx(l,34067,10243,10497)
C.b.bx(l,34067,10241,9729)
C.b.bx(l,34067,10240,9729)
C.b.aI(l,34067,null)
b=new T.dx()
b.a=0
b.b=c
b.c=!1
b.d=0
m.aE(b,c,"../resources/diceBumpMap/posx.png",34069,!1,!1)
m.aE(b,c,"../resources/diceBumpMap/negx.png",34070,!1,!1)
m.aE(b,c,"../resources/diceBumpMap/posy.png",34071,!1,!1)
m.aE(b,c,"../resources/diceBumpMap/negy.png",34072,!1,!1)
m.aE(b,c,"../resources/diceBumpMap/posz.png",34073,!1,!1)
m.aE(b,c,"../resources/diceBumpMap/negz.png",34074,!1,!1)
m=n.c
if(m!==C.d){if(m===C.c)n.at()
n.c=C.d
n.hM(null)
m=n.a
m.a=null
m.X(null)}n.hN(b)
n=new M.cR()
n.seU(0,O.i6(s))
n.d.b2(n.gfT(),n.gfV())
n.e=null
n.f=null
n.r=null
n.x=null
a=X.kf(!0,!0,!1,null,2000,null,0)
a0=new X.di()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.saX(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.I().a)){a0.c=1.0471975511965976
s=new D.F("fov",s,1.0471975511965976,a0,[P.w])
s.b=!0
a0.aB(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.I().a)){a0.d=0.1
s=new D.F("near",s,0.1,a0,[P.w])
s.b=!0
a0.aB(s)}s=a0.e
if(!(Math.abs(s-2000)<$.I().a)){a0.e=2000
s=new D.F("far",s,2000,a0,[P.w])
s.b=!0
a0.aB(s)}s=n.a
if(s!==a0){if(s!=null)s.gq().U(0,n.gah())
g=n.a
n.a=a0
a0.gq().h(0,n.gah())
s=new D.F("camera",g,n.a,n,[X.cM])
s.b=!0
n.aq(s)}s=n.b
if(s!==a){if(s!=null)s.gq().U(0,n.gah())
g=n.b
n.b=a
a.gq().h(0,n.gah())
s=new D.F("target",g,n.b,n,[X.dv])
s.b=!0
n.aq(s)}n.sea(null)
n.sea(f)
n.d.h(0,p)
n.a.saX(U.iO(V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=q.d
if(s!==n){if(s!=null)s.gq().U(0,q.gcL())
q.d=n
n.gq().h(0,q.gcL())
q.cM()}s=q.z
if(s==null){s=D.J()
q.z=s}n={func:1,ret:-1,args:[D.u]}
m=H.i(new B.hX(u,f),n)
if(s.b==null)s.saS(H.b([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.lp(q)},
hX:function hX(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ic.prototype={}
J.a_.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.c6(a)},
i:function(a){return"Instance of '"+H.by(a)+"'"}}
J.eG.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iG:1}
J.cZ.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iD:1}
J.d0.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.f7.prototype={}
J.cn.prototype={}
J.ba.prototype={
i:function(a){var u=a[$.jJ()]
if(u==null)return this.eE(a)
return"JavaScript function for "+H.e(J.ag(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib7:1}
J.aE.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.as("add"))
a.push(b)},
U:function(a,b){var u
if(!!a.fixed$length)H.q(P.as("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
a_:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b3(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.V(u,t,H.e(a[t]))
return u.join(b)},
je:function(a){return this.k(a,"")},
j7:function(a,b,c){var u,t,s
H.i(b,{func:1,ret:P.G,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.b3(a))}throw H.f(H.ia())},
j6:function(a,b){return this.j7(a,b,null)},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eB:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aq(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aq(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.v(a,0)])
return H.b(a.slice(b,c),[H.v(a,0)])},
gbs:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.ia())},
dk:function(a,b){var u,t
H.i(b,{func:1,ret:P.G,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.b3(a))}return!1},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.i9(a,"[","]")},
gP:function(a){return new J.ah(a,a.length,0,[H.v(a,0)])},
gG:function(a){return H.c6(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.as("set length"))
if(b<0)throw H.f(P.aq(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.as("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cC(a,b))
a[b]=c},
$il:1,
$ia:1}
J.ib.prototype={}
J.ah.prototype={
gE:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.x(u))
s=this.c
if(s>=t){this.sd0(null)
return!1}this.sd0(u[s]);++this.c
return!0},
sd0:function(a){this.d=H.A(a,H.v(this,0))},
$iaD:1}
J.d_.prototype={
jN:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.as(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.as(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.as(""+a+".round()"))},
ec:function(a,b){var u,t
if(b>20)throw H.f(P.aq(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
es:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.as("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b9:function(a,b){var u
if(a>0)u=this.hS(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hS:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia5:1}
J.cY.prototype={$iy:1}
J.cX.prototype={}
J.bu.prototype={
cf:function(a,b){if(b<0)throw H.f(H.cC(a,b))
if(b>=a.length)H.q(H.cC(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.f(H.cC(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.f(P.i3(b,null,null))
return a+b},
eA:function(a,b,c){var u
if(c>a.length)throw H.f(P.aq(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bE:function(a,b){return this.eA(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fa(b,null,null))
if(b>c)throw H.f(P.fa(b,null,null))
if(c>a.length)throw H.f(P.fa(c,null,null))
return a.substring(b,c)},
b3:function(a,b){return this.b4(a,b,null)},
jQ:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jq:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
a9:function(a,b){return this.jq(a,b," ")},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iiZ:1,
$im:1}
H.o.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.i.cf(this.a,b)},
$adH:function(){return[P.y]},
$aS:function(){return[P.y]},
$al:function(){return[P.y]},
$aa:function(){return[P.y]}}
H.en.prototype={}
H.bv.prototype={
gP:function(a){return new H.c_(this,this.gn(this),0,[H.a3(this,"bv",0)])},
bA:function(a,b){return this.eD(0,H.i(b,{func:1,ret:P.G,args:[H.a3(this,"bv",0)]}))}}
H.c_.prototype={
gE:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.iw(u)
s=t.gn(u)
if(this.b!==s)throw H.f(P.b3(u))
r=this.c
if(r>=s){this.saQ(null)
return!1}this.saQ(t.a2(u,r));++this.c
return!0},
saQ:function(a){this.d=H.A(a,H.v(this,0))},
$iaD:1}
H.eQ.prototype={
gP:function(a){return new H.eR(J.bN(this.a),this.b,this.$ti)},
gn:function(a){return J.bi(this.a)},
a2:function(a,b){return this.b.$1(J.i1(this.a,b))},
$al:function(a,b){return[b]}}
H.eR.prototype={
w:function(){var u=this.b
if(u.w()){this.saQ(this.c.$1(u.gE()))
return!0}this.saQ(null)
return!1},
gE:function(){return this.a},
saQ:function(a){this.a=H.A(a,H.v(this,1))},
$aaD:function(a,b){return[b]}}
H.eS.prototype={
gn:function(a){return J.bi(this.a)},
a2:function(a,b){return this.b.$1(J.i1(this.a,b))},
$abv:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.co.prototype={
gP:function(a){return new H.h5(J.bN(this.a),this.b,this.$ti)}}
H.h5.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gE()))return!0
return!1},
gE:function(){return this.a.gE()}}
H.bp.prototype={}
H.dH.prototype={}
H.dG.prototype={}
H.fc.prototype={}
H.fF.prototype={
a8:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.f5.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eI.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.e(this.a)+")"}}
H.fR.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.i0.prototype={
$1:function(a){if(!!J.R(a).$ib6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.e_.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iae:1}
H.bR.prototype={
i:function(a){return"Closure '"+H.by(this).trim()+"'"},
$ib7:1,
gjU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fx.prototype={}
H.fr.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bL(u)+"'"}}
H.bP.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.c6(this.a)
else t=typeof u!=="object"?J.bh(u):H.c6(u)
return(t^H.c6(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.by(u)+"'")}}
H.fH.prototype={
i:function(a){return this.a}}
H.ed.prototype={
i:function(a){return this.a}}
H.fh.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.aF.prototype={
gn:function(a){return this.a},
gav:function(){return new H.d3(this,[H.v(this,0)])},
dt:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cY(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cY(t,a)}else return this.jc(a)},
jc:function(a){var u=this.d
if(u==null)return!1
return this.cs(this.bP(u,J.bh(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b7(r,b)
s=t==null?null:t.b
return s}else return this.jd(b)},
jd:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bP(u,J.bh(a)&0x3ffffff)
s=this.cs(t,a)
if(s<0)return
return t[s].b},
V:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c_()
this.b=u}this.cP(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c_()
this.c=t}this.cP(t,b,c)}else{s=this.d
if(s==null){s=this.c_()
this.d=s}r=J.bh(b)&0x3ffffff
q=this.bP(s,r)
if(q==null)this.c5(s,r,[this.bJ(b,c)])
else{p=this.cs(q,b)
if(p>=0)q[p].b=c
else q.push(this.bJ(b,c))}}},
a_:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.b3(this))
u=u.c}},
cP:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.b7(a,b)
if(u==null)this.c5(a,b,this.bJ(b,c))
else u.b=c},
f5:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var u,t
u=new H.eK(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.f5()
return u},
cs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.iV(this)},
b7:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
fj:function(a,b){delete a[b]},
cY:function(a,b){return this.b7(a,b)!=null},
c_:function(){var u=Object.create(null)
this.c5(u,"<non-identifier-key>",u)
this.fj(u,"<non-identifier-key>")
return u},
$iiT:1}
H.eK.prototype={}
H.d3.prototype={
gn:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.eL(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eL.prototype={
gE:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b3(u))
else{u=this.c
if(u==null){this.scQ(null)
return!1}else{this.scQ(u.a)
this.c=this.c.c
return!0}}},
scQ:function(a){this.d=H.A(a,H.v(this,0))},
$iaD:1}
H.hS.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.hT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.hU.prototype={
$1:function(a){return this.a(H.H(a))},
$S:36}
H.eH.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiZ:1}
H.de.prototype={$ilO:1}
H.db.prototype={
gn:function(a){return a.length},
$iax:1,
$aax:function(){}}
H.dc.prototype={
l:function(a,b){H.cx(b,a,a.length)
return a[b]},
$abp:function(){return[P.w]},
$aS:function(){return[P.w]},
$il:1,
$al:function(){return[P.w]},
$ia:1,
$aa:function(){return[P.w]}}
H.dd.prototype={
$abp:function(){return[P.y]},
$aS:function(){return[P.y]},
$il:1,
$al:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.f_.prototype={
l:function(a,b){H.cx(b,a,a.length)
return a[b]}}
H.f0.prototype={
l:function(a,b){H.cx(b,a,a.length)
return a[b]}}
H.f1.prototype={
l:function(a,b){H.cx(b,a,a.length)
return a[b]}}
H.df.prototype={
gn:function(a){return a.length},
l:function(a,b){H.cx(b,a,a.length)
return a[b]},
$ilP:1}
H.f2.prototype={
gn:function(a){return a.length},
l:function(a,b){H.cx(b,a,a.length)
return a[b]}}
H.cs.prototype={}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
P.h7.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.h6.prototype={
$1:function(a){var u,t
this.a.a=H.i(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.h8.prototype={
$0:function(){this.a.$0()},
$S:2}
P.h9.prototype={
$0:function(){this.a.$0()},
$S:2}
P.e0.prototype={
f2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bH(new P.hF(this,b),0),a)
else throw H.f(P.as("`setTimeout()` not found."))},
f3:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bH(new P.hE(this,a,Date.now(),b),0),a)
else throw H.f(P.as("Periodic timer."))},
$iaJ:1}
P.hF.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hE.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eI(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aO.prototype={
jh:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.i(this.d,{func:1,ret:P.G,args:[P.K]}),a.a,P.G,P.K)},
ja:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.e7(u,{func:1,args:[P.K,P.ae]}))return H.iv(r.jF(u,a.a,a.b,null,t,P.ae),s)
else return H.iv(r.cC(H.i(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.au.prototype={
eb:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Q
if(t!==C.l){t.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kW(b,t)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.au(0,$.Q,[c])
r=b==null?1:3
this.cS(new P.aO(s,r,a,b,[u,c]))
return s},
jM:function(a,b){return this.eb(a,null,b)},
cS:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaO")
this.c=a}else{if(u===2){t=H.d(this.c,"$iau")
u=t.a
if(u<4){t.cS(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hN(null,null,u,H.i(new P.hg(this,a),{func:1,ret:-1}))}},
d9:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaO")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iau")
t=p.a
if(t<4){p.d9(a)
return}this.a=t
this.c=p.c}u.a=this.b8(a)
t=this.b
t.toString
P.hN(null,null,t,H.i(new P.hk(u,this),{func:1,ret:-1}))}},
c3:function(){var u=H.d(this.c,"$iaO")
this.c=null
return this.b8(u)},
b8:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cU:function(a){var u,t,s
u=H.v(this,0)
H.iv(a,{futureOr:1,type:u})
t=this.$ti
if(H.cB(a,"$ibX",t,"$abX"))if(H.cB(a,"$iau",t,null))P.jl(a,this)
else P.kL(a,this)
else{s=this.c3()
H.A(a,u)
this.a=4
this.c=a
P.cr(this,s)}},
cV:function(a,b){var u
H.d(b,"$iae")
u=this.c3()
this.a=8
this.c=new P.a6(a,b)
P.cr(this,u)},
$ibX:1}
P.hg.prototype={
$0:function(){P.cr(this.a,this.b)},
$S:2}
P.hk.prototype={
$0:function(){P.cr(this.b,this.a.a)},
$S:2}
P.hh.prototype={
$1:function(a){var u=this.a
u.a=0
u.cU(a)},
$S:12}
P.hi.prototype={
$2:function(a,b){H.d(b,"$iae")
this.a.cV(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.hj.prototype={
$0:function(){this.a.cV(this.b,this.c)},
$S:2}
P.hn.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.e9(H.i(r.d,{func:1}),null)}catch(q){t=H.an(q)
s=H.bJ(q)
if(this.d){r=H.d(this.a.a.c,"$ia6").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia6")
else p.b=new P.a6(t,s)
p.a=!0
return}if(!!J.R(u).$ibX){if(u instanceof P.au&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia6")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jM(new P.ho(o),null)
r.a=!1}},
$S:3}
P.ho.prototype={
$1:function(a){return this.a},
$S:31}
P.hm.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cC(H.i(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.bJ(o)
s=this.a
s.b=new P.a6(u,t)
s.a=!0}},
$S:3}
P.hl.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia6")
r=this.c
if(r.jh(u)&&r.e!=null){q=this.b
q.b=r.ja(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.bJ(p)
r=H.d(this.a.a.c,"$ia6")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a6(t,s)
n.a=!0}},
$S:3}
P.dO.prototype={}
P.fs.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.au(0,$.Q,[P.y])
u.a=0
s=H.v(this,0)
r=H.i(new P.fu(u,this),{func:1,ret:-1,args:[s]})
H.i(new P.fv(u,t),{func:1,ret:-1})
W.Z(this.a,this.b,r,!1,s)
return t}}
P.fu.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.v(this.b,0)]}}}
P.fv.prototype={
$0:function(){this.b.cU(this.a.a)},
$S:2}
P.cb.prototype={}
P.ft.prototype={}
P.aJ.prototype={}
P.a6.prototype={
i:function(a){return H.e(this.a)},
$ib6:1}
P.hI.prototype={$im2:1}
P.hM.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dh()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.ht.prototype={
jG:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
try{if(C.l===$.Q){a.$0()
return}P.jr(null,null,this,a,-1)}catch(s){u=H.an(s)
t=H.bJ(s)
P.hL(null,null,this,u,H.d(t,"$iae"))}},
jH:function(a,b,c){var u,t,s
H.i(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.Q){a.$1(b)
return}P.js(null,null,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.bJ(s)
P.hL(null,null,this,u,H.d(t,"$iae"))}},
iE:function(a,b){return new P.hv(this,H.i(a,{func:1,ret:b}),b)},
cb:function(a){return new P.hu(this,H.i(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.hw(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.i(a,{func:1,ret:b})
if($.Q===C.l)return a.$0()
return P.jr(null,null,this,a,b)},
cC:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Q===C.l)return a.$1(b)
return P.js(null,null,this,a,b,c,d)},
jF:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Q===C.l)return a.$2(b,c)
return P.kX(null,null,this,a,b,c,d,e,f)}}
P.hv.prototype={
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hu.prototype={
$0:function(){return this.a.jG(this.b)},
$S:3}
P.hw.prototype={
$1:function(a){var u=this.c
return this.a.jH(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hr.prototype={
gP:function(a){var u=new P.dU(this,this.r,this.$ti)
u.c=this.e
return u},
gn:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibD")!=null}else{t=this.ff(b)
return t}},
ff:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.d1(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.im()
this.b=u}return this.cR(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.im()
this.c=t}return this.cR(t,b)}else return this.f6(b)},
f6:function(a){var u,t,s
H.A(a,H.v(this,0))
u=this.d
if(u==null){u=P.im()
this.d=u}t=this.cW(a)
s=u[t]
if(s==null)u[t]=[this.c0(a)]
else{if(this.bN(s,a)>=0)return!1
s.push(this.c0(a))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hC(this.c,b)
else return this.hz(b)},
hz:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.d1(u,a)
s=this.bN(t,a)
if(s<0)return!1
this.df(t.splice(s,1)[0])
return!0},
cR:function(a,b){H.A(b,H.v(this,0))
if(H.d(a[b],"$ibD")!=null)return!1
a[b]=this.c0(b)
return!0},
hC:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibD")
if(u==null)return!1
this.df(u)
delete a[b]
return!0},
d3:function(){this.r=1073741823&this.r+1},
c0:function(a){var u,t
u=new P.bD(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d3()
return u},
df:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d3()},
cW:function(a){return J.bh(a)&1073741823},
d1:function(a,b){return a[this.cW(b)]},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.bD.prototype={}
P.dU.prototype={
gE:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b3(u))
else{u=this.c
if(u==null){this.scT(null)
return!1}else{this.scT(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
scT:function(a){this.d=H.A(a,H.v(this,0))},
$iaD:1}
P.eM.prototype={$il:1,$ia:1}
P.S.prototype={
gP:function(a){return new H.c_(a,this.gn(a),0,[H.hR(this,a,"S",0)])},
a2:function(a,b){return this.l(a,b)},
jP:function(a,b){var u,t
u=H.b([],[H.hR(this,a,"S",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.V(u,t,this.l(a,t))
return u},
jO:function(a){return this.jP(a,!0)},
i:function(a){return P.i9(a,"[","]")}}
P.eO.prototype={}
P.eP.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.e(a)
u.a=t+": "
u.a+=H.e(b)},
$S:14}
P.bw.prototype={
a_:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.a3(this,"bw",0),H.a3(this,"bw",1)]})
for(u=J.bN(this.gav());u.w();){t=u.gE()
b.$2(t,this.l(0,t))}},
gn:function(a){return J.bi(this.gav())},
i:function(a){return P.iV(this)},
$iap:1}
P.hy.prototype={
aj:function(a,b){var u
for(u=J.bN(H.h(b,"$il",this.$ti,"$al"));u.w();)this.h(0,u.gE())},
i:function(a){return P.i9(this,"{","}")},
a2:function(a,b){var u,t,s
if(b<0)H.q(P.aq(b,0,null,"index",null))
for(u=P.kP(this,this.r,H.v(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.f(P.br(b,this,"index",null,t))},
$il:1,
$ij7:1}
P.dV.prototype={}
P.bS.prototype={}
P.bT.prototype={}
P.ep.prototype={
$abS:function(){return[P.m,[P.a,P.y]]}}
P.eD.prototype={
i:function(a){return this.a}}
P.eC.prototype={
fg:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.k(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.aU("")
if(r>b)q.a+=C.i.b4(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.k2(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abT:function(){return[P.m,P.m]}}
P.fT.prototype={}
P.fU.prototype={
iO:function(a,b,c){var u,t,s
c=P.j4(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hG(t)
if(s.fs(a,b,c)!==c)s.dg(C.i.cf(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kS(0,s.b,t.length)))},
iN:function(a){return this.iO(a,0,null)},
$abT:function(){return[P.m,[P.a,P.y]]}}
P.hG.prototype={
dg:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.k(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.k(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.k(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.k(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.k(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.k(u,t)
u[t]=128|a&63
return!1}},
fs:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cf(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aC(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dg(r,C.i.aC(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.k(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.k(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.k(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.k(u,q)
u[q]=128|r&63}}return s}}
P.G.prototype={}
P.ab.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.b9(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.ka(H.kw(this))
t=P.cO(H.ku(this))
s=P.cO(H.kq(this))
r=P.cO(H.kr(this))
q=P.cO(H.kt(this))
p=P.cO(H.kv(this))
o=P.kb(H.ks(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.b5.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.em()
t=this.a
if(t<0)return"-"+new P.b5(0-t).i(0)
s=u.$1(C.h.Z(t,6e7)%60)
r=u.$1(C.h.Z(t,1e6)%60)
q=new P.el().$1(t%1e6)
return""+C.h.Z(t,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.el.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.em.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.b6.prototype={}
P.dh.prototype={
i:function(a){return"Throw of null."}}
P.aw.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbM()+t+s
if(!this.a)return r
q=this.gbL()
p=P.er(this.b)
return r+q+": "+p}}
P.bz.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.e(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.e(u)
else if(s>u)t=": Not in range "+H.e(u)+".."+H.e(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.e(u)}return t}}
P.eE.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t
u=H.a4(this.b)
if(typeof u!=="number")return u.aP()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gn:function(a){return this.f}}
P.fS.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fQ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eg.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.er(u)+"."}}
P.f6.prototype={
i:function(a){return"Out of Memory"},
$ib6:1}
P.ds.prototype={
i:function(a){return"Stack Overflow"},
$ib6:1}
P.ei.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
i:function(a){return"Exception: "+this.a}}
P.ey.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.b4(s,0,75)+"...":s
return t+"\n"+r}}
P.b7.prototype={}
P.y.prototype={}
P.l.prototype={
bA:function(a,b){var u=H.a3(this,"l",0)
return new H.co(this,H.i(b,{func:1,ret:P.G,args:[u]}),[u])},
gn:function(a){var u,t
u=this.gP(this)
for(t=0;u.w();)++t
return t},
gaz:function(a){var u,t
u=this.gP(this)
if(!u.w())throw H.f(H.ia())
t=u.gE()
if(u.w())throw H.f(H.kh())
return t},
a2:function(a,b){var u,t,s
if(b<0)H.q(P.aq(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.w();){s=u.gE()
if(b===t)return s;++t}throw H.f(P.br(b,this,"index",null,t))},
i:function(a){return P.kg(this,"(",")")}}
P.aD.prototype={}
P.a.prototype={$il:1}
P.D.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
t:function(a,b){return this===b},
gG:function(a){return H.c6(this)},
i:function(a){return"Instance of '"+H.by(this)+"'"},
toString:function(){return this.i(this)}}
P.ae.prototype={}
P.m.prototype={$iiZ:1}
P.aU.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.cG.prototype={
i:function(a){return String(a)},
$icG:1}
W.e9.prototype={
i:function(a){return String(a)}}
W.bO.prototype={$ibO:1}
W.b0.prototype={$ib0:1}
W.bj.prototype={
bC:function(a,b,c){if(c!=null)return this.ft(a,b,P.l3(c,null))
return this.fu(a,b)},
em:function(a,b){return this.bC(a,b,null)},
ft:function(a,b,c){return a.getContext(b,c)},
fu:function(a,b){return a.getContext(b)},
$ibj:1,
$iiM:1}
W.bk.prototype={
fv:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
j2:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibk:1}
W.b1.prototype={
gn:function(a){return a.length}}
W.bU.prototype={
gn:function(a){return a.length}}
W.eh.prototype={}
W.ao.prototype={$iao:1}
W.bV.prototype={
iA:function(a,b){return a.adoptNode(b)},
en:function(a,b){return a.getElementById(b)}}
W.ek.prototype={
i:function(a){return String(a)}}
W.cP.prototype={
iS:function(a,b){return a.createHTMLDocument(b)}}
W.cQ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cB(b,"$iar",[P.a5],"$aar"))return!1
u=J.af(b)
return a.left===u.gbt(b)&&a.top===u.gby(b)&&a.width===u.gbB(b)&&a.height===u.gbr(b)},
gG:function(a){return W.jn(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gdn:function(a){return a.bottom},
gbr:function(a){return a.height},
gbt:function(a){return a.left},
gbw:function(a){return a.right},
gby:function(a){return a.top},
gbB:function(a){return a.width},
$iar:1,
$aar:function(){return[P.a5]}}
W.hb.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.d(u[b],"$iL")},
h:function(a,b){J.iH(this.a,b)
return b},
gP:function(a){var u=this.jO(this)
return new J.ah(u,u.length,0,[H.v(u,0)])},
$aS:function(){return[W.L]},
$al:function(){return[W.L]},
$aa:function(){return[W.L]}}
W.L.prototype={
giD:function(a){return new W.hc(a)},
gdr:function(a){return new W.hb(a,a.children)},
gds:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aP()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aP()
if(r<0)r=-r*0
return new P.ar(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iR
if(u==null){u=H.b([],[W.al])
t=new W.dg(u)
C.a.h(u,W.jm(null))
C.a.h(u,W.jo())
$.iR=t
d=t}else d=u
u=$.iQ
if(u==null){u=new W.e4(d)
$.iQ=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation
t=(t&&C.J).iS(t,"")
$.aQ=t
$.i8=t.createRange()
t=$.aQ
t.toString
t=t.createElement("base")
H.d(t,"$ibO")
t.href=u.baseURI
u=$.aQ.head;(u&&C.L).A(u,t)}u=$.aQ
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib0")}u=$.aQ
if(!!this.$ib0)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aQ.body;(u&&C.n).A(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.X,a.tagName)){u=$.i8;(u&&C.E).ev(u,s)
u=$.i8
r=(u&&C.E).iQ(u,b)}else{s.innerHTML=b
r=$.aQ.createDocumentFragment()
for(u=J.af(r);t=s.firstChild,t!=null;)u.A(r,t)}u=$.aQ.body
if(s==null?u!=null:s!==u)J.iI(s)
c.cG(r)
C.z.iA(document,r)
return r},
iR:function(a,b,c){return this.a7(a,b,c,null)},
ex:function(a,b,c,d){a.textContent=null
this.A(a,this.a7(a,b,c,d))},
ew:function(a,b){return this.ex(a,b,null,null)},
aO:function(a,b){return a.getAttribute(b)},
hA:function(a,b){return a.removeAttribute(b)},
$iL:1,
gjI:function(a){return a.tagName}}
W.eo.prototype={
$1:function(a){return!!J.R(H.d(a,"$iz")).$iL},
$S:16}
W.j.prototype={$ij:1}
W.bo.prototype={
f7:function(a,b,c,d){return a.addEventListener(b,H.bH(H.i(c,{func:1,args:[W.j]}),1),!1)},
$ibo:1}
W.ex.prototype={
gn:function(a){return a.length}}
W.cV.prototype={}
W.bq.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iax:1,
$aax:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$ibq:1,
$aai:function(){return[W.z]}}
W.cW.prototype={}
W.b8.prototype={$ib8:1,
gdu:function(a){return a.data}}
W.bZ.prototype={$ibZ:1,$iiM:1}
W.aG.prototype={$iaG:1}
W.d5.prototype={
i:function(a){return String(a)},
$id5:1}
W.c2.prototype={}
W.a0.prototype={$ia0:1}
W.aa.prototype={
gaz:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.j9("No elements"))
if(t>1)throw H.f(P.j9("More than one element"))
return u.firstChild},
aj:function(a,b){var u,t,s,r,q
H.h(b,"$il",[W.z],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.af(t),q=0;q<s;++q)r.A(t,u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.cT(u,u.length,-1,[H.hR(C.Z,u,"ai",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$aS:function(){return[W.z]},
$al:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
jA:function(a){var u=a.parentNode
if(u!=null)J.e8(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eC(a):u},
A:function(a,b){return a.appendChild(b)},
hB:function(a,b){return a.removeChild(b)},
$iz:1}
W.c4.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iax:1,
$aax:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aai:function(){return[W.z]}}
W.dm.prototype={
iQ:function(a,b){return a.createContextualFragment(b)},
ev:function(a,b){return a.selectNodeContents(b)}}
W.fi.prototype={
gn:function(a){return a.length}}
W.bB.prototype={}
W.dt.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.kc("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aa(t).aj(0,new W.aa(u))
return t}}
W.du.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gaz(u)
s.toString
u=new W.aa(s)
r=u.gaz(u)
t.toString
r.toString
new W.aa(t).aj(0,new W.aa(r))
return t}}
W.fw.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gaz(u)
t.toString
s.toString
new W.aa(t).aj(0,new W.aa(s))
return t}}
W.cc.prototype={$icc:1}
W.aK.prototype={$iaK:1}
W.az.prototype={$iaz:1}
W.fE.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iax:1,
$aax:function(){return[W.aK]},
$aS:function(){return[W.aK]},
$il:1,
$al:function(){return[W.aK]},
$ia:1,
$aa:function(){return[W.aK]},
$aai:function(){return[W.aK]}}
W.bd.prototype={}
W.h3.prototype={$iiM:1}
W.aN.prototype={
giY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.as("deltaY is not supported"))},
giX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.as("deltaX is not supported"))},
$iaN:1}
W.cp.prototype={
hE:function(a,b){return a.requestAnimationFrame(H.bH(H.i(b,{func:1,ret:-1,args:[P.a5]}),1))},
fl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cq.prototype={$icq:1}
W.dQ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cB(b,"$iar",[P.a5],"$aar"))return!1
u=J.af(b)
return a.left===u.gbt(b)&&a.top===u.gby(b)&&a.width===u.gbB(b)&&a.height===u.gbr(b)},
gG:function(a){return W.jn(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gbr:function(a){return a.height},
gbB:function(a){return a.width}}
W.dW.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a2:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iax:1,
$aax:function(){return[W.z]},
$aS:function(){return[W.z]},
$il:1,
$al:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aai:function(){return[W.z]}}
W.ha.prototype={
a_:function(a,b){var u,t,s,r,q,p
H.i(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gav(),t=u.length,s=this.a,r=J.af(s),q=0;q<u.length;u.length===t||(0,H.x)(u),++q){p=u[q]
b.$2(p,r.aO(s,p))}},
gav:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.d(u[r],"$icq")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abw:function(){return[P.m,P.m]},
$aap:function(){return[P.m,P.m]}}
W.hc.prototype={
l:function(a,b){return J.i2(this.a,H.H(b))},
gn:function(a){return this.gav().length}}
W.hd.prototype={}
W.il.prototype={}
W.he.prototype={}
W.hf.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ij"))},
$S:30}
W.be.prototype={
eQ:function(a){var u,t
u=$.iG()
if(u.a===0){for(t=0;t<262;++t)u.V(0,C.W[t],W.la())
for(t=0;t<12;++t)u.V(0,C.u[t],W.lb())}},
aH:function(a){return $.jX().S(0,W.bW(a))},
ak:function(a,b,c){var u,t,s
u=W.bW(a)
t=$.iG()
s=t.l(0,H.e(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.is(s.$4(a,b,c,this))},
$ial:1}
W.ai.prototype={
gP:function(a){return new W.cT(a,this.gn(a),-1,[H.hR(this,a,"ai",0)])}}
W.dg.prototype={
aH:function(a){return C.a.dk(this.a,new W.f4(a))},
ak:function(a,b,c){return C.a.dk(this.a,new W.f3(a,b,c))},
$ial:1}
W.f4.prototype={
$1:function(a){return H.d(a,"$ial").aH(this.a)},
$S:18}
W.f3.prototype={
$1:function(a){return H.d(a,"$ial").ak(this.a,this.b,this.c)},
$S:18}
W.dZ.prototype={
f1:function(a,b,c,d){var u,t,s
this.a.aj(0,c)
u=b.bA(0,new W.hz())
t=b.bA(0,new W.hA())
this.b.aj(0,u)
s=this.c
s.aj(0,C.Y)
s.aj(0,t)},
aH:function(a){return this.a.S(0,W.bW(a))},
ak:function(a,b,c){var u,t
u=W.bW(a)
t=this.c
if(t.S(0,H.e(u)+"::"+b))return this.d.iB(c)
else if(t.S(0,"*::"+b))return this.d.iB(c)
else{t=this.b
if(t.S(0,H.e(u)+"::"+b))return!0
else if(t.S(0,"*::"+b))return!0
else if(t.S(0,H.e(u)+"::*"))return!0
else if(t.S(0,"*::*"))return!0}return!1},
$ial:1}
W.hz.prototype={
$1:function(a){return!C.a.S(C.u,H.H(a))},
$S:25}
W.hA.prototype={
$1:function(a){return C.a.S(C.u,H.H(a))},
$S:25}
W.hC.prototype={
ak:function(a,b,c){if(this.eH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.i2(a,"template")==="")return this.e.S(0,b)
return!1}}
W.hD.prototype={
$1:function(a){return"TEMPLATE::"+H.e(H.H(a))},
$S:29}
W.hB.prototype={
aH:function(a){var u=J.R(a)
if(!!u.$ic7)return!1
u=!!u.$in
if(u&&W.bW(a)==="foreignObject")return!1
if(u)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.i.bE(b,"on"))return!1
return this.aH(a)},
$ial:1}
W.cT.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd2(J.jZ(this.a,u))
this.c=u
return!0}this.sd2(null)
this.c=t
return!1},
gE:function(){return this.d},
sd2:function(a){this.d=H.A(a,H.v(this,0))},
$iaD:1}
W.al.prototype={}
W.hx.prototype={$ilQ:1}
W.e4.prototype={
cG:function(a){new W.hH(this).$2(a,null)},
aU:function(a,b){if(b==null)J.iI(a)
else J.e8(b,a)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.k0(a)
s=J.i2(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.an(o)}q="element unprintable"
try{q=J.ag(a)}catch(o){H.an(o)}try{p=W.bW(a)
this.hI(H.d(a,"$iL"),b,u,q,p,H.d(t,"$iap"),H.H(s))}catch(o){if(H.an(o) instanceof P.aw)throw o
else{this.aU(a,b)
window
n="Removing corrupted element "+H.e(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aU(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aH(a)){this.aU(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ak(a,"is",g)){this.aU(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gav()
t=H.b(u.slice(0),[H.v(u,0)])
for(s=f.gav().length-1,u=f.a,r=J.af(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.ak(a,J.k3(q),r.aO(u,q))){window
p="Removing disallowed attribute <"+H.e(e)+" "+q+'="'+H.e(r.aO(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aO(u,q)
r.hA(u,q)}}if(!!J.R(a).$icc)this.cG(a.content)},
$ilA:1}
W.hH.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aU(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.an(r)
q=H.d(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.e8(p,q)}else J.e8(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iz")}},
$S:27}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e5.prototype={}
W.e6.prototype={}
P.e3.prototype={$ib8:1,
gdu:function(a){return this.a}}
P.hO.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.eu.prototype={
gbQ:function(){var u,t,s
u=this.b
t=H.a3(u,"S",0)
s=W.L
return new H.eQ(new H.co(u,H.i(new P.ev(),{func:1,ret:P.G,args:[t]}),[t]),H.i(new P.ew(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iH(this.b.a,b)},
gn:function(a){return J.bi(this.gbQ().a)},
l:function(a,b){var u=this.gbQ()
return u.b.$1(J.i1(u.a,b))},
gP:function(a){var u=P.kn(this.gbQ(),!1,W.L)
return new J.ah(u,u.length,0,[H.v(u,0)])},
$aS:function(){return[W.L]},
$al:function(){return[W.L]},
$aa:function(){return[W.L]}}
P.ev.prototype={
$1:function(a){return!!J.R(H.d(a,"$iz")).$iL},
$S:16}
P.ew.prototype={
$1:function(a){return H.c(H.d(a,"$iz"),"$iL")},
$S:26}
P.hs.prototype={
gbw:function(a){var u=this.a
if(typeof u!=="number")return u.D()
return H.A(u+this.c,H.v(this,0))},
gdn:function(a){var u=this.b
if(typeof u!=="number")return u.D()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cB(b,"$iar",[P.a5],"$aar")){u=this.a
t=J.af(b)
if(u==t.gbt(b)){s=this.b
if(s==t.gby(b)){if(typeof u!=="number")return u.D()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbw(b)){if(typeof s!=="number")return s.D()
u=H.A(s+this.d,r)===t.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bh(u)
s=this.b
r=J.bh(s)
if(typeof u!=="number")return u.D()
q=H.v(this,0)
u=C.h.gG(H.A(u+this.c,q))
if(typeof s!=="number")return s.D()
q=C.h.gG(H.A(s+this.d,q))
return P.kO(P.hq(P.hq(P.hq(P.hq(0,t),r),u),q))}}
P.ar.prototype={
gbt:function(a){return this.a},
gby:function(a){return this.b},
gbB:function(a){return this.c},
gbr:function(a){return this.d}}
P.c7.prototype={$ic7:1}
P.n.prototype={
gdr:function(a){return new P.eu(a,new W.aa(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.al])
C.a.h(u,W.jm(null))
C.a.h(u,W.jo())
C.a.h(u,new W.hB())
c=new W.e4(new W.dg(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iR(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.aa(r)
p=u.gaz(u)
for(u=J.af(q);s=p.firstChild,s!=null;)u.A(q,s)
return q},
$in:1}
P.cI.prototype={$icI:1}
P.cU.prototype={$icU:1}
P.dl.prototype={$idl:1}
P.bA.prototype={
dh:function(a,b){return a.activeTexture(b)},
dl:function(a,b,c){return a.attachShader(b,c)},
al:function(a,b,c){return a.bindBuffer(b,c)},
iF:function(a,b,c){return a.bindFramebuffer(b,c)},
aI:function(a,b,c){return a.bindTexture(b,c)},
iG:function(a,b,c){return a.blendFunc(b,c)},
dq:function(a,b,c,d){return a.bufferData(b,c,d)},
iJ:function(a,b){return a.clear(b)},
iK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iL:function(a,b){return a.clearDepth(b)},
iM:function(a,b){return a.compileShader(b)},
iT:function(a,b){return a.createShader(b)},
iV:function(a,b){return a.deleteProgram(b)},
iW:function(a,b){return a.deleteShader(b)},
iZ:function(a,b){return a.depthFunc(b)},
j_:function(a,b){return a.disable(b)},
dv:function(a,b){return a.disableVertexAttribArray(b)},
j1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
dz:function(a,b){return a.enableVertexAttribArray(b)},
ei:function(a,b,c){return a.getActiveAttrib(b,c)},
ej:function(a,b,c){return a.getActiveUniform(b,c)},
ek:function(a,b,c){return a.getAttribLocation(b,c)},
cF:function(a,b){return a.getParameter(b)},
eo:function(a,b){return a.getProgramInfoLog(b)},
bD:function(a,b,c){return a.getProgramParameter(b,c)},
ep:function(a,b){return a.getShaderInfoLog(b)},
eq:function(a,b,c){return a.getShaderParameter(b,c)},
er:function(a,b,c){return a.getUniformLocation(b,c)},
jf:function(a,b){return a.linkProgram(b)},
jy:function(a,b,c){return a.pixelStorei(b,c)},
ez:function(a,b,c){return a.shaderSource(b,c)},
jK:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.R(g)
if(!!u.$ib8)t=!0
else t=!1
if(t){this.hW(a,b,c,d,e,f,P.l4(g))
return}if(!!u.$ibZ)u=!0
else u=!1
if(u){this.hX(a,b,c,d,e,f,g)
return}throw H.f(P.k4("Incorrect number or type of arguments"))},
jJ:function(a,b,c,d,e,f,g){return this.jK(a,b,c,d,e,f,g,null,null,null)},
hW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bx:function(a,b,c,d){return a.texParameteri(b,c,d)},
L:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ee:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ef:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eg:function(a,b){return a.useProgram(b)},
jS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibA:1}
P.dp.prototype={$idp:1}
P.dw.prototype={$idw:1}
P.dF.prototype={$idF:1}
O.V.prototype={
bH:function(a){this.sfC(H.b([],[a]))
this.sd7(null)
this.sd4(null)
this.sd8(null)},
cH:function(a,b,c){var u=H.a3(this,"V",0)
H.i(b,{func:1,ret:P.G,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.y,[P.l,u]]}
H.i(a,u)
H.i(c,u)
this.sd7(b)
this.sd4(a)
this.sd8(c)},
b2:function(a,b){return this.cH(a,null,b)},
hk:function(a){var u
H.h(a,"$il",[H.a3(this,"V",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eO:function(a,b){var u
H.h(b,"$il",[H.a3(this,"V",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ah(u,u.length,0,[H.v(u,0)])},
a2:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a3(this,"V",0)
H.A(b,u)
u=[u]
if(this.hk(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eO(s,H.b([b],u))}},
sfC:function(a){this.a=H.h(a,"$ia",[H.a3(this,"V",0)],"$aa")},
sd7:function(a){this.b=H.i(a,{func:1,ret:P.G,args:[[P.l,H.a3(this,"V",0)]]})},
sd4:function(a){this.c=H.i(a,{func:1,ret:-1,args:[P.y,[P.l,H.a3(this,"V",0)]]})},
sd8:function(a){this.d=H.i(a,{func:1,ret:-1,args:[P.y,[P.l,H.a3(this,"V",0)]]})},
$il:1}
O.c1.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
eP:function(a){var u=this.b
if(u!=null)u.C(a)},
aA:function(){return this.eP(null)},
gW:function(){var u=this.a
if(u.length>0)return C.a.gbs(u)
else return V.da()},
e6:function(a){var u=this.a
if(a==null)C.a.h(u,V.da())
else C.a.h(u,a)
this.aA()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbS:function(a){this.a=H.h(a,"$ia",[V.a7],"$aa")}}
E.eb.prototype={}
E.ac.prototype={
scI:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().U(0,this.ge2())
t=this.c
if(t!=null)t.gq().h(0,this.ge2())
s=new D.F("shape",u,this.c,this,[F.dq])
s.b=!0
this.ae(s)}},
saX:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gq().U(0,this.ge0())
if(a!=null)a.gq().h(0,this.ge0())
this.r=a
t=new D.F("mover",u,a,this,[U.a1])
t.b=!0
this.ae(t)}},
ao:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aN(a,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.F("matrix",s,t,this,[V.a7])
r.b=!0
this.ae(r)}for(u=this.y.a,u=new J.ah(u,u.length,0,[H.v(u,0)]);u.w();)u.d.ao(a)},
aM:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gW())
else C.a.h(u.a,t.u(0,u.gW()))
u.aA()
a.e7(this.f)
u=a.dy
s=(u&&C.a).gbs(u)
if(s!=null&&this.d!=null)s.jC(a,this)
for(u=this.y.a,u=new J.ah(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aM(a)
a.e5()
a.dx.cB()},
gq:function(){var u=this.z
if(u==null){u=D.J()
this.z=u}return u},
ae:function(a){var u=this.z
if(u!=null)u.C(a)},
a3:function(){return this.ae(null)},
e3:function(a){H.d(a,"$iu")
this.e=null
this.ae(a)},
jp:function(){return this.e3(null)},
e1:function(a){this.ae(H.d(a,"$iu"))},
jo:function(){return this.e1(null)},
e_:function(a){this.ae(H.d(a,"$iu"))},
jl:function(){return this.e_(null)},
jk:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$il",[E.ac],"$al")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bn()
o.sab(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.i(t,s)
if(o.a==null)o.sab(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
jn:function(a,b){var u,t
H.h(b,"$il",[E.ac],"$al")
for(u=b.gP(b),t=this.gdZ();u.w();)u.gE().gq().U(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfe:function(a,b){this.y=H.h(b,"$iV",[E.ac],"$aV")},
$iaT:1}
E.fd.prototype={
eK:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ab(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c1()
t=[V.a7]
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.fe(this))
this.cy=u
u=new O.c1()
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.ff(this))
this.db=u
u=new O.c1()
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.fg(this))
this.dx=u
this.shV(H.b([],[O.bC]))
u=this.dy;(u&&C.a).h(u,null)
this.shR(new H.aF([P.m,A.c8]))},
gjz:function(){var u=this.z
if(u==null){u=this.cy.gW().u(0,this.db.gW())
this.z=u}return u},
e7:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbs(u):a;(u&&C.a).h(u,t)},
e5:function(){var u=this.dy
if(u.length>1)u.pop()},
shV:function(a){this.dy=H.h(a,"$ia",[O.bC],"$aa")},
shR:function(a){this.fr=H.h(a,"$iap",[P.m,A.c8],"$aap")}}
E.fe.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ff.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.fg.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.dB.prototype={
cN:function(a){H.d(a,"$iu")
this.e8()},
cM:function(){return this.cN(null)},
gj9:function(){var u,t,s
u=Date.now()
t=C.h.Z(P.iP(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ab(u,!1)
return s/t},
dc:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.B(u)
s=C.j.cr(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.j.cr(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jc(C.q,this.gjD())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.i(new E.fA(this),{func:1,ret:-1,args:[P.a5]})
C.G.fl(u)
C.G.hE(u,W.jv(t,P.a5))}},
jB:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dc()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.iP(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aA()
r=s.db
C.a.sn(r.a,0)
r.aA()
r=s.dx
C.a.sn(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aM(this.e)}s=this.z
if(s!=null)s.C(null)}catch(q){u=H.an(q)
t=H.bJ(q)
P.iC("Error: "+H.e(u))
P.iC("Stack: "+H.e(t))
throw H.f(u)}}}
E.fA.prototype={
$1:function(a){var u
H.ll(a)
u=this.a
if(u.ch){u.ch=!1
u.jB()}},
$S:40}
Z.dN.prototype={$ilu:1}
Z.cJ.prototype={
ca:function(a){var u,t,s
try{t=a.a
C.b.dz(t,this.e)
C.b.jS(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.an(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}}
Z.h4.prototype={$ilv:1}
Z.cK.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ca:function(a){var u,t
u=this.a
C.b.al(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ca(a)},
jR:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dv(s,u[t].e)
C.b.al(s,this.a.a,null)},
aM:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.al(t,p,r.b)
C.b.j1(t,q.a,q.b,5123,0)
C.b.al(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ag(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sfw:function(a){this.b=H.h(a,"$ia",[Z.b9],"$aa")},
$ilD:1}
Z.b9.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.by(this.c)+"'")+"]"}}
Z.aM.prototype={
gcJ:function(a){var u,t
u=this.a
t=(u&$.aY().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=2
if((u&$.b_().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
iC:function(a){var u,t,s
u=$.aY()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cD()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cE()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aV()
if((t&u.a)!==0)if(s===a)return u
return $.jW()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aM))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.aY().a)!==0)C.a.h(u,"Pos")
if((t&$.aX().a)!==0)C.a.h(u,"Norm")
if((t&$.aW().a)!==0)C.a.h(u,"Binm")
if((t&$.aZ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b_().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cD().a)!==0)C.a.h(u,"Clr3")
if((t&$.cE().a)!==0)C.a.h(u,"Clr4")
if((t&$.bM().a)!==0)C.a.h(u,"Weight")
if((t&$.aV().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ee.prototype={}
D.bn.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.i(b,u)
if(this.a==null)this.sab(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[D.u]})
u=this.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=this.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=this.b
t=(u&&C.a).U(u,b)||t}return t},
C:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.u(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a_(t,new D.es(u))
t=this.b
if(t!=null)C.a.a_(t,new D.et(u))
u=this.b
if(u!=null)C.a.sn(u,0)
return!0},
j3:function(){return this.C(null)},
jE:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
ay:function(){return this.jE(!0,!1)},
sab:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")},
saS:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")}}
D.es.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.et.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.u.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cL.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d1.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.eJ.prototype={
jv:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jr:function(a){this.c=a.b
this.d.U(0,a.a)
return!1},
shy:function(a){this.d=H.h(a,"$ij7",[P.y],"$aj7")}}
X.d6.prototype={}
X.eN.prototype={
aR:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ab(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.a2(t.a+s*r,t.b+q*p)
p=this.a.gaK()
n=new X.aS(a,V.bc(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cA:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eu()
if(typeof u!=="number")return u.eh()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aR(a,b))
return!0},
jw:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.c3(new V.M(q*p,o*n),t,s,new P.ab(r,!1),this)
r.b=!0
u.C(r)
return!0},
h9:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ab(Date.now(),!1)
t=this.f
s=new X.d6(c,a,this.a.gaK(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.bc()}}
X.ak.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ak))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aS.prototype={}
X.eZ.prototype={
bO:function(a,b,c){var u,t,s
u=new P.ab(Date.now(),!1)
t=this.a.gaK()
s=new X.aS(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bO(a,b,!0))
return!0},
aZ:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eu()
if(typeof u!=="number")return u.eh()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bO(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bO(a,b,!1))
return!0},
jx:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.c3(new V.M(r*q,p*o),t,b,new P.ab(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdw:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
gbz:function(){var u=this.c
if(u==null){u=D.J()
this.c=u}return u},
gdY:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u}}
X.c3.prototype={}
X.f9.prototype={}
X.dD.prototype={}
X.fD.prototype={
aR:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a2],"$aa")
u=new P.ab(Date.now(),!1)
t=a.length>0?a[0]:V.bc()
s=this.a.gaK()
r=new X.dD(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
ju:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.b
if(u==null)return!1
u.C(this.aR(a,!0))
return!0},
js:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.c
if(u==null)return!1
u.C(this.aR(a,!0))
return!0},
jt:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.d
if(u==null)return!1
u.C(this.aR(a,!1))
return!0}}
X.dI.prototype={
gaK:function(){var u=this.a
return V.j5(0,0,C.o.gds(u).c,C.o.gds(u).d)},
cZ:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.ak(t,a.altKey,a.shiftKey))},
aG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
c6:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
au:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.H()
q=u.top
if(typeof s!=="number")return s.H()
return new V.a2(t-r,s-q)},
aT:function(a){return new V.M(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a2])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.j.af(p.pageX)
C.j.af(p.pageY)
n=u.left
C.j.af(p.pageX)
C.a.h(t,new V.a2(o-n,C.j.af(p.pageY)-u.top))}return t},
ar:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.ak(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.H()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.H()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
h3:function(a){this.f=!0},
fS:function(a){this.f=!1},
fY:function(a){H.d(a,"$ia0")
if(this.f&&this.bT(a))a.preventDefault()},
h7:function(a){var u
H.d(a,"$iaG")
if(!this.f)return
u=this.cZ(a)
this.b.jv(u)},
h5:function(a){var u
H.d(a,"$iaG")
if(!this.f)return
u=this.cZ(a)
this.b.jr(u)},
hb:function(a){var u,t,s,r
H.d(a,"$ia0")
u=this.a
u.focus()
this.f=!0
this.aG(a)
if(this.x){t=this.ar(a)
s=this.aT(a)
if(this.d.cA(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ar(a)
r=this.au(a)
if(this.c.cA(t,r))a.preventDefault()},
hf:function(a){var u,t,s
H.d(a,"$ia0")
this.aG(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aZ(u,s))a.preventDefault()},
h1:function(a){var u,t,s
H.d(a,"$ia0")
if(!this.bT(a)){this.aG(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aZ(u,s))a.preventDefault()}},
hd:function(a){var u,t,s
H.d(a,"$ia0")
this.aG(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aY(u,s))a.preventDefault()},
h_:function(a){var u,t,s
H.d(a,"$ia0")
if(!this.bT(a)){this.aG(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aY(u,s))a.preventDefault()}},
hh:function(a){var u,t
H.d(a,"$iaN")
this.aG(a)
u=new V.M((a&&C.F).giX(a),C.F.giY(a)).B(0,180)
if(this.x){if(this.d.jw(u))a.preventDefault()
return}if(this.r)return
t=this.au(a)
if(this.c.jx(u,t))a.preventDefault()},
hj:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ar(this.y)
s=this.au(this.y)
this.d.h9(t,s,u)}},
hw:function(a){var u
H.d(a,"$iaz")
this.a.focus()
this.f=!0
this.c6(a)
u=this.c2(a)
if(this.e.ju(u))a.preventDefault()},
hs:function(a){var u
H.d(a,"$iaz")
this.c6(a)
u=this.c2(a)
if(this.e.js(u))a.preventDefault()},
hu:function(a){var u
H.d(a,"$iaz")
this.c6(a)
u=this.c2(a)
if(this.e.jt(u))a.preventDefault()},
sfm:function(a){this.z=H.h(a,"$ia",[[P.cb,P.K]],"$aa")}}
D.b4.prototype={
gq:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
ap:function(a){var u
H.d(a,"$iu")
u=this.d
if(u!=null)u.C(a)},
eT:function(){return this.ap(null)},
$iW:1,
$iaT:1}
D.W.prototype={$iaT:1}
D.d2.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
ap:function(a){var u=this.Q
if(u!=null)u.C(a)},
d6:function(a){var u
H.d(a,"$iu")
u=this.ch
if(u!=null)u.C(a)},
h8:function(){return this.d6(null)},
hm:function(a){var u,t,s
H.h(a,"$il",[D.W],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.eR(s))return!1}return!0},
fM:function(a,b){var u,t,s,r,q,p,o,n
u=D.W
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gd5(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=H.d(b[p],"$iW")
if(o instanceof D.b4)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bn()
n.sab(null)
n.saS(null)
n.c=null
n.d=0
o.d=n}H.i(s,r)
if(n.a==null)n.sab(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.ap(u)},
hq:function(a,b){var u,t,s,r
u=D.W
H.h(b,"$il",[u],"$al")
for(t=b.gP(b),s=this.gd5();t.w();){r=t.gE()
C.a.U(this.e,r)
r.gq().U(0,s)}u=new D.bt(a,b,this,[u])
u.b=!0
this.ap(u)},
eR:function(a){var u=C.a.S(this.e,a)
return u},
sfk:function(a){this.e=H.h(a,"$ia",[D.b4],"$aa")},
shx:function(a){this.f=H.h(a,"$ia",[D.dj],"$aa")},
shT:function(a){this.r=H.h(a,"$ia",[D.dr],"$aa")},
si5:function(a){this.x=H.h(a,"$ia",[D.dy],"$aa")},
si6:function(a){this.y=H.h(a,"$ia",[D.dz],"$aa")},
si7:function(a){this.z=H.h(a,"$ia",[D.dA],"$aa")},
$al:function(){return[D.W]},
$aV:function(){return[D.W]}}
D.dj.prototype={$iW:1,$iaT:1}
D.dr.prototype={$iW:1,$iaT:1}
D.dy.prototype={$iW:1,$iaT:1}
D.dz.prototype={$iW:1,$iaT:1}
D.dA.prototype={$iW:1,$iaT:1}
V.X.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bl.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.eq.prototype={}
V.d9.prototype={
aa:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.w]
t=V.bI(H.b([this.a,this.d,this.r],u),3,0)
s=V.bI(H.b([this.b,this.e,this.x],u),3,0)
r=V.bI(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.k(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.k(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.k(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.k(t,1)
n=" "+t[1]+", "
if(1>=p)return H.k(s,1)
n=n+s[1]+", "
if(1>=o)return H.k(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.k(t,2)
u=" "+t[2]+", "
if(2>=p)return H.k(s,2)
u=u+s[2]+", "
if(2>=o)return H.k(r,2)
return n+(u+r[2]+"]")}}
V.a7.prototype={
aa:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
dW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.I().a)return V.da()
a8=1/a7
a9=-r
b0=-d
return V.aI((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aI(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cD:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.O(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b1:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ay(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.J()},
dV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bI(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bI(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bI(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bI(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.k(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.k(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.k(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.k(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.k(t,1)
l=l+t[1]+", "
if(1>=o)return H.k(s,1)
l=l+s[1]+", "
if(1>=n)return H.k(r,1)
l=l+r[1]+", "
if(1>=m)return H.k(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.k(t,2)
p=p+t[2]+", "
if(2>=o)return H.k(s,2)
p=p+s[2]+", "
if(2>=n)return H.k(r,2)
p=p+r[2]+", "
if(2>=m)return H.k(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.k(t,3)
l=l+t[3]+", "
if(3>=o)return H.k(s,3)
l=l+s[3]+", "
if(3>=n)return H.k(r,3)
l=l+r[3]+", "
if(3>=m)return H.k(q,3)
return p+(l+q[3]+"]")},
J:function(){return this.dV("",3,0)},
v:function(a){return this.dV(a,3,0)}}
V.a2.prototype={
H:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.ay.prototype={
H:function(a,b){return new V.ay(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.dk.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.dn.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dn))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.M.prototype={
ct:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.M(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.jg
if(u==null){u=new V.M(0,0)
$.jg=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.M(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.O.prototype={
ct:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.O(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.I().a)return V.dM()
return new V.O(this.a/b,this.b/b,this.c/b)},
dX:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.ef.prototype={
bK:function(a){var u=V.lt(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scE:function(a,b){},
scv:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.I().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bK(t)}u=new D.F("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.M(u)}},
scz:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bK(t)}u=new D.F("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.M(u)}},
sa4:function(a,b){var u
b=this.bK(b)
u=this.d
if(!(Math.abs(u-b)<$.I().a)){this.d=b
u=new D.F("location",u,b,this,[P.w])
u.b=!0
this.M(u)}},
scw:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.F("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.F("velocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
sci:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.F("dampening",u,a,this,[P.w])
u.b=!0
this.M(u)}},
ao:function(a){var u,t,s,r,q
u=this.f
t=$.I().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.I().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.cN.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
aN:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bY.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.e
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
fK:function(a,b){var u,t,s,r,q,p,o,n
u=U.a1
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.i(s,r)
if(n.a==null)n.sab(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.M(u)},
ho:function(a,b){var u,t,s
u=U.a1
H.h(b,"$il",[u],"$al")
for(t=b.gP(b),s=this.gaF();t.w();)t.gE().gq().U(0,s)
u=new D.bt(a,b,this,[u])
u.b=!0
this.M(u)},
aN:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aP()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ah(u,u.length,0,[H.v(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aN(a,b)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.da():s
u=this.e
if(u!=null)u.ay()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.a1]},
$aV:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dJ.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.J()
this.cy=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.cy
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
aV:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdw().h(0,this.gbU())
this.a.c.gdY().h(0,this.gbW())
this.a.c.gbz().h(0,this.gbY())
return!0},
bV:function(a){H.d(a,"$iu")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bX:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaS")
if(!this.y)return
if(this.x){u=a.d.H(0,a.y)
u=new V.M(u.a,u.b)
u=u.F(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.H(0,a.y)
u=new V.M(t.a,t.b).u(0,2).B(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.M(s.a,s.b).u(0,2).B(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.O()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
this.b.sR(0)
t=t.H(0,a.z)
this.Q=new V.M(t.a,t.b).u(0,2).B(0,u.ga5())}this.a1()},
bZ:function(a){var u,t,s
H.d(a,"$iu")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.F(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sR(t*10*s)
this.a1()}},
aN:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aP()
if(u<t){this.ch=t
s=a.y
this.b.ao(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aI(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia1:1}
U.dK.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.J()
this.fx=u}return u},
M:function(a){var u
H.d(a,"$iu")
u=this.fx
if(u!=null)u.C(a)},
a1:function(){return this.M(null)},
aV:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdw().h(0,this.gbU())
this.a.c.gdY().h(0,this.gbW())
this.a.c.gbz().h(0,this.gbY())
u=this.a.d
t=u.f
if(t==null){t=D.J()
u.f=t
u=t}else u=t
u.h(0,this.gfD())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gfF())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.gi2())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gi0())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.ghZ())
return!0},
ai:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.M(u,t)},
bV:function(a){a=H.c(H.d(a,"$iu"),"$iaS")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bX:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaS")
if(!this.cx)return
if(this.ch){u=a.d.H(0,a.y)
u=new V.M(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.H(0,a.y)
u=this.ai(new V.M(t.a,t.b).u(0,2).B(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ai(new V.M(s.a,s.b).u(0,2).B(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.H(0,a.z)
this.dx=this.ai(new V.M(t.a,t.b).u(0,2).B(0,u.ga5()))}this.a1()},
bZ:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sR(-t*10*u)
this.a1()}},
fE:function(a){if(H.c(H.d(a,"$iu"),"$id6").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fG:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaS")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ai(new V.M(s.a,s.b).u(0,2).B(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.H(0,a.z)
this.dx=this.ai(new V.M(t.a,t.b).u(0,2).B(0,u.ga5()))
this.a1()},
i3:function(a){H.d(a,"$iu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
i1:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$idD")
if(!this.cx)return
if(this.ch){u=a.d.H(0,a.y)
u=new V.M(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.H(0,a.y)
u=this.ai(new V.M(t.a,t.b).u(0,2).B(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=this.ai(new V.M(s.a,s.b).u(0,2).B(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa4(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.H(0,a.z)
this.dx=this.ai(new V.M(t.a,t.b).u(0,2).B(0,u.ga5()))}this.a1()},
i_:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sR(-t*10*u)
this.a1()}},
aN:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aP()
if(u<t){this.dy=t
s=a.y
this.c.ao(s)
this.b.ao(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aI(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.aI(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia1:1}
U.dL.prototype={
gq:function(){var u=this.r
if(u==null){u=D.J()
this.r=u}return u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aV:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.J()
u.e=t
u=t}else u=t
t=this.gfH()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.J()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fI:function(a){var u,t,s,r
H.d(a,"$iu")
if(!J.U(this.b,this.a.b.c))return
H.c(a,"$ic3")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.F("zoom",u,r,this,[P.w])
u.b=!0
this.M(u)}},
aN:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aI(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia1:1}
M.cR.prototype={
aq:function(a){var u
H.d(a,"$iu")
u=this.x
if(u!=null)u.C(a)},
eV:function(){return this.aq(null)},
fU:function(a,b){var u,t,s,r,q,p,o,n
u=E.ac
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gah(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bn()
n.sab(null)
n.saS(null)
n.c=null
n.d=0
o.z=n}H.i(s,r)
if(n.a==null)n.sab(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.aq(u)},
fW:function(a,b){var u,t,s
u=E.ac
H.h(b,"$il",[u],"$al")
for(t=b.gP(b),s=this.gah();t.w();)t.gE().gq().U(0,s)
u=new D.bt(a,b,this,[u])
u.b=!0
this.aq(u)},
sea:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().U(0,this.gah())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gah())
u=new D.F("technique",t,this.c,this,[O.bC])
u.b=!0
this.aq(u)}},
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.e7(this.c)
u=this.b
u.toString
t=a.a
C.b.iF(t,36160,null)
C.b.ck(t,2884)
C.b.ck(t,2929)
C.b.iZ(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.B(s)
o=C.j.af(p*s)
p=q.b
if(typeof r!=="number")return H.B(r)
n=C.j.af(p*r)
p=C.j.af(q.c*s)
a.c=p
q=C.j.af(q.d*r)
a.d=q
C.b.jT(t,o,n,p,q)
C.b.iL(t,u.c)
u=u.a
C.b.iK(t,u.a,u.b,u.c,u.d)
C.b.iJ(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aI(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e6(i)
t=$.j_
if(t==null){t=V.j1()
q=V.jk()
p=$.jh
if(p==null){p=new V.O(0,0,-1)
$.jh=p}p=V.iW(t,q,p)
$.j_=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.e6(h)
u=this.c
if(u!=null)u.ao(a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.v(u,0)]);u.w();)u.d.ao(a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aM(a)
this.a.toString
a.cy.cB()
a.db.cB()
this.b.toString
a.e5()},
seU:function(a,b){this.d=H.h(b,"$iV",[E.ac],"$aV")},
$ilB:1}
A.cH.prototype={}
A.ea.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dz(r.a,r.c)}},
j0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dv(r.a,r.c)}}}
A.eT.prototype={
eJ:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.aU("")
t=a7.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a7.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a7.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a7.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a7.ib(u)
a7.ik(u)
a7.ic(u)
a7.it(u)
a7.iu(u)
a7.im(u)
a7.iy(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a7.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a7.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a7.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a7.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a7.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
n=s.charCodeAt(0)==0?s:s
s=this.z
u=new P.aU("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
q=s.r1
if(q){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
p="precision mediump float;\n\nvarying vec3 normalVec;\n"}else p="precision mediump float;\n\n"
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}if(s.k4){p+="varying vec3 viewPos;\n"
u.a=p}p+="\n"
u.a=p
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}if(s.fr){p+="uniform mat4 invViewMat;\n"
u.a=p}u.a=p+"\n"
s.ih(u)
s.ia(u)
s.ie(u)
s.ii(u)
s.ir(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.ip(u)
s.iq(u)}s.il(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.f:m+="   return alpha;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=s.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.b([],[P.m])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.ig(u)
s.io(u)
s.is(u)
s.iv(u)
s.iw(u)
s.ix(u)
s.ij(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(q){q=m+"   vec3 norm = normal();\n"
u.a=q}else q=m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.b([],[P.m])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.c)u.a+="   setDiffuseColor();\n"
if(s.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.c)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.c)C.a.h(j,"emission()")
if(s.r!==C.c)C.a.h(j,"reflect(refl)")
if(s.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.k(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d_(n,35633)
this.f=this.d_(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dl(s,q,this.e)
C.b.dl(s,this.r,this.f)
C.b.jf(s,this.r)
if(!H.is(C.b.bD(s,this.r,35714))){h=C.b.eo(s,this.r)
C.b.iV(s,this.r)
H.q(P.p("Failed to link shader: "+H.e(h)))}this.hO()
this.hQ()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a7.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iam")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iam")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iam")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iam")
if(a7.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$ich")
if(a7.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iam")
if(a7.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iam")
this.sfa(H.b([],[A.am]))
t=a7.an
if(t>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$iE")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.l(0,q)
if(f==null)H.q(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(f,"$iam"))}}t=a7.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.c(this.y.m(0,"emissionTxt"),"$ia8")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iE")
break
case C.d:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia9")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iE")
break}}t=a7.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.c(this.y.m(0,"ambientTxt"),"$ia8")
this.an=H.c(this.y.m(0,"nullAmbientTxt"),"$iE")
break
case C.d:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia9")
this.an=H.c(this.y.m(0,"nullAmbientTxt"),"$iE")
break}}t=a7.c
if(t!==C.c){this.ad=H.c(this.y.m(0,"diffuseClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.bc=H.c(this.y.m(0,"diffuseTxt"),"$ia8")
this.bd=H.c(this.y.m(0,"nullDiffuseTxt"),"$iE")
break
case C.d:this.dA=H.c(this.y.m(0,"diffuseTxt"),"$ia9")
this.bd=H.c(this.y.m(0,"nullDiffuseTxt"),"$iE")
break}}t=a7.d
if(t!==C.c){this.be=H.c(this.y.m(0,"invDiffuseClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.dB=H.c(this.y.m(0,"invDiffuseTxt"),"$ia8")
this.bf=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iE")
break
case C.d:this.dC=H.c(this.y.m(0,"invDiffuseTxt"),"$ia9")
this.bf=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a7.e
if(t!==C.c){this.bi=H.c(this.y.m(0,"shininess"),"$iT")
this.bg=H.c(this.y.m(0,"specularClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.dD=H.c(this.y.m(0,"specularTxt"),"$ia8")
this.bh=H.c(this.y.m(0,"nullSpecularTxt"),"$iE")
break
case C.d:this.dE=H.c(this.y.m(0,"specularTxt"),"$ia9")
this.bh=H.c(this.y.m(0,"nullSpecularTxt"),"$iE")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.e:this.dF=H.c(this.y.m(0,"bumpTxt"),"$ia8")
this.bj=H.c(this.y.m(0,"nullBumpTxt"),"$iE")
break
case C.d:this.dG=H.c(this.y.m(0,"bumpTxt"),"$ia9")
this.bj=H.c(this.y.m(0,"nullBumpTxt"),"$iE")
break}if(a7.dy){this.dH=H.c(this.y.m(0,"envSampler"),"$ia9")
this.dI=H.c(this.y.m(0,"nullEnvTxt"),"$iE")
t=a7.r
if(t!==C.c){this.bk=H.c(this.y.m(0,"reflectClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.dJ=H.c(this.y.m(0,"reflectTxt"),"$ia8")
this.bl=H.c(this.y.m(0,"nullReflectTxt"),"$iE")
break
case C.d:this.dK=H.c(this.y.m(0,"reflectTxt"),"$ia9")
this.bl=H.c(this.y.m(0,"nullReflectTxt"),"$iE")
break}}t=a7.x
if(t!==C.c){this.bm=H.c(this.y.m(0,"refraction"),"$iT")
this.bn=H.c(this.y.m(0,"refractClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.e:this.dL=H.c(this.y.m(0,"refractTxt"),"$ia8")
this.bo=H.c(this.y.m(0,"nullRefractTxt"),"$iE")
break
case C.d:this.dM=H.c(this.y.m(0,"refractTxt"),"$ia9")
this.bo=H.c(this.y.m(0,"nullRefractTxt"),"$iE")
break}}}t=a7.y
if(t!==C.c){this.bp=H.c(this.y.m(0,"alpha"),"$iT")
switch(t){case C.c:break
case C.f:break
case C.e:this.dN=H.c(this.y.m(0,"alphaTxt"),"$ia8")
this.bq=H.c(this.y.m(0,"nullAlphaTxt"),"$iE")
break
case C.d:this.dO=H.c(this.y.m(0,"alphaTxt"),"$ia9")
this.bq=H.c(this.y.m(0,"nullAlphaTxt"),"$iE")
break}}this.seW(H.b([],[A.cg]))
this.seX(H.b([],[A.ci]))
this.seY(H.b([],[A.cj]))
this.seZ(H.b([],[A.ck]))
this.sf_(H.b([],[A.cl]))
this.sf0(H.b([],[A.cm]))
if(a7.k2){t=a7.z
if(t>0){this.dP=H.d(this.y.m(0,"dirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="dirLights["+g+"].color"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.cl;(s&&C.a).h(s,new A.cg(g,f,e))}}t=a7.Q
if(t>0){this.dQ=H.d(this.y.m(0,"pntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="pntLights["+g+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="pntLights["+g+"].att0"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iT")
s=this.y
r="pntLights["+g+"].att1"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iT")
s=this.y
r="pntLights["+g+"].att2"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iT")
s=this.cm;(s&&C.a).h(s,new A.ci(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dR=H.d(this.y.m(0,"spotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="spotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="spotLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iT")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iT")
s=this.y
r="spotLights["+g+"].att0"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iT")
s=this.y
r="spotLights["+g+"].att1"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iT")
s=this.y
r="spotLights["+g+"].att2"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iT")
s=this.cn;(s&&C.a).h(s,new A.cj(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dS=H.d(this.y.m(0,"txtDirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtDirLights["+g+"].color"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iE")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ia8")
s=this.co;(s&&C.a).h(s,new A.ck(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dT=H.d(this.y.m(0,"txtPntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ich")
s=this.y
r="txtPntLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iE")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iT")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iT")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iT")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$ia9")
s=this.cp;(s&&C.a).h(s,new A.cl(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dU=H.d(this.y.m(0,"txtSpotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iE")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iC")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iT")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iT")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.l(0,r)
if(a3==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iT")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.l(0,r)
if(a4==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iT")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.l(0,r)
if(a5==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iT")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.l(0,r)
if(a6==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a6,"$ia8")
s=this.cq;(s&&C.a).h(s,new A.cm(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ac:function(a,b,c){C.b.N(b.a,b.d,1)},
a6:function(a,b,c){if(c==null||c.d<6)C.b.N(b.a,b.d,1)
else{a.ey(c)
C.b.N(b.a,b.d,0)}},
sfa:function(a){this.r1=H.h(a,"$ia",[A.am],"$aa")},
seW:function(a){this.cl=H.h(a,"$ia",[A.cg],"$aa")},
seX:function(a){this.cm=H.h(a,"$ia",[A.ci],"$aa")},
seY:function(a){this.cn=H.h(a,"$ia",[A.cj],"$aa")},
seZ:function(a){this.co=H.h(a,"$ia",[A.ck],"$aa")},
sf_:function(a){this.cp=H.h(a,"$ia",[A.cl],"$aa")},
sf0:function(a){this.cq=H.h(a,"$ia",[A.cm],"$aa")}}
A.eW.prototype={
ib:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.an+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
a.a=u
u+="void adjustBend(float bendVal)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(bendVal >= 0.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=u
u+="      if(index < bendMatCount)\n"
a.a=u
u+="      {\n"
a.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=u
u+="         mat4 m = bendValues[index].mat;\n"
a.a=u
u+="         weightSum += weight;\n"
a.a=u
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
a.a=u
u+="   }\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="void setupBendData()\n"
a.a=u
u+="{\n"
a.a=u
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
a.a=u
u+="   adjustBend(bendAttr.x);\n"
a.a=u
u+="   adjustBend(bendAttr.y);\n"
a.a=u
u+="   adjustBend(bendAttr.z);\n"
a.a=u
u+="   adjustBend(bendAttr.w);\n"
a.a=u
u+="   if(weightSum < 1.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float weight = 1.0 - weightSum;\n"
a.a=u
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
ik:function(a){var u
if(!this.r1)return
u=a.a+="varying vec3 normalVec;\n"
u+="\n"
a.a=u
u+="vec3 getNorm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ic:function(a){var u
if(!this.r2)return
u=a.a+="varying vec3 binormalVec;\n"
u+="\n"
a.a=u
u+="vec3 getBinm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
it:function(a){var u,t
if(!this.rx)return
u=this.x2
if(u)a.a+="uniform mat3 txt2DMat;\n"
t=a.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
a.a=t
t+="\n"
a.a=t
t+="vec2 getTxt2D()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
iu:function(a){var u,t
if(!this.ry)return
u=this.y1
if(u)a.a+="uniform mat4 txtCubeMat;\n"
t=a.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 getTxtCube()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
im:function(a){var u
if(!this.k3)return
u=a.a+="varying vec3 objPos;\n"
u+="\n"
a.a=u
u+="vec3 getObjPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iy:function(a){var u
if(!this.k4)return
u=a.a+="varying vec3 viewPos;\n"
u+="\n"
a.a=u
u+="vec3 getViewPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
as:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.b3(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ih:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.as(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ia:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.as(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ie:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ii:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ir:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.as(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
il:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.f:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
ip:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.as(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iq:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.as(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ig:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
io:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
is:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iv:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
iw:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ix:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
ij:function(a){var u
if(this.dx>0)return
u=a.a+="// === No Lights ===\n"
u+="\n"
a.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i:function(a){return this.ad}}
A.cg.prototype={}
A.ck.prototype={}
A.ci.prototype={}
A.cl.prototype={}
A.cj.prototype={}
A.cm.prototype={}
A.c8.prototype={
eM:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d_:function(a,b){var u,t,s
u=this.a
t=C.b.iT(u,b)
C.b.ez(u,t,a)
C.b.iM(u,t)
if(!H.is(C.b.eq(u,t,35713))){s=C.b.ep(u,t)
C.b.iW(u,t)
throw H.f(P.p("Error compiling shader '"+H.e(t)+"': "+H.e(s)))}return t},
hO:function(){var u,t,s,r,q,p
u=H.b([],[A.cH])
t=this.a
s=H.a4(C.b.bD(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ei(t,this.r,r)
p=C.b.ek(t,this.r,q.name)
C.a.h(u,new A.cH(t,q.name,p))}this.x=new A.ea(u)},
hQ:function(){var u,t,s,r,q,p
u=H.b([],[A.dE])
t=this.a
s=H.a4(C.b.bD(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ej(t,this.r,r)
p=C.b.er(t,this.r,q.name)
C.a.h(u,this.iU(q.type,q.size,q.name,p))}this.y=new A.fO(u)},
aD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.ii(u,t,b,a,c)},
fh:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a8(u,t,b,c)
else return A.ii(u,t,b,a,c)},
fi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.ii(u,t,b,a,c)},
ba:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
iU:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.fJ(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.fM(this.a,this.r,c,d)
case 35667:return new A.fK(this.a,this.r,c,d)
case 35668:return new A.fL(this.a,this.r,c,d)
case 35669:return new A.fN(this.a,this.r,c,d)
case 35674:return new A.fP(this.a,this.r,c,d)
case 35675:return new A.ch(this.a,this.r,c,d)
case 35676:return new A.am(this.a,this.r,c,d)
case 35678:return this.fh(b,c,d)
case 35680:return this.fi(b,c,d)
case 35670:throw H.f(this.ba("BOOL",c))
case 35671:throw H.f(this.ba("BOOL_VEC2",c))
case 35672:throw H.f(this.ba("BOOL_VEC3",c))
case 35673:throw H.f(this.ba("BOOL_VEC4",c))
default:throw H.f(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bm.prototype={
i:function(a){return this.b}}
A.dE.prototype={}
A.fO.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
j8:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+a
return s},
J:function(){return this.j8("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.fK.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.fL.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.fN.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.fI.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)},
si8:function(a){this.e=H.h(a,"$ia",[P.y],"$aa")}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.fJ.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.fM.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.fP.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ch.prototype={
ag:function(a){var u=new Float32Array(H.cy(H.h(a,"$ia",[P.w],"$aa")))
C.b.ee(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.am.prototype={
ag:function(a){var u=new Float32Array(H.cy(H.h(a,"$ia",[P.w],"$aa")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a8.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a9.prototype={
ey:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(u<6)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hJ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cu(u.b,b).cu(u.d.cu(u.c,b),c)
u=new V.ay(t.a,t.b,t.c)
if(!J.U(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a3()}a.sjL(t.B(0,Math.sqrt(t.F(t))))
u=1-b
s=1-c
s=new V.dk(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.U(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a3()}},
$S:33}
F.Y.prototype={
f9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dM()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.B(0,Math.sqrt(q.F(q)))},
fd:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.H(0,t)
u=new V.O(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.F(u)))
u=r.H(0,t)
u=new V.O(u.a,u.b,u.c)
u=q.aW(u.B(0,Math.sqrt(u.F(u))))
return u.B(0,Math.sqrt(u.F(u)))},
ce:function(){if(this.d!=null)return!0
var u=this.f9()
if(u==null){u=this.fd()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
f8:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dM()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.B(0,Math.sqrt(q.F(q)))},
fc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
i=u-j.b
if(Math.abs(i-0)<$.I().a){u=m.H(0,p)
u=new V.O(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.F(u)))
if(j.a-k.a<0)h=h.O(0)}else{g=(u-l.b)/i
u=m.H(0,p)
u=new V.ay(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).H(0,s)
u=new V.O(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.F(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.O(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.F(u)))
u=f.aW(h)
u=u.B(0,Math.sqrt(u.F(u))).aW(f)
h=u.B(0,Math.sqrt(u.F(u)))}return h},
cc:function(){if(this.e!=null)return!0
var u=this.f8()
if(u==null){u=this.fc()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.a9(J.ag(u.e),0)+", "+C.i.a9(J.ag(this.b.e),0)+", "+C.i.a9(J.ag(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
J:function(){return this.v("")}}
F.aR.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.a9(J.ag(u.e),0)+", "+C.i.a9(J.ag(this.b.e),0)},
J:function(){return this.v("")}}
F.bb.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.a9(J.ag(u.e),0)},
J:function(){return this.v("")}}
F.dq.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
ji:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.Y()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){q=u[r]
this.a.h(0,q.iP())}this.a.Y()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bb()
if(m.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.C(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aR()
n=k.a
if(n==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.C(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.Y()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cS(k,j,h)}u=this.e
if(u!=null)u.ay()},
aJ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aJ()||!1
if(!this.a.aJ())t=!1
u=this.e
if(u!=null)u.ay()
return t},
iH:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aY()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aX().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.aZ().a)!==0)++r
if((s&$.b_().a)!==0)++r
if((s&$.cD().a)!==0)++r
if((s&$.cE().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.aV().a)!==0)++r
q=a1.gcJ(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cJ])
for(m=0,l=0;l<r;++l){k=a1.iC(l)
j=k.gcJ(k)
C.a.V(n,l,new Z.cJ(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].jg(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.V(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.al(t,34962,e)
C.b.dq(t,34962,new Float32Array(H.cy(o)),35044)
C.b.al(t,34962,null)
d=new Z.cK(new Z.dN(34962,e),n,a1)
d.sfw(H.b([],[Z.b9]))
if(this.b.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ik(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b9(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ik(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b9(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.Y()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.Y()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.Y()
C.a.h(c,b.e)}a=Z.ik(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b9(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.v("   "))}return C.a.k(u,"\n")},
ae:function(a){var u=this.e
if(u!=null)u.C(a)},
a3:function(){return this.ae(null)},
$ilC:1}
F.fk.prototype={
iz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.aB],"$aa")
u=H.b([],[F.Y])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.k(c,r)
l=c[r];++r
if(r>=m)return H.k(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.k(c,j)
i=c[j]
if(s<0||s>=m)return H.k(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cS(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cS(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cS(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cS(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].ce())s=!1
return s},
cd:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cc())s=!1
return s},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
sfn:function(a){this.b=H.h(a,"$ia",[F.Y],"$aa")}}
F.fl.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].v(a+(""+s+". ")))}return C.a.k(u,"\n")},
J:function(){return this.v("")},
sfz:function(a){this.b=H.h(a,"$ia",[F.aR],"$aa")}}
F.fm.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
sc1:function(a){this.b=H.h(a,"$ia",[F.bb],"$aa")}}
F.aB.prototype={
cg:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ij(this.cx,s,p,u,t,r,q,a,o)},
iP:function(){return this.cg(null)},
sjL:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
jg:function(a){var u,t
if(a.t(0,$.aY())){u=this.f
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aX())){u=this.r
t=[P.w]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aW())){u=this.x
t=[P.w]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=this.y
t=[P.w]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b_())){u=this.z
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cD())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cE())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bM()))return H.b([this.ch],[P.w])
else if(a.t(0,$.aV())){u=this.cx
t=[P.w]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.w])},
ce:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dM()
this.d.a_(0,new F.h2(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ay()}return!0},
cc:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dM()
this.d.a_(0,new F.h1(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.ay()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
v:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.i.a9(J.ag(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.N(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
J:function(){return this.v("")}}
F.h2.prototype={
$1:function(a){var u,t
H.d(a,"$iY")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:7}
F.h1.prototype={
$1:function(a){var u,t
H.d(a,"$iY")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:7}
F.fW.prototype={
Y:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
gn:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].ce()
return!0},
cd:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cc()
return!0},
iI:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
this.Y()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
si9:function(a){this.c=H.h(a,"$ia",[F.aB],"$aa")}}
F.fX.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
a_:function(a,b){H.i(b,{func:1,ret:-1,args:[F.Y]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.fY(this,b))
C.a.a_(this.d,new F.fZ(this,b))},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
sfo:function(a){this.b=H.h(a,"$ia",[F.Y],"$aa")},
sfp:function(a){this.c=H.h(a,"$ia",[F.Y],"$aa")},
sfq:function(a){this.d=H.h(a,"$ia",[F.Y],"$aa")}}
F.fY.prototype={
$1:function(a){H.d(a,"$iY")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:7}
F.fZ.prototype={
$1:function(a){var u
H.d(a,"$iY")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:7}
F.h_.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
sfA:function(a){this.b=H.h(a,"$ia",[F.aR],"$aa")},
sfB:function(a){this.c=H.h(a,"$ia",[F.aR],"$aa")}}
F.h0.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.J()},
v:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].v(a))
return C.a.k(u,"\n")},
J:function(){return this.v("")},
sc1:function(a){this.b=H.h(a,"$ia",[F.bb],"$aa")}}
O.d8.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.J()
this.dy=u}return u},
X:function(a){var u
H.d(a,"$iu")
u=this.dy
if(u!=null)u.C(a)},
bI:function(){return this.X(null)},
da:function(a){H.d(a,"$iu")
this.a=null
this.X(a)},
hG:function(){return this.da(null)},
fO:function(a,b){var u=V.a7
u=new D.bs(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.X(u)},
fQ:function(a,b){var u=V.a7
u=new D.bt(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.X(u)},
cX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.Z(u.e.length+3,4)*4
s=C.h.Z(u.f.length+3,4)*4
r=C.h.Z(u.r.length+3,4)*4
q=C.h.Z(u.x.length+3,4)*4
p=C.h.Z(u.y.length+3,4)*4
o=C.h.Z(u.z.length+3,4)*4
n=C.h.Z(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.i(u.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+C.h.i(h.a)+C.h.i(g.a)+C.h.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aY()
if(a0){b=$.aX()
a7=new Z.aM(a7.a|b.a)}if(a1){b=$.aW()
a7=new Z.aM(a7.a|b.a)}if(a2){b=$.aZ()
a7=new Z.aM(a7.a|b.a)}if(a3){b=$.b_()
a7=new Z.aM(a7.a|b.a)}if(a5){b=$.aV()
a7=new Z.aM(a7.a|b.a)}return new A.eW(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
T:function(a,b){H.h(a,"$ia",[T.cd],"$aa")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ah(u,u.length,0,[H.v(u,0)]);u.w();){t=u.d
t.toString
s=$.fV
if(s==null){s=new V.O(0,0,1)
$.fV=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cD(s)}}},
jC:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cX()
t=a4.fr.l(0,u.ad)
if(t==null){t=A.ko(u,a4.a)
s=t.b
if(s.length===0)H.q(P.p("May not cache a shader with no name."))
if(a4.fr.dt(s))H.q(P.p('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.V(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bc
u=a5.e
if(!(u instanceof Z.cK)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aJ()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cd()
o.a.cd()
o=o.e
if(o!=null)o.ay()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.iI()
n=n.e
if(n!=null)n.ay()}l=a5.d.iH(new Z.h4(a4.a),q)
l.aL($.aY()).e=this.a.Q.c
if(u)l.aL($.aX()).e=this.a.cx.c
if(p)l.aL($.aW()).e=this.a.ch.c
if(r.rx)l.aL($.aZ()).e=this.a.cy.c
if(o)l.aL($.b_()).e=this.a.db.c
if(r.x1)l.aL($.aV()).e=this.a.dx.c
a5.e=l}u=T.cd
k=H.b([],[u])
p=this.a
o=a4.a
C.b.eg(o,p.r)
p.x.j4()
if(r.fx){p=this.a
n=a4.dx.gW()
p=p.dy
p.toString
p.ag(n.aa(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gW().u(0,a4.dx.gW())
a4.cx=n}p=p.fr
p.toString
p.ag(n.aa(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjz().u(0,a4.dx.gW())
a4.ch=n}p=p.fy
p.toString
p.ag(n.aa(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ag(C.r.aa(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ag(C.r.aa(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ag(C.r.aa(n,!0))}if(r.an>0){j=this.e.a.length
p=this.a.k4
C.b.N(p.a,p.d,j)
for(p=[P.w],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.k(m,i)
m=m[i]
n.toString
H.d(m,"$ia7")
n=n.r1
if(i>=n.length)return H.k(n,i)
n=n[i]
h=new Float32Array(H.cy(H.h(m.aa(0,!0),"$ia",p,"$aa")))
C.b.ef(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.T(k,this.f.d)
p=this.a
n=this.f.d
p.ac(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.T(k,this.f.e)
p=this.a
n=this.f.e
p.a6(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.f:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.T(k,this.r.d)
p=this.a
n=this.r.d
p.ac(p.y1,p.an,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.T(k,this.r.e)
p=this.a
n=this.r.e
p.a6(p.y2,p.an,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.f:p=this.a
n=this.x.f
p=p.ad
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.T(k,this.x.d)
p=this.a
n=this.x.d
p.ac(p.bc,p.bd,n)
n=this.a
p=this.x.f
n=n.ad
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.T(k,this.x.e)
p=this.a
n=this.x.e
p.a6(p.dA,p.bd,n)
n=this.a
p=this.x.f
n=n.ad
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.be
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
break
case C.e:this.T(k,this.y.d)
p=this.a
n=this.y.d
p.ac(p.dB,p.bf,n)
n=this.a
p=this.y.f
n=n.be
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break
case C.d:this.T(k,this.y.e)
p=this.a
n=this.y.e
p.a6(p.dC,p.bf,n)
n=this.a
p=this.y.f
n=n.be
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.bg
p.toString
m=n.a
g=n.b
n=n.c
C.b.p(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bi
C.b.L(n.a,n.d,g)
break
case C.e:this.T(k,this.z.d)
p=this.a
n=this.z.d
p.ac(p.dD,p.bh,n)
n=this.a
p=this.z.f
n=n.bg
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bi
C.b.L(p.a,p.d,g)
break
case C.d:this.T(k,this.z.e)
p=this.a
n=this.z.e
p.a6(p.dE,p.bh,n)
n=this.a
p=this.z.f
n=n.bg
n.toString
m=p.a
g=p.b
p=p.c
C.b.p(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bi
C.b.L(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dP
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
m=this.a.cl
if(e>=m.length)return H.k(m,e)
b=m[e]
m=f.cD(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.B(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.p(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.p(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dQ
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
m=this.a.cm
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb_(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b1(c.gb_(c))
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gam(c)
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gc7()
g=b.e
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.r
C.b.L(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dR
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
m=this.a.cn
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb_(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c).jX()
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b1(c.gb_(c))
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gam(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjW()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gjV()
g=b.r
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.x
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.y
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.z
C.b.L(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dS
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
g=this.a.co
if(e>=g.length)return H.k(g,e)
b=g[e]
g=c.gb0()
H.h(k,"$ia",m,"$aa")
if(!C.a.S(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcj(c)
a=b.d
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gbz()
a=b.b
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=c.gbw(c)
a=b.c
C.b.p(a.a,a.d,g.a,g.b,g.c)
g=f.cD(c.gcj(c))
a=g.a
a0=g.b
a1=g.c
a1=g.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.p(a0.a,a0.d,a,g,a1)
a1=c.gam(c)
g=b.f
C.b.p(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb0()
g=a1.gbu(a1)
if(!g){g=b.x
C.b.N(g.a,g.d,1)}else{g=b.r
a=a1.gbu(a1)
a0=g.a
g=g.d
if(!a)C.b.N(a0,g,0)
else C.b.N(a0,g,a1.gjb(a1))
g=b.x
C.b.N(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dT
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.y,n=p.length,m=[P.w],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
a=this.a.cp
if(e>=a.length)return H.k(a,e)
b=a[e]
a=c.gb0()
H.h(k,"$ia",g,"$aa")
if(!C.a.S(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.u(0,c.gW())
a=c.gW()
a0=$.c5
if(a0==null){a0=new V.ay(0,0,0)
$.c5=a0}a0=a.b1(a0)
a=b.b
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c5
if(a==null){a=new V.ay(0,0,0)
$.c5=a}a=a2.b1(a)
a0=b.c
C.b.p(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dW()
a0=b.d
h=new Float32Array(H.cy(H.h(new V.d9(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).aa(0,!0),"$ia",m,"$aa")))
C.b.ee(a0.a,a0.d,!1,h)
a0=c.gam(c)
a=b.e
C.b.p(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb0()
a=a0.gbu(a0)
if(!a){a=b.r
C.b.N(a.a,a.d,1)}else{a=b.f
a1=a0.d
a3=a.a
a=a.d
if(a1<6)C.b.N(a3,a,0)
else C.b.N(a3,a,a0.a)
a=b.r
C.b.N(a.a,a.d,0)}a=c.gc7()
a0=b.x
C.b.L(a0.a,a0.d,a)
a=c.gc8()
a0=b.y
C.b.L(a0.a,a0.d,a)
a=c.gc9()
a0=b.z
C.b.L(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dU
C.b.N(p.a,p.d,j)
f=a4.db.gW()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.x)(p),++d){c=p[d]
m=this.a.cq
if(e>=m.length)return H.k(m,e)
b=m[e]
m=c.gb0()
H.h(k,"$ia",u,"$aa")
if(!C.a.S(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gb_(c)
g=b.b
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c)
g=b.c
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbz()
g=b.d
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c)
g=b.e
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=f.b1(c.gb_(c))
g=b.f
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gb0()
g=m.gbu(m)
if(!g){m=b.x
C.b.N(m.a,m.d,1)}else{g=b.r
a=m.gbu(m)
a0=g.a
g=g.d
if(!a)C.b.N(a0,g,0)
else C.b.N(a0,g,m.gjb(m))
m=b.x
C.b.N(m.a,m.d,0)}m=c.gam(c)
g=b.y
C.b.p(g.a,g.d,m.a,m.b,m.c)
m=c.gjY()
g=b.z
C.b.L(g.a,g.d,m)
m=c.gjZ()
g=b.Q
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.ch
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.cx
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.cy
C.b.L(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.e:this.T(k,this.Q.d)
u=this.a
p=this.Q.d
u.ac(u.dF,u.bj,p)
break
case C.d:this.T(k,this.Q.e)
u=this.a
p=this.Q.e
u.a6(u.dG,u.bj,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gW().dW()
a4.Q=p}u=u.id
u.toString
u.ag(p.aa(0,!0))}if(r.dy){this.T(k,this.ch)
u=this.a
p=this.ch
u.a6(u.dH,u.dI,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.bk
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
break
case C.e:this.T(k,this.cx.d)
u=this.a
p=this.cx.d
u.ac(u.dJ,u.bl,p)
p=this.a
u=this.cx.f
p=p.bk
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break
case C.d:this.T(k,this.cx.e)
u=this.a
p=this.cx.e
u.a6(u.dK,u.bl,p)
p=this.a
u=this.cx.f
p=p.bk
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.bn
u.toString
n=p.a
m=p.b
p=p.c
C.b.p(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bm
C.b.L(p.a,p.d,m)
break
case C.e:this.T(k,this.cy.d)
u=this.a
p=this.cy.d
u.ac(u.dL,u.bo,p)
p=this.a
u=this.cy.f
p=p.bn
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bm
C.b.L(u.a,u.d,m)
break
case C.d:this.T(k,this.cy.e)
u=this.a
p=this.cy.e
u.a6(u.dM,u.bo,p)
p=this.a
u=this.cy.f
p=p.bn
p.toString
n=u.a
m=u.b
u=u.c
C.b.p(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bm
C.b.L(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.bp
C.b.L(u.a,u.d,n)
break
case C.e:this.T(k,this.db.d)
u=this.a
n=this.db.d
u.ac(u.dN,u.bq,n)
n=this.a
u=this.db.f
n=n.bp
C.b.L(n.a,n.d,u)
break
case C.d:this.T(k,this.db.e)
u=this.a
n=this.db.e
u.a6(u.dO,u.bq,n)
n=this.a
u=this.db.f
n=n.bp
C.b.L(n.a,n.d,u)
break}C.b.ck(o,3042)
C.b.iG(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d>=6){u.c=!0
C.b.dh(o,33984+u.a)
C.b.aI(o,34067,u.b)}}u=a5.e
u.ca(a4)
u.aM(a4)
u.jR(a4)
if(p)C.b.j_(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dh(o,33984+u.a)
C.b.aI(o,34067,null)}}u=this.a
u.toString
C.b.eg(o,null)
u.x.j0()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cX().ad},
sfb:function(a){this.e=H.h(a,"$iV",[V.a7],"$aV")}}
O.eU.prototype={}
O.c0.prototype={
X:function(a){this.a.X(H.d(a,"$iu"))},
bI:function(){return this.X(null)},
at:function(){},
hM:function(a){},
hN:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gq().U(0,this.gb6())
t=this.e
this.e=a
if(a!=null)a.gq().h(0,this.gb6())
u=new D.F(this.b+".textureCube",t,this.e,this,[T.dx])
u.b=!0
this.a.X(u)}}}
O.eV.prototype={}
O.aH.prototype={
dd:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.F(this.b+".color",u,a,this,[V.X])
t.b=!0
this.a.X(t)}},
at:function(){this.eG()
this.dd(new V.X(1,1,1))},
sam:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.at()
u=this.a
u.a=null
u.X(null)}this.dd(b)}}
O.eX.prototype={
hL:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.F(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.X(u)}},
at:function(){this.bG()
this.hL(1)}}
O.eY.prototype={
c4:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.F(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.X(u)}},
at:function(){this.bG()
this.c4(100)}}
O.bC.prototype={}
T.cd.prototype={}
T.dx.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u}}
T.fy.prototype={
aE:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.j
W.Z(u,"load",H.i(new T.fz(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
hH:function(a,b,c){var u,t,s,r
b=V.iB(b,2)
u=V.iB(a.width,2)
t=V.iB(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.i5(null,null)
s.width=u
s.height=t
r=H.d(C.o.em(s,"2d"),"$ibk")
r.imageSmoothingEnabled=!1;(r&&C.y).j2(r,a,0,0,s.width,s.height)
return P.l5(C.y.fv(r,0,0,s.width,s.height))}}}
T.fz.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.hH(this.b,u.c,this.c)
s=u.a
C.b.aI(s,34067,this.d)
C.b.jy(s,37440,this.e?1:0)
C.b.jJ(s,this.f,0,6408,6408,5121,t)
C.b.aI(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.j3()}++u.e},
$S:11}
V.aP.prototype={
aw:function(a){return!0},
i:function(a){return"all"},
$iaj:1}
V.aj.prototype={}
V.d7.prototype={
aw:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aw(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa0:function(a){this.a=H.h(a,"$ia",[V.aj],"$aa")},
$iaj:1}
V.ad.prototype={
aw:function(a){return!this.eF(a)},
i:function(a){return"!["+this.cK(0)+"]"}}
V.fb.prototype={
aw:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.ie(this.a)
t=H.ie(this.b)
return u+".."+t},
$iaj:1}
V.fj.prototype={
eL:function(a){var u,t
if(a.a.length<=0)throw H.f(P.p("May not create a SetMatcher with zero characters."))
u=new H.aF([P.y,P.G])
for(t=new H.c_(a,a.gn(a),0,[H.a3(a,"S",0)]);t.w();)u.V(0,t.d,!0)
this.shK(u)},
aw:function(a){return this.a.dt(a)},
i:function(a){var u=this.a
return P.ig(new H.d3(u,[H.v(u,0)]),0,null)},
shK:function(a){this.a=H.h(a,"$iap",[P.y,P.G],"$aap")},
$iaj:1}
V.c9.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cf(this.a.j(0,b))
r.sa0(H.b([],[V.aj]))
r.c=!1
C.a.h(this.c,r)
return r},
j5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aw(a))return r}return},
i:function(a){return this.b},
si4:function(a){this.c=H.h(a,"$ia",[V.cf],"$aa")}}
V.dC.prototype={
i:function(a){var u,t
u=H.iD(this.b,"\n","\\n")
t=H.iD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ce.prototype={
ax:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.V(0,s,b)}},
i:function(a){return this.b},
shD:function(a){var u=P.m
this.c=H.h(a,"$iap",[u,u],"$aap")}}
V.fB.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.c9(this,b)
u.si4(H.b([],[V.cf]))
u.d=null
this.a.V(0,b,u)}return u},
K:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.ce(this,a)
t=P.m
u.shD(new H.aF([t,t]))
this.b.V(0,a,u)}return u},
ed:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dC])
t=this.c
s=[P.y]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aC(a,o)
m=t.j5(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ig(r,0,null)
throw H.f(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ig(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dC(j==null?k.b:j,l,o)}++o}}},
shU:function(a){this.a=H.h(a,"$iap",[P.m,V.c9],"$aap")},
shY:function(a){this.b=H.h(a,"$iap",[P.m,V.ce],"$aap")}}
V.cf.prototype={
i:function(a){return this.b.b+": "+this.cK(0)}}
X.cM.prototype={$iaT:1}
X.ez.prototype={
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u}}
X.di.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
aB:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
f4:function(){return this.aB(null)},
saX:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gq().U(0,this.gcO())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gcO())
u=new D.F("mover",t,this.b,this,[U.a1])
u.b=!0
this.aB(u)}},
$iaT:1,
$icM:1}
X.dv.prototype={}
V.b2.prototype={
b5:function(a){this.b=new P.eC(C.M)
this.c=null
this.sbR(H.b([],[[P.a,W.ao]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ao]))
t=a.split("\n")
for(u=t.length,s=[W.ao],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fg(p,0,p.length)
m=n==null?p:n
C.k.ew(o,H.iD(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbs(this.d),o)}},
e4:function(a){var u,t,s,r
H.h(a,"$ia",[P.m],"$aa")
this.sbR(H.b([],[[P.a,W.ao]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.bb()
this.c=t}for(t=t.ed(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)this.bv(t[r])},
sbR:function(a){this.d=H.h(a,"$ia",[[P.a,W.ao]],"$aa")}}
V.i_.prototype={
$1:function(a){H.d(a,"$iaJ")
P.iC(C.j.ec(this.a.gj9(),2)+" fps")},
$S:37}
V.ej.prototype={
bv:function(a){switch(a.a){case"Class":this.I(a.b,"#551")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break
case"Type":this.I(a.b,"#B11")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bb:function(){var u,t,s,r
u=V.fC()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aP())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.r(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aP())
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ad()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.ad()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.K("Num")
s=u.j(0,"Float")
s.d=s.a.K("Num")
s=u.j(0,"Sym")
s.d=s.a.K("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.K("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.K("String")
s=u.j(0,"EndComment")
s.d=s.a.K("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.K("Whitespace")
s=u.j(0,"Id")
t=s.a.K("Id")
s.d=t
s=[P.m]
t.ax(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ax(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ax(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eA.prototype={
bv:function(a){switch(a.a){case"Builtin":this.I(a.b,"#411")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Preprocess":this.I(a.b,"#737")
break
case"Reserved":this.I(a.b,"#119")
break
case"Symbol":this.I(a.b,"#611")
break
case"Type":this.I(a.b,"#171")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bb:function(){var u,t,s,r
u=V.fC()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aP())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ad()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.r(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.ad()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.K("Num")
t=u.j(0,"Float")
t.d=t.a.K("Num")
t=u.j(0,"Sym")
t.d=t.a.K("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.K("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.K("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.K("Whitespace")
t=u.j(0,"Id")
s=t.a.K("Id")
t.d=s
t=[P.m]
s.ax(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ax(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ax(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eB.prototype={
bv:function(a){switch(a.a){case"Attr":this.I(a.b,"#911")
this.I("=","#111")
break
case"Id":this.I(a.b,"#111")
break
case"Other":this.I(a.b,"#111")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break}},
bb:function(){var u,t,s
u=V.fC()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.r(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.r(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.r(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.r(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aP())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aP())
t=u.j(0,"Other").k(0,"Other")
s=new V.ad()
s.sa0(H.b([],[V.aj]))
C.a.h(t.a,s)
t=V.r(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.K("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.K("String")
t=u.j(0,"Id")
s=t.a.K("Id")
t.d=s
s.ax(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.j(0,"Attr")
s.d=s.a.K("Attr")
s=u.j(0,"Other")
s.d=s.a.K("Other")
return u}}
V.f8.prototype={
e4:function(a){H.h(a,"$ia",[P.m],"$aa")
this.sbR(H.b([],[[P.a,W.ao]]))
this.I(C.a.k(a,"\n"),"#111")},
bv:function(a){},
bb:function(){return}}
V.fn.prototype={
eN:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).A(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.A(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.A(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.A(q,p)}o=u.createElement("div")
this.a=o
C.k.A(q,o)
this.b=null
o=W.j
W.Z(u,"scroll",H.i(new V.fp(s),{func:1,ret:-1,args:[o]}),!1,o)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.m],"$aa")
this.hP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ed(C.a.je(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.A(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.A(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.A(t,o)
break
case"Link":n=p.b
if(H.lq(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.A(t,l)}else{k=P.jp(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.A(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.A(t,o)
break}}C.k.A(this.a,t)},
el:function(a){var u,t,s,r
u=new V.ej("dart")
u.b5("dart")
t=new V.eA("glsl")
t.b5("glsl")
s=new V.eB("html")
s.b5("html")
r=C.a.j6(H.b([u,t,s],[V.b2]),new V.fq(a))
if(r!=null)return r
u=new V.f8("plain")
u.b5("plain")
return u},
di:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iy(r).bE(r,"+")){C.a.V(a7,s,C.i.b3(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bE(r,"-")){C.a.V(a7,s,C.i.b3(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.el(a5)
q.e4(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.A(o,n)
C.k.A(this.a,o)
m=P.jp(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iJ(null)
i.href="#"+m
i.textContent=a4
C.k.A(j,i)
C.v.A(k,j)
C.m.A(l,k)
C.p.A(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.k(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.v.A(a,r[a0])
C.m.A(e,d)
C.m.A(e,c)
C.m.A(e,a)
C.p.A(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gP(r);a3.w();)C.v.A(c,a3.gE())
C.m.A(e,d)
C.m.A(e,c)
C.p.A(n,e)}},
hP:function(){var u,t,s,r
if(this.b!=null)return
u=V.fC()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.ad()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.ad()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.ad()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.ad()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.ad()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aP())
s=u.j(0,"Other").k(0,"Other")
t=new V.ad()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.K("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.K("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.K("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.K("Link")
s=u.j(0,"Other")
s.d=s.a.K("Other")
this.b=u}}
V.fp.prototype={
$1:function(a){P.jc(C.q,new V.fo(this.a))},
$S:11}
V.fo.prototype={
$0:function(){var u,t,s
u=C.j.af(document.documentElement.scrollTop)
t=this.a.style
s=H.e(-0.01*u)+"px"
t.top=s},
$S:2}
V.fq.prototype={
$1:function(a){return H.d(a,"$ib2").a===this.a},
$S:38}
B.hX.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iu")
u=this.a
t=this.b
s=t.a
r=[P.m]
u.di("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.di("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a_.prototype
u.eC=u.i
u=J.d0.prototype
u.eE=u.i
u=P.l.prototype
u.eD=u.bA
u=W.L.prototype
u.bF=u.a7
u=W.dZ.prototype
u.eH=u.ak
u=O.c0.prototype
u.eG=u.at
u=O.aH.prototype
u.bG=u.at
u=V.d7.prototype
u.eF=u.aw
u.cK=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"l_","kI",10)
u(P,"l0","kJ",10)
u(P,"l1","kK",10)
t(P,"jy","kZ",3)
s(W,"la",4,null,["$4"],["kM"],21,0)
s(W,"lb",4,null,["$4"],["kN"],21,0)
var m
r(m=E.ac.prototype,"ge2",0,0,null,["$1","$0"],["e3","jp"],0,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","jo"],0,0)
r(m,"gdZ",0,0,null,["$1","$0"],["e_","jl"],0,0)
q(m,"gjj","jk",6)
q(m,"gjm","jn",6)
r(m=E.dB.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
p(m,"gjD","e8",3)
o(m=X.dI.prototype,"gh2","h3",9)
o(m,"gfR","fS",9)
o(m,"gfX","fY",4)
o(m,"gh6","h7",23)
o(m,"gh4","h5",23)
o(m,"gha","hb",4)
o(m,"ghe","hf",4)
o(m,"gh0","h1",4)
o(m,"ghc","hd",4)
o(m,"gfZ","h_",4)
o(m,"ghg","hh",34)
o(m,"ghi","hj",9)
o(m,"ghv","hw",8)
o(m,"ghr","hs",8)
o(m,"ght","hu",8)
r(D.b4.prototype,"geS",0,0,null,["$1","$0"],["ap","eT"],0,0)
r(m=D.d2.prototype,"gd5",0,0,null,["$1","$0"],["d6","h8"],0,0)
o(m,"ghl","hm",28)
q(m,"gfL","fM",20)
q(m,"ghp","hq",20)
n(V.M.prototype,"gn","ct",17)
n(V.O.prototype,"gn","ct",17)
r(m=U.bY.prototype,"gaF",0,0,null,["$1","$0"],["M","a1"],0,0)
q(m,"gfJ","fK",13)
q(m,"ghn","ho",13)
r(m=U.dJ.prototype,"gaF",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
r(m=U.dK.prototype,"gaF",0,0,null,["$1","$0"],["M","a1"],0,0)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gbY","bZ",1)
o(m,"gfD","fE",1)
o(m,"gfF","fG",1)
o(m,"gi2","i3",1)
o(m,"gi0","i1",1)
o(m,"ghZ","i_",1)
o(U.dL.prototype,"gfH","fI",1)
r(m=M.cR.prototype,"gah",0,0,null,["$1","$0"],["aq","eV"],0,0)
q(m,"gfT","fU",6)
q(m,"gfV","fW",6)
r(m=O.d8.prototype,"gb6",0,0,null,["$1","$0"],["X","bI"],0,0)
r(m,"ghF",0,0,null,["$1","$0"],["da","hG"],0,0)
q(m,"gfN","fO",22)
q(m,"gfP","fQ",22)
r(O.c0.prototype,"gb6",0,0,null,["$1","$0"],["X","bI"],0,0)
r(X.di.prototype,"gcO",0,0,null,["$1","$0"],["aB","f4"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.ic,J.a_,J.ah,P.dV,P.l,H.c_,P.aD,H.bp,H.dH,H.fc,H.fF,P.b6,H.bR,H.e_,P.bw,H.eK,H.eL,H.eH,P.e0,P.aO,P.au,P.dO,P.fs,P.cb,P.ft,P.aJ,P.a6,P.hI,P.hy,P.bD,P.dU,P.S,P.bS,P.eD,P.hG,P.G,P.ab,P.a5,P.b5,P.f6,P.ds,P.dR,P.ey,P.b7,P.a,P.D,P.ae,P.m,P.aU,W.eh,W.be,W.ai,W.dg,W.dZ,W.hB,W.cT,W.al,W.hx,W.e4,P.e3,P.hs,O.V,O.c1,E.eb,E.ac,E.fd,E.dB,Z.dN,Z.h4,Z.cK,Z.b9,Z.aM,D.ee,D.bn,D.u,X.cL,X.d1,X.eJ,X.eN,X.ak,X.eZ,X.fD,X.dI,D.b4,D.W,D.dj,D.dr,D.dy,D.dz,D.dA,V.X,V.bl,V.eq,V.d9,V.a7,V.a2,V.ay,V.dk,V.dn,V.M,V.O,U.dJ,U.dK,U.dL,M.cR,A.cH,A.ea,A.eW,A.cg,A.ck,A.ci,A.cl,A.cj,A.cm,A.bm,A.dE,A.fO,F.Y,F.aR,F.bb,F.dq,F.fk,F.fl,F.fm,F.aB,F.fW,F.fX,F.h_,F.h0,O.bC,O.c0,T.fy,V.aP,V.aj,V.d7,V.fb,V.fj,V.c9,V.dC,V.ce,V.fB,X.cM,X.dv,X.di,V.b2,V.fn])
s(J.a_,[J.eG,J.cZ,J.d0,J.aE,J.d_,J.bu,H.de,W.bo,W.bk,W.dP,W.ek,W.cP,W.cQ,W.j,W.dS,W.b8,W.d5,W.dX,W.dm,W.aK,W.e1,W.e5,P.cI,P.cU,P.dl,P.bA,P.dp,P.dw,P.dF])
s(J.d0,[J.f7,J.cn,J.ba])
t(J.ib,J.aE)
s(J.d_,[J.cY,J.cX])
t(P.eM,P.dV)
s(P.eM,[H.dG,W.hb,W.aa,P.eu])
t(H.o,H.dG)
s(P.l,[H.en,H.eQ,H.co])
s(H.en,[H.bv,H.d3])
s(P.aD,[H.eR,H.h5])
t(H.eS,H.bv)
s(P.b6,[H.f5,H.eI,H.fR,H.fH,H.ed,H.fh,P.dh,P.aw,P.fS,P.fQ,P.ca,P.eg,P.ei])
s(H.bR,[H.i0,H.fx,H.hS,H.hT,H.hU,P.h7,P.h6,P.h8,P.h9,P.hF,P.hE,P.hg,P.hk,P.hh,P.hi,P.hj,P.hn,P.ho,P.hm,P.hl,P.fu,P.fv,P.hM,P.hv,P.hu,P.hw,P.eP,P.el,P.em,W.eo,W.hf,W.f4,W.f3,W.hz,W.hA,W.hD,W.hH,P.hO,P.ev,P.ew,E.fe,E.ff,E.fg,E.fA,D.es,D.et,F.hJ,F.h2,F.h1,F.fY,F.fZ,T.fz,V.i_,V.fp,V.fo,V.fq,B.hX])
s(H.fx,[H.fr,H.bP])
t(P.eO,P.bw)
s(P.eO,[H.aF,W.ha])
t(H.db,H.de)
s(H.db,[H.cs,H.cu])
t(H.ct,H.cs)
t(H.dc,H.ct)
t(H.cv,H.cu)
t(H.dd,H.cv)
s(H.dd,[H.f_,H.f0,H.f1,H.df,H.f2])
t(P.ht,P.hI)
t(P.hr,P.hy)
t(P.bT,P.ft)
t(P.ep,P.bS)
s(P.bT,[P.eC,P.fU])
t(P.fT,P.ep)
s(P.a5,[P.w,P.y])
s(P.aw,[P.bz,P.eE])
s(W.bo,[W.z,W.cp])
s(W.z,[W.L,W.b1,W.bV,W.cq])
s(W.L,[W.t,P.n])
s(W.t,[W.cG,W.e9,W.bO,W.b0,W.bj,W.ao,W.ex,W.cV,W.bZ,W.c2,W.fi,W.bB,W.dt,W.du,W.fw,W.cc])
t(W.bU,W.dP)
t(W.dT,W.dS)
t(W.bq,W.dT)
t(W.cW,W.bV)
t(W.bd,W.j)
s(W.bd,[W.aG,W.a0,W.az])
t(W.dY,W.dX)
t(W.c4,W.dY)
t(W.e2,W.e1)
t(W.fE,W.e2)
t(W.h3,W.c2)
t(W.aN,W.a0)
t(W.dQ,W.cQ)
t(W.e6,W.e5)
t(W.dW,W.e6)
t(W.hc,W.ha)
t(W.hd,P.fs)
t(W.il,W.hd)
t(W.he,P.cb)
t(W.hC,W.dZ)
t(P.ar,P.hs)
t(P.c7,P.n)
s(E.eb,[Z.cJ,A.c8,T.cd])
s(D.u,[D.bs,D.bt,D.F,X.f9])
s(X.f9,[X.d6,X.aS,X.c3,X.dD])
s(O.V,[D.d2,U.bY])
s(D.ee,[U.ef,U.a1])
t(U.cN,U.a1)
t(A.eT,A.c8)
s(A.dE,[A.E,A.fK,A.fL,A.fN,A.fI,A.T,A.fJ,A.C,A.fM,A.fP,A.ch,A.am,A.a8,A.a9])
t(O.d8,O.bC)
s(O.c0,[O.eU,O.eV,O.aH])
s(O.aH,[O.eX,O.eY])
t(T.dx,T.cd)
s(V.d7,[V.ad,V.cf])
t(X.ez,X.dv)
s(V.b2,[V.ej,V.eA,V.eB,V.f8])
u(H.dG,H.dH)
u(H.cs,P.S)
u(H.ct,H.bp)
u(H.cu,P.S)
u(H.cv,H.bp)
u(P.dV,P.S)
u(W.dP,W.eh)
u(W.dS,P.S)
u(W.dT,W.ai)
u(W.dX,P.S)
u(W.dY,W.ai)
u(W.e1,P.S)
u(W.e2,W.ai)
u(W.e5,P.S)
u(W.e6,W.ai)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b0.prototype
C.o=W.bj.prototype
C.y=W.bk.prototype
C.k=W.ao.prototype
C.J=W.cP.prototype
C.L=W.cV.prototype
C.z=W.cW.prototype
C.N=J.a_.prototype
C.a=J.aE.prototype
C.O=J.cX.prototype
C.h=J.cY.prototype
C.r=J.cZ.prototype
C.j=J.d_.prototype
C.i=J.bu.prototype
C.V=J.ba.prototype
C.Z=W.c4.prototype
C.D=J.f7.prototype
C.E=W.dm.prototype
C.b=P.bA.prototype
C.v=W.bB.prototype
C.p=W.dt.prototype
C.m=W.du.prototype
C.w=J.cn.prototype
C.F=W.aN.prototype
C.G=W.cp.prototype
C.H=new P.f6()
C.I=new P.fU()
C.l=new P.ht()
C.c=new A.bm(0,"ColorSourceType.None")
C.f=new A.bm(1,"ColorSourceType.Solid")
C.e=new A.bm(2,"ColorSourceType.Texture2D")
C.d=new A.bm(3,"ColorSourceType.TextureCube")
C.q=new P.b5(0)
C.K=new P.b5(5e6)
C.M=new P.eD("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.A=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.S=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.T=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.U=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.X=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Y=H.b(u([]),[P.m])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.fT(!1)})();(function staticFields(){$.aC=0
$.bQ=null
$.iK=null
$.io=!1
$.jB=null
$.jw=null
$.jG=null
$.hP=null
$.hV=null
$.iz=null
$.bE=null
$.cz=null
$.cA=null
$.ip=!1
$.Q=C.l
$.aQ=null
$.i8=null
$.iR=null
$.iQ=null
$.iX=null
$.j0=null
$.c5=null
$.j6=null
$.jg=null
$.jj=null
$.ji=null
$.fV=null
$.jh=null
$.j_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ly","jJ",function(){return H.jA("_$dart_dartClosure")})
u($,"lz","iE",function(){return H.jA("_$dart_js")})
u($,"lE","jK",function(){return H.aL(H.fG({
toString:function(){return"$receiver$"}}))})
u($,"lF","jL",function(){return H.aL(H.fG({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lG","jM",function(){return H.aL(H.fG(null))})
u($,"lH","jN",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lK","jQ",function(){return H.aL(H.fG(void 0))})
u($,"lL","jR",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lJ","jP",function(){return H.aL(H.je(null))})
u($,"lI","jO",function(){return H.aL(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lN","jT",function(){return H.aL(H.je(void 0))})
u($,"lM","jS",function(){return H.aL(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"m3","iF",function(){return P.kH()})
u($,"m7","cF",function(){return[]})
u($,"m6","jY",function(){return P.kz("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"m4","jX",function(){return P.iU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"m5","iG",function(){return P.kk(P.m,P.b7)})
u($,"lX","jW",function(){return Z.at(0)})
u($,"lR","jU",function(){return Z.at(511)})
u($,"lZ","aY",function(){return Z.at(1)})
u($,"lY","aX",function(){return Z.at(2)})
u($,"lT","aW",function(){return Z.at(4)})
u($,"m_","aZ",function(){return Z.at(8)})
u($,"m0","b_",function(){return Z.at(16)})
u($,"lU","cD",function(){return Z.at(32)})
u($,"lV","cE",function(){return Z.at(64)})
u($,"lW","jV",function(){return Z.at(96)})
u($,"m1","bM",function(){return Z.at(128)})
u($,"lS","aV",function(){return Z.at(256)})
u($,"lx","jI",function(){return new V.eq(1e-9)})
u($,"lw","I",function(){return $.jI()})})()
var v={mangledGlobalNames:{y:"int",w:"double",a5:"num",m:"String",G:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.a0]},{func:1,ret:P.D,args:[D.u]},{func:1,ret:-1,args:[P.y,[P.l,E.ac]]},{func:1,ret:P.D,args:[F.Y]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.j]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.y,[P.l,U.a1]]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.m,args:[P.y]},{func:1,ret:P.G,args:[W.z]},{func:1,ret:P.w},{func:1,ret:P.G,args:[W.al]},{func:1,args:[,]},{func:1,ret:-1,args:[P.y,[P.l,D.W]]},{func:1,ret:P.G,args:[W.L,P.m,P.m,W.be]},{func:1,ret:-1,args:[P.y,[P.l,V.a7]]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.G,args:[P.m]},{func:1,ret:W.L,args:[W.z]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:P.G,args:[[P.l,D.W]]},{func:1,ret:P.m,args:[P.m]},{func:1,args:[W.j]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[P.ae]},{func:1,ret:P.D,args:[F.aB,P.w,P.w]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[P.m]},{func:1,ret:P.D,args:[P.aJ]},{func:1,ret:P.G,args:[V.b2]},{func:1,args:[,P.m]},{func:1,ret:P.D,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a_,MediaError:J.a_,Navigator:J.a_,NavigatorConcurrentHardware:J.a_,NavigatorUserMediaError:J.a_,OverconstrainedError:J.a_,PositionError:J.a_,WebGLActiveInfo:J.a_,WebGLRenderbuffer:J.a_,WebGL2RenderingContext:J.a_,SQLError:J.a_,ArrayBufferView:H.de,Float32Array:H.dc,Int16Array:H.f_,Int32Array:H.f0,Uint32Array:H.f1,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.f2,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cG,HTMLAreaElement:W.e9,HTMLBaseElement:W.bO,HTMLBodyElement:W.b0,HTMLCanvasElement:W.bj,CanvasRenderingContext2D:W.bk,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSStyleDeclaration:W.bU,MSStyleCSSProperties:W.bU,CSS2Properties:W.bU,HTMLDivElement:W.ao,XMLDocument:W.bV,Document:W.bV,DOMException:W.ek,DOMImplementation:W.cP,DOMRectReadOnly:W.cQ,Element:W.L,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.bo,HTMLFormElement:W.ex,HTMLHeadElement:W.cV,HTMLCollection:W.bq,HTMLFormControlsCollection:W.bq,HTMLOptionsCollection:W.bq,HTMLDocument:W.cW,ImageData:W.b8,HTMLImageElement:W.bZ,KeyboardEvent:W.aG,Location:W.d5,HTMLAudioElement:W.c2,HTMLMediaElement:W.c2,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.c4,RadioNodeList:W.c4,Range:W.dm,HTMLSelectElement:W.fi,HTMLTableCellElement:W.bB,HTMLTableDataCellElement:W.bB,HTMLTableHeaderCellElement:W.bB,HTMLTableElement:W.dt,HTMLTableRowElement:W.du,HTMLTableSectionElement:W.fw,HTMLTemplateElement:W.cc,Touch:W.aK,TouchEvent:W.az,TouchList:W.fE,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,HTMLVideoElement:W.h3,WheelEvent:W.aN,Window:W.cp,DOMWindow:W.cp,Attr:W.cq,ClientRect:W.dQ,DOMRect:W.dQ,NamedNodeMap:W.dW,MozNamedAttrMap:W.dW,SVGScriptElement:P.c7,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.cI,WebGLFramebuffer:P.cU,WebGLProgram:P.dl,WebGLRenderingContext:P.bA,WebGLShader:P.dp,WebGLTexture:P.dw,WebGLUniformLocation:P.dF})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.jD,[])
else B.jD([])})})()
//# sourceMappingURL=test.dart.js.map

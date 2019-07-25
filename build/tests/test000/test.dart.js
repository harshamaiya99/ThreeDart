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
a[c]=function(){a[c]=function(){H.ok(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kA:function kA(){},
lb:function(){return new P.cV("No element")},
mU:function(){return new P.cV("Too many elements")},
a8:function a8(a){this.a=a},
fu:function fu(){},
c0:function c0(){},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
e1:function e1(){},
e0:function e0(){},
dl:function(a){var u,t=H.D(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
o1:function(a){return v.types[H.au(a)]},
o9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iG},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bi(a)
if(typeof u!=="string")throw H.i(H.dg(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nc:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.h(t,3)
u=H.D(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
cQ:function(a){return H.n4(a)+H.kN(H.bQ(a),0,null)},
n4:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.E||!!n.$id_){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.dl(t.length>1&&C.b.a3(t,0)===36?C.b.bw(t,1):t)},
lu:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ne:function(a){var u,t,s,r=H.b([],[P.B])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.an)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.dg(s))
if(s<=65535)C.a.i(r,s)
else if(s<=1114111){C.a.i(r,55296+(C.d.aM(s-65536,10)&1023))
C.a.i(r,56320+(s&1023))}else throw H.i(H.dg(s))}return H.lu(r)},
lv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.dg(s))
if(s<0)throw H.i(H.dg(s))
if(s>65535)return H.ne(a)}return H.lu(a)},
nd:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aM(u,10))>>>0,56320|u&1023)}throw H.i(P.aS(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nb:function(a){var u=H.ca(a).getFullYear()+0
return u},
n9:function(a){var u=H.ca(a).getMonth()+1
return u},
n5:function(a){var u=H.ca(a).getDate()+0
return u},
n6:function(a){var u=H.ca(a).getHours()+0
return u},
n8:function(a){var u=H.ca(a).getMinutes()+0
return u},
na:function(a){var u=H.ca(a).getSeconds()+0
return u},
n7:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
A:function(a){throw H.i(H.dg(a))},
h:function(a,b){if(a==null)J.dp(a)
throw H.i(H.di(a,b))},
di:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b_(!0,b,s,null)
u=H.au(J.dp(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.hm(b,s)},
nX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cb(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cb(a,c,!0,b,"end",u)
return new P.b_(!0,b,"end",null)},
dg:function(a){return new P.b_(!0,a,null,null)},
i:function(a){var u
if(a==null)a=new P.dO()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m9})
u.name=""}else u.toString=H.m9
return u},
m9:function(){return J.bi(this.dartException)},
cj:function(a){throw H.i(a)},
an:function(a){throw H.i(P.bW(a))},
bd:function(a){var u,t,s,r,q,p
a=H.m8(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lF:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lo:function(a,b){return new H.hf(a,b==null?null:b.method)},
kB:function(a,b){var u=b==null,t=u?null:b.method
return new H.fR(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kB(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lo(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mh()
q=$.mi()
p=$.mj()
o=$.mk()
n=$.mn()
m=$.mo()
l=$.mm()
$.ml()
k=$.mq()
j=$.mp()
i=r.Z(u)
if(i!=null)return f.$1(H.kB(H.D(u),i))
else{i=q.Z(u)
if(i!=null){i.method="call"
return f.$1(H.kB(H.D(u),i))}else{i=p.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=n.Z(u)
if(i==null){i=m.Z(u)
if(i==null){i=l.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=k.Z(u)
if(i==null){i=j.Z(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lo(H.D(u),i))}}return f.$1(new H.ic(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dU()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b_(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dU()
return a},
bR:function(a){var u
if(a==null)return new H.eB(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eB(a)},
o_:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.I(0,a[u],a[t])}return b},
o8:function(a,b,c,d,e,f){H.q(a,"$ibC")
switch(H.au(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.dA("Unsupported number of arguments for wrapped closure"))},
dh:function(a,b){var u
H.au(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o8)
a.$identity=u
return u},
mJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hI().constructor.prototype):Object.create(new H.cs(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b0
if(typeof t!=="number")return t.V()
$.b0=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.l4(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.o1,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.l3:H.kt
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l4(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mG:function(a,b,c,d){var u=H.kt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mG(t,!r,u,b)
if(t===0){r=$.b0
if(typeof r!=="number")return r.V()
$.b0=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ct
return new Function(r+H.d(q==null?$.ct=H.fd("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b0
if(typeof r!=="number")return r.V()
$.b0=r+1
o+=r
r="return function("+o+"){return this."
q=$.ct
return new Function(r+H.d(q==null?$.ct=H.fd("self"):q)+"."+H.d(u)+"("+o+");}")()},
mH:function(a,b,c,d){var u=H.kt,t=H.l3
switch(b?-1:a){case 0:throw H.i(H.ni("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mI:function(a,b){var u,t,s,r,q,p,o,n=$.ct
if(n==null)n=$.ct=H.fd("self")
u=$.l2
if(u==null)u=$.l2=H.fd("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.b0
if(typeof u!=="number")return u.V()
$.b0=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.b0
if(typeof u!=="number")return u.V()
$.b0=u+1
return new Function(n+u+"}")()},
kQ:function(a,b,c,d,e,f,g){return H.mJ(a,b,H.au(c),d,!!e,!!f,g)},
kt:function(a){return a.a},
l3:function(a){return a.c},
fd:function(a){var u,t,s,r=new H.cs("self","target","receiver","name"),q=J.kx(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.nQ("boolean expression must not be null")
return a},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aW(a,"String"))},
po:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aW(a,"double"))},
oe:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aW(a,"num"))},
nU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aW(a,"bool"))},
au:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aW(a,"int"))},
m6:function(a,b){throw H.i(H.aW(a,H.dl(H.D(b).substring(2))))},
q:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.m6(a,b)},
kV:function(a){if(a==null)return a
if(!!J.Z(a).$ic)return a
throw H.i(H.aW(a,"List<dynamic>"))},
oa:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ic)return a
if(u[b])return a
H.m6(a,b)},
lZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.au(u)]
else return a.$S()}return},
eY:function(a,b){var u
if(typeof a=="function")return!0
u=H.lZ(J.Z(a))
if(u==null)return!1
return H.lQ(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.kJ)return a
$.kJ=!0
try{if(H.eY(a,b))return a
u=H.dj(b)
t=H.aW(a,u)
throw H.i(t)}finally{$.kJ=!1}},
kR:function(a,b){if(a!=null&&!H.kP(a,b))H.cj(H.aW(a,H.dj(b)))
return a},
aW:function(a,b){return new H.e_("TypeError: "+P.fy(a)+": type '"+H.nE(a)+"' is not a subtype of type '"+b+"'")},
nE:function(a){var u,t=J.Z(a)
if(!!t.$icv){u=H.lZ(t)
if(u!=null)return H.dj(u)
return"Closure"}return H.cQ(a)},
nQ:function(a){throw H.i(new H.iq(a))},
ok:function(a){throw H.i(new P.fm(H.D(a)))},
ni:function(a){return new H.ht(a)},
m0:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
pp:function(a,b,c){return H.ci(a["$a"+H.d(c)],H.bQ(b))},
f0:function(a,b,c,d){var u
H.D(c)
H.au(d)
u=H.ci(a["$a"+H.d(c)],H.bQ(b))
return u==null?null:u[d]},
f_:function(a,b,c){var u
H.D(b)
H.au(c)
u=H.ci(a["$a"+H.d(b)],H.bQ(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.au(b)
u=H.bQ(a)
return u==null?null:u[b]},
dj:function(a){return H.bM(a,null)},
bM:function(a,b){var u,t
H.p(b,"$ic",[P.e],"$ac")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.dl(a[0].name)+H.kN(a,1,b)
if(typeof a=="function")return H.dl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.au(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.d(b[t])}if('func' in a)return H.ny(a,b)
if('futureOr' in a)return"FutureOr<"+H.bM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ny:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.p(a0,"$ic",b,"$ac")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.i(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.V(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bM(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bM(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bM(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bM(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nZ(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.D(b[h])
j=j+i+H.bM(e[d],a0)+(" "+H.d(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kN:function(a,b,c){var u,t,s,r,q,p
H.p(c,"$ic",[P.e],"$ac")
if(a==null)return""
u=new P.bH("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bM(p,c)}return"<"+u.h(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kO:function(a,b,c,d){var u,t
H.D(b)
H.kV(c)
H.D(d)
if(a==null)return!1
u=H.bQ(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.lX(H.ci(t[d],u),null,c,null)},
p:function(a,b,c,d){H.D(b)
H.kV(c)
H.D(d)
if(a==null)return a
if(H.kO(a,b,c,d))return a
throw H.i(H.aW(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.dl(b.substring(2))+H.kN(c,0,null),v.mangledGlobalNames)))},
nP:function(a,b,c,d,e){H.D(c)
H.D(d)
H.D(e)
if(!H.aD(a,null,b,null))H.ol("TypeError: "+H.d(c)+H.dj(a)+H.d(d)+H.dj(b)+H.d(e))},
ol:function(a){throw H.i(new H.e_(H.D(a)))},
lX:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
pm:function(a,b,c){return a.apply(b,H.ci(J.Z(b)["$a"+H.d(c)],H.bQ(b)))},
m2:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="S"||a===-1||a===-2||H.m2(u)}return!1},
kP:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="S"||b===-1||b===-2||H.m2(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eY(a,b)}u=J.Z(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kP(a,b))throw H.i(H.aW(a,H.dj(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="S")return!0
if('func' in c)return H.lQ(a,b,c,d)
if('func' in a)return c.name==="bC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.ci(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lX(H.ci(m,u),b,p,d)},
lQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.od(h,b,g,d)},
od:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
pn:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
ob:function(a){var u,t,s,r,q=H.D($.m1.$1(a)),p=$.ki[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.D($.lW.$2(a,q))
if(q!=null){p=$.ki[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ko(u)
$.ki[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kn[q]=u
return u}if(s==="-"){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m4(a,u)
if(s==="*")throw H.i(P.lG(q))
if(v.leafTags[q]===true){r=H.ko(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m4(a,u)},
m4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kW(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ko:function(a){return J.kW(a,!1,null,!!a.$iG)},
oc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ko(u)
else return J.kW(u,c,null,null)},
o5:function(){if(!0===$.kU)return
$.kU=!0
H.o6()},
o6:function(){var u,t,s,r,q,p,o,n
$.ki=Object.create(null)
$.kn=Object.create(null)
H.o4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m7.$1(q)
if(p!=null){o=H.oc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o4:function(){var u,t,s,r,q,p,o=C.t()
o=H.ch(C.u,H.ch(C.v,H.ch(C.m,H.ch(C.m,H.ch(C.w,H.ch(C.x,H.ch(C.y(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m1=new H.kk(r)
$.lW=new H.kl(q)
$.m7=new H.km(p)},
ch:function(a,b){return a(b)||b},
mX:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(P.la("Illegal RegExp pattern ("+String(r)+")",a))},
oh:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dk:function(a,b,c){var u=H.oi(a,b,c)
return u},
oi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m8(b),'g'),H.nY(c))},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hf:function hf(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a){this.a=a},
kp:function kp(a){this.a=a},
eB:function eB(a){this.a=a
this.b=null},
cv:function cv(){},
hU:function hU(){},
hI:function hI(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a){this.a=a},
ht:function ht(a){this.a=a},
iq:function iq(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dG:function dG(a,b){this.a=a
this.$ti=b},
fV:function fV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hR:function hR(a,b){this.a=a
this.c=b},
bL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.di(b,a))},
nx:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.nX(a,b,c))
return b},
cM:function cM(){},
dK:function dK(){},
cL:function cL(){},
dL:function dL(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
dM:function dM(){},
hc:function hc(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
nZ:function(a){return J.lc(a?Object.keys(a):[],null)},
of:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eZ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kU==null){H.o5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.lG("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kX()]
if(r!=null)return r
r=H.ob(a)
if(r!=null)return r
if(typeof a=="function")return C.G
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.kX(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
mV:function(a,b){if(a<0||a>4294967295)throw H.i(P.aS(a,0,4294967295,"length",null))
return J.lc(new Array(a),b)},
lc:function(a,b){return J.kx(H.b(a,[b]))},
kx:function(a){H.kV(a)
a.fixed$length=Array
return a},
ld:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mW:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.a3(a,b)
if(t!==32&&t!==13&&!J.ld(t))break;++b}return b},
ky:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.al(a,u)
if(t!==32&&t!==13&&!J.ld(t))break}return b},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dD.prototype
return J.dC.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.fP.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.O)return a
return J.eZ(a)},
o0:function(a){if(typeof a=="number")return J.cG.prototype
if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.O)return a
return J.eZ(a)},
kS:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.O)return a
return J.eZ(a)},
kj:function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.O)return a
return J.eZ(a)},
m_:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.d_.prototype
return a},
kT:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.O)return a
return J.eZ(a)},
mv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o0(a).V(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).m(a,b)},
mw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kS(a).q(a,b)},
mx:function(a,b,c,d){return J.kT(a).ej(a,b,c,d)},
my:function(a,b){return J.kj(a).B(a,b)},
mz:function(a,b){return J.kj(a).L(a,b)},
mA:function(a){return J.kT(a).gen(a)},
f3:function(a){return J.Z(a).gG(a)},
cq:function(a){return J.kj(a).gP(a)},
dp:function(a){return J.kS(a).gl(a)},
mB:function(a,b,c){return J.m_(a).eJ(a,b,c)},
l0:function(a){return J.kj(a).f1(a)},
mC:function(a){return J.m_(a).f8(a)},
bi:function(a){return J.Z(a).h(a)},
ks:function(a,b){return J.Z(a).ck(a,b)},
a:function a(){},
fO:function fO(){},
fP:function fP(){},
dE:function dE(){},
hj:function hj(){},
d_:function d_(){},
bm:function bm(){},
aI:function aI(a){this.$ti=a},
kz:function kz(a){this.$ti=a},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cG:function cG(){},
dD:function dD(){},
dC:function dC(){},
bD:function bD(){}},P={
no:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.dh(new P.is(s),1)).observe(u,{childList:true})
return new P.ir(s,u,t)}else if(self.setImmediate!=null)return P.nS()
return P.nT()},
np:function(a){self.scheduleImmediate(H.dh(new P.it(H.j(a,{func:1,ret:-1})),0))},
nq:function(a){self.setImmediate(H.dh(new P.iu(H.j(a,{func:1,ret:-1})),0))},
nr:function(a){P.kF(C.f,H.j(a,{func:1,ret:-1}))},
kF:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.d.W(a.a,1000)
return P.nv(u<0?0:u,b)},
nv:function(a,b){var u=new P.j2()
u.cL(a,b)
return u},
mQ:function(a,b){var u
H.j(a,{func:1,ret:{futureOr:1,type:b}})
u=new P.as($.X,[b])
P.dY(C.f,new P.fH(u,a))
return u},
ns:function(a,b){var u,t,s
b.a=1
try{a.ci(new P.iD(b),new P.iE(b),null)}catch(s){u=H.av(s)
t=H.bR(s)
P.og(new P.iF(b,u,t))}},
lM:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.q(a.c,"$ias")
if(u>=4){t=b.bd()
b.a=a.a
b.c=a.c
P.d3(b,t)}else{t=H.q(b.c,"$iaX")
b.a=2
b.c=a
a.bR(t)}},
d3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.q(g.c,"$ial")
g=g.b
r=s.a
q=s.b
g.toString
P.j7(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d3(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.q(o,"$ial")
g=g.b
r=o.a
q=o.b
g.toString
P.j7(i,i,g,r,q)
return}l=$.X
if(l!=n)$.X=n
else l=i
g=b.c
if(g===8)new P.iJ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iI(u,b,o).$0()}else if((g&2)!==0)new P.iH(h,u,b).$0()
if(l!=null)$.X=l
g=u.b
if(!!J.Z(g).$icD){if(g.a>=4){k=H.q(q.c,"$iaX")
q.c=null
b=q.aL(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lM(g,q)
return}}j=b.b
k=H.q(j.c,"$iaX")
j.c=null
b=j.aL(k)
g=u.a
r=u.b
if(!g){H.H(r,H.y(j,0))
j.a=4
j.c=r}else{H.q(r,"$ial")
j.a=8
j.c=r}h.a=j
g=j}},
lR:function(a,b){if(H.eY(a,{func:1,args:[P.O,P.ap]})){b.toString
return H.j(a,{func:1,ret:null,args:[P.O,P.ap]})}if(H.eY(a,{func:1,args:[P.O]})){b.toString
return H.j(a,{func:1,ret:null,args:[P.O]})}throw H.i(P.l1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nA:function(){var u,t
for(;u=$.cg,u!=null;){$.df=null
t=u.b
$.cg=t
if(t==null)$.de=null
u.a.$0()}},
nD:function(){$.kL=!0
try{P.nA()}finally{$.df=null
$.kL=!1
if($.cg!=null)$.l_().$1(P.lY())}},
lU:function(a){var u=new P.e4(H.j(a,{func:1,ret:-1}))
if($.cg==null){$.cg=$.de=u
if(!$.kL)$.l_().$1(P.lY())}else $.de=$.de.b=u},
nC:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.cg
if(u==null){P.lU(a)
$.df=$.de
return}t=new P.e4(a)
s=$.df
if(s==null){t.b=u
$.cg=$.df=t}else{t.b=s.b
$.df=s.b=t
if(t.b==null)$.de=t}},
og:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.X
if(C.e===u){P.j9(t,t,C.e,a)
return}u.toString
P.j9(t,t,u,H.j(u.bg(a),s))},
dY:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.X
if(u===C.e){u.toString
return P.kF(a,b)}return P.kF(a,H.j(u.bg(b),t))},
j7:function(a,b,c,d,e){var u={}
u.a=d
P.nC(new P.j8(u,e))},
lS:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
lT:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
nB:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
j9:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.bg(d):c.ep(d,-1)
P.lU(d)},
is:function is(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
j2:function j2(){},
j3:function j3(a,b){this.a=a
this.b=b},
fH:function fH(a,b){this.a=a
this.b=b},
aX:function aX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iC:function iC(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iK:function iK(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a
this.b=null},
hL:function hL(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
cW:function cW(){},
hM:function hM(){},
al:function al(a,b){this.a=a
this.b=b},
j6:function j6(){},
j8:function j8(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
le:function(a,b){return new H.aQ([a,b])},
mY:function(a){return H.o_(a,new H.aQ([null,null]))},
dH:function(a){return new P.iN([a])},
kI:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mT:function(a,b,c){var u,t
if(P.kM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.e])
C.a.i($.at,a)
try{P.nz(a,u)}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=P.lD(b,H.oa(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
kw:function(a,b,c){var u,t
if(P.kM(a))return b+"..."+c
u=new P.bH(b)
C.a.i($.at,a)
try{t=u
t.a=P.lD(t.a,a,", ")}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kM:function(a){var u,t
for(u=$.at.length,t=0;t<u;++t)if(a===$.at[t])return!0
return!1},
nz:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.p(b,"$ic",[P.e],"$ac")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.d(u.gJ(u))
C.a.i(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.A()){if(s<=4){C.a.i(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.A();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
lf:function(a,b){var u,t,s=P.dH(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.an)(a),++t)s.i(0,H.H(a[t],b))
return s},
lh:function(a){var u,t={}
if(P.kM(a))return"{...}"
u=new P.bH("")
try{C.a.i($.at,a)
u.a+="{"
t.a=!0
J.mz(a,new P.fZ(t,u))
u.a+="}"}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iN:function iN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cf:function cf(a){this.a=a
this.c=this.b=null},
iO:function iO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fW:function fW(){},
v:function v(){},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
af:function af(){},
iV:function iV(){},
ej:function ej(){},
cw:function cw(){},
cx:function cx(){},
fw:function fw(){},
fK:function fK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fJ:function fJ(a){this.a=a},
ig:function ig(){},
ih:function ih(){},
j4:function j4(a){this.b=0
this.c=a},
o7:function(a){var u=H.nc(a,null)
if(u!=null)return u
throw H.i(P.la(a,null))},
mO:function(a){if(a instanceof H.cv)return a.h(0)
return"Instance of '"+H.cQ(a)+"'"},
mZ:function(a,b,c){var u,t
H.H(b,c)
u=J.mV(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.I(u,t,b)
return H.p(u,"$ic",[c],"$ac")},
n_:function(a,b,c){var u,t=[c],s=H.b([],t)
for(u=J.cq(a);u.A();)C.a.i(s,H.H(u.gJ(u),c))
if(b)return s
return H.p(J.kx(s),"$ic",t,"$ac")},
kE:function(a){var u,t,s=P.B
H.p(a,"$ik",[s],"$ak")
if(a.constructor===Array){H.p(a,"$iaI",[s],"$aaI")
u=a.length
t=P.lw(0,null,u)
return H.lv(t<u?C.a.ct(a,0,t):a)}return P.nl(a,0,null)},
nl:function(a,b,c){var u,t,s
H.p(a,"$ik",[P.B],"$ak")
u=J.cq(a)
for(t=0;t<b;++t)if(!u.A())throw H.i(P.aS(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gJ(u))
return H.lv(s)},
ng:function(a){return new H.fQ(a,H.mX(a,!1,!0,!1))},
lD:function(a,b,c){var u=J.cq(b)
if(!u.A())return a
if(c.length===0){do a+=H.d(u.gJ(u))
while(u.A())}else{a+=H.d(u.gJ(u))
for(;u.A();)a=a+c+H.d(u.gJ(u))}return a},
nw:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.p(a,"$ic",[P.B],"$ac")
if(c===C.n){u=$.mu().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.ew(H.H(b,H.f_(c,"cw",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.nd(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mK:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
ku:function(a,b){return new P.bX(1e6*b+1000*a)},
fy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mO(a)},
l1:function(a,b,c){return new P.b_(!0,a,b,c)},
hm:function(a,b){return new P.cb(null,null,!0,a,b,"Value not in range")},
aS:function(a,b,c,d,e){return new P.cb(b,c,!0,a,d,"Invalid value")},
lw:function(a,b,c){if(0>a||a>c)throw H.i(P.aS(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aS(b,a,c,"end",null))
return b}return c},
nf:function(a,b){if(typeof a!=="number")return a.aq()
if(a<0)throw H.i(P.aS(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.au(e==null?J.dp(b):e)
return new P.fL(u,!0,a,c,"Index out of range")},
be:function(a){return new P.id(a)},
lG:function(a){return new P.ib(a)},
lB:function(a){return new P.cV(a)},
bW:function(a){return new P.fh(a)},
dA:function(a){return new P.iB(a)},
la:function(a,b){return new P.fF(a,b)},
n0:function(a,b,c,d){var u,t,s
H.j(b,{func:1,ret:d,args:[P.B]})
u=new Array(a)
u.fixed$length=Array
t=H.b(u,[d])
for(s=0;s<a;++s)C.a.I(t,s,b.$1(s))
return t},
m5:function(a){H.of(a)},
Y:function Y(){},
aP:function aP(a,b){this.a=a
this.b=b},
a1:function a1(){},
bX:function bX(a){this.a=a},
fs:function fs(){},
ft:function ft(){},
bA:function bA(){},
f7:function f7(){},
dO:function dO(){},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fL:function fL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
id:function id(a){this.a=a},
ib:function ib(a){this.a=a},
cV:function cV(a){this.a=a},
fh:function fh(a){this.a=a},
hi:function hi(){},
dU:function dU(){},
fm:function fm(a){this.a=a},
iB:function iB(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
bC:function bC(){},
B:function B(){},
k:function k(){},
bl:function bl(){},
c:function c(){},
R:function R(){},
S:function S(){},
ah:function ah(){},
O:function O(){},
ap:function ap(){},
e:function e(){},
bH:function bH(a){this.a=a},
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.le(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.an)(t),++r){q=H.D(t[r])
u.I(0,q,a[q])}return u},
nW:function(a){var u={}
a.L(0,new P.kh(u))
return u},
kh:function kh(a){this.a=a},
iP:function iP(){},
aJ:function aJ(){},
bn:function bn(){},
fT:function fT(){},
bq:function bq(){},
hg:function hg(){},
hl:function hl(){},
cT:function cT(){},
hQ:function hQ(){},
n:function n(){},
br:function br(){},
i8:function i8(){},
eh:function eh(){},
ei:function ei(){},
er:function er(){},
es:function es(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(a){this.a=a},
fb:function fb(){},
bU:function bU(){},
hh:function hh(){},
e5:function e5(){},
cS:function cS(){},
hE:function hE(){},
ez:function ez(){},
eA:function eA(){}},W={
mD:function(){var u=document.createElement("a")
return u},
mM:function(a,b,c){var u=document.body,t=(u&&C.k).X(u,a,b,c)
t.toString
u=W.C
u=new H.e3(new W.ar(t),H.j(new W.fv(),{func:1,ret:P.Y,args:[u]}),[u])
return H.q(u.gaf(u),"$iae")},
mN:function(a){H.q(a,"$if")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kT(a)
t=u.gcf(a)
if(typeof t==="string")r=u.gcf(a)}catch(s){H.av(s)}return r},
mS:function(a){var u,t=document.createElement("input"),s=H.q(t,"$icF")
try{s.type=a}catch(u){H.av(u)}return s},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lO:function(a,b,c,d){var u=W.iM(W.iM(W.iM(W.iM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.lV(new W.iA(c),W.l)
if(u!=null&&!0)J.mx(a,b,u,!1)
return new W.iz(a,b,u,!1,[e])},
lN:function(a){var u=W.mD(),t=window.location
u=new W.bK(new W.iU(u,t))
u.cH(a)
return u},
nt:function(a,b,c,d){H.q(a,"$iae")
H.D(b)
H.D(c)
H.q(d,"$ibK")
return!0},
nu:function(a,b,c,d){var u,t,s
H.q(a,"$iae")
H.D(b)
H.D(c)
u=H.q(d,"$ibK").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lP:function(){var u=P.e,t=P.lf(C.h,u),s=H.y(C.h,0),r=H.j(new W.j1(),{func:1,ret:u,args:[s]}),q=H.b(["TEMPLATE"],[u])
t=new W.j0(t,P.dH(u),P.dH(u),P.dH(u),null)
t.cK(null,new H.h_(C.h,r,[s,u]),q,null)
return t},
lV:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.e)return a
return u.eq(a,b)},
r:function r(){},
f4:function f4(){},
dq:function dq(){},
f6:function f6(){},
cr:function cr(){},
dr:function dr(){},
bx:function bx(){},
cu:function cu(){},
by:function by(){},
cy:function cy(){},
fi:function fi(){},
V:function V(){},
cz:function cz(){},
fj:function fj(){},
b1:function b1(){},
b2:function b2(){},
fk:function fk(){},
fl:function fl(){},
fn:function fn(){},
cA:function cA(){},
fp:function fp(){},
dx:function dx(){},
dy:function dy(){},
fq:function fq(){},
fr:function fr(){},
kH:function kH(a,b){this.a=a
this.$ti=b},
ae:function ae(){},
fv:function fv(){},
l:function l(){},
f:function f(){},
b3:function b3(){},
fB:function fB(){},
fC:function fC(){},
fE:function fE(){},
b4:function b4(){},
fI:function fI(){},
cE:function cE(){},
cF:function cF(){},
b5:function b5(){},
dI:function dI(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(a){this.a=a},
h3:function h3(){},
h4:function h4(a){this.a=a},
b6:function b6(){},
h5:function h5(){},
ac:function ac(){},
ar:function ar(a){this.a=a},
C:function C(){},
cN:function cN(){},
b7:function b7(){},
hk:function hk(){},
hr:function hr(){},
hs:function hs(a){this.a=a},
hu:function hu(){},
b8:function b8(){},
hC:function hC(){},
b9:function b9(){},
hD:function hD(){},
ba:function ba(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aT:function aT(){},
dV:function dV(){},
hS:function hS(){},
hT:function hT(){},
cX:function cX(){},
bb:function bb(){},
aU:function aU(){},
i0:function i0(){},
i1:function i1(){},
i3:function i3(){},
bc:function bc(){},
aV:function aV(){},
i6:function i6(){},
i7:function i7(){},
bI:function bI(){},
ie:function ie(){},
im:function im(){},
bf:function bf(){},
d1:function d1(){},
d2:function d2(){},
iw:function iw(){},
e7:function e7(){},
iL:function iL(){},
eo:function eo(){},
iY:function iY(){},
iZ:function iZ(){},
iv:function iv(){},
ix:function ix(a){this.a=a},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iz:function iz(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iA:function iA(a){this.a=a},
bK:function bK(a){this.a=a},
z:function z(){},
dN:function dN(a){this.a=a},
he:function he(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(){},
iW:function iW(){},
iX:function iX(){},
j0:function j0(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j1:function j1(){},
j_:function j_(){},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
iU:function iU(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a},
j5:function j5(a){this.a=a},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
d8:function d8(){},
d9:function d9(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
da:function da(){},
db:function db(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){}},O={
l5:function(a){var u=new O.bz([a])
u.sdd(H.b([],[a]))
u.sbP(null)
u.sbM(null)
u.sbQ(null)
return u},
bz:function bz(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cI:function cI(){this.b=this.a=null},
fo:function fo(a){this.a=a
this.c=this.b=null},
cc:function cc(){}},E={
l9:function(a){var u=new E.a9()
u.a=""
u.b=!0
u.scQ(0,O.l5(E.a9))
u.y.bt(u.geN(),u.geQ())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbu(0,null)
u.saA(null)
return u},
nh:function(a,b){var u=new E.hn(a)
u.cC(a,b)
return u},
fc:function fc(){},
a9:function a9(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.d=_.c=_.b=_.a=null},
hn:function hn(a){var _=this
_.a=a
_.dy=_.dx=_.db=_.cy=_.x=_.r=_.f=_.e=_.d=_.c=null},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
dX:function dX(){var _=this
_.cy=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
i2:function i2(a){this.a=a}},Z={
aL:function(a){return new Z.aK(a)},
aK:function aK(a){this.a=a}},D={
bY:function(){var u=new D.cC()
u.sah(null)
u.saK(null)
u.c=null
u.d=0
return u},
fe:function fe(){},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=null},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
Q:function Q(){this.b=null},
fM:function fM(a){this.b=null
this.$ti=a},
fN:function fN(a){this.b=null
this.$ti=a},
aC:function aC(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d}},X={ds:function ds(a,b){this.a=a
this.b=b},dF:function dF(a,b){this.a=a
this.b=b},fS:function fS(){this.d=this.b=this.a=null},fX:function fX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},h6:function h6(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e2:function e2(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mP:function(a){var u=new X.fG(),t=V.nV(1)
u.a=new V.du(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lx
if(t==null){t=V.dR(0,0,1,1)
$.lx=t}u.r=t
return u},
dt:function dt(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){}},V={
aA:function(a){return new V.ai(a)},
nV:function(a){var u=a>1?1:a
return u},
L:function(a,b,c){if(a==null)return C.b.aP("null",c)
return C.b.aP(C.c.aS(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
bt:function(a,b,c){var u,t,s,r,q,p
H.p(a,"$ic",[P.a1],"$ac")
u=H.b([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.an)(a),++r){q=V.L(a[r],b,c)
s=Math.max(s,q.length)
C.a.i(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.I(u,p,C.b.aP(u[p],s))}return u},
c2:function(){var u=$.li
return u==null?$.li=new V.a3(1,0,0,1):u},
c1:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.a3(u,-t,t,u)},
n1:function(a){var u,t,s,r
H.p(a,"$ic",[P.a1],"$ac")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
return new V.a3(u,t,s,r)},
c6:function(){var u=$.lj
return u==null?$.lj=new V.W(1,0,0,0,1,0,0,0,1):u},
c3:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.W(1,0,0,0,u,-t,0,t,u)},
c4:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.W(u,0,-t,0,1,0,t,0,u)},
c5:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.W(u,-t,0,t,u,0,0,0,1)},
n2:function(a){var u,t,s,r,q,p,o,n,m
H.p(a,"$ic",[P.a1],"$ac")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
q=a[4]
p=a[5]
o=a[6]
n=a[7]
m=a[8]
return new V.W(u,t,s,r,q,p,o,n,m)},
aR:function(){var u=$.lm
return u==null?$.lm=V.U(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
U:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ll:function(a,b,c){return V.U(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lk:function(a,b,c,d){return V.U(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
c7:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.U(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
c8:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.U(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
c9:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.U(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
n3:function(a){var u
H.p(a,"$ic",[P.a1],"$ac")
u=V.U(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return u},
dQ:function(){var u=$.lr
return u==null?$.lr=new V.a6(0,0):u},
lt:function(){var u=$.ls
return u==null?$.ls=new V.w(0,0,0):u},
dR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cR(a,b,c,d)},
N:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.bG(a,b,c,d,e,f)},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
ai:function ai(a){this.a=a},
aH:function aH(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bE:function bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ad:function ad(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function(a){var u=new V.hv()
u.cD(a)
return u},
f5:function f5(){},
bo:function bo(){},
dJ:function dJ(){},
bp:function bp(){this.a=null},
hv:function hv(){this.a=null},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
i4:function i4(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
nj:function(a,b){var u=new V.hz()
u.cE(a,!1)
return u},
hz:function hz(){this.b=this.a=null},
hB:function hB(a){this.a=a},
hA:function hA(a){this.a=a}},U={
l6:function(a){var u=new U.dv()
if(a==null)a=V.aR()
if(null!=a)u.a=a
return u},
dv:function dv(){this.b=this.a=null},
cK:function cK(){}},M={dz:function dz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
nF:function(a){a.p(0,"Uint8List bench timing",new M.jf())
a.p(0,"List int bench timing",new M.jg())},
nG:function(a){var u=new M.jh(),t=new M.jk(u)
a.p(0,"Test of chess location",new M.jl(new M.jj()))
a.p(0,"Test of chess state parse and toString",new M.jm(u))
a.p(0,"Test of chess checked condition determination",new M.jn(new M.ji()))
a.p(0,"Test of chess state movements of pawns",new M.jo(t))
a.p(0,"Test of chess state movements of knights",new M.jp(t))
a.p(0,"Test of chess state movements of bishops",new M.jq(t))
a.p(0,"Test of chess state movements of rooks",new M.jr(t))
a.p(0,"Test of chess state movements of kings",new M.js(t))
a.p(0,"Test of chess state movements of queens",new M.jt(t))},
nH:function(a){a.p(0,"Test of craft example world getBlock",new M.ju())
a.p(0,"Test of craft example world collide with floor",new M.jv())},
o:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q="Testing getBlock(",p="error_log",o="notice_log",n="info_log",m=b.ae(c,d,e),l=m.d,k=l===f
if(!k||m.e!==g||m.a!==h||m.b!==i||m.c!==j){a.j(q+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Failed\n",p)
a.k()
a.j("  Expected: "+f+", "+g+", "+h+", "+i+", "+j+"\n",o)
u=m.e
t=m.a
s=m.b
r=m.c
a.j("  Gotten:   "+l+", "+u+", "+t+", "+s+", "+r+"\n",o)
if(!k){a.j("  Chunk X value "+l+" should be "+f+".\n",p)
a.k()}if(u!==g){a.j("  Chunk Z value "+u+" should be "+g+".\n",p)
a.k()}if(t!==h){a.j("  Block X value "+t+" should be "+h+".\n",p)
a.k()}if(s!==i){a.j("  Block Y value "+s+" should be "+i+".\n",p)
a.k()}if(r!==j){a.j("  Block Z value "+r+" should be "+j+".\n",p)
a.k()}a.j("\n",n)}else a.j(q+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Passed\n",n)},
a4:function(a,b,c,d,e,f,g,h,i,j,k,l){var u,t,s,r,q="error_log",p="info_log",o=new B.fg(b)
o.e=$.bu()
o.scP(H.b([],[V.bG]))
o.scO(H.b([],[V.ai]))
o.sd7(H.b([],[P.Y]))
u=V.N(-0.25,-1.5,-0.25,0.5,2,0.5)
t=new V.w(c,d,e)
s=new V.F(f,g,h)
r=new V.w(i,j,k)
o.er(u,t,s)
if(!J.J(o.b,r)||!J.J(o.e,l)){a.j("Testing collide: Failed\n",q)
a.k()
a.j("  Region:   "+u.h(0)+"\n",q)
a.k()
a.j("  Start:    "+t.h(0)+"\n",q)
a.k()
a.j("  Vector:   "+s.h(0)+"\n",q)
a.k()
a.j("  Expected: Collider("+r.h(0)+", "+H.d(l)+")\n",q)
a.k()
a.j("  Gotten:   "+o.h(0)+"\n",q)
a.k()
a.j("\n",p)}else{a.j("Testing collide: Passed\n",p)
a.j("  Region:   "+u.h(0)+"\n",p)
a.j("  Start:    "+t.h(0)+"\n",p)
a.j("  Vector:   "+s.h(0)+"\n",p)
a.j("  Gotten:   "+o.h(0)+"\n",p)
a.j("\n",p)}},
nI:function(a){a.p(0,"Matrix2 Point Transposition Test",new M.jw())
a.p(0,"Matrix2 Vector Transposition Test",new M.jx())
a.p(0,"Matrix2 Identity Test",new M.jy())
a.p(0,"Matrix2 Scalar Test",new M.jz())
a.p(0,"Matrix2 Basic Rotate Test",new M.jA())
a.p(0,"Matrix2 Rotate Test",new M.jB())
a.p(0,"Matrix2 Miscellaneous Test",new M.jC())
a.p(0,"Matrix2 Inverse Test",new M.jD())
a.p(0,"Matrix2 Multiplication Test",new M.jE())},
T:function(a,b,c,d){if(b!==c){a.j("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.d(b)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("Checked "+d+" is "+H.d(b)+"\n\n","info_log")},
ab:function(a,b,c,d){var u=c+"\n             "+d,t=b.n("             ")
if(t!==u){a.j("Unexpected result from Matrix2: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.n("          ")+"\n\n","info_log")},
kK:function(a,b,c,d){var u,t,s,r="             ",q="error_log",p="Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   ",o=b.U(0)
M.ab(a,o,c,d)
u=o.U(0)
if(!J.J(u,b)){a.j("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.n(r)+"\n   Gotten:   "+u.n(r)+"\n",q)
a.k()
a.k()}t=b.C(0,o)
if(!t.m(0,V.c2())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.c2().n(r)+"\n   Gotten:   "+t.n(r)+"\n",q)
a.k()
a.k()}s=b.C(0,o)
if(!s.m(0,V.c2())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.c2().n(r)+"\n   Gotten:   "+s.n(r)+"\n",q)
a.k()
a.k()}},
P:function(a,b,c,d,e,f){var u="info_log",t=new V.a6(e,f),s=new V.a6(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.a6(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
jc:function(a,b,c,d,e,f){var u="info_log",t=new V.ad(e,f),s=new V.ad(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.ad(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
nJ:function(a){a.p(0,"Matrix3 Point Transposition Test",new M.jF())
a.p(0,"Matrix3 Vector Transposition Test",new M.jG())
a.p(0,"Matrix3 Identity Test",new M.jH())
a.p(0,"Matrix3 Scalar Test",new M.jM())
a.p(0,"Matrix3 Basic Rotate X Test",new M.jN())
a.p(0,"Matrix3 Rotate X Test",new M.jO())
a.p(0,"Matrix3 Basic Rotate Y Test",new M.jP())
a.p(0,"Matrix3 Rotate Y Test",new M.jQ())
a.p(0,"Matrix3 Basic Rotate Z Test",new M.jR())
a.p(0,"Matrix3 Rotate Z Test",new M.jS())
a.p(0,"Matrix3 Miscellaneous Test",new M.jT())
a.p(0,"Matrix3 Inverse Test",new M.jI())
a.p(0,"Matrix3 Multiplication Test",new M.jJ())
a.p(0,"Matrix3 Point2 Transposition Test",new M.jK())
a.p(0,"Matrix3 Vector2 Transposition Test",new M.jL())},
K:function(a,b,c,d,e){var u=c+"\n             "+d+"\n             "+e,t=b.n("             ")
if(t!==u){a.j("Unexpected result from Matrix3: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.n("          ")+"\n\n","info_log")},
eW:function(a,b,c,d,e){var u,t,s,r="             ",q="error_log",p="Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   ",o=b.U(0)
M.K(a,o,c,d,e)
u=o.U(0)
if(!J.J(u,b)){a.j("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.n(r)+"\n   Gotten:   "+u.n(r)+"\n",q)
a.k()
a.k()}t=b.C(0,o)
if(!t.m(0,V.c6())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.c6().n(r)+"\n   Gotten:   "+t.n(r)+"\n",q)
a.k()
a.k()}s=b.C(0,o)
if(!s.m(0,V.c6())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.c6().n(r)+"\n   Gotten:   "+s.n(r)+"\n",q)
a.k()
a.k()}},
x:function(a,b,c,d,e,f,g,h){var u="info_log",t=new V.w(f,g,h),s=new V.w(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.w(c,d,e).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
bO:function(a,b,c,d,e,f,g,h){var u="info_log",t=new V.F(f,g,h),s=new V.F(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.F(c,d,e).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
ja:function(a,b,c,d,e,f){var u="info_log",t=new V.a6(e,f),s=new V.a6(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.j("Checking Matrix3.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.a6(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
jd:function(a,b,c,d,e,f){var u="info_log",t=new V.ad(e,f),s=new V.ad(b.a*c+b.b*d,b.d*c+b.e*d)
a.j("Checking Matrix3.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.ad(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
nK:function(a){a.p(0,"Matrix4 Point Transposition Test",new M.jU())
a.p(0,"Matrix4 Vector Transposition Test",new M.jV())
a.p(0,"Matrix4 Identity Test",new M.jW())
a.p(0,"Matrix4 Scalar Test",new M.k2())
a.p(0,"Matrix4 Basic Rotate X Test",new M.k3())
a.p(0,"Matrix4 Rotate X Test",new M.k4())
a.p(0,"Matrix4 Basic Rotate Y Test",new M.k5())
a.p(0,"Matrix4 Rotate Y Test",new M.k6())
a.p(0,"Matrix4 Basic Rotate Z Test",new M.k7())
a.p(0,"Matrix4 Rotate Z Test",new M.k8())
a.p(0,"Matrix4 Miscellaneous Test",new M.k9())
a.p(0,"Matrix4 Inverse Test",new M.jX())
a.p(0,"Matrix4 Multiplication Test",new M.jY())
a.p(0,"Matrix4 Point3 Transposition Test",new M.jZ())
a.p(0,"Matrix4 Vector3 Transposition Test",new M.k_())
a.p(0,"Matrix4 Point2 Transposition Test",new M.k0())
a.p(0,"Matrix4 Vector2 Transposition Test",new M.k1())},
I:function(a,b,c,d,e,f){var u=c+"\n             "+d+"\n             "+e+"\n             "+f,t=b.n("             ")
if(t!==u){a.j("Unexpected result from Matrix4: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.n("          ")+"\n\n","info_log")},
eX:function(a,b,c,d,e,f){var u,t,s,r="             ",q="error_log",p="Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   ",o=b.U(0)
M.I(a,o,c,d,e,f)
u=o.U(0)
if(!J.J(u,b)){a.j("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.n(r)+"\n   Gotten:   "+u.n(r)+"\n",q)
a.k()
a.k()}t=b.C(0,o)
if(!t.m(0,V.aR())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.aR().n(r)+"\n   Gotten:   "+t.n(r)+"\n",q)
a.k()
a.k()}s=b.C(0,o)
if(!s.m(0,V.aR())){a.j(p+b.n(r)+"\n   Inverted: "+o.n(r)+"\n   Expected: "+V.aR().n(r)+"\n   Gotten:   "+s.n(r)+"\n",q)
a.k()
a.k()}},
t:function(a,b,c,d,e,f,g,h,i,j){var u="info_log",t=new V.bF(c,d,e,f),s=new V.bF(g,h,i,j),r=b.aT(t)
a.j("Checking Matrix4.transPnt4: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+t.h(0)+"\n"),u)
if(!r.m(0,s)){a.j("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+r.h(0)+"\n\n",u)},
ak:function(a,b,c,d,e,f,g,h,i,j){var u="info_log",t=new V.bJ(g,h,i,j),s=new V.bJ(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.j("Checking Matrix4.transVec4: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.bJ(c,d,e,f).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
bN:function(a,b,c,d,e,f,g,h){var u="info_log",t=new V.w(f,g,h),s=new V.w(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.j("Checking Matrix4.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.w(c,d,e).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
bP:function(a,b,c,d,e,f,g,h){var u="info_log",t=new V.F(f,g,h),s=new V.F(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.j("Checking Matrix4.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.F(c,d,e).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
jb:function(a,b,c,d,e,f){var u="info_log",t=new V.a6(e,f),s=new V.a6(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.j("Checking Matrix4.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.a6(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
je:function(a,b,c,d,e,f){var u="info_log",t=new V.ad(e,f),s=new V.ad(b.a*c+b.b*d,b.e*c+b.f*d)
a.j("Checking Matrix4.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.ad(c,d).h(0)+"\n"),u)
if(!s.m(0,t)){a.j("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n",u)},
nL:function(a){a.p(0,"Region2 Point Expand Test",new M.ka())},
dc:function(a,b,c,d,e,f,g,h){var u,t,s,r,q=new V.a6(c,d),p=b.c,o=b.a
if(c<o){p+=o-c
o=c}else if(c>o+p)p=c-o
u=b.d
t=b.b
if(d<t){u+=t-d
t=d}else if(d>t+u)u=d-t
s=new V.cR(o,t,p,u)
r=V.dR(e,f,g,h)
if(!s.m(0,r)){a.j("Unexpected result from expand:\n"+("   Original: "+H.d(b)+"\n")+("   Point:    "+q.h(0)+"\n")+("   Expected: "+r.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"error_log")
a.k()}else a.j(H.d(b)+" + "+q.h(0)+" => "+s.h(0)+"\n","info_log")
return s},
nM:function(a){a.p(0,"Region3 Point Expand Test",new M.kb())
a.p(0,"Region3 Collision Test",new M.kc())},
dd:function(a,b,c,d,e,f,g,h,i,j,k){var u,t,s,r,q,p,o=new V.w(c,d,e),n=b.d,m=b.a
if(c<m){n+=m-c
m=c}else if(c>m+n)n=c-m
u=b.e
t=b.b
if(d<t){u+=t-d
t=d}else if(d>t+u)u=d-t
s=b.f
r=b.c
if(e<r){s+=r-e
r=e}else if(e>r+s)s=e-r
q=new V.bG(m,t,r,n,u,s)
p=V.N(f,g,h,i,j,k)
if(!q.m(0,p)){a.j("Unexpected result from expand:\n"+("   Original: "+H.d(b)+"\n")+("   Point:    "+o.h(0)+"\n")+("   Expected: "+p.h(0)+"\n")+("   Result:   "+q.h(0)+"\n"),"error_log")
a.k()}else a.j("["+H.d(b)+"] + ["+o.h(0)+"] => ["+q.h(0)+"]\n","info_log")
return q},
aE:function(a,b,c,d,e){var u="Results from collision:\n",t="   Result:   null\n",s="info_log",r="Unexpected result from collision:\n",q="error_log",p=b.es(c,d)
if(e==null){if(p==null){a.j(u+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+t,s)
return}a.j(r+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+"   Expected: null\n"+("   Result:   "+p.h(0)+"\n"),q)
a.k()}else if(p==null){a.j(r+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+t,q)
a.k()}else if(!(Math.abs(p.a-e.a)<$.M().a)||!J.J(p.b,e.b)){a.j(r+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),q)
a.k()}else a.j(u+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),s)},
nN:function(a){a.p(0,"Matrix4 Point Transposition Test",new M.kd())},
oj:function(a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="error_log",a7="mousemove"
H.p(b1,"$ic",[M.a7],"$ac")
u=new F.dT()
t=new F.ii(u)
t.b=!1
t.seh(H.b([],[F.d0]))
u.a=t
t=new F.hy()
s=[F.cO]
t.sbb(H.b([],s))
u.b=t
t=new F.hx()
r=[F.c_]
t.sd9(H.b([],r))
u.c=t
t=new F.hw()
q=[F.bB]
t.sd0(H.b([],q))
u.d=t
u.e=null
for(p=0;p<15;++p){t=u.a
o=b1[p].a
t.toString
n=new F.d0()
new F.il().sbb(H.b([],s))
m=new F.ik()
m.sda(H.b([],r))
m.sdc(H.b([],r))
m=new F.ij()
m.sd1(H.b([],q))
m.sd2(H.b([],q))
m.sd3(H.b([],q))
l=$.mr()
n.e=0
m=$.az()
n.f=(l.a&m.a)!==0?o:a5
$.ay().a
$.ax().a
$.ao().a
$.aN().a
$.ms().a
$.aG().a
n.ch=0
$.aF().a
t.i(0,n)}k=E.l9(a5)
k.sbu(0,u)
k.saA(U.l6(a9))
j=new P.bH("")
i=new O.fo(j)
i.se_(H.b([],[V.w]))
i.c=null
h=new M.dz()
h.a=!0
h.scI(0,O.l5(E.a9))
h.e.bt(h.gdk(),h.gdm())
h.y=h.x=h.r=h.f=null
g=X.mP(a5)
f=new X.dP()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saA(a5)
t=f.c
if(!(Math.abs(t-1.0471975511965976)<$.M().a)){f.c=1.0471975511965976
t=new D.aC("fov",t,1.0471975511965976,[P.a1])
t.b=!0
f.ai(t)}t=f.d
if(!(Math.abs(t-0.1)<$.M().a)){f.d=0.1
t=new D.aC("near",t,0.1,[P.a1])
t.b=!0
f.ai(t)}t=f.e
if(!(Math.abs(t-2000)<$.M().a)){f.e=2000
t=new D.aC("far",t,2000,[P.a1])
t.b=!0
f.ai(t)}t=h.b
if(t!==f){if(t!=null)t.gE().R(0,h.ga2())
e=h.b
h.b=f
f.gE().i(0,h.ga2())
t=new D.aC("camera",e,h.b,[X.dt])
t.b=!0
h.a7(t)}t=h.c
if(t!==g){if(t!=null)t.gE().R(0,h.ga2())
e=h.c
h.c=g
g.gE().i(0,h.ga2())
t=new D.aC("target",e,h.c,[X.dW])
t.b=!0
h.a7(t)}h.scg(a5)
h.scg(i)
h.e.i(0,k)
h.b.saA(U.l6(b0))
t=document
d=t.createElement("canvas")
c=new E.dX()
b=H.q(C.B.cp(d,"webgl2",P.mY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icS")
if(b==null)H.cj(P.dA("Failed to get the rendering context for WebGL."))
c.b=d
c.c=b
c.e=E.nh(b,d)
H.au(b.getParameter(3379))
H.au(b.getParameter(34076))
s=new X.e2(d)
r=new X.fS()
r.sdV(P.dH(P.B))
s.b=r
r=new X.h6(s)
r.f=0
r.r=V.dQ()
r.x=V.dQ()
r.ch=r.Q=1
s.c=r
r=new X.fX(s)
r.r=0
r.x=V.dQ()
r.cy=r.cx=r.ch=r.Q=1
s.d=r
r=new X.i5(s)
r.f=V.dQ()
r.r=V.dQ()
s.e=r
s.x=s.r=s.f=!1
s.y=null
s.sd_(H.b([],[[P.cW,P.O]]))
r=s.z
q=W.ac
o={func:1,ret:-1,args:[q]};(r&&C.a).i(r,W.aa(t,"contextmenu",H.j(s.gdq(),o),!1,q))
r=s.z
m=W.l
a={func:1,ret:-1,args:[m]};(r&&C.a).i(r,W.aa(d,"focus",H.j(s.gdw(),a),!1,m))
r=s.z;(r&&C.a).i(r,W.aa(d,"blur",H.j(s.gdh(),a),!1,m))
r=s.z
a0=W.b5
a1={func:1,ret:-1,args:[a0]};(r&&C.a).i(r,W.aa(t,"keyup",H.j(s.gdC(),a1),!1,a0))
r=s.z;(r&&C.a).i(r,W.aa(t,"keydown",H.j(s.gdA(),a1),!1,a0))
a0=s.z;(a0&&C.a).i(a0,W.aa(d,"mousedown",H.j(s.gdF(),o),!1,q))
a0=s.z;(a0&&C.a).i(a0,W.aa(d,"mouseup",H.j(s.gdJ(),o),!1,q))
a0=s.z;(a0&&C.a).i(a0,W.aa(d,a7,H.j(s.gdH(),o),!1,q))
a0=s.z
a1=W.bf;(a0&&C.a).i(a0,W.aa(d,H.D(W.mN(d)),H.j(s.gdL(),{func:1,ret:-1,args:[a1]}),!1,a1))
a1=s.z;(a1&&C.a).i(a1,W.aa(t,a7,H.j(s.gds(),o),!1,q))
a1=s.z;(a1&&C.a).i(a1,W.aa(t,"mouseup",H.j(s.gdu(),o),!1,q))
q=s.z;(q&&C.a).i(q,W.aa(t,"pointerlockchange",H.j(s.gdN(),a),!1,m))
m=s.z
a=W.aV
t={func:1,ret:-1,args:[a]};(m&&C.a).i(m,W.aa(d,"touchstart",H.j(s.gdT(),t),!1,a))
m=s.z;(m&&C.a).i(m,W.aa(d,"touchend",H.j(s.gdP(),t),!1,a))
m=s.z;(m&&C.a).i(m,W.aa(d,"touchmove",H.j(s.gdR(),t),!1,a))
c.Q=!0
c.ch=!1
Date.now()
c.cy=0
c.bS()
if(!c.Q){c.Q=!1
c.aX()}t=c.d
if(t!==h){if(t!=null)t.gE().R(0,c.gby())
c.d=h
h.gE().i(0,c.gby())
c.aX()}c.cb()
t=j.a
a8.j(t.charCodeAt(0)==0?t:t,"info_log")
if(i.b.length!==15){for(a2="",p=0;t=i.b,p<t.length;++p)a2+="\n   "+t[p].Y(1,3)
for(a3="",p=0;p<15;++p)a3+="\n   "+b1[p].b.Y(1,3)
a8.j("Unexpected number of results from debugging technique: "+("\n   Expected: "+a3)+("\n   Gotten:   "+a2+"\n\n"),a6)
a8.k()
a8.k()}else for(p=0;t=i.b,s=t.length,p<s;++p){if(p>=15)return H.h(b1,p)
a4=b1[p].b
if(p>=s)return H.h(t,p)
a2=t[p]
if(!a4.m(0,a2)){a8.j("Unexpected result from debugging technique at "+p+": "+("\n   Expected: "+a4.h(0))+("\n   Gotten:   "+H.d(a2.a)+", "+H.d(a2.b)+", "+H.d(a2.c)+"\n\n"),a6)
if(!H.E(a8.z)){a8.z=!0
a8.b.className="test_body body_shown"
a8.a_(0)}}}},
m3:function(){var u,t,s,r,q=document,p=q.createElement("div"),o=new M.hZ(p)
o.c=new P.fJ(C.D)
u=q.createElement("div")
o.b=u
p.appendChild(u)
t=q.createElement("div")
t.className="log_checkboxes"
o.aI(t,"Information","info_log")
o.aI(t,"Notice","notice_log")
o.aI(t,"Warning","warning_log")
o.aI(t,"Error","error_log")
p.appendChild(t)
o.d=new P.aP(Date.now(),!1)
o.seb(H.b([],[M.ce]))
o.r=o.f=0
o.x=""
M.nF(o)
M.nO(o)
M.nI(o)
M.nJ(o)
M.nK(o)
M.nL(o)
M.nM(o)
M.nN(o)
M.nH(o)
M.nG(o)
u=V.nj("Unit-tests",!1)
s=q.createElement("div")
s.appendChild(p)
r=q.createElement("div")
q=r.style
q.display="block"
q.clear="both"
s.appendChild(r)
u.a.appendChild(s)
u.ek(H.b(["\xab[Back to Tests|../]"],[P.e]))},
nO:function(a){a.p(0,"VertexTypes and Groups",new M.ke())
a.p(0,"VertexTypes from Type Groups 1",new M.kf())
a.p(0,"VertexType from Type Groups 2",new M.kg())},
am:function(a,b,c,d,e,f){var u,t,s,r="error_log",q=J.Z(b)
a.j("Checking vertex type "+q.h(b)+":\n","info_log")
u=q.h(b)
if(u!==c){a.j("Error: Got the wrong name for a vertex type:\n",r)
a.k()
a.j("   Gotten:   "+u+"\n",r)
a.k()
a.j("   Expected: "+c+"\n",r)
a.k()}t=b.a
if(t!==d){a.j("Error: Got the wrong value for a vertex type:\n",r)
a.k()
a.j("   Gotten:   "+t+"\n",r)
a.k()
a.j("   Expected: "+d+"\n",r)
a.k()}s=(t&$.az().a)!==0?1:0
if((t&$.ay().a)!==0)++s
if((t&$.ax().a)!==0)++s
if((t&$.ao().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.aG().a)!==0)++s
if((t&$.aF().a)!==0)++s
if(s!==e){a.j("Error: Got the wrong count for a vertex type:\n",r)
a.k()
a.j("   Gotten:   "+s+"\n",r)
a.k()
a.j("   Expected: "+e+"\n",r)
a.k()}s=(t&$.az().a)!==0?3:0
if((t&$.ay().a)!==0)s+=3
if((t&$.ax().a)!==0)s+=3
if((t&$.ao().a)!==0)s+=2
if((t&$.aN().a)!==0)s+=3
if((t&$.aM().a)!==0)s+=3
if((t&$.aZ().a)!==0)s+=4
if((t&$.aG().a)!==0)++s
if((t&$.aF().a)!==0)s+=4
if(s!==f){a.j("Error: Got the wrong size for a vertex type:\n",r)
a.k()
a.j("   Gotten:   "+s+"\n",r)
a.k()
a.j("   Expected: "+f+"\n",r)
a.k()}},
ag:function(a,b,c,d,e,f){var u,t,s,r,q,p,o="error_log",n="Error: Got the wrong index for a vertex type in a group:\n"
a.j("Checking vertex type "+J.bi(c)+" in "+b.h(0)+":\n","info_log")
u=(b.a&c.a)!==0
if(u!==d){a.j("Error: Got the wrong result from has for a vertex type in a group:\n",o)
a.k()
a.j("   Gotten:   "+u+"\n",o)
a.k()
a.j("   Expected: "+d+"\n",o)
a.k()}t=b.eE(0,c)
if(t!==e){a.j(n,o)
a.k()
a.j("   Gotten:   "+t+"\n",o)
a.k()
a.j("   Expected: "+e+"\n",o)
a.k()}s=d?c:$.kr()
r=b.em(e)
q=J.Z(r)
if(!q.m(r,s)){a.j(n,o)
a.k()
a.j("   Gotten:   "+q.h(r)+"\n",o)
a.k()
a.j("   Expected: "+J.bi(s)+"\n",o)
a.k()}p=b.eM(0,c)
if(p!==f){a.j("Error: Got the wrong offset for a vertex type in a group:\n",o)
a.k()
a.j("   Gotten:   "+p+"\n",o)
a.k()
a.j("   Expected: "+f+"\n",o)
a.k()}},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jk:function jk(a){this.a=a},
jj:function jj(){},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
jA:function jA(){},
jB:function jB(){},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
jM:function jM(){},
jN:function jN(){},
jO:function jO(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
jT:function jT(){},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
jL:function jL(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
k2:function k2(){},
k3:function k3(){},
k4:function k4(){},
k5:function k5(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
k9:function k9(){},
jX:function jX(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
k1:function k1(){},
ka:function ka(){},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
a7:function a7(){this.b=this.a=null},
cd:function cd(){},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.r=c
_.x=d
_.Q=_.z=_.y=null},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i_:function i_(a,b){this.a=a
this.b=b},
ke:function ke(){},
kf:function kf(){},
kg:function kg(){}},A={dS:function dS(){}},F={bB:function bB(){},c_:function c_(){},cO:function cO(){},dT:function dT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hw:function hw(){this.b=null},hx:function hx(){this.b=null},hy:function hy(){this.b=null},d0:function d0(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.a=null},ii:function ii(a){this.a=a
this.c=this.b=null},ij:function ij(){this.d=this.c=this.b=null},ik:function ik(){this.c=this.b=null},il:function il(){this.b=null}},Q={
lg:function(a){if(a<0||a>=64)return new Q.m(0,0)
return new Q.m(C.d.W(a,8)+1,C.d.bq(a,8)+1)},
kC:function(){var u=new Q.hF()
u.cF()
return u},
lC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=Q.kC(),g=$.aY(),f=$.f1()
g=g.a
f=f.a
if(typeof g!=="number")return g.M()
if(typeof f!=="number")return H.A(f)
u=g|f
t=$.bS().a
if(typeof t!=="number")return H.A(t)
s=1&t
h.t(new Q.m(1,1),new Q.u((u|s)>>>0))
r=$.co()
r=r.a
if(typeof r!=="number")return r.M()
q=r|f
h.t(new Q.m(1,2),new Q.u((q|s)>>>0))
p=$.bg()
p=p.a
if(typeof p!=="number")return p.M()
o=p|f
h.t(new Q.m(1,3),new Q.u((o|s)>>>0))
n=$.bv()
n=n.a
if(typeof n!=="number")return n.M()
h.t(new Q.m(1,4),new Q.u((n|f|s)>>>0))
m=$.aw()
m=m.a
if(typeof m!=="number")return m.M()
h.t(new Q.m(1,5),new Q.u((m|f|s)>>>0))
l=2&t
h.t(new Q.m(1,6),new Q.u((o|l)>>>0))
h.t(new Q.m(1,7),new Q.u((q|l)>>>0))
h.t(new Q.m(1,8),new Q.u((u|l)>>>0))
u=$.cp()
u=u.a
if(typeof u!=="number")return u.M()
f=u|f
h.t(new Q.m(2,1),new Q.u((f|s)>>>0))
h.t(new Q.m(2,2),new Q.u((f|l)>>>0))
q=3&t
h.t(new Q.m(2,3),new Q.u((f|q)>>>0))
o=4&t
h.t(new Q.m(2,4),new Q.u((f|o)>>>0))
k=5&t
h.t(new Q.m(2,5),new Q.u((f|k)>>>0))
j=6&t
h.t(new Q.m(2,6),new Q.u((f|j)>>>0))
i=7&t
h.t(new Q.m(2,7),new Q.u((f|i)>>>0))
t=8&t
h.t(new Q.m(2,8),new Q.u((f|t)>>>0))
f=$.bh()
f=f.a
if(typeof f!=="number")return H.A(f)
u|=f
h.t(new Q.m(7,1),new Q.u((u|s)>>>0))
h.t(new Q.m(7,2),new Q.u((u|l)>>>0))
h.t(new Q.m(7,3),new Q.u((u|q)>>>0))
h.t(new Q.m(7,4),new Q.u((u|o)>>>0))
h.t(new Q.m(7,5),new Q.u((u|k)>>>0))
h.t(new Q.m(7,6),new Q.u((u|j)>>>0))
h.t(new Q.m(7,7),new Q.u((u|i)>>>0))
h.t(new Q.m(7,8),new Q.u((u|t)>>>0))
g|=f
h.t(new Q.m(8,1),new Q.u((g|s)>>>0))
u=r|f
h.t(new Q.m(8,2),new Q.u((u|s)>>>0))
t=p|f
h.t(new Q.m(8,3),new Q.u((t|s)>>>0))
h.t(new Q.m(8,4),new Q.u((n|f|s)>>>0))
h.t(new Q.m(8,5),new Q.u((m|f|s)>>>0))
h.t(new Q.m(8,6),new Q.u((t|l)>>>0))
h.t(new Q.m(8,7),new Q.u((u|l)>>>0))
h.t(new Q.m(8,8),new Q.u((g|l)>>>0))
return h},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.p(a,"$ic",[P.e],"$ac")
u=Q.kC()
t=new H.aQ([P.B,P.Y])
s=Q.nk(a)
if(s.a!==8||s.b!==8)return
for(r=0;r<8;r=q)for(q=r+1,p=(q-1)*8,o=0;o<8;++o){n=Q.lE(C.b.fb(s.co(r,o))).a
m=$.a2().a
if(n!=m){l=$.bS().a
if(typeof n!=="number")return n.v()
if(typeof l!=="number")return H.A(l)
if((n&l)>>>0!==m){m=$.f2().a
if(typeof m!=="number")return H.A(m)
t.I(0,(n&m)>>>0,!0)}m=u.a;(m&&C.a).I(m,p+(o+1-1),n)}}for(k=0;k<64;++k){p=u.a
if(k>=p.length)return H.h(p,k)
p=p[k]
n=$.a2().a
if(p!=n){m=$.bS().a
if(typeof p!=="number")return p.v()
if(typeof m!=="number")return H.A(m)
n=(p&m)>>>0===n}else n=!1
if(n)for(j=1;j<64;++j){if(typeof p!=="number")return p.M()
n=(p|j)>>>0
m=$.f2().a
if(typeof m!=="number")return H.A(m)
m=(n&m)>>>0
l=t.q(0,m)
if(!H.E(l==null?!1:l)){t.I(0,m,!0)
p=u.a;(p&&C.a).I(p,k,n)
break}}}return u},
kD:function(a,b){var u,t=new Q.hP(a,b)
t.d=!1
u=new Array(a*b)
u.fixed$length=Array
t.scV(0,H.b(u,[P.e]))
return t},
nk:function(a){var u,t,s,r,q,p,o,n=P.e
H.p(a,"$ic",[n],"$ac")
u=H.b([],[[P.c,P.e]])
for(n=[n],t=0,s=0;s<8;++s){r=H.b(a[s].split("|"),n)
q=r.length
if(q>t)t=q
C.a.i(u,r)}p=Q.kD(8,t)
for(s=0;s<u.length;++s){r=u[s]
for(o=0;o<r.length;++o)p.aG(s,o,r[o])}return p},
aq:function(a){return new Q.u(a)},
nm:function(a){switch(a){case"W":return $.bh()
case"B":return $.f1()
default:return $.a2()}},
nn:function(a){switch(a){case"P":return $.cp()
case"R":return $.aY()
case"H":return $.co()
case"B":return $.bg()
case"Q":return $.aw()
case"K":return $.bv()
default:return $.a2()}},
lE:function(a){var u,t,s,r,q,p
if(a.length<1)return $.a2()
u=$.a2()
if(a[0]==="+"){t=$.bw()
s=u.a
t=t.a
if(typeof s!=="number")return s.M()
if(typeof t!=="number")return H.A(t)
r=new Q.u((s|t)>>>0)
a=C.b.bw(a,1)}else r=u
t=a.length
if(t<2)return u
s=Q.nm(a[0])
q=Q.nn(a[1])
s=s.a
q=q.a
if(typeof s!=="number")return s.M()
if(typeof q!=="number")return H.A(q)
p=r.a
if(typeof p!=="number")return p.M()
q=(p|s|q)>>>0
u=new Q.u(q)
if(t>2){t=P.o7(a[2])
s=$.bS().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
u=new Q.u((q|t&s)>>>0)}return u},
m:function m(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hF:function hF(){this.c=this.a=null},
hG:function hG(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
u:function u(a){this.a=a}},B={
mE:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
mF:function(a){var u=new B.bV(a)
u.cB(a)
return u},
lL:function(a,b){var u=new B.ip(a,b)
u.cG(a,b)
return u},
aO:function aO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ff:function ff(){this.b=this.a=null},
bV:function bV(a){var _=this
_.b=_.a=null
_.c=a
_.e=_.d=null},
fg:function fg(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fD:function fD(){this.b=this.a=null},
ip:function ip(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,Q,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kA.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gG:function(a){return H.cP(a)},
h:function(a){return"Instance of '"+H.cQ(a)+"'"}}
J.fO.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iY:1}
J.fP.prototype={
m:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.dE.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hj.prototype={}
J.d_.prototype={}
J.bm.prototype={
h:function(a){var u=a[$.mb()]
if(u==null)return this.cw(a)
return"JavaScript function for "+H.d(J.bi(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.aI.prototype={
i:function(a,b){H.H(b,H.y(a,0))
if(!!a.fixed$length)H.cj(P.be("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.cj(P.be("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bW(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.I(t,u,H.d(a[u]))
return t.join(b)},
eI:function(a){return this.u(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
ct:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aS(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aS(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gbj:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.lb())},
bV:function(a,b){var u,t
H.j(b,{func:1,ret:P.Y,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bW(a))}return!1},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
h:function(a){return P.kw(a,"[","]")},
gP:function(a){return new J.bj(a,a.length,[H.y(a,0)])},
gG:function(a){return H.cP(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.cj(P.be("set length"))
if(b<0)throw H.i(P.aS(b,0,null,"newLength",null))
a.length=b},
I:function(a,b,c){H.H(c,H.y(a,0))
if(!!a.immutable$list)H.cj(P.be("indexed set"))
if(b>=a.length||b<0)throw H.i(H.di(a,b))
a[b]=c},
$ik:1,
$ic:1}
J.kz.prototype={}
J.bj.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.an(s))
u=t.c
if(u>=r){t.sbI(null)
return!1}t.sbI(s[u]);++t.c
return!0},
sbI:function(a){this.d=H.H(a,H.y(this,0))},
$ibl:1}
J.cG.prototype={
aw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.be(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.be(""+a+".round()"))},
aS:function(a,b){var u,t
if(b>20)throw H.i(P.aS(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
W:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.be("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.e6(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
e6:function(a,b){return b>31?0:a>>>b},
$ia1:1,
$iah:1}
J.dD.prototype={$iB:1}
J.dC.prototype={}
J.bD.prototype={
al:function(a,b){if(b<0)throw H.i(H.di(a,b))
if(b>=a.length)H.cj(H.di(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(b>=a.length)throw H.i(H.di(a,b))
return a.charCodeAt(b)},
eJ:function(a,b,c){var u,t
if(c>b.length)throw H.i(P.aS(c,0,b.length,null,null))
u=a.length
if(c+u>b.length)return
for(t=0;t<u;++t)if(this.a3(b,c+t)!==this.a3(a,t))return
return new H.hR(c,a)},
V:function(a,b){if(typeof b!=="string")throw H.i(P.l1(b,null,null))
return a+b},
bv:function(a,b){var u
if(typeof b==="string"){u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)}return J.mB(b,a,0)!=null},
aH:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hm(b,null))
if(b>c)throw H.i(P.hm(b,null))
if(c>a.length)throw H.i(P.hm(c,null))
return a.substring(b,c)},
bw:function(a,b){return this.aH(a,b,null)},
f8:function(a){return a.toLowerCase()},
fb:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.a3(r,0)===133){u=J.mW(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.al(r,t)===133?J.ky(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
fc:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.al(u,s)===133)t=J.ky(u,s)}else{t=J.ky(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aP:function(a,b){var u=b-a.length
if(u<=0)return a
return this.C(" ",u)+a},
aQ:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.C(" ",u)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilp:1,
$ie:1}
H.a8.prototype={
gl:function(a){return this.a.length},
q:function(a,b){return C.b.al(this.a,b)},
$ae1:function(){return[P.B]},
$av:function(){return[P.B]},
$ak:function(){return[P.B]},
$ac:function(){return[P.B]}}
H.fu.prototype={}
H.c0.prototype={
gP:function(a){var u=this
return new H.cH(u,u.gl(u),[H.f_(u,"c0",0)])},
aU:function(a,b){return this.cv(0,H.j(b,{func:1,ret:P.Y,args:[H.f_(this,"c0",0)]}))}}
H.cH.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.kS(s),q=r.gl(s)
if(t.b!==q)throw H.i(P.bW(s))
u=t.c
if(u>=q){t.sbA(null)
return!1}t.sbA(r.B(s,u));++t.c
return!0},
sbA:function(a){this.d=H.H(a,H.y(this,0))},
$ibl:1}
H.h_.prototype={
gl:function(a){return J.dp(this.a)},
B:function(a,b){return this.b.$1(J.my(this.a,b))},
$ac0:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.e3.prototype={
gP:function(a){return new H.io(J.cq(this.a),this.b,this.$ti)}}
H.io.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.E(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bZ.prototype={}
H.e1.prototype={}
H.e0.prototype={}
H.i9.prototype={
Z:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hf.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fR.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.ic.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kp.prototype={
$1:function(a){if(!!J.Z(a).$ibA)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.eB.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iap:1}
H.cv.prototype={
h:function(a){return"Closure '"+H.cQ(this).trim()+"'"},
$ibC:1,
gfd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hU.prototype={}
H.hI.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.dl(u)+"'"}}
H.cs.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cs))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.f3(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.cQ(u)+"'")}}
H.e_.prototype={
h:function(a){return this.a}}
H.ht.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.iq.prototype={
h:function(a){return"Assertion failed: "+P.fy(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
gT:function(a){return new H.dG(this,[H.y(this,0)])},
ev:function(a,b){var u
if((b&0x3ffffff)===b){u=this.c
if(u==null)return!1
return this.cU(u,b)}else return this.eF(b)},
eF:function(a){var u=this.d
if(u==null)return!1
return this.bh(this.b5(u,C.d.gG(a)&0x3ffffff),a)>=0},
q:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aJ(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aJ(r,b)
s=t==null?null:t.b
return s}else return q.eG(b)},
eG:function(a){var u,t,s=this.d
if(s==null)return
u=this.b5(s,J.f3(a)&0x3ffffff)
t=this.bh(u,a)
if(t<0)return
return u[t].b},
I:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.y(o,0))
H.H(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.bC(u==null?o.b=o.b9():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bC(t==null?o.c=o.b9():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b9()
r=J.f3(b)&0x3ffffff
q=o.b5(s,r)
if(q==null)o.be(s,r,[o.ba(b,c)])
else{p=o.bh(q,b)
if(p>=0)q[p].b=c
else q.push(o.ba(b,c))}}},
L:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bW(s))
u=u.c}},
bC:function(a,b,c){var u,t=this
H.H(b,H.y(t,0))
H.H(c,H.y(t,1))
u=t.aJ(a,b)
if(u==null)t.be(a,b,t.ba(b,c))
else u.b=c},
df:function(){this.r=this.r+1&67108863},
ba:function(a,b){var u,t=this,s=new H.fU(H.H(a,H.y(t,0)),H.H(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.df()
return s},
bh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
h:function(a){return P.lh(this)},
aJ:function(a,b){return a[b]},
b5:function(a,b){return a[b]},
be:function(a,b,c){a[b]=c},
cY:function(a,b){delete a[b]},
cU:function(a,b){return this.aJ(a,b)!=null},
b9:function(){var u="<non-identifier-key>",t=Object.create(null)
this.be(t,u,t)
this.cY(t,u)
return t}}
H.fU.prototype={}
H.dG.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fV(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fV.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bW(t))
else{t=u.c
if(t==null){u.sbB(null)
return!1}else{u.sbB(t.a)
u.c=u.c.c
return!0}}},
sbB:function(a){this.d=H.H(a,H.y(this,0))},
$ibl:1}
H.kk.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.kl.prototype={
$2:function(a,b){return this.a(a,b)},
$S:24}
H.km.prototype={
$1:function(a){return this.a(H.D(a))},
$S:25}
H.fQ.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
$ilp:1}
H.hR.prototype={}
H.cM.prototype={}
H.dK.prototype={
gl:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cL.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]},
$abZ:function(){return[P.a1]},
$av:function(){return[P.a1]},
$ik:1,
$ak:function(){return[P.a1]},
$ic:1,
$ac:function(){return[P.a1]}}
H.dL.prototype={
$abZ:function(){return[P.B]},
$av:function(){return[P.B]},
$ik:1,
$ak:function(){return[P.B]},
$ic:1,
$ac:function(){return[P.B]}}
H.h7.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.h8.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.h9.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.ha.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hb.prototype={
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.dM.prototype={
gl:function(a){return a.length},
q:function(a,b){H.bL(b,a,a.length)
return a[b]}}
H.hc.prototype={
gl:function(a){return a.length},
q:function(a,b){H.bL(b,a,a.length)
return a[b]},
$ip4:1}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
P.is.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:5}
P.ir.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.it.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iu.prototype={
$0:function(){this.a.$0()},
$S:1}
P.j2.prototype={
cL:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.dh(new P.j3(this,b),0),a)
else throw H.i(P.be("`setTimeout()` not found."))}}
P.j3.prototype={
$0:function(){this.b.$0()},
$S:2}
P.fH.prototype={
$0:function(){var u,t,s
try{this.a.b_(this.b.$0())}catch(s){u=H.av(s)
t=H.bR(s)
$.X.toString
this.a.b0(u,t)}},
$S:1}
P.aX.prototype={
eK:function(a){if(this.c!==6)return!0
return this.b.b.bm(H.j(this.d,{func:1,ret:P.Y,args:[P.O]}),a.a,P.Y,P.O)},
eD:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.eY(u,{func:1,args:[P.O,P.ap]}))return H.kR(r.f5(u,a.a,a.b,null,t,P.ap),s)
else return H.kR(r.bm(H.j(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.as.prototype={
ci:function(a,b,c){var u,t,s,r=H.y(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.X
if(u!==C.e){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lR(b,u)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.as($.X,[c])
s=b==null?1:3
this.aY(new P.aX(t,s,a,b,[r,c]))
return t},
bn:function(a,b){return this.ci(a,null,b)},
aY:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.q(t.c,"$iaX")
t.c=a}else{if(s===2){u=H.q(t.c,"$ias")
s=u.a
if(s<4){u.aY(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j9(null,null,s,H.j(new P.iC(t,a),{func:1,ret:-1}))}},
bR:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.q(p.c,"$iaX")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.q(p.c,"$ias")
u=q.a
if(u<4){q.bR(a)
return}p.a=u
p.c=q.c}o.a=p.aL(a)
u=p.b
u.toString
P.j9(null,null,u,H.j(new P.iG(o,p),{func:1,ret:-1}))}},
bd:function(){var u=H.q(this.c,"$iaX")
this.c=null
return this.aL(u)},
aL:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
b_:function(a){var u,t,s=this,r=H.y(s,0)
H.kR(a,{futureOr:1,type:r})
u=s.$ti
if(H.kO(a,"$icD",u,"$acD"))if(H.kO(a,"$ias",u,null))P.lM(a,s)
else P.ns(a,s)
else{t=s.bd()
H.H(a,r)
s.a=4
s.c=a
P.d3(s,t)}},
b0:function(a,b){var u,t=this
H.q(b,"$iap")
u=t.bd()
t.a=8
t.c=new P.al(a,b)
P.d3(t,u)},
$icD:1}
P.iC.prototype={
$0:function(){P.d3(this.a,this.b)},
$S:1}
P.iG.prototype={
$0:function(){P.d3(this.b,this.a.a)},
$S:1}
P.iD.prototype={
$1:function(a){var u=this.a
u.a=0
u.b_(a)},
$S:5}
P.iE.prototype={
$2:function(a,b){H.q(b,"$iap")
this.a.b0(a,b)},
$1:function(a){return this.$2(a,null)},
$S:26}
P.iF.prototype={
$0:function(){this.a.b0(this.b,this.c)},
$S:1}
P.iJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ce(H.j(s.d,{func:1}),null)}catch(r){u=H.av(r)
t=H.bR(r)
if(o.d){s=H.q(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.q(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.Z(n).$icD){if(n instanceof P.as&&n.a>=4){if(n.a===8){s=o.b
s.b=H.q(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bn(new P.iK(p),null)
s.a=!1}},
$S:2}
P.iK.prototype={
$1:function(a){return this.a},
$S:28}
P.iI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.H(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.bm(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.bR(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:2}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.q(m.a.a.c,"$ial")
r=m.c
if(H.E(r.eK(u))&&r.e!=null){q=m.b
q.b=r.eD(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.bR(p)
r=H.q(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:2}
P.e4.prototype={}
P.hL.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.as($.X,[P.B])
r.a=0
u=H.y(s,0)
t=H.j(new P.hN(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.hO(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.hN.prototype={
$1:function(a){H.H(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.S,args:[H.y(this.b,0)]}}}
P.hO.prototype={
$0:function(){this.b.b_(this.a.a)},
$S:1}
P.cW.prototype={}
P.hM.prototype={}
P.al.prototype={
h:function(a){return H.d(this.a)},
$ibA:1}
P.j6.prototype={$ipi:1}
P.j8.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dO():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.h(0)
throw u},
$S:1}
P.iQ.prototype={
f6:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.e===$.X){a.$0()
return}P.lS(r,r,this,a,-1)}catch(s){u=H.av(s)
t=H.bR(s)
P.j7(r,r,this,u,H.q(t,"$iap"))}},
f7:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.e===$.X){a.$1(b)
return}P.lT(r,r,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.bR(s)
P.j7(r,r,this,u,H.q(t,"$iap"))}},
ep:function(a,b){return new P.iS(this,H.j(a,{func:1,ret:b}),b)},
bg:function(a){return new P.iR(this,H.j(a,{func:1,ret:-1}))},
eq:function(a,b){return new P.iT(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ce:function(a,b){H.j(a,{func:1,ret:b})
if($.X===C.e)return a.$0()
return P.lS(null,null,this,a,b)},
bm:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.X===C.e)return a.$1(b)
return P.lT(null,null,this,a,b,c,d)},
f5:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.X===C.e)return a.$2(b,c)
return P.nB(null,null,this,a,b,c,d,e,f)}}
P.iS.prototype={
$0:function(){return this.a.ce(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iR.prototype={
$0:function(){return this.a.f6(this.b)},
$S:2}
P.iT.prototype={
$1:function(a){var u=this.c
return this.a.f7(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iN.prototype={
gP:function(a){var u=this,t=new P.iO(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.q(u[b],"$icf")!=null}else{t=this.cT(b)
return t}},
cT:function(a){var u=this.d
if(u==null)return!1
return this.b4(this.bK(u,a),a)>=0},
i:function(a,b){var u,t,s=this
H.H(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bD(u==null?s.b=P.kI():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bD(t==null?s.c=P.kI():t,b)}else return s.cM(0,b)},
cM:function(a,b){var u,t,s,r=this
H.H(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.kI()
t=r.bG(b)
s=u[t]
if(s==null)u[t]=[r.aZ(b)]
else{if(r.b4(s,b)>=0)return!1
s.push(r.aZ(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dX(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bK(r,b)
t=s.b4(u,b)
if(t<0)return!1
s.bT(u.splice(t,1)[0])
return!0},
bD:function(a,b){H.H(b,H.y(this,0))
if(H.q(a[b],"$icf")!=null)return!1
a[b]=this.aZ(b)
return!0},
dX:function(a,b){var u
if(a==null)return!1
u=H.q(a[b],"$icf")
if(u==null)return!1
this.bT(u)
delete a[b]
return!0},
bF:function(){this.r=1073741823&this.r+1},
aZ:function(a){var u,t=this,s=new P.cf(H.H(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bF()
return s},
bT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bF()},
bG:function(a){return J.f3(a)&1073741823},
bK:function(a,b){return a[this.bG(b)]},
b4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1}}
P.cf.prototype={}
P.iO.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bW(t))
else{t=u.c
if(t==null){u.sbE(null)
return!1}else{u.sbE(H.H(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
sbE:function(a){this.d=H.H(a,H.y(this,0))},
$ibl:1}
P.fW.prototype={$ik:1,$ic:1}
P.v.prototype={
gP:function(a){return new H.cH(a,this.gl(a),[H.f0(this,a,"v",0)])},
B:function(a,b){return this.q(a,b)},
h:function(a){return P.kw(a,"[","]")}}
P.fY.prototype={}
P.fZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:9}
P.af.prototype={
L:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.f0(s,a,"af",0),H.f0(s,a,"af",1)]})
for(u=J.cq(s.gT(a));u.A();){t=u.gJ(u)
b.$2(t,s.q(a,t))}},
gl:function(a){return J.dp(this.gT(a))},
h:function(a){return P.lh(a)},
$iR:1}
P.iV.prototype={
a4:function(a,b){var u
for(u=J.cq(H.p(b,"$ik",this.$ti,"$ak"));u.A();)this.i(0,u.gJ(u))},
h:function(a){return P.kw(this,"{","}")},
$ik:1,
$ilA:1}
P.ej.prototype={}
P.cw.prototype={}
P.cx.prototype={}
P.fw.prototype={
$acw:function(){return[P.e,[P.c,P.B]]}}
P.fK.prototype={
h:function(a){return this.a}}
P.fJ.prototype={
cW:function(a,b,c){var u,t,s,r,q,p,o,n=null
for(u=a.length,t=this.a,s=t.e,r=t.d,t=t.c,q=b,p=n;q<c;++q){if(q>=u)return H.h(a,q)
switch(a[q]){case"&":o="&amp;"
break
case'"':o=t?"&quot;":n
break
case"'":o=r?"&#39;":n
break
case"<":o="&lt;"
break
case">":o="&gt;"
break
case"/":o=s?"&#47;":n
break
default:o=n}if(o!=null){if(p==null)p=new P.bH("")
if(q>b)p.a+=C.b.aH(a,b,q)
p.a+=o
b=q+1}}if(p==null)return
if(c>b)p.a+=C.b.aH(a,b,c)
u=p.a
return u.charCodeAt(0)==0?u:u},
$acx:function(){return[P.e,P.e]}}
P.ig.prototype={}
P.ih.prototype={
ew:function(a){var u,t,s=P.lw(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.j4(u)
if(t.d4(a,0,s)!==s)t.bU(C.b.al(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nx(0,t.b,u.length)))},
$acx:function(){return[P.e,[P.c,P.B]]}}
P.j4.prototype={
bU:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
d4:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.al(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.a3(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bU(r,C.b.a3(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.Y.prototype={}
P.aP.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aM(u,30))&1073741823},
h:function(a){var u=this,t=P.mK(H.nb(u)),s=P.dw(H.n9(u)),r=P.dw(H.n5(u)),q=P.dw(H.n6(u)),p=P.dw(H.n8(u)),o=P.dw(H.na(u)),n=P.mL(H.n7(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.a1.prototype={}
P.bX.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bX&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.ft(),q=this.a
if(q<0)return"-"+new P.bX(0-q).h(0)
u=r.$1(C.d.W(q,6e7)%60)
t=r.$1(C.d.W(q,1e6)%60)
s=new P.fs().$1(q%1e6)
return""+C.d.W(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.fs.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.ft.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bA.prototype={}
P.f7.prototype={
h:function(a){return"Assertion failed"}}
P.dO.prototype={
h:function(a){return"Throw of null."}}
P.b_.prototype={
gb3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb3()+o+u
if(!q.a)return t
s=q.gb2()
r=P.fy(q.b)
return t+s+": "+r}}
P.cb.prototype={
gb3:function(){return"RangeError"},
gb2:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fL.prototype={
gb3:function(){return"RangeError"},
gb2:function(){var u,t=H.au(this.b)
if(typeof t!=="number")return t.aq()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.id.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ib.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cV.prototype={
h:function(a){return"Bad state: "+this.a}}
P.fh.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fy(u)+"."}}
P.hi.prototype={
h:function(a){return"Out of Memory"},
$ibA:1}
P.dU.prototype={
h:function(a){return"Stack Overflow"},
$ibA:1}
P.fm.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.iB.prototype={
h:function(a){return"Exception: "+this.a}}
P.fF.prototype={
h:function(a){var u,t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.aH(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.bC.prototype={}
P.B.prototype={}
P.k.prototype={
aU:function(a,b){var u=H.f_(this,"k",0)
return new H.e3(this,H.j(b,{func:1,ret:P.Y,args:[u]}),[u])},
gl:function(a){var u,t=this.gP(this)
for(u=0;t.A();)++u
return u},
gaf:function(a){var u,t=this.gP(this)
if(!t.A())throw H.i(H.lb())
u=t.gJ(t)
if(t.A())throw H.i(H.mU())
return u},
B:function(a,b){var u,t,s
P.nf(b,"index")
for(u=this.gP(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.i(P.a_(b,this,"index",null,t))},
h:function(a){return P.mT(this,"(",")")}}
P.bl.prototype={}
P.c.prototype={$ik:1}
P.R.prototype={}
P.S.prototype={
gG:function(a){return P.O.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.ah.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
m:function(a,b){return this===b},
gG:function(a){return H.cP(this)},
h:function(a){return"Instance of '"+H.cQ(this)+"'"},
toString:function(){return this.h(this)}}
P.ap.prototype={}
P.e.prototype={$ilp:1}
P.bH.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.f4.prototype={
gl:function(a){return a.length}}
W.dq.prototype={
h:function(a){return String(a)},
$idq:1}
W.f6.prototype={
h:function(a){return String(a)}}
W.cr.prototype={$icr:1}
W.dr.prototype={}
W.bx.prototype={$ibx:1}
W.cu.prototype={
cp:function(a,b,c){var u=a.getContext(b,P.nW(c))
return u},
$icu:1}
W.by.prototype={
gl:function(a){return a.length}}
W.cy.prototype={$icy:1}
W.fi.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cz.prototype={
gl:function(a){return a.length}}
W.fj.prototype={}
W.b1.prototype={}
W.b2.prototype={}
W.fk.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.fn.prototype={
gl:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.fp.prototype={
h:function(a){return String(a)}}
W.dx.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.aJ,P.ah]]},
$av:function(){return[[P.aJ,P.ah]]},
$ik:1,
$ak:function(){return[[P.aJ,P.ah]]},
$ic:1,
$ac:function(){return[[P.aJ,P.ah]]},
$az:function(){return[[P.aJ,P.ah]]}}
W.dy.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gap(a))+" x "+H.d(this.gan(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iaJ)return!1
return a.left===u.gaO(b)&&a.top===u.gcm(b)&&this.gap(a)===u.gap(b)&&this.gan(a)===u.gan(b)},
gG:function(a){return W.lO(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gap(a)),C.c.gG(this.gan(a)))},
gan:function(a){return a.height},
gaO:function(a){return a.left},
gcm:function(a){return a.top},
gap:function(a){return a.width},
$iaJ:1,
$aaJ:function(){return[P.ah]}}
W.fq.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.e]},
$av:function(){return[P.e]},
$ik:1,
$ak:function(){return[P.e]},
$ic:1,
$ac:function(){return[P.e]},
$az:function(){return[P.e]}}
W.fr.prototype={
gl:function(a){return a.length}}
W.kH.prototype={
gl:function(a){return this.a.length},
q:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return H.H(u[b],H.y(this,0))}}
W.ae.prototype={
gen:function(a){return new W.ix(a)},
h:function(a){return a.localName},
X:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.l8
if(u==null){u=H.b([],[W.aB])
t=new W.dN(u)
C.a.i(u,W.lN(null))
C.a.i(u,W.lP())
$.l8=t
d=t}else d=u
u=$.l7
if(u==null){u=new W.eL(d)
$.l7=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.kv=t.createRange()
t=$.bk.createElement("base")
H.q(t,"$icr")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.q(t,"$ibx")}u=$.bk
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.I,a.tagName)){$.kv.selectNodeContents(s)
r=$.kv.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.l0(s)
c.bs(r)
document.adoptNode(r)
return r},
ey:function(a,b,c){return this.X(a,b,c,null)},
cs:function(a,b){a.textContent=null
a.appendChild(this.X(a,b,null,null))},
$iae:1,
gcf:function(a){return a.tagName}}
W.fv.prototype={
$1:function(a){return!!J.Z(H.q(a,"$iC")).$iae},
$S:31}
W.l.prototype={$il:1}
W.f.prototype={
ej:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.cN(a,b,c,!1)},
cN:function(a,b,c,d){return a.addEventListener(b,H.dh(H.j(c,{func:1,args:[W.l]}),1),!1)},
$if:1}
W.b3.prototype={$ib3:1}
W.fB.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b3]},
$av:function(){return[W.b3]},
$ik:1,
$ak:function(){return[W.b3]},
$ic:1,
$ac:function(){return[W.b3]},
$az:function(){return[W.b3]}}
W.fC.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
gl:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.fI.prototype={
gl:function(a){return a.length}}
W.cE.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$av:function(){return[W.C]},
$ik:1,
$ak:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$az:function(){return[W.C]}}
W.cF.prototype={$icF:1}
W.b5.prototype={$ib5:1}
W.dI.prototype={
h:function(a){return String(a)},
$idI:1}
W.h0.prototype={
gl:function(a){return a.length}}
W.h1.prototype={
q:function(a,b){return P.bs(a.get(H.D(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gT:function(a){var u=H.b([],[P.e])
this.L(a,new W.h2(u))
return u},
gl:function(a){return a.size},
$aaf:function(){return[P.e,null]},
$iR:1,
$aR:function(){return[P.e,null]}}
W.h2.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:6}
W.h3.prototype={
q:function(a,b){return P.bs(a.get(H.D(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gT:function(a){var u=H.b([],[P.e])
this.L(a,new W.h4(u))
return u},
gl:function(a){return a.size},
$aaf:function(){return[P.e,null]},
$iR:1,
$aR:function(){return[P.e,null]}}
W.h4.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:6}
W.b6.prototype={$ib6:1}
W.h5.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b6]},
$av:function(){return[W.b6]},
$ik:1,
$ak:function(){return[W.b6]},
$ic:1,
$ac:function(){return[W.b6]},
$az:function(){return[W.b6]}}
W.ac.prototype={$iac:1}
W.ar.prototype={
gaf:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.lB("No elements"))
if(t>1)throw H.i(P.lB("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s,r
H.p(b,"$ik",[W.C],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dB(u,u.length,[H.f0(C.L,u,"z",0)])},
gl:function(a){return this.a.childNodes.length},
q:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$av:function(){return[W.C]},
$ak:function(){return[W.C]},
$ac:function(){return[W.C]}}
W.C.prototype={
f1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.cu(a):u},
$iC:1}
W.cN.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$av:function(){return[W.C]},
$ik:1,
$ak:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$az:function(){return[W.C]}}
W.b7.prototype={$ib7:1,
gl:function(a){return a.length}}
W.hk.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b7]},
$av:function(){return[W.b7]},
$ik:1,
$ak:function(){return[W.b7]},
$ic:1,
$ac:function(){return[W.b7]},
$az:function(){return[W.b7]}}
W.hr.prototype={
q:function(a,b){return P.bs(a.get(H.D(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gT:function(a){var u=H.b([],[P.e])
this.L(a,new W.hs(u))
return u},
gl:function(a){return a.size},
$aaf:function(){return[P.e,null]},
$iR:1,
$aR:function(){return[P.e,null]}}
W.hs.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:6}
W.hu.prototype={
gl:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.hC.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b8]},
$av:function(){return[W.b8]},
$ik:1,
$ak:function(){return[W.b8]},
$ic:1,
$ac:function(){return[W.b8]},
$az:function(){return[W.b8]}}
W.b9.prototype={$ib9:1}
W.hD.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b9]},
$av:function(){return[W.b9]},
$ik:1,
$ak:function(){return[W.b9]},
$ic:1,
$ac:function(){return[W.b9]},
$az:function(){return[W.b9]}}
W.ba.prototype={$iba:1,
gl:function(a){return a.length}}
W.hJ.prototype={
q:function(a,b){return a.getItem(H.D(b))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gT:function(a){var u=H.b([],[P.e])
this.L(a,new W.hK(u))
return u},
gl:function(a){return a.length},
$aaf:function(){return[P.e,P.e]},
$iR:1,
$aR:function(){return[P.e,P.e]}}
W.hK.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:36}
W.aT.prototype={$iaT:1}
W.dV.prototype={
X:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aW(a,b,c,d)
u=W.mM("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).a4(0,new W.ar(u))
return t}}
W.hS.prototype={
X:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.X(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaf(u)
s.toString
u=new W.ar(s)
r=u.gaf(u)
t.toString
r.toString
new W.ar(t).a4(0,new W.ar(r))
return t}}
W.hT.prototype={
X:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aW(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.X(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaf(u)
t.toString
s.toString
new W.ar(t).a4(0,new W.ar(s))
return t}}
W.cX.prototype={$icX:1}
W.bb.prototype={$ibb:1}
W.aU.prototype={$iaU:1}
W.i0.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aU]},
$av:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ic:1,
$ac:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.i1.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.bb]},
$av:function(){return[W.bb]},
$ik:1,
$ak:function(){return[W.bb]},
$ic:1,
$ac:function(){return[W.bb]},
$az:function(){return[W.bb]}}
W.i3.prototype={
gl:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.aV.prototype={$iaV:1}
W.i6.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.bc]},
$av:function(){return[W.bc]},
$ik:1,
$ak:function(){return[W.bc]},
$ic:1,
$ac:function(){return[W.bc]},
$az:function(){return[W.bc]}}
W.i7.prototype={
gl:function(a){return a.length}}
W.bI.prototype={}
W.ie.prototype={
h:function(a){return String(a)}}
W.im.prototype={
gl:function(a){return a.length}}
W.bf.prototype={
geA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.be("deltaY is not supported"))},
gez:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.be("deltaX is not supported"))},
$ibf:1}
W.d1.prototype={
dZ:function(a,b){return a.requestAnimationFrame(H.dh(H.j(b,{func:1,ret:-1,args:[P.ah]}),1))},
cZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d2.prototype={$id2:1}
W.iw.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.V]},
$av:function(){return[W.V]},
$ik:1,
$ak:function(){return[W.V]},
$ic:1,
$ac:function(){return[W.V]},
$az:function(){return[W.V]}}
W.e7.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iaJ)return!1
return a.left===u.gaO(b)&&a.top===u.gcm(b)&&a.width===u.gap(b)&&a.height===u.gan(b)},
gG:function(a){return W.lO(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gan:function(a){return a.height},
gap:function(a){return a.width}}
W.iL.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b4]},
$av:function(){return[W.b4]},
$ik:1,
$ak:function(){return[W.b4]},
$ic:1,
$ac:function(){return[W.b4]},
$az:function(){return[W.b4]}}
W.eo.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$av:function(){return[W.C]},
$ik:1,
$ak:function(){return[W.C]},
$ic:1,
$ac:function(){return[W.C]},
$az:function(){return[W.C]}}
W.iY.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.ba]},
$av:function(){return[W.ba]},
$ik:1,
$ak:function(){return[W.ba]},
$ic:1,
$ac:function(){return[W.ba]},
$az:function(){return[W.ba]}}
W.iZ.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ic:1,
$ac:function(){return[W.aT]},
$az:function(){return[W.aT]}}
W.iv.prototype={
L:function(a,b){var u,t,s,r,q
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gT(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.an)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gT:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.e])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.q(r[t],"$id2")
if(s.namespaceURI==null)C.a.i(q,s.name)}return q},
$aaf:function(){return[P.e,P.e]},
$aR:function(){return[P.e,P.e]}}
W.ix.prototype={
q:function(a,b){return this.a.getAttribute(H.D(b))},
gl:function(a){return this.gT(this).length}}
W.iy.prototype={}
W.kG.prototype={}
W.iz.prototype={}
W.iA.prototype={
$1:function(a){return this.a.$1(H.q(a,"$il"))},
$S:22}
W.bK.prototype={
cH:function(a){var u
if($.ee.a===0){for(u=0;u<262;++u)$.ee.I(0,C.H[u],W.o2())
for(u=0;u<12;++u)$.ee.I(0,C.i[u],W.o3())}},
ak:function(a){return $.mt().O(0,W.cB(a))},
a5:function(a,b,c){var u=$.ee.q(0,H.d(W.cB(a))+"::"+b)
if(u==null)u=$.ee.q(0,"*::"+b)
if(u==null)return!1
return H.nU(u.$4(a,b,c,this))},
$iaB:1}
W.z.prototype={
gP:function(a){return new W.dB(a,this.gl(a),[H.f0(this,a,"z",0)])}}
W.dN.prototype={
ak:function(a){return C.a.bV(this.a,new W.he(a))},
a5:function(a,b,c){return C.a.bV(this.a,new W.hd(a,b,c))},
$iaB:1}
W.he.prototype={
$1:function(a){return H.q(a,"$iaB").ak(this.a)},
$S:15}
W.hd.prototype={
$1:function(a){return H.q(a,"$iaB").a5(this.a,this.b,this.c)},
$S:15}
W.ew.prototype={
cK:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.aU(0,new W.iW())
t=b.aU(0,new W.iX())
this.b.a4(0,u)
s=this.c
s.a4(0,C.J)
s.a4(0,t)},
ak:function(a){return this.a.O(0,W.cB(a))},
a5:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.O(0,H.d(t)+"::"+b))return u.d.el(c)
else if(s.O(0,"*::"+b))return u.d.el(c)
else{s=u.b
if(s.O(0,H.d(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.d(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$iaB:1}
W.iW.prototype={
$1:function(a){return!C.a.O(C.i,H.D(a))},
$S:16}
W.iX.prototype={
$1:function(a){return C.a.O(C.i,H.D(a))},
$S:16}
W.j0.prototype={
a5:function(a,b,c){if(this.cA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.j1.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.D(a))},
$S:37}
W.j_.prototype={
ak:function(a){var u=J.Z(a)
if(!!u.$icT)return!1
u=!!u.$in
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.b.bv(b,"on"))return!1
return this.ak(a)},
$iaB:1}
W.dB.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sbL(J.mw(u.a,t))
u.c=t
return!0}u.sbL(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sbL:function(a){this.d=H.H(a,H.y(this,0))},
$ibl:1}
W.aB.prototype={}
W.iU.prototype={$ip5:1}
W.eL.prototype={
bs:function(a){new W.j5(this).$2(a,null)},
au:function(a,b){if(b==null)J.l0(a)
else b.removeChild(a)},
e2:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mA(a)
n=o.a.getAttribute("is")
H.q(a,"$iae")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.av(r)}t="element unprintable"
try{t=J.bi(a)}catch(r){H.av(r)}try{s=W.cB(a)
this.e1(H.q(a,"$iae"),b,p,t,s,H.q(o,"$iR"),H.D(n))}catch(r){if(H.av(r) instanceof P.b_)throw r
else{this.au(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
e1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.au(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ak(a)){o.au(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a5(a,"is",g)){o.au(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gT(f)
t=H.b(u.slice(0),[H.y(u,0)])
for(s=f.gT(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.mC(r)
H.D(r)
if(!q.a5(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Z(a).$icX)o.bs(a.content)},
$ioD:1}
W.j5.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.e2(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.au(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.av(s)
r=H.q(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.q(t,"$iC")}},
$S:23}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
P.kh.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.iP.prototype={}
P.aJ.prototype={}
P.bn.prototype={$ibn:1}
P.fT.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.q(a,b)},
$av:function(){return[P.bn]},
$ik:1,
$ak:function(){return[P.bn]},
$ic:1,
$ac:function(){return[P.bn]},
$az:function(){return[P.bn]}}
P.bq.prototype={$ibq:1}
P.hg.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.q(a,b)},
$av:function(){return[P.bq]},
$ik:1,
$ak:function(){return[P.bq]},
$ic:1,
$ac:function(){return[P.bq]},
$az:function(){return[P.bq]}}
P.hl.prototype={
gl:function(a){return a.length}}
P.cT.prototype={$icT:1}
P.hQ.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.q(a,b)},
$av:function(){return[P.e]},
$ik:1,
$ak:function(){return[P.e]},
$ic:1,
$ac:function(){return[P.e]},
$az:function(){return[P.e]}}
P.n.prototype={
X:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aB])
C.a.i(p,W.lN(null))
C.a.i(p,W.lP())
C.a.i(p,new W.j_())
c=new W.eL(new W.dN(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.k).ey(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaf(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$in:1}
P.br.prototype={$ibr:1}
P.i8.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.q(a,b)},
$av:function(){return[P.br]},
$ik:1,
$ak:function(){return[P.br]},
$ic:1,
$ac:function(){return[P.br]},
$az:function(){return[P.br]}}
P.eh.prototype={}
P.ei.prototype={}
P.er.prototype={}
P.es.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.f8.prototype={
gl:function(a){return a.length}}
P.f9.prototype={
q:function(a,b){return P.bs(a.get(H.D(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
gT:function(a){var u=H.b([],[P.e])
this.L(a,new P.fa(u))
return u},
gl:function(a){return a.size},
$aaf:function(){return[P.e,null]},
$iR:1,
$aR:function(){return[P.e,null]}}
P.fa.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:6}
P.fb.prototype={
gl:function(a){return a.length}}
P.bU.prototype={}
P.hh.prototype={
gl:function(a){return a.length}}
P.e5.prototype={}
P.cS.prototype={$icS:1}
P.hE.prototype={
gl:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.a_(b,a,null,null,null))
return P.bs(a.item(b))},
B:function(a,b){return this.q(a,b)},
$av:function(){return[[P.R,,,]]},
$ik:1,
$ak:function(){return[[P.R,,,]]},
$ic:1,
$ac:function(){return[[P.R,,,]]},
$az:function(){return[[P.R,,,]]}}
P.ez.prototype={}
P.eA.prototype={}
O.bz.prototype={
bt:function(a,b){var u=this,t={func:1,ret:-1,args:[P.B,[P.k,H.y(u,0)]]}
H.j(a,t)
H.j(b,t)
u.sbP(null)
u.sbM(a)
u.sbQ(b)},
bO:function(a){H.p(a,"$ik",this.$ti,"$ak")
return!0},
dg:function(a,b){var u
H.p(b,"$ik",this.$ti,"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.bj(u,u.length,[H.y(u,0)])},
i:function(a,b){var u,t,s,r=this
H.H(b,H.y(r,0))
u=r.$ti
if(H.E(r.bO(H.b([b],u)))){t=r.a
s=t.length
C.a.i(t,b)
r.dg(s,H.b([b],u))}},
sdd:function(a){this.a=H.p(a,"$ic",this.$ti,"$ac")},
sbP:function(a){this.b=H.j(a,{func:1,ret:P.Y,args:[[P.k,H.y(this,0)]]})},
sbM:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.B,[P.k,H.y(this,0)]]})},
sbQ:function(a){H.j(a,{func:1,ret:-1,args:[P.B,[P.k,H.y(this,0)]]})},
$ik:1}
O.cI.prototype={
gl:function(a){return this.a.length},
gE:function(){var u=this.b
return u==null?this.b=D.bY():u},
ag:function(){var u=this.b
if(u!=null)u.av(null)},
gaz:function(a){var u=this.a
if(u.length>0)return C.a.gbj(u)
else return V.aR()},
c9:function(a){var u=this.a
if(a==null)C.a.i(u,V.aR())
else C.a.i(u,a)
this.ag()},
bl:function(){var u=this.a
if(u.length>0){u.pop()
this.ag()}},
sb7:function(a){this.a=H.p(a,"$ic",[V.bE],"$ac")}}
E.fc.prototype={}
E.a9.prototype={
sbu:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
if(r!=null)r.gE().R(0,s.gc5())
u=s.c
if(u!=null)u.gE().i(0,s.gc5())
t=new D.aC("shape",r,s.c,[F.dT])
t.b=!0
s.ac(t)}},
saA:function(a){var u,t,s=this
if(!J.J(s.r,a)){u=s.r
if(u!=null)u.gE().R(0,s.gc3())
if(a!=null)a.gE().i(0,s.gc3())
s.r=a
t=new D.aC("mover",u,a,[U.cK])
t.b=!0
s.ac(t)}},
cn:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.J(q,s.x)){u=s.x
s.x=q
t=new D.aC("matrix",u,q,[V.bE])
t.b=!0
s.ac(t)}for(r=s.y.a,r=new J.bj(r,r.length,[H.y(r,0)]);r.A();)r.d.cn(0,b)},
aR:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.i(u.a,u.gaz(u))
else C.a.i(u.a,t.C(0,u.gaz(u)))
u.ag()
a.ca(r.f)
u=a.dy
s=(u&&C.a).gbj(u)
if(s!=null&&r.d!=null)s.f2(a,r)
for(u=r.y.a,u=new J.bj(u,u.length,[H.y(u,0)]);u.A();)u.d.aR(a)
a.c7()
a.dx.bl()},
ac:function(a){var u=this.z
if(u!=null)u.av(a)},
c0:function(){return this.ac(null)},
c6:function(a){this.ac(H.q(a,"$iQ"))},
eT:function(){return this.c6(null)},
c4:function(a){this.ac(H.q(a,"$iQ"))},
eS:function(){return this.c4(null)},
c2:function(a){this.ac(H.q(a,"$iQ"))},
eP:function(){return this.c2(null)},
eO:function(a,b){var u,t,s,r,q,p,o
H.p(b,"$ik",[E.a9],"$ak")
for(u=b.length,t=this.gc1(),s={func:1,ret:-1,args:[D.Q]},r=[s],q=0;q<b.length;b.length===u||(0,H.an)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cC()
o.sah(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sah(H.b([],r))
o=o.a;(o&&C.a).i(o,t)}}this.c0()},
eR:function(a,b){var u,t
H.p(b,"$ik",[E.a9],"$ak")
for(u=b.gP(b),t=this.gc1();u.A();)u.gJ(u).gE().R(0,t)
this.c0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
scQ:function(a,b){this.y=H.p(b,"$ibz",[E.a9],"$abz")},
$iln:1}
E.hn.prototype={
cC:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aP(Date.now(),!1)
u=new O.cI()
t=[V.bE]
u.sb7(H.b([],t))
u.b=null
u.gE().i(0,new E.ho(s))
s.cy=u
u=new O.cI()
u.sb7(H.b([],t))
u.b=null
u.gE().i(0,new E.hp(s))
s.db=u
u=new O.cI()
u.sb7(H.b([],t))
u.b=null
u.gE().i(0,new E.hq(s))
s.dx=u
s.sea(H.b([],[O.cc]))
u=s.dy;(u&&C.a).i(u,null)
s.se5(new H.aQ([P.e,A.dS]))},
ca:function(a){var u=this.dy,t=a==null?(u&&C.a).gbj(u):a;(u&&C.a).i(u,t)},
c7:function(){var u=this.dy
if(u.length>1)u.pop()},
sea:function(a){this.dy=H.p(a,"$ic",[O.cc],"$ac")},
se5:function(a){H.p(a,"$iR",[P.e,A.dS],"$aR")}}
E.ho.prototype={
$1:function(a){H.q(a,"$iQ")},
$S:10}
E.hp.prototype={
$1:function(a){H.q(a,"$iQ")},
$S:10}
E.hq.prototype={
$1:function(a){H.q(a,"$iQ")},
$S:10}
E.dX.prototype={
bz:function(a){H.q(a,"$iQ")
if(this.Q)this.cc()},
aX:function(){return this.bz(null)},
bS:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.A(r)
u=C.c.aw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.C()
t=C.c.aw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.dY(C.f,s.gf3())}},
cc:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.i2(this),{func:1,ret:-1,args:[P.ah]})
C.r.cZ(u)
C.r.dZ(u,W.lV(t,P.ah))}},
cb:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.bS()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aP(r,!1)
P.ku(r-s.r.a,0)
r=s.cy
C.a.sl(r.a,0)
r.ag()
r=s.db
C.a.sl(r.a,0)
r.ag()
r=s.dx
C.a.sl(r.a,0)
r.ag()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).i(s,null)
o.aR(p.e)}}catch(q){u=H.av(q)
t=H.bR(q)
P.m5("Error: "+H.d(u))
P.m5("Stack: "+H.d(t))
throw H.i(u)}}}
E.i2.prototype={
$1:function(a){var u
H.oe(a)
u=this.a
if(u.ch){u.ch=!1
u.cb()}},
$S:27}
Z.aK.prototype={
em:function(a){var u,t=$.az(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ay()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ax()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ao()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aF()
if((s&t.a)!==0)if(u===a)return t
return $.kr()},
eE:function(a,b){var u,t=$.az(),s=this.a
if((s&t.a)!==0){if(J.J(b,t))return 0
u=1}else u=0
t=$.ay()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.ax()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.ao()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aN()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aM()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aZ()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aG()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aF()
if((s&t.a)!==0)if(J.J(b,t))return u
return-1},
eM:function(a,b){var u,t=$.az(),s=this.a
if((s&t.a)!==0){if(J.J(b,t))return 0
u=3}else u=0
t=$.ay()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=3}t=$.ax()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=3}t=$.ao()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=2}t=$.aN()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=3}t=$.aM()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=3}t=$.aZ()
if((s&t.a)!==0){if(J.J(b,t))return u
u+=4}t=$.aG()
if((s&t.a)!==0){if(J.J(b,t))return u;++u}t=$.aF()
if((s&t.a)!==0)if(J.J(b,t))return u
return-1},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aK))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.e]),t=this.a
if((t&$.az().a)!==0)C.a.i(u,"Pos")
if((t&$.ay().a)!==0)C.a.i(u,"Norm")
if((t&$.ax().a)!==0)C.a.i(u,"Binm")
if((t&$.ao().a)!==0)C.a.i(u,"Txt2D")
if((t&$.aN().a)!==0)C.a.i(u,"TxtCube")
if((t&$.aM().a)!==0)C.a.i(u,"Clr3")
if((t&$.aZ().a)!==0)C.a.i(u,"Clr4")
if((t&$.aG().a)!==0)C.a.i(u,"Weight")
if((t&$.aF().a)!==0)C.a.i(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fe.prototype={}
D.cC.prototype={
i:function(a,b){var u={func:1,ret:-1,args:[D.Q]}
H.j(b,u)
if(this.a==null)this.sah(H.b([],[u]))
u=this.a;(u&&C.a).i(u,b)},
R:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.Q]})
u=s.a
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
av:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.n_(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.fz(q))
u=r.b
if(u!=null){r.saK(H.b([],[{func:1,ret:-1,args:[D.Q]}]))
C.a.L(u,new D.fA(q))}return!0},
sah:function(a){this.a=H.p(a,"$ic",[{func:1,ret:-1,args:[D.Q]}],"$ac")},
saK:function(a){this.b=H.p(a,"$ic",[{func:1,ret:-1,args:[D.Q]}],"$ac")}}
D.fz.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.Q]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fA.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.Q]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.Q.prototype={}
D.fM.prototype={}
D.fN.prototype={}
D.aC.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.ds.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.dF.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.fS.prototype={
eY:function(a){this.d.i(0,a.a)
return!1},
eU:function(a){this.d.R(0,a.a)
return!1},
sdV:function(a){this.d=H.p(a,"$ilA",[P.B],"$alA")}}
X.fX.prototype={
bk:function(a,b){this.r=a.a
return!1},
aC:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cr()
if(typeof u!=="number")return u.v()
this.r=(u&~t)>>>0
return!1},
aB:function(a,b){return!1},
eZ:function(a){return!1},
dE:function(a,b,c){return}}
X.cJ.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.cJ))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.h6.prototype={
bk:function(a,b){this.f=a.a
return!1},
aC:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cr()
if(typeof u!=="number")return u.v()
this.f=(u&~t)>>>0
return!1},
aB:function(a,b){return!1},
f_:function(a,b){return!1}}
X.i5.prototype={
eX:function(a){H.p(a,"$ic",[V.a6],"$ac")
return!1},
eV:function(a){H.p(a,"$ic",[V.a6],"$ac")
return!1},
eW:function(a){H.p(a,"$ic",[V.a6],"$ac")
return!1}}
X.e2.prototype={
bH:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dF(u,new X.cJ(t,a.altKey,a.shiftKey))},
aj:function(a){if(!H.E(a.ctrlKey))H.E(a.metaKey)
a.shiftKey},
bf:function(a){if(!H.E(a.ctrlKey))H.E(a.metaKey)
a.shiftKey},
aa:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.as()
u=t.top
if(typeof r!=="number")return r.as()
return new V.a6(s-q,r-u)},
at:function(a){return new V.ad(a.movementX,a.movementY)},
bc:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.an)(u),++s){r=u[s]
q=C.c.a0(r.pageX)
C.c.a0(r.pageY)
p=o.left
C.c.a0(r.pageX)
C.a.i(n,new V.a6(q-p,C.c.a0(r.pageY)-o.top))}return n},
a8:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.ds(u,new X.cJ(t,a.altKey,a.shiftKey))},
b8:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.as()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.as()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dz:function(a){this.f=!0},
di:function(a){this.f=!1},
dr:function(a){H.q(a,"$iac")
if(H.E(this.f)&&this.b8(a))a.preventDefault()},
dD:function(a){var u
H.q(a,"$ib5")
if(!H.E(this.f))return
u=this.bH(a)
this.b.eY(u)},
dB:function(a){var u
H.q(a,"$ib5")
if(!H.E(this.f))return
u=this.bH(a)
this.b.eU(u)},
dG:function(a){var u,t,s,r,q=this
H.q(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aj(a)
if(H.E(q.x)){t=q.a8(a)
s=q.at(a)
if(q.d.bk(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.a8(a)
r=q.aa(a)
if(q.c.bk(t,r))a.preventDefault()},
dK:function(a){var u,t,s,r=this
H.q(a,"$iac")
r.aj(a)
u=r.a8(a)
if(H.E(r.x)){t=r.at(a)
if(r.d.aC(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aa(a)
if(r.c.aC(u,s))a.preventDefault()},
dv:function(a){var u,t,s,r=this
H.q(a,"$iac")
if(!r.b8(a)){r.aj(a)
u=r.a8(a)
if(H.E(r.x)){t=r.at(a)
if(r.d.aC(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aa(a)
if(r.c.aC(u,s))a.preventDefault()}},
dI:function(a){var u,t,s,r=this
H.q(a,"$iac")
r.aj(a)
u=r.a8(a)
if(H.E(r.x)){t=r.at(a)
if(r.d.aB(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aa(a)
if(r.c.aB(u,s))a.preventDefault()},
dt:function(a){var u,t,s,r=this
H.q(a,"$iac")
if(!r.b8(a)){r.aj(a)
u=r.a8(a)
if(H.E(r.x)){t=r.at(a)
if(r.d.aB(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aa(a)
if(r.c.aB(u,s))a.preventDefault()}},
dM:function(a){var u,t,s=this
H.q(a,"$ibf")
s.aj(a)
u=new V.ad((a&&C.q).gez(a),C.q.geA(a)).a1(0,180)
if(H.E(s.x)){if(s.d.eZ(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aa(a)
if(s.c.f_(u,t))a.preventDefault()},
dO:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a8(s.y)
t=s.aa(s.y)
s.d.dE(u,t,r)}},
dU:function(a){var u,t=this
H.q(a,"$iaV")
t.a.focus()
t.f=!0
t.bf(a)
u=t.bc(a)
if(t.e.eX(u))a.preventDefault()},
dQ:function(a){var u
H.q(a,"$iaV")
this.bf(a)
u=this.bc(a)
if(this.e.eV(u))a.preventDefault()},
dS:function(a){var u
H.q(a,"$iaV")
this.bf(a)
u=this.bc(a)
if(this.e.eW(u))a.preventDefault()},
sd_:function(a){this.z=H.p(a,"$ic",[[P.cW,P.O]],"$ac")}}
V.du.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.fx.prototype={}
V.ai.prototype={
m:function(a,b){if(b==null)return!1
if(!(b instanceof V.ai))return!1
return this.a===b.a},
h:function(a){var u,t,s
$.kq()
$.md()
u=H.b([],[P.e])
t=this.a
s=$.cl().a
if((t&s)===s)C.a.i(u,"XPos")
s=$.me().a
if((t&s)===s)C.a.i(u,"XCenter")
s=$.ck().a
if((t&s)===s)C.a.i(u,"XNeg")
s=$.cm().a
if((t&s)===s)C.a.i(u,"YPos")
s=$.mf().a
if((t&s)===s)C.a.i(u,"YCenter")
s=$.dm().a
if((t&s)===s)C.a.i(u,"YNeg")
s=$.dn().a
if((t&s)===s)C.a.i(u,"ZPos")
s=$.mg().a
if((t&s)===s)C.a.i(u,"ZCenter")
s=$.cn().a
if((t&s)===s)C.a.i(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
V.aH.prototype={
h:function(a){return H.d(this.a)+" "+H.d(this.b)}}
V.a3.prototype={
aE:function(a){var u=this,t=H.b([u.a,u.b,u.c,u.d],[P.a1])
return t},
U:function(a){var u,t=this,s=t.a,r=t.d,q=t.b,p=t.c,o=s*r-q*p
if(Math.abs(o-0)<$.M().a)return V.c2()
u=1/o
return new V.a3(r*u,-q*u,-p*u,s*u)},
C:function(a,b){var u=this,t=u.a,s=b.a,r=u.b,q=b.c,p=b.b,o=b.d,n=u.c,m=u.d
return new V.a3(t*s+r*q,t*p+r*o,n*s+m*q,n*p+m*o)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){return this.F()},
n:function(a){var u,t,s=this,r=[P.a1],q=V.bt(H.b([s.a,s.c],r),3,0),p=V.bt(H.b([s.b,s.d],r),3,0)
r=q.length
if(0>=r)return H.h(q,0)
u="["+q[0]+", "
t=p.length
if(0>=t)return H.h(p,0)
u=u+p[0]+",\n"+a+" "
if(1>=r)return H.h(q,1)
u=u+q[1]+", "
if(1>=t)return H.h(p,1)
return u+p[1]+"]"},
F:function(){return this.n("")}}
V.W.prototype={
aE:function(a){var u=this,t=H.b([u.a,u.b,u.c,u.d,u.e,u.f,u.r,u.x,u.y],[P.a1])
return t},
U:function(a){var u,t=this,s=t.a,r=t.e,q=t.y,p=r*q,o=t.f,n=t.x,m=t.d,l=t.b,k=l*q,j=t.c,i=n*j,h=t.r,g=l*o-r*j,f=s*(p-o*n)-m*(k-i)+h*g
if(Math.abs(f-0)<$.M().a)return V.c6()
u=1/f
return new V.W((p-n*o)*u,(i-k)*u,g*u,(h*o-m*q)*u,(s*q-h*j)*u,(m*j-s*o)*u,(m*n-h*r)*u,(h*l-s*n)*u,(s*r-m*l)*u)},
C:function(a,b){var u=this,t=u.a,s=b.a,r=u.b,q=b.d,p=u.c,o=b.r,n=b.b,m=b.e,l=b.x,k=b.c,j=b.f,i=b.y,h=u.d,g=u.e,f=u.f,e=u.r,d=u.x,c=u.y
return new V.W(t*s+r*q+p*o,t*n+r*m+p*l,t*k+r*j+p*i,h*s+g*q+f*o,h*n+g*m+f*l,h*k+g*j+f*i,e*s+d*q+c*o,e*n+d*m+c*l,e*k+d*j+c*i)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
h:function(a){return this.F()},
n:function(a){var u,t,s,r,q=this,p=[P.a1],o=V.bt(H.b([q.a,q.d,q.r],p),3,0),n=V.bt(H.b([q.b,q.e,q.x],p),3,0),m=V.bt(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
r=a+" "
if(1>=p)return H.h(o,1)
r=r+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
u=a+" "
if(2>=p)return H.h(o,2)
u=u+o[2]+", "
if(2>=t)return H.h(n,2)
u=u+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(u+m[2]+"]")},
F:function(){return this.n("")}}
V.bE.prototype={
aE:function(a){var u=this,t=H.b([u.a,u.b,u.c,u.d,u.e,u.f,u.r,u.x,u.y,u.z,u.Q,u.ch,u.cx,u.cy,u.db,u.dx],[P.a1])
return t},
U:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.aR()
u=1/b1
t=-n
s=-a0
return V.U((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
C:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.U(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aT:function(a){var u=this,t=a.a,s=a.b,r=a.c,q=a.d
return new V.bF(u.a*t+u.b*s+u.c*r+u.d*q,u.e*t+u.f*s+u.r*r+u.x*q,u.y*t+u.z*s+u.Q*r+u.ch*q,u.cx*t+u.cy*s+u.db*r+u.dx*q)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bE))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
h:function(a){return this.F()},
n:function(a){var u,t,s,r,q,p=this,o=[P.a1],n=V.bt(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bt(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bt(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bt(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
F:function(){return this.n("")}}
V.a6.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.w.prototype={
a1:function(a,b){if(Math.abs(b-0)<$.M().a)return V.lt()
return new V.w(this.a/b,this.b/b,this.c/b)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return this.F()},
Y:function(a,b){return"["+V.L(this.a,a,b)+", "+V.L(this.b,a,b)+", "+V.L(this.c,a,b)+"]"},
F:function(){return this.Y(3,0)}}
V.bF.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){return this.F()},
Y:function(a,b){var u=this
return"["+V.L(u.a,a,b)+", "+V.L(u.b,a,b)+", "+V.L(u.c,a,b)+", "+V.L(u.d,a,b)+"]"},
F:function(){return this.Y(3,0)}}
V.cR.prototype={
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cR))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.bG.prototype={
bW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(c==null)c=$.kq()
u=$.bu()
t=b.a
if(t!==0){if(t>0){s=$.ck()
r=c.a
q=s.a
if((r&q)===q){r=a.a-(f.a+f.d)
p=Math.abs(r)<$.M().a?0:r/t
o=!0}else{s=e
p=s
o=!1}}else{s=$.cl()
r=c.a
q=s.a
if((r&q)===q){r=a.a+a.d-f.a
p=Math.abs(r)<$.M().a?0:r/t
o=!0}else{s=e
p=s
o=!1}}if(o){if(typeof p!=="number")return p.aq()
r=p<100&&p>=0&&p<=1}else r=!1
if(r){r=b.b
if(typeof p!=="number")return H.A(p)
n=f.b+r*p
r=a.b
q=$.M().a
if(n-q<r+a.e&&r-q<n+f.e){m=f.c+b.c*p
r=a.c
if(m-q<r+a.f&&r-q<m+f.f){l=s
k=p}else{l=u
k=100}}else{l=u
k=100}}else{l=u
k=100}}else{s=e
l=u
p=s
k=100}r=b.b
if(r!==0){if(r>0){j=$.dm()
q=c.a
i=j.a
if((q&i)===i){q=a.b-(f.b+f.e)
p=Math.abs(q)<$.M().a?0:q/r
s=j
o=!0}else o=!1}else{j=$.cm()
q=c.a
i=j.a
if((q&i)===i){q=a.b+a.e-f.b
p=Math.abs(q)<$.M().a?0:q/r
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.aq()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.A(p)
h=f.a+t*p
q=a.a
i=$.M().a
if(h-i<q+a.d&&q-i<h+f.d){m=f.c+b.c*p
q=a.c
if(m-i<q+a.f&&q-i<m+f.f){l=s
k=p}}}}q=b.c
if(q!==0){if(q>0){j=$.cn()
i=c.a
g=j.a
if((i&g)===g){i=a.c-(f.c+f.f)
p=Math.abs(i)<$.M().a?0:i/q
s=j
o=!0}else o=!1}else{j=$.dn()
i=c.a
g=j.a
if((i&g)===g){i=a.c+a.f-f.c
p=Math.abs(i)<$.M().a?0:i/q
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.aq()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.A(p)
h=f.a+t*p
t=a.a
q=$.M().a
if(h-q<t+a.d&&t-q<h+f.d){n=f.b+r*p
t=a.b
if(n-q<t+a.e&&t-q<n+f.e){l=s
k=p}}}}if(J.J(l,u))return
return new V.aH(k,l)},
es:function(a,b){return this.bW(a,b,null)},
bp:function(a,b){var u=this
return V.N(u.a+b.a,u.b+b.b,u.c+b.c,u.d,u.e,u.f)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bG))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+", "+V.L(u.e,3,0)+", "+V.L(u.f,3,0)+"]"}}
V.ad.prototype={
ay:function(a){var u,t=this.a
if(typeof t!=="number")return t.C()
u=this.b
if(typeof u!=="number")return u.C()
return Math.sqrt(t*t+u*u)},
a1:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.lH
return u==null?$.lH=new V.ad(0,0):u}u=this.a
if(typeof u!=="number")return u.a1()
t=this.b
if(typeof t!=="number")return t.a1()
return new V.ad(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.as()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.as()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.F.prototype={
ay:function(a){return Math.sqrt(this.am(this))},
am:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bX:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
aV:function(a){return new V.F(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
a1:function(a,b){var u
if(Math.abs(b-0)<$.M().a){u=$.lK
return u==null?$.lK=new V.F(0,0,0):u}return new V.F(this.a/b,this.b/b,this.c/b)},
eH:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.bJ.prototype={
ay:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bJ))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
U.dv.prototype={
gE:function(){var u=this.b
return u==null?this.b=D.bY():u},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.J(this.a,b.a)},
h:function(a){return"Constant: "+this.a.n("          ")}}
U.cK.prototype={}
M.dz.prototype={
a7:function(a){var u
H.q(a,"$iQ")
u=this.y
if(u!=null)u.av(a)},
cJ:function(){return this.a7(null)},
dl:function(a,b){var u,t,s,r,q,p,o,n=E.a9
H.p(b,"$ik",[n],"$ak")
for(u=b.length,t=this.ga2(),s={func:1,ret:-1,args:[D.Q]},r=[s],q=0;q<b.length;b.length===u||(0,H.an)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cC()
o.sah(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sah(H.b([],r))
o=o.a;(o&&C.a).i(o,t)}}n=new D.fM([n])
n.b=!0
this.a7(n)},
dn:function(a,b){var u,t,s=E.a9
H.p(b,"$ik",[s],"$ak")
for(u=b.gP(b),t=this.ga2();u.A();)u.gJ(u).gE().R(0,t)
s=new D.fN([s])
s.b=!0
this.a7(s)},
scg:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gE().R(0,t.ga2())
u=t.d
t.d=a
if(a!=null)a.gE().i(0,t.ga2())
s=new D.aC("technique",u,t.d,[O.cc])
s.b=!0
t.a7(s)}},
gE:function(){var u=this.y
return u==null?this.y=D.bY():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ca(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.A(s)
o=C.c.a0(p*s)
p=q.b
if(typeof r!=="number")return H.A(r)
n=C.c.a0(p*r)
p=C.c.a0(q.c*s)
a2.c=p
q=C.c.a0(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.U(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.c9(i)
t=$.lq
if(t==null){t=V.lt()
q=$.lJ
if(q==null)q=$.lJ=new V.F(0,1,0)
p=$.lI
if(p==null)p=$.lI=new V.F(0,0,-1)
h=p.a1(0,Math.sqrt(p.am(p)))
q=q.bX(h)
g=q.a1(0,Math.sqrt(q.am(q)))
f=h.bX(g)
e=new V.F(t.a,t.b,t.c)
d=g.aV(0).am(e)
c=f.aV(0).am(e)
b=h.aV(0).am(e)
t=V.U(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lq=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.C(0,a)}a2.db.c9(a)
for(u=a1.e.a,u=new J.bj(u,u.length,[H.y(u,0)]);u.A();)u.d.cn(0,a2)
for(u=a1.e.a,u=new J.bj(u,u.length,[H.y(u,0)]);u.A();)u.d.aR(a2)
a1.b.toString
a2.cy.bl()
a2.db.bl()
a1.c.toString
a2.c7()},
scI:function(a,b){this.e=H.p(b,"$ibz",[E.a9],"$abz")},
$ioE:1}
A.dS.prototype={}
F.bB.prototype={}
F.c_.prototype={}
F.cO.prototype={}
F.dT.prototype={
gE:function(){var u=this.e
return u==null?this.e=D.bY():u},
h:function(a){var u=this,t=H.b([],[P.e])
if(u.a.c.length!==0){C.a.i(t,"Vertices:")
C.a.i(t,u.a.n("   "))}u.b.b
u.c.b
u.d.b
return C.a.u(t,"\n")},
$ioF:1}
F.hw.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
n:function(a){var u,t,s=H.b([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(a))}return C.a.u(s,"\n")},
F:function(){return this.n("")},
sd0:function(a){this.b=H.p(a,"$ic",[F.bB],"$ac")}}
F.hx.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
n:function(a){var u,t,s=H.b([],[P.e])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.h(t,u)
C.a.i(s,t[u].n(a+(""+u+". ")))}return C.a.u(s,"\n")},
F:function(){return this.n("")},
sd9:function(a){this.b=H.p(a,"$ic",[F.c_],"$ac")}}
F.hy.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
n:function(a){var u,t,s=H.b([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(a))}return C.a.u(s,"\n")},
F:function(){return this.n("")},
sbb:function(a){this.b=H.p(a,"$ic",[F.cO],"$ac")}}
F.d0.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.F()},
n:function(a){var u,t,s="-",r=H.b([],[P.e])
C.a.i(r,C.b.aP(J.bi(this.e),0))
u=this.f
if(u!=null)C.a.i(r,u.h(0))
else C.a.i(r,s)
C.a.i(r,s)
C.a.i(r,s)
C.a.i(r,s)
C.a.i(r,s)
C.a.i(r,s)
C.a.i(r,V.L(this.ch,3,0))
C.a.i(r,s)
t=C.a.u(r,", ")
return a+"{"+t+"}"},
F:function(){return this.n("")}}
F.ii.prototype={
eg:function(){},
i:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.dA("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.i(t,b)
u=u.e
if(u!=null)u.av(null)
return!0},
gl:function(a){return this.c.length},
h:function(a){return this.F()},
n:function(a){var u,t,s,r
this.eg()
u=H.b([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.an)(t),++r)C.a.i(u,t[r].n(a))
return C.a.u(u,"\n")},
F:function(){return this.n("")},
seh:function(a){this.c=H.p(a,"$ic",[F.d0],"$ac")}}
F.ij.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
F:function(){var u,t,s=H.b([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}for(u=this.d,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}return C.a.u(s,"\n")},
sd1:function(a){this.b=H.p(a,"$ic",[F.bB],"$ac")},
sd2:function(a){this.c=H.p(a,"$ic",[F.bB],"$ac")},
sd3:function(a){this.d=H.p(a,"$ic",[F.bB],"$ac")}}
F.ik.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
F:function(){var u,t,s=H.b([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}return C.a.u(s,"\n")},
sda:function(a){this.b=H.p(a,"$ic",[F.c_],"$ac")},
sdc:function(a){this.c=H.p(a,"$ic",[F.c_],"$ac")}}
F.il.prototype={
gl:function(a){return 0},
h:function(a){return this.F()},
F:function(){var u,t,s=H.b([],[P.e])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.h(u,t)
C.a.i(s,u[t].n(""))}return C.a.u(s,"\n")},
sbb:function(a){this.b=H.p(a,"$ic",[F.cO],"$ac")}}
O.fo.prototype={
gE:function(){var u=this.c
return u==null?this.c=D.bY():u},
f2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i="            ",h=a.cy,g=h.gaz(h)
h=a.db
u=h.gaz(h)
h=a.dx
t=h.gaz(h)
h=this.a
h.a+="Object:     "+t.n(i)+"\n\n"
h.a+="View:       "+u.n(i)+"\n\n"
h.a+="Projection: "+g.n(i)+"\n\n"
C.a.sl(this.b,0)
s=b.c
if(s!=null){r=s.a
q=r.c.length
for(p=0;p<q;++p){s=r.c
if(p>=s.length)return H.h(s,p)
o=s[p].f
n=new V.bF(o.a,o.b,o.c,1)
m=t.aT(n)
l=u.aT(m)
k=g.aT(l)
j=new V.w(k.a,k.b,k.c).a1(0,k.d)
h.a+=n.Y(3,2)+" => "+m.Y(3,2)+" => "+l.Y(3,2)+" => "+k.Y(3,2)+" => "+j.Y(3,2)+"\n"
C.a.i(this.b,j)}}},
se_:function(a){this.b=H.p(a,"$ic",[V.w],"$ac")}}
O.cc.prototype={}
V.f5.prototype={
ao:function(a,b){return!0},
h:function(a){return"all"},
$ibo:1}
V.bo.prototype={}
V.dJ.prototype={
ao:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.an)(u),++s)if(u[s].ao(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.an)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s},
sa9:function(a){this.a=H.p(a,"$ic",[V.bo],"$ac")},
$ibo:1}
V.bp.prototype={
ao:function(a,b){return!this.cz(0,b)},
h:function(a){return"!["+this.bx(0)+"]"}}
V.hv.prototype={
cD:function(a){var u,t
if(a.a.length<=0)throw H.i(P.dA("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.B,P.Y])
for(t=new H.cH(a,a.gl(a),[H.f_(a,"v",0)]);t.A();)u.I(0,t.d,!0)
this.se3(u)},
ao:function(a,b){return this.a.ev(0,b)},
h:function(a){var u=this.a
return P.kE(new H.dG(u,[H.y(u,0)]))},
se3:function(a){this.a=H.p(a,"$iR",[P.B,P.Y],"$aR")},
$ibo:1}
V.cU.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.H(0,b))
r.sa9(H.b([],[V.bo]))
r.c=!1
C.a.i(this.c,r)
return r},
eB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.an)(u),++s){r=u[s]
if(r.ao(0,a))return r}return},
h:function(a){return this.b},
sef:function(a){this.c=H.p(a,"$ic",[V.cZ],"$ac")}}
V.dZ.prototype={
h:function(a){var u=H.dk(this.b,"\n","\\n"),t=H.dk(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
h:function(a){return this.b},
sdY:function(a){var u=P.e
this.c=H.p(a,"$iR",[u,u],"$aR")}}
V.i4.prototype={
H:function(a,b){var u=this.a.q(0,b)
if(u==null){u=new V.cU(this,b)
u.sef(H.b([],[V.cZ]))
u.d=null
this.a.I(0,b,u)}return u},
aF:function(a){var u,t=this.b.q(0,a)
if(t==null){t=new V.cY(a)
u=P.e
t.sdY(new H.aQ([u,u]))
this.b.I(0,a,t)}return t},
fa:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[V.dZ]),l=this.c,k=[P.B],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.i(m,t)
return m}r=C.b.a3(a,s)
q=l.eB(r)
if(q==null){if(t==null){C.a.i(j,r)
p=P.kE(j)
throw H.i(P.dA("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.i(m,t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)C.a.i(j,r)
l=q.b
if(l.d!=null){p=P.kE(j)
o=l.d
n=o.c.q(0,p)
t=new V.dZ(n==null?o.b:n,p,s)}++s}}},
se8:function(a){this.a=H.p(a,"$iR",[P.e,V.cU],"$aR")},
see:function(a){this.b=H.p(a,"$iR",[P.e,V.cY],"$aR")}}
V.cZ.prototype={
h:function(a){return this.b.b+": "+this.bx(0)}}
X.dt.prototype={$iln:1}
X.fG.prototype={
gE:function(){var u=this.x
return u==null?this.x=D.bY():u}}
X.dP.prototype={
gE:function(){var u=this.f
return u==null?this.f=D.bY():u},
ai:function(a){var u
H.q(a,"$iQ")
u=this.f
if(u!=null)u.av(a)},
dj:function(){return this.ai(null)},
saA:function(a){var u,t,s=this
if(!J.J(s.b,a)){u=s.b
if(u!=null)u.gE().R(0,s.gbN())
t=s.b
s.b=a
if(a!=null)a.gE().i(0,s.gbN())
u=new D.aC("mover",t,s.b,[U.cK])
u.b=!0
s.ai(u)}},
$iln:1,
$idt:1}
X.dW.prototype={}
V.hz.prototype={
cE:function(a,b){var u,t,s,r=document,q=r.body,p=r.createElement("div")
p.className="scrollTop"
q.appendChild(p)
u=r.createElement("div")
u.className="scrollPage"
q.appendChild(u)
t=r.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0)r.title=a
s=r.createElement("div")
this.a=s
t.appendChild(s)
this.b=null
s=W.l
W.aa(r,"scroll",H.j(new V.hB(p),{func:1,ret:-1,args:[s]}),!1,s)},
ek:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.p(a,"$ic",[P.e],"$ac")
this.e4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fa(C.a.eI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.an)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.oh(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.D(m[1])
l.textContent=H.D(m[0])
t.appendChild(l)}else{k=P.nw(C.K,n,C.n,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
e4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i4()
t=P.e
u.se8(new H.aQ([t,V.cU]))
u.see(new H.aQ([t,V.cY]))
u.c=null
u.c=u.H(0,q)
t=u.H(0,q).u(0,p)
s=V.aj(new H.a8("*"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,p).u(0,p)
s=new V.bp()
r=[V.bo]
s.sa9(H.b([],r))
C.a.i(t.a,s)
t=V.aj(new H.a8("*"))
C.a.i(s.a,t)
t=u.H(0,p).u(0,"BoldEnd")
s=V.aj(new H.a8("*"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,q).u(0,o)
s=V.aj(new H.a8("_"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,o).u(0,o)
s=new V.bp()
s.sa9(H.b([],r))
C.a.i(t.a,s)
t=V.aj(new H.a8("_"))
C.a.i(s.a,t)
t=u.H(0,o).u(0,n)
s=V.aj(new H.a8("_"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,q).u(0,m)
s=V.aj(new H.a8("`"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,m).u(0,m)
s=new V.bp()
s.sa9(H.b([],r))
C.a.i(t.a,s)
t=V.aj(new H.a8("`"))
C.a.i(s.a,t)
t=u.H(0,m).u(0,"CodeEnd")
s=V.aj(new H.a8("`"))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,q).u(0,l)
s=V.aj(new H.a8("["))
C.a.i(t.a,s)
t.c=!0
t=u.H(0,l).u(0,k)
s=V.aj(new H.a8("|"))
C.a.i(t.a,s)
s=u.H(0,l).u(0,j)
t=V.aj(new H.a8("]"))
C.a.i(s.a,t)
s.c=!0
s=u.H(0,l).u(0,l)
t=new V.bp()
t.sa9(H.b([],r))
C.a.i(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.i(t.a,s)
s=u.H(0,k).u(0,j)
t=V.aj(new H.a8("]"))
C.a.i(s.a,t)
s.c=!0
s=u.H(0,k).u(0,k)
t=new V.bp()
t.sa9(H.b([],r))
C.a.i(s.a,t)
s=V.aj(new H.a8("|]"))
C.a.i(t.a,s)
C.a.i(u.H(0,q).u(0,i).a,new V.f5())
s=u.H(0,i).u(0,i)
t=new V.bp()
t.sa9(H.b([],r))
C.a.i(s.a,t)
s=V.aj(new H.a8("*_`["))
C.a.i(t.a,s)
s=u.H(0,"BoldEnd")
s.d=s.a.aF(p)
s=u.H(0,n)
s.d=s.a.aF(o)
s=u.H(0,"CodeEnd")
s.d=s.a.aF(m)
s=u.H(0,j)
s.d=s.a.aF("Link")
s=u.H(0,i)
s.d=s.a.aF(i)
this.b=u}}
V.hB.prototype={
$1:function(a){P.dY(C.f,new V.hA(this.a))},
$S:14}
V.hA.prototype={
$0:function(){var u=C.c.a0(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s},
$S:1}
Q.m.prototype={
gS:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gaN:function(a){return this.gS()?(this.a-1)*8+(this.b-1):-1},
cj:function(){if(this.gS()){var u=this.b-1
if(u<0||u>=8)return H.h("abcdefgh",u)
u="abcdefgh"[u]+(9-this.a)}else u="xx"
return u},
h:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.m))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.a5.prototype={
h:function(a){var u=this,t=u.d,s=t!=null?", "+t.h(0)+" => "+H.d(u.e):""
return u.a+", "+u.b.h(0)+" => "+u.c.h(0)+s}}
Q.hF.prototype={
cF:function(){this.scX(P.n0(64,new Q.hG($.a2().a),!1,P.B))
this.c=null},
ex:function(){var u,t,s,r=Q.kC()
for(u=0;u<64;++u){t=r.a
s=this.a
if(u>=s.length)return H.h(s,u);(t&&C.a).I(t,u,s[u])}return r},
w:function(a){var u,t
if(!a.gS())return $.kZ()
u=a.gaN(a)
t=this.a
if(u<0||u>=t.length)return H.h(t,u)
return new Q.u(t[u])},
t:function(a,b){var u
if(!a.gS())return!1
u=this.a;(u&&C.a).I(u,a.gaN(a),b.a)
return!0},
bZ:function(a){var u,t,s=a.a,r=$.f2(),q=r.a
if(typeof s!=="number")return s.v()
if(typeof q!=="number")return H.A(q)
u=new Q.u((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.v()
if(typeof q!=="number")return H.A(q)
if(new Q.u((s&q)>>>0).m(0,u))return Q.lg(t)}return new Q.m(0,0)},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bv(),f=a?$.bh():$.f1()
g=g.a
f=f.a
if(typeof g!=="number")return g.M()
if(typeof f!=="number")return H.A(f)
u=$.bS().a
if(typeof u!=="number")return H.A(u)
t=h.bZ(new Q.u((g|f|1&u)>>>0))
if(!t.gS())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.cp()
o=[Q.u]
if(h.D(new Q.m(f,r),q,H.b([p],o)))return!0
n=u+-1
if(h.D(new Q.m(f,n),q,H.b([p],o)))return!0
f=g+2
p=$.co()
if(h.D(new Q.m(f,r),q,H.b([p],o)))return!0
if(h.D(new Q.m(f,n),q,H.b([p],o)))return!0
f=g+1
m=u+2
if(h.D(new Q.m(f,m),q,H.b([p],o)))return!0
l=g+-1
if(h.D(new Q.m(l,m),q,H.b([p],o)))return!0
m=g+-2
if(h.D(new Q.m(m,r),q,H.b([p],o)))return!0
if(h.D(new Q.m(m,n),q,H.b([p],o)))return!0
m=u+-2
if(h.D(new Q.m(f,m),q,H.b([p],o)))return!0
if(h.D(new Q.m(l,m),q,H.b([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.m(g,j)
if(h.D(i,q,H.b([$.aY(),$.aw()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.m(g,j)
if(h.D(i,q,H.b([$.aY(),$.aw()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.w(i).a==$.a2().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.m(j,u)
if(h.D(i,q,H.b([$.aY(),$.aw()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.m(j,u)
if(h.D(i,q,H.b([$.aY(),$.aw()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.m(p,m)
if(h.D(i,q,H.b([$.bg(),$.aw()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.m(p,m)
if(h.D(i,q,H.b([$.bg(),$.aw()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.m(p,m)
if(h.D(i,q,H.b([$.bg(),$.aw()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.w(i).a==$.a2().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.m(m,p)
if(h.D(i,q,H.b([$.bg(),$.aw()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.w(i).a==$.a2().a))break}p=$.bv()
if(h.D(new Q.m(f,r),q,H.b([p],o)))return!0
if(h.D(new Q.m(f,u),q,H.b([p],o)))return!0
if(h.D(new Q.m(f,n),q,H.b([p],o)))return!0
if(h.D(new Q.m(g,n),q,H.b([p],o)))return!0
if(h.D(new Q.m(l,n),q,H.b([p],o)))return!0
if(h.D(new Q.m(l,u),q,H.b([p],o)))return!0
if(h.D(new Q.m(l,r),q,H.b([p],o)))return!0
if(h.D(new Q.m(g,r),q,H.b([p],o)))return!0
return!1},
D:function(a,b,c){var u,t,s,r,q,p
H.p(c,"$ic",[Q.u],"$ac")
if(a.gS()){u=this.w(a)
u.toString
t=$.bh()
s=u.a
t=t.a
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.A(t)
if((s&t)>>>0===t===b){t=$.bT()
r=t.a
if(typeof r!=="number")return H.A(r)
q=new Q.u((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.h(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.A(r)
if(q.m(0,new Q.u((s&r)>>>0)))return!0}}}return!1},
eC:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="Pawn en passent ",a={func:1,ret:-1,args:[Q.a5]}
H.j(a0,a)
if(!a1.gS())return
u=d.w(a1)
t=new Q.hH(d,u,a0)
s=u.a
r=$.bT().a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.A(r)
q=new Q.u((s&r)>>>0)
if(q.m(0,$.cp())){H.j(t,a)
u=d.w(a1)
u.toString
a=$.bh()
s=u.a
a=a.a
if(typeof s!=="number")return s.v()
if(typeof a!=="number")return H.A(a)
p=(s&a)>>>0===a
r=$.bw().a
if(typeof r!=="number")return H.A(r)
o=p?-1:1
n=a1.a
m=n+o
l=a1.b
k=new Q.m(m,l)
j=d.w(k).a
i=$.a2().a
if(j==i){t.$1(new Q.a5("Pawn move to "+k.h(0),a1,k,c,c))
if((s&r)>>>0!==r){k=new Q.m(n+(o+o),l)
if(d.w(k).a==i)t.$1(new Q.a5("Pawn move to "+k.h(0),a1,k,c,c))}}s=l+-1
k=new Q.m(m,s)
h=d.w(k)
j=h.a
g=$.kZ().a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.v()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a5("Pawn take "+h.gad()+" at "+k.h(0),a1,k,k,c));++l
k=new Q.m(m,l)
h=d.w(k)
j=h.a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.v()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a5("Pawn take "+h.gad()+" at "+k.h(0),a1,k,k,c))
if(d.c!=null)j=n===(p?4:5)
else j=!1
if(j){k=new Q.m(m,s)
if(k.gS()&&d.w(k).a==i){f=new Q.m(n,s)
h=d.w(f)
j=h.a
if(j!=i){if(typeof j!=="number")return j.v()
j=(j&a)>>>0===a!==p}else j=!1
if(j){e=d.c.w(new Q.m(n+(o+o),s))
s=e.a
if(typeof s!=="number")return s.v()
if((s&r)>>>0!==r&&e.br(h))t.$1(new Q.a5(b+h.gad()+" at "+k.h(0),a1,k,f,c))}}k=new Q.m(m,l)
if(k.gS()&&d.w(k).a==i){f=new Q.m(n,l)
h=d.w(f)
s=h.a
if(s!=i){if(typeof s!=="number")return s.v()
a=(s&a)>>>0===a!==p}else a=!1
if(a){e=d.c.w(new Q.m(n+(o+o),l))
a=e.a
if(typeof a!=="number")return a.v()
if((a&r)>>>0!==r&&e.br(h))t.$1(new Q.a5(b+h.gad()+" at "+k.h(0),a1,k,f,c))}}}}else if(q.m(0,$.aY()))d.e0(t,a1)
else if(q.m(0,$.co())){H.j(t,a)
d.K(t,a1,2,1)
d.K(t,a1,2,-1)
d.K(t,a1,1,2)
d.K(t,a1,-1,2)
d.K(t,a1,-2,1)
d.K(t,a1,-2,-1)
d.K(t,a1,1,-2)
d.K(t,a1,-1,-2)}else if(q.m(0,$.bg())){H.j(t,a)
d.N(t,a1,1,1)
d.N(t,a1,1,-1)
d.N(t,a1,-1,-1)
d.N(t,a1,-1,1)}else if(q.m(0,$.aw())){H.j(t,a)
d.N(t,a1,1,1)
d.N(t,a1,1,0)
d.N(t,a1,1,-1)
d.N(t,a1,0,-1)
d.N(t,a1,-1,-1)
d.N(t,a1,-1,0)
d.N(t,a1,-1,1)
d.N(t,a1,0,1)}else if(q.m(0,$.bv()))d.d8(t,a1)},
K:function(a,b,c,d){var u,t,s,r,q,p
H.j(a,{func:1,ret:-1,args:[Q.a5]})
u=new Q.m(b.a+c,b.b+d)
if(!u.gS())return!0
t=this.w(b)
s=this.w(u)
r=s.a
if(r==$.a2().a){a.$1(new Q.a5(t.gad()+" move to "+u.h(0),b,u,null,null))
return!1}t.toString
q=$.bh()
p=t.a
q=q.a
if(typeof p!=="number")return p.v()
if(typeof q!=="number")return H.A(q)
if(typeof r!=="number")return r.v()
r=(r&q)>>>0===q!==((p&q)>>>0===q)
if(r)a.$1(new Q.a5(t.gad()+" take "+s.gad()+" at "+u.h(0),b,u,u,null))
return!0},
N:function(a,b,c,d){var u
H.j(a,{func:1,ret:-1,args:[Q.a5]})
for(u=1;u<8;++u)if(this.K(a,b,c*u,d*u))return},
e0:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.j(a,{func:1,ret:-1,args:[Q.a5]})
u=m.w(b)
u.toString
t=$.bh()
s=u.a
t=t.a
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.A(t)
r=$.bw().a
if(typeof r!=="number")return H.A(r)
m.N(a,b,0,1)
m.N(a,b,0,-1)
m.N(a,b,1,0)
m.N(a,b,-1,0)
if((s&r)>>>0!==r){q=new Q.m((s&t)>>>0===t?8:1,4)
t=m.w(q).a
s=$.bT().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
if(new Q.u((t&s)>>>0).m(0,$.bv())&&(t&r)>>>0!==r){t=b.b
p=t>4?-1:1
n=t+p
t=b.a
while(!0){if(!(n!==4)){o=!0
break}if(m.w(new Q.m(t,n)).a!=$.a2().a){o=!1
break}n+=p}if(o){t=q.a
s=4-p-p
a.$1(new Q.a5("Rook castles with King",b,new Q.m(t,s+p),q,new Q.m(t,s)))}}}},
d8:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.j(a,{func:1,ret:-1,args:[Q.a5]})
u=j.w(b)
u.toString
t=$.bw()
s=u.a
t=t.a
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.A(t)
j.K(a,b,1,1)
j.K(a,b,1,0)
j.K(a,b,1,-1)
j.K(a,b,0,-1)
j.K(a,b,-1,-1)
j.K(a,b,-1,0)
j.K(a,b,-1,1)
j.K(a,b,0,1)
if((s&t)>>>0!==t)for(t=b.a,s=b.b,r=1;r<=8;r+=7){q=new Q.m(t,r)
p=j.w(q).a
o=$.bT().a
if(typeof p!=="number")return p.v()
if(typeof o!=="number")return H.A(o)
if(new Q.u((p&o)>>>0).m(0,$.aY())){o=$.bw().a
if(typeof o!=="number")return H.A(o)
o=(p&o)>>>0!==o
p=o}else p=!1
if(p){n=s>r?-1:1
l=s+n
k=l
while(!0){if(!(k!==r)){m=!0
break}if(j.w(new Q.m(t,k)).a!=$.a2().a){m=!1
break}k+=n}if(m){p=l+n
a.$1(new Q.a5("King castles with Rook",b,new Q.m(t,p),q,new Q.m(t,p-n)))}}}},
bo:function(a,b,c){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.h(t,m)
t=t[m]
s=$.bw().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
if((t&s)>>>0===s){u=!0
break}++m}r=Q.kD(8,8)
r.d=c
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.h(s,m)
r.aG(q,o,new Q.u(s[m]).cl(0,b,u))}return r.h(0)},
h:function(a){return this.bo(a,!1,!0)},
ck:function(a,b){return this.bo(a,b,!0)},
f9:function(a,b){return this.bo(a,!1,b)},
scX:function(a){this.a=H.p(a,"$ic",[P.B],"$ac")}}
Q.hG.prototype={
$1:function(a){return this.a},
$S:32}
Q.hH.prototype={
$1:function(a){var u=this.a.ex(),t=a.b,s=u.w(t),r=a.d,q=r!=null?u.w(r):null,p=$.a2()
u.t(t,p)
t=q!=null
if(t)u.t(r,p)
r=$.bw()
p=s.a
r=r.a
if(typeof p!=="number")return p.M()
if(typeof r!=="number")return H.A(r)
u.t(a.c,new Q.u((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.M()
u.t(a.e,new Q.u((t|r)>>>0))}t=this.b
t.toString
r=$.bh()
t=t.a
r=r.a
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.A(r)
if(!u.bi((t&r)>>>0===r))this.c.$1(a)},
$S:33}
Q.hP.prototype={
b6:function(a,b){var u=this.a,t=a*u+b
if(t<0||t>=u*this.b)return-1
return t},
aG:function(a,b,c){var u=this.b6(a,b)
if(u<0)return
C.a.I(this.c,u,c)},
co:function(a,b){var u,t=this.b6(a,b)
if(t<0)return""
u=this.c
if(t>=u.length)return H.h(u,t)
u=u[t]
return u==null?"":u},
de:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
h:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=H.b([],[P.e]),j=l.de()
if(l.d){u=(""+(l.a-1)).length+1
t=C.b.aQ("",u+C.d.W(j-1,2))
for(s=l.b,r=j+1,q=0;q<s;){++q
t+=C.b.aQ(" "+q,r)}C.a.i(k,C.b.fc(t))}else u=0
for(s=l.a,r=l.b,p=0;p<s;++p){t=l.d?C.b.aQ(""+(p+1),u):""
for(q=0;q<r;++q){if(l.d||q!==0)t+="|"
o=l.b6(p,q)
n=l.c
if(o<0||o>=n.length)return H.h(n,o)
m=n[o]
t+=C.b.aQ(m==null?"":m,j)}C.a.i(k,l.d?t+"|":t)}return C.a.u(k,"\n")},
scV:function(a,b){this.c=H.p(b,"$ic",[P.e],"$ac")}}
Q.u.prototype={
M:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.A(t)
return new Q.u((u|t)>>>0)},
br:function(a){var u,t=this.a,s=$.f2().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
u=a.a
if(typeof u!=="number")return u.v()
return(t&s)>>>0===(u&s)>>>0},
m:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.u))return!1
u=b.a
return this.a==u},
geu:function(){var u,t=this.a,s=$.kY().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
u=new Q.u((t&s)>>>0)
if(u.m(0,$.f1()))return"B"
if(u.m(0,$.bh()))return"W"
return" "},
gf0:function(){var u,t=this.a,s=$.bT().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
u=new Q.u((t&s)>>>0)
if(u.m(0,$.cp()))return"P"
if(u.m(0,$.aY()))return"R"
if(u.m(0,$.co()))return"H"
if(u.m(0,$.bg()))return"B"
if(u.m(0,$.aw()))return"Q"
if(u.m(0,$.bv()))return"K"
return" "},
geL:function(){var u=this.a,t=$.bS().a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.A(t)
t=(u&t)>>>0
if(t===$.a2().a)return" "
return""+t},
gad:function(){var u,t=this.a,s=$.bT().a
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.A(s)
u=new Q.u((t&s)>>>0)
if(u.m(0,$.cp()))return"Pawn"
if(u.m(0,$.aY()))return"Rook"
if(u.m(0,$.co()))return"Knight"
if(u.m(0,$.bg()))return"Bishop"
if(u.m(0,$.aw()))return"Queen"
if(u.m(0,$.bv()))return"King"
return"Empty"},
cl:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.a2().a)return""
if(c){u=$.bw().a
if(typeof r!=="number")return r.v()
if(typeof u!=="number")return H.A(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.geu()+s.gf0()
return b?t+s.geL():t},
h:function(a){return this.cl(a,!0,!0)}}
B.aO.prototype={
gaD:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaD(r)
t=0}return new B.aO(t,u.b,u.c,s,u.e,r)},
gax:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gax()
t=0}return new B.aO(u.a,u.b,t,u.d,s,r)},
h:function(a){var u=this
return H.d(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.mE(u.ga6(u))+")"},
ga6:function(a){var u=this,t=u.f
t=t==null?null:t.ae(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t}}
B.ff.prototype={
bY:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.ar(u,s,t,this.d5(u,s,t))
a.c_()},
d5:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.d.bq(a+b+c,2)===0?113:111},
$imR:1}
B.bV.prototype={
cB:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
k.d=new Uint8Array(12288)
k.sb1(H.b([],[E.a9]))
for(u=k.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.an)(u),++s){r=u[s]
q=E.l9(null)
p=r.y
o=H.y(p,0)
H.H(q,o)
n=[o]
if(H.E(p.bO(H.b([q],n)))){m=p.a
l=m.length
C.a.i(m,q)
o=H.p(H.b([q],n),"$ik",[o],"$ak")
p=p.c
if(p!=null)p.$2(l,o)}p=k.e;(p&&C.a).i(p,q)}k.b=k.a=0},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
c_:function(){var u=this
u.sbJ(!1)
u.gaO(u)
u.gaD(u)
u.gax()
u.geo(u)},
ae:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.h(u,t)
return u[t]},
ar:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.h(u,t)
u[t]=d
return!0},
gaO:function(a){return this.c.ab(this.a-16,this.b)},
gax:function(){return this.c.ab(this.a,this.b+16)},
gaD:function(a){return this.c.ab(this.a+16,this.b)},
geo:function(a){return this.c.ab(this.a,this.b-16)},
sbJ:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=!1},
sb1:function(a){this.e=H.p(a,"$ic",[E.a9],"$ac")}}
B.fg.prototype={
er:function(a,b,c){var u,t,s,r,q=this
q.b=b
q.c=a
q.d=c
q.e=$.bu()
q.cS()
for(;q.e7(););u=q.b
t=q.d
s=t.a
r=t.b
t=t.c
q.b=new V.w(u.a+s,u.b+r,u.c+t)
return!0},
cS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.c,a7=a5.b,a8=a6.bp(0,new V.F(a7.a,a7.b,a7.c))
a7=a8.bp(0,a5.d)
a6=a8.a
u=a7.a
t=Math.min(a6,u)
s=Math.max(a6+a8.d,u+a7.d)
u=a8.b
a6=a7.b
r=Math.min(u,a6)
q=Math.max(u+a8.e,a6+a7.e)
a6=a8.c
u=a7.c
p=Math.min(a6,u)
o=Math.max(a6+a8.f,u+a7.f)
a7=a5.a
n=a7.ae(t,r,p)
m=a7.ae(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.a.sl(a5.f,0)
C.a.sl(a5.r,0)
C.a.sl(a5.x,0)
a6=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a6))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a7=h.ga6(h)
if(a7>=100&&a7<=117){g=$.bu()
a7=h.a
f=a7-1
e=h.d
d=h.f
if(f<0){c=e-16
b=d==null?null:d.c.ab(d.a-16,d.b)
f=15}else{b=d
c=e}u=h.b
a=h.c
a0=h.e
a1=new B.aO(f,u,a,c,a0,b)
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.ck()
g=new V.ai(g.a|a2.a)}a1=h.gaD(h)
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.cl()
g=new V.ai(g.a|a2.a)}a1=new B.aO(a7,u-1,a,e,a0,d)
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.dm()
g=new V.ai(g.a|a2.a)}a1=new B.aO(a7,u+1,a,e,a0,d)
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.cm()
g=new V.ai(g.a|a2.a)}a3=a-1
if(a3<0){a4=a0-16
d=d==null?null:d.c.ab(d.a,d.b-16)
a3=15}else a4=a0
a1=new B.aO(a7,u,a3,e,a4,d)
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.cn()
g=new V.ai(g.a|a2.a)}a1=h.gax()
a2=a1.ga6(a1)
a2=a2>=100&&a2<=117
if(a2){a2=$.dn()
g=new V.ai(g.a|a2.a)}a2=$.mc()
if(!J.J(g,a2)){C.a.i(a5.f,V.N(a7+e,u,a+a0,1,1,1))
a7=a5.r
g.toString
u=$.kq().a
a=g.a
C.a.i(a7,new V.ai(a2.a&u&~a))
C.a.i(a5.x,!1)}}h=h.gax()}i=new B.aO(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gaD(j)}},
e7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.d.eH())return!1
u=i.c
t=i.b
s=u.bp(0,new V.F(t.a,t.b,t.c))
r=$.bu()
for(q=0,p=-1,o=0;u=i.f,o<u.length;++o){t=i.x
if(o>=t.length)return H.h(t,o)
if(!t[o]){n=u[o]
u=i.r
if(o>=u.length)return H.h(u,o)
m=u[o]
l=s.bW(n,i.d,m)
if(l!=null)if(J.J(r,$.bu())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.Z(r)
if(u.m(r,$.bu()))return!1
C.a.I(i.x,p,!0)
k=i.d.C(0,q)
j=i.d.C(0,1-q)
if(u.m(r,$.cl())||u.m(r,$.ck())){u=i.b
i.b=new V.w(u.a+k.a,u.b+k.b,u.c+k.c)
i.d=new V.F(0,j.b,j.c)}else if(u.m(r,$.cm())||u.m(r,$.dm())){u=i.b
t=u.b
i.b=new V.w(u.a+k.a,t+k.b,u.c+k.c)
i.d=new V.F(j.a,0,j.c)}else if(u.m(r,$.dn())||u.m(r,$.cn())){u=i.b
t=u.c
i.b=new V.w(u.a+k.a,u.b+k.b,t+k.c)
i.d=new V.F(j.a,j.b,0)}i.e=new V.ai(i.e.a|r.a)
return!0},
h:function(a){return"Collider("+H.d(this.b)+", "+H.d(this.e)+")"},
scP:function(a){this.f=H.p(a,"$ic",[V.bG],"$ac")},
scO:function(a){this.r=H.p(a,"$ic",[V.ai],"$ac")},
sd7:function(a){this.x=H.p(a,"$ic",[P.Y],"$ac")}}
B.fD.prototype={
bY:function(a){var u,t,s,r,q=this,p=Math.max(q.a,q.b)
for(u=0;u<16;++u)for(t=0;t<16;++t){for(s=0;r=q.a,s<r;++s)a.ar(u,s,t,103)
for(s=r;s<q.b;++s)a.ar(u,s,t,101)
a.ar(u,p,t,102)}a.c_()},
$imR:1}
B.ip.prototype={
cG:function(a,b){var u,t,s,r=this,q=[B.bV]
r.sd6(H.b([],q))
r.scR(H.b([],q))
r.sb1(H.b([],[E.a9]))
for(u=0;u<140;++u){q=r.c;(q&&C.a).i(q,B.mF(r))}for(q=r.b,t=-32;t<32;t+=16)for(s=-32;s<32;s+=16)q.bY(r.c8(t,s))},
ab:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ae:function(a,b,c){var u,t,s,r=C.c.aw(a),q=C.c.aw(b),p=C.c.aw(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.d.W(o,16)*16
n=C.d.W(n,16)*16
u=this.ab(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.aO(t,q,s<0?s+16:s,o,n,u)},
c8:function(a,b){var u,t=this.c
if(0>=t.length)return H.h(t,-1)
u=t.pop()
u.a=a
u.b=b
u.sbJ(!1)
C.a.i(this.d,u)
return u},
sd6:function(a){this.c=H.p(a,"$ic",[B.bV],"$ac")},
scR:function(a){this.d=H.p(a,"$ic",[B.bV],"$ac")},
sb1:function(a){this.e=H.p(a,"$ic",[E.a9],"$ac")}}
M.jf.prototype={
$1:function(a){var u,t,s,r,q=new Uint8Array(1000)
for(u=q.length,t=0;t<100;++t){for(s=0;s<1000;++s){if(s>=u)return H.h(q,s)
q[s]=0}for(r=0;r<100;++r)for(s=0;s<1000;++s){if(s>=u)return H.h(q,s)
q[s]=q[s]+1}}a.j(H.d(q),"info_log")},
$S:0}
M.jg.prototype={
$1:function(a){var u,t,s,r=P.mZ(1000,0,P.B)
for(u=0;u<100;++u){for(t=0;t<1000;++t)C.a.I(r,t,0)
for(s=0;s<100;++s)for(t=0;t<1000;++t){if(t>=r.length)return H.h(r,t)
C.a.I(r,t,r[t]+1)}}a.j(H.d(r),"info_log")},
$S:0}
M.jh.prototype={
$3:function(a,b,c){var u="warning_log",t=C.a.u(H.p(c,"$ic",[P.e],"$ac"),"\n")
if(t!==b){a.j("Expected:\n  "+H.dk(t,"\n","\n  ")+"\n",u)
a.j("Result:\n  "+H.dk(b,"\n","\n  ")+"\n",u)
a.j("Unexpected string of a chess game state.\n\n","error_log")
a.k()}else a.j(b+"\n\n","info_log")}}
M.ji.prototype={
$4:function(a,b,c,d){var u="error_log",t=Q.a0(H.p(d,"$ic",[P.e],"$ac"))
a.j("State:\n"+H.d(t)+"\n","info_log")
if(t.bi(!0)!==b){a.j("Expected IsChecked(white) to return "+b+" but it wasn't.\n",u)
a.k()}if(t.bi(!1)!==c){a.j("Expected IsChecked(black) to return "+c+" but it wasn't\n",u)
a.k()}}}
M.jk.prototype={
$4:function(a,b,c,d){var u,t,s,r,q,p,o,n="info_log",m=P.e
H.p(d,"$ic",[m],"$ac")
a.j("moving "+c+"\n",n)
u=b.bZ(Q.lE(c))
t=H.b([],[Q.a5])
b.eC(C.a.gei(t),u)
s=new Array(t.length)
s.fixed$length=Array
r=H.b(s,[m])
q=Q.kD(8,8)
q.aG(u.a-1,u.b-1,"O")
for(p=t.length-1;p>=0;--p){if(p>=t.length)return H.h(t,p)
o=t[p]
C.a.I(r,p,J.bi(o))
m=o.c
q.aG(m.a-1,m.b-1,"X")}a.j("Movements:\n"+q.h(0)+"\n",n)
this.a.$3(a,C.a.u(r,"\n"),d)}}
M.jj.prototype={
$6:function(a,b,c,d,e,f){var u,t,s,r,q="error_log",p=new Q.m(b,c)
if(p.gS()!==d){a.j("Unexpected onBoard: "+p.gS()+" != "+d+"\n",q)
a.k()}if(p.gaN(p)!==e){a.j("Unexpected index: "+p.gaN(p)+" != "+e+"\n",q)
a.k()}if(p.cj()!==f){a.j("Unexpected notation: "+p.cj()+" != "+f+"\n",q)
a.k()}if(!p.gS()){u=0
t=0}else{t=c
u=b}s=Q.lg(e)
r=s.a
if(r!==u){a.j("Unexpected row from index: "+r+" != "+u+"\n",q)
a.k()}r=s.b
if(r!==t){a.j("Unexpected column from index: "+r+" != "+t+"\n",q)
a.k()}}}
M.jl.prototype={
$1:function(a){var u=this.a
u.$6(a,0,0,!1,-1,"xx")
u.$6(a,1,1,!0,0,"a8")
u.$6(a,2,2,!0,9,"b7")
u.$6(a,3,3,!0,18,"c6")
u.$6(a,4,4,!0,27,"d5")
u.$6(a,5,5,!0,36,"e4")
u.$6(a,6,6,!0,45,"f3")
u.$6(a,7,7,!0,54,"g2")
u.$6(a,8,8,!0,63,"h1")
u.$6(a,4,7,!0,30,"g5")
u.$6(a,9,1,!1,-1,"xx")
u.$6(a,1,9,!1,-1,"xx")},
$S:0}
M.jm.prototype={
$1:function(a){var u="    1   2   3   4   5   6   7   8",t="1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|",s="2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|",r="3 |   |   |   |   |   |   |   |   |",q="4 |   |   |   |   |   |   |   |   |",p="5 |   |   |   |   |   |   |   |   |",o="6 |   |   |   |   |   |   |   |   |",n="7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|",m="8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|",l="BR|BH|BB|BK|BQ|BB|BH|BR",k="BP|BP|BP|BP|BP|BP|BP|BP",j="  |  |  |  |  |  |  |  ",i="WP|WP|WP|WP|WP|WP|WP|WP",h="WR|WH|WB|WK|WQ|WB|WH|WR",g="   |   |   |   |   |   |   |   ",f=Q.lC(),e=this.a,d=[P.e]
e.$3(a,f.h(0),H.b(["   1  2  3  4  5  6  7  8","1 |BR|BH|BB|BK|BQ|BB|BH|BR|","2 |BP|BP|BP|BP|BP|BP|BP|BP|","3 |  |  |  |  |  |  |  |  |","4 |  |  |  |  |  |  |  |  |","5 |  |  |  |  |  |  |  |  |","6 |  |  |  |  |  |  |  |  |","7 |WP|WP|WP|WP|WP|WP|WP|WP|","8 |WR|WH|WB|WK|WQ|WB|WH|WR|"],d))
e.$3(a,f.ck(0,!0),H.b([u,t,s,r,q,p,o,n,m],d))
e.$3(a,f.f9(0,!1),H.b([l,k,j,j,j,j,i,h],d))
e.$3(a,J.ks(Q.a0(H.b([l,k,j,j,j,j,i,h],d)),!0),H.b([u,t,s,r,q,p,o,n,m],d))
e.$3(a,J.ks(Q.a0(H.b([" BR|   | BB| BK|   | BB| BH|   "," WP|   |   |+BQ|   | BP|+BQ|+BQ","   |+WP|   |   |+BP|   |   |   ","   |   |+WP|+BP|   |   |   |   ","   |   |+BP|+WP|   |   |   |   ","   |+BP|   |   |+WP|   |   |   "," BP|   |   |+WK|   |+WP|+WQ|+WQ","   | WH| WB|   |+WQ| WB|   | WR"],d)),!0),H.b(["    1    2    3    4    5    6    7    8","1 | BR1|    | BB1| BK1|    | BB2| BH1|    |","2 | WP1|    |    |+BQ1|    | BP1|+BQ2|+BQ3|","3 |    |+WP2|    |    |+BP2|    |    |    |","4 |    |    |+WP3|+BP3|    |    |    |    |","5 |    |    |+BP4|+WP4|    |    |    |    |","6 |    |+BP5|    |    |+WP5|    |    |    |","7 | BP6|    |    |+WK1|    |+WP6|+WQ1|+WQ2|","8 |    | WH1| WB1|    |+WQ3| WB2|    | WR1|"],d))
e.$3(a,J.ks(Q.a0(H.b(["BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1","BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1",g,g,g,g,"WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1","WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1"],d)),!0),H.b([u,"1 |BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1|","2 |BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1|",r,q,p,o,"7 |WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1|","8 |WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1|"],d))},
$S:0}
M.jn.prototype={
$1:function(a){var u="  |  |  |BK|  |  |  |  ",t="  |  |  |  |  |  |  |  ",s="  |  |  |WK|  |  |  |  ",r="  |  |  |  |  |  |BK|  ",q="  |WK|  |  |  |  |  |  ",p=this.a,o=[P.e]
p.$4(a,!1,!1,H.b([u,t,t,t,t,t,t,s],o))
p.$4(a,!0,!0,H.b([t,t,t,u,s,t,t,t],o))
p.$4(a,!1,!0,H.b([t,r,t,t,"  |  |  |WQ|  |  |  |  ",t,q,t],o))
p.$4(a,!1,!0,H.b([t,r,t,t,t,"  |  |BR|  |  |  |  |  ","  |WK|  |  |  |  |WR|  ",t],o))
p.$4(a,!1,!0,H.b([t,r,t,t,t,"  |  |WB|  |  |  |  |  ","  |WK|  |  |  |  |BB|  ",t],o))
p.$4(a,!0,!0,H.b([t,r,"  |  |  |  |  |WP|  |  ",t,t,"  |  |BP|  |  |  |  |  ",q,t],o))
p.$4(a,!1,!1,H.b([t,"  |  |  |  |  |  |WK|  ","  |  |  |  |  |BP|  |  ",t,t,"  |  |WP|  |  |  |  |  ","  |BK|  |  |  |  |  |  ",t],o))
p.$4(a,!0,!0,H.b([t,r,t,"  |  |  |  |  |WH|  |  ","  |  |  |  |BH|  |  |  ","  |  |WK|  |  |  |  |  ",t,t],o))},
$S:0}
M.jo.prototype={
$1:function(a){var u,t="Pawn move to 6 4, 7 4 => 6 4",s=" BR1| BH1| BB1| BK1| BQ1| BB2| BH2| BR2",r="    |    |    |    |    |    |    |    ",q=" WR1| WH1| WB1| WK1| WQ1| WB2| WH2| WR2",p="  |  |  |  |  |  |  |  ",o=Q.lC(),n=this.a,m=[P.e]
n.$4(a,o,"WP1",H.b(["Pawn move to 6 1, 7 1 => 6 1","Pawn move to 5 1, 7 1 => 5 1"],m))
n.$4(a,o,"WP4",H.b([t,"Pawn move to 5 4, 7 4 => 5 4"],m))
n.$4(a,o,"WP8",H.b(["Pawn move to 6 8, 7 8 => 6 8","Pawn move to 5 8, 7 8 => 5 8"],m))
n.$4(a,o,"BP1",H.b(["Pawn move to 3 1, 2 1 => 3 1","Pawn move to 4 1, 2 1 => 4 1"],m))
n.$4(a,o,"BP4",H.b(["Pawn move to 3 4, 2 4 => 3 4","Pawn move to 4 4, 2 4 => 4 4"],m))
n.$4(a,o,"BP8",H.b(["Pawn move to 3 8, 2 8 => 3 8","Pawn move to 4 8, 2 8 => 4 8"],m))
u=Q.a0(H.b([s,"    | BP2| BP3|    | BP5| BP6| BP7|    ",r,r,"+BP1|+WP2|+WP3|+BP4|+WP5|    |+WP7|+BP8",r," WP1|    |    | WP4|    | WP6|    | WP8",q],m))
u.c=o
n.$4(a,u,"BP1",H.b(["Pawn move to 6 1, 5 1 => 6 1","Pawn en passent Pawn at 6 2, 5 1 => 6 2, 5 2 => null"],m))
n.$4(a,u,"BP4",H.b(["Pawn move to 6 4, 5 4 => 6 4","Pawn en passent Pawn at 6 3, 5 4 => 6 3, 5 3 => null","Pawn en passent Pawn at 6 5, 5 4 => 6 5, 5 5 => null"],m))
n.$4(a,u,"BP8",H.b(["Pawn move to 6 8, 5 8 => 6 8","Pawn en passent Pawn at 6 7, 5 8 => 6 7, 5 7 => null"],m))
u=Q.a0(H.b([s," BP1|    |    | BP4|    | BP6|    | BP8",r,"+WP1|+BP2|+BP3|+WP4|+BP5|    |+BP7|+WP8",r,r,"    | WP2| WP3|    | WP5| WP6| WP7|    ",q],m))
u.c=o
n.$4(a,u,"WP1",H.b(["Pawn move to 3 1, 4 1 => 3 1","Pawn en passent Pawn at 3 2, 4 1 => 3 2, 4 2 => null"],m))
n.$4(a,u,"WP4",H.b(["Pawn move to 3 4, 4 4 => 3 4","Pawn en passent Pawn at 3 3, 4 4 => 3 3, 4 3 => null","Pawn en passent Pawn at 3 5, 4 4 => 3 5, 4 5 => null"],m))
n.$4(a,u,"WP8",H.b(["Pawn move to 3 8, 4 8 => 3 8","Pawn en passent Pawn at 3 7, 4 8 => 3 7, 4 7 => null"],m))
n.$4(a,Q.a0(H.b([p,p,p,p,p,"BQ|  |  |  |WK|  |  |  ","  |  |  |WP|  |  |  |  ",p],m)),"WP1",H.b([t],m))},
$S:0}
M.jp.prototype={
$1:function(a){var u,t="   |   |    |   |   |   |   |   ",s="info_log",r="   |    |    |    |   |   |   |   ",q="  |  |  |  |  |  |  |  ",p=[P.e],o=Q.a0(H.b([t,t,t,"   |   |+BH1|   |   |   |   |   ",t,t,t,t],p))
a.j("State:\n"+H.d(o)+"\n",s)
u=this.a
u.$4(a,o,"BH1",H.b(["Knight move to 6 4, 4 3 => 6 4","Knight move to 6 2, 4 3 => 6 2","Knight move to 5 5, 4 3 => 5 5","Knight move to 3 5, 4 3 => 3 5","Knight move to 2 4, 4 3 => 2 4","Knight move to 2 2, 4 3 => 2 2","Knight move to 5 1, 4 3 => 5 1","Knight move to 3 1, 4 3 => 3 1"],p))
o=Q.a0(H.b([r,"   |+BH1|    |    |   |   |   |   ","   |    |    |+BP1|   |   |   |   ","   |    |+WP1|    |   |   |   |   ",r,r,r,r],p))
a.j("State:\n"+H.d(o)+"\n",s)
u.$4(a,o,"BH1",H.b(["Knight take Pawn at 4 3, 2 2 => 4 3, 4 3 => null","Knight move to 4 1, 2 2 => 4 1","Knight move to 1 4, 2 2 => 1 4"],p))
u.$4(a,Q.a0(H.b([q,q,"BQ|  |  |  |  |  |WK|  ","  |  |  |WH|  |  |  |  ",q,q,q,q],p)),"WH1",H.b(["Knight move to 3 6, 4 4 => 3 6","Knight move to 3 2, 4 4 => 3 2"],p))},
$S:0}
M.jq.prototype={
$1:function(a){var u,t="   |   |    |   |   |   |   |   ",s="info_log",r="Bishop move to 5 4, 4 3 => 5 4",q="Bishop move to 3 2, 4 3 => 3 2",p="Bishop move to 3 4, 4 3 => 3 4",o="    |    |    |   |    |   |   |   ",n=[P.e],m=Q.a0(H.b([t,t,t,"   |   |+BB1|   |   |   |   |   ",t,t,t,t],n))
a.j("State:\n"+H.d(m)+"\n",s)
u=this.a
u.$4(a,m,"WB1",H.b([],n))
u.$4(a,m,"BB1",H.b([r,"Bishop move to 6 5, 4 3 => 6 5","Bishop move to 7 6, 4 3 => 7 6","Bishop move to 8 7, 4 3 => 8 7","Bishop move to 5 2, 4 3 => 5 2","Bishop move to 6 1, 4 3 => 6 1",q,"Bishop move to 2 1, 4 3 => 2 1",p,"Bishop move to 2 5, 4 3 => 2 5","Bishop move to 1 6, 4 3 => 1 6"],n))
m=Q.a0(H.b([o,"+WP1|    |    |   |+BP1|   |   |   ",o,"    |    |+WB1|   |    |   |   |   ","    |+BP2|    |   |    |   |   |   ","    |    |    |   |+WP2|   |   |   ",o,o],n))
a.j("State:\n"+H.d(m)+"\n",s)
u.$4(a,m,"WB1",H.b([r,"Bishop take Pawn at 5 2, 4 3 => 5 2, 5 2 => null",q,p,"Bishop take Pawn at 2 5, 4 3 => 2 5, 2 5 => null"],n))},
$S:0}
M.jr.prototype={
$1:function(a1){var u,t="   |   |    |   |   |   |   |   ",s="info_log",r="Rook move to 4 4, 4 3 => 4 4",q="Rook move to 4 2, 4 3 => 4 2",p="Rook move to 5 3, 4 3 => 5 3",o="Rook move to 3 3, 4 3 => 3 3",n="    |   |    |   |    |   |   |   ",m="   |   |   |   |   |   |   |   ",l="Rook move to 1 2, 1 1 => 1 2",k="Rook move to 1 3, 1 1 => 1 3",j="Rook move to 1 7, 1 8 => 1 7",i="Rook move to 1 6, 1 8 => 1 6",h="Rook move to 1 5, 1 8 => 1 5",g="Rook move to 8 2, 8 1 => 8 2",f="Rook move to 8 3, 8 1 => 8 3",e="Rook move to 8 7, 8 8 => 8 7",d="Rook move to 8 6, 8 8 => 8 6",c="Rook move to 8 5, 8 8 => 8 5",b="    |   |   |    |   |   |   |    ",a=[P.e],a0=Q.a0(H.b([t,t,t,"   |   |+BR1|   |   |   |   |   ",t,t,t,t],a))
a1.j("State:\n"+H.d(a0)+"\n",s)
u=this.a
u.$4(a1,a0,"BR1",H.b([r,"Rook move to 4 5, 4 3 => 4 5","Rook move to 4 6, 4 3 => 4 6","Rook move to 4 7, 4 3 => 4 7","Rook move to 4 8, 4 3 => 4 8",q,"Rook move to 4 1, 4 3 => 4 1",p,"Rook move to 6 3, 4 3 => 6 3","Rook move to 7 3, 4 3 => 7 3","Rook move to 8 3, 4 3 => 8 3",o,"Rook move to 2 3, 4 3 => 2 3","Rook move to 1 3, 4 3 => 1 3"],a))
a0=Q.a0(H.b([n,"    |   |+BP1|   |    |   |   |   ",n,"+WP1|   |+WR1|   |+WP2|   |   |   ",n,"    |   |+BP2|   |    |   |   |   ",n,n],a))
a1.j("State:\n"+H.d(a0)+"\n",s)
u.$4(a1,a0,"WR1",H.b([r,q,p,"Rook take Pawn at 6 3, 4 3 => 6 3, 6 3 => null",o,"Rook take Pawn at 2 3, 4 3 => 2 3, 2 3 => null"],a))
a0=Q.a0(H.b(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",m,m,m,m,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"],a))
a1.j("State:\n"+H.d(a0)+"\n",s)
u.$4(a1,a0,"BR1",H.b([l,k,"Rook castles with King, 1 1 => 1 3, 1 4 => 1 2"],a))
u.$4(a1,a0,"BR2",H.b([j,i,h,"Rook castles with King, 1 8 => 1 5, 1 4 => 1 6"],a))
u.$4(a1,a0,"WR1",H.b([g,f,"Rook castles with King, 8 1 => 8 3, 8 4 => 8 2"],a))
u.$4(a1,a0,"WR2",H.b([e,d,c,"Rook castles with King, 8 8 => 8 5, 8 4 => 8 6"],a))
a0=Q.a0(H.b([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",b,b,b,b," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"],a))
a1.j("State:\n"+H.d(a0)+"\n",s)
u.$4(a1,a0,"BR1",H.b([l,k],a))
u.$4(a1,a0,"BR2",H.b([j,i,h],a))
u.$4(a1,a0,"WR1",H.b([g,f],a))
u.$4(a1,a0,"WR2",H.b([e,d,c],a))},
$S:0}
M.js.prototype={
$1:function(a4){var u,t="   |   |   |   |   |   |   |   ",s="info_log",r="BK1",q="King move to 2 5, 1 4 => 2 5",p="King move to 2 4, 1 4 => 2 4",o="King move to 2 3, 1 4 => 2 3",n="King move to 1 3, 1 4 => 1 3",m="King move to 1 5, 1 4 => 1 5",l="King castles with Rook, 1 4 => 1 2, 1 1 => 1 3",k="King castles with Rook, 1 4 => 1 6, 1 8 => 1 5",j="WK1",i="King move to 8 3, 8 4 => 8 3",h="King move to 7 3, 8 4 => 7 3",g="King move to 7 4, 8 4 => 7 4",f="King move to 7 5, 8 4 => 7 5",e="King move to 8 5, 8 4 => 8 5",d="King castles with Rook, 8 4 => 8 2, 8 1 => 8 3",c="King castles with Rook, 8 4 => 8 6, 8 8 => 8 5",b="    |   |   |    |   |   |   |    ",a="   |   |    |    |    |   |   |   ",a0="BP1|   |BP3|BP4|BP5|   |   |BP8",a1="WP1|   |WP3|WP4|WP5|   |   |WP8",a2=[P.e],a3=Q.a0(H.b(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",t,t,t,t,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"],a2))
a4.j("State:\n"+H.d(a3)+"\n",s)
u=this.a
u.$4(a4,a3,r,H.b([q,p,o,n,m,l,k],a2))
u.$4(a4,a3,j,H.b([i,h,g,f,e,d,c],a2))
a3=Q.a0(H.b([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",b,b,b,b," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"],a2))
a4.j("State:\n"+H.d(a3)+"\n",s)
u.$4(a4,a3,r,H.b([q,p,o,n,m],a2))
u.$4(a4,a3,j,H.b([i,h,g,f,e],a2))
a3=Q.a0(H.b([a,a,a,"   |   |    |+WP2|+WP1|   |   |   ","   |   |+BP3|+WK1|+WP3|   |   |   ","   |   |    |+BP2|+BP1|   |   |   ",a,a],a2))
a4.j("State:\n"+H.d(a3)+"\n",s)
u.$4(a4,a3,j,H.b(["King take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","King move to 6 3, 5 4 => 6 3","King take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","King move to 4 3, 5 4 => 4 3"],a2))
a3=Q.a0(H.b(["BR1|BB1|   |BK1|   |   |   |BR2",a0,t,t,t,t,a1,"WR1|WB1|   |WK1|   |   |   |WR2"],a2))
a4.j("State:\n"+H.d(a3)+"\n",s)
u.$4(a4,a3,r,H.b([n,m,k],a2))
u.$4(a4,a3,j,H.b([i,e,c],a2))
a3=Q.a0(H.b(["BR1|   |   |BK1|   |   |BB2|BR2",a0,t,t,t,t,a1,"WR1|   |   |WK1|   |   |WB2|WR2"],a2))
a4.j("State:\n"+H.d(a3)+"\n",s)
u.$4(a4,a3,r,H.b([n,m,l],a2))
u.$4(a4,a3,j,H.b([i,e,d],a2))},
$S:0}
M.jt.prototype={
$1:function(a){var u,t="    |   |   |   |   |   |   |    ",s="info_log",r="   |   |    |    |    |   |   |   ",q="  |  |  |  |  |  |  |  ",p=[P.e],o=Q.a0(H.b(["+WQ1|   |   |   |   |   |   |    ",t,t,t,t,t,t,"    |   |   |   |   |   |   |+BQ1"],p))
a.j("State:\n"+H.d(o)+"\n",s)
u=this.a
u.$4(a,o,"BQ1",H.b(["Queen move to 8 7, 8 8 => 8 7","Queen move to 8 6, 8 8 => 8 6","Queen move to 8 5, 8 8 => 8 5","Queen move to 8 4, 8 8 => 8 4","Queen move to 8 3, 8 8 => 8 3","Queen move to 8 2, 8 8 => 8 2","Queen move to 8 1, 8 8 => 8 1","Queen move to 7 7, 8 8 => 7 7","Queen move to 6 6, 8 8 => 6 6","Queen move to 5 5, 8 8 => 5 5","Queen move to 4 4, 8 8 => 4 4","Queen move to 3 3, 8 8 => 3 3","Queen move to 2 2, 8 8 => 2 2","Queen take Queen at 1 1, 8 8 => 1 1, 1 1 => null","Queen move to 7 8, 8 8 => 7 8","Queen move to 6 8, 8 8 => 6 8","Queen move to 5 8, 8 8 => 5 8","Queen move to 4 8, 8 8 => 4 8","Queen move to 3 8, 8 8 => 3 8","Queen move to 2 8, 8 8 => 2 8","Queen move to 1 8, 8 8 => 1 8"],p))
u.$4(a,o,"WQ1",H.b(["Queen move to 2 2, 1 1 => 2 2","Queen move to 3 3, 1 1 => 3 3","Queen move to 4 4, 1 1 => 4 4","Queen move to 5 5, 1 1 => 5 5","Queen move to 6 6, 1 1 => 6 6","Queen move to 7 7, 1 1 => 7 7","Queen take Queen at 8 8, 1 1 => 8 8, 8 8 => null","Queen move to 2 1, 1 1 => 2 1","Queen move to 3 1, 1 1 => 3 1","Queen move to 4 1, 1 1 => 4 1","Queen move to 5 1, 1 1 => 5 1","Queen move to 6 1, 1 1 => 6 1","Queen move to 7 1, 1 1 => 7 1","Queen move to 8 1, 1 1 => 8 1","Queen move to 1 2, 1 1 => 1 2","Queen move to 1 3, 1 1 => 1 3","Queen move to 1 4, 1 1 => 1 4","Queen move to 1 5, 1 1 => 1 5","Queen move to 1 6, 1 1 => 1 6","Queen move to 1 7, 1 1 => 1 7","Queen move to 1 8, 1 1 => 1 8"],p))
o=Q.a0(H.b([r,r,"   |BP2|    |    |    |   |   |   ","   |   |    |+WP4|+WP1|   |   |   ","   |   |+BP3|+WQ1|+WP3|   |   |   ","   |   |    |+BP4|+BP1|   |   |   ","   |WP2|    |    |    |   |   |   ",r],p))
a.j("State:\n"+H.d(o)+"\n",s)
u.$4(a,o,"WQ1",H.b(["Queen take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","Queen take Pawn at 6 4, 5 4 => 6 4, 6 4 => null","Queen move to 6 3, 5 4 => 6 3","Queen take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","Queen move to 4 3, 5 4 => 4 3","Queen take Pawn at 3 2, 5 4 => 3 2, 3 2 => null"],p))
u.$4(a,Q.a0(H.b(["BQ|  |  |  |  |  |WK|  ",q,"  |  |  |WQ|  |  |  |  ",q,q,q,q,q],p)),"WQ1",H.b(["Queen move to 1 2, 3 4 => 1 2","Queen move to 1 4, 3 4 => 1 4","Queen move to 1 6, 3 4 => 1 6"],p))},
$S:0}
M.ju.prototype={
$1:function(a){var u,t=new B.ff()
t.a=!0
t.b=10
u=B.lL(null,t)
M.o(a,u,0,0,0,0,0,0,0,0)
M.o(a,u,0.001,0,0,0,0,0,0,0)
M.o(a,u,0,0.001,0,0,0,0,0,0)
M.o(a,u,0,0,0.001,0,0,0,0,0)
M.o(a,u,0.999,0,0,0,0,0,0,0)
M.o(a,u,0,0.999,0,0,0,0,0,0)
M.o(a,u,0,0,0.999,0,0,0,0,0)
M.o(a,u,0.999,0.999,0.999,0,0,0,0,0)
M.o(a,u,-0.001,0,0,-16,0,15,0,0)
M.o(a,u,-0.999,0,0,-16,0,15,0,0)
M.o(a,u,-0.001,0,0,-16,0,15,0,0)
M.o(a,u,-0.001,0,0.001,-16,0,15,0,0)
M.o(a,u,-0.999,0,0.999,-16,0,15,0,0)
M.o(a,u,0,0,-0.001,0,-16,0,0,15)
M.o(a,u,0.001,0,-0.001,0,-16,0,0,15)
M.o(a,u,0,0,-0.999,0,-16,0,0,15)
M.o(a,u,0.999,0,-0.999,0,-16,0,0,15)
M.o(a,u,-0.001,0,-0.001,-16,-16,15,0,15)
M.o(a,u,-0.999,0,-0.999,-16,-16,15,0,15)
M.o(a,u,-0.999,0,-0.001,-16,-16,15,0,15)
M.o(a,u,-0.001,0,-0.999,-16,-16,15,0,15)
M.o(a,u,1,0,0,0,0,1,0,0)
M.o(a,u,0,1,0,0,0,0,1,0)
M.o(a,u,0,0,1,0,0,0,0,1)
M.o(a,u,1.001,0,0,0,0,1,0,0)
M.o(a,u,0,0,1.001,0,0,0,0,1)
M.o(a,u,-1,0,0,-16,0,15,0,0)
M.o(a,u,0,-1,0,0,0,0,-1,0)
M.o(a,u,0,0,-1,0,-16,0,0,15)
M.o(a,u,-1.001,0,0,-16,0,14,0,0)
M.o(a,u,0,0,-1.001,0,-16,0,0,14)
M.o(a,u,0,0,-14.157,0,-16,0,0,1)
M.o(a,u,0,0,-15.157,0,-16,0,0,0)
M.o(a,u,0,0,-16.157,0,-32,0,0,15)
M.o(a,u,0,0,18,0,16,0,0,2)
M.o(a,u,0,0,17,0,16,0,0,1)
M.o(a,u,0,0,16,0,16,0,0,0)
M.o(a,u,0,0,15,0,0,0,0,15)
M.o(a,u,0,0,14,0,0,0,0,14)
M.o(a,u,0,0,13,0,0,0,0,13)
M.o(a,u,0,0,12,0,0,0,0,12)
M.o(a,u,0,0,11,0,0,0,0,11)
M.o(a,u,0,0,10,0,0,0,0,10)
M.o(a,u,0,0,9,0,0,0,0,9)
M.o(a,u,0,0,8,0,0,0,0,8)
M.o(a,u,0,0,7,0,0,0,0,7)
M.o(a,u,0,0,6,0,0,0,0,6)
M.o(a,u,0,0,5,0,0,0,0,5)
M.o(a,u,0,0,4,0,0,0,0,4)
M.o(a,u,0,0,3,0,0,0,0,3)
M.o(a,u,0,0,2,0,0,0,0,2)
M.o(a,u,0,0,1,0,0,0,0,1)
M.o(a,u,0,0,0,0,0,0,0,0)
M.o(a,u,0,0,-1,0,-16,0,0,15)
M.o(a,u,0,0,-2,0,-16,0,0,14)
M.o(a,u,0,0,-3,0,-16,0,0,13)
M.o(a,u,0,0,-4,0,-16,0,0,12)
M.o(a,u,0,0,-5,0,-16,0,0,11)
M.o(a,u,0,0,-6,0,-16,0,0,10)
M.o(a,u,0,0,-7,0,-16,0,0,9)
M.o(a,u,0,0,-8,0,-16,0,0,8)
M.o(a,u,0,0,-9,0,-16,0,0,7)
M.o(a,u,0,0,-10,0,-16,0,0,6)
M.o(a,u,0,0,-11,0,-16,0,0,5)
M.o(a,u,0,0,-12,0,-16,0,0,4)
M.o(a,u,0,0,-13,0,-16,0,0,3)
M.o(a,u,0,0,-14,0,-16,0,0,2)
M.o(a,u,0,0,-15,0,-16,0,0,1)
M.o(a,u,0,0,-16,0,-16,0,0,0)
M.o(a,u,0,0,-17,0,-32,0,0,15)
M.o(a,u,0,0,-18,0,-32,0,0,14)
M.o(a,u,0,0,-19,0,-32,0,0,13)},
$S:0}
M.jv.prototype={
$1:function(a){var u,t,s,r=new B.fD()
r.a=8
r.b=9
u=B.lL(null,r)
u.c8(0,0)
r=$.cm()
M.a4(a,u,0.5,12,0.5,0,-5,0,0.5,11.5,0.5,r)
M.a4(a,u,0.5,14,0.5,0,-5,0,0.5,11.5,0.5,r)
M.a4(a,u,0.5,14,0.5,0,-1,0,0.5,13,0.5,$.bu())
M.a4(a,u,0.5,11.5,0.5,0,-5,0,0.5,11.5,0.5,r)
M.a4(a,u,0.5,12,0.5,1,-5,1,1.5,11.5,1.5,r)
M.a4(a,u,0.5,11.5,0.5,1,-5,1,1.5,11.5,1.5,r)
M.a4(a,u,0.5,12,0.5,1,-5,-1,1.5,11.5,-0.5,r)
M.a4(a,u,0.5,11.5,0.5,1,-5,-1,1.5,11.5,-0.5,r)
M.a4(a,u,0.5,12,0.5,-1,-5,1,-0.5,11.5,1.5,r)
M.a4(a,u,0.5,11.5,0.5,-1,-5,1,-0.5,11.5,1.5,r)
M.a4(a,u,0.5,12,0.5,-1,-5,-1,-0.5,11.5,-0.5,r)
M.a4(a,u,0.5,11.5,0.5,-1,-5,-1,-0.5,11.5,-0.5,r)
t=u.ae(0,10,0)
s=t.f
if(s!=null)s.ar(t.a,t.b,t.c,102)
M.a4(a,u,0.5,14,0.5,0,-5,0,0.5,12.5,0.5,r)
M.a4(a,u,0.5,14,1.5,0,-5,0,0.5,11.5,1.5,r)
M.a4(a,u,0.5,14,-0.5,0,-5,0,0.5,11.5,-0.5,r)
M.a4(a,u,1.5,14,0.5,0,-5,0,1.5,11.5,0.5,r)
M.a4(a,u,-0.5,14,0.5,0,-5,0,-0.5,11.5,0.5,r)
t=$.cl()
M.a4(a,u,2.5,11.5,0.5,-5,0,0,1.25,11.5,0.5,t)
M.a4(a,u,2.5,11.5,0.5,-5,-5,0,1.25,11.5,0.5,new V.ai(t.a|r.a))
M.a4(a,u,-1.5,11.5,0.5,5,0,0,-0.25,11.5,0.5,$.ck())
M.a4(a,u,0.5,11.5,2.5,0,0,-5,0.5,11.5,1.25,$.dn())
M.a4(a,u,0.5,11.5,-1.5,0,0,5,0.5,11.5,-0.25,$.cn())},
$S:0}
M.jw.prototype={
$1:function(a){var u=new V.a3(2,3,4,5)
M.ab(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.P(a,u,0,0,0,0)
M.P(a,u,1,0,2,4)
M.P(a,u,0,1,3,5)
M.P(a,u,1,1,5,9)},
$S:0}
M.jx.prototype={
$1:function(a){var u=new V.a3(2,3,4,5)
M.ab(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.jc(a,u,0,0,0,0)
M.jc(a,u,1,0,2,4)
M.jc(a,u,0,1,3,5)
M.jc(a,u,1,1,5,9)},
$S:0}
M.jy.prototype={
$1:function(a){var u=V.c2()
M.ab(a,u,"[1.000, 0.000,"," 0.000, 1.000]")
M.P(a,u,0,0,0,0)
M.P(a,u,1,0,1,0)
M.P(a,u,-1,0,-1,0)
M.P(a,u,1,1,1,1)
M.P(a,u,-1,-1,-1,-1)
M.P(a,u,0,1,0,1)
M.P(a,u,0,-1,0,-1)
M.P(a,u,2.3,-4.2,2.3,-4.2)
M.P(a,u,-1.5,7.3,-1.5,7.3)},
$S:0}
M.jz.prototype={
$1:function(a){var u=new V.a3(2,0,0,3)
M.ab(a,u,"[2.000, 0.000,"," 0.000, 3.000]")
M.P(a,u,0,0,0,0)
M.P(a,u,1,0,2,0)
M.P(a,u,-1,0,-2,0)
M.P(a,u,1,1,2,3)
M.P(a,u,-1,-1,-2,-3)
M.P(a,u,0,1,0,3)
M.P(a,u,0,-1,0,-3)
M.P(a,u,2.3,-4.2,4.6,-12.6)
M.P(a,u,-1.5,7.3,-3,21.9)},
$S:0}
M.jA.prototype={
$1:function(a){var u=V.c1(0.7853981633974483)
M.ab(a,u,"[0.707, -0.707,"," 0.707,  0.707]")
M.P(a,u,0,0,0,0)
M.P(a,u,1,0,0.70710678118,0.70710678118)
M.P(a,u,0.70710678118,0.70710678118,0,1)
M.P(a,u,0,1,-0.70710678118,0.70710678118)
M.P(a,u,-0.70710678118,0.70710678118,-1,0)
M.P(a,u,-1,0,-0.70710678118,-0.70710678118)
M.P(a,u,-0.70710678118,-0.70710678118,0,-1)
M.P(a,u,0,-1,0.70710678118,-0.70710678118)
M.P(a,u,0.70710678118,-0.70710678118,1,0)},
$S:0}
M.jB.prototype={
$1:function(a){var u="[-1.000,  0.000,",t="  0.000, -1.000]"
M.ab(a,V.c1(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.ab(a,V.c1(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.ab(a,V.c1(-3.141592653589793),u,t)
M.ab(a,V.c1(3.141592653589793),u,t)
M.ab(a,V.c1(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")},
$S:0}
M.jC.prototype={
$1:function(a){var u,t="[1.000, 2.000,",s=" 3.000, 4.000]",r=new V.a3(1,2,3,4)
M.ab(a,r,t,s)
M.ab(a,V.n1(r.aE(0)),t,s)
M.ab(a,new V.a3(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.T(a,1,1,"m11")
M.T(a,2,2,"m21")
M.T(a,3,3,"m12")
M.T(a,4,4,"m22")
M.ab(a,new V.a3(1,2,4,5),t," 4.000, 5.000]")
u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.ab(a,new V.a3(u.a,u.b,u.e,u.f),t," 5.000, 6.000]")},
$S:0}
M.jD.prototype={
$1:function(a){var u="[1.000, 0.000,",t=" 0.000, 1.000]"
M.kK(a,V.c2(),u,t)
M.kK(a,new V.a3(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.kK(a,V.c1(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.ab(a,new V.a3(0,0,0,0).U(0),u,t)},
$S:0}
M.jE.prototype={
$1:function(a){M.ab(a,new V.a3(1,2,3,4).C(0,new V.a3(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.ab(a,new V.a3(5,6,7,8).C(0,new V.a3(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")},
$S:0}
M.jF.prototype={
$1:function(a){var u=new V.W(1,2,3,4,5,6,7,8,9)
M.K(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.x(a,u,0,0,0,0,0,0)
M.x(a,u,1,0,0,1,4,7)
M.x(a,u,0,1,0,2,5,8)
M.x(a,u,0,0,1,3,6,9)
M.x(a,u,1,1,0,3,9,15)
M.x(a,u,1,0,1,4,10,16)
M.x(a,u,0,1,1,5,11,17)
M.x(a,u,1,1,1,6,15,24)},
$S:0}
M.jG.prototype={
$1:function(a){var u=new V.W(1,2,3,4,5,6,7,8,9)
M.K(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.bO(a,u,0,0,0,0,0,0)
M.bO(a,u,1,0,0,1,4,7)
M.bO(a,u,0,1,0,2,5,8)
M.bO(a,u,0,0,1,3,6,9)
M.bO(a,u,1,1,0,3,9,15)
M.bO(a,u,1,0,1,4,10,16)
M.bO(a,u,0,1,1,5,11,17)
M.bO(a,u,1,1,1,6,15,24)},
$S:0}
M.jH.prototype={
$1:function(a){var u=V.c6()
M.K(a,u,"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.x(a,u,0,0,0,0,0,0)
M.x(a,u,1,0,0,1,0,0)
M.x(a,u,0,1,0,0,1,0)
M.x(a,u,0,0,1,0,0,1)
M.x(a,u,1,0,1,1,0,1)
M.x(a,u,-1,0,1,-1,0,1)
M.x(a,u,1,1,1,1,1,1)
M.x(a,u,-1,-1,-1,-1,-1,-1)
M.x(a,u,0,1,1,0,1,1)
M.x(a,u,0,-1,-1,0,-1,-1)
M.x(a,u,2.3,-4.2,-0.2,2.3,-4.2,-0.2)
M.x(a,u,-1.5,7.3,4.8,-1.5,7.3,4.8)},
$S:0}
M.jM.prototype={
$1:function(a){var u=new V.W(2,0,0,0,3,0,0,0,4)
M.K(a,u,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.x(a,u,0,0,0,0,0,0)
M.x(a,u,1,1,1,2,3,4)
M.x(a,u,-1,-1,-1,-2,-3,-4)
M.x(a,u,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.x(a,u,-1.5,7.3,4.8,-3,21.9,19.2)},
$S:0}
M.jN.prototype={
$1:function(a){var u=V.c3(0.7853981633974483)
M.K(a,u,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.x(a,u,1,0,0,1,0,0)
M.x(a,u,2,1,0,2,0.70710678118,0.70710678118)
M.x(a,u,3,0.70710678118,0.70710678118,3,0,1)
M.x(a,u,4,0,1,4,-0.70710678118,0.70710678118)
M.x(a,u,5,-0.70710678118,0.70710678118,5,-1,0)
M.x(a,u,6,-1,0,6,-0.70710678118,-0.70710678118)
M.x(a,u,7,-0.70710678118,-0.70710678118,7,0,-1)
M.x(a,u,8,0,-1,8,0.70710678118,-0.70710678118)
M.x(a,u,9,0.70710678118,-0.70710678118,9,1,0)},
$S:0}
M.jO.prototype={
$1:function(a){var u="[1.000, 0.000,  0.000,",t="[1.000,  0.000,  0.000,",s=" 0.000, -1.000,  0.000,",r=" 0.000,  0.000, -1.000]"
M.K(a,V.c3(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.K(a,V.c3(1.5707963267948966),u," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.K(a,V.c3(-3.141592653589793),t,s,r)
M.K(a,V.c3(3.141592653589793),t,s,r)
M.K(a,V.c3(1.1780972450961724),u," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")},
$S:0}
M.jP.prototype={
$1:function(a){var u=V.c4(0.7853981633974483)
M.K(a,u,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.x(a,u,0,1,0,0,1,0)
M.x(a,u,1,2,0,0.70710678118,2,0.70710678118)
M.x(a,u,0.70710678118,3,0.70710678118,0,3,1)
M.x(a,u,0,4,1,-0.70710678118,4,0.70710678118)
M.x(a,u,-0.70710678118,5,0.70710678118,-1,5,0)
M.x(a,u,-1,6,0,-0.70710678118,6,-0.70710678118)
M.x(a,u,-0.70710678118,7,-0.70710678118,0,7,-1)
M.x(a,u,0,8,-1,0.70710678118,8,-0.70710678118)
M.x(a,u,0.70710678118,9,-0.70710678118,1,9,0)},
$S:0}
M.jQ.prototype={
$1:function(a){var u=" 0.000, 1.000,  0.000,",t="[-1.000, 0.000,  0.000,",s="  0.000, 1.000,  0.000,",r="  0.000, 0.000, -1.000]"
M.K(a,V.c4(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.K(a,V.c4(1.5707963267948966),"[0.000, 0.000, -1.000,",u," 1.000, 0.000,  0.000]")
M.K(a,V.c4(-3.141592653589793),t,s,r)
M.K(a,V.c4(3.141592653589793),t,s,r)
M.K(a,V.c4(1.1780972450961724),"[0.383, 0.000, -0.924,",u," 0.924, 0.000,  0.383]")},
$S:0}
M.jR.prototype={
$1:function(a){var u=V.c5(0.7853981633974483)
M.K(a,u,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.x(a,u,0,0,1,0,0,1)
M.x(a,u,1,0,2,0.70710678118,0.70710678118,2)
M.x(a,u,0.70710678118,0.70710678118,3,0,1,3)
M.x(a,u,0,1,4,-0.70710678118,0.70710678118,4)
M.x(a,u,-0.70710678118,0.70710678118,5,-1,0,5)
M.x(a,u,-1,0,6,-0.70710678118,-0.70710678118,6)
M.x(a,u,-0.70710678118,-0.70710678118,7,0,-1,7)
M.x(a,u,0,-1,8,0.70710678118,-0.70710678118,8)
M.x(a,u,0.70710678118,-0.70710678118,9,1,0,9)},
$S:0}
M.jS.prototype={
$1:function(a){var u=" 0.000,  0.000, 1.000]",t="[-1.000,  0.000, 0.000,",s="  0.000, -1.000, 0.000,",r="  0.000,  0.000, 1.000]"
M.K(a,V.c5(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.K(a,V.c5(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,",u)
M.K(a,V.c5(-3.141592653589793),t,s,r)
M.K(a,V.c5(3.141592653589793),t,s,r)
M.K(a,V.c5(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,",u)},
$S:0}
M.jT.prototype={
$1:function(a){var u,t="[1.000, 2.000, 3.000,",s=" 4.000, 5.000, 6.000,",r=" 7.000, 8.000, 9.000]",q=" 0.000, 0.000, 1.000]",p=new V.W(1,2,3,4,5,6,7,8,9)
M.K(a,p,t,s,r)
M.K(a,V.n2(p.aE(0)),t,s,r)
M.K(a,new V.W(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.T(a,1,1,"m11")
M.T(a,2,2,"m21")
M.T(a,3,3,"m31")
M.T(a,4,4,"m12")
M.T(a,5,5,"m22")
M.T(a,6,6,"m32")
M.T(a,7,7,"m13")
M.T(a,8,8,"m23")
M.T(a,9,9,"m33")
M.K(a,new V.W(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,",q)
M.K(a,new V.W(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,",q)
u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.K(a,new V.W(u.a,u.b,u.c,u.e,u.f,u.r,u.y,u.z,u.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")},
$S:0}
M.jI.prototype={
$1:function(a){var u="[1.000, 0.000, 0.000,",t=" 0.000, 1.000, 0.000,",s=" 0.000, 0.000, 1.000]"
M.eW(a,V.c6(),u,t,s)
M.eW(a,new V.W(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.eW(a,V.c3(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.eW(a,V.c4(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.eW(a,V.c5(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.K(a,new V.W(0,0,0,0,0,0,0,0,0).U(0),u,t,s)},
$S:0}
M.jJ.prototype={
$1:function(a){var u="[ 3.000,  3.600,  4.200,",t="  6.600,  8.100,  9.600,",s=" 10.200, 12.600, 15.000]"
M.K(a,new V.W(1,2,3,4,5,6,7,8,9).C(0,new V.W(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),u,t,s)
M.K(a,new V.W(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).C(0,new V.W(1,2,3,4,5,6,7,8,9)),u,t,s)},
$S:0}
M.jK.prototype={
$1:function(a){var u=new V.W(1,2,3,4,5,6,7,8,9)
M.K(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.ja(a,u,0,0,3,6)
M.ja(a,u,1,0,4,10)
M.ja(a,u,0,1,5,11)
M.ja(a,u,1,1,6,15)},
$S:0}
M.jL.prototype={
$1:function(a){var u=new V.W(1,2,3,4,5,6,7,8,9)
M.K(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.jd(a,u,0,0,0,0)
M.jd(a,u,1,0,1,4)
M.jd(a,u,0,1,2,5)
M.jd(a,u,1,1,3,9)},
$S:0}
M.jU.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.t(a,u,0,0,0,0,0,0,0,0)
M.t(a,u,1,0,0,0,1,5,9,13)
M.t(a,u,0,1,0,0,2,6,10,14)
M.t(a,u,1,1,0,0,3,11,19,27)
M.t(a,u,0,0,1,0,3,7,11,15)
M.t(a,u,1,0,1,0,4,12,20,28)
M.t(a,u,0,1,1,0,5,13,21,29)
M.t(a,u,1,1,1,0,6,18,30,42)
M.t(a,u,0,0,0,1,4,8,12,16)
M.t(a,u,1,0,0,1,5,13,21,29)
M.t(a,u,0,1,0,1,6,14,22,30)
M.t(a,u,1,1,0,1,7,19,31,43)
M.t(a,u,0,0,1,1,7,15,23,31)
M.t(a,u,1,0,1,1,8,20,32,44)
M.t(a,u,0,1,1,1,9,21,33,45)
M.t(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.jV.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.ak(a,u,0,0,0,0,0,0,0,0)
M.ak(a,u,1,0,0,0,1,5,9,13)
M.ak(a,u,0,1,0,0,2,6,10,14)
M.ak(a,u,1,1,0,0,3,11,19,27)
M.ak(a,u,0,0,1,0,3,7,11,15)
M.ak(a,u,1,0,1,0,4,12,20,28)
M.ak(a,u,0,1,1,0,5,13,21,29)
M.ak(a,u,1,1,1,0,6,18,30,42)
M.ak(a,u,0,0,0,1,4,8,12,16)
M.ak(a,u,1,0,0,1,5,13,21,29)
M.ak(a,u,0,1,0,1,6,14,22,30)
M.ak(a,u,1,1,0,1,7,19,31,43)
M.ak(a,u,0,0,1,1,7,15,23,31)
M.ak(a,u,1,0,1,1,8,20,32,44)
M.ak(a,u,0,1,1,1,9,21,33,45)
M.ak(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.jW.prototype={
$1:function(a){var u=V.aR()
M.I(a,u,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.t(a,u,0,0,0,0,0,0,0,0)
M.t(a,u,1,0,0,0,1,0,0,0)
M.t(a,u,0,1,0,0,0,1,0,0)
M.t(a,u,0,0,1,0,0,0,1,0)
M.t(a,u,1,0,1,0,1,0,1,0)
M.t(a,u,0,1,0,1,0,1,0,1)
M.t(a,u,1,1,1,1,1,1,1,1)
M.t(a,u,-1,0,1,0,-1,0,1,0)
M.t(a,u,1,1,1,0,1,1,1,0)
M.t(a,u,-1,-1,-1,-1,-1,-1,-1,-1)
M.t(a,u,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.t(a,u,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)},
$S:0}
M.k2.prototype={
$1:function(a){var u=V.lk(2,3,4,5)
M.I(a,u,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.t(a,u,0,0,0,0,0,0,0,0)
M.t(a,u,1,1,1,1,2,3,4,5)
M.t(a,u,-1,-1,-1,-1,-2,-3,-4,-5)
M.t(a,u,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.t(a,u,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)},
$S:0}
M.k3.prototype={
$1:function(a){var u=V.c7(0.7853981633974483)
M.I(a,u,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.t(a,u,1,0,0,9,1,0,0,9)
M.t(a,u,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.t(a,u,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.t(a,u,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.t(a,u,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.t(a,u,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.t(a,u,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.t(a,u,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.t(a,u,9,0.70710678118,-0.70710678118,1,9,1,0,1)},
$S:0}
M.k4.prototype={
$1:function(a){var u="[1.000, 0.000,  0.000, 0.000,",t=" 0.000, 0.000,  0.000, 1.000]",s="[1.000,  0.000,  0.000, 0.000,",r=" 0.000, -1.000,  0.000, 0.000,",q=" 0.000,  0.000, -1.000, 0.000,",p=" 0.000,  0.000,  0.000, 1.000]"
M.I(a,V.c7(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.I(a,V.c7(1.5707963267948966),u," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,",t)
M.I(a,V.c7(-3.141592653589793),s,r,q,p)
M.I(a,V.c7(3.141592653589793),s,r,q,p)
M.I(a,V.c7(1.1780972450961724),u," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,",t)},
$S:0}
M.k5.prototype={
$1:function(a){var u=V.c8(0.7853981633974483)
M.I(a,u,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.t(a,u,0,1,0,9,0,1,0,9)
M.t(a,u,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.t(a,u,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.t(a,u,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.t(a,u,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.t(a,u,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.t(a,u,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.t(a,u,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.t(a,u,0.70710678118,9,-0.70710678118,1,1,9,0,1)},
$S:0}
M.k6.prototype={
$1:function(a){var u=" 0.000, 1.000,  0.000, 0.000,",t=" 0.000, 0.000,  0.000, 1.000]",s="[-1.000, 0.000,  0.000, 0.000,",r="  0.000, 1.000,  0.000, 0.000,",q="  0.000, 0.000, -1.000, 0.000,",p="  0.000, 0.000,  0.000, 1.000]"
M.I(a,V.c8(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.I(a,V.c8(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,",u," 1.000, 0.000,  0.000, 0.000,",t)
M.I(a,V.c8(-3.141592653589793),s,r,q,p)
M.I(a,V.c8(3.141592653589793),s,r,q,p)
M.I(a,V.c8(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,",u," 0.924, 0.000,  0.383, 0.000,",t)},
$S:0}
M.k7.prototype={
$1:function(a){var u=V.c9(0.7853981633974483)
M.I(a,u,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.t(a,u,0,0,1,9,0,0,1,9)
M.t(a,u,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.t(a,u,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.t(a,u,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.t(a,u,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.t(a,u,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.t(a,u,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.t(a,u,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.t(a,u,0.70710678118,-0.70710678118,9,1,1,0,9,1)},
$S:0}
M.k8.prototype={
$1:function(a){var u=" 0.000,  0.000, 1.000, 0.000,",t=" 0.000,  0.000, 0.000, 1.000]",s="[-1.000,  0.000, 0.000, 0.000,",r="  0.000, -1.000, 0.000, 0.000,",q="  0.000,  0.000, 1.000, 0.000,",p="  0.000,  0.000, 0.000, 1.000]"
M.I(a,V.c9(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.I(a,V.c9(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,",u,t)
M.I(a,V.c9(-3.141592653589793),s,r,q,p)
M.I(a,V.c9(3.141592653589793),s,r,q,p)
M.I(a,V.c9(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,",u,t)},
$S:0}
M.k9.prototype={
$1:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="[ 1.000,  2.000,  3.000,  4.000,",d="  5.000,  6.000,  7.000,  8.000,",c="  9.000, 10.000, 11.000, 12.000,",b=" 13.000, 14.000, 15.000, 16.000]",a=" 0.000, 0.000, 0.000, 1.000]",a0=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a1,a0,e,d,c,b)
M.I(a1,V.n3(a0.aE(0)),e,d,c,b)
u=a0.a
t=a0.e
s=a0.y
r=a0.cx
q=a0.b
p=a0.f
o=a0.z
n=a0.cy
m=a0.c
l=a0.r
k=a0.Q
j=a0.db
i=a0.d
h=a0.x
g=a0.ch
f=a0.dx
M.I(a1,V.U(u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.T(a1,u,1,"m11")
M.T(a1,q,2,"m21")
M.T(a1,m,3,"m31")
M.T(a1,i,4,"m41")
M.T(a1,t,5,"m12")
M.T(a1,p,6,"m22")
M.T(a1,l,7,"m32")
M.T(a1,h,8,"m42")
M.T(a1,s,9,"m13")
M.T(a1,o,10,"m23")
M.T(a1,k,11,"m33")
M.T(a1,g,12,"m43")
M.T(a1,r,13,"m14")
M.T(a1,n,14,"m24")
M.T(a1,j,15,"m34")
M.T(a1,f,16,"m44")
M.I(a1,V.ll(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,",a)
M.I(a1,V.U(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,",a)
M.I(a1,V.U(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,",a)},
$S:0}
M.jX.prototype={
$1:function(a){var u="[1.000, 0.000, 0.000, 0.000,",t=" 0.000, 1.000, 0.000, 0.000,",s=" 0.000, 0.000, 1.000, 0.000,",r=" 0.000, 0.000, 0.000, 1.000]",q="  0.000, 0.000, 0.000, 1.000]"
M.eX(a,V.aR(),u,t,s,r)
M.eX(a,V.lk(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,",r)
M.eX(a,V.c7(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.eX(a,V.c8(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,",q)
M.eX(a,V.c9(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,",q)
M.I(a,V.U(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).U(0),u,t,s,r)},
$S:0}
M.jY.prototype={
$1:function(a){M.I(a,V.U(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).C(0,V.U(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.I(a,V.U(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).C(0,V.U(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")},
$S:0}
M.jZ.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bN(a,u,0,0,0,4,8,12)
M.bN(a,u,1,0,0,5,13,21)
M.bN(a,u,0,1,0,6,14,22)
M.bN(a,u,1,1,0,7,19,31)
M.bN(a,u,0,0,1,7,15,23)
M.bN(a,u,1,0,1,8,20,32)
M.bN(a,u,0,1,1,9,21,33)
M.bN(a,u,1,1,1,10,26,42)},
$S:0}
M.k_.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bP(a,u,0,0,0,0,0,0)
M.bP(a,u,1,0,0,1,5,9)
M.bP(a,u,0,1,0,2,6,10)
M.bP(a,u,1,1,0,3,11,19)
M.bP(a,u,0,0,1,3,7,11)
M.bP(a,u,1,0,1,4,12,20)
M.bP(a,u,0,1,1,5,13,21)
M.bP(a,u,1,1,1,6,18,30)},
$S:0}
M.k0.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.jb(a,u,0,0,4,8)
M.jb(a,u,1,0,5,13)
M.jb(a,u,0,1,6,14)
M.jb(a,u,1,1,7,19)},
$S:0}
M.k1.prototype={
$1:function(a){var u=V.U(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.I(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.je(a,u,0,0,0,0)
M.je(a,u,1,0,1,5)
M.je(a,u,0,1,2,6)
M.je(a,u,1,1,3,11)},
$S:0}
M.ka.prototype={
$1:function(a){var u,t=$.ly
if(t==null)t=$.ly=V.dR(0,0,0,0)
M.dc(a,t,0,0,0,0,0,0)
M.dc(a,t,1,2,0,0,1,2)
M.dc(a,t,-1,-2,-1,-2,1,2)
M.dc(a,V.dR(0,0,1,2),-1,-2,-1,-2,2,4)
u=V.dR(-1,-2,2,4)
M.dc(a,u,1,1,-1,-2,2,4)
M.dc(a,u,4,4,-1,-2,5,6)},
$S:0}
M.kb.prototype={
$1:function(a){var u,t=$.lz
if(t==null)t=$.lz=V.N(0,0,0,0,0,0)
M.dd(a,t,0,0,0,0,0,0,0,0,0)
M.dd(a,t,1,2,3,0,0,0,1,2,3)
M.dd(a,t,-1,-2,-3,-1,-2,-3,1,2,3)
M.dd(a,V.N(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
u=V.N(-1,-2,-3,2,4,6)
M.dd(a,u,1,1,1,-1,-2,-3,2,4,6)
M.dd(a,u,4,4,4,-1,-2,-3,5,6,7)},
$S:0}
M.kc.prototype={
$1:function(a){var u,t,s,r=null
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,2,2,1,1,1),new V.F(0,0,0),r)
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,0,0,1,1,1),new V.F(0.5,0,0),r)
u=V.N(0,0,0,1,1,1)
t=V.N(2,0,0,1,1,1)
s=$.ck()
M.aE(a,u,t,new V.F(1,0,0),new V.aH(1,s))
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,0,0,1,1,1),new V.F(4,0,0),new V.aH(0.25,s))
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,0,0,1,1,1),new V.F(-4,0,0),r)
M.aE(a,V.N(2,0,0,1,1,1),V.N(0,0,0,1,1,1),new V.F(4,0,0),r)
M.aE(a,V.N(2,0,0,1,1,1),V.N(0,0,0,1,1,1),new V.F(-4,0,0),new V.aH(0.25,$.cl()))
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,2,2,1,1,1),new V.F(4,0,0),r)
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,2,2,1,1,1),new V.F(2,2.4,2.8),new V.aH(0.5,s))
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,2,2,1,1,1),new V.F(2.8,2,2.4),new V.aH(0.5,$.dm()))
M.aE(a,V.N(0,0,0,1,1,1),V.N(2,2,2,1,1,1),new V.F(2.4,2.8,2),new V.aH(0.5,$.cn()))
s=V.N(0,11.13,0,0,1.5,0)
t=V.N(0,8,0,0,1,0)
u=$.cm()
M.aE(a,s,t,new V.F(0,-2.45,0),new V.aH(0.869387755102041,u))
M.aE(a,V.N(0.25,10,0.1,0.25,2,0.25),V.N(0,9,0,1,1,1),new V.F(0,-1,-0.3),new V.aH(0,u))},
$S:0}
M.kd.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=V.aR(),f=V.ll(0,0,-5),e=new M.a7()
e.a=new V.w(0,0,0)
e.b=new V.w(0,0,1.020051002550127)
u=new M.a7()
u.a=new V.w(1,0,0)
u.b=new V.w(-0.3464101615137755,0,1.020051002550127)
t=new M.a7()
t.a=new V.w(-1,0,0)
t.b=new V.w(0.3464101615137755,0,1.020051002550127)
s=new M.a7()
s.a=new V.w(0,1,0)
s.b=new V.w(0,-0.3464101615137755,1.020051002550127)
r=new M.a7()
r.a=new V.w(0,-1,0)
r.b=new V.w(0,0.3464101615137755,1.020051002550127)
q=new M.a7()
q.a=new V.w(0,0,1)
q.b=new V.w(0,0,1.016717502541794)
p=new M.a7()
p.a=new V.w(0,0,-1)
p.b=new V.w(0,0,1.025051252562628)
o=new M.a7()
o.a=new V.w(1,1,1)
o.b=new V.w(-0.2886751345948129,-0.2886751345948129,1.016717502541794)
n=new M.a7()
n.a=new V.w(1,-1,1)
n.b=new V.w(-0.2886751345948129,0.2886751345948129,1.016717502541794)
m=new M.a7()
m.a=new V.w(1,1,-1)
m.b=new V.w(-0.4330127018922194,-0.4330127018922194,1.025051252562628)
l=new M.a7()
l.a=new V.w(1,-1,-1)
l.b=new V.w(-0.4330127018922194,0.4330127018922194,1.025051252562628)
k=new M.a7()
k.a=new V.w(-1,1,1)
k.b=new V.w(0.2886751345948129,-0.2886751345948129,1.016717502541794)
j=new M.a7()
j.a=new V.w(-1,-1,1)
j.b=new V.w(0.2886751345948129,0.2886751345948129,1.016717502541794)
i=new M.a7()
i.a=new V.w(-1,1,-1)
i.b=new V.w(0.4330127018922194,-0.4330127018922194,1.025051252562628)
h=new M.a7()
h.a=new V.w(-1,-1,-1)
h.b=new V.w(0.4330127018922194,0.4330127018922194,1.025051252562628)
M.oj(a,g,f,H.b([e,u,t,s,r,q,p,o,n,m,l,k,j,i,h],[M.a7]))},
$S:0}
M.a7.prototype={}
M.cd.prototype={}
M.ce.prototype={
ed:function(a){var u="test_body body_hidden",t=this.b
if(t.className!==u)t.className=u
else t.className="test_body body_shown"},
a_:function(a){var u,t,s,r,q,p=this
if(p.d!=null){u=p.e
if(u==null)u=new P.aP(Date.now(),!1)
t="("+C.c.aS(C.d.W(P.ku(u.a-p.d.a,0).a,1000)*0.001,2)+"s)"}else t=""
if(!H.E(p.y)){s=p.c
s.className="test_header queued"
s.textContent="Queued: "+p.r+" "+t}else if(H.E(p.z)){s=p.c
s.className="test_header failed"
s.textContent="Failed: "+p.r+" "+t}else{s=H.E(p.Q)
r=p.c
q=p.r
if(s){r.className="test_header passed"
r.textContent="Passed: "+q+" "+t}else{r.className="test_header running"
r.textContent="Running: "+q+" "+t}}p.a.a_(0)},
f4:function(){var u=this,t=null,s=P.mQ(new M.hV(u),t).bn(new M.hW(u),t),r=new M.hX(u),q=H.y(s,0),p=$.X,o=new P.as(p,[q])
if(p!==C.e)r=P.lR(r,p)
s.aY(new P.aX(o,2,t,r,[q,q]))
o.bn(new M.hY(u),t)},
j:function(a,b){var u,t,s=this.a.c.cW(a,0,a.length),r=s==null?a:s
r=H.dk(r," ","&nbsp;")
u='</dir><br class="'+b+'"><dir class="'+b+'">'
t=H.dk(r,"\n",u)
r=this.b
C.C.cs(r,J.mv(r.innerHTML,'<dir class="'+b+'">'+t+"</dir>"))},
k:function(){var u=this
if(!H.E(u.z)){u.z=!0
u.b.className="test_body body_shown"
u.a_(0)}}}
M.hV.prototype={
$0:function(){var u=this.a
u.y=!0
u.a_(0)},
$S:1}
M.hW.prototype={
$1:function(a){var u=this.a
u.d=new P.aP(Date.now(),!1)
u.f.$1(u)
u.e=new P.aP(Date.now(),!1)},
$S:5}
M.hX.prototype={
$2:function(a,b){var u=this.a
u.e=new P.aP(Date.now(),!1)
u.j("\nException: "+H.d(a),"error_log")
u.k()
u.j("\nStack: "+H.d(b),"warning_log")},
$S:9}
M.hY.prototype={
$1:function(a){var u,t,s,r=this.a
r.Q=!0
u=r.a
t=u.f
if(typeof t!=="number")return t.V()
u.f=t+1
if(H.E(r.z)){t=u.r
if(typeof t!=="number")return t.V()
u.r=t+1}u.a_(0)
t=u.f
u=u.e
s=u.length
if(typeof t!=="number")return t.aq()
if(t<s){if(t<0||t>=u.length)return H.h(u,t)
P.dY(C.f,u[t].gcd())}r.a_(0)},
$S:5}
M.hZ.prototype={
aI:function(a,b,c){var u,t,s=W.mS("checkbox")
s.className="log_checkbox"
s.checked=!0
u=W.l
W.aa(s,"change",H.j(new M.i_(c,s),{func:1,ret:-1,args:[u]}),!1,u)
a.appendChild(s)
t=document.createElement("span")
t.textContent=b
a.appendChild(t)},
a_:function(a){var u,t,s=this,r=C.c.aS(C.d.W(P.ku(Date.now()-s.d.a,0).a,1000)*0.001,2),q=s.e.length,p=s.f
if(typeof p!=="number")return H.A(p)
if(q<=p){p=s.r
if(typeof p!=="number")return p.cq()
u=s.b
if(p>0){u.className="top_header failed"
if(p===1)u.textContent="Failed 1 Test ("+r+"s)"
else u.textContent="Failed "+p+" Tests ("+r+"s)"}else{u.textContent="Tests Passed ("+r+"s)"
u.className="top_header passed"}}else{t=C.F.aS(p/q*100,2)
s.b.textContent="Running Tests: "+H.d(s.f)+"/"+q+" ("+t+"%)"
p=s.r
if(typeof p!=="number")return p.cq()
u=s.b
if(p>0){u.textContent=H.d(u.textContent)+" - "+H.d(s.r)+" failed)"
u.className="topHeader failed"}else u.className="topHeader running"}},
p:function(a,b,c){var u,t,s,r,q=this
H.j(c,{func:1,ret:-1,args:[M.cd]})
if(b.length<=0)b=H.d(c)
if(!C.b.bv(b,q.x))return
u=q.e
t=new M.ce(q,c,b,!1)
s=document
r=s.createElement("div")
r.className="test_body body_hidden"
t.b=r
s=s.createElement("div")
s.className="running top_header"
r=W.ac
W.aa(s,"click",H.j(t.gec(),{func:1,ret:-1,args:[r]}),!1,r)
t.c=s
r=q.a
r.appendChild(s)
r.appendChild(t.b)
t.e=t.d=null
t.Q=t.z=t.y=!1
t.a_(0);(u&&C.a).i(u,t)
q.a_(0)
u=q.f
if(typeof u!=="number")return u.V()
t=q.e
s=t.length
if(u+1===s){if(u>=s)return H.h(t,u)
P.dY(C.f,t[u].gcd())}},
seb:function(a){this.e=H.p(a,"$ic",[M.ce],"$ac")}}
M.i_.prototype={
$1:function(a){var u,t,s=document,r="."+this.a,q=W.ae
H.nP(q,q,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=s.querySelectorAll(r)
u=H.E(this.b.checked)?"block":"none"
for(t=0;t<r.length;++t){s=H.q(r[t],"$iae").style
s.display=u}},
$S:14}
M.ke.prototype={
$1:function(a){var u,t
M.am(a,$.kr(),"None",0,0,0)
M.am(a,$.az(),"Pos",1,1,3)
M.am(a,$.ay(),"Norm",2,1,3)
M.am(a,$.ax(),"Binm",4,1,3)
M.am(a,$.ao(),"Txt2D",8,1,2)
M.am(a,$.aN(),"TxtCube",16,1,3)
M.am(a,$.aM(),"Clr3",32,1,3)
M.am(a,$.aZ(),"Clr4",64,1,4)
M.am(a,$.aG(),"Weight",128,1,1)
M.am(a,$.aF(),"Bending",256,1,4)
u=$.az()
t=$.ay()
M.am(a,new Z.aK(u.a|t.a),"Pos|Norm",3,2,6)
t=$.az()
u=$.ao()
M.am(a,new Z.aK(t.a|u.a),"Pos|Txt2D",9,2,5)
u=$.az()
t=$.ay()
M.am(a,new Z.aK(u.a|t.a|$.ax().a|$.ao().a|$.aM().a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
t=$.ao()
u=$.aG()
M.am(a,new Z.aK(t.a|u.a),"Txt2D|Weight",136,2,3)
u=$.aN()
t=$.aF()
M.am(a,new Z.aK(u.a|t.a),"TxtCube|Bending",272,2,7)},
$S:0}
M.kf.prototype={
$1:function(a){var u=$.az(),t=$.ay(),s=new Z.aK(u.a|t.a|$.ax().a|$.ao().a|$.aN().a|$.aM().a)
M.ag(a,s,u,!0,0,0)
M.ag(a,s,$.ay(),!0,1,3)
M.ag(a,s,$.ax(),!0,2,6)
M.ag(a,s,$.ao(),!0,3,9)
M.ag(a,s,$.aN(),!0,4,11)
M.ag(a,s,$.aM(),!0,5,14)
M.ag(a,s,$.aZ(),!1,-1,-1)
M.ag(a,s,$.aG(),!1,-1,-1)
M.ag(a,s,$.aF(),!1,-1,-1)},
$S:0}
M.kg.prototype={
$1:function(a){var u=$.az(),t=$.ax(),s=new Z.aK(u.a|t.a|$.aZ().a|$.aG().a|$.aF().a)
M.ag(a,s,u,!0,0,0)
M.ag(a,s,$.ay(),!1,-1,-1)
M.ag(a,s,$.ax(),!0,1,3)
M.ag(a,s,$.ao(),!1,-1,-1)
M.ag(a,s,$.aM(),!1,-1,-1)
M.ag(a,s,$.aZ(),!0,2,6)
M.ag(a,s,$.aG(),!0,3,10)
M.ag(a,s,$.aF(),!0,4,11)},
$S:0};(function aliases(){var u=J.a.prototype
u.cu=u.h
u=J.dE.prototype
u.cw=u.h
u=P.k.prototype
u.cv=u.aU
u=W.ae.prototype
u.aW=u.X
u=W.ew.prototype
u.cA=u.a5
u=V.dJ.prototype
u.cz=u.ao
u.bx=u.h})();(function installTearOffs(){var u=hunkHelpers._instance_1i,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J.aI.prototype,"gei","i",30)
t(P,"nR","np",8)
t(P,"nS","nq",8)
t(P,"nT","nr",8)
s(P,"lY","nD",2)
r(W,"o2",4,null,["$4"],["nt"],18,0)
r(W,"o3",4,null,["$4"],["nu"],18,0)
var l
q(l=E.a9.prototype,"gc5",0,0,null,["$1","$0"],["c6","eT"],3,0)
q(l,"gc3",0,0,null,["$1","$0"],["c4","eS"],3,0)
q(l,"gc1",0,0,null,["$1","$0"],["c2","eP"],3,0)
p(l,"geN","eO",7)
p(l,"geQ","eR",7)
q(l=E.dX.prototype,"gby",0,0,null,["$1","$0"],["bz","aX"],3,0)
o(l,"gf3","cc",2)
n(l=X.e2.prototype,"gdw","dz",11)
n(l,"gdh","di",11)
n(l,"gdq","dr",4)
n(l,"gdC","dD",20)
n(l,"gdA","dB",20)
n(l,"gdF","dG",4)
n(l,"gdJ","dK",4)
n(l,"gdu","dv",4)
n(l,"gdH","dI",4)
n(l,"gds","dt",4)
n(l,"gdL","dM",29)
n(l,"gdN","dO",11)
n(l,"gdT","dU",12)
n(l,"gdP","dQ",12)
n(l,"gdR","dS",12)
m(V.ad.prototype,"gl","ay",13)
m(V.F.prototype,"gl","ay",13)
m(V.bJ.prototype,"gl","ay",13)
q(l=M.dz.prototype,"ga2",0,0,null,["$1","$0"],["a7","cJ"],3,0)
p(l,"gdk","dl",7)
p(l,"gdm","dn",7)
q(X.dP.prototype,"gbN",0,0,null,["$1","$0"],["ai","dj"],3,0)
n(l=M.ce.prototype,"gec","ed",35)
o(l,"gcd","f4",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.kA,J.a,J.bj,P.ej,P.k,H.cH,P.bl,H.bZ,H.e1,H.i9,P.bA,H.cv,H.eB,P.af,H.fU,H.fV,H.fQ,H.hR,P.j2,P.aX,P.as,P.e4,P.hL,P.cW,P.hM,P.al,P.j6,P.iV,P.cf,P.iO,P.v,P.cw,P.fK,P.j4,P.Y,P.aP,P.ah,P.bX,P.hi,P.dU,P.iB,P.fF,P.bC,P.c,P.R,P.S,P.ap,P.e,P.bH,W.fj,W.bK,W.z,W.dN,W.ew,W.j_,W.dB,W.aB,W.iU,W.eL,P.iP,O.bz,O.cI,E.fc,E.a9,E.hn,E.dX,Z.aK,D.fe,D.cC,D.Q,X.ds,X.dF,X.fS,X.fX,X.cJ,X.h6,X.i5,X.e2,V.du,V.fx,V.ai,V.aH,V.a3,V.W,V.bE,V.a6,V.w,V.bF,V.cR,V.bG,V.ad,V.F,V.bJ,M.dz,F.bB,F.c_,F.cO,F.dT,F.hw,F.hx,F.hy,F.d0,F.ii,F.ij,F.ik,F.il,O.cc,V.f5,V.bo,V.dJ,V.hv,V.cU,V.dZ,V.cY,V.i4,X.dt,X.dW,X.dP,V.hz,Q.m,Q.a5,Q.hF,Q.hP,Q.u,B.aO,B.ff,B.bV,B.fg,B.fD,B.ip,M.a7,M.cd,M.hZ])
s(J.a,[J.fO,J.fP,J.dE,J.aI,J.cG,J.bD,H.cM,W.f,W.f4,W.dr,W.b1,W.b2,W.V,W.e6,W.fn,W.fp,W.e8,W.dy,W.ea,W.fr,W.l,W.ec,W.b4,W.fI,W.ef,W.dI,W.h0,W.ek,W.el,W.b6,W.em,W.ep,W.b7,W.et,W.ev,W.b9,W.ex,W.ba,W.eC,W.aT,W.eF,W.i3,W.bc,W.eH,W.i7,W.ie,W.eM,W.eO,W.eQ,W.eS,W.eU,P.bn,P.eh,P.bq,P.er,P.hl,P.eD,P.br,P.eJ,P.f8,P.e5,P.cS,P.ez])
s(J.dE,[J.hj,J.d_,J.bm])
t(J.kz,J.aI)
s(J.cG,[J.dD,J.dC])
t(P.fW,P.ej)
s(P.fW,[H.e0,W.kH,W.ar])
t(H.a8,H.e0)
s(P.k,[H.fu,H.e3])
s(H.fu,[H.c0,H.dG])
t(H.h_,H.c0)
t(H.io,P.bl)
s(P.bA,[H.hf,H.fR,H.ic,H.e_,H.ht,P.f7,P.dO,P.b_,P.id,P.ib,P.cV,P.fh,P.fm])
s(H.cv,[H.kp,H.hU,H.kk,H.kl,H.km,P.is,P.ir,P.it,P.iu,P.j3,P.fH,P.iC,P.iG,P.iD,P.iE,P.iF,P.iJ,P.iK,P.iI,P.iH,P.hN,P.hO,P.j8,P.iS,P.iR,P.iT,P.fZ,P.fs,P.ft,W.fv,W.h2,W.h4,W.hs,W.hK,W.iA,W.he,W.hd,W.iW,W.iX,W.j1,W.j5,P.kh,P.fa,E.ho,E.hp,E.hq,E.i2,D.fz,D.fA,V.hB,V.hA,Q.hG,Q.hH,M.jf,M.jg,M.jh,M.ji,M.jk,M.jj,M.jl,M.jm,M.jn,M.jo,M.jp,M.jq,M.jr,M.js,M.jt,M.ju,M.jv,M.jw,M.jx,M.jy,M.jz,M.jA,M.jB,M.jC,M.jD,M.jE,M.jF,M.jG,M.jH,M.jM,M.jN,M.jO,M.jP,M.jQ,M.jR,M.jS,M.jT,M.jI,M.jJ,M.jK,M.jL,M.jU,M.jV,M.jW,M.k2,M.k3,M.k4,M.k5,M.k6,M.k7,M.k8,M.k9,M.jX,M.jY,M.jZ,M.k_,M.k0,M.k1,M.ka,M.kb,M.kc,M.kd,M.hV,M.hW,M.hX,M.hY,M.i_,M.ke,M.kf,M.kg])
s(H.hU,[H.hI,H.cs])
t(H.iq,P.f7)
t(P.fY,P.af)
s(P.fY,[H.aQ,W.iv])
t(H.dK,H.cM)
s(H.dK,[H.d4,H.d6])
t(H.d5,H.d4)
t(H.cL,H.d5)
t(H.d7,H.d6)
t(H.dL,H.d7)
s(H.dL,[H.h7,H.h8,H.h9,H.ha,H.hb,H.dM,H.hc])
t(P.iQ,P.j6)
t(P.iN,P.iV)
t(P.cx,P.hM)
t(P.fw,P.cw)
s(P.cx,[P.fJ,P.ih])
t(P.ig,P.fw)
s(P.ah,[P.a1,P.B])
s(P.b_,[P.cb,P.fL])
s(W.f,[W.C,W.fC,W.b8,W.d8,W.bb,W.aU,W.da,W.im,W.d1,P.fb,P.bU])
s(W.C,[W.ae,W.by,W.d2])
s(W.ae,[W.r,P.n])
s(W.r,[W.dq,W.f6,W.cr,W.bx,W.cu,W.cA,W.fE,W.cF,W.hu,W.dV,W.hS,W.hT,W.cX])
s(W.b1,[W.cy,W.fk,W.fl])
t(W.fi,W.b2)
t(W.cz,W.e6)
t(W.e9,W.e8)
t(W.dx,W.e9)
t(W.eb,W.ea)
t(W.fq,W.eb)
t(W.b3,W.dr)
t(W.ed,W.ec)
t(W.fB,W.ed)
t(W.eg,W.ef)
t(W.cE,W.eg)
t(W.bI,W.l)
s(W.bI,[W.b5,W.ac,W.aV])
t(W.h1,W.ek)
t(W.h3,W.el)
t(W.en,W.em)
t(W.h5,W.en)
t(W.eq,W.ep)
t(W.cN,W.eq)
t(W.eu,W.et)
t(W.hk,W.eu)
t(W.hr,W.ev)
t(W.d9,W.d8)
t(W.hC,W.d9)
t(W.ey,W.ex)
t(W.hD,W.ey)
t(W.hJ,W.eC)
t(W.eG,W.eF)
t(W.i0,W.eG)
t(W.db,W.da)
t(W.i1,W.db)
t(W.eI,W.eH)
t(W.i6,W.eI)
t(W.bf,W.ac)
t(W.eN,W.eM)
t(W.iw,W.eN)
t(W.e7,W.dy)
t(W.eP,W.eO)
t(W.iL,W.eP)
t(W.eR,W.eQ)
t(W.eo,W.eR)
t(W.eT,W.eS)
t(W.iY,W.eT)
t(W.eV,W.eU)
t(W.iZ,W.eV)
t(W.ix,W.iv)
t(W.iy,P.hL)
t(W.kG,W.iy)
t(W.iz,P.cW)
t(W.j0,W.ew)
t(P.aJ,P.iP)
t(P.ei,P.eh)
t(P.fT,P.ei)
t(P.es,P.er)
t(P.hg,P.es)
t(P.cT,P.n)
t(P.eE,P.eD)
t(P.hQ,P.eE)
t(P.eK,P.eJ)
t(P.i8,P.eK)
t(P.f9,P.e5)
t(P.hh,P.bU)
t(P.eA,P.ez)
t(P.hE,P.eA)
s(D.Q,[D.fM,D.fN,D.aC])
t(U.cK,D.fe)
t(U.dv,U.cK)
t(A.dS,E.fc)
t(O.fo,O.cc)
s(V.dJ,[V.bp,V.cZ])
t(X.fG,X.dW)
t(M.ce,M.cd)
u(H.e0,H.e1)
u(H.d4,P.v)
u(H.d5,H.bZ)
u(H.d6,P.v)
u(H.d7,H.bZ)
u(P.ej,P.v)
u(W.e6,W.fj)
u(W.e8,P.v)
u(W.e9,W.z)
u(W.ea,P.v)
u(W.eb,W.z)
u(W.ec,P.v)
u(W.ed,W.z)
u(W.ef,P.v)
u(W.eg,W.z)
u(W.ek,P.af)
u(W.el,P.af)
u(W.em,P.v)
u(W.en,W.z)
u(W.ep,P.v)
u(W.eq,W.z)
u(W.et,P.v)
u(W.eu,W.z)
u(W.ev,P.af)
u(W.d8,P.v)
u(W.d9,W.z)
u(W.ex,P.v)
u(W.ey,W.z)
u(W.eC,P.af)
u(W.eF,P.v)
u(W.eG,W.z)
u(W.da,P.v)
u(W.db,W.z)
u(W.eH,P.v)
u(W.eI,W.z)
u(W.eM,P.v)
u(W.eN,W.z)
u(W.eO,P.v)
u(W.eP,W.z)
u(W.eQ,P.v)
u(W.eR,W.z)
u(W.eS,P.v)
u(W.eT,W.z)
u(W.eU,P.v)
u(W.eV,W.z)
u(P.eh,P.v)
u(P.ei,W.z)
u(P.er,P.v)
u(P.es,W.z)
u(P.eD,P.v)
u(P.eE,W.z)
u(P.eJ,P.v)
u(P.eK,W.z)
u(P.e5,P.af)
u(P.ez,P.v)
u(P.eA,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.k=W.bx.prototype
C.B=W.cu.prototype
C.C=W.cA.prototype
C.E=J.a.prototype
C.a=J.aI.prototype
C.F=J.dC.prototype
C.d=J.dD.prototype
C.c=J.cG.prototype
C.b=J.bD.prototype
C.G=J.bm.prototype
C.L=W.cN.prototype
C.o=J.hj.prototype
C.p=W.dV.prototype
C.j=J.d_.prototype
C.q=W.bf.prototype
C.r=W.d1.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
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
C.y=function(getTagFallback) {
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
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.x=function(hooks) {
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
C.w=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.z=new P.hi()
C.n=new P.ig()
C.A=new P.ih()
C.e=new P.iQ()
C.f=new P.bX(0)
C.D=new P.fK("element",!0,!1,!1,!1)
C.H=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.I=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.J=H.b(u([]),[P.e])
C.K=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.h=H.b(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.i=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])})()
var v={mangledGlobalNames:{B:"int",a1:"double",ah:"num",e:"String",Y:"bool",S:"Null",c:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.S,args:[M.cd]},{func:1,ret:P.S},{func:1,ret:-1},{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.S,args:[,]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.B,[P.k,E.a9]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[D.Q]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.a1},{func:1,ret:P.S,args:[W.l]},{func:1,ret:P.Y,args:[W.aB]},{func:1,ret:P.Y,args:[P.e]},{func:1,ret:P.S,args:[{func:1,ret:-1,args:[D.Q]}]},{func:1,ret:P.Y,args:[W.ae,P.e,P.e,W.bK]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.e,args:[P.B]},{func:1,args:[W.l]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.S,args:[,],opt:[P.ap]},{func:1,ret:P.S,args:[P.ah]},{func:1,ret:[P.as,,],args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.O]},{func:1,ret:P.Y,args:[W.C]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:P.S,args:[Q.a5]},{func:1,ret:P.S,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b0=0
$.ct=null
$.l2=null
$.kJ=!1
$.m1=null
$.lW=null
$.m7=null
$.ki=null
$.kn=null
$.kU=null
$.cg=null
$.de=null
$.df=null
$.kL=!1
$.X=C.e
$.at=[]
$.bk=null
$.kv=null
$.l8=null
$.l7=null
$.ee=P.le(P.e,P.bC)
$.li=null
$.lj=null
$.lm=null
$.lr=null
$.ls=null
$.ly=null
$.lx=null
$.lz=null
$.lH=null
$.lK=null
$.lJ=null
$.lI=null
$.lq=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oo","mb",function(){return H.m0("_$dart_dartClosure")})
u($,"oC","kX",function(){return H.m0("_$dart_js")})
u($,"oV","mh",function(){return H.bd(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"oW","mi",function(){return H.bd(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oX","mj",function(){return H.bd(H.ia(null))})
u($,"oY","mk",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p0","mn",function(){return H.bd(H.ia(void 0))})
u($,"p1","mo",function(){return H.bd(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p_","mm",function(){return H.bd(H.lF(null))})
u($,"oZ","ml",function(){return H.bd(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p3","mq",function(){return H.bd(H.lF(void 0))})
u($,"p2","mp",function(){return H.bd(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pj","l_",function(){return P.no()})
u($,"pl","mu",function(){return P.ng("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pk","mt",function(){return P.lf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pc","kr",function(){return Z.aL(0)})
u($,"p6","mr",function(){return Z.aL(511)})
u($,"pe","az",function(){return Z.aL(1)})
u($,"pd","ay",function(){return Z.aL(2)})
u($,"p8","ax",function(){return Z.aL(4)})
u($,"pf","ao",function(){return Z.aL(8)})
u($,"pg","aN",function(){return Z.aL(16)})
u($,"p9","aM",function(){return Z.aL(32)})
u($,"pa","aZ",function(){return Z.aL(64)})
u($,"pb","ms",function(){return Z.aL(96)})
u($,"ph","aG",function(){return Z.aL(128)})
u($,"p7","aF",function(){return Z.aL(256)})
u($,"on","ma",function(){return new V.fx(1e-9)})
u($,"om","M",function(){return $.ma()})
u($,"os","bu",function(){return V.aA(0)})
u($,"op","kq",function(){return V.aA(511)})
u($,"ov","cl",function(){return V.aA(1)})
u($,"ot","me",function(){return V.aA(2)})
u($,"ou","ck",function(){return V.aA(4)})
u($,"oy","cm",function(){return V.aA(8)})
u($,"ow","mf",function(){return V.aA(16)})
u($,"ox","dm",function(){return V.aA(32)})
u($,"oB","dn",function(){return V.aA(64)})
u($,"oz","mg",function(){return V.aA(128)})
u($,"oA","cn",function(){return V.aA(256)})
u($,"or","md",function(){return V.aA(146)})
u($,"oq","mc",function(){return V.aA(365)})
u($,"oP","kZ",function(){return Q.aq(-1)})
u($,"oK","a2",function(){return Q.aq(0)})
u($,"oO","bw",function(){return Q.aq(4096)})
u($,"oJ","bS",function(){return Q.aq(15)})
u($,"oL","f2",function(){return $.kY().M(0,$.bT()).M(0,$.bS())})
u($,"oH","f1",function(){return Q.aq(256)})
u($,"oU","bh",function(){return Q.aq(512)})
u($,"oI","kY",function(){return Q.aq(768)})
u($,"oQ","cp",function(){return Q.aq(16)})
u($,"oT","aY",function(){return Q.aq(32)})
u($,"oN","co",function(){return Q.aq(48)})
u($,"oG","bg",function(){return Q.aq(64)})
u($,"oS","aw",function(){return Q.aq(80)})
u($,"oM","bv",function(){return Q.aq(96)})
u($,"oR","bT",function(){return Q.aq(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cM,ArrayBufferView:H.cM,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.h7,Int32Array:H.h8,Int8Array:H.h9,Uint16Array:H.ha,Uint32Array:H.hb,Uint8ClampedArray:H.dM,CanvasPixelArray:H.dM,Uint8Array:H.hc,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.f4,HTMLAnchorElement:W.dq,HTMLAreaElement:W.f6,HTMLBaseElement:W.cr,Blob:W.dr,HTMLBodyElement:W.bx,HTMLCanvasElement:W.cu,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cy,CSSUnitValue:W.cy,CSSPerspective:W.fi,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cz,MSStyleCSSProperties:W.cz,CSS2Properties:W.cz,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fk,CSSUnparsedValue:W.fl,DataTransferItemList:W.fn,HTMLDivElement:W.cA,DOMException:W.fp,ClientRectList:W.dx,DOMRectList:W.dx,DOMRectReadOnly:W.dy,DOMStringList:W.fq,DOMTokenList:W.fr,Element:W.ae,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.b3,FileList:W.fB,FileWriter:W.fC,HTMLFormElement:W.fE,Gamepad:W.b4,History:W.fI,HTMLCollection:W.cE,HTMLFormControlsCollection:W.cE,HTMLOptionsCollection:W.cE,HTMLInputElement:W.cF,KeyboardEvent:W.b5,Location:W.dI,MediaList:W.h0,MIDIInputMap:W.h1,MIDIOutputMap:W.h3,MimeType:W.b6,MimeTypeArray:W.h5,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.b7,PluginArray:W.hk,RTCStatsReport:W.hr,HTMLSelectElement:W.hu,SourceBuffer:W.b8,SourceBufferList:W.hC,SpeechGrammar:W.b9,SpeechGrammarList:W.hD,SpeechRecognitionResult:W.ba,Storage:W.hJ,CSSStyleSheet:W.aT,StyleSheet:W.aT,HTMLTableElement:W.dV,HTMLTableRowElement:W.hS,HTMLTableSectionElement:W.hT,HTMLTemplateElement:W.cX,TextTrack:W.bb,TextTrackCue:W.aU,VTTCue:W.aU,TextTrackCueList:W.i0,TextTrackList:W.i1,TimeRanges:W.i3,Touch:W.bc,TouchEvent:W.aV,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.bI,FocusEvent:W.bI,TextEvent:W.bI,UIEvent:W.bI,URL:W.ie,VideoTrackList:W.im,WheelEvent:W.bf,Window:W.d1,DOMWindow:W.d1,Attr:W.d2,CSSRuleList:W.iw,ClientRect:W.e7,DOMRect:W.e7,GamepadList:W.iL,NamedNodeMap:W.eo,MozNamedAttrMap:W.eo,SpeechRecognitionResultList:W.iY,StyleSheetList:W.iZ,SVGLength:P.bn,SVGLengthList:P.fT,SVGNumber:P.bq,SVGNumberList:P.hg,SVGPointList:P.hl,SVGScriptElement:P.cT,SVGStringList:P.hQ,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.br,SVGTransformList:P.i8,AudioBuffer:P.f8,AudioParamMap:P.f9,AudioTrackList:P.fb,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.hh,WebGL2RenderingContext:P.cS,SQLResultSetRowList:P.hE})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.m3,[])
else M.m3([])})})()
//# sourceMappingURL=test.dart.js.map

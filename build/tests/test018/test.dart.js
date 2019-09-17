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
a[c]=function(){a[c]=function(){H.oS(b)}
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
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={ky:function ky(){},
jW:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fz:function(){return new P.cb("No element")},
mQ:function(){return new P.cb("Too many elements")},
dl:function(a,b,c,d){if(c-b<=32)H.nj(a,b,c,d)
else H.ni(a,b,c,d)},
nj:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
ni:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a6(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a6(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.z(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a3,a2[a1])
C.b.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a4,a2[a1])
C.b.m(a2,a1,r)
H.dl(a2,a3,o-2,a5)
H.dl(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.z(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.z(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}H.dl(a2,o,n,a5)}else H.dl(a2,o,n,a5)},
l:function l(a){this.a=a},
fe:function fe(){},
d4:function d4(){},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fR:function fR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b){this.a=null
this.b=a
this.c=b},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
iX:function iX(a,b){this.a=a
this.b=b},
cV:function cV(){},
iw:function iw(){},
dC:function dC(){},
mI:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
eH:function(a){var u,t=H.oU(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oB:function(a){return v.types[a]},
m2:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.d(H.ao(a))
return u},
c8:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
na:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
c9:function(a){return H.n1(a)+H.lQ(H.cD(a),0,null)},
n1:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibB){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eH(t.length>1&&C.a.E(t,0)===36?C.a.a8(t,1):t)},
n2:function(){if(!!self.location)return self.location.href
return},
lm:function(a){var u,t,s,r,q=J.af(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nb:function(a){var u,t,s,r=H.c([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ao(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ao(s))}return H.lm(r)},
ln:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ao(s))
if(s<0)throw H.d(H.ao(s))
if(s>65535)return H.nb(a)}return H.lm(a)},
nc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bw:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.d(P.Y(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n9:function(a){var u=H.bv(a).getFullYear()+0
return u},
n7:function(a){var u=H.bv(a).getMonth()+1
return u},
n3:function(a){var u=H.bv(a).getDate()+0
return u},
n4:function(a){var u=H.bv(a).getHours()+0
return u},
n6:function(a){var u=H.bv(a).getMinutes()+0
return u},
n8:function(a){var u=H.bv(a).getSeconds()+0
return u},
n5:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ao(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.d(H.bJ(a,b))},
bJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.dh(b,s)},
ov:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bx(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ao:function(a){return new P.al(!0,a,null,null)},
oq:function(a){if(typeof a!=="number")throw H.d(H.ao(a))
return a},
d:function(a){var u
if(a==null)a=new P.de()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m8})
u.name=""}else u.toString=H.m8
return u},
m8:function(){return J.a3(this.dartException)},
r:function(a){throw H.d(a)},
p:function(a){throw H.d(P.aB(a))},
ax:function(a){var u,t,s,r,q,p
a=H.m6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ii(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ij:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lw:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lj:function(a,b){return new H.hl(a,b==null?null:b.method)},
kz:function(a,b){var u=b==null,t=u?null:b.method
return new H.fD(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kz(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lj(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mb()
q=$.mc()
p=$.md()
o=$.me()
n=$.mh()
m=$.mi()
l=$.mg()
$.mf()
k=$.mk()
j=$.mj()
i=r.ac(u)
if(i!=null)return f.$1(H.kz(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.kz(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lj(u,i))}}return f.$1(new H.iv(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dn()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dn()
return a},
kT:function(a){var u
if(a==null)return new H.eg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eg(a)},
oz:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oH)
a.$identity=u
return u},
mH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hV().constructor.prototype):Object.create(new H.bN(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ap
if(typeof t!=="number")return t.v()
$.ap=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l9(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mD(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l9(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mD:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l8:H.kn
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mE:function(a,b,c,d){var u=H.kn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l9:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mE(t,!r,u,b)
if(t===0){r=$.ap
if(typeof r!=="number")return r.v()
$.ap=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eU("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ap
if(typeof r!=="number")return r.v()
$.ap=r+1
o+=r
r="return function("+o+"){return this."
q=$.bO
return new Function(r+H.e(q==null?$.bO=H.eU("self"):q)+"."+H.e(u)+"("+o+");}")()},
mF:function(a,b,c,d){var u=H.kn,t=H.l8
switch(b?-1:a){case 0:throw H.d(H.ng("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mG:function(a,b){var u,t,s,r,q,p,o,n=$.bO
if(n==null)n=$.bO=H.eU("self")
u=$.l7
if(u==null)u=$.l7=H.eU("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mF(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ap
if(typeof u!=="number")return u.v()
$.ap=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ap
if(typeof u!=="number")return u.v()
$.ap=u+1
return new Function(n+u+"}")()},
kQ:function(a,b,c,d,e,f,g){return H.mH(a,b,c,d,!!e,!!f,g)},
kn:function(a){return a.a},
l8:function(a){return a.c},
eU:function(a){var u,t,s,r=new H.bN("self","target","receiver","name"),q=J.kw(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oN:function(a,b){throw H.d(H.mC(a,H.eH(b.substring(2))))},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.oN(a,b)},
ox:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mC:function(a,b){return new H.eV("CastError: "+P.ku(a)+": type '"+H.e(H.om(a))+"' is not a subtype of type '"+b+"'")},
om:function(a){var u,t=J.P(a)
if(!!t.$ibP){u=H.ox(t)
if(u!=null)return H.oO(u)
return"Closure"}return H.c9(a)},
oS:function(a){throw H.d(new P.f6(a))},
ng:function(a){return new H.hE(a)},
m0:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cD:function(a){if(a==null)return
return a.$ti},
pt:function(a,b,c){return H.kg(a["$a"+H.e(c)],H.cD(b))},
oA:function(a,b,c,d){var u=H.kg(a["$a"+H.e(c)],H.cD(b))
return u==null?null:u[d]},
kS:function(a,b,c){var u=H.kg(a["$a"+H.e(b)],H.cD(a))
return u==null?null:u[c]},
cE:function(a,b){var u=H.cD(a)
return u==null?null:u[b]},
oO:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eH(a[0].name)+H.lQ(a,1,b)
if(typeof a=="function")return H.eH(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nV(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nV:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a0)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oy(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lQ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.h(0)+">"},
kg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pr:function(a,b,c){return a.apply(b,H.kg(J.P(b)["$a"+H.e(c)],H.cD(b)))},
ps:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oK:function(a){var u,t,s,r,q=$.m1.$1(a),p=$.jU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lV.$2(a,q)
if(q!=null){p=$.jU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kc(u)
$.jU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k_[q]=u
return u}if(s==="-"){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m4(a,u)
if(s==="*")throw H.d(P.iu(q))
if(v.leafTags[q]===true){r=H.kc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m4(a,u)},
m4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kc:function(a){return J.kV(a,!1,null,!!a.$iA)},
oL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kc(u)
else return J.kV(u,c,null,null)},
oF:function(){if(!0===$.kU)return
$.kU=!0
H.oG()},
oG:function(){var u,t,s,r,q,p,o,n
$.jU=Object.create(null)
$.k_=Object.create(null)
H.oE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m5.$1(q)
if(p!=null){o=H.oL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oE:function(){var u,t,s,r,q,p,o=C.F()
o=H.bH(C.G,H.bH(C.H,H.bH(C.u,H.bH(C.u,H.bH(C.I,H.bH(C.J,H.bH(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m1=new H.jX(r)
$.lV=new H.jY(q)
$.m5=new H.jZ(p)},
bH:function(a,b){return a(b)||b},
mS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.Q("Illegal RegExp pattern ("+String(p)+")",a,null))},
oQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ow:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kY:function(a,b,c){var u=H.oR(a,b,c)
return u},
oR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m6(b),'g'),H.ow(c))},
f_:function f_(){},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hl:function hl(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a){this.a=a},
kk:function kk(a){this.a=a},
eg:function eg(a){this.a=a
this.b=null},
bP:function bP(){},
i2:function i2(){},
hV:function hV(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a){this.a=a},
hE:function hE(a){this.a=a},
N:function N(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fI:function fI(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bF:function(a){return a},
n0:function(a){return new Int8Array(a)},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bJ(b,a))},
nT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ov(a,b,c))
return b},
c3:function c3(){},
b9:function b9(){},
d9:function d9(){},
c4:function c4(){},
da:function da(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
db:function db(){},
c5:function c5(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
oy:function(a){return J.le(a?Object.keys(a):[],null)},
oU:function(a){return v.mangledGlobalNames[a]},
oM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jV:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kU==null){H.oF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iu("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kZ()]
if(r!=null)return r
r=H.oK(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kZ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.l5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Y(a,0,4294967295,"length",null))
return J.le(new Array(a),b)},
le:function(a,b){return J.kw(H.c(a,[b]))},
kw:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cZ.prototype
return J.cY.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.d_.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a0)return a
return J.jV(a)},
cB:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a0)return a
return J.jV(a)},
eF:function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a0)return a
return J.jV(a)},
m_:function(a){if(typeof a=="number")return J.bX.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bB.prototype
return a},
cC:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.bB.prototype
return a},
bL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.a0)return a
return J.jV(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).t(a,b)},
l0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m_(a).q(a,b)},
cH:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cB(a).i(a,b)},
kl:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m2(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eF(a).m(a,b,c)},
mt:function(a,b){return J.cC(a).E(a,b)},
mu:function(a,b,c){return J.bL(a).fG(a,b,c)},
mv:function(a,b,c,d){return J.bL(a).h0(a,b,c,d)},
mw:function(a,b){return J.cC(a).X(a,b)},
km:function(a,b){return J.m_(a).he(a,b)},
eI:function(a,b){return J.eF(a).J(a,b)},
mx:function(a,b,c,d){return J.bL(a).hv(a,b,c,d)},
l1:function(a,b){return J.eF(a).H(a,b)},
my:function(a){return J.bL(a).gh9(a)},
l2:function(a){return J.bL(a).gc1(a)},
cI:function(a){return J.P(a).gI(a)},
b_:function(a){return J.eF(a).gV(a)},
af:function(a){return J.cB(a).gl(a)},
l3:function(a){return J.eF(a).i0(a)},
mz:function(a,b){return J.bL(a).i4(a,b)},
mA:function(a,b,c){return J.cC(a).u(a,b,c)},
mB:function(a){return J.cC(a).ic(a)},
a3:function(a){return J.P(a).h(a)},
a:function a(){},
fB:function fB(){},
d_:function d_(){},
d0:function d0(){},
hp:function hp(){},
bB:function bB(){},
b6:function b6(){},
b4:function b4(a){this.$ti=a},
kx:function kx(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bX:function bX(){},
cZ:function cZ(){},
cY:function cY(){},
b5:function b5(){}},P={
nv:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.on()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bI(new P.iZ(s),1)).observe(u,{childList:true})
return new P.iY(s,u,t)}else if(self.setImmediate!=null)return P.oo()
return P.op()},
nw:function(a){self.scheduleImmediate(H.bI(new P.j_(a),0))},
nx:function(a){self.setImmediate(H.bI(new P.j0(a),0))},
ny:function(a){P.kD(C.n,a)},
kD:function(a,b){var u=C.c.a6(a.a,1000)
return P.nD(u<0?0:u,b)},
lv:function(a,b){var u=C.c.a6(a.a,1000)
return P.nE(u<0?0:u,b)},
nD:function(a,b){var u=new P.em()
u.en(a,b)
return u},
nE:function(a,b){var u=new P.em()
u.eo(a,b)
return u},
og:function(){var u,t
for(;u=$.bG,u!=null;){$.cA=null
t=u.b
$.bG=t
if(t==null)$.cz=null
u.a.$0()}},
ol:function(){$.kO=!0
try{P.og()}finally{$.cA=null
$.kO=!1
if($.bG!=null)$.l_().$1(P.lW())}},
oj:function(a){var u=new P.dJ(a)
if($.bG==null){$.bG=$.cz=u
if(!$.kO)$.l_().$1(P.lW())}else $.cz=$.cz.b=u},
ok:function(a){var u,t,s=$.bG
if(s==null){P.oj(a)
$.cA=$.cz
return}u=new P.dJ(a)
t=$.cA
if(t==null){u.b=s
$.bG=$.cA=u}else{u.b=t.b
$.cA=t.b=u
if(u.b==null)$.cz=u}},
lu:function(a,b){var u=$.an
if(u===C.f)return P.kD(a,b)
return P.kD(a,u.ha(b))},
nm:function(a,b){var u=$.an
if(u===C.f)return P.lv(a,b)
return P.lv(a,u.d8(b,P.dv))},
lR:function(a,b,c,d,e){var u={}
u.a=d
P.ok(new P.jN(u,e))},
oh:function(a,b,c,d){var u,t=$.an
if(t===c)return d.$0()
$.an=c
u=t
try{t=d.$0()
return t}finally{$.an=u}},
oi:function(a,b,c,d,e){var u,t=$.an
if(t===c)return d.$1(e)
$.an=c
u=t
try{t=d.$1(e)
return t}finally{$.an=u}},
iZ:function iZ(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
em:function em(){this.c=0},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a
this.b=null},
dq:function dq(){},
hY:function hY(){},
dv:function dv(){},
jE:function jE(){},
jN:function jN(a,b){this.a=a
this.b=b},
je:function je(){},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
mU:function(a,b){return new H.N([a,b])},
kA:function(a,b){return new H.N([a,b])},
mW:function(a){return H.oz(a,new H.N([null,null]))},
d3:function(a){return new P.jb([a])},
kJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nC:function(a,b){var u=new P.dY(a,b)
u.c=a.e
return u},
mP:function(a,b,c){var u,t
if(P.kP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a7.push(a)
try{P.nW(a,u)}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}t=P.ls(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kv:function(a,b,c){var u,t
if(P.kP(a))return b+"..."+c
u=new P.S(b)
$.a7.push(a)
try{t=u
t.a=P.ls(t.a,a,", ")}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kP:function(a){var u,t
for(u=$.a7.length,t=0;t<u;++t)if(a===$.a7[t])return!0
return!1},
nW:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.e(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.C()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.C();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
mV:function(a,b,c){var u=P.mU(b,c)
a.H(0,new P.fK(u))
return u},
lf:function(a,b){var u,t,s=P.d3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
kB:function(a){var u,t={}
if(P.kP(a))return"{...}"
u=new P.S("")
try{$.a7.push(a)
u.a+="{"
t.a=!0
J.l1(a,new P.fP(t,u))
u.a+="}"}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jb:function jb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fK:function fK(a){this.a=a},
fL:function fL(){},
u:function u(){},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
aG:function aG(){},
jw:function jw(){},
fQ:function fQ(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
ji:function ji(){},
dZ:function dZ(){},
es:function es(){},
np:function(a,b,c,d){if(b instanceof Uint8Array)return P.nq(!1,b,c,d)
return},
nq:function(a,b,c,d){var u,t,s=$.ml()
if(s==null)return
u=0===c
if(u&&!0)return P.kG(s,b)
t=b.length
d=P.bd(c,d,t)
if(u&&d===t)return P.kG(s,b)
return P.kG(s,b.subarray(c,d))},
kG:function(a,b){if(P.ns(b))return
return P.nt(a,b)},
nt:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
ns:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nr:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
lT:function(a,b,c){var u,t,s
for(u=J.cB(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
l6:function(a,b,c,d,e,f){if(C.c.bb(f,4)!==0)throw H.d(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
eR:function eR(){},
eS:function eS(){},
eX:function eX(){},
f1:function f1(){},
fg:function fg(){},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fw:function fw(a){this.a=a},
iE:function iE(){},
iG:function iG(){},
jC:function jC(a){this.b=0
this.c=a},
iF:function iF(a){this.a=a},
jB:function jB(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eG:function(a,b,c){var u=H.na(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.Q(a,null,null))},
mM:function(a){if(a instanceof H.bP)return a.h(0)
return"Instance of '"+H.e(H.c9(a))+"'"},
mX:function(a,b,c){var u,t,s=J.mR(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lg:function(a,b,c){var u,t=H.c([],[c])
for(u=J.b_(a);u.C();)t.push(u.gK(u))
if(b)return t
return J.kw(t)},
cc:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.bd(b,c,u)
return H.ln(b>0||c<u?C.b.e5(a,b,c):a)}if(!!J.P(a).$ic5)return H.nc(a,b,P.bd(b,c,a.length))
return P.nk(a,b,c)},
nk:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.Y(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.Y(c,b,J.af(a),q,q))
t=J.b_(a)
for(s=0;s<b;++s)if(!t.C())throw H.d(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.C())throw H.d(P.Y(c,b,s,q,q))
r.push(t.gK(t))}return H.ln(r)},
ne:function(a){return new H.fC(a,H.mS(a,!1,!0,!1,!1,!1))},
ls:function(a,b,c){var u=J.b_(b)
if(!u.C())return a
if(c.length===0){do a+=H.e(u.gK(u))
while(u.C())}else{a+=H.e(u.gK(u))
for(;u.C();)a=a+c+H.e(u.gK(u))}return a},
ly:function(){var u=H.n2()
if(u!=null)return P.no(u)
throw H.d(P.y("'Uri.base' is not supported"))},
et:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mr().b
if(typeof b!=="string")H.r(H.ao(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghu().c2(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bw(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cQ:function(a){if(a>=10)return""+a
return"0"+a},
lb:function(a){return new P.b2(1000*a)},
ku:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mM(a)},
cJ:function(a){return new P.al(!1,null,null,a)},
l5:function(a,b,c){return new P.al(!0,a,b,c)},
dh:function(a,b){return new P.bx(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
bd:function(a,b,c){if(0>a||a>c)throw H.d(P.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.Y(b,a,c,"end",null))
return b}return c},
lo:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.Y(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fy(u,!0,a,c,"Index out of range")},
y:function(a){return new P.ix(a)},
iu:function(a){return new P.it(a)},
lr:function(a){return new P.cb(a)},
aB:function(a){return new P.eZ(a)},
o:function(a){return new P.dR(a)},
Q:function(a,b,c){return new P.fq(a,b,c)},
mY:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kX:function(a){H.oM(a)},
no:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lx(e<e?C.a.u(a,0,e):a,5,f).gdX()
else if(u===32)return P.lx(C.a.u(a,5,e),0,f).gdX()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.x])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lS(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ih()
if(r>=0)if(P.lS(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.v(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aU(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aU(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aU(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jl(a,r,q,p,o,n,m,k)}return P.nF(a,0,e,r,q,p,o,n,m,k)},
lA:function(a){var u=P.k
return C.b.hB(H.c(a.split("&"),[u]),P.kA(u,u),new P.iC(C.e))},
nn:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iz(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eG(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eG(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iA(a),d=new P.iB(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.x])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaq(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nn(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nN(a,b,d)
else{if(d===b)P.bE(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nO(a,u,e-1):""
s=P.nK(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.nM(P.eG(C.a.u(a,r,g),new P.jx(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nL(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kL(a,h+1,i,n):n
return new P.bD(j,t,s,q,p,o,i<c?P.nJ(a,i+1,c):n)},
lK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bE:function(a,b,c){throw H.d(P.Q(c,a,b))},
nM:function(a,b){if(a!=null&&a===P.lK(b))return
return a},
nK:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.X(a,u)!==93)P.bE(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nH(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lP(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lz(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bo(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lP(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lz(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.nQ(a,b,c)},
nH:function(a,b,c){var u,t=C.a.bo(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kM(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bE(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.u(a,t,u)
l.a+=P.kK(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kM(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bE(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kK(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nN:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lM(C.a.E(a,b)))P.bE(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bE(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.nG(t?a.toLowerCase():a)},
nG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nO:function(a,b,c){return P.cx(a,b,c,C.V,!1)},
nL:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cx(a,b,c,C.z,!0):C.j.iB(d,new P.jy(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.nP(u,e,f)},
nP:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.nR(a,!u||c)
return P.nS(a)},
kL:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cJ("Both query and queryParameters specified"))
return P.cx(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.H(0,new P.jz(new P.jA(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nJ:function(a,b,c){return P.cx(a,b,c,C.l,!0)},
kM:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.jW(u)
r=H.jW(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bw(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
kK:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.x])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.x])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fT(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cc(t,0,null)},
cx:function(a,b,c,d,e){var u=P.lO(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
lO:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kM(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bE(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kK(u)}}if(m==null)m=new P.S("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lN:function(a){if(C.a.a2(a,"."))return!0
return C.a.dz(a,"/.")!==-1},
nS:function(a){var u,t,s,r,q,p,o
if(!P.lN(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nR:function(a,b){var u,t,s,r,q,p
if(!P.lN(a))return!b?P.lL(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaq(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaq(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lL(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lL:function(a){var u,t,s,r=a.length
if(r>=2&&P.lM(J.mt(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nI:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cJ("Invalid URL encoding"))}}return u},
kN:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.l(C.a.u(a,b,c))}else{r=H.c([],[P.x])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.d(P.cJ("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cJ("Truncated URI"))
r.push(P.nI(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iF(!1).c2(r)},
lM:function(a){var u=a|32
return 97<=u&&u<=122},
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.x])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.Q(m,a,t))}}if(s<0&&t>b)throw H.d(P.Q(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaq(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.d(P.Q("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hK(0,a,o,u)
else{n=P.lO(a,o,u,C.l,!0)
if(n!=null)a=C.a.aU(a,o,u,n)}return new P.iy(a,l,c)},
nU:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mY(22,new P.jI(),P.bz),n=new P.jH(o),m=new P.jJ(),l=new P.jK(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lS:function(a,b,c,d,e){var u,t,s,r,q,p=$.ms()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
az:function az(){},
a9:function a9(a,b){this.a=a
this.b=b},
I:function I(){},
b2:function b2(a){this.a=a},
fc:function fc(){},
fd:function fd(){},
bp:function bp(){},
de:function de(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fy:function fy(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ix:function ix(a){this.a=a},
it:function it(a){this.a=a},
cb:function cb(a){this.a=a},
eZ:function eZ(a){this.a=a},
ho:function ho(){},
dn:function dn(){},
f6:function f6(a){this.a=a},
dR:function dR(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(){},
x:function x(){},
i:function i(){},
fA:function fA(){},
n:function n(){},
R:function R(){},
ba:function ba(){},
ad:function ad(){},
a0:function a0(){},
k:function k(){},
S:function S(a){this.a=a},
iC:function iC(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){},
jA:function jA(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(){},
jH:function jH(a){this.a=a},
jJ:function jJ(){},
jK:function jK(){},
jl:function jl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j4:function j4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ot:function(a){var u,t=J.P(a)
if(!!t.$iaF){u=t.gdd(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.er(a.data,a.height,a.width)},
os:function(a){if(a instanceof P.er)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
or:function(a){var u={}
a.H(0,new P.jO(u))
return u},
jn:function jn(){},
jp:function jp(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jd:function jd(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fF:function fF(){},
bb:function bb(){},
hm:function hm(){},
hu:function hu(){},
ca:function ca(){},
hZ:function hZ(){},
j:function j(){},
be:function be(){},
ih:function ih(){},
dW:function dW(){},
dX:function dX(){},
e6:function e6(){},
e7:function e7(){},
ei:function ei(){},
ej:function ej(){},
ep:function ep(){},
eq:function eq(){},
bz:function bz(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(a){this.a=a},
eQ:function eQ(){},
bk:function bk(){},
hn:function hn(){},
dK:function dK(){},
dj:function dj(){},
hU:function hU(){},
ee:function ee(){},
ef:function ef(){}},W={
l4:function(){var u=document.createElement("a")
return u},
kp:function(){var u=document.createElement("canvas")
return u},
mL:function(a,b,c){var u=document.body,t=(u&&C.r).ab(u,a,b,c)
t.toString
u=new H.cl(new W.a1(t),new W.ff(),[W.E])
return u.gaG(u)},
ks:function(a){return"wheel"},
bR:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bL(a)
t=u.gdT(a)
if(typeof t==="string")r=u.gdT(a)}catch(s){H.ae(s)}return r},
mO:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lI:function(a,b,c,d){var u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.lU(new W.j7(c),W.h)
if(u!=null&&!0)J.mv(a,b,u,!1)
return new W.j6(a,b,u,!1)},
lH:function(a){var u=W.l4(),t=window.location
u=new W.cn(new W.jh(u,t))
u.ei(a)
return u},
nz:function(a,b,c,d){return!0},
nA:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lJ:function(){var u=P.k,t=P.lf(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.js(t,P.d3(u),P.d3(u),P.d3(u),null)
t.em(null,new H.fT(C.o,new W.jt(),[H.cE(C.o,0),u]),s,null)
return t},
lU:function(a,b){var u=$.an
if(u===C.f)return a
return u.d8(a,b)},
m:function m(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
b0:function b0(){},
f2:function f2(){},
G:function G(){},
bQ:function bQ(){},
f3:function f3(){},
ah:function ah(){},
aq:function aq(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
am:function am(){},
f9:function f9(){},
cS:function cS(){},
cT:function cT(){},
fa:function fa(){},
fb:function fb(){},
j2:function j2(a,b){this.a=a
this.b=b},
T:function T(){},
ff:function ff(){},
h:function h(){},
f:function f(){},
ar:function ar(){},
bT:function bT(){},
fl:function fl(){},
fp:function fp(){},
aE:function aE(){},
fv:function fv(){},
bV:function bV(){},
aF:function aF(){},
bW:function bW(){},
bu:function bu(){},
fM:function fM(){},
h6:function h6(){},
c1:function c1(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
h9:function h9(){},
ha:function ha(a){this.a=a},
aI:function aI(){},
hb:function hb(){},
au:function au(){},
a1:function a1(a){this.a=a},
E:function E(){},
dc:function dc(){},
aL:function aL(){},
hr:function hr(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
aN:function aN(){},
hR:function hR(){},
aO:function aO(){},
hS:function hS(){},
aP:function aP(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
av:function av(){},
dr:function dr(){},
i_:function i_(){},
i0:function i0(){},
cd:function cd(){},
aQ:function aQ(){},
aw:function aw(){},
i3:function i3(){},
i4:function i4(){},
ia:function ia(){},
aR:function aR(){},
by:function by(){},
ie:function ie(){},
ig:function ig(){},
bf:function bf(){},
iD:function iD(){},
iV:function iV(){},
bh:function bh(){},
cm:function cm(){},
j3:function j3(){},
dM:function dM(){},
j8:function j8(){},
e3:function e3(){},
jm:function jm(){},
jq:function jq(){},
j1:function j1(){},
j5:function j5(a){this.a=a},
j6:function j6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j7:function j7(a){this.a=a},
cn:function cn(a){this.a=a},
J:function J(){},
dd:function dd(a){this.a=a},
hj:function hj(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(){},
jj:function jj(){},
jk:function jk(){},
js:function js(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jt:function jt(){},
jr:function jr(){},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aK:function aK(){},
jh:function jh(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
jD:function jD(a){this.a=a},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ct:function ct(){},
cu:function cu(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
cv:function cv(){},
cw:function cw(){},
en:function en(){},
eo:function eo(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){}},T={
L:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.o("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
s=new T.hx()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hG()
u.ee(a)
return u},
aA:function aA(){},
cX:function cX(){},
b8:function b8(){},
a6:function a6(){this.a=null},
hx:function hx(){this.b=this.a=null},
hG:function hG(){this.a=null},
dt:function dt(){},
i5:function i5(){},
i6:function i6(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.b=null},
i8:function i8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ic:function(){var u=new R.ib(),t=P.k
u.a=new H.N([t,R.dp])
u.b=new H.N([t,R.dx])
return u},
dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.b=a
this.c=null},
ib:function ib(){this.c=this.b=this.a=null},
dz:function dz(a){this.b=a
this.a=this.c=null}},O={
kq:function(a){var u=new O.b1([a])
u.bB(a)
return u},
b1:function b1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c0:function c0(){this.b=this.a=null},
d6:function d6(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
fV:function fV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c_:function c_(){},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ds:function ds(){}},E={
nf:function(a,b){var u=new E.hy(a)
u.ed(a,b)
return u},
nl:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibn)return E.lt(a,!0,!0,!0,!1)
u=W.kp()
t=u.style
t.width="100%"
t.height="100%"
s.gc1(a).n(0,u)
return E.lt(u,!0,!0,!0,!1)},
lt:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.du(),p=C.i.cw(a,"webgl2",P.mW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nf(p,a)
u=new T.i7(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dE(a)
t=new X.fE()
t.c=new X.ai(!1,!1,!1)
t.d=P.d3(P.x)
u.b=t
t=new X.hc(u)
t.f=0
t.r=V.aM()
t.x=V.aM()
t.ch=t.Q=1
u.c=t
t=new X.fN(u)
t.r=0
t.x=V.aM()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.id(u)
t.f=V.aM()
t.r=V.aM()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dq,P.a0]])
u.z=t
s=document
t.push(W.W(s,"contextmenu",u.gf_(),!1))
u.z.push(W.W(a,"focus",u.gf5(),!1))
u.z.push(W.W(a,"blur",u.geU(),!1))
u.z.push(W.W(s,"keyup",u.gf9(),!1))
u.z.push(W.W(s,"keydown",u.gf7(),!1))
u.z.push(W.W(a,"mousedown",u.gfd(),!1))
u.z.push(W.W(a,"mouseup",u.gfh(),!1))
u.z.push(W.W(a,r,u.gff(),!1))
t=u.z
W.ks(a)
W.ks(a)
t.push(W.W(a,W.ks(a),u.gfj(),!1))
u.z.push(W.W(s,r,u.gf1(),!1))
u.z.push(W.W(s,"mouseup",u.gf3(),!1))
u.z.push(W.W(s,"pointerlockchange",u.gfl(),!1))
u.z.push(W.W(a,"touchstart",u.gfB(),!1))
u.z.push(W.W(a,"touchend",u.gfv(),!1))
u.z.push(W.W(a,"touchmove",u.gfz(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a9(Date.now(),!1)
q.cy=0
q.cY()
return q},
eT:function eT(){},
b3:function b3(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
du:function du(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i9:function i9(a){this.a=a}},Z={
kI:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bF(c)),35044)
a.bindBuffer(b,null)
return new Z.dI(b,u)},
ak:function(a){return new Z.aT(a)},
dI:function dI(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iW:function iW(a){this.a=a},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a){this.a=a}},D={
H:function(){var u=new D.bq()
u.d=0
return u},
eW:function eW(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
X:function X(){this.b=null},
bs:function bs(){this.b=null},
bt:function bt(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aa:function aa(){},
d2:function d2(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hs:function hs(){},
hT:function hT(){}},X={cN:function cN(a,b){this.a=a
this.b=b},d1:function d1(a,b){this.a=a
this.b=b},fE:function fE(){var _=this
_.d=_.c=_.b=_.a=null},d5:function d5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aJ:function aJ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hc:function hc(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c2:function c2(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(){},dy:function dy(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},id:function id(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dE:function dE(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mN:function(a){var u=new X.fr(),t=new V.ag(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lq
if(t==null){t=V.lp(0,0,1,1)
$.lq=t}u.r=t
return u},
ko:function ko(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(){}},V={
oV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bb(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ad("null",c)
return C.a.ad(C.d.dV(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bK:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ad(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kW:function(a){return C.d.ia(Math.pow(2,C.R.cb(Math.log(H.oq(a))/Math.log(2))))},
d8:function(){var u=$.li
return u==null?$.li=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lh:function(a,b,c){var u=c.p(0,Math.sqrt(c.B(c))),t=b.ay(u),s=t.p(0,Math.sqrt(t.B(t))),r=u.ay(s),q=new V.w(a.a,a.b,a.c),p=s.S(0).B(q),o=r.S(0).B(q),n=u.S(0).B(q)
return V.at(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aM:function(){var u=$.ll
return u==null?$.ll=new V.U(0,0):u},
kC:function(){var u=$.c7
return u==null?$.c7=new V.O(0,0,0):u},
lp:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)},
cj:function(){var u=$.lE
return u==null?$.lE=new V.w(0,0,0):u},
nu:function(){var u=$.iH
return u==null?$.iH=new V.w(-1,0,0):u},
kH:function(){var u=$.iI
return u==null?$.iI=new V.w(0,1,0):u},
lF:function(){var u=$.iJ
return u==null?$.iJ=new V.w(0,0,1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.a=a},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aH:function aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oP:function(a){P.nm(C.O,new V.kd(a))},
nh:function(a){var u=new V.hM()
u.eg(a,!0)
return u},
cO:function cO(){},
kd:function kd(a){this.a=a},
f7:function f7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ft:function ft(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hq:function hq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){this.a=a
this.c=null},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(){this.b=this.a=null},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a},
hP:function hP(a){this.a=a}},U={
kr:function(){var u=new U.eY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
la:function(a){var u=new U.cP()
u.a=a
return u},
eY:function eY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cP:function cP(){this.b=this.a=null},
bU:function bU(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
dF:function dF(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
m3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.nh("Test 018"),a2=W.kp()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.k]
a1.d5(H.c(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],u))
a1.h_(H.c(["shapes"],u))
a1.d5(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.r(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.nl(t,!0,!0,!0,!1)
r=new E.b3()
r.a=""
r.b=!0
q=E.b3
p=O.kq(q)
r.y=p
p.bc(r.ghL(),r.ghO())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa7(0,a)
r.sb7(a)
r.sa7(0,F.m7(8,8))
p=new U.bU()
p.bB(U.ab)
p.bc(p.geM(),p.gfq())
p.e=null
p.f=V.d8()
p.r=0
o=s.r
n=new U.dG()
m=U.kr()
m.scv(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sZ(0,0)
m.sci(100)
m.sW(0)
m.sc4(0.5)
n.b=m
l=n.gaL()
m.gA().n(0,l)
m=U.kr()
m.scv(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sZ(0,0)
m.sci(100)
m.sW(0)
m.sc4(0.5)
n.c=m
m.gA().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ai(!1,!1,!1)
j=n.d
n.d=k
m=new D.C(a0,j,k)
m.b=!0
n.R(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.C("invertX",m,!1)
m.b=!0
n.R(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.C("invertY",m,!1)
m.b=!0
n.R(m)}n.b0(o)
p.n(0,n)
o=s.r
n=new U.dF()
m=U.kr()
m.scv(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sZ(0,0)
m.sci(100)
m.sW(0)
m.sc4(0.2)
n.b=m
m.gA().n(0,n.gaL())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ai(!0,!1,!1)
j=n.c
n.c=k
m=new D.C(a0,j,k)
m.b=!0
n.R(m)
n.b0(o)
p.n(0,n)
o=s.r
n=new U.dH()
n.c=0.01
n.e=n.d=0
k=new X.ai(!1,!1,!1)
n.b=k
m=new D.C(a0,a,k)
m.b=!0
n.R(m)
n.b0(o)
p.n(0,n)
r.sb7(p)
i=s.f.dC("../resources/Dirt.png")
h=s.f.dC("../resources/Grass.png")
g=new O.d6()
p=O.kq(V.aH)
g.e=p
p.bc(g.geQ(),g.geS())
p=new O.as(g,"emission")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
g.f=p
p=new O.as(g,"ambient")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
g.r=p
p=new O.as(g,"diffuse")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
g.x=p
p=new O.as(g,"invDiffuse")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
g.y=p
p=new O.h_(g,"specular")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
p.ch=100
g.z=p
p=new O.fW(g,"bump")
p.c=new A.a5(!1,!1,!1)
g.Q=p
g.ch=null
p=new O.as(g,"reflect")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
g.cx=p
p=new O.fZ(g,"refract")
p.c=new A.a5(!1,!1,!1)
p.f=new V.a4(0,0,0)
p.ch=1
g.cy=p
p=new O.fV(g,"alpha")
p.c=new A.a5(!1,!1,!1)
p.f=1
g.db=p
p=new D.d2()
p.bB(D.aa)
p.e=H.c([],[D.bo])
p.f=H.c([],[D.hs])
p.r=H.c([],[D.hT])
p.y=p.x=null
p.cA(p.geO(),p.gfo(),p.gft())
g.dx=p
o=new O.fY()
o.b=new V.ag(0,0,0,0)
o.c=1
o.d=10
o.e=!1
g.dy=o
o=p.x
p=o==null?p.x=D.H():o
p.n(0,g.gfJ())
p=g.dx
o=p.y
p=o==null?p.y=D.H():o
p.n(0,g.gbe())
g.fr=null
p=g.dx
f=V.kH()
o=U.la(V.lh(V.kC(),f,new V.w(-1,-1,-1)))
e=new V.a4(1,1,1)
n=new D.bo()
n.c=new V.a4(1,1,1)
n.a=V.lF()
n.d=V.kH()
n.e=V.nu()
j=n.b
n.b=o
o.gA().n(0,n.gej())
o=new D.C("mover",j,n.b)
o.b=!0
n.at(o)
if(!n.c.t(0,e)){j=n.c
n.c=e
o=new D.C("color",j,e)
o.b=!0
n.at(o)}p.n(0,n)
g.x.saV(i)
g.y.saV(h)
p=new M.cU()
p.a=!0
q=O.kq(q)
p.e=q
q.bc(p.geW(),p.geY())
p.y=p.x=p.r=p.f=null
d=X.mN(a)
c=new X.df()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb7(a)
q=c.c
if(!(Math.abs(q-1.0471975511965976)<$.B().a)){c.c=1.0471975511965976
q=new D.C("fov",q,1.0471975511965976)
q.b=!0
c.aI(q)}q=c.d
if(!(Math.abs(q-0.1)<$.B().a)){c.d=0.1
q=new D.C("near",q,0.1)
q.b=!0
c.aI(q)}q=c.e
if(!(Math.abs(q-2000)<$.B().a)){c.e=2000
q=new D.C("far",q,2000)
q.b=!0
c.aI(q)}q=p.b
if(q!==c){if(q!=null)q.gA().D(0,p.gal())
j=p.b
p.b=c
c.gA().n(0,p.gal())
q=new D.C("camera",j,p.b)
q.b=!0
p.au(q)}q=p.c
if(q!==d){if(q!=null)q.gA().D(0,p.gal())
j=p.c
p.c=d
d.gA().n(0,p.gal())
q=new D.C("target",j,p.c)
q.b=!0
p.au(q)}p.sdU(a)
p.sdU(g)
p.e.n(0,r)
p.b.sb7(U.la(V.at(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gA().D(0,s.gcF())
s.d=p
p.gA().n(0,s.gcF())
s.cG()}q=new V.hv("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.r("Failed to find shapes for RadioGroup")
q.an(0,"Cube",new M.k2(r))
q.an(0,"Cuboid",new M.k3(r))
q.an(0,"Cylinder",new M.k4(r))
q.an(0,"Cone",new M.k5(r))
q.an(0,"LatLonSphere",new M.k6(r))
q.an(0,"IsoSphere",new M.k7(r))
q.bk(0,"Sphere",new M.k8(r),!0)
q.an(0,"Toroid",new M.k9(r))
q.an(0,"Knot",new M.ka(r))
u=s.z
if(u==null)u=s.z=D.H()
q=u.b
u=q==null?u.b=H.c([],[{func:1,ret:-1,args:[D.X]}]):q
u.push(new M.kb(a1,g))
V.oP(s)},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b}},A={
mZ:function(a,b){var u=a.az,t=new A.fU(b,u)
t.ef(b,u)
t.ec(a,b)
return t},
n_:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaj(a0)+a1.gaj(a1)+a2.gaj(a2)+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.p)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.p)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
q=a6.b||!1
if(!q){q=a7.b||!1
p=q}else p=!0
q=a1.b||!1
if(!q){q=a2.b||!1
if(!q){q=a3.b||!1
if(!q)q=a4.b||!1
else q=!0
o=q}else o=!0}else o=!0
q=a4.b||!1
n=q||u>0||p
u=a2.b||!1
if(!u){u=a3.b||!1
if(!u){u=a4.b||!1
m=u}else m=!0}else m=!0
if(!m){u=a5.b||!1
l=u||p}else l=!0
k=a5.b||!1
j=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
i=e>0
h=l||k||n||!1
a=a&&j
g=$.aY()
if(l){u=$.aX()
g=new Z.aT(g.a|u.a)}if(k){u=$.aW()
g=new Z.aT(g.a|u.a)}if(j){u=$.aZ()
g=new Z.aT(g.a|u.a)}if(i){u=$.aV()
g=new Z.aT(g.a|u.a)}return new A.fX(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jL:function(a,b,c){if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jM:function(a,b,c){var u
A.jL(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ki(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.b){u+="   "+c+"Color = texture2D("+c+"Txt, txt2D).rgb;\n"
a.a=u}a.a=u+"}\n"},
o_:function(a,b){var u=a.a,t=u.b||!1
if(!t)return
t=b.a+="// === Emission ===\n"
b.a=t+"\n"
A.jL(b,u,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="}\n"
b.a=u
b.a=u+"\n"},
nX:function(a,b){var u=a.b,t=u.b||!1
if(!t)return
t=b.a+="// === Ambient ===\n"
b.a=t+"\n"
A.jM(b,u,"ambient")
b.a+="\n"},
nY:function(a,b){var u=a.c,t=u.b||!1
if(!t)return
t=b.a+="// === Diffuse ===\n"
b.a=t+"\n"
A.jM(b,u,"diffuse")
u=b.a+="\n"
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = dot(norm, -litVec);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return diffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
o0:function(a,b){var u=a.d,t=u.b||!1
if(!t)return
t=b.a+="// === Inverse Diffuse ===\n"
b.a=t+"\n"
A.jM(b,u,"invDiffuse")
u=b.a+="\n"
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return invDiffuseColor*scalar;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
o6:function(a,b){var u=a.e,t=u.b||!1
if(!t)return
t=b.a+="// === Specular ===\n"
t+="\n"
b.a=t
b.a=t+"uniform float shininess;\n"
A.jM(b,u,"specular")
u=b.a+="\n"
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
o2:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f.b
if(t){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
s=t||!1
if(!s||!1)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(t?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
b.a=u
u+="   vec3 b = normalize(binormalVec);\n"
b.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
b.a=u
u+="   b = cross(n, c);\n"
b.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=u
u+="                   -c.x, -c.y, -c.z,\n"
b.a=u
u+="                    n.x,  n.y,  n.z);\n"
b.a=u
u=b.a=u+"   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n"
b.a=u
b.a=u+"\n"},
o4:function(a,b){var u=a.r,t=u.b||!1
if(!t)return
t=b.a+="// === Reflection ===\n"
b.a=t+"\n"
A.jL(b,u,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
o5:function(a,b){var u=a.x,t=u.b||!1
if(!t)return
t=b.a+="// === Refraction ===\n"
b.a=t+"\n"
A.jL(b,u,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(u.b){u=t+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=u}else u=t
u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ki(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.af()
u=(u&1)!==0
if(u){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r=c.a=r+"   vec3 objDir;\n"}r+="   vec3 viewDir;\n"
c.a=r
r+="   vec3 color;\n"
c.a=r
r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+l+"];\n"
if(u)for(q=0;q<l;++q)r=c.a+="uniform sampler2D "+t+"sTexture2D"+q+";\n"
r+="\n"
c.a=r
p=u?", sampler2D txt2D":""
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+p+")\n"
c.a=r
c.a=r+"{\n"
r=[P.k]
o=H.c([],r)
n=a.b.b||!1
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
r=a.c.b||!1
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d.b||!1
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e.b||!1
if(r)m.push("specular(norm, lit.viewDir)")
if(u){r=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
r+="   float tu = dot(offset, lit.objUp);\n"
c.a=r
r+="   float tv = dot(offset, lit.objRight);\n"
c.a=r
r+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=r
r+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=r
c.a=r+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.b.k(m," + ")+");\n"}else c.a+="   highLight = "+C.b.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.k(o," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(u){for(u=r,q=0;q<l;++q){c.a+="   if("+t+"Count <= "+q+") return lightAccum;\n"
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+q+"], "+t+"sTexture2D"+q+");\n"}l=u}else{l=c.a+="   for(int i = 0; i < "+l+"; ++i)\n"
l+="   {\n"
c.a=l
l+="      if(i >= "+t+"Count) break;\n"
c.a=l
l+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=l
l=c.a=l+"   }\n"}l+="   return lightAccum;\n"
c.a=l
l+="}\n"
c.a=l
c.a=l+"\n"},
o3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ki(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 point;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.af()
q=(u&3)!==0
if(q){r+="   mat3 invViewRotMat;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&4)!==0
if(o){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+j+"];\n"
u=(u&1)!==0
if(u)for(n=0;n<j;++n)r=c.a+="uniform samplerCube "+t+"sTextureCube"+n+";\n"
r+="\n"
c.a=r
m=u?", samplerCube txtCube":""
if(p)m+=", samplerCube shadowCube"
r+="vec3 "+t+"Intensity(vec3 normDir, "+s+" lit"+m+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   float dist = length(objPos - lit.point);\n"
if(o){r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
r+="\n"
c.a=r}if(q)r=c.a=r+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(p){r+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=r
r+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=r
r+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.k]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.k(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
o=a.b.b||!1
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
r=a.c.b||!1
if(r)k.push("diffuse(norm, normDir)")
r=a.d.b||!1
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e.b||!1
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.k(l," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(q){for(n=0;n<j;++n){c.a+="   if("+t+"Count <= "+n+") return lightAccum;\n"
m=u?", "+t+"sTextureCube"+n:""
if(p)m+=", "+t+"sShadowCube"+n
r=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+n+"]"+m+");\n"}j=r}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+t+"Count) break;\n"
c.a=j
j+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
o7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ki(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 objPnt;\n"
c.a=r
r+="   vec3 objDir;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.af()
q=(u&3)!==0
if(q){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r+="   float tuScalar;\n"
c.a=r
r+="   float tvScalar;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&8)!==0
if(o){r+="   float cutoff;\n"
c.a=r
r+="   float coneAngle;\n"
c.a=r}n=(u&4)!==0
if(n){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+g+"];\n"
m=(u&1)!==0
if(m)for(l=0;l<g;++l)r=c.a+=h+t+"sTexture2D"+l+";\n"
if(p)for(l=0;l<g;++l)r=c.a+=h+t+"sShadow2D"+l+";\n"
r+="\n"
c.a=r
k=m?", sampler2D txt2D":""
if(p)k+=", sampler2D shadow2D"
r+="vec3 "+t+"Intensity("+s+" lit"+k+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   vec3 dir = objPos - lit.objPnt;\n"
if((u&6)!==0){u=r+"   float dist = length(dir);\n"
c.a=u}else u=r
if(n){u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u=c.a=u+"\n"}u+="   vec3 normDir = normalize(dir);\n"
c.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=u
u=c.a=u+"   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
if(o){u+="   float angle = acos(zScale);\n"
c.a=u
u+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=u
u+="\n"
c.a=u}if(q){u+="   normDir = normDir / zScale;\n"
c.a=u
u+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=u
u+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=u
u+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=u
u=c.a=u+"\n"}if(p){u+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=u
u+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=u
u+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
c.a=u+"\n"}u=[P.k]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.k(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
r=a.b.b||!1
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
u=a.c.b||!1
if(u)i.push("diffuse(norm, litVec)")
u=a.d.b||!1
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e.b||!1
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.k(j," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
u+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(q){for(l=0;l<g;++l){c.a+="   if("+t+"Count <= "+l+") return lightAccum;\n"
k=m?", "+t+"sTexture2D"+l:""
if(p)k+=", "+t+"sShadow2D"+l
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+l+"]"+k+");\n"}g=u}else{g=c.a+="   for(int i = 0; i < "+g+"; ++i)\n"
g+="   {\n"
c.a=g
g+="      if(i >= "+t+"Count) break;\n"
c.a=g
g+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=g
g=c.a=g+"   }\n"}g+="   return lightAccum;\n"
c.a=g
g+="}\n"
c.a=g
c.a=g+"\n"},
o1:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.k])
u=a.b.b||!1
if(u)t.push("ambientColor")
u=a.c.b||!1
if(u)t.push("diffuse(norm, litVec)")
u=a.d.b||!1
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e.b||!1
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o8:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
j.a="precision mediump float;\n"
j.a=l
u=a.k3
if(u){j.a=k
t=k}else t=l
if(a.k4){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
j.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k1){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k2?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.dx)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.o_(a,j)
A.nX(a,j)
A.nY(a,j)
A.o0(a,j)
A.o6(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o4(a,j)
A.o5(a,j)}A.o2(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
p=q||!1
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.nZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.o3(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.o7(a,q[o],j)
A.o1(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.k])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
u=a.b.b||!1
if(u)j.a+="   setAmbientColor();\n"
u=a.c.b||!1
if(u)j.a+="   setDiffuseColor();\n"
u=a.d.b||!1
if(u)j.a+="   setInvDiffuseColor();\n"
u=a.e.b||!1
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a.b||!1
if(u)n.push("emissionColor()")
u=a.r.b||!1
if(u)n.push("reflect(refl)")
u=a.x.b||!1
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o9:function(a,b){var u,t,s
if(!a.rx)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.y2+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k3
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.k4
u=(s?b.a=u+"vec3 bendBinm;\n":u)+"\n"
b.a=u
u+="void adjustBend(float bendVal)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(bendVal >= 0.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=u
u+="      if(index < bendMatCount)\n"
b.a=u
u+="      {\n"
b.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=u
u+="         mat4 m = bendValues[index].mat;\n"
b.a=u
u+="         weightSum += weight;\n"
b.a=u
u=b.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=u}u=(s?b.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
b.a=u
u+="   }\n"
b.a=u
u+="}\n"
b.a=u
u+="\n"
b.a=u
u+="void setupBendData()\n"
b.a=u
u+="{\n"
b.a=u
u=b.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
b.a=u
u+="   adjustBend(bendAttr.x);\n"
b.a=u
u+="   adjustBend(bendAttr.y);\n"
b.a=u
u+="   adjustBend(bendAttr.z);\n"
b.a=u
u+="   adjustBend(bendAttr.w);\n"
b.a=u
u+="   if(weightSum < 1.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      float weight = 1.0 - weightSum;\n"
b.a=u
u=b.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
b.a=u}u=(s?b.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
b.a=u
u+="   else\n"
b.a=u
u+="   {\n"
b.a=u
u+="      bendPos = bendPos/weightSum;\n"
b.a=u
u=b.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
b.a=u
b.a=u+"\n"},
ob:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oa:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
od:function(a,b){var u,t
if(!a.r1)return
u=a.ry
if(u)b.a+="uniform mat3 txt2DMat;\n"
t=b.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
b.a=t
t+="\n"
b.a=t
t+="vec2 getTxt2D()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=t+"   return txt2DAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
oe:function(a,b){var u,t
if(!a.r2)return
u=a.x1
if(u)b.a+="uniform mat4 txtCubeMat;\n"
t=b.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
b.a=t
t+="\n"
b.a=t
t+="vec3 getTxtCube()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=t+"   return txtCubeAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
oc:function(a,b){var u
if(!a.k1)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
of:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ki:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a8(a,1)},
kE:function(a,b,c,d,e){var u=new A.il(a,c,e)
u.f=d
P.mX(d,0,P.x)
return u},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b){var _=this
_.io=_.dg=_.im=_.df=_.az=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iA=_.iz=_.iy=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.ix=_.dq=_.iw=_.iv=_.dn=_.iu=_.dm=_.it=_.dl=_.is=_.dk=_.ir=_.dj=_.di=_.iq=_.dh=_.ip=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.az=b3
_.df=b4},
cf:function cf(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p},
dk:function dk(){},
dA:function dA(){},
ir:function ir(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
aj:function aj(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bA:function bA(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kR:function(a,b,c,d){var u=F.hI()
F.cy(u,b,c,d,a,1,0,0,1)
F.cy(u,b,c,d,a,0,1,0,3)
F.cy(u,b,c,d,a,0,0,1,2)
F.cy(u,b,c,d,a,-1,0,0,0)
F.cy(u,b,c,d,a,0,-1,0,0)
F.cy(u,b,c,d,a,0,0,-1,3)
u.ah()
return u},
jG:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cy:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.w(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.w(u+a3,t+a1,s+a2)
q=new V.w(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.w(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jG(i)
l=F.jG(j.b)
k=F.kh(d,a0,new F.jF(j,F.jG(j.c),F.jG(j.d),l,m,c),b)
if(k!=null)a.aS(k)},
lZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hI()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.bg])
q=u.a
p=new V.w(0,0,t)
p=p.p(0,Math.sqrt(p.B(p)))
r.push(q.h3(new V.bc(a,-1,-1,-1),new V.ag(1,1,1,1),new V.O(0,0,c),new V.w(0,0,t),new V.U(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.w(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bC(new V.bc(a,-1,-1,-1),null,new V.ag(i,g,h,1),new V.O(m*k,l*k,c),new V.w(0,0,t),new V.U(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h1(r)
return u},
lX:function(a,b,c){return F.ou(!0,a,1,new F.jP(1,c),b)},
ou:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kh(c,e,new F.jR(d),null)
if(u==null)return
u.ah()
u.bl()
if(b)u.aS(F.lZ(3,!1,1,new F.jS(d),e))
u.aS(F.lZ(1,!0,-1,new F.jT(d),e))
return u},
oJ:function(a,b){var u=F.kh(a,b,new F.k1(),null)
u.d.bt()
u.ah()
u.bl()
return u},
a2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.B(b)))
u=b.a
t=b.b
s=b.c
r=F.bC(j,j,j,new V.O(u,t,s),b,j,j,j,0)
q=a.hw(r,new F.ck())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sb1(0,new V.ag(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.saV(new V.U(l,k<0?-k:k))
a.a.n(0,r)
return r},
M:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bk(0,b,d,c)
else{u=F.a2(a,b.r.v(0,c.r).q(0,0.5))
t=F.a2(a,c.r.v(0,d.r).q(0,0.5))
s=F.a2(a,d.r.v(0,b.r).q(0,0.5))
r=e-1
F.M(a,b,u,s,r)
F.M(a,u,c,t,r)
F.M(a,t,s,u,r)
F.M(a,s,t,d,r)}},
m7:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ke()
t=F.kR(a,null,new F.kf(s,1),b)
t.bl()
return t},
oT:function(){return F.lY(15,30,0.5,1,new F.kj())},
oI:function(){return F.lY(12,120,0.3,1,new F.k0(3,2))},
lY:function(a,b,c,d,e){var u=F.kh(a,b,new F.jQ(e,d,b,c),null)
if(u==null)return
u.ah()
u.bl()
return u},
kh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hI()
t=H.c([],[F.bg])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bC(g,g,new V.ag(p,0,0,1),g,g,new V.U(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c3(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bC(g,g,new V.ag(j,i,h,1),g,g,new V.U(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c3(d))}}u.d.h2(a+1,b+1,t)
return u},
bS:function(a,b,c){var u=new F.aD(),t=a.a
if(t==null)H.r(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.o("May not create a face with vertices attached to different shapes."))
u.bh(a)
u.bi(b)
u.cZ(c)
u.a.a.d.b.push(u)
u.a.a.T()
return u},
mT:function(a,b){var u=new F.bY(),t=a.a
if(t==null)H.r(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.o("May not create a line with vertices attached to different shapes."))
u.bh(a)
u.bi(b)
u.a.a.c.b.push(u)
u.a.a.T()
return u},
hI:function(){var u=new F.hH(),t=new F.iK(u)
t.b=!1
t.c=H.c([],[F.bg])
u.a=t
t=new F.hL(u)
t.b=H.c([],[F.c6])
u.b=t
t=new F.hK(u)
t.b=H.c([],[F.bY])
u.c=t
t=new F.hJ(u)
t.b=H.c([],[F.aD])
u.d=t
u.e=null
return u},
bC:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bg(),r=new F.iS()
r.b=H.c([],[F.c6])
s.b=r
r=new F.iP()
u=[F.bY]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iL()
u=[F.aD]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mm()
s.e=0
r=$.aY()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aX().a)!==0?e:t
s.x=(u&$.aW().a)!==0?b:t
s.y=(u&$.aZ().a)!==0?f:t
s.z=(u&$.bj().a)!==0?g:t
s.Q=(u&$.mn().a)!==0?c:t
s.ch=(u&$.bM().a)!==0?i:0
s.cx=(u&$.aV().a)!==0?a:t
return s},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
k1:function k1(){},
ke:function ke(){},
kf:function kf(a,b){this.a=a
this.b=b},
kj:function kj(){},
k0:function k0(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(){},
hQ:function hQ(){},
bY:function bY(){this.b=this.a=null},
fG:function fG(){},
ik:function ik(){},
c6:function c6(){this.a=null},
hH:function hH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
bg:function bg(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){this.a=a},
iT:function iT(a){this.a=a},
iK:function iK(a){this.a=a
this.c=this.b=null},
iL:function iL(){this.d=this.c=this.b=null},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iP:function iP(){this.c=this.b=null},
iQ:function iQ(){},
ck:function ck(){},
iR:function iR(){},
iO:function iO(){},
hk:function hk(){},
iS:function iS(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ky.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.c8(a)},
h:function(a){return"Instance of '"+H.e(H.c9(a))+"'"}}
J.fB.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaz:1}
J.d_.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.d0.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hp.prototype={}
J.bB.prototype={}
J.b6.prototype={
h:function(a){var u=a[$.ma()]
if(u==null)return this.e9(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b4.prototype={
dQ:function(a,b){if(!!a.fixed$length)H.r(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dh(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.r(P.y("remove"))
for(u=0;u<a.length;++u)if(J.z(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aB(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hI:function(a){return this.k(a,"")},
hA:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aB(a))}return u},
hB:function(a,b,c){return this.hA(a,b,c,null)},
hz:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aB(a))}throw H.d(H.fz())},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
e5:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Y(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cE(a,0)])
return H.c(a.slice(b,c),[H.cE(a,0)])},
ghy:function(a){if(a.length>0)return a[0]
throw H.d(H.fz())},
gaq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fz())},
d6:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aB(a))}return!1},
bz:function(a,b){if(!!a.immutable$list)H.r(P.y("sort"))
H.dl(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.z(a[u],b))return!0
return!1},
h:function(a){return P.kv(a,"[","]")},
gV:function(a){return new J.a8(a,a.length)},
gI:function(a){return H.c8(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.y("set length"))
if(b<0)throw H.d(P.Y(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.r(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bJ(a,b))
a[b]=c},
$ii:1,
$in:1}
J.kx.prototype={}
J.a8.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bX.prototype={
he:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbp(b)
if(this.gbp(a)===u)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
ia:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
cb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
dV:function(a,b){var u
if(b>20)throw H.d(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d0(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.d0(a,b)},
d0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.d_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fT:function(a,b){if(b<0)throw H.d(H.ao(b))
return this.d_(a,b)},
d_:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iad:1}
J.cZ.prototype={$ix:1}
J.cY.prototype={}
J.b5.prototype={
X:function(a,b){if(b<0)throw H.d(H.bJ(a,b))
if(b>=a.length)H.r(H.bJ(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.bJ(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.d(P.l5(b,null,null))
return a+b},
aU:function(a,b,c,d){var u,t
c=P.bd(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ao(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.dh(b,null))
if(b>c)throw H.d(P.dh(b,null))
if(c>a.length)throw H.d(P.dh(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.u(a,b,null)},
ic:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bo:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dz:function(a,b){return this.bo(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.X(this.a,b)},
$au:function(){return[P.x]},
$ai:function(){return[P.x]},
$an:function(){return[P.x]}}
H.fe.prototype={}
H.d4.prototype={
gV:function(a){return new H.bZ(this,this.gl(this))},
bx:function(a,b){return this.e8(0,b)}}
H.bZ.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cB(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aB(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fR.prototype={
gV:function(a){return new H.fS(J.b_(this.a),this.b)},
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ai:function(a,b){return[b]}}
H.fS.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.fT.prototype={
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eI(this.a,b))},
$ad4:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cl.prototype={
gV:function(a){return new H.iX(J.b_(this.a),this.b)}}
H.iX.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.cV.prototype={}
H.iw.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dC.prototype={}
H.f_.prototype={
h:function(a){return P.kB(this)},
m:function(a,b,c){return H.mI()},
$iR:1}
H.f0.prototype={
gl:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bm(0,b))return
return this.cR(b)},
cR:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cR(s))}}}
H.ii.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hl.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fD.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iv.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kk.prototype={
$1:function(a){if(!!J.P(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eg.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bP.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gig:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i2.prototype={}
H.hV.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eH(u)+"'"}}
H.bN.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bN))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c8(this.a)
else u=typeof t!=="object"?J.cI(t):H.c8(t)
return(u^H.c8(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c9(u))+"'")}}
H.eV.prototype={
h:function(a){return this.a}}
H.hE.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.N.prototype={
gl:function(a){return this.a},
ghH:function(a){return this.a===0},
ga3:function(a){return new H.fI(this,[H.cE(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cO(t,b)}else return s.hE(b)},
hE:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ce(u.bJ(t,u.cd(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.hF(b)},
hF:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bJ(r,s.cd(a))
t=s.ce(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cJ(u==null?s.b=s.bR():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cJ(t==null?s.c=s.bR():t,b,c)}else s.hG(b,c)},
hG:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bR()
u=r.cd(a)
t=r.bJ(q,u)
if(t==null)r.bW(q,u,[r.bS(a,b)])
else{s=r.ce(t,a)
if(s>=0)t[s].b=b
else t.push(r.bS(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aB(u))
t=t.c}},
cJ:function(a,b,c){var u=this.bf(a,b)
if(u==null)this.bW(a,b,this.bS(b,c))
else u.b=c},
eJ:function(){this.r=this.r+1&67108863},
bS:function(a,b){var u,t=this,s=new H.fH(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eJ()
return s},
cd:function(a){return J.cI(a)&0x3ffffff},
ce:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1},
h:function(a){return P.kB(this)},
bf:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
eC:function(a,b){delete a[b]},
cO:function(a,b){return this.bf(a,b)!=null},
bR:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bW(t,u,t)
this.eC(t,u)
return t}}
H.fH.prototype={}
H.fI.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fJ(u,u.r)
t.c=u.e
return t}}
H.fJ.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jX.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jY.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jZ.prototype={
$1:function(a){return this.a(a)}}
H.fC.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ind:1}
H.c3.prototype={$ic3:1}
H.b9.prototype={$ib9:1}
H.d9.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c4.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$au:function(){return[P.I]},
$ii:1,
$ai:function(){return[P.I]},
$in:1,
$an:function(){return[P.I]}}
H.da.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$au:function(){return[P.x]},
$ii:1,
$ai:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]}}
H.hd.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.he.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hf.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hg.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.hh.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.db.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.c5.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$ic5:1,
$ibz:1}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
P.iZ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iY.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j_.prototype={
$0:function(){this.a.$0()}}
P.j0.prototype={
$0:function(){this.a.$0()}}
P.em.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.jv(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bI(new P.ju(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idv:1}
P.jv.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ju.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eb(u,q)}s.c=r
t.d.$1(s)}}
P.dJ.prototype={}
P.dq.prototype={}
P.hY.prototype={}
P.dv.prototype={}
P.jE.prototype={}
P.jN.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.de():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.je.prototype={
i6:function(a){var u,t,s,r=null
try{if(C.f===$.an){a.$0()
return}P.oh(r,r,this,a)}catch(s){u=H.ae(s)
t=H.kT(s)
P.lR(r,r,this,u,t)}},
i7:function(a,b){var u,t,s,r=null
try{if(C.f===$.an){a.$1(b)
return}P.oi(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.kT(s)
P.lR(r,r,this,u,t)}},
i8:function(a,b){return this.i7(a,b,null)},
ha:function(a){return new P.jf(this,a)},
d8:function(a,b){return new P.jg(this,a,b)}}
P.jf.prototype={
$0:function(){return this.a.i6(this.b)}}
P.jg.prototype={
$1:function(a){return this.a.i8(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jb.prototype={
gV:function(a){var u=new P.dY(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ex(b)
return t}},
ex:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.cS(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.kJ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.kJ():t,b)}else return s.eq(0,b)},
eq:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kJ()
u=s.cM(b)
t=r[u]
if(t==null)r[u]=[s.bE(b)]
else{if(s.bH(t,b)>=0)return!1
t.push(s.bE(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fE(this.c,b)
else return this.fD(0,b)},
fD:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cS(r,b)
t=s.bH(u,b)
if(t<0)return!1
s.d1(u.splice(t,1)[0])
return!0},
cK:function(a,b){if(a[b]!=null)return!1
a[b]=this.bE(b)
return!0},
fE:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d1(u)
delete a[b]
return!0},
cL:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.jc(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cL()
return s},
d1:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cL()},
cM:function(a){return J.cI(a)&1073741823},
cS:function(a,b){return a[this.cM(b)]},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1}}
P.jc.prototype={}
P.dY.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aB(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fK.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fL.prototype={$ii:1,$in:1}
P.u.prototype={
gV:function(a){return new H.bZ(a,this.gl(a))},
J:function(a,b){return this.i(a,b)},
ib:function(a,b){var u,t,s=this,r=H.c([],[H.oA(s,a,"u",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
cr:function(a){return this.ib(a,!0)},
hv:function(a,b,c,d){var u
P.bd(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kv(a,"[","]")}}
P.fO.prototype={}
P.fP.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aG.prototype={
H:function(a,b){var u,t
for(u=J.b_(this.ga3(a));u.C();){t=u.gK(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.af(this.ga3(a))},
h:function(a){return P.kB(a)},
$iR:1}
P.jw.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fQ.prototype={
i:function(a,b){return J.cH(this.a,b)},
m:function(a,b,c){J.kl(this.a,b,c)},
H:function(a,b){J.l1(this.a,b)},
gl:function(a){return J.af(this.a)},
h:function(a){return J.a3(this.a)},
$iR:1}
P.dD.prototype={}
P.ji.prototype={
ao:function(a,b){var u
for(u=J.b_(b);u.C();)this.n(0,u.gK(u))},
h:function(a){return P.kv(this,"{","}")},
J:function(a,b){var u,t,s
P.lo(b,"index")
for(u=P.nC(this,this.r),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$ii:1}
P.dZ.prototype={}
P.es.prototype={}
P.eR.prototype={
hK:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bd(a0,a1,b.length)
u=$.mp()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jW(C.a.E(b,n))
j=H.jW(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bw(m)
s=n
continue}}throw H.d(P.Q("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.l6(b,p,a1,q,o,f)
else{e=C.c.bb(f-1,4)+1
if(e===1)throw H.d(P.Q(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aU(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l6(b,p,a1,q,o,d)
else{e=C.c.bb(d,4)
if(e===1)throw H.d(P.Q(c,b,a1))
if(e>1)b=C.a.aU(b,a1,a1,e===2?"==":"=")}return b}}
P.eS.prototype={}
P.eX.prototype={}
P.f1.prototype={}
P.fg.prototype={}
P.fx.prototype={
h:function(a){return this.a}}
P.fw.prototype={
ez:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.b(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mA(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iE.prototype={
ghu:function(){return C.M}}
P.iG.prototype={
c2:function(a){var u,t,s=P.bd(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jC(u)
if(t.eE(a,0,s)!==s)t.d3(J.mw(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nT(0,t.b,u.length)))}}
P.jC.prototype={
d3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
eE:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d3(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.iF.prototype={
c2:function(a){var u,t,s,r,q,p,o,n,m=P.np(!1,a,0,null)
if(m!=null)return m
u=P.bd(0,null,J.af(a))
t=P.lT(a,0,u)
if(t>0){s=P.cc(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jB(!1,r)
o.c=p
o.hf(a,q,u)
if(o.e>0){H.r(P.Q("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bw(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jB.prototype={
hf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cB(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.af()
if((r&192)!==128){q=P.Q(k+C.c.ba(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.Q("Overlong encoding of 0x"+C.c.ba(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.Q("Character outside valid Unicode range: 0x"+C.c.ba(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bw(j)
l.c=!1}for(q=s<c;q;){p=P.lT(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cc(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.Q("Negative UTF-8 code unit: -0x"+C.c.ba(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.Q(k+C.c.ba(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.az.prototype={}
P.a9.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
h:function(a){var u=this,t=P.mJ(H.n9(u)),s=P.cQ(H.n7(u)),r=P.cQ(H.n3(u)),q=P.cQ(H.n4(u)),p=P.cQ(H.n6(u)),o=P.cQ(H.n8(u)),n=P.mK(H.n5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.b2.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
h:function(a){var u,t,s,r=new P.fd(),q=this.a
if(q<0)return"-"+new P.b2(0-q).h(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fc().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fc.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fd.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.de.prototype={
h:function(a){return"Throw of null."}}
P.al.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.ku(q.b)
return t+s+": "+r}}
P.bx.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fy.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.ix.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.it.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cb.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eZ.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ku(u)+"."}}
P.ho.prototype={
h:function(a){return"Out of Memory"},
$ibp:1}
P.dn.prototype={
h:function(a){return"Stack Overflow"},
$ibp:1}
P.f6.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dR.prototype={
h:function(a){return"Exception: "+this.a}}
P.fq.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.a.u(f,m,n)
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fs.prototype={}
P.x.prototype={}
P.i.prototype={
bx:function(a,b){return new H.cl(this,b,[H.kS(this,"i",0)])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.C();)++u
return u},
gaG:function(a){var u,t=this.gV(this)
if(!t.C())throw H.d(H.fz())
u=t.gK(t)
if(t.C())throw H.d(H.mQ())
return u},
J:function(a,b){var u,t,s
P.lo(b,"index")
for(u=this.gV(this),t=0;u.C();){s=u.gK(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
h:function(a){return P.mP(this,"(",")")}}
P.fA.prototype={}
P.n.prototype={$ii:1}
P.R.prototype={}
P.ba.prototype={
gI:function(a){return P.a0.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ad.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
t:function(a,b){return this===b},
gI:function(a){return H.c8(this)},
h:function(a){return"Instance of '"+H.e(H.c9(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iC.prototype={
$2:function(a,b){var u,t,s,r=J.cC(b).dz(b,"=")
if(r===-1){if(b!=="")J.kl(a,P.kN(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.a8(b,r+1)
s=this.a
J.kl(a,P.kN(u,0,u.length,s,!0),P.kN(t,0,t.length,s,!0))}return a}}
P.iz.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv4 address, "+a,this.a,b))}}
P.iA.prototype={
$2:function(a,b){throw H.d(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iB.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eG(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bD.prototype={
gdY:function(){return this.b},
gcc:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbr:function(a){var u=this.d
if(u==null)return P.lK(this.a)
return u},
gcn:function(a){var u=this.f
return u==null?"":u},
gds:function(){var u=this.r
return u==null?"":u},
dR:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kL(null,0,0,b)
return new P.bD(q,o,m,n,u,s,r.r)},
gco:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dD(P.lA(t==null?"":t),[u,u])
t=u}return t},
gdt:function(){return this.c!=null},
gdw:function(){return this.f!=null},
gdu:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikF)if(s.a==b.gby())if(s.c!=null===b.gdt())if(s.b==b.gdY())if(s.gcc(s)==b.gcc(b))if(s.gbr(s)==b.gbr(b))if(s.e===b.gdM(b)){u=s.f
t=u==null
if(!t===b.gdw()){if(t)u=""
if(u===b.gcn(b)){u=s.r
t=u==null
if(!t===b.gdu()){if(t)u=""
u=u===b.gds()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ikF:1,
gby:function(){return this.a},
gdM:function(a){return this.e}}
P.jx.prototype={
$1:function(a){throw H.d(P.Q("Invalid port",this.a,this.b+1))}}
P.jy.prototype={
$1:function(a){return P.et(C.W,a,C.e,!1)}}
P.jA.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.et(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.et(C.h,b,C.e,!0))}}}
P.jz.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b_(b),t=this.a;u.C();)t.$2(a,u.gK(u))}}
P.iy.prototype={
gdX:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bo(u,"?",o)
s=u.length
if(t>=0){r=P.cx(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j4("data",p,p,p,P.cx(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jI.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jH.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mx(u,0,96,b)
return u},
$S:17}
P.jJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jl.prototype={
gdt:function(){return this.c>0},
gdv:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdw:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdu:function(){return this.r<this.a.length},
gcT:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcU:function(){return this.b===5&&C.a.a2(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcT())q=t.x="http"
else if(t.gcU()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
gdY:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcc:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbr:function(a){var u,t=this
if(t.gdv()){u=t.d
if(typeof u!=="number")return u.v()
return P.eG(C.a.u(t.a,u+1,t.e),null,null)}if(t.gcT())return 80
if(t.gcU())return 443
return 0},
gdM:function(a){return C.a.u(this.a,this.e,this.f)},
gcn:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.u(this.a,u+1,t):""},
gds:function(){var u=this.r,t=this.a
return u<t.length?C.a.a8(t,u+1):""},
gco:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.k
return new P.dD(P.lA(u.gcn(u)),[t,t])},
dR:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gby(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdv()?p.gbr(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kL(o,0,0,b)
s=p.r
q=s<l.length?C.a.a8(l,s+1):o
return new P.bD(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikF&&this.a===b.h(0)},
h:function(a){return this.a},
$ikF:1}
P.j4.prototype={}
W.m.prototype={}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
h:function(a){return String(a)}}
W.eL.prototype={
h:function(a){return String(a)}}
W.bl.prototype={$ibl:1}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cw:function(a,b,c){if(c!=null)return a.getContext(b,P.or(c))
return a.getContext(b)},
e0:function(a,b){return this.cw(a,b,null)},
$ibn:1}
W.b0.prototype={
gl:function(a){return a.length}}
W.f2.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bQ.prototype={
gl:function(a){return a.length}}
W.f3.prototype={}
W.ah.prototype={}
W.aq.prototype={}
W.f4.prototype={
gl:function(a){return a.length}}
W.f5.prototype={
gl:function(a){return a.length}}
W.f8.prototype={
gl:function(a){return a.length}}
W.am.prototype={$iam:1}
W.f9.prototype={
h:function(a){return String(a)}}
W.cS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[[P.ac,P.ad]]},
$au:function(){return[[P.ac,P.ad]]},
$ii:1,
$ai:function(){return[[P.ac,P.ad]]},
$in:1,
$an:function(){return[[P.ac,P.ad]]}}
W.cT.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaF(a))+" x "+H.e(this.gaA(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iac)return!1
return a.left===u.gbq(b)&&a.top===u.gbv(b)&&this.gaF(a)===u.gaF(b)&&this.gaA(a)===u.gaA(b)},
gI:function(a){return W.lI(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaF(a)),C.d.gI(this.gaA(a)))},
gda:function(a){return a.bottom},
gaA:function(a){return a.height},
gbq:function(a){return a.left},
gcq:function(a){return a.right},
gbv:function(a){return a.top},
gaF:function(a){return a.width},
$iac:1,
$aac:function(){return[P.ad]}}
W.fa.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[P.k]},
$au:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.fb.prototype={
gl:function(a){return a.length}}
W.j2.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.cr(this)
return new J.a8(u,u.length)},
$au:function(){return[W.T]},
$ai:function(){return[W.T]},
$an:function(){return[W.T]}}
W.T.prototype={
gh9:function(a){return new W.j5(a)},
gc1:function(a){return new W.j2(a,a.children)},
gdc:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.ad])},
h:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ld
if(u==null){u=H.c([],[W.aK])
t=new W.dd(u)
u.push(W.lH(null))
u.push(W.lJ())
$.ld=t
d=t}else d=u
u=$.lc
if(u==null){u=new W.eu(d)
$.lc=u
c=u}else{u.a=d
c=u}}if($.aC==null){u=document
t=u.implementation.createHTMLDocument("")
$.aC=t
$.kt=t.createRange()
s=$.aC.createElement("base")
s.href=u.baseURI
$.aC.head.appendChild(s)}u=$.aC
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aC
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aC.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.U,a.tagName)){$.kt.selectNodeContents(r)
q=$.kt.createContextualFragment(b)}else{r.innerHTML=b
q=$.aC.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aC.body
if(r==null?u!=null:r!==u)J.l3(r)
c.cz(q)
document.adoptNode(q)
return q},
hi:function(a,b,c){return this.ab(a,b,c,null)},
e2:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iT:1,
gdT:function(a){return a.tagName}}
W.ff.prototype={
$1:function(a){return!!J.P(a).$iT}}
W.h.prototype={$ih:1}
W.f.prototype={
h0:function(a,b,c,d){if(c!=null)this.er(a,b,c,!1)},
er:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)}}
W.ar.prototype={$iar:1}
W.bT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.ar]},
$au:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$in:1,
$an:function(){return[W.ar]},
$ibT:1}
W.fl.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fv.prototype={
gl:function(a){return a.length}}
W.bV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aF.prototype={$iaF:1,
gdd:function(a){return a.data}}
W.bW.prototype={$ibW:1}
W.bu.prototype={$ibu:1}
W.fM.prototype={
h:function(a){return String(a)}}
W.h6.prototype={
gl:function(a){return a.length}}
W.c1.prototype={$ic1:1}
W.h7.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.H(a,new W.h8(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.h8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h9.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.H(a,new W.ha(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.ha.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aI.prototype={$iaI:1}
W.hb.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.au.prototype={$iau:1}
W.a1.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lr("No elements"))
if(t>1)throw H.d(P.lr("More than one element"))
return u.firstChild},
ao:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cW(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$au:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
i0:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i4:function(a,b){var u,t
try{u=a.parentNode
J.mu(u,b,a)}catch(t){H.ae(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.e7(a):u},
fG:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aL.prototype={$iaL:1,
gl:function(a){return a.length}}
W.hr.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aL]},
$au:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$in:1,
$an:function(){return[W.aL]}}
W.hC.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.H(a,new W.hD(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.hR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$in:1,
$an:function(){return[W.aN]}}
W.aO.prototype={$iaO:1}
W.hS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]}}
W.aP.prototype={$iaP:1,
gl:function(a){return a.length}}
W.hW.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.c([],[P.k])
this.H(a,new W.hX(u))
return u},
gl:function(a){return a.length},
$iR:1,
$aR:function(){return[P.k,P.k]}}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.dr.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.mL("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).ao(0,new W.a1(u))
return t}}
W.i_.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaG(u)
s.toString
u=new W.a1(s)
r=u.gaG(u)
t.toString
r.toString
new W.a1(t).ao(0,new W.a1(r))
return t}}
W.i0.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaG(u)
t.toString
s.toString
new W.a1(t).ao(0,new W.a1(s))
return t}}
W.cd.prototype={$icd:1}
W.aQ.prototype={$iaQ:1}
W.aw.prototype={$iaw:1}
W.i3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aw]},
$au:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$in:1,
$an:function(){return[W.aw]}}
W.i4.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$in:1,
$an:function(){return[W.aQ]}}
W.ia.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.by.prototype={$iby:1}
W.ie.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aR]},
$au:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$in:1,
$an:function(){return[W.aR]}}
W.ig.prototype={
gl:function(a){return a.length}}
W.bf.prototype={}
W.iD.prototype={
h:function(a){return String(a)}}
W.iV.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
ghl:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghk:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibh:1}
W.cm.prototype={
fI:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
eD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.G]},
$au:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$in:1,
$an:function(){return[W.G]}}
W.dM.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iac)return!1
return a.left===u.gbq(b)&&a.top===u.gbv(b)&&a.width===u.gaF(b)&&a.height===u.gaA(b)},
gI:function(a){return W.lI(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaA:function(a){return a.height},
gaF:function(a){return a.width}}
W.j8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.e3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.E]},
$au:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jm.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.aP]},
$au:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$in:1,
$an:function(){return[W.aP]}}
W.jq.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iA:1,
$aA:function(){return[W.av]},
$au:function(){return[W.av]},
$ii:1,
$ai:function(){return[W.av]},
$in:1,
$an:function(){return[W.av]}}
W.j1.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.k,P.k]}}
W.j5.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.j6.prototype={}
W.j7.prototype={
$1:function(a){return this.a.$1(a)}}
W.cn.prototype={
ei:function(a){var u
if($.co.ghH($.co)){for(u=0;u<262;++u)$.co.m(0,C.T[u],W.oC())
for(u=0;u<12;++u)$.co.m(0,C.p[u],W.oD())}},
aO:function(a){return $.mq().U(0,W.bR(a))},
ap:function(a,b,c){var u=$.co.i(0,H.e(W.bR(a))+"::"+b)
if(u==null)u=$.co.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaK:1}
W.J.prototype={
gV:function(a){return new W.cW(a,this.gl(a))}}
W.dd.prototype={
aO:function(a){return C.b.d6(this.a,new W.hj(a))},
ap:function(a,b,c){return C.b.d6(this.a,new W.hi(a,b,c))},
$iaK:1}
W.hj.prototype={
$1:function(a){return a.aO(this.a)}}
W.hi.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.eb.prototype={
em:function(a,b,c,d){var u,t,s
this.a.ao(0,c)
u=b.bx(0,new W.jj())
t=b.bx(0,new W.jk())
this.b.ao(0,u)
s=this.c
s.ao(0,C.w)
s.ao(0,t)},
aO:function(a){return this.a.U(0,W.bR(a))},
ap:function(a,b,c){var u=this,t=W.bR(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.h4(c)
else if(s.U(0,"*::"+b))return u.d.h4(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaK:1}
W.jj.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.jk.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.js.prototype={
ap:function(a,b,c){if(this.ea(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jt.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jr.prototype={
aO:function(a){var u=J.P(a)
if(!!u.$ica)return!1
u=!!u.$ij
if(u&&W.bR(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aO(a)},
$iaK:1}
W.cW.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cH(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.aK.prototype={}
W.jh.prototype={}
W.eu.prototype={
cz:function(a){new W.jD(this).$2(a,null)},
b_:function(a,b){if(b==null)J.l3(a)
else b.removeChild(a)},
fN:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.my(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ae(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ae(r)}try{s=W.bR(a)
this.fM(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.al)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aO(a)){p.b_(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.b_(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.cE(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ap(a,J.mB(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icd)p.cz(a.content)}}
W.jD.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fN(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
P.jn.prototype={
dr:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cu:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$ia9)return new Date(a.a)
if(!!u.$ind)throw H.d(P.iu("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibl)return a
if(!!u.$ibT)return a
if(!!u.$iaF)return a
if(!!u.$ic3||!!u.$ib9||!!u.$ic1)return a
if(!!u.$iR){t=p.dr(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.jp(o,p))
return o.a}if(!!u.$in){t=p.dr(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hh(a,t)}throw H.d(P.iu("structured clone of other type"))},
hh:function(a,b){var u,t=J.cB(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cu(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jp.prototype={
$2:function(a,b){this.a.a[a]=this.b.cu(b)},
$S:3}
P.er.prototype={$iaF:1,
gdd:function(a){return this.a}}
P.jO.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jo.prototype={}
P.fm.prototype={
gbg:function(){var u=this.b,t=H.kS(u,"u",0)
return new H.fR(new H.cl(u,new P.fn(),[t]),new P.fo(),[t,W.T])},
m:function(a,b,c){var u=this.gbg()
J.mz(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbg().a)},
i:function(a,b){var u=this.gbg()
return u.b.$1(J.eI(u.a,b))},
gV:function(a){var u=P.lg(this.gbg(),!1,W.T)
return new J.a8(u,u.length)},
$au:function(){return[W.T]},
$ai:function(){return[W.T]},
$an:function(){return[W.T]}}
P.fn.prototype={
$1:function(a){return!!J.P(a).$iT}}
P.fo.prototype={
$1:function(a){return H.t(a,"$iT")}}
P.jd.prototype={
gcq:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.v(t)
return u+t},
gda:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iac){t=q.a
if(t==u.gbq(b)){s=q.b
if(s==u.gbv(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcq(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gda(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cI(t),r=u.b,q=J.cI(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nB(P.ja(P.ja(P.ja(P.ja(0,s),q),p),t))}}
P.ac.prototype={
gbq:function(a){return this.a},
gbv:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fF.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$au:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$in:1,
$an:function(){return[P.b7]}}
P.bb.prototype={$ibb:1}
P.hm.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$au:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$in:1,
$an:function(){return[P.bb]}}
P.hu.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$au:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gc1:function(a){return new P.fm(a,new W.a1(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aK])
p.push(W.lH(null))
p.push(W.lJ())
p.push(new W.jr())
c=new W.eu(new W.dd(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hi(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.be.prototype={$ibe:1}
P.ih.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$au:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$in:1,
$an:function(){return[P.be]}}
P.dW.prototype={}
P.dX.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.bz.prototype={$ii:1,
$ai:function(){return[P.x]},
$in:1,
$an:function(){return[P.x]}}
P.eN.prototype={
gl:function(a){return a.length}}
P.eO.prototype={
i:function(a,b){return P.aU(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aU(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.H(a,new P.eP(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.y("Not supported"))},
$iR:1,
$aR:function(){return[P.k,null]}}
P.eP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eQ.prototype={
gl:function(a){return a.length}}
P.bk.prototype={}
P.hn.prototype={
gl:function(a){return a.length}}
P.dK.prototype={}
P.dj.prototype={
i9:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaF)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.os(g))
return}if(!!t.$ibW)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cJ("Incorrect number or type of arguments"))}}
P.hU.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$au:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$in:1,
$an:function(){return[[P.R,,,]]}}
P.ee.prototype={}
P.ef.prototype={}
T.aA.prototype={
aB:function(a,b){return!0},
h:function(a){return"all"}}
T.cX.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aB(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b8.prototype={}
T.a6.prototype={
aB:function(a,b){return!this.e6(0,b)},
h:function(a){return"!["+this.cC(0)+"]"}}
T.hx.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bw(this.a),t=H.bw(this.b)
return u+".."+t}}
T.hG.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.d(P.o("May not create a Set with zero characters."))
u=new H.N([P.x,P.az])
for(t=new H.bZ(a,a.gl(a));t.C();)u.m(0,t.d,!0)
this.a=u},
aB:function(a,b){return this.a.bm(0,b)},
h:function(a){var u=this.a
return P.cc(u.ga3(u),0,null)}}
R.dp.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dz(this.a.j(0,b))
r.a=H.c([],[T.b8])
r.c=!1
this.c.push(r)
return r},
hx:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
h:function(a){return this.b}}
R.dw.prototype={
h:function(a){var u=H.kY(this.b,"\n","\\n"),t=H.kY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dx.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.ib.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dp(this,b)
u.c=H.c([],[R.dz])
this.a.m(0,b,u)}return u},
O:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dx(a)
u=P.k
t.c=new H.N([u,u])
this.b.m(0,a,t)}return t},
dW:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dw]),k=this.c,j=[P.x],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.E(a,s)
q=k.hx(r)
if(q==null){if(t==null){i.push(r)
p=P.cc(i,0,m)
throw H.d(P.o("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.cc(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dw(n==null?o.b:n,p,s)}++s}}}}
R.dz.prototype={
h:function(a){return this.b.b+": "+this.cC(0)}}
O.b1.prototype={
bB:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cA:function(a,b,c){this.b=b
this.c=a},
bc:function(a,b){return this.cA(a,null,b)},
fn:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eh:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a8(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kS(s,"b1",0)]
if(s.fn(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.eh(t,H.c([b],r))}},
$ii:1}
O.c0.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.H():u},
aH:function(){var u=this.b
if(u!=null)u.F(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaq(u)
else return V.d8()},
dO:function(a){var u=this.a
if(a==null)u.push(V.d8())
else u.push(a)
this.aH()},
cm:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}}}
E.eT.prototype={}
E.b3.prototype={
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().D(0,s.gdJ())
u=s.c
if(u!=null)u.gA().n(0,s.gdJ())
t=new D.C("shape",r,s.c)
t.b=!0
s.aC(t)}},
sb7:function(a){var u,t,s=this
if(!J.z(s.r,a)){u=s.r
if(u!=null)u.gA().D(0,s.gdH())
if(a!=null)a.gA().n(0,s.gdH())
s.r=a
t=new D.C("mover",u,a)
t.b=!0
s.aC(t)}},
as:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aW(0,b,s):null
if(!J.z(q,s.x)){u=s.x
s.x=q
t=new D.C("matrix",u,q)
t.b=!0
s.aC(t)}for(r=s.y.a,r=new J.a8(r,r.length);r.C();)r.d.as(0,b)},
aT:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.q(0,s.ga1(s)))
s.aH()
a.dP(t.f)
s=a.dy
u=(s&&C.b).gaq(s)
if(u!=null&&t.d!=null)u.i3(a,t)
for(s=t.y.a,s=new J.a8(s,s.length);s.C();)s.d.aT(a)
a.dN()
a.dx.cm()},
aC:function(a){var u=this.z
if(u!=null)u.F(a)},
T:function(){return this.aC(null)},
dK:function(a){this.e=null
this.aC(a)},
hR:function(){return this.dK(null)},
dI:function(a){this.aC(a)},
hQ:function(){return this.dI(null)},
dG:function(a){this.aC(a)},
hN:function(){return this.dG(null)},
hM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdF(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.T()},
hP:function(a,b){var u,t
for(u=b.gV(b),t=this.gdF();u.C();)u.gK(u).gA().D(0,t)
this.T()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hy.prototype={
ed:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c0()
t=[V.aH]
u.a=H.c([],t)
u.gA().n(0,new E.hz(s))
s.cy=u
u=new O.c0()
u.a=H.c([],t)
u.gA().n(0,new E.hA(s))
s.db=u
u=new O.c0()
u.a=H.c([],t)
u.gA().n(0,new E.hB(s))
s.dx=u
u=H.c([],[O.ds])
s.dy=u
u.push(null)
s.fr=new H.N([P.k,A.dk])},
gi_:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.q(0,u.ga1(u))
s=u}return s},
dP:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaq(u):a)},
dN:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hz.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hA.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hB.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.du.prototype={
cH:function(a){this.dS()},
cG:function(){return this.cH(null)},
ghC:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.lb(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a9(s,!1)
return u/r},
cY:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.v(r)
u=C.d.cb(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.cb(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lu(C.n,s.gi5())}},
dS:function(){if(!this.ch){this.ch=!0
var u=window
C.D.eD(u)
C.D.fI(u,W.lU(new E.i9(this),P.ad))}},
i2:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cY()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.lb(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aH()
r=s.db
C.b.sl(r.a,0)
r.aH()
r=s.dx
C.b.sl(r.a,0)
r.aH()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aT(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ae(q)
t=H.kT(q)
P.kX("Error: "+H.e(u))
P.kX("Stack: "+H.e(t))
throw H.d(u)}}}
E.i9.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.i2()}}}
Z.dI.prototype={}
Z.cL.prototype={
bY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.o('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iW.prototype={}
Z.cM.prototype={
aQ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bY(a)},
ie:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aT:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.br.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c9(this.c))+"'")+"]"}}
Z.aT.prototype={
gcB:function(a){var u=this.a,t=(u&$.aY().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.aZ().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cF().a)!==0)t+=3
if((u&$.cG().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
h5:function(a){var u,t=$.aY(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0)if(u===a)return t
return $.mo()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aT))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aY().a)!==0)u.push("Pos")
if((t&$.aX().a)!==0)u.push("Norm")
if((t&$.aW().a)!==0)u.push("Binm")
if((t&$.aZ().a)!==0)u.push("Txt2D")
if((t&$.bj().a)!==0)u.push("TxtCube")
if((t&$.cF().a)!==0)u.push("Clr3")
if((t&$.cG().a)!==0)u.push("Clr4")
if((t&$.bM().a)!==0)u.push("Weight")
if((t&$.aV().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eW.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.H(P.lg(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fi(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.X]}])
C.b.H(u,new D.fj(q))}return!0},
hr:function(){return this.F(null)},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.fi.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fj.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.C.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cN.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cN))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.d1.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d1))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fE.prototype={
hW:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hS:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.d5.prototype={}
X.fN.prototype={
aY:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=o.v(0,new V.U(n*m,u*t))
t=q.a.gaP()
r=new X.aJ(a,V.aM(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
cl:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e1()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aY(a,b))
return!0},
hX:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.c2(new V.F(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d5(c,r.a.gaP(),b)
s.b=!0
t.F(s)
r.y=new P.a9(u,!1)
r.x=V.aM()}}
X.ai.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ai))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aJ.prototype={}
X.hc.prototype={
bI:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaP(),r=new X.aJ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cl:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bI(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e1()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bI(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bI(a,b,!1))
return!0},
hY:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.c2(new V.F(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gde:function(){var u=this.b
return u==null?this.b=D.H():u},
gct:function(){var u=this.c
return u==null?this.c=D.H():u},
gdE:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.c2.prototype={}
X.ht.prototype={}
X.dy.prototype={}
X.id.prototype={
aY:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.aM(),r=u.a.gaP(),q=new X.dy(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hV:function(a){var u=this.b
if(u==null)return!1
u.F(this.aY(a,!0))
return!0},
hT:function(a){var u=this.c
if(u==null)return!1
u.F(this.aY(a,!0))
return!0},
hU:function(a){var u=this.d
if(u==null)return!1
u.F(this.aY(a,!1))
return!0}}
X.dE.prototype={
gaP:function(){var u=this.a,t=C.i.gdc(u).c
t.toString
u=C.i.gdc(u).d
u.toString
return V.lp(0,0,t,u)},
cP:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d1(u,new X.ai(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bX:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.U(s-q,r-u)},
aZ:function(a){return new V.F(a.movementX,a.movementY)},
bT:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.U])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.d.ai(r.pageX)
C.d.ai(r.pageY)
p=o.left
C.d.ai(r.pageX)
n.push(new V.U(q-p,C.d.ai(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cN(u,new X.ai(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f6:function(a){this.f=!0},
eV:function(a){this.f=!1},
f0:function(a){if(this.f&&this.bK(a))a.preventDefault()},
fa:function(a){var u
if(!this.f)return
u=this.cP(a)
this.b.hW(u)},
f8:function(a){var u
if(!this.f)return
u=this.cP(a)
this.b.hS(u)},
fe:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aM(a)
if(r.x){u=r.av(a)
t=r.aZ(a)
if(r.d.cl(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.av(a)
s=r.ax(a)
if(r.c.cl(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
r.aM(a)
u=r.av(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b9(u,s))a.preventDefault()},
f4:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aM(a)
u=r.av(a)
if(r.x){t=r.aZ(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b9(u,s))a.preventDefault()}},
fg:function(a){var u,t,s,r=this
r.aM(a)
u=r.av(a)
if(r.x){t=r.aZ(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b8(u,s))a.preventDefault()},
f2:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aM(a)
u=r.av(a)
if(r.x){t=r.aZ(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b8(u,s))a.preventDefault()}},
fk:function(a){var u,t,s=this
s.aM(a)
u=new V.F((a&&C.C).ghk(a),C.C.ghl(a)).p(0,180)
if(s.x){if(s.d.hX(u))a.preventDefault()
return}if(s.r)return
t=s.ax(a)
if(s.c.hY(u,t))a.preventDefault()},
fm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.fc(u,t,r)}},
fC:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bX(a)
u=t.bT(a)
if(t.e.hV(u))a.preventDefault()},
fw:function(a){var u
this.bX(a)
u=this.bT(a)
if(this.e.hT(u))a.preventDefault()},
fA:function(a){var u
this.bX(a)
u=this.bT(a)
if(this.e.hU(u))a.preventDefault()}}
D.bo.prototype={
at:function(a){var u=this.r
if(u!=null)u.F(a)},
ek:function(){return this.at(null)},
$iaa:1}
D.aa.prototype={}
D.d2.prototype={
at:function(a){var u=this.x
if(u!=null)u.F(a)},
cW:function(a){var u=this.y
if(u!=null)u.F(a)},
fb:function(){return this.cW(null)},
fp:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ey(s))return!1}return!0},
eP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcV(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.bo)this.e.push(q)
p=q.r
if(p==null){p=new D.bq()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bs()
u.b=!0
this.at(u)},
fu:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcV();u.C();){s=u.gK(u)
C.b.D(this.e,s)
s.gA().D(0,t)}u=new D.bt()
u.b=!0
this.at(u)},
ey:function(a){var u=C.b.U(this.e,a)
return u},
$ai:function(){return[D.aa]},
$ab1:function(){return[D.aa]}}
D.hs.prototype={$iaa:1}
D.hT.prototype={$iaa:1}
V.a4.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ag.prototype={
cr:function(a){var u=this
return H.c([u.a,u.b,u.c,u.d],[P.I])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fh.prototype={}
V.d7.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d7))return!1
u=b.a
t=$.B().a
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
h:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bK(H.c([q.a,q.d,q.r],p),3,0),n=V.bK(H.c([q.b,q.e,q.x],p),3,0),m=V.bK(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.aH.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
dA:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.d8()
u=1/b1
t=-n
s=-a0
return V.at((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.at(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bw:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.w(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.B().a
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
h:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bK(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bK(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bK(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bK(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.G("")}}
V.U.prototype={
v:function(a,b){return new V.U(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.B().a)return V.aM()
return new V.U(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.O.prototype={
v:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.B().a)return V.kC()
return new V.O(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bc.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.di.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.F.prototype={
b5:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.F(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.lB
return u==null?$.lB=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.F(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.w.prototype={
b5:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cf:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.w(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.w(u*t-s*r,s*q-p*t,p*r-u*q)},
v:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.w(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.w(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.B().a)return V.cj()
return new V.w(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aS.prototype={
b5:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.B().a){u=$.lG
return u==null?$.lG=new V.aS(0,0,0,0):u}return new V.aS(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aS))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.eY.prototype={
bD:function(a){var u=V.oV(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.H():u},
R:function(a){var u=this.y
if(u!=null)u.F(a)},
scv:function(a,b){},
scg:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
scj:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sZ:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.R(u)}},
sci:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.R(t)}},
sc4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.R(u)}},
as:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cP.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.H():u},
aW:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
return J.z(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bU.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.H():u},
R:function(a){var u=this.e
if(u!=null)u.F(a)},
a5:function(){return this.R(null)},
eN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaL(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bs()
u.b=!0
this.R(u)},
fs:function(a,b){var u,t
for(u=b.gV(b),t=this.gaL();u.C();)u.gK(u).gA().D(0,t)
u=new D.bt()
u.b=!0
this.R(u)},
aW:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a8(r,r.length),u=null;r.C();){q=r.d
if(q!=null){t=q.aW(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.d8():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.z(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.ab]},
$ab1:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.dF.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.H():u},
R:function(a){var u=this.cy
if(u!=null)u.F(a)},
a5:function(){return this.R(null)},
b0:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gde().n(0,u.gbL())
u.a.c.gdE().n(0,u.gbN())
u.a.c.gct().n(0,u.gbP())
return!0},
bM:function(a){var u=this
if(!J.z(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bO:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaJ")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.F(t.a,t.b).q(0,2).p(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.F(s.a,s.b).q(0,2).p(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sZ(0,-q*p+o)
n.b.sW(0)
t=t.L(0,a.z)
n.Q=new V.F(t.a,t.b).q(0,2).p(0,u.ga9())}n.a5()},
bQ:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sW(t*10*s)
r.a5()}},
aW:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.as(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.at(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iab:1}
U.dG.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.H():u},
R:function(a){var u=this.fx
if(u!=null)u.F(a)},
a5:function(){return this.R(null)},
b0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gde().n(0,s.gbL())
s.a.c.gdE().n(0,s.gbN())
s.a.c.gct().n(0,s.gbP())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.n(0,s.geF())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.geH())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.n(0,s.gfY())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.gfW())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.n(0,s.gfU())
return!0},
am:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.F(u,t)},
bM:function(a){var u=this
H.t(a,"$iaJ")
if(!J.z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bO:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaJ")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.am(new V.F(t.a,t.b).q(0,2).p(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.am(new V.F(s.a,s.b).q(0,2).p(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sZ(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.am(new V.F(t.a,t.b).q(0,2).p(0,u.ga9()))}n.a5()},
bQ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
eG:function(a){var u=this
if(H.t(a,"$id5").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eI:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$iaJ")
if(!J.z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.am(new V.F(s.a,s.b).q(0,2).p(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sZ(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.am(new V.F(t.a,t.b).q(0,2).p(0,u.ga9()))
n.a5()},
fZ:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fX:function(a){var u,t,s,r,q,p,o,n=this
H.t(a,"$idy")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.F(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.am(new V.F(t.a,t.b).q(0,2).p(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.am(new V.F(s.a,s.b).q(0,2).p(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sZ(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.L(0,a.z)
n.dx=n.am(new V.F(t.a,t.b).q(0,2).p(0,u.ga9()))}n.a5()},
fV:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
aW:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.as(0,u)
r.b.as(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.at(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.at(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iab:1}
U.dH.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.H():u},
R:function(a){var u=this.r
if(u!=null)u.F(a)},
b0:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.geK()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).n(0,t)
return!0},
eL:function(a){var u,t,s,r,q=this
if(!J.z(q.b,q.a.b.c))return
H.t(a,"$ic2")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.C("zoom",u,r)
u.b=!0
q.R(u)}},
aW:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.at(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iab:1}
M.cU.prototype={
au:function(a){var u=this.y
if(u!=null)u.F(a)},
el:function(){return this.au(null)},
eX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gal(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bs()
u.b=!0
this.au(u)},
eZ:function(a,b){var u,t
for(u=b.gV(b),t=this.gal();u.C();)u.gK(u).gA().D(0,t)
u=new D.bt()
u.b=!0
this.au(u)},
sdU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().D(0,t.gal())
u=t.d
t.d=a
if(a!=null)a.gA().n(0,t.gal())
s=new D.C("technique",u,t.d)
s.b=!0
t.au(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.H():u},
aT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dP(f.d)
u=f.c
u.toString
t=a.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.ai(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ai(p*r)
p=C.d.ai(q.c*s)
a.c=p
q=C.d.ai(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.b
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.at(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dO(i)
t=$.lk
if(t==null){t=V.kC()
q=V.kH()
p=$.lC
t=V.lh(t,q,p==null?$.lC=new V.w(0,0,-1):p)
$.lk=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.q(0,h)}a.db.dO(h)
u=f.d
if(u!=null)u.as(0,a)
for(u=f.e.a,u=new J.a8(u,u.length);u.C();)u.d.as(0,a)
for(u=f.e.a,u=new J.a8(u,u.length);u.C();)u.d.aT(a)
f.b.toString
a.cy.cm()
a.db.cm()
f.c.toString
a.dN()}}
A.cK.prototype={}
A.eM.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hs:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a5.prototype={
gaj:function(a){var u=this.b?2:0
return 0|u|0},
h:function(a){var u=this.b?2:0
return""+(0|u|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a5))return!1
u=this.b===b.b&&!0
return u}}
A.fU.prototype={
ec:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.S("")
t=c3.dy
if(t){u.a=c2
s=c2}else s=""
r=c3.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.o9(c3,u)
A.ob(c3,u)
A.oa(c3,u)
A.od(c3,u)
A.oe(c3,u)
A.oc(c3,u)
A.of(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.rx
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(c3.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.o8(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cQ(n,35633)
b8.f=b8.cQ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.r(P.o("Failed to link shader: "+H.e(l)))}b8.fQ()
b8.fS()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.Y(0,"invViewMat"),"$iaj")
if(t)b8.dy=H.t(b8.y.Y(0,"objMat"),"$iaj")
if(r)b8.fr=H.t(b8.y.Y(0,"viewObjMat"),"$iaj")
b8.fy=H.t(b8.y.Y(0,"projViewObjMat"),"$iaj")
if(c3.ry)b8.k1=H.t(b8.y.Y(0,"txt2DMat"),"$icg")
if(c3.x1)b8.k2=H.t(b8.y.Y(0,"txtCubeMat"),"$iaj")
if(c3.x2)b8.k3=H.t(b8.y.Y(0,"colorMat"),"$iaj")
b8.r1=H.c([],[A.aj])
t=c3.y2
if(t>0){b8.k4=b8.y.Y(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.r(P.o(c0+q+c1))
s.push(H.t(j,"$iaj"))}}if(c3.a.b)b8.rx=H.t(b8.y.Y(0,"emissionTxt"),"$ia_")
if(c3.b.b)b8.x2=H.t(b8.y.Y(0,"ambientTxt"),"$ia_")
if(c3.c.b)b8.az=H.t(b8.y.Y(0,"diffuseTxt"),"$ia_")
if(c3.d.b)b8.dg=H.t(b8.y.Y(0,"invDiffuseTxt"),"$ia_")
t=c3.e
s=t.b||!1
if(s){b8.di=H.t(b8.y.Y(0,"shininess"),"$iZ")
if(t.b)b8.dh=H.t(b8.y.Y(0,"specularTxt"),"$ia_")}if(c3.f.b)b8.dj=H.t(b8.y.Y(0,"bumpTxt"),"$ia_")
if(c3.cy){b8.dk=H.t(b8.y.Y(0,"envSampler"),"$ibA")
if(c3.r.b)b8.dl=H.t(b8.y.Y(0,"reflectTxt"),"$ia_")
t=c3.x
s=t.b||!1
if(s){b8.dm=H.t(b8.y.Y(0,"refraction"),"$iZ")
if(t.b)b8.dn=H.t(b8.y.Y(0,"refractTxt"),"$ia_")}}if(c3.y.b)b8.dq=H.t(b8.y.Y(0,"alphaTxt"),"$ia_")
t=P.x
s=[t,A.dB]
b8.c5=new H.N(s)
b8.c6=new H.N([t,[P.n,A.cf]])
b8.c7=new H.N(s)
b8.c8=new H.N([t,[P.n,A.ch]])
b8.c9=new H.N(s)
b8.ca=new H.N([t,[P.n,A.ci]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.af()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.r(P.o(c0+d+c1))
H.t(j,"$iV")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.r(P.o(c0+d+c1))
H.t(c,"$iV")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.r(P.o(c0+d+c1))
H.t(b,"$iV")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.r(P.o(c0+d+c1))
H.t(j,"$iV")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.r(P.o(c0+d+c1))
H.t(c,"$iV")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.r(P.o(c0+o+c1))
H.t(b,"$ia_")
a2=b}else a2=b9
e.push(new A.cf(a1,a0,a,j,c,a2))}b8.c6.m(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.o(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.ch],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.r(P.o(c0+o+c1))
H.t(j,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.r(P.o(c0+o+c1))
H.t(c,"$iV")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.r(P.o(c0+o+c1))
H.t(b,"$iV")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.r(P.o(c0+o+c1))
H.t(a3,"$icg")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.o(c0+o+c1))
H.t(a3,"$ibA")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.o(c0+o+c1))
H.t(a3,"$ibA")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.r(P.o(c0+o+c1))
H.t(a5,"$ice")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.r(P.o(c0+o+c1))
H.t(a3,"$iZ")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.r(P.o(c0+o+c1))
H.t(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.r(P.o(c0+o+c1))
H.t(a8,"$iZ")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.ch(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c8.m(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.o(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.ci],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.r(P.o(c0+o+c1))
H.t(j,"$iV")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.r(P.o(c0+o+c1))
H.t(c,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.r(P.o(c0+o+c1))
H.t(b,"$iV")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.r(P.o(c0+o+c1))
H.t(a3,"$iV")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.r(P.o(c0+o+c1))
H.t(a5,"$iV")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.r(P.o(c0+o+c1))
H.t(a8,"$iV")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.r(P.o(c0+o+c1))
H.t(b2,"$iZ")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.r(P.o(c0+o+c1))
H.t(b3,"$iZ")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.i(0,d)
if(a5==null)H.r(P.o(c0+d+c1))
H.t(a5,"$ice")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.r(P.o(c0+d+c1))
H.t(a5,"$iZ")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.r(P.o(c0+d+c1))
H.t(a8,"$iZ")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.r(P.o(c0+d+c1))
H.t(a5,"$iZ")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.r(P.o(c0+d+c1))
H.t(a8,"$iZ")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.r(P.o(c0+d+c1))
H.t(b2,"$iZ")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.r(P.o(c0+d+c1))
H.t(a5,"$ia_")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.r(P.o(c0+o+c1))
H.t(a5,"$ia_")
a6=a5}else a6=b9
e.push(new A.ci(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ca.m(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.o(c0+o+c1))
q.m(0,g,j)}}},
ag:function(a,b){if(b!=null&&b.d)a.e3(b)},
fP:function(a,b){}}
A.cR.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dg.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dm.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fX.prototype={
h:function(a){return this.az}}
A.cf.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.dk.prototype={
ef:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fQ:function(){var u,t,s,r=this,q=H.c([],[A.cK]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cK(p,t.name,s))}r.x=new A.eM(q)},
fS:function(){var u,t,s,r=this,q=H.c([],[A.dA]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hj(t.type,t.size,t.name,s))}r.y=new A.ir(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.dB(u,b,c)
else return A.kE(u,this.r,b,a,c)},
eA:function(a,b,c){var u=this.a
if(a===1)return new A.a_(u,b,c)
else return A.kE(u,this.r,b,a,c)},
eB:function(a,b,c){var u=this.a
if(a===1)return new A.bA(u,b,c)
else return A.kE(u,this.r,b,a,c)},
bj:function(a,b){return new P.dR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hj:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.Z(u.a,c,d)
case 35664:return new A.im(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.ce(u.a,c,d)
case 35667:return new A.io(u.a,c,d)
case 35668:return new A.ip(u.a,c,d)
case 35669:return new A.iq(u.a,c,d)
case 35674:return new A.is(u.a,c,d)
case 35675:return new A.cg(u.a,c,d)
case 35676:return new A.aj(u.a,c,d)
case 35678:return u.eA(b,c,d)
case 35680:return u.eB(b,c,d)
case 35670:throw H.d(u.bj("BOOL",c))
case 35671:throw H.d(u.bj("BOOL_VEC2",c))
case 35672:throw H.d(u.bj("BOOL_VEC3",c))
case 35673:throw H.d(u.bj("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dA.prototype={}
A.ir.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
Y:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dB.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.io.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ip.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iq.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.il.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Z.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.im.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.V.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ce.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.is.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cg.prototype={
ak:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aj.prototype={
ak:function(a){var u=new Float32Array(H.bF(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a_.prototype={
e3:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bA.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jF.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cf(s.b,b).cf(s.d.cf(s.c,b),c)
a.sZ(0,new V.O(r.a,r.b,r.c))
a.sbu(r.p(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sd7(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jP.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jR.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sZ(0,new V.O(s,u,q))
u=new V.w(s,u,q)
a.sbu(u.p(0,Math.sqrt(u.B(u))))
a.sd7(new V.bc(1-c,2+c,-1,-1))}}
F.jS.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jT.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k1.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.w(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.B(r)))
a.sZ(0,new V.O(s.a,s.b,s.c))}}
F.ke.prototype={
$2:function(a,b){return 0}}
F.kf.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.w(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.B(t))).q(0,this.b+s)
a.sZ(0,new V.O(s.a,s.b,s.c))}}
F.kj.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.k0.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.O(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jQ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l0(n.$1(o),m)
m=J.l0(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.w(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.B(m)))
n=$.lD
if(n==null){n=new V.w(1,0,0)
$.lD=n
t=n}else t=n
n=u.ay(!J.z(u,t)?V.lF():t)
s=n.p(0,Math.sqrt(n.B(n)))
n=s.ay(u)
t=n.p(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,l.v(0,new V.O(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aD.prototype={
b3:function(){var u=this
if(!u.gb4()){C.b.D(u.a.a.d.b,u)
u.a.a.T()}u.bU()
u.bV()
u.fF()},
bh:function(a){this.a=a
a.d.b.push(this)},
bi:function(a){this.b=a
a.d.c.push(this)},
cZ:function(a){this.c=a
a.d.d.push(this)},
bU:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
fF:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cj()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dB())return
return s.p(0,Math.sqrt(s.B(s)))},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.w(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.B(r)))
r=t.L(0,q)
r=new V.w(r.a,r.b,r.c)
r=s.ay(r.p(0,Math.sqrt(r.B(r))))
return r.p(0,Math.sqrt(r.B(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.eu()
if(u==null){u=t.ew()
if(u==null)return!1}t.d=u
t.a.a.T()
return!0},
es:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cj()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dB())return
return s.p(0,Math.sqrt(s.B(s)))},
ev:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.L(0,g)
l=new V.w(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.L(0,g).q(0,p).v(0,g).L(0,j)
l=new V.w(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.B(l)))
l=o.ay(q)
l=l.p(0,Math.sqrt(l.B(l))).ay(o)
q=l.p(0,Math.sqrt(l.B(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.es()
if(u==null){u=t.ev()
if(u==null)return!1}t.e=u
t.a.a.T()
return!0},
aJ:function(a,b){var u=b.a
if(u==null)throw H.d(P.o("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.o("May not replace a face's vertex with a vertex attached to a different shape."))},
ghd:function(a){var u=this
if(J.z(u.a,u.b))return!0
if(J.z(u.b,u.c))return!0
if(J.z(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t,s=this
if(s.gb4())return a+"disposed"
u=a+C.a.ad(J.a3(s.a.e),0)+", "+C.a.ad(J.a3(s.b.e),0)+", "+C.a.ad(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.fk.prototype={}
F.hQ.prototype={
aR:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bY.prototype={
b3:function(){var u=this
if(!u.gb4()){C.b.D(u.a.a.c.b,u)
u.a.a.T()}u.bU()
u.bV()},
bh:function(a){this.a=a
a.c.b.push(this)},
bi:function(a){this.b=a
a.c.c.push(this)},
bU:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
bV:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
aJ:function(a,b){var u=b.a
if(u==null)throw H.d(P.o("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.o("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){if(this.gb4())return a+"disposed"
return a+C.a.ad(J.a3(this.a.e),0)+", "+C.a.ad(J.a3(this.b.e),0)},
N:function(){return this.G("")}}
F.fG.prototype={}
F.ik.prototype={
aR:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.c6.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ad(J.a3(u.e),0)},
N:function(){return this.G("")}}
F.hH.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.H():u},
aS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hg())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c6()
if(n.a==null)H.r(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mT(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bS(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
ah:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ah()||!1
if(!t.a.ah())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
hw:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
if(b.aR(0,a,s))return s}return},
fH:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.r(P.o("May not replace a face's vertex when the point has been disposed."))
if(J.z(q,s)){r.aJ(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.z(r.b,s)){r.aJ(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.z(r.c,s)){r.aJ(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null)H.r(P.o("May not replace a line's vertex when the point has been disposed."))
if(J.z(q,s)){r.aJ(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.z(r.b,s)){r.aJ(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.r(P.o("May not replace a point's vertex when the point has been disposed."))
if(J.z(q,s)){if(a.a==null)H.r(P.o("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}this.a.D(0,s)}},
dD:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.c(n.slice(0),[H.cE(n,0)])
for(n=[F.bg];u.length!==0;){t=C.b.ghy(u)
C.b.dQ(u,0)
if(t!=null){s=H.c([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aR(0,t,q)){s.push(q)
C.b.dQ(u,r)}}if(s.length>1){p=b.aS(s)
if(p!=null){o.fH(p,s)
u.push(p)}}}}o.a.w()
o.c.bt()
o.d.bt()
o.b.i1()
o.c.cp(new F.ik())
o.d.cp(new F.hQ())
n=o.e
if(n!=null)n.ar(0)},
bl:function(){this.dD(new F.ck(),new F.hk())},
hb:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aY()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aX().a)!==0)++s
if((t&$.aW().a)!==0)++s
if((t&$.aZ().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.cF().a)!==0)++s
if((t&$.cG().a)!==0)++s
if((t&$.bM().a)!==0)++s
if((t&$.aV().a)!==0)++s
r=a4.gcB(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cL])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h5(m)
k=l.gcB(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cL(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hJ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bF(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cM(new Z.dI(a1,d),o,a4)
c.b=H.c([],[Z.br])
if(a0.b.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.br(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.k(s,"\n")},
T:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hJ.prototype={
bk:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aD()
t=b.a
if(t==null)H.r(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.r(P.o("May not create a face with vertices attached to different shapes."))
u.bh(b)
u.bi(c)
u.cZ(d)
u.a.a.d.b.push(u)
u.a.a.T()
return u},
h1:function(a){var u,t,s,r,q,p=H.c([],[F.aD]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bS(u,r,q))}}return p},
h2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aD])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bS(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bS(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bS(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bS(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aR(0,p,n)){p.b3()
break}}}}},
bt:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghd(s)
if(t)s.b3()}},
ah:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bZ())s=!1
return s},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
N:function(){return this.G("")}}
F.hK.prototype={
gl:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aR(0,p,n)){p.b3()
break}}}}},
bt:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.z(s.a,s.b)
if(t)s.b3()}},
h:function(a){return this.N()},
G:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.k(s,"\n")},
N:function(){return this.G("")}}
F.hL.prototype={
gl:function(a){return this.b.length},
i1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
h:function(a){return this.N()},
G:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(a))
return C.b.k(r,"\n")},
N:function(){return this.G("")}}
F.bg.prototype={
c3:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bC(u.cx,r,o,t,s,q,p,a,n)},
hg:function(){return this.c3(null)},
sZ:function(a,b){var u
if(!J.z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.T()}},
sck:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.z(this.r,a)){this.r=a
u=this.a
if(u!=null)u.T()}},
sd9:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.z(this.x,a)){this.x=a
u=this.a
if(u!=null)u.T()}},
saV:function(a){var u
if(!J.z(this.y,a)){this.y=a
u=this.a
if(u!=null)u.T()}},
sbu:function(a){var u
if(!J.z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.T()}},
sb1:function(a,b){var u
if(!J.z(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.T()}},
sdZ:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.T()}},
sd7:function(a){var u
if(!J.z(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.T()}},
hJ:function(a){var u,t,s=this
if(a.t(0,$.aY())){u=s.f
t=[P.I]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aX())){u=s.r
t=[P.I]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aW())){u=s.x
t=[P.I]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=s.y
t=[P.I]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bj())){u=s.z
t=[P.I]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cF())){u=s.Q
t=[P.I]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cG())){u=s.Q
if(u==null)return H.c([1,1,1,1],[P.I])
else return u.cr(0)}else if(a.t(0,$.bM()))return H.c([s.ch],[P.I])
else if(a.t(0,$.aV())){u=s.cx
t=[P.I]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.I])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cj()
t.d.H(0,new F.iU(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.T()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cj()
t.d.H(0,new F.iT(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.T()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ad(J.a3(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.iU.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.iT.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.iK.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.T()
return!0},
h3:function(a,b,c,d,e,f){var u=F.bC(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.d(P.o("May not remove a vertex without first making it empty."))
b.a=null
C.b.D(this.c,b)
u.T()
return this.b=!0},
ah:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bZ()
return!0},
hc:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
h:function(a){return this.N()},
G:function(a){var u,t,s,r
this.w()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].G(a))
return C.b.k(u,"\n")},
N:function(){return this.G("")}}
F.iL.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.iM(u,b))
C.b.H(u.d,new F.iN(u,b))},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iM.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)}}
F.iN.prototype={
$1:function(a){var u=this.a
if(!J.z(a.a,u)&&!J.z(a.b,u))this.b.$1(a)}}
F.iP.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
F.iQ.prototype={}
F.ck.prototype={
aR:function(a,b,c){return J.z(b.f,c.f)}}
F.iR.prototype={}
F.iO.prototype={
aS:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.O(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.w(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.w(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.U(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.w(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.aS(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.aS(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.v(a)
i+=a;++j}a3=F.bC(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.p(0,n))
if(p==null)a3.sck(a4)
else a3.sck(p.p(0,Math.sqrt(p.B(p))))
if(q==null)a3.sd9(a4)
else a3.sd9(q.p(0,Math.sqrt(q.B(q))))
if(l<=0||s==null)a3.saV(a4)
else a3.saV(s.p(0,l))
if(k<=0||t==null)a3.sbu(a4)
else a3.sbu(t.p(0,k))
if(m<=0||r==null)a3.sb1(0,a4)
else{u=r.p(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sb1(0,new V.ag(a,a0,a1,u))}if(j<=0)a3.sdZ(0,0)
else a3.sdZ(0,i/j)
return a3}}
F.hk.prototype={
aS:function(a){var u,t,s,r=V.cj()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.w(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.B(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)a[t].sck(r)
return}}
F.iS.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].G(""))
return C.b.k(r,"\n")}}
O.d6.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.H():u},
a_:function(a){var u=this.fr
if(u!=null)u.F(a)},
bC:function(){return this.a_(null)},
cX:function(a){this.a=null
this.a_(a)},
fK:function(){return this.cX(null)},
eR:function(a,b){var u=new D.bs()
u.b=!0
this.a_(u)},
eT:function(a,b){var u=new D.bt()
u.b=!0
this.a_(u)},
cN:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.N([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=h.i(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.cR])
h.H(0,new O.h0(j,q))
C.b.bz(q,new O.h1())
p=new H.N([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){o=u[s]
r=o.gb2()
n=p.i(0,o.gb2())
p.m(0,r,n==null?1:n)}m=H.c([],[A.dg])
p.H(0,new O.h2(j,m))
C.b.bz(m,new O.h3())
l=new H.N([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){o=i[s]
t=o.gb2()
r=l.i(0,o.gb2())
l.m(0,t,r==null?1:r)}k=H.c([],[A.dm])
l.H(0,new O.h4(j,k))
C.b.bz(k,new O.h5())
i=C.c.a6(j.e.a.length+3,4)
j.dy.e
return A.n_(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
aa:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
as:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a8(u,u.length);u.C();){t=u.d
t.toString
s=$.iJ
if(s==null)s=$.iJ=new V.w(0,0,1)
t.a=s
r=$.iI
t.d=r==null?$.iI=new V.w(0,1,0):r
r=$.iH
t.e=r==null?$.iH=new V.w(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bw(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bw(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bw(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
i3:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cN()
u=b3.fr.i(0,b2.az)
if(u==null){u=A.mZ(b2,b3.a)
t=u.b
if(t.length===0)H.r(P.o("May not cache a shader with no name."))
if(b3.fr.bm(0,t))H.r(P.o('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.df
b2=b4.e
if(!(b2 instanceof Z.cM))b2=b4.e=null
if(b2==null||!b2.d.t(0,r)){b2=s.k3
if(b2)b4.d.ah()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.c_()
p.a.c_()
p=p.e
if(p!=null)p.ar(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.hc()
o=o.e
if(o!=null)o.ar(0)}m=b4.d.hb(new Z.iW(b3.a),r)
m.aQ($.aY()).e=b1.a.Q.c
if(b2)m.aQ($.aX()).e=b1.a.cx.c
if(q)m.aQ($.aW()).e=b1.a.ch.c
if(s.r1)m.aQ($.aZ()).e=b1.a.cy.c
if(p)m.aQ($.bj()).e=b1.a.db.c
if(s.rx)m.aQ($.aV()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.dt])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.hs()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga1(p)
b2=b2.dy
b2.toString
b2.ak(p.ae(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga1(p)
o=b3.dx
o=b3.cx=p.q(0,o.ga1(o))
p=o}b2=b2.fr
b2.toString
b2.ak(p.ae(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gi_()
o=b3.dx
o=b3.ch=p.q(0,o.ga1(o))
p=o}b2=b2.fy
b2.toString
b2.ak(p.ae(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ak(C.j.ae(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ak(C.j.ae(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ak(C.j.ae(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bF(p.ae(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}if(s.a.b){b1.aa(l,b1.f.d)
b2=b1.a
p=b1.f.d
b2.ag(b2.rx,p)}if(s.id){if(s.b.b){b1.aa(l,b1.r.d)
b2=b1.a
p=b1.r.d
b2.ag(b2.x2,p)}if(s.c.b){b1.aa(l,b1.x.d)
b2=b1.a
p=b1.x.d
b2.ag(b2.az,p)}if(s.d.b){b1.aa(l,b1.y.d)
b2=b1.a
p=b1.y.d
b2.ag(b2.dg,p)}b2=s.e
p=b2.b||!1
if(p){p=b1.a
o=b1.z.ch
p=p.di
p.a.uniform1f(p.d,o)}if(b2.b){b1.aa(l,b1.z.d)
b2=b1.a
p=b1.z.d
b2.ag(b2.dh,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.x
g=new H.N([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.m(0,0,d+1)
c=J.cH(b1.a.c6.i(0,0),d)
n=h.bw(e.a)
b=n.a
a=n.b
a0=n.c
a0=n.p(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.c5.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.x
a1=new H.N([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gb2()
d=a1.i(0,a2)
if(d==null)d=0
a1.m(0,a2,d+1)
c=J.cH(b1.a.c8.i(0,a2),d)
a3=h.q(0,e.ga1(e))
n=e.ga1(e)
b=$.c7
n=n.cs(b==null?$.c7=new V.O(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.c7
n=a3.cs(n==null?$.c7=new V.O(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gb1(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gaE()
n=a3.dA(0)
b=n.a
a=n.b
a0=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=c.d
a9.toString
i=new Float32Array(H.bF(new V.d7(b,a,a0,a4,a5,a6,a7,a8,n).ae(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gaE()
n=e.gaE()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaE()
b=n.gb6(n)
if(b){b=c.f
b.toString
a=n.gb6(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.ghD(n)
b.a.uniform1i(b.d,n)}}e.gaX()
n=e.ge4()
b=c.x
b.toString
a=n.gho(n)
a0=n.ghp(n)
a4=n.ghq()
n=n.ghn()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaX()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaX()
b=n.gb6(n)
if(b){b=c.r
b.toString
a=n.gb6(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.ghD(n)
b.a.uniform1i(b.d,n)}}if(e.ght()){n=e.gh6()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gh7()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gh8()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.c7.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.x
b0=new H.N([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
a2=e.gb2()
d=b0.i(0,a2)
if(d==null)d=0
b0.m(0,a2,d+1)
c=J.cH(b1.a.ca.i(0,a2),d)
n=e.ghZ(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gik(e).iC()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.cs(e.ghZ(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gb1(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gaE()
n=e.gct()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gcq(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.giD()
b=c.x
b.a.uniform1f(b.d,n)
n=e.giE()
b=c.y
b.a.uniform1f(b.d,n)
e.gaE()
n=e.gaE()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaE()
b=n.gb6(n)
if(b){b=c.dx
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}e.gaX()
n=e.ge4()
b=c.z
b.toString
a=n.gho(n)
a0=n.ghp(n)
a4=n.ghq()
n=n.ghn()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaX()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaX()
b=n.gb6(n)
if(b){b=c.dy
b.toString
a=n.d
if(!a)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(e.gil()){n=e.gij()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.gii()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.ght()){n=e.gh6()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gh7()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gh8()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.c9.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b1.aa(l,b1.Q.d)
b2=b1.a
p=b1.Q.d
b2.ag(b2.dj,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga1(p).dA(0)}b2=b2.id
b2.toString
b2.ak(p.ae(0,!0))}if(s.cy){b1.aa(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fP(b2.dk,p)
if(s.r.b){b1.aa(l,b1.cx.d)
b2=b1.a
p=b1.cx.d
b2.ag(b2.dl,p)}b2=s.x
p=b2.b||!1
if(p){p=b1.a
o=b1.cy.ch
p=p.dm
p.a.uniform1f(p.d,o)}if(b2.b){b1.aa(l,b1.cy.d)
b2=b1.a
p=b1.cy.d
b2.ag(b2.dn,p)}}b2=s.y
p=b2.b||!1
if(p){if(b2.b){b1.aa(l,b1.db.d)
p=b1.a
o=b1.db.d
p.ag(p.dq,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b4.e
p.bY(b3)
p.aT(b3)
p.ie(b3)
b2=b2.b||!1
if(b2)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(3553,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.hm()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cN().az}}
O.h0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cR(a,C.c.a6(b+3,4)*4))}}
O.h1.prototype={
$2:function(a,b){return J.km(a.a,b.a)}}
O.h2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dg(a,C.c.a6(b+3,4)*4))}}
O.h3.prototype={
$2:function(a,b){return J.km(a.a,b.a)}}
O.h4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dm(a,C.c.a6(b+3,4)*4))}}
O.h5.prototype={
$2:function(a,b){return J.km(a.a,b.a)}}
O.fV.prototype={
aw:function(){var u,t=this
t.cD()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.a_(u)}}}
O.c_.prototype={
a_:function(a){return this.a.a_(a)},
bC:function(){return this.a_(null)},
aw:function(){},
fO:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
u=u.b||!1
if(u){u=a.b||!1
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.a_(null)}},
saV:function(a){var u,t,s=this
if(!s.c.b)s.fO(new A.a5(!1,!0,!1))
u=s.d
if(u!==a){if(u!=null)u.gA().D(0,s.gbe())
t=s.d
s.d=a
a.gA().n(0,s.gbe())
u=new D.C(s.b+".texture2D",t,s.d)
u.b=!0
s.a.a_(u)}}}
O.fW.prototype={}
O.as.prototype={
aw:function(){var u,t,s=this
s.cD()
u=new V.a4(1,1,1)
if(!s.f.t(0,u)){t=s.f
s.f=u
u=new D.C(s.b+".color",t,u)
u.b=!0
s.a.a_(u)}}}
O.fY.prototype={}
O.fZ.prototype={
aw:function(){var u,t=this
t.cE()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.a_(u)}}}
O.h_.prototype={
aw:function(){var u,t=this
t.cE()
u=t.ch
if(!(Math.abs(u-100)<$.B().a)){t.ch=100
u=new D.C(t.b+".shininess",u,100)
u.b=!0
t.a.a_(u)}}}
O.ds.prototype={}
T.dt.prototype={}
T.i5.prototype={}
T.i6.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.H():u}}
T.i7.prototype={
dC:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i6()
t.a=0
t.b=q
t.d=t.c=!1
W.W(u,"load",new T.i8(this,t,u,!1,q,!1,!1),!1)
return t},
fL:function(a,b,c){var u,t,s,r
b=V.kW(b)
u=V.kW(a.width)
t=V.kW(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kp()
s.width=u
s.height=t
r=C.i.e0(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ot(r.getImageData(0,0,s.width,s.height))}}}
T.i8.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fL(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.i9(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hr()}++s.e}}
X.ko.prototype={}
X.fr.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.H():u}}
X.df.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.H():u},
aI:function(a){var u=this.f
if(u!=null)u.F(a)},
ep:function(){return this.aI(null)},
sb7:function(a){var u,t,s=this
if(!J.z(s.b,a)){u=s.b
if(u!=null)u.gA().D(0,s.gcI())
t=s.b
s.b=a
if(a!=null)a.gA().n(0,s.gcI())
u=new D.C("mover",t,s.b)
u.b=!0
s.aI(u)}}}
X.i1.prototype={}
V.cO.prototype={
bd:function(a){this.b=new P.fw(C.P)
this.c=null
this.d=H.c([],[[P.n,W.am]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.am]))
u=a.split("\n")
for(l=u.length,t=[W.am],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ez(q,0,q.length)
n=o==null?q:o
C.N.e2(p,H.kY(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaq(m.d).push(p)}},
dL:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.am]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).dW(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bs(t[r])}}
V.kd.prototype={
$1:function(a){var u=C.d.dV(this.a.ghC(),2)
if(u!=="0.00")P.kX(u+" fps")}}
V.f7.prototype={
bs:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ic()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.q(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.q(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.q(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.q(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.q(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aA())
t=a1.j(0,r).k(0,h)
u=T.q(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.q(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.q(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aA())
t=a1.j(0,r).k(0,e)
u=T.q(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a6()
s=[T.b8]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.q(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a6()
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.q(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.q(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.O("Num")
t=a1.j(0,n)
t.d=t.a.O("Num")
t=a1.j(0,m)
t.d=t.a.O("Symbol")
t=a1.j(0,j)
t.d=t.a.O("String")
t=a1.j(0,g)
t.d=t.a.O("String")
t=a1.j(0,c)
t.d=t.a.O(d)
t=a1.j(0,a0)
t.d=t.a.O(a0)
t=a1.j(0,q)
t=t.d=t.a.O(q)
u=[P.k]
t.aD(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ft.prototype={
bs:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ic()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.q(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.q(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.q(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.q(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aA())
t=e.j(0,j).k(0,i)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a6()
s=[T.b8]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.q(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a6()
u.a=H.c([],s)
t.a.push(u)
t=T.q(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.q(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.q(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.O("Num")
u=e.j(0,n)
u.d=u.a.O("Num")
u=e.j(0,m)
u.d=u.a.O("Symbol")
u=e.j(0,i)
u.d=u.a.O(j)
u=e.j(0,g)
u.d=u.a.O(h)
u=e.j(0,f)
u.d=u.a.O(f)
u=e.j(0,q)
u=u.d=u.a.O(q)
t=[P.k]
u.aD(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fu.prototype={
bs:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ic()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.l("_"))
u.a.push(t)
t=T.L("a","z")
u.a.push(t)
t=T.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.l("_"))
t.a.push(u)
u=T.L("0","9")
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.q(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.q(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.q(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.q(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.q(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.q(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.q(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aA())
l.j(0,s).k(0,m).a.push(new T.aA())
u=l.j(0,m).k(0,m)
t=new T.a6()
t.a=H.c([],[T.b8])
u.a.push(t)
u=T.q(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.L("a","z")
t.a.push(u)
u=T.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.O("Symbol")
u=l.j(0,n)
u.d=u.a.O("String")
u=l.j(0,r)
t=u.a.O(r)
u.d=t
t.aD(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.O(q)
t=l.j(0,m)
t.d=t.a.O(m)
return l}}
V.hq.prototype={
dL:function(a,b){this.d=H.c([],[[P.n,W.am]])
this.M(C.b.k(b,"\n"),"#111")},
bs:function(a){},
bn:function(){return}}
V.hv.prototype={
bk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.ly().gco().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.d2(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l2(m.c).n(0,q)
o=W.mO("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.hw(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l2(m.c).n(0,r.createElement("br"))},
an:function(a,b,c){return this.bk(a,b,c,!1)},
d2:function(a){var u,t,s=P.ly(),r=P.k,q=P.mV(s.gco(),r,r)
q.m(0,this.a,a)
u=s.dR(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jo([],[]).cu(""),"",t)}}
V.hw.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d2(u.d)}}}
V.hM.prototype={
eg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
W.W(q,"scroll",new V.hO(o),!1)},
d5:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dW(C.b.hI(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.oQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.et(C.x,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.e(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
e_:function(a){var u,t,s,r=new V.f7("dart")
r.bd("dart")
u=new V.ft("glsl")
u.bd("glsl")
t=new V.fu("html")
t.bd("html")
s=C.b.hz(H.c([r,u,t],[V.cO]),new V.hP(a))
if(s!=null)return s
r=new V.hq("plain")
r.bd("plain")
return r},
d4:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cC(s).a2(s,"+")){b0[t]=C.a.a8(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a8(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e_(a8)
r.dL(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.et(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l4()
j.href="#"+H.e(n)
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.b(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gV(s);a2.C();)d.appendChild(a2.gK(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h_:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<1;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
fR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ic()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a6()
r=[T.b8]
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a6()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a6()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.q(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.q(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aA())
s=u.j(0,i).k(0,i)
t=new T.a6()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.O(p)
s=u.j(0,n)
s.d=s.a.O(o)
s=u.j(0,"CodeEnd")
s.d=s.a.O(m)
s=u.j(0,j)
s.d=s.a.O("Link")
s=u.j(0,i)
s.d=s.a.O(i)
this.b=u}}
V.hO.prototype={
$1:function(a){P.lu(C.n,new V.hN(this.a))}}
V.hN.prototype={
$0:function(){var u=C.d.ai(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hP.prototype={
$1:function(a){return a.a===this.a}}
M.k2.prototype={
$0:function(){this.a.sa7(0,F.kR(1,null,null,1))}}
M.k3.prototype={
$0:function(){this.a.sa7(0,F.kR(8,null,null,8))}}
M.k4.prototype={
$0:function(){this.a.sa7(0,F.lX(!0,40,1))}}
M.k5.prototype={
$0:function(){this.a.sa7(0,F.lX(!1,40,0))}}
M.k6.prototype={
$0:function(){this.a.sa7(0,F.oJ(10,20))}}
M.k7.prototype={
$0:function(){var u=F.hI(),t=Math.sqrt(5)/2+0.5,s=F.a2(u,new V.w(-1,t,0)),r=F.a2(u,new V.w(1,t,0)),q=-t,p=F.a2(u,new V.w(-1,q,0)),o=F.a2(u,new V.w(1,q,0)),n=F.a2(u,new V.w(0,-1,q)),m=F.a2(u,new V.w(0,1,q)),l=F.a2(u,new V.w(0,-1,t)),k=F.a2(u,new V.w(0,1,t)),j=F.a2(u,new V.w(t,0,1)),i=F.a2(u,new V.w(t,0,-1)),h=F.a2(u,new V.w(q,0,1)),g=F.a2(u,new V.w(q,0,-1))
F.M(u,s,g,m,2)
F.M(u,s,m,r,2)
F.M(u,s,r,k,2)
F.M(u,s,k,h,2)
F.M(u,s,h,g,2)
F.M(u,r,m,i,2)
F.M(u,m,g,n,2)
F.M(u,g,h,p,2)
F.M(u,h,k,l,2)
F.M(u,k,r,j,2)
F.M(u,o,i,n,2)
F.M(u,o,n,p,2)
F.M(u,o,p,l,2)
F.M(u,o,l,j,2)
F.M(u,o,j,i,2)
F.M(u,n,i,m,2)
F.M(u,p,n,g,2)
F.M(u,l,p,h,2)
F.M(u,j,l,k,2)
F.M(u,i,j,r,2)
u.dD(new F.ck(),new F.iO())
this.a.sa7(0,u)}}
M.k8.prototype={
$0:function(){this.a.sa7(0,F.m7(6,6))}}
M.k9.prototype={
$0:function(){this.a.sa7(0,F.oT())}}
M.ka.prototype={
$0:function(){this.a.sa7(0,F.oI())}}
M.kb.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.d4("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d4("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e7=u.h
u=J.d0.prototype
u.e9=u.h
u=P.i.prototype
u.e8=u.bx
u=W.T.prototype
u.bA=u.ab
u=W.eb.prototype
u.ea=u.ap
u=T.cX.prototype
u.e6=u.aB
u.cC=u.h
u=O.c_.prototype
u.cD=u.aw
u=O.as.prototype
u.cE=u.aw})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"on","nw",8)
u(P,"oo","nx",8)
u(P,"op","ny",8)
t(P,"lW","ol",10)
s(W,"oC",4,null,["$4"],["nz"],15,0)
s(W,"oD",4,null,["$4"],["nA"],15,0)
var m
r(m=E.b3.prototype,"gdJ",0,0,null,["$1","$0"],["dK","hR"],0,0)
r(m,"gdH",0,0,null,["$1","$0"],["dI","hQ"],0,0)
r(m,"gdF",0,0,null,["$1","$0"],["dG","hN"],0,0)
q(m,"ghL","hM",4)
q(m,"ghO","hP",4)
r(m=E.du.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],0,0)
p(m,"gi5","dS",10)
o(m=X.dE.prototype,"gf5","f6",5)
o(m,"geU","eV",5)
o(m,"gf_","f0",2)
o(m,"gf9","fa",11)
o(m,"gf7","f8",11)
o(m,"gfd","fe",2)
o(m,"gfh","fi",2)
o(m,"gf3","f4",2)
o(m,"gff","fg",2)
o(m,"gf1","f2",2)
o(m,"gfj","fk",18)
o(m,"gfl","fm",5)
o(m,"gfB","fC",6)
o(m,"gfv","fw",6)
o(m,"gfz","fA",6)
r(D.bo.prototype,"gej",0,0,null,["$1","$0"],["at","ek"],0,0)
r(m=D.d2.prototype,"gcV",0,0,null,["$1","$0"],["cW","fb"],0,0)
o(m,"gfo","fp",19)
q(m,"geO","eP",12)
q(m,"gft","fu",12)
n(V.F.prototype,"gl","b5",7)
n(V.w.prototype,"gl","b5",7)
n(V.aS.prototype,"gl","b5",7)
r(m=U.bU.prototype,"gaL",0,0,null,["$1","$0"],["R","a5"],0,0)
q(m,"geM","eN",13)
q(m,"gfq","fs",13)
r(m=U.dF.prototype,"gaL",0,0,null,["$1","$0"],["R","a5"],0,0)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
r(m=U.dG.prototype,"gaL",0,0,null,["$1","$0"],["R","a5"],0,0)
o(m,"gbL","bM",1)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
o(m,"geF","eG",1)
o(m,"geH","eI",1)
o(m,"gfY","fZ",1)
o(m,"gfW","fX",1)
o(m,"gfU","fV",1)
o(U.dH.prototype,"geK","eL",1)
r(m=M.cU.prototype,"gal",0,0,null,["$1","$0"],["au","el"],0,0)
q(m,"geW","eX",4)
q(m,"geY","eZ",4)
r(m=O.d6.prototype,"gbe",0,0,null,["$1","$0"],["a_","bC"],0,0)
r(m,"gfJ",0,0,null,["$1","$0"],["cX","fK"],0,0)
q(m,"geQ","eR",14)
q(m,"geS","eT",14)
r(O.c_.prototype,"gbe",0,0,null,["$1","$0"],["a_","bC"],0,0)
r(X.df.prototype,"gcI",0,0,null,["$1","$0"],["aI","ep"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.ky,J.a,J.a8,P.dZ,P.i,H.bZ,P.fA,H.cV,H.iw,H.f_,H.ii,P.bp,H.bP,H.eg,P.aG,H.fH,H.fJ,H.fC,P.em,P.dJ,P.dq,P.hY,P.dv,P.jE,P.ji,P.jc,P.dY,P.u,P.jw,P.fQ,P.eX,P.fx,P.jC,P.jB,P.az,P.a9,P.ad,P.b2,P.ho,P.dn,P.dR,P.fq,P.fs,P.n,P.R,P.ba,P.k,P.S,P.bD,P.iy,P.jl,W.f3,W.cn,W.J,W.dd,W.eb,W.jr,W.cW,W.aK,W.jh,W.eu,P.jn,P.er,P.jd,P.bz,T.aA,T.cX,T.b8,T.hx,T.hG,R.dp,R.dw,R.dx,R.ib,O.b1,O.c0,E.eT,E.b3,E.hy,E.du,Z.dI,Z.iW,Z.cM,Z.br,Z.aT,D.eW,D.bq,D.X,X.cN,X.d1,X.fE,X.fN,X.ai,X.hc,X.id,X.dE,D.bo,D.aa,D.hs,D.hT,V.a4,V.ag,V.fh,V.d7,V.aH,V.U,V.O,V.bc,V.di,V.F,V.w,V.aS,U.dF,U.dG,U.dH,M.cU,A.cK,A.eM,A.a5,A.cR,A.dg,A.dm,A.fX,A.cf,A.ch,A.ci,A.dA,A.ir,F.aD,F.fk,F.bY,F.fG,F.c6,F.hH,F.hJ,F.hK,F.hL,F.bg,F.iK,F.iL,F.iP,F.iQ,F.iR,F.iS,O.ds,O.c_,O.fY,T.i7,X.ko,X.i1,X.df,V.cO,V.hv,V.hM])
s(J.a,[J.fB,J.d_,J.d0,J.b4,J.bX,J.b5,H.c3,H.b9,W.f,W.eJ,W.bl,W.aq,W.G,W.dL,W.ah,W.f8,W.f9,W.dN,W.cT,W.dP,W.fb,W.h,W.dS,W.aE,W.fv,W.dU,W.aF,W.fM,W.h6,W.e_,W.e0,W.aI,W.e1,W.e4,W.aL,W.e8,W.ea,W.aO,W.ec,W.aP,W.eh,W.av,W.ek,W.ia,W.aR,W.en,W.ig,W.iD,W.ev,W.ex,W.ez,W.eB,W.eD,P.b7,P.dW,P.bb,P.e6,P.hu,P.ei,P.be,P.ep,P.eN,P.dK,P.dj,P.ee])
s(J.d0,[J.hp,J.bB,J.b6])
t(J.kx,J.b4)
s(J.bX,[J.cZ,J.cY])
t(P.fL,P.dZ)
s(P.fL,[H.dC,W.j2,W.a1,P.fm])
t(H.l,H.dC)
s(P.i,[H.fe,H.fR,H.cl])
s(H.fe,[H.d4,H.fI])
s(P.fA,[H.fS,H.iX])
t(H.fT,H.d4)
t(H.f0,H.f_)
s(P.bp,[H.hl,H.fD,H.iv,H.eV,H.hE,P.de,P.al,P.ix,P.it,P.cb,P.eZ,P.f6])
s(H.bP,[H.kk,H.i2,H.jX,H.jY,H.jZ,P.iZ,P.iY,P.j_,P.j0,P.jv,P.ju,P.jN,P.jf,P.jg,P.fK,P.fP,P.fc,P.fd,P.iC,P.iz,P.iA,P.iB,P.jx,P.jy,P.jA,P.jz,P.jI,P.jH,P.jJ,P.jK,W.ff,W.h8,W.ha,W.hD,W.hX,W.j7,W.hj,W.hi,W.jj,W.jk,W.jt,W.jD,P.jp,P.jO,P.fn,P.fo,P.eP,E.hz,E.hA,E.hB,E.i9,D.fi,D.fj,F.jF,F.jP,F.jR,F.jS,F.jT,F.k1,F.ke,F.kf,F.kj,F.k0,F.jQ,F.iU,F.iT,F.iM,F.iN,O.h0,O.h1,O.h2,O.h3,O.h4,O.h5,T.i8,V.kd,V.hw,V.hO,V.hN,V.hP,M.k2,M.k3,M.k4,M.k5,M.k6,M.k7,M.k8,M.k9,M.ka,M.kb])
s(H.i2,[H.hV,H.bN])
t(P.fO,P.aG)
s(P.fO,[H.N,W.j1])
t(H.d9,H.b9)
s(H.d9,[H.cp,H.cr])
t(H.cq,H.cp)
t(H.c4,H.cq)
t(H.cs,H.cr)
t(H.da,H.cs)
s(H.da,[H.hd,H.he,H.hf,H.hg,H.hh,H.db,H.c5])
t(P.je,P.jE)
t(P.jb,P.ji)
t(P.es,P.fQ)
t(P.dD,P.es)
s(P.eX,[P.eR,P.fg])
t(P.f1,P.hY)
s(P.f1,[P.eS,P.fw,P.iG,P.iF])
t(P.iE,P.fg)
s(P.ad,[P.I,P.x])
s(P.al,[P.bx,P.fy])
t(P.j4,P.bD)
s(W.f,[W.E,W.fl,W.c1,W.aN,W.ct,W.aQ,W.aw,W.cv,W.iV,W.cm,P.eQ,P.bk])
s(W.E,[W.T,W.b0])
s(W.T,[W.m,P.j])
s(W.m,[W.eK,W.eL,W.bm,W.bn,W.am,W.fp,W.bW,W.hF,W.dr,W.i_,W.i0,W.cd])
t(W.f2,W.aq)
t(W.bQ,W.dL)
s(W.ah,[W.f4,W.f5])
t(W.dO,W.dN)
t(W.cS,W.dO)
t(W.dQ,W.dP)
t(W.fa,W.dQ)
t(W.ar,W.bl)
t(W.dT,W.dS)
t(W.bT,W.dT)
t(W.dV,W.dU)
t(W.bV,W.dV)
t(W.bf,W.h)
s(W.bf,[W.bu,W.au,W.by])
t(W.h7,W.e_)
t(W.h9,W.e0)
t(W.e2,W.e1)
t(W.hb,W.e2)
t(W.e5,W.e4)
t(W.dc,W.e5)
t(W.e9,W.e8)
t(W.hr,W.e9)
t(W.hC,W.ea)
t(W.cu,W.ct)
t(W.hR,W.cu)
t(W.ed,W.ec)
t(W.hS,W.ed)
t(W.hW,W.eh)
t(W.el,W.ek)
t(W.i3,W.el)
t(W.cw,W.cv)
t(W.i4,W.cw)
t(W.eo,W.en)
t(W.ie,W.eo)
t(W.bh,W.au)
t(W.ew,W.ev)
t(W.j3,W.ew)
t(W.dM,W.cT)
t(W.ey,W.ex)
t(W.j8,W.ey)
t(W.eA,W.ez)
t(W.e3,W.eA)
t(W.eC,W.eB)
t(W.jm,W.eC)
t(W.eE,W.eD)
t(W.jq,W.eE)
t(W.j5,W.j1)
t(W.j6,P.dq)
t(W.js,W.eb)
t(P.jo,P.jn)
t(P.ac,P.jd)
t(P.dX,P.dW)
t(P.fF,P.dX)
t(P.e7,P.e6)
t(P.hm,P.e7)
t(P.ca,P.j)
t(P.ej,P.ei)
t(P.hZ,P.ej)
t(P.eq,P.ep)
t(P.ih,P.eq)
t(P.eO,P.dK)
t(P.hn,P.bk)
t(P.ef,P.ee)
t(P.hU,P.ef)
s(T.cX,[T.a6,R.dz])
s(E.eT,[Z.cL,A.dk,T.dt])
s(D.X,[D.bs,D.bt,D.C,X.ht])
s(X.ht,[X.d5,X.aJ,X.c2,X.dy])
s(O.b1,[D.d2,U.bU])
s(D.eW,[U.eY,U.ab])
t(U.cP,U.ab)
t(A.fU,A.dk)
s(A.dA,[A.dB,A.io,A.ip,A.iq,A.il,A.Z,A.im,A.V,A.ce,A.is,A.cg,A.aj,A.a_,A.bA])
t(F.hQ,F.fk)
t(F.ik,F.fG)
t(F.ck,F.iQ)
s(F.iR,[F.iO,F.hk])
t(O.d6,O.ds)
s(O.c_,[O.fV,O.fW,O.as])
s(O.as,[O.fZ,O.h_])
t(T.i5,T.dt)
t(T.i6,T.i5)
t(X.fr,X.i1)
s(V.cO,[V.f7,V.ft,V.fu,V.hq])
u(H.dC,H.iw)
u(H.cp,P.u)
u(H.cq,H.cV)
u(H.cr,P.u)
u(H.cs,H.cV)
u(P.dZ,P.u)
u(P.es,P.jw)
u(W.dL,W.f3)
u(W.dN,P.u)
u(W.dO,W.J)
u(W.dP,P.u)
u(W.dQ,W.J)
u(W.dS,P.u)
u(W.dT,W.J)
u(W.dU,P.u)
u(W.dV,W.J)
u(W.e_,P.aG)
u(W.e0,P.aG)
u(W.e1,P.u)
u(W.e2,W.J)
u(W.e4,P.u)
u(W.e5,W.J)
u(W.e8,P.u)
u(W.e9,W.J)
u(W.ea,P.aG)
u(W.ct,P.u)
u(W.cu,W.J)
u(W.ec,P.u)
u(W.ed,W.J)
u(W.eh,P.aG)
u(W.ek,P.u)
u(W.el,W.J)
u(W.cv,P.u)
u(W.cw,W.J)
u(W.en,P.u)
u(W.eo,W.J)
u(W.ev,P.u)
u(W.ew,W.J)
u(W.ex,P.u)
u(W.ey,W.J)
u(W.ez,P.u)
u(W.eA,W.J)
u(W.eB,P.u)
u(W.eC,W.J)
u(W.eD,P.u)
u(W.eE,W.J)
u(P.dW,P.u)
u(P.dX,W.J)
u(P.e6,P.u)
u(P.e7,W.J)
u(P.ei,P.u)
u(P.ej,W.J)
u(P.ep,P.u)
u(P.eq,W.J)
u(P.dK,P.aG)
u(P.ee,P.u)
u(P.ef,W.J)})()
var v={mangledGlobalNames:{x:"int",I:"double",ad:"num",k:"String",az:"bool",ba:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.au]},{func:1,ret:P.ba,args:[,,]},{func:1,ret:-1,args:[P.x,[P.i,E.b3]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bu]},{func:1,ret:-1,args:[P.x,[P.i,D.aa]]},{func:1,ret:-1,args:[P.x,[P.i,U.ab]]},{func:1,ret:-1,args:[P.x,[P.i,V.aH]]},{func:1,ret:P.az,args:[W.T,P.k,P.k,W.cn]},{func:1,ret:P.ba,args:[,]},{func:1,ret:P.bz,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.az,args:[[P.i,D.aa]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bm.prototype
C.i=W.bn.prototype
C.N=W.am.prototype
C.Q=J.a.prototype
C.b=J.b4.prototype
C.R=J.cY.prototype
C.c=J.cZ.prototype
C.j=J.d_.prototype
C.d=J.bX.prototype
C.a=J.b5.prototype
C.S=J.b6.prototype
C.A=J.hp.prototype
C.Y=P.dj.prototype
C.B=W.dr.prototype
C.q=J.bB.prototype
C.C=W.bh.prototype
C.D=W.cm.prototype
C.Z=new P.eS()
C.E=new P.eR()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.ho()
C.e=new P.iE()
C.M=new P.iG()
C.f=new P.je()
C.n=new P.b2(0)
C.O=new P.b2(5e6)
C.P=new P.fx("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.x])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.x])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.x])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.x])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.x])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.x])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.x])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.x])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.x])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.f0(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.ap=0
$.bO=null
$.l7=null
$.m1=null
$.lV=null
$.m5=null
$.jU=null
$.k_=null
$.kU=null
$.bG=null
$.cz=null
$.cA=null
$.kO=!1
$.an=C.f
$.a7=[]
$.aC=null
$.kt=null
$.ld=null
$.lc=null
$.co=P.kA(P.k,P.fs)
$.li=null
$.ll=null
$.c7=null
$.lq=null
$.lB=null
$.lE=null
$.lD=null
$.iH=null
$.iI=null
$.iJ=null
$.lC=null
$.lG=null
$.lk=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oY","ma",function(){return H.m0("_$dart_dartClosure")})
u($,"oZ","kZ",function(){return H.m0("_$dart_js")})
u($,"p_","mb",function(){return H.ax(H.ij({
toString:function(){return"$receiver$"}}))})
u($,"p0","mc",function(){return H.ax(H.ij({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p1","md",function(){return H.ax(H.ij(null))})
u($,"p2","me",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p5","mh",function(){return H.ax(H.ij(void 0))})
u($,"p6","mi",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p4","mg",function(){return H.ax(H.lw(null))})
u($,"p3","mf",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p8","mk",function(){return H.ax(H.lw(void 0))})
u($,"p7","mj",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pm","l_",function(){return P.nv()})
u($,"p9","ml",function(){return P.nr()})
u($,"pn","mp",function(){return H.n0(H.bF(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.x])))})
u($,"pp","mr",function(){return P.ne("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pq","ms",function(){return P.nU()})
u($,"po","mq",function(){return P.lf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pg","mo",function(){return Z.ak(0)})
u($,"pa","mm",function(){return Z.ak(511)})
u($,"pi","aY",function(){return Z.ak(1)})
u($,"ph","aX",function(){return Z.ak(2)})
u($,"pc","aW",function(){return Z.ak(4)})
u($,"pj","aZ",function(){return Z.ak(8)})
u($,"pk","bj",function(){return Z.ak(16)})
u($,"pd","cF",function(){return Z.ak(32)})
u($,"pe","cG",function(){return Z.ak(64)})
u($,"pf","mn",function(){return Z.ak(96)})
u($,"pl","bM",function(){return Z.ak(128)})
u($,"pb","aV",function(){return Z.ak(256)})
u($,"oX","m9",function(){return new V.fh(1e-9)})
u($,"oW","B",function(){return $.m9()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c3,DataView:H.b9,ArrayBufferView:H.b9,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.hd,Int32Array:H.he,Int8Array:H.hf,Uint16Array:H.hg,Uint32Array:H.hh,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.c5,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eK,HTMLAreaElement:W.eL,Blob:W.bl,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSPerspective:W.f2,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bQ,MSStyleCSSProperties:W.bQ,CSS2Properties:W.bQ,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.f4,CSSUnparsedValue:W.f5,DataTransferItemList:W.f8,HTMLDivElement:W.am,DOMException:W.f9,ClientRectList:W.cS,DOMRectList:W.cS,DOMRectReadOnly:W.cT,DOMStringList:W.fa,DOMTokenList:W.fb,Element:W.T,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.bT,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aE,History:W.fv,HTMLCollection:W.bV,HTMLFormControlsCollection:W.bV,HTMLOptionsCollection:W.bV,ImageData:W.aF,HTMLImageElement:W.bW,KeyboardEvent:W.bu,Location:W.fM,MediaList:W.h6,MessagePort:W.c1,MIDIInputMap:W.h7,MIDIOutputMap:W.h9,MimeType:W.aI,MimeTypeArray:W.hb,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dc,RadioNodeList:W.dc,Plugin:W.aL,PluginArray:W.hr,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.aN,SourceBufferList:W.hR,SpeechGrammar:W.aO,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.aP,Storage:W.hW,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableElement:W.dr,HTMLTableRowElement:W.i_,HTMLTableSectionElement:W.i0,HTMLTemplateElement:W.cd,TextTrack:W.aQ,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.i3,TextTrackList:W.i4,TimeRanges:W.ia,Touch:W.aR,TouchEvent:W.by,TouchList:W.ie,TrackDefaultList:W.ig,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,URL:W.iD,VideoTrackList:W.iV,WheelEvent:W.bh,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.j3,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.j8,NamedNodeMap:W.e3,MozNamedAttrMap:W.e3,SpeechRecognitionResultList:W.jm,StyleSheetList:W.jq,SVGLength:P.b7,SVGLengthList:P.fF,SVGNumber:P.bb,SVGNumberList:P.hm,SVGPointList:P.hu,SVGScriptElement:P.ca,SVGStringList:P.hZ,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.be,SVGTransformList:P.ih,AudioBuffer:P.eN,AudioParamMap:P.eO,AudioTrackList:P.eQ,AudioContext:P.bk,webkitAudioContext:P.bk,BaseAudioContext:P.bk,OfflineAudioContext:P.hn,WebGL2RenderingContext:P.dj,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
W.ct.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.m3,[])
else M.m3([])})})()
//# sourceMappingURL=test.dart.js.map
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ys="161",Hn={ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uc=0,da=1,hc=2,sl=1,fc=2,Qe=3,vn=0,Ae=1,tn=2,mn=0,pi=1,pa=2,ma=3,ga=4,dc=5,Rn=100,pc=101,mc=102,_a=103,va=104,gc=200,_c=201,vc=202,xc=203,Ds=204,Is=205,yc=206,Sc=207,Mc=208,Ec=209,bc=210,wc=211,Tc=212,Ac=213,Cc=214,Rc=0,Pc=1,Lc=2,Tr=3,Dc=4,Ic=5,Uc=6,Nc=7,al=0,Oc=1,Fc=2,gn=0,zc=1,Bc=2,kc=3,Gc=4,Hc=5,Vc=6,ol=300,_i=301,vi=302,Us=303,Ns=304,Dr=306,Os=1e3,Le=1001,Fs=1002,Me=1003,xa=1004,Di=1005,we=1006,jr=1007,Ln=1008,_n=1009,Wc=1010,Xc=1011,qs=1012,ll=1013,dn=1014,en=1015,Hi=1016,cl=1017,ul=1018,Dn=1020,Yc=1021,Ge=1023,qc=1024,jc=1025,In=1026,xi=1027,Zc=1028,hl=1029,Kc=1030,fl=1031,dl=1033,Zr=33776,Kr=33777,Jr=33778,$r=33779,ya=35840,Sa=35841,Ma=35842,Ea=35843,pl=36196,ba=37492,wa=37496,Ta=37808,Aa=37809,Ca=37810,Ra=37811,Pa=37812,La=37813,Da=37814,Ia=37815,Ua=37816,Na=37817,Oa=37818,Fa=37819,za=37820,Ba=37821,Qr=36492,ka=36494,Ga=36495,Jc=36283,Ha=36284,Va=36285,Wa=36286,ml=3e3,Un=3001,$c=3200,Qc=3201,gl=0,tu=1,Ne="",fe="srgb",rn="srgb-linear",js="display-p3",Ir="display-p3-linear",Ar="linear",Qt="srgb",Cr="rec709",Rr="p3",Wn=7680,Xa=519,eu=512,nu=513,iu=514,_l=515,ru=516,su=517,au=518,ou=519,Ya=35044,qa="300 es",zs=1035,nn=2e3,Pr=2001;class Bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Bs=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function lu(i,t){return(i%t+t)%t}function ts(i,t,e){return(1-e)*i+e*t}function ja(i){return(i&i-1)===0&&i!==0}function ks(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cu={DEG2RAD:br};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],m=n[2],d=n[5],_=n[8],g=r[0],f=r[3],u=r[6],S=r[1],y=r[4],b=r[7],A=r[2],P=r[5],T=r[8];return s[0]=o*g+a*S+l*A,s[3]=o*f+a*y+l*P,s[6]=o*u+a*b+l*T,s[1]=c*g+h*S+p*A,s[4]=c*f+h*y+p*P,s[7]=c*u+h*b+p*T,s[2]=m*g+d*S+_*A,s[5]=m*f+d*y+_*P,s[8]=m*u+d*b+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,m=a*l-h*s,d=c*s-o*l,_=e*p+n*m+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=p*g,t[1]=(r*c-h*n)*g,t[2]=(a*n-r*o)*g,t[3]=m*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(es.makeScale(t,e)),this}rotate(t){return this.premultiply(es.makeRotation(-t)),this}translate(t,e){return this.premultiply(es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Yt;function vl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){const i=Lr("canvas");return i.style.display="block",i}const Za={};function mi(i){i in Za||(Za[i]=!0,console.warn(i))}const Ka=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ja=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[rn]:{transfer:Ar,primaries:Cr,toReference:i=>i,fromReference:i=>i},[fe]:{transfer:Qt,primaries:Cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ir]:{transfer:Ar,primaries:Rr,toReference:i=>i.applyMatrix3(Ja),fromReference:i=>i.applyMatrix3(Ka)},[js]:{transfer:Qt,primaries:Rr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ja),fromReference:i=>i.applyMatrix3(Ka).convertLinearToSRGB()}},hu=new Set([rn,Ir]),Jt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ki[t].toReference,r=Ki[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ki[i].primaries},getTransfer:function(i){return i===Ne?Ar:Ki[i].transfer}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class xl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Lr("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fu=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(is(r[o].image)):s.push(is(r[o]))}else s=is(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class Ee extends Bn{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Le,r=Le,s=we,o=Ln,a=Ge,l=_n,c=Ee.DEFAULT_ANISOTROPY,h=Ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ei(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?fe:Ne),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case Le:t.x=t.x<0?0:1;break;case Fs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case Le:t.y=t.y<0?0:1;break;case Fs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Un:ml}set encoding(t){mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Un?fe:Ne}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=ol;Ee.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],g=l[2],f=l[6],u=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(d+1)/2,A=(u+1)/2,P=(h+m)/4,T=(p+g)/4,H=(_+f)/4;return y>b&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=T/n):b>A?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=H/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=T/s,r=H/s),this.set(n,r,s,e),this}let S=Math.sqrt((f-_)*(f-_)+(p-g)*(p-g)+(m-h)*(m-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(p-g)/S,this.z=(m-h)/S,this.w=Math.acos((c+d+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?fe:Ne),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ee(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sl extends Ee{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mu extends Ee{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3];const m=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(p!==g||l!==m||c!==d||h!==_){let f=1-a;const u=l*m+c*d+h*_+p*g,S=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const A=Math.sqrt(y),P=Math.atan2(A,u*S);f=Math.sin(f*P)/A,a=Math.sin(a*P)/A}const b=a*S;if(l=l*f+m*b,c=c*f+d*b,h=h*f+_*b,p=p*f+g*b,f===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=A,c*=A,h*=A,p*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[o],m=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*p+l*d-c*m,t[e+1]=l*_+h*m+c*p-a*d,t[e+2]=c*_+h*d+a*m-l*p,t[e+3]=h*_-a*p-l*m-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),p=a(s/2),m=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=m*h*p+c*d*_,this._y=c*d*p-m*h*_,this._z=c*h*_+m*d*p,this._w=c*h*p-m*d*_;break;case"YXZ":this._x=m*h*p+c*d*_,this._y=c*d*p-m*h*_,this._z=c*h*_-m*d*p,this._w=c*h*p+m*d*_;break;case"ZXY":this._x=m*h*p-c*d*_,this._y=c*d*p+m*h*_,this._z=c*h*_+m*d*p,this._w=c*h*p-m*d*_;break;case"ZYX":this._x=m*h*p-c*d*_,this._y=c*d*p+m*h*_,this._z=c*h*_-m*d*p,this._w=c*h*p+m*d*_;break;case"YZX":this._x=m*h*p+c*d*_,this._y=c*d*p+m*h*_,this._z=c*h*_-m*d*p,this._w=c*h*p-m*d*_;break;case"XZY":this._x=m*h*p-c*d*_,this._y=c*d*p-m*h*_,this._z=c*h*_+m*d*p,this._w=c*h*p+m*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],m=n+a+p;if(m>0){const d=.5/Math.sqrt(m+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>p){const d=2*Math.sqrt(1+n-a-p);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>p){const d=2*Math.sqrt(1+a-n-p);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rs.copy(this).projectOnVector(t),this.sub(rs)}reflect(t){return this.sub(rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new Y,$a=new On;class Yi{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ze):ze.fromBufferAttribute(s,o),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),$i.subVectors(this.max,Ui),Yn.subVectors(t.a,Ui),qn.subVectors(t.b,Ui),jn.subVectors(t.c,Ui),an.subVectors(qn,Yn),on.subVectors(jn,qn),bn.subVectors(Yn,jn);let e=[0,-an.z,an.y,0,-on.z,on.y,0,-bn.z,bn.y,an.z,0,-an.x,on.z,0,-on.x,bn.z,0,-bn.x,-an.y,an.x,0,-on.y,on.x,0,-bn.y,bn.x,0];return!ss(e,Yn,qn,jn,$i)||(e=[1,0,0,0,1,0,0,0,1],!ss(e,Yn,qn,jn,$i))?!1:(Qi.crossVectors(an,on),e=[Qi.x,Qi.y,Qi.z],ss(e,Yn,qn,jn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ze=new Y,Ji=new Yi,Yn=new Y,qn=new Y,jn=new Y,an=new Y,on=new Y,bn=new Y,Ui=new Y,$i=new Y,Qi=new Y,wn=new Y;function ss(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wn.fromArray(i,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=t.dot(wn),c=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const gu=new Yi,Ni=new Y,as=new Y;class Ur{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ni,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(as.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(as)),this.expandByPoint(Ni.copy(t.center).sub(as))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new Y,os=new Y,tr=new Y,ln=new Y,ls=new Y,er=new Y,cs=new Y;class Zs{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){os.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(os);const s=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=ln.dot(this.direction),l=-ln.dot(tr),c=ln.lengthSq(),h=Math.abs(1-o*o);let p,m,d,_;if(h>0)if(p=o*l-a,m=o*a-l,_=s*h,p>=0)if(m>=-_)if(m<=_){const g=1/h;p*=g,m*=g,d=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=s,p=Math.max(0,-(o*m+a)),d=-p*p+m*(m+2*l)+c;else m=-s,p=Math.max(0,-(o*m+a)),d=-p*p+m*(m+2*l)+c;else m<=-_?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+m*(m+2*l)+c):m<=_?(p=0,m=Math.min(Math.max(-s,-l),s),d=m*(m+2*l)+c):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+m*(m+2*l)+c);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),d=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(os).addScaledVector(tr,m),d}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),r=je.dot(je)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),h>=0?(s=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(s=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,r,s){ls.subVectors(e,t),er.subVectors(n,t),cs.crossVectors(ls,er);let o=this.direction.dot(cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ln.subVectors(this.origin,t);const l=a*this.direction.dot(er.crossVectors(ln,er));if(l<0)return null;const c=a*this.direction.dot(ls.cross(ln));if(c<0||l+c>o)return null;const h=-a*ln.dot(cs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,r,s,o,a,l,c,h,p,m,d,_,g,f){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,p,m,d,_,g,f)}set(t,e,n,r,s,o,a,l,c,h,p,m,d,_,g,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=m,u[3]=d,u[7]=_,u[11]=g,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Zn.setFromMatrixColumn(t,0).length(),s=1/Zn.setFromMatrixColumn(t,1).length(),o=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=o*h,d=o*p,_=a*h,g=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=d+_*c,e[5]=m-g*c,e[9]=-a*l,e[2]=g-m*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*h,d=l*p,_=c*h,g=c*p;e[0]=m+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*h,d=l*p,_=c*h,g=c*p;e[0]=m-g*a,e[4]=-o*p,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*h,d=o*p,_=a*h,g=a*p;e[0]=l*h,e[4]=_*c-d,e[8]=m*c+g,e[1]=l*p,e[5]=g*c+m,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-m*p,e[8]=_*p+d,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*p+_,e[10]=m-g*p}else if(t.order==="XZY"){const m=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=m*p+g,e[5]=o*h,e[9]=d*p-_,e[2]=_*p-d,e[6]=a*h,e[10]=g*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,vu)}lookAt(t,e,n){const r=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),cn.crossVectors(n,Re),cn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),cn.crossVectors(n,Re)),cn.normalize(),nr.crossVectors(Re,cn),r[0]=cn.x,r[4]=nr.x,r[8]=Re.x,r[1]=cn.y,r[5]=nr.y,r[9]=Re.y,r[2]=cn.z,r[6]=nr.z,r[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],m=n[9],d=n[13],_=n[2],g=n[6],f=n[10],u=n[14],S=n[3],y=n[7],b=n[11],A=n[15],P=r[0],T=r[4],H=r[8],X=r[12],w=r[1],L=r[5],R=r[9],V=r[13],v=r[2],F=r[6],J=r[10],j=r[14],nt=r[3],Z=r[7],it=r[11],G=r[15];return s[0]=o*P+a*w+l*v+c*nt,s[4]=o*T+a*L+l*F+c*Z,s[8]=o*H+a*R+l*J+c*it,s[12]=o*X+a*V+l*j+c*G,s[1]=h*P+p*w+m*v+d*nt,s[5]=h*T+p*L+m*F+d*Z,s[9]=h*H+p*R+m*J+d*it,s[13]=h*X+p*V+m*j+d*G,s[2]=_*P+g*w+f*v+u*nt,s[6]=_*T+g*L+f*F+u*Z,s[10]=_*H+g*R+f*J+u*it,s[14]=_*X+g*V+f*j+u*G,s[3]=S*P+y*w+b*v+A*nt,s[7]=S*T+y*L+b*F+A*Z,s[11]=S*H+y*R+b*J+A*it,s[15]=S*X+y*V+b*j+A*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],m=t[10],d=t[14],_=t[3],g=t[7],f=t[11],u=t[15];return _*(+s*l*p-r*c*p-s*a*m+n*c*m+r*a*d-n*l*d)+g*(+e*l*d-e*c*m+s*o*m-r*o*d+r*c*h-s*l*h)+f*(+e*c*p-e*a*d-s*o*p+n*o*d+s*a*h-n*c*h)+u*(-r*a*h-e*l*p+e*a*m+r*o*p-n*o*m+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],m=t[10],d=t[11],_=t[12],g=t[13],f=t[14],u=t[15],S=p*f*c-g*m*c+g*l*d-a*f*d-p*l*u+a*m*u,y=_*m*c-h*f*c-_*l*d+o*f*d+h*l*u-o*m*u,b=h*g*c-_*p*c+_*a*d-o*g*d-h*a*u+o*p*u,A=_*p*l-h*g*l-_*a*m+o*g*m+h*a*f-o*p*f,P=e*S+n*y+r*b+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=S*T,t[1]=(g*m*s-p*f*s-g*r*d+n*f*d+p*r*u-n*m*u)*T,t[2]=(a*f*s-g*l*s+g*r*c-n*f*c-a*r*u+n*l*u)*T,t[3]=(p*l*s-a*m*s-p*r*c+n*m*c+a*r*d-n*l*d)*T,t[4]=y*T,t[5]=(h*f*s-_*m*s+_*r*d-e*f*d-h*r*u+e*m*u)*T,t[6]=(_*l*s-o*f*s-_*r*c+e*f*c+o*r*u-e*l*u)*T,t[7]=(o*m*s-h*l*s+h*r*c-e*m*c-o*r*d+e*l*d)*T,t[8]=b*T,t[9]=(_*p*s-h*g*s-_*n*d+e*g*d+h*n*u-e*p*u)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*u+e*a*u)*T,t[11]=(h*a*s-o*p*s-h*n*c+e*p*c+o*n*d-e*a*d)*T,t[12]=A*T,t[13]=(h*g*r-_*p*r+_*n*m-e*g*m-h*n*f+e*p*f)*T,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*f-e*a*f)*T,t[15]=(o*p*r-h*a*r+h*n*l-e*p*l-o*n*m+e*a*m)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,p=a+a,m=s*c,d=s*h,_=s*p,g=o*h,f=o*p,u=a*p,S=l*c,y=l*h,b=l*p,A=n.x,P=n.y,T=n.z;return r[0]=(1-(g+u))*A,r[1]=(d+b)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(d-b)*P,r[5]=(1-(m+u))*P,r[6]=(f+S)*P,r[7]=0,r[8]=(_+y)*T,r[9]=(f-S)*T,r[10]=(1-(m+g))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Zn.set(r[0],r[1],r[2]).length();const o=Zn.set(r[4],r[5],r[6]).length(),a=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Be.copy(this);const c=1/s,h=1/o,p=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=p,Be.elements[9]*=p,Be.elements[10]*=p,e.setFromRotationMatrix(Be),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=nn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let d,_;if(a===nn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Pr)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=nn){const l=this.elements,c=1/(e-t),h=1/(n-r),p=1/(o-s),m=(e+t)*c,d=(n+r)*h;let _,g;if(a===nn)_=(o+s)*p,g=-2*p;else if(a===Pr)_=s*p,g=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new Y,Be=new ne,_u=new Y(0,0,0),vu=new Y(1,1,1),cn=new Y,nr=new Y,Re=new Y,Qa=new ne,to=new On;class Nr{constructor(t=0,e=0,n=0,r=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],m=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return to.setFromEuler(this),this.setFromQuaternion(to,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xu=0;const eo=new Y,Kn=new On,Ze=new ne,ir=new Y,Oi=new Y,yu=new Y,Su=new On,no=new Y(1,0,0),io=new Y(0,1,0),ro=new Y(0,0,1),Mu={type:"added"},Eu={type:"removed"};class oe extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oe.DEFAULT_UP.clone();const t=new Y,e=new Nr,n=new On,r=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(no,t)}rotateY(t){return this.rotateOnAxis(io,t)}rotateZ(t){return this.rotateOnAxis(ro,t)}translateOnAxis(t,e){return eo.copy(t).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(no,t)}translateY(t){return this.translateOnAxis(io,t)}translateZ(t){return this.translateOnAxis(ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(Oi,ir,this.up):Ze.lookAt(ir,Oi,this.up),this.quaternion.setFromRotationMatrix(Ze),r&&(Ze.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),m=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}oe.DEFAULT_UP=new Y(0,1,0);oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new Y,Ke=new Y,us=new Y,Je=new Y,Jn=new Y,$n=new Y,so=new Y,hs=new Y,fs=new Y,ds=new Y;class Ve{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ke.subVectors(t,e),r.cross(ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ke.subVectors(r,e),Ke.subVectors(n,e),us.subVectors(t,e);const o=ke.dot(ke),a=ke.dot(Ke),l=ke.dot(us),c=Ke.dot(Ke),h=Ke.dot(us),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,d=(c*l-a*h)*m,_=(o*h-a*l)*m;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Je)===null?!1:Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Je.x),l.addScaledVector(o,Je.y),l.addScaledVector(a,Je.z),l)}static isFrontFacing(t,e,n,r){return ke.subVectors(n,e),Ke.subVectors(t,e),ke.cross(Ke).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),ke.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Jn.subVectors(r,n),$n.subVectors(s,n),hs.subVectors(t,n);const l=Jn.dot(hs),c=$n.dot(hs);if(l<=0&&c<=0)return e.copy(n);fs.subVectors(t,r);const h=Jn.dot(fs),p=$n.dot(fs);if(h>=0&&p<=h)return e.copy(r);const m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Jn,o);ds.subVectors(t,s);const d=Jn.dot(ds),_=$n.dot(ds);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector($n,a);const f=h*_-d*p;if(f<=0&&p-h>=0&&d-_>=0)return so.subVectors(s,r),a=(p-h)/(p-h+(d-_)),e.copy(r).addScaledVector(so,a);const u=1/(f+g+m);return o=g*u,a=m*u,e.copy(n).addScaledVector(Jn,o).addScaledVector($n,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ps(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=lu(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ps(o,s,t+1/3),this.g=ps(o,s,t),this.b=ps(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const n=El[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Jt.fromWorkingColorSpace(ve.copy(this),t),Math.round(me(ve.r*255,0,255))*65536+Math.round(me(ve.g*255,0,255))*256+Math.round(me(ve.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,r=ve.g,s=ve.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=fe){Jt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,r=ve.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(rr);const n=ts(un.h,rr.h,e),r=ts(un.s,rr.s,e),s=ts(un.l,rr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new qt;qt.NAMES=El;let bu=0;class bi extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=pi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Is,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Or extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new Y,sr=new St;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return mi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class bl extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wl extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const Ie=new ne,ms=new oe,Qn=new Y,Pe=new Yi,Fi=new Yi,he=new Y;class Fe extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?wl:bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return ms.lookAt(t),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Pe.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Pe.min,Fi.min),Pe.expandByPoint(he),he.addVectors(Pe.max,Fi.max),Pe.expandByPoint(he)):(Pe.expandByPoint(Fi.min),Pe.expandByPoint(Fi.max))}Pe.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)he.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(he));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)he.fromBufferAttribute(a,c),l&&(Qn.fromBufferAttribute(t,c),he.add(Qn)),r=Math.max(r,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new Y,h[w]=new Y;const p=new Y,m=new Y,d=new Y,_=new St,g=new St,f=new St,u=new Y,S=new Y;function y(w,L,R){p.fromArray(r,w*3),m.fromArray(r,L*3),d.fromArray(r,R*3),_.fromArray(o,w*2),g.fromArray(o,L*2),f.fromArray(o,R*2),m.sub(p),d.sub(p),g.sub(_),f.sub(_);const V=1/(g.x*f.y-f.x*g.y);isFinite(V)&&(u.copy(m).multiplyScalar(f.y).addScaledVector(d,-g.y).multiplyScalar(V),S.copy(d).multiplyScalar(g.x).addScaledVector(m,-f.x).multiplyScalar(V),c[w].add(u),c[L].add(u),c[R].add(u),h[w].add(S),h[L].add(S),h[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,L=b.length;w<L;++w){const R=b[w],V=R.start,v=R.count;for(let F=V,J=V+v;F<J;F+=3)y(n[F+0],n[F+1],n[F+2])}const A=new Y,P=new Y,T=new Y,H=new Y;function X(w){T.fromArray(s,w*3),H.copy(T);const L=c[w];A.copy(L),A.sub(T.multiplyScalar(T.dot(L))).normalize(),P.crossVectors(H,L);const V=P.dot(h[w])<0?-1:1;l[w*4]=A.x,l[w*4+1]=A.y,l[w*4+2]=A.z,l[w*4+3]=V}for(let w=0,L=b.length;w<L;++w){const R=b[w],V=R.start,v=R.count;for(let F=V,J=V+v;F<J;F+=3)X(n[F+0]),X(n[F+1]),X(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,d=n.count;m<d;m++)n.setXYZ(m,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,p=new Y;if(t)for(let m=0,d=t.count;m<d;m+=3){const _=t.getX(m+0),g=t.getX(m+1),f=t.getX(m+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,f),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,d=e.count;m<d;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let u=0;u<h;u++)m[_++]=c[d++]}return new We(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const m=c[h],d=t(m,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){const d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let m=0,d=p.length;m<d;m++)h.push(p[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ao=new ne,Tn=new Zs,ar=new Ur,oo=new Y,ti=new Y,ei=new Y,ni=new Y,gs=new Y,or=new Y,lr=new St,cr=new St,ur=new St,lo=new Y,co=new Y,uo=new Y,hr=new Y,fr=new Y;class Te extends oe{constructor(t=new Fe,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(gs.fromBufferAttribute(p,t),o?or.addScaledVector(gs,h):or.addScaledVector(gs.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),Tn.copy(t.ray).recast(t.near),!(ar.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(ar,oo)===null||Tn.origin.distanceToSquared(oo)>(t.far-t.near)**2))&&(ao.copy(s).invert(),Tn.copy(t.ray).applyMatrix4(ao),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],u=o[f.materialIndex],S=Math.max(f.start,d.start),y=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let b=S,A=y;b<A;b+=3){const P=a.getX(b),T=a.getX(b+1),H=a.getX(b+2);r=dr(this,u,t,n,c,h,p,P,T,H),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let f=_,u=g;f<u;f+=3){const S=a.getX(f),y=a.getX(f+1),b=a.getX(f+2);r=dr(this,o,t,n,c,h,p,S,y,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=m.length;_<g;_++){const f=m[_],u=o[f.materialIndex],S=Math.max(f.start,d.start),y=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let b=S,A=y;b<A;b+=3){const P=b,T=b+1,H=b+2;r=dr(this,u,t,n,c,h,p,P,T,H),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=_,u=g;f<u;f+=3){const S=f,y=f+1,b=f+2;r=dr(this,o,t,n,c,h,p,S,y,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Tu(i,t,e,n,r,s,o,a){let l;if(t.side===Ae?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===vn,a),l===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function dr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ti),i.getVertexPosition(l,ei),i.getVertexPosition(c,ni);const h=Tu(i,t,e,n,ti,ei,ni,hr);if(h){r&&(lr.fromBufferAttribute(r,a),cr.fromBufferAttribute(r,l),ur.fromBufferAttribute(r,c),h.uv=Ve.getInterpolation(hr,ti,ei,ni,lr,cr,ur,new St)),s&&(lr.fromBufferAttribute(s,a),cr.fromBufferAttribute(s,l),ur.fromBufferAttribute(s,c),h.uv1=Ve.getInterpolation(hr,ti,ei,ni,lr,cr,ur,new St),h.uv2=h.uv1),o&&(lo.fromBufferAttribute(o,a),co.fromBufferAttribute(o,l),uo.fromBufferAttribute(o,c),h.normal=Ve.getInterpolation(hr,ti,ei,ni,lo,co,uo,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new Y,materialIndex:0};Ve.getNormal(ti,ei,ni,p.normal),h.face=p}return h}class wi extends Fe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let m=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(p,2));function _(g,f,u,S,y,b,A,P,T,H,X){const w=b/T,L=A/H,R=b/2,V=A/2,v=P/2,F=T+1,J=H+1;let j=0,nt=0;const Z=new Y;for(let it=0;it<J;it++){const G=it*L-V;for(let W=0;W<F;W++){const ht=W*w-R;Z[g]=ht*S,Z[f]=G*y,Z[u]=v,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[f]=0,Z[u]=P>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(W/T),p.push(1-it/H),j+=1}}for(let it=0;it<H;it++)for(let G=0;G<T;G++){const W=m+G+F*it,ht=m+G+F*(it+1),K=m+(G+1)+F*(it+1),Q=m+(G+1)+F*it;l.push(W,ht,Q),l.push(ht,K,Q),nt+=6}a.addGroup(d,nt,X),d+=nt,m+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=yi(i[e]);for(const r in n)t[r]=n[r]}return t}function Au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tl(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt.workingColorSpace}const Cu={clone:yi,merge:Se};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Al extends oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hn=new Y,ho=new St,fo=new St;class Ue extends Al{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,ho,fo),e.subVectors(fo,ho)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,ri=1;class Lu extends oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(ii,ri,t,e);r.layers=this.layers,this.add(r);const s=new Ue(ii,ri,t,e);s.layers=this.layers,this.add(s);const o=new Ue(ii,ri,t,e);o.layers=this.layers,this.add(o);const a=new Ue(ii,ri,t,e);a.layers=this.layers,this.add(a);const l=new Ue(ii,ri,t,e);l.layers=this.layers,this.add(l);const c=new Ue(ii,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(p,m,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Cl extends Ee{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Du extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Un?fe:Ne),this.texture=new Cl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:mn});s.uniforms.tEquirect.value=e;const o=new Te(r,s),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=we),new Lu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const _s=new Y,Iu=new Y,Uu=new Yt;class fn{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_s.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uu.getNormalMatrix(t),r=this.coplanarPoint(_s).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Ur,pr=new Y;class Ks{constructor(t=new fn,e=new fn,n=new fn,r=new fn,s=new fn,o=new fn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],p=r[6],m=r[7],d=r[8],_=r[9],g=r[10],f=r[11],u=r[12],S=r[13],y=r[14],b=r[15];if(n[0].setComponents(l-s,m-c,f-d,b-u).normalize(),n[1].setComponents(l+s,m+c,f+d,b+u).normalize(),n[2].setComponents(l+o,m+h,f+_,b+S).normalize(),n[3].setComponents(l-o,m-h,f-_,b-S).normalize(),n[4].setComponents(l-a,m-p,f-g,b-y).normalize(),e===nn)n[5].setComponents(l+a,m+p,f+g,b+y).normalize();else if(e===Pr)n[5].setComponents(a,p,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(pr.x=r.normal.x>0?t.max.x:t.min.x,pr.y=r.normal.y>0?t.max.y:t.min.y,pr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Nu(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,h){const p=c.array,m=c.usage,d=p.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,p,m),c.onUploadCallback();let g;if(p instanceof Float32Array)g=i.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=i.SHORT;else if(p instanceof Uint32Array)g=i.UNSIGNED_INT;else if(p instanceof Int32Array)g=i.INT;else if(p instanceof Int8Array)g=i.BYTE;else if(p instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,p){const m=h.array,d=h._updateRange,_=h.updateRanges;if(i.bindBuffer(p,c),d.count===-1&&_.length===0&&i.bufferSubData(p,0,m),_.length!==0){for(let g=0,f=_.length;g<f;g++){const u=_[g];e?i.bufferSubData(p,u.start*m.BYTES_PER_ELEMENT,m,u.start,u.count):i.bufferSubData(p,u.start*m.BYTES_PER_ELEMENT,m.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(p,d.offset*m.BYTES_PER_ELEMENT,m,d.offset,d.count):i.bufferSubData(p,d.offset*m.BYTES_PER_ELEMENT,m.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const m=n.get(c);(!m||m.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);if(p===void 0)n.set(c,r(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,h),p.version=c.version}}return{get:o,remove:a,update:l}}class kn extends Fe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,p=t/a,m=e/l,d=[],_=[],g=[],f=[];for(let u=0;u<h;u++){const S=u*m-o;for(let y=0;y<c;y++){const b=y*p-s;_.push(b,-S,0),g.push(0,0,1),f.push(y/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){const y=S+c*u,b=S+c*(u+1),A=S+1+c*(u+1),P=S+1+c*u;d.push(y,b,P),d.push(b,A,P)}this.setIndex(d),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",dh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Th=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ed=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Ou,alphahash_pars_fragment:Fu,alphamap_fragment:zu,alphamap_pars_fragment:Bu,alphatest_fragment:ku,alphatest_pars_fragment:Gu,aomap_fragment:Hu,aomap_pars_fragment:Vu,batching_pars_vertex:Wu,batching_vertex:Xu,begin_vertex:Yu,beginnormal_vertex:qu,bsdfs:ju,iridescence_fragment:Zu,bumpmap_pars_fragment:Ku,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:th,color_fragment:eh,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:rh,common:sh,cube_uv_reflection_fragment:ah,defaultnormal_vertex:oh,displacementmap_pars_vertex:lh,displacementmap_vertex:ch,emissivemap_fragment:uh,emissivemap_pars_fragment:hh,colorspace_fragment:fh,colorspace_pars_fragment:dh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Rh,envmap_vertex:vh,fog_vertex:xh,fog_pars_vertex:yh,fog_fragment:Sh,fog_pars_fragment:Mh,gradientmap_pars_fragment:Eh,lightmap_fragment:bh,lightmap_pars_fragment:wh,lights_lambert_fragment:Th,lights_lambert_pars_fragment:Ah,lights_pars_begin:Ch,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Dh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Oh,lights_fragment_maps:Fh,lights_fragment_end:zh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:Hh,map_fragment:Vh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:Yh,metalnessmap_fragment:qh,metalnessmap_pars_fragment:jh,morphcolor_vertex:Zh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Jh,morphtarget_vertex:$h,normal_fragment_begin:Qh,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:nf,normal_vertex:rf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:uf,packing:hf,premultiplied_alpha_fragment:ff,project_vertex:df,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:_f,shadowmap_pars_fragment:vf,shadowmap_pars_vertex:xf,shadowmap_vertex:yf,shadowmask_pars_fragment:Sf,skinbase_vertex:Mf,skinning_pars_vertex:Ef,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Cf,tonemapping_pars_fragment:Rf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:Df,uv_pars_vertex:If,uv_vertex:Uf,worldpos_vertex:Nf,background_vert:Of,background_frag:Ff,backgroundCube_vert:zf,backgroundCube_frag:Bf,cube_vert:kf,cube_frag:Gf,depth_vert:Hf,depth_frag:Vf,distanceRGBA_vert:Wf,distanceRGBA_frag:Xf,equirect_vert:Yf,equirect_frag:qf,linedashed_vert:jf,linedashed_frag:Zf,meshbasic_vert:Kf,meshbasic_frag:Jf,meshlambert_vert:$f,meshlambert_frag:Qf,meshmatcap_vert:td,meshmatcap_frag:ed,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:rd,meshphong_frag:sd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:ud,points_frag:hd,shadow_vert:fd,shadow_frag:dd,sprite_vert:pd,sprite_frag:md},Mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},He={basic:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Se([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Se([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Se([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Se([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Se([Mt.points,Mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Se([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Se([Mt.common,Mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Se([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Se([Mt.sprite,Mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Se([Mt.common,Mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Se([Mt.lights,Mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};He.physical={uniforms:Se([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const mr={r:0,b:0,g:0};function gd(i,t,e,n,r,s,o){const a=new qt(0);let l=s===!0?0:1,c,h,p=null,m=0,d=null;function _(f,u){let S=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=(u.backgroundBlurriness>0?e:t).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Dr)?(h===void 0&&(h=new Te(new wi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:yi(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(y.colorSpace)!==Qt,(p!==y||m!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=y,m=y.version,d=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Te(new kn(2,2),new sn({name:"BackgroundMaterial",uniforms:yi(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,p=y,m=y.version,d=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,u){f.getRGB(mr,Tl(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:_}}function _d(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function p(v,F,J,j,nt){let Z=!1;if(o){const it=g(j,J,F);c!==it&&(c=it,d(c.object)),Z=u(v,j,J,nt),Z&&S(v,j,J,nt)}else{const it=F.wireframe===!0;(c.geometry!==j.id||c.program!==J.id||c.wireframe!==it)&&(c.geometry=j.id,c.program=J.id,c.wireframe=it,Z=!0)}nt!==null&&e.update(nt,i.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,H(v,F,J,j),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(v){return n.isWebGL2?i.bindVertexArray(v):s.bindVertexArrayOES(v)}function _(v){return n.isWebGL2?i.deleteVertexArray(v):s.deleteVertexArrayOES(v)}function g(v,F,J){const j=J.wireframe===!0;let nt=a[v.id];nt===void 0&&(nt={},a[v.id]=nt);let Z=nt[F.id];Z===void 0&&(Z={},nt[F.id]=Z);let it=Z[j];return it===void 0&&(it=f(m()),Z[j]=it),it}function f(v){const F=[],J=[],j=[];for(let nt=0;nt<r;nt++)F[nt]=0,J[nt]=0,j[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:j,object:v,attributes:{},index:null}}function u(v,F,J,j){const nt=c.attributes,Z=F.attributes;let it=0;const G=J.getAttributes();for(const W in G)if(G[W].location>=0){const K=nt[W];let Q=Z[W];if(Q===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;it++}return c.attributesNum!==it||c.index!==j}function S(v,F,J,j){const nt={},Z=F.attributes;let it=0;const G=J.getAttributes();for(const W in G)if(G[W].location>=0){let K=Z[W];K===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(K=v.instanceColor));const Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),nt[W]=Q,it++}c.attributes=nt,c.attributesNum=it,c.index=j}function y(){const v=c.newAttributes;for(let F=0,J=v.length;F<J;F++)v[F]=0}function b(v){A(v,0)}function A(v,F){const J=c.newAttributes,j=c.enabledAttributes,nt=c.attributeDivisors;J[v]=1,j[v]===0&&(i.enableVertexAttribArray(v),j[v]=1),nt[v]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,F),nt[v]=F)}function P(){const v=c.newAttributes,F=c.enabledAttributes;for(let J=0,j=F.length;J<j;J++)F[J]!==v[J]&&(i.disableVertexAttribArray(J),F[J]=0)}function T(v,F,J,j,nt,Z,it){it===!0?i.vertexAttribIPointer(v,F,J,nt,Z):i.vertexAttribPointer(v,F,J,j,nt,Z)}function H(v,F,J,j){if(n.isWebGL2===!1&&(v.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const nt=j.attributes,Z=J.getAttributes(),it=F.defaultAttributeValues;for(const G in Z){const W=Z[G];if(W.location>=0){let ht=nt[G];if(ht===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const K=ht.normalized,Q=ht.itemSize,xt=e.get(ht);if(xt===void 0)continue;const Et=xt.buffer,vt=xt.type,gt=xt.bytesPerElement,Rt=n.isWebGL2===!0&&(vt===i.INT||vt===i.UNSIGNED_INT||ht.gpuType===ll);if(ht.isInterleavedBufferAttribute){const bt=ht.data,B=bt.stride,pt=ht.offset;if(bt.isInstancedInterleavedBuffer){for(let x=0;x<W.locationSize;x++)A(W.location+x,bt.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let x=0;x<W.locationSize;x++)b(W.location+x);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let x=0;x<W.locationSize;x++)T(W.location+x,Q/W.locationSize,vt,K,B*gt,(pt+Q/W.locationSize*x)*gt,Rt)}else{if(ht.isInstancedBufferAttribute){for(let bt=0;bt<W.locationSize;bt++)A(W.location+bt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let bt=0;bt<W.locationSize;bt++)b(W.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let bt=0;bt<W.locationSize;bt++)T(W.location+bt,Q/W.locationSize,vt,K,Q*gt,Q/W.locationSize*bt*gt,Rt)}}else if(it!==void 0){const K=it[G];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(W.location,K);break;case 3:i.vertexAttrib3fv(W.location,K);break;case 4:i.vertexAttrib4fv(W.location,K);break;default:i.vertexAttrib1fv(W.location,K)}}}}P()}function X(){R();for(const v in a){const F=a[v];for(const J in F){const j=F[J];for(const nt in j)_(j[nt].object),delete j[nt];delete F[J]}delete a[v]}}function w(v){if(a[v.id]===void 0)return;const F=a[v.id];for(const J in F){const j=F[J];for(const nt in j)_(j[nt].object),delete j[nt];delete F[J]}delete a[v.id]}function L(v){for(const F in a){const J=a[F];if(J[v.id]===void 0)continue;const j=J[v.id];for(const nt in j)_(j[nt].object),delete j[nt];delete J[v.id]}}function R(){V(),h=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:R,resetDefaultState:V,dispose:X,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:b,disableUnusedAttributes:P}}function vd(i,t,e,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,p){i.drawArrays(s,h,p),e.update(p,s,1)}function l(h,p,m){if(m===0)return;let d,_;if(r)d=i,_="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,h,p,m),e.update(p,s,m)}function c(h,p,m){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<m;_++)this.render(h[_],p[_]);else{d.multiDrawArraysWEBGL(s,h,0,p,0,m);let _=0;for(let g=0;g<m;g++)_+=p[g];e.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xd(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,b=o||t.has("OES_texture_float"),A=y&&b,P=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:P}}function yd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const d=p.length!==0||m||n!==0||r;return r=m,n=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=h(p,m,0)},this.setState=function(p,m,d){const _=p.clippingPlanes,g=p.clipIntersection,f=p.clipShadows,u=i.get(p);if(!r||_===null||_.length===0||s&&!f)s?h(null):c();else{const S=s?0:n,y=S*4;let b=u.clippingState||null;l.value=b,b=h(_,m,y,d);for(let A=0;A!==y;++A)b[A]=e[A];u.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,m,d,_){const g=p!==null?p.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const u=d+g*4,S=m.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let y=0,b=d;y!==g;++y,b+=4)o.copy(p[y]).applyMatrix4(S,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function Sd(i){let t=new WeakMap;function e(o,a){return a===Us?o.mapping=_i:a===Ns&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Us||a===Ns)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Du(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Pl extends Al{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,po=[.125,.215,.35,.446,.526,.582],Pn=20,vs=new Pl,mo=new qt;let xs=null,ys=0,Ss=0;const Cn=(1+Math.sqrt(5))/2,si=1/Cn,go=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Cn,si),new Y(0,Cn,-si),new Y(si,0,Cn),new Y(-si,0,Cn),new Y(Cn,si,0),new Y(-Cn,si,0)];class _o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xs,ys,Ss),t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:Hi,format:Ge,colorSpace:rn,depthBuffer:!1},r=vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(s)),this._blurMaterial=Ed(s,t,e)}return r}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,n,r){const a=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(mo),h.toneMapping=gn,h.autoClear=!1;const d=new Or({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),_=new Te(new wi,d);let g=!1;const f=t.background;f?f.isColor&&(d.color.copy(f),t.background=null,g=!0):(d.color.copy(mo),g=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):S===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const y=this._cubeSize;gr(r,S*y,u>2?y:0,y,y),h.setRenderTarget(r),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=m,h.autoClear=p,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===_i||t.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=go[(r-1)%go.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Te(this._lodPlanes[r],c),m=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pn-1),g=s/_,f=isFinite(s)?1+Math.floor(h*g):Pn;f>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`);const u=[];let S=0;for(let T=0;T<Pn;++T){const H=T/g,X=Math.exp(-H*H/2);u.push(X),T===0?S+=X:T<f&&(S+=2*X)}for(let T=0;T<u.length;T++)u[T]=u[T]/S;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=u,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:y}=this;m.dTheta.value=_,m.mipInt.value=y-n;const b=this._sizeLods[r],A=3*b*(r>y-ci?r-y+ci:0),P=4*(this._cubeSize-b);gr(e,A,P,3*b,2*b),l.setRenderTarget(e),l.render(p,vs)}}function Md(i){const t=[],e=[],n=[];let r=i;const s=i-ci+1+po.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ci?l=po[o-i+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,_=6,g=3,f=2,u=1,S=new Float32Array(g*_*d),y=new Float32Array(f*_*d),b=new Float32Array(u*_*d);for(let P=0;P<d;P++){const T=P%3*2/3-1,H=P>2?0:-1,X=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];S.set(X,g*_*P),y.set(m,f*_*P);const w=[P,P,P,P,P,P];b.set(w,u*_*P)}const A=new Fe;A.setAttribute("position",new We(S,g)),A.setAttribute("uv",new We(y,f)),A.setAttribute("faceIndex",new We(b,u)),t.push(A),r>ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vo(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ed(i,t,e){const n=new Float32Array(Pn),r=new Y(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function xo(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function yo(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Us||l===Ns,h=l===_i||l===vi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=t.get(a);return e===null&&(e=new _o(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),t.set(a,p),p.texture}else{if(t.has(a))return t.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||h&&p&&r(p)){e===null&&(e=new _o(i));const m=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Td(i,t,e,n){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const _ in m.attributes)t.remove(m.attributes[_]);for(const _ in m.morphAttributes){const g=m.morphAttributes[_];for(let f=0,u=g.length;f<u;f++)t.remove(g[f])}m.removeEventListener("dispose",o),delete r[m.id];const d=s.get(m);d&&(t.remove(d),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const _ in m)t.update(m[_],i.ARRAY_BUFFER);const d=p.morphAttributes;for(const _ in d){const g=d[_];for(let f=0,u=g.length;f<u;f++)t.update(g[f],i.ARRAY_BUFFER)}}function c(p){const m=[],d=p.index,_=p.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,b=S.length;y<b;y+=3){const A=S[y+0],P=S[y+1],T=S[y+2];m.push(A,P,P,T,T,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const A=y+0,P=y+1,T=y+2;m.push(A,P,P,T,T,A)}}else return;const f=new(vl(m)?wl:bl)(m,1);f.version=g;const u=s.get(p);u&&t.remove(u),s.set(p,f)}function h(p){const m=s.get(p);if(m){const d=p.index;d!==null&&m.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Ad(i,t,e,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,_){i.drawElements(s,_,a,d*l),e.update(_,s,1)}function p(d,_,g){if(g===0)return;let f,u;if(r)f=i,u="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,_,a,d*l,g),e.update(_,s,g)}function m(d,_,g){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<g;u++)this.render(d[u]/l,_[u]);else{f.multiDrawElementsWEBGL(s,_,0,a,d,0,g);let u=0;for(let S=0;S<g;S++)u+=_[S];e.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function Cd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Rd(i,t){return i[0]-t[0]}function Pd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ld(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new de,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,p){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let f=s.get(h);if(f===void 0||f.count!==g){let F=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var d=F;f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let X=0;y===!0&&(X=1),b===!0&&(X=2),A===!0&&(X=3);let w=h.attributes.position.count*X,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*L*4*g),V=new Sl(R,w,L,g);V.type=en,V.needsUpdate=!0;const v=X*4;for(let J=0;J<g;J++){const j=P[J],nt=T[J],Z=H[J],it=w*L*4*J;for(let G=0;G<j.count;G++){const W=G*v;y===!0&&(o.fromBufferAttribute(j,G),R[it+W+0]=o.x,R[it+W+1]=o.y,R[it+W+2]=o.z,R[it+W+3]=0),b===!0&&(o.fromBufferAttribute(nt,G),R[it+W+4]=o.x,R[it+W+5]=o.y,R[it+W+6]=o.z,R[it+W+7]=0),A===!0&&(o.fromBufferAttribute(Z,G),R[it+W+8]=o.x,R[it+W+9]=o.y,R[it+W+10]=o.z,R[it+W+11]=Z.itemSize===4?o.w:1)}}f={count:g,texture:V,size:new St(w,L)},s.set(h,f),h.addEventListener("dispose",F)}let u=0;for(let y=0;y<m.length;y++)u+=m[y];const S=h.morphTargetsRelative?1:1-u;p.getUniforms().setValue(i,"morphTargetBaseInfluence",S),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),p.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[h.id]=g}for(let b=0;b<_;b++){const A=g[b];A[0]=b,A[1]=m[b]}g.sort(Pd);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Rd);const f=h.morphAttributes.position,u=h.morphAttributes.normal;let S=0;for(let b=0;b<8;b++){const A=a[b],P=A[0],T=A[1];P!==Number.MAX_SAFE_INTEGER&&T?(f&&h.getAttribute("morphTarget"+b)!==f[P]&&h.setAttribute("morphTarget"+b,f[P]),u&&h.getAttribute("morphNormal"+b)!==u[P]&&h.setAttribute("morphNormal"+b,u[P]),r[b]=T,S+=T):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),u&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const y=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(i,"morphTargetBaseInfluence",y),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Dd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,p=t.get(l,h);if(r.get(p)!==c&&(t.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Ll extends Ee{constructor(t,e,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:In,h!==In&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=dn),n===void 0&&h===xi&&(n=Dn),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dl=new Ee,Il=new Ll(1,1);Il.compareFunction=_l;const Ul=new Sl,Nl=new mu,Ol=new Cl,So=[],Mo=[],Eo=new Float32Array(16),bo=new Float32Array(9),wo=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=So[r];if(s===void 0&&(s=new Float32Array(r),So[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=Mo[t];e===void 0&&(e=new Int32Array(t),Mo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Id(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;wo.set(n),i.uniformMatrix2fv(this.addr,!1,wo),ce(e,n)}}function zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),ce(e,n)}}function Bd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Eo.set(n),i.uniformMatrix4fv(this.addr,!1,Eo),ce(e,n)}}function kd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Wd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Il:Dl;e.setTexture2D(t||s,r)}function Zd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Nl,r)}function Kd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ol,r)}function Jd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ul,r)}function $d(i){switch(i){case 5126:return Id;case 35664:return Ud;case 35665:return Nd;case 35666:return Od;case 35674:return Fd;case 35675:return zd;case 35676:return Bd;case 5124:case 35670:return kd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return Vd;case 5125:return Wd;case 36294:return Xd;case 36295:return Yd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Zd;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Jd}}function Qd(i,t){i.uniform1fv(this.addr,t)}function tp(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function ep(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function np(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function ip(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rp(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sp(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ap(i,t){i.uniform1iv(this.addr,t)}function op(i,t){i.uniform2iv(this.addr,t)}function lp(i,t){i.uniform3iv(this.addr,t)}function cp(i,t){i.uniform4iv(this.addr,t)}function up(i,t){i.uniform1uiv(this.addr,t)}function hp(i,t){i.uniform2uiv(this.addr,t)}function fp(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function pp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Dl,s[o])}function mp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Nl,s[o])}function gp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ol,s[o])}function _p(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ul,s[o])}function vp(i){switch(i){case 5126:return Qd;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return rp;case 35676:return sp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return up;case 36294:return hp;case 36295:return fp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$d(e.type)}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vp(e.type)}}class Sp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function To(i,t){i.seq.push(t),i.map[t.id]=t}function Mp(i,t,e){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),o=Ms.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){To(e,c===void 0?new xp(a,i,t):new yp(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Sp(a),To(e,p)),e=p}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Mp(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ao(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ep=37297;let bp=0;function wp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Tp(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===Rr&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Rr&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case Ir:return[n,"LinearTransferOETF"];case fe:case js:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Co(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+wp(i.getShaderSource(t),o)}else return r}function Ap(i,t){const e=Tp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Cp(i,t){let e;switch(t){case zc:e="Linear";break;case Bc:e="Reinhard";break;case kc:e="OptimizedCineon";break;case Gc:e="ACESFilmic";break;case Vc:e="AgX";break;case Hc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function Pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ui).join(`
`)}function Lp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ui(i){return i!==""}function Ro(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Po(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(i){return i.replace(Ip,Np)}const Up=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Np(i,t){let e=Vt[t];if(e===void 0){const n=Up.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gs(e)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(i){return i.replace(Op,Fp)}function Fp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Do(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function Bp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case Fc:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zp(e),c=Bp(e),h=kp(e),p=Gp(e),m=Hp(e),d=e.isWebGL2?"":Rp(e),_=Pp(e),g=Lp(s),f=r.createProgram();let u,S,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ui).join(`
`),u.length>0&&(u+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ui).join(`
`),S.length>0&&(S+=`
`)):(u=[Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),S=[d,Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==gn?Cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ap("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),o=Gs(o),o=Ro(o,e),o=Po(o,e),a=Gs(a),a=Ro(a,e),a=Po(a,e),o=Lo(o),a=Lo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=y+u+o,A=y+S+a,P=Ao(r,r.VERTEX_SHADER,b),T=Ao(r,r.FRAGMENT_SHADER,A);r.attachShader(f,P),r.attachShader(f,T),e.index0AttributeName!==void 0?r.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function H(R){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(f).trim(),v=r.getShaderInfoLog(P).trim(),F=r.getShaderInfoLog(T).trim();let J=!0,j=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,P,T);else{const nt=Co(r,P,"vertex"),Z=Co(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+nt+`
`+Z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(v===""||F==="")&&(j=!1);j&&(R.diagnostics={runnable:J,programLog:V,vertexShader:{log:v,prefix:u},fragmentShader:{log:F,prefix:S}})}r.deleteShader(P),r.deleteShader(T),X=new wr(r,f),w=Dp(r,f)}let X;this.getUniforms=function(){return X===void 0&&H(this),X};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(f,Ep)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=P,this.fragmentShader=T,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yp(t),e.set(t,n)),n}}class Yp{constructor(t){this.id=Wp++,this.code=t,this.usedTimes=0}}function qp(i,t,e,n,r,s,o){const a=new Ml,l=new Xp,c=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w){return c.add(w),w===0?"uv":`uv${w}`}function u(w,L,R,V,v){const F=V.fog,J=v.geometry,j=w.isMeshStandardMaterial?V.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||j),Z=nt&&nt.mapping===Dr?nt.image.height:null,it=g[w.type];w.precision!==null&&(_=r.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const G=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,W=G!==void 0?G.length:0;let ht=0;J.morphAttributes.position!==void 0&&(ht=1),J.morphAttributes.normal!==void 0&&(ht=2),J.morphAttributes.color!==void 0&&(ht=3);let K,Q,xt,Et;if(it){const jt=He[it];K=jt.vertexShader,Q=jt.fragmentShader}else K=w.vertexShader,Q=w.fragmentShader,l.update(w),xt=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);const vt=i.getRenderTarget(),gt=v.isInstancedMesh===!0,Rt=v.isBatchedMesh===!0,bt=!!w.map,B=!!w.matcap,pt=!!nt,x=!!w.aoMap,q=!!w.lightMap,z=!!w.bumpMap,D=!!w.normalMap,C=!!w.displacementMap,M=!!w.emissiveMap,E=!!w.metalnessMap,U=!!w.roughnessMap,O=w.anisotropy>0,$=w.clearcoat>0,tt=w.iridescence>0,rt=w.sheen>0,lt=w.transmission>0,mt=O&&!!w.anisotropyMap,yt=$&&!!w.clearcoatMap,Dt=$&&!!w.clearcoatNormalMap,ut=$&&!!w.clearcoatRoughnessMap,zt=tt&&!!w.iridescenceMap,Bt=tt&&!!w.iridescenceThicknessMap,At=rt&&!!w.sheenColorMap,Pt=rt&&!!w.sheenRoughnessMap,Tt=!!w.specularMap,Ot=!!w.specularColorMap,k=!!w.specularIntensityMap,_t=lt&&!!w.transmissionMap,wt=lt&&!!w.thicknessMap,It=!!w.gradientMap,N=!!w.alphaMap,dt=w.alphaTest>0,ft=!!w.alphaHash,Lt=!!w.extensions;let Nt=gn;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const Zt={isWebGL2:p,shaderID:it,shaderType:w.type,shaderName:w.name,vertexShader:K,fragmentShader:Q,defines:w.defines,customVertexShaderID:xt,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Rt,instancing:gt,instancingColor:gt&&v.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:rn,alphaToCoverage:!!w.alphaToCoverage,map:bt,matcap:B,envMap:pt,envMapMode:pt&&nt.mapping,envMapCubeUVHeight:Z,aoMap:x,lightMap:q,bumpMap:z,normalMap:D,displacementMap:d&&C,emissiveMap:M,normalMapObjectSpace:D&&w.normalMapType===tu,normalMapTangentSpace:D&&w.normalMapType===gl,metalnessMap:E,roughnessMap:U,anisotropy:O,anisotropyMap:mt,clearcoat:$,clearcoatMap:yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ut,iridescence:tt,iridescenceMap:zt,iridescenceThicknessMap:Bt,sheen:rt,sheenColorMap:At,sheenRoughnessMap:Pt,specularMap:Tt,specularColorMap:Ot,specularIntensityMap:k,transmission:lt,transmissionMap:_t,thicknessMap:wt,gradientMap:It,opaque:w.transparent===!1&&w.blending===pi&&w.alphaToCoverage===!1,alphaMap:N,alphaTest:dt,alphaHash:ft,combine:w.combine,mapUv:bt&&f(w.map.channel),aoMapUv:x&&f(w.aoMap.channel),lightMapUv:q&&f(w.lightMap.channel),bumpMapUv:z&&f(w.bumpMap.channel),normalMapUv:D&&f(w.normalMap.channel),displacementMapUv:C&&f(w.displacementMap.channel),emissiveMapUv:M&&f(w.emissiveMap.channel),metalnessMapUv:E&&f(w.metalnessMap.channel),roughnessMapUv:U&&f(w.roughnessMap.channel),anisotropyMapUv:mt&&f(w.anisotropyMap.channel),clearcoatMapUv:yt&&f(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&f(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&f(w.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&f(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&f(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&f(w.sheenRoughnessMap.channel),specularMapUv:Tt&&f(w.specularMap.channel),specularColorMapUv:Ot&&f(w.specularColorMap.channel),specularIntensityMapUv:k&&f(w.specularIntensityMap.channel),transmissionMapUv:_t&&f(w.transmissionMap.channel),thicknessMapUv:wt&&f(w.thicknessMap.channel),alphaMapUv:N&&f(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(D||O),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!J.attributes.uv&&(bt||N),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:v.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ht,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===Qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===Ae,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Lt&&w.extensions.derivatives===!0,extensionFragDepth:Lt&&w.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)L.push(R),L.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(L,w),b(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function b(w,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),w.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),w.push(a.mask)}function A(w){const L=g[w.type];let R;if(L){const V=He[L];R=Cu.clone(V.uniforms)}else R=w.uniforms;return R}function P(w,L){let R;for(let V=0,v=h.length;V<v;V++){const F=h[V];if(F.cacheKey===L){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Vp(i,L,w,s),h.push(R)),R}function T(w){if(--w.usedTimes===0){const L=h.indexOf(w);h[L]=h[h.length-1],h.pop(),w.destroy()}}function H(w){l.remove(w)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:S,getUniforms:A,acquireProgram:P,releaseProgram:T,releaseShaderCache:H,programs:h,dispose:X}}function jp(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Io(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,m,d,_,g,f){let u=i[t];return u===void 0?(u={id:p.id,object:p,geometry:m,material:d,groupOrder:_,renderOrder:p.renderOrder,z:g,group:f},i[t]=u):(u.id=p.id,u.object=p,u.geometry=m,u.material=d,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=g,u.group=f),t++,u}function a(p,m,d,_,g,f){const u=o(p,m,d,_,g,f);d.transmission>0?n.push(u):d.transparent===!0?r.push(u):e.push(u)}function l(p,m,d,_,g,f){const u=o(p,m,d,_,g,f);d.transmission>0?n.unshift(u):d.transparent===!0?r.unshift(u):e.unshift(u)}function c(p,m){e.length>1&&e.sort(p||Zp),n.length>1&&n.sort(m||Io),r.length>1&&r.sort(m||Io)}function h(){for(let p=t,m=i.length;p<m;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Kp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Uo,i.set(n,[o])):r>=s.length?(o=new Uo,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new qt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function $p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qp=0;function tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function em(i,t){const e=new Jp,n=$p(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Y);const s=new Y,o=new ne,a=new ne;function l(h,p){let m=0,d=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let g=0,f=0,u=0,S=0,y=0,b=0,A=0,P=0,T=0,H=0,X=0;h.sort(tm);const w=p===!0?Math.PI:1;for(let R=0,V=h.length;R<V;R++){const v=h[R],F=v.color,J=v.intensity,j=v.distance,nt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)m+=F.r*J*w,d+=F.g*J*w,_+=F.b*J*w;else if(v.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(v.sh.coefficients[Z],J);X++}else if(v.isDirectionalLight){const Z=e.get(v);if(Z.color.copy(v.color).multiplyScalar(v.intensity*w),v.castShadow){const it=v.shadow,G=n.get(v);G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=nt,r.directionalShadowMatrix[g]=v.shadow.matrix,b++}r.directional[g]=Z,g++}else if(v.isSpotLight){const Z=e.get(v);Z.position.setFromMatrixPosition(v.matrixWorld),Z.color.copy(F).multiplyScalar(J*w),Z.distance=j,Z.coneCos=Math.cos(v.angle),Z.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),Z.decay=v.decay,r.spot[u]=Z;const it=v.shadow;if(v.map&&(r.spotLightMap[T]=v.map,T++,it.updateMatrices(v),v.castShadow&&H++),r.spotLightMatrix[u]=it.matrix,v.castShadow){const G=n.get(v);G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,r.spotShadow[u]=G,r.spotShadowMap[u]=nt,P++}u++}else if(v.isRectAreaLight){const Z=e.get(v);Z.color.copy(F).multiplyScalar(J),Z.halfWidth.set(v.width*.5,0,0),Z.halfHeight.set(0,v.height*.5,0),r.rectArea[S]=Z,S++}else if(v.isPointLight){const Z=e.get(v);if(Z.color.copy(v.color).multiplyScalar(v.intensity*w),Z.distance=v.distance,Z.decay=v.decay,v.castShadow){const it=v.shadow,G=n.get(v);G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,r.pointShadow[f]=G,r.pointShadowMap[f]=nt,r.pointShadowMatrix[f]=v.shadow.matrix,A++}r.point[f]=Z,f++}else if(v.isHemisphereLight){const Z=e.get(v);Z.skyColor.copy(v.color).multiplyScalar(J*w),Z.groundColor.copy(v.groundColor).multiplyScalar(J*w),r.hemi[y]=Z,y++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=d,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==g||L.pointLength!==f||L.spotLength!==u||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==b||L.numPointShadows!==A||L.numSpotShadows!==P||L.numSpotMaps!==T||L.numLightProbes!==X)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=S,r.point.length=f,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+T-H,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=X,L.directionalLength=g,L.pointLength=f,L.spotLength=u,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=b,L.numPointShadows=A,L.numSpotShadows=P,L.numSpotMaps=T,L.numLightProbes=X,r.version=Qp++)}function c(h,p){let m=0,d=0,_=0,g=0,f=0;const u=p.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const b=h[S];if(b.isDirectionalLight){const A=r.directional[m];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),m++}else if(b.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(b.isRectAreaLight){const A=r.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const A=r.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(u),d++}else if(b.isHemisphereLight){const A=r.hemi[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function No(i,t){const e=new em(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(p){n.push(p)}function a(p){r.push(p)}function l(p){e.setup(n,p)}function c(p){e.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nm(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new No(i,t),e.set(s,[l])):o>=a.length?(l=new No(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class im extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,t,e){let n=new Ks;const r=new St,s=new St,o=new de,a=new im({depthPacking:Qc}),l=new rm,c={},h=e.maxTextureSize,p={[vn]:Ae,[Ae]:vn,[tn]:tn},m=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:sm,fragmentShader:am}),d=m.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Te(_,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let u=this.type;this.render=function(P,T,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const X=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),R=i.state;R.setBlending(mn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const V=u!==Qe&&this.type===Qe,v=u===Qe&&this.type!==Qe;for(let F=0,J=P.length;F<J;F++){const j=P[F],nt=j.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const Z=nt.getFrameExtents();if(r.multiply(Z),s.copy(nt.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,nt.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,nt.mapSize.y=s.y)),nt.map===null||V===!0||v===!0){const G=this.type!==Qe?{minFilter:Me,magFilter:Me}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Nn(r.x,r.y,G),nt.map.texture.name=j.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const it=nt.getViewportCount();for(let G=0;G<it;G++){const W=nt.getViewport(G);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),R.viewport(o),nt.updateMatrices(j,G),n=nt.getFrustum(),b(T,H,nt.camera,j,this.type)}nt.isPointLightShadow!==!0&&this.type===Qe&&S(nt,H),nt.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(X,w,L)};function S(P,T){const H=t.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Nn(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,H,m,g,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,H,d,g,null)}function y(P,T,H,X){let w=null;const L=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)w=L;else if(w=H.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const R=w.uuid,V=T.uuid;let v=c[R];v===void 0&&(v={},c[R]=v);let F=v[V];F===void 0&&(F=w.clone(),v[V]=F,T.addEventListener("dispose",A)),w=F}if(w.visible=T.visible,w.wireframe=T.wireframe,X===Qe?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:p[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=i.properties.get(w);R.light=H}return w}function b(P,T,H,X,w){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Qe)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const V=t.update(P),v=P.material;if(Array.isArray(v)){const F=V.groups;for(let J=0,j=F.length;J<j;J++){const nt=F[J],Z=v[nt.materialIndex];if(Z&&Z.visible){const it=y(P,Z,X,w);P.onBeforeShadow(i,P,T,H,V,it,nt),i.renderBufferDirect(H,null,V,it,P,nt),P.onAfterShadow(i,P,T,H,V,it,nt)}}}else if(v.visible){const F=y(P,v,X,w);P.onBeforeShadow(i,P,T,H,V,F,null),i.renderBufferDirect(H,null,V,F,P,null),P.onAfterShadow(i,P,T,H,V,F,null)}}const R=P.children;for(let V=0,v=R.length;V<v;V++)b(R[V],T,H,X,w)}function A(P){P.target.removeEventListener("dispose",A);for(const H in c){const X=c[H],w=P.target.uuid;w in X&&(X[w].dispose(),delete X[w])}}}function lm(i,t,e){const n=e.isWebGL2;function r(){let N=!1;const dt=new de;let ft=null;const Lt=new de(0,0,0,0);return{setMask:function(Nt){ft!==Nt&&!N&&(i.colorMask(Nt,Nt,Nt,Nt),ft=Nt)},setLocked:function(Nt){N=Nt},setClear:function(Nt,Zt,jt,$t,pe){pe===!0&&(Nt*=$t,Zt*=$t,jt*=$t),dt.set(Nt,Zt,jt,$t),Lt.equals(dt)===!1&&(i.clearColor(Nt,Zt,jt,$t),Lt.copy(dt))},reset:function(){N=!1,ft=null,Lt.set(-1,0,0,0)}}}function s(){let N=!1,dt=null,ft=null,Lt=null;return{setTest:function(Nt){Nt?gt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Nt){dt!==Nt&&!N&&(i.depthMask(Nt),dt=Nt)},setFunc:function(Nt){if(ft!==Nt){switch(Nt){case Rc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Nt}},setLocked:function(Nt){N=Nt},setClear:function(Nt){Lt!==Nt&&(i.clearDepth(Nt),Lt=Nt)},reset:function(){N=!1,dt=null,ft=null,Lt=null}}}function o(){let N=!1,dt=null,ft=null,Lt=null,Nt=null,Zt=null,jt=null,$t=null,pe=null;return{setTest:function(Kt){N||(Kt?gt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Kt){dt!==Kt&&!N&&(i.stencilMask(Kt),dt=Kt)},setFunc:function(Kt,re,ye){(ft!==Kt||Lt!==re||Nt!==ye)&&(i.stencilFunc(Kt,re,ye),ft=Kt,Lt=re,Nt=ye)},setOp:function(Kt,re,ye){(Zt!==Kt||jt!==re||$t!==ye)&&(i.stencilOp(Kt,re,ye),Zt=Kt,jt=re,$t=ye)},setLocked:function(Kt){N=Kt},setClear:function(Kt){pe!==Kt&&(i.clearStencil(Kt),pe=Kt)},reset:function(){N=!1,dt=null,ft=null,Lt=null,Nt=null,Zt=null,jt=null,$t=null,pe=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,p=new WeakMap;let m={},d={},_=new WeakMap,g=[],f=null,u=!1,S=null,y=null,b=null,A=null,P=null,T=null,H=null,X=new qt(0,0,0),w=0,L=!1,R=null,V=null,v=null,F=null,J=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,Z=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(it)[1]),nt=Z>=1):it.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),nt=Z>=2);let G=null,W={};const ht=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Q=new de().fromArray(ht),xt=new de().fromArray(K);function Et(N,dt,ft,Lt){const Nt=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(N,Zt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<ft;jt++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(dt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(dt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Zt}const vt={};vt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(vt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(i.DEPTH_TEST),l.setFunc(Tr),C(!1),M(da),gt(i.CULL_FACE),z(mn);function gt(N){m[N]!==!0&&(i.enable(N),m[N]=!0)}function Rt(N){m[N]!==!1&&(i.disable(N),m[N]=!1)}function bt(N,dt){return d[N]!==dt?(i.bindFramebuffer(N,dt),d[N]=dt,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt)),!0):!1}function B(N,dt){let ft=g,Lt=!1;if(N)if(ft=_.get(dt),ft===void 0&&(ft=[],_.set(dt,ft)),N.isWebGLMultipleRenderTargets){const Nt=N.texture;if(ft.length!==Nt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,jt=Nt.length;Zt<jt;Zt++)ft[Zt]=i.COLOR_ATTACHMENT0+Zt;ft.length=Nt.length,Lt=!0}}else ft[0]!==i.COLOR_ATTACHMENT0&&(ft[0]=i.COLOR_ATTACHMENT0,Lt=!0);else ft[0]!==i.BACK&&(ft[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function pt(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const x={[Rn]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};if(n)x[_a]=i.MIN,x[va]=i.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(x[_a]=N.MIN_EXT,x[va]=N.MAX_EXT)}const q={[gc]:i.ZERO,[_c]:i.ONE,[vc]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[Mc]:i.DST_COLOR,[yc]:i.DST_ALPHA,[xc]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Tc]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function z(N,dt,ft,Lt,Nt,Zt,jt,$t,pe,Kt){if(N===mn){u===!0&&(Rt(i.BLEND),u=!1);return}if(u===!1&&(gt(i.BLEND),u=!0),N!==dc){if(N!==S||Kt!==L){if((y!==Rn||P!==Rn)&&(i.blendEquation(i.FUNC_ADD),y=Rn,P=Rn),Kt)switch(N){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,A=null,T=null,H=null,X.set(0,0,0),w=0,S=N,L=Kt}return}Nt=Nt||dt,Zt=Zt||ft,jt=jt||Lt,(dt!==y||Nt!==P)&&(i.blendEquationSeparate(x[dt],x[Nt]),y=dt,P=Nt),(ft!==b||Lt!==A||Zt!==T||jt!==H)&&(i.blendFuncSeparate(q[ft],q[Lt],q[Zt],q[jt]),b=ft,A=Lt,T=Zt,H=jt),($t.equals(X)===!1||pe!==w)&&(i.blendColor($t.r,$t.g,$t.b,pe),X.copy($t),w=pe),S=N,L=!1}function D(N,dt){N.side===tn?Rt(i.CULL_FACE):gt(i.CULL_FACE);let ft=N.side===Ae;dt&&(ft=!ft),C(ft),N.blending===pi&&N.transparent===!1?z(mn):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Lt=N.stencilWrite;c.setTest(Lt),Lt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),U(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function C(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function M(N){N!==uc?(gt(i.CULL_FACE),N!==V&&(N===da?i.cullFace(i.BACK):N===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),V=N}function E(N){N!==v&&(nt&&i.lineWidth(N),v=N)}function U(N,dt,ft){N?(gt(i.POLYGON_OFFSET_FILL),(F!==dt||J!==ft)&&(i.polygonOffset(dt,ft),F=dt,J=ft)):Rt(i.POLYGON_OFFSET_FILL)}function O(N){N?gt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function $(N){N===void 0&&(N=i.TEXTURE0+j-1),G!==N&&(i.activeTexture(N),G=N)}function tt(N,dt,ft){ft===void 0&&(G===null?ft=i.TEXTURE0+j-1:ft=G);let Lt=W[ft];Lt===void 0&&(Lt={type:void 0,texture:void 0},W[ft]=Lt),(Lt.type!==N||Lt.texture!==dt)&&(G!==ft&&(i.activeTexture(ft),G=ft),i.bindTexture(N,dt||vt[N]),Lt.type=N,Lt.texture=dt)}function rt(){const N=W[G];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){Q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function k(N){xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function _t(N,dt){let ft=p.get(dt);ft===void 0&&(ft=new WeakMap,p.set(dt,ft));let Lt=ft.get(N);Lt===void 0&&(Lt=i.getUniformBlockIndex(dt,N.name),ft.set(N,Lt))}function wt(N,dt){const Lt=p.get(dt).get(N);h.get(dt)!==Lt&&(i.uniformBlockBinding(dt,Lt,N.__bindingPointIndex),h.set(dt,Lt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},G=null,W={},d={},_=new WeakMap,g=[],f=null,u=!1,S=null,y=null,b=null,A=null,P=null,T=null,H=null,X=new qt(0,0,0),w=0,L=!1,R=null,V=null,v=null,F=null,J=null,Q.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:Rt,bindFramebuffer:bt,drawBuffers:B,useProgram:pt,setBlending:z,setMaterial:D,setFlipSided:C,setCullFace:M,setLineWidth:E,setPolygonOffset:U,setScissorTest:O,activeTexture:$,bindTexture:tt,unbindTexture:rt,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:Pt,texImage3D:Tt,updateUBOMapping:_t,uniformBlockBinding:wt,texStorage2D:Bt,texStorage3D:At,texSubImage2D:yt,texSubImage3D:Dt,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Ot,viewport:k,reset:It}}function cm(i,t,e,n,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,E){return d?new OffscreenCanvas(M,E):Lr("canvas")}function g(M,E,U,O){let $=1;if((M.width>O||M.height>O)&&($=O/Math.max(M.width,M.height)),$<1||E===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const tt=E?ks:Math.floor,rt=tt($*M.width),lt=tt($*M.height);p===void 0&&(p=_(rt,lt));const mt=U?_(rt,lt):p;return mt.width=rt,mt.height=lt,mt.getContext("2d").drawImage(M,0,0,rt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+rt+"x"+lt+")."),mt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return ja(M.width)&&ja(M.height)}function u(M){return a?!1:M.wrapS!==Le||M.wrapT!==Le||M.minFilter!==Me&&M.minFilter!==we}function S(M,E){return M.generateMipmaps&&E&&M.minFilter!==Me&&M.minFilter!==we}function y(M){i.generateMipmap(M)}function b(M,E,U,O,$=!1){if(a===!1)return E;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let tt=E;if(E===i.RED&&(U===i.FLOAT&&(tt=i.R32F),U===i.HALF_FLOAT&&(tt=i.R16F),U===i.UNSIGNED_BYTE&&(tt=i.R8)),E===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(tt=i.R8UI),U===i.UNSIGNED_SHORT&&(tt=i.R16UI),U===i.UNSIGNED_INT&&(tt=i.R32UI),U===i.BYTE&&(tt=i.R8I),U===i.SHORT&&(tt=i.R16I),U===i.INT&&(tt=i.R32I)),E===i.RG&&(U===i.FLOAT&&(tt=i.RG32F),U===i.HALF_FLOAT&&(tt=i.RG16F),U===i.UNSIGNED_BYTE&&(tt=i.RG8)),E===i.RGBA){const rt=$?Ar:Jt.getTransfer(O);U===i.FLOAT&&(tt=i.RGBA32F),U===i.HALF_FLOAT&&(tt=i.RGBA16F),U===i.UNSIGNED_BYTE&&(tt=rt===Qt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(M,E,U){return S(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Me&&M.minFilter!==we?Math.log2(Math.max(E.width,E.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?E.mipmaps.length:1}function P(M){return M===Me||M===xa||M===Di?i.NEAREST:i.LINEAR}function T(M){const E=M.target;E.removeEventListener("dispose",T),X(E),E.isVideoTexture&&h.delete(E)}function H(M){const E=M.target;E.removeEventListener("dispose",H),L(E)}function X(M){const E=n.get(M);if(E.__webglInit===void 0)return;const U=M.source,O=m.get(U);if(O){const $=O[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(M),Object.keys(O).length===0&&m.delete(U)}n.remove(M)}function w(M){const E=n.get(M);i.deleteTexture(E.__webglTexture);const U=M.source,O=m.get(U);delete O[E.__cacheKey],o.memory.textures--}function L(M){const E=M.texture,U=n.get(M),O=n.get(E);if(O.__webglTexture!==void 0&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let tt=0;tt<U.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(U.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)i.deleteFramebuffer(U.__webglFramebuffer[$]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let $=0,tt=E.length;$<tt;$++){const rt=n.get(E[$]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(E[$])}n.remove(E),n.remove(M)}let R=0;function V(){R=0}function v(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function F(M){const E=[];return E.push(M.wrapS),E.push(M.wrapT),E.push(M.wrapR||0),E.push(M.magFilter),E.push(M.minFilter),E.push(M.anisotropy),E.push(M.internalFormat),E.push(M.format),E.push(M.type),E.push(M.generateMipmaps),E.push(M.premultiplyAlpha),E.push(M.flipY),E.push(M.unpackAlignment),E.push(M.colorSpace),E.join()}function J(M,E){const U=n.get(M);if(M.isVideoTexture&&D(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const O=M.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(U,M,E);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+E)}function j(M,E){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Q(U,M,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+E)}function nt(M,E){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Q(U,M,E);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+E)}function Z(M,E){const U=n.get(M);if(M.version>0&&U.__version!==M.version){xt(U,M,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+E)}const it={[Os]:i.REPEAT,[Le]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},G={[Me]:i.NEAREST,[xa]:i.NEAREST_MIPMAP_NEAREST,[Di]:i.NEAREST_MIPMAP_LINEAR,[we]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},W={[eu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[_l]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[ru]:i.GREATER,[su]:i.NOTEQUAL};function ht(M,E,U){if(E.type===en&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===we||E.magFilter===jr||E.magFilter===Di||E.magFilter===Ln||E.minFilter===we||E.minFilter===jr||E.minFilter===Di||E.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(i.texParameteri(M,i.TEXTURE_WRAP_S,it[E.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,it[E.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,it[E.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,G[E.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,G[E.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Le||E.wrapT!==Le)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,P(E.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==Me&&E.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Me||E.minFilter!==Di&&E.minFilter!==Ln||E.type===en&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function K(M,E){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,E.addEventListener("dispose",T));const O=E.source;let $=m.get(O);$===void 0&&($={},m.set(O,$));const tt=F(E);if(tt!==M.__cacheKey){$[tt]===void 0&&($[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[tt].usedTimes++;const rt=$[M.__cacheKey];rt!==void 0&&($[M.__cacheKey].usedTimes--,rt.usedTimes===0&&w(E)),M.__cacheKey=tt,M.__webglTexture=$[tt].texture}return U}function Q(M,E,U){let O=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(O=i.TEXTURE_3D);const $=K(M,E),tt=E.source;e.bindTexture(O,M.__webglTexture,i.TEXTURE0+U);const rt=n.get(tt);if(tt.version!==rt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);const lt=Jt.getPrimaries(Jt.workingColorSpace),mt=E.colorSpace===Ne?null:Jt.getPrimaries(E.colorSpace),yt=E.colorSpace===Ne||lt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Dt=u(E)&&f(E.image)===!1;let ut=g(E.image,Dt,!1,r.maxTextureSize);ut=C(E,ut);const zt=f(ut)||a,Bt=s.convert(E.format,E.colorSpace);let At=s.convert(E.type),Pt=b(E.internalFormat,Bt,At,E.colorSpace,E.isVideoTexture);ht(O,E,zt);let Tt;const Ot=E.mipmaps,k=a&&E.isVideoTexture!==!0&&Pt!==pl,_t=rt.__version===void 0||$===!0,wt=tt.dataReady,It=A(E,ut,zt);if(E.isDepthTexture)Pt=i.DEPTH_COMPONENT,a?E.type===en?Pt=i.DEPTH_COMPONENT32F:E.type===dn?Pt=i.DEPTH_COMPONENT24:E.type===Dn?Pt=i.DEPTH24_STENCIL8:Pt=i.DEPTH_COMPONENT16:E.type===en&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===In&&Pt===i.DEPTH_COMPONENT&&E.type!==qs&&E.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=dn,At=s.convert(E.type)),E.format===xi&&Pt===i.DEPTH_COMPONENT&&(Pt=i.DEPTH_STENCIL,E.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Dn,At=s.convert(E.type))),_t&&(k?e.texStorage2D(i.TEXTURE_2D,1,Pt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Bt,At,null));else if(E.isDataTexture)if(Ot.length>0&&zt){k&&_t&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],k?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Bt,At,Tt.data);E.generateMipmaps=!1}else k?(_t&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Bt,At,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Bt,At,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,Ot[0].width,Ot[0].height,ut.depth);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],E.format!==Ge?Bt!==null?k?wt&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,Bt,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,N,0,0,0,Tt.width,Tt.height,ut.depth,Bt,At,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,N,Pt,Tt.width,Tt.height,ut.depth,0,Bt,At,Tt.data)}else{k&&_t&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],E.format!==Ge?Bt!==null?k?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Tt.width,Tt.height,Bt,At,Tt.data):e.texImage2D(i.TEXTURE_2D,N,Pt,Tt.width,Tt.height,0,Bt,At,Tt.data)}else if(E.isDataArrayTexture)k?(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Bt,At,ut.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ut.width,ut.height,ut.depth,0,Bt,At,ut.data);else if(E.isData3DTexture)k?(_t&&e.texStorage3D(i.TEXTURE_3D,It,Pt,ut.width,ut.height,ut.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Bt,At,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ut.width,ut.height,ut.depth,0,Bt,At,ut.data);else if(E.isFramebufferTexture){if(_t)if(k)e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height);else{let N=ut.width,dt=ut.height;for(let ft=0;ft<It;ft++)e.texImage2D(i.TEXTURE_2D,ft,Pt,N,dt,0,Bt,At,null),N>>=1,dt>>=1}}else if(Ot.length>0&&zt){k&&_t&&e.texStorage2D(i.TEXTURE_2D,It,Pt,Ot[0].width,Ot[0].height);for(let N=0,dt=Ot.length;N<dt;N++)Tt=Ot[N],k?wt&&e.texSubImage2D(i.TEXTURE_2D,N,0,0,Bt,At,Tt):e.texImage2D(i.TEXTURE_2D,N,Pt,Bt,At,Tt);E.generateMipmaps=!1}else k?(_t&&e.texStorage2D(i.TEXTURE_2D,It,Pt,ut.width,ut.height),wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,At,ut)):e.texImage2D(i.TEXTURE_2D,0,Pt,Bt,At,ut);S(E,zt)&&y(O),rt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function xt(M,E,U){if(E.image.length!==6)return;const O=K(M,E),$=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const tt=n.get($);if($.version!==tt.__version||O===!0){e.activeTexture(i.TEXTURE0+U);const rt=Jt.getPrimaries(Jt.workingColorSpace),lt=E.colorSpace===Ne?null:Jt.getPrimaries(E.colorSpace),mt=E.colorSpace===Ne||rt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,ut=[];for(let N=0;N<6;N++)!yt&&!Dt?ut[N]=g(E.image[N],!1,!0,r.maxCubemapSize):ut[N]=Dt?E.image[N].image:E.image[N],ut[N]=C(E,ut[N]);const zt=ut[0],Bt=f(zt)||a,At=s.convert(E.format,E.colorSpace),Pt=s.convert(E.type),Tt=b(E.internalFormat,At,Pt,E.colorSpace),Ot=a&&E.isVideoTexture!==!0,k=tt.__version===void 0||O===!0,_t=$.dataReady;let wt=A(E,zt,Bt);ht(i.TEXTURE_CUBE_MAP,E,Bt);let It;if(yt){Ot&&k&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,zt.width,zt.height);for(let N=0;N<6;N++){It=ut[N].mipmaps;for(let dt=0;dt<It.length;dt++){const ft=It[dt];E.format!==Ge?At!==null?Ot?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,0,0,ft.width,ft.height,At,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,0,0,ft.width,ft.height,At,Pt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt,Tt,ft.width,ft.height,0,At,Pt,ft.data)}}}else{It=E.mipmaps,Ot&&k&&(It.length>0&&wt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Tt,ut[0].width,ut[0].height));for(let N=0;N<6;N++)if(Dt){Ot?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ut[N].width,ut[N].height,At,Pt,ut[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,ut[N].width,ut[N].height,0,At,Pt,ut[N].data);for(let dt=0;dt<It.length;dt++){const Lt=It[dt].image[N].image;Ot?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,0,0,Lt.width,Lt.height,At,Pt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,Tt,Lt.width,Lt.height,0,At,Pt,Lt.data)}}else{Ot?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,At,Pt,ut[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Tt,At,Pt,ut[N]);for(let dt=0;dt<It.length;dt++){const ft=It[dt];Ot?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,0,0,At,Pt,ft.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt+1,Tt,At,Pt,ft.image[N])}}}S(E,Bt)&&y(i.TEXTURE_CUBE_MAP),tt.__version=$.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function Et(M,E,U,O,$,tt){const rt=s.convert(U.format,U.colorSpace),lt=s.convert(U.type),mt=b(U.internalFormat,rt,lt,U.colorSpace);if(!n.get(E).__hasExternalTextures){const Dt=Math.max(1,E.width>>tt),ut=Math.max(1,E.height>>tt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,tt,mt,Dt,ut,E.depth,0,rt,lt,null):e.texImage2D($,tt,mt,Dt,ut,0,rt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),z(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,$,n.get(U).__webglTexture,0,q(E)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,$,n.get(U).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(M,E,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),E.depthBuffer&&!E.stencilBuffer){let O=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||z(E)){const $=E.depthTexture;$&&$.isDepthTexture&&($.type===en?O=i.DEPTH_COMPONENT32F:$.type===dn&&(O=i.DEPTH_COMPONENT24));const tt=q(E);z(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,O,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,O,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,O,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(E.depthBuffer&&E.stencilBuffer){const O=q(E);U&&z(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,i.DEPTH24_STENCIL8,E.width,E.height):z(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let $=0;$<O.length;$++){const tt=O[$],rt=s.convert(tt.format,tt.colorSpace),lt=s.convert(tt.type),mt=b(tt.internalFormat,rt,lt,tt.colorSpace),yt=q(E);U&&z(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,mt,E.width,E.height):z(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(M,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const O=n.get(E.depthTexture).__webglTexture,$=q(E);if(E.depthTexture.format===In)z(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(E.depthTexture.format===xi)z(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Rt(M){const E=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!E.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");gt(E.__webglFramebuffer,M)}else if(U){E.__webglDepthbuffer=[];for(let O=0;O<6;O++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[O]),E.__webglDepthbuffer[O]=i.createRenderbuffer(),vt(E.__webglDepthbuffer[O],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),vt(E.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(M,E,U){const O=n.get(M);E!==void 0&&Et(O.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Rt(M)}function B(M){const E=M.texture,U=n.get(M),O=n.get(E);M.addEventListener("dispose",H),M.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=E.version,o.memory.textures++);const $=M.isWebGLCubeRenderTarget===!0,tt=M.isWebGLMultipleRenderTargets===!0,rt=f(M)||a;if($){U.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer[lt]=[];for(let mt=0;mt<E.mipmaps.length;mt++)U.__webglFramebuffer[lt][mt]=i.createFramebuffer()}else U.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){U.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)U.__webglFramebuffer[lt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(tt)if(r.drawBuffers){const lt=M.texture;for(let mt=0,yt=lt.length;mt<yt;mt++){const Dt=n.get(lt[mt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&z(M)===!1){const lt=tt?E:[E];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let mt=0;mt<lt.length;mt++){const yt=lt[mt];U.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[mt]);const Dt=s.convert(yt.format,yt.colorSpace),ut=s.convert(yt.type),zt=b(yt.internalFormat,Dt,ut,yt.colorSpace,M.isXRRenderTarget===!0),Bt=q(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,zt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,U.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ht(i.TEXTURE_CUBE_MAP,E,rt);for(let lt=0;lt<6;lt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)Et(U.__webglFramebuffer[lt][mt],M,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else Et(U.__webglFramebuffer[lt],M,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);S(E,rt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const lt=M.texture;for(let mt=0,yt=lt.length;mt<yt;mt++){const Dt=lt[mt],ut=n.get(Dt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),ht(i.TEXTURE_2D,Dt,rt),Et(U.__webglFramebuffer,M,Dt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),S(Dt,rt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?lt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,O.__webglTexture),ht(lt,E,rt),a&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)Et(U.__webglFramebuffer[mt],M,E,i.COLOR_ATTACHMENT0,lt,mt);else Et(U.__webglFramebuffer,M,E,i.COLOR_ATTACHMENT0,lt,0);S(E,rt)&&y(lt),e.unbindTexture()}M.depthBuffer&&Rt(M)}function pt(M){const E=f(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let O=0,$=U.length;O<$;O++){const tt=U[O];if(S(tt,E)){const rt=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,lt=n.get(tt).__webglTexture;e.bindTexture(rt,lt),y(rt),e.unbindTexture()}}}function x(M){if(a&&M.samples>0&&z(M)===!1){const E=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,O=M.height;let $=i.COLOR_BUFFER_BIT;const tt=[],rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(M),mt=M.isWebGLMultipleRenderTargets===!0;if(mt)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){tt.push(i.COLOR_ATTACHMENT0+yt),M.depthBuffer&&tt.push(rt);const Dt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(Dt===!1&&(M.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[yt]),Dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[rt])),mt){const ut=n.get(E[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,U,O,0,0,U,O,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[yt]);const Dt=n.get(E[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function q(M){return Math.min(r.maxSamples,M.samples)}function z(M){const E=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function D(M){const E=o.render.frame;h.get(M)!==E&&(h.set(M,E),M.update())}function C(M,E){const U=M.colorSpace,O=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===zs||U!==rn&&U!==Ne&&(Jt.getTransfer(U)===Qt?a===!1?t.has("EXT_sRGB")===!0&&O===Ge?(M.format=zs,M.minFilter=we,M.generateMipmaps=!1):E=xl.sRGBToLinear(E):(O!==Ge||$!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),E}this.allocateTextureUnit=v,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=nt,this.setTextureCube=Z,this.rebindTextures=bt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=x,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=z}function um(i,t,e){const n=e.isWebGL2;function r(s,o=Ne){let a;const l=Jt.getTransfer(o);if(s===_n)return i.UNSIGNED_BYTE;if(s===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Wc)return i.BYTE;if(s===Xc)return i.SHORT;if(s===qs)return i.UNSIGNED_SHORT;if(s===ll)return i.INT;if(s===dn)return i.UNSIGNED_INT;if(s===en)return i.FLOAT;if(s===Hi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yc)return i.ALPHA;if(s===Ge)return i.RGBA;if(s===qc)return i.LUMINANCE;if(s===jc)return i.LUMINANCE_ALPHA;if(s===In)return i.DEPTH_COMPONENT;if(s===xi)return i.DEPTH_STENCIL;if(s===zs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zc)return i.RED;if(s===hl)return i.RED_INTEGER;if(s===Kc)return i.RG;if(s===fl)return i.RG_INTEGER;if(s===dl)return i.RGBA_INTEGER;if(s===Zr||s===Kr||s===Jr||s===$r)if(l===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===Sa||s===Ma||s===Ea)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ma)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ba||s===wa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ba)return l===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wa)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ta||s===Aa||s===Ca||s===Ra||s===Pa||s===La||s===Da||s===Ia||s===Ua||s===Na||s===Oa||s===Fa||s===za||s===Ba)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ta)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Aa)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ca)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ra)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pa)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===La)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Da)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ia)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ua)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Na)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oa)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fa)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===za)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ba)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qr||s===ka||s===Ga)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Qr)return l===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ka)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ga)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jc||s===Ha||s===Va||s===Wa)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ha)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class hm extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zi extends oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),u=this._getHandJoint(c,g);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&m>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ee,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new sn({extensions:{fragDepth:!0},vertexShader:dm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new kn(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class gm extends Bn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,d=null,_=null;const g=new mm,f=e.getContextAttributes();let u=null,S=null;const y=[],b=[],A=new St;let P=null;const T=new Ue;T.layers.enable(1),T.viewport=new de;const H=new Ue;H.layers.enable(2),H.viewport=new de;const X=[T,H],w=new hm;w.layers.enable(1),w.layers.enable(2);let L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=y[K];return Q===void 0&&(Q=new Es,y[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=y[K];return Q===void 0&&(Q=new Es,y[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=y[K];return Q===void 0&&(Q=new Es,y[K]=Q),Q.getHandSpace()};function V(K){const Q=b.indexOf(K.inputSource);if(Q===-1)return;const xt=y[Q];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function v(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",v),r.removeEventListener("inputsourceschange",F);for(let K=0;K<y.length;K++){const Q=b[K];Q!==null&&(b[K]=null,y[K].disconnect(Q))}L=null,R=null,g.reset(),t.setRenderTarget(u),d=null,m=null,p=null,r=null,S=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return m!==null?m:d},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",v),r.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Ge,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,xt=null,Et=null;f.depth&&(Et=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?xi:In,xt=f.stencil?Dn:dn);const vt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};p=new XRWebGLBinding(r,e),m=p.createProjectionLayer(vt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),S=new Nn(m.textureWidth,m.textureHeight,{format:Ge,type:_n,depthTexture:new Ll(m.textureWidth,m.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const gt=t.properties.get(S);gt.__ignoreDepthValues=m.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(K){for(let Q=0;Q<K.removed.length;Q++){const xt=K.removed[Q],Et=b.indexOf(xt);Et>=0&&(b[Et]=null,y[Et].disconnect(xt))}for(let Q=0;Q<K.added.length;Q++){const xt=K.added[Q];let Et=b.indexOf(xt);if(Et===-1){for(let gt=0;gt<y.length;gt++)if(gt>=b.length){b.push(xt),Et=gt;break}else if(b[gt]===null){b[gt]=xt,Et=gt;break}if(Et===-1)break}const vt=y[Et];vt&&vt.connect(xt)}}const J=new Y,j=new Y;function nt(K,Q,xt){J.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);const Et=J.distanceTo(j),vt=Q.projectionMatrix.elements,gt=xt.projectionMatrix.elements,Rt=vt[14]/(vt[10]-1),bt=vt[14]/(vt[10]+1),B=(vt[9]+1)/vt[5],pt=(vt[9]-1)/vt[5],x=(vt[8]-1)/vt[0],q=(gt[8]+1)/gt[0],z=Rt*x,D=Rt*q,C=Et/(-x+q),M=C*-x;Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(M),K.translateZ(C),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const E=Rt+C,U=bt+C,O=z-M,$=D+(Et-M),tt=B*bt/U*E,rt=pt*bt/U*E;K.projectionMatrix.makePerspective(O,$,tt,rt,E,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Z(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;g.texture!==null&&(K.near=g.depthNear,K.far=g.depthFar),w.near=H.near=T.near=K.near,w.far=H.far=T.far=K.far,(L!==w.near||R!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,R=w.far,T.near=L,T.far=R,H.near=L,H.far=R,T.updateProjectionMatrix(),H.updateProjectionMatrix(),K.updateProjectionMatrix());const Q=K.parent,xt=w.cameras;Z(w,Q);for(let Et=0;Et<xt.length;Et++)Z(xt[Et],Q);xt.length===2?nt(w,T,H):w.projectionMatrix.copy(T.projectionMatrix),it(K,w,Q)};function it(K,Q,xt){xt===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(m===null&&d===null))return l},this.setFoveation=function(K){l=K,m!==null&&(m.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null};let G=null;function W(K,Q){if(h=Q.getViewerPose(c||o),_=Q,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Et=!1;xt.length!==w.cameras.length&&(w.cameras.length=0,Et=!0);for(let gt=0;gt<xt.length;gt++){const Rt=xt[gt];let bt=null;if(d!==null)bt=d.getViewport(Rt);else{const pt=p.getViewSubImage(m,Rt);bt=pt.viewport,gt===0&&(t.setRenderTargetTextures(S,pt.colorTexture,m.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let B=X[gt];B===void 0&&(B=new Ue,B.layers.enable(gt),B.viewport=new de,X[gt]=B),B.matrix.fromArray(Rt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Rt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(bt.x,bt.y,bt.width,bt.height),gt===0&&(w.matrix.copy(B.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Et===!0&&w.cameras.push(B)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const gt=p.getDepthInformation(xt[0]);gt&&gt.isValid&&gt.texture&&g.init(t,gt,r.renderState)}}for(let xt=0;xt<y.length;xt++){const Et=b[xt],vt=y[xt];Et!==null&&vt!==void 0&&vt.update(Et,Q,c||o)}g.render(t,w),G&&G(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ht=new Rl;ht.setAnimationLoop(W),this.setAnimationLoop=function(K){G=K},this.dispose=function(){}}}function _m(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Tl(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,S,y,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),h(f,u)):u.isMeshStandardMaterial?(s(f,u),m(f,u),u.isMeshPhysicalMaterial&&d(f,u,b)):u.isMeshMatcapMaterial?(s(f,u),_(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),g(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,S,y):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ae&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ae&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=t.get(u).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*y,e(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,y){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=y*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function m(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),t.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function d(f,u,S){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ae&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function g(f,u){const S=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vm(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=r[S.id];b===void 0&&(_(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",f));const A=y.program;n.updateUBOMapping(S,A);const P=t.render.frame;s[S.id]!==P&&(m(S),s[S.id]=P)}function h(S){const y=p();S.__bindingPointIndex=y;const b=i.createBuffer(),A=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(S){const y=r[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,T=b.length;P<T;P++){const H=Array.isArray(b[P])?b[P]:[b[P]];for(let X=0,w=H.length;X<w;X++){const L=H[X];if(d(L,P,X,A)===!0){const R=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let v=0;for(let F=0;F<V.length;F++){const J=V[F],j=g(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,R+v,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,v),v+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,b,A){const P=S.value,T=y+"_"+b;if(A[T]===void 0)return typeof P=="number"||typeof P=="boolean"?A[T]=P:A[T]=P.clone(),!0;{const H=A[T];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return A[T]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function _(S){const y=S.uniforms;let b=0;const A=16;for(let T=0,H=y.length;T<H;T++){const X=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,L=X.length;w<L;w++){const R=X[w],V=Array.isArray(R.value)?R.value:[R.value];for(let v=0,F=V.length;v<F;v++){const J=V[v],j=g(J),nt=b%A;nt!==0&&A-nt<j.boundary&&(b+=A-nt),R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=j.storage}}}const P=b%A;return P>0&&(b+=A-P),S.__size=b,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function f(S){const y=S.target;y.removeEventListener("dispose",f);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Fl{constructor(t={}){const{canvas:e=uu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const u=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=gn,this.toneMappingExposure=1;const y=this;let b=!1,A=0,P=0,T=null,H=-1,X=null;const w=new de,L=new de;let R=null;const V=new qt(0);let v=0,F=e.width,J=e.height,j=1,nt=null,Z=null;const it=new de(0,0,F,J),G=new de(0,0,F,J);let W=!1;const ht=new Ks;let K=!1,Q=!1,xt=null;const Et=new ne,vt=new St,gt=new Y,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return T===null?j:1}let B=n;function pt(I,et){for(let at=0;at<I.length;at++){const ot=I[at],st=e.getContext(ot,et);if(st!==null)return st}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ys}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){const et=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&et.shift(),B=pt(et,I),B===null)throw pt(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let x,q,z,D,C,M,E,U,O,$,tt,rt,lt,mt,yt,Dt,ut,zt,Bt,At,Pt,Tt,Ot,k;function _t(){x=new wd(B),q=new xd(B,x,t),x.init(q),Tt=new um(B,x,q),z=new lm(B,x,q),D=new Cd(B),C=new jp,M=new cm(B,x,z,C,q,Tt,D),E=new Sd(y),U=new bd(y),O=new Nu(B,q),Ot=new _d(B,x,O,q),$=new Td(B,O,D,Ot),tt=new Dd(B,$,O,D),Bt=new Ld(B,q,M),Dt=new yd(C),rt=new qp(y,E,U,x,q,Ot,Dt),lt=new _m(y,C),mt=new Kp,yt=new nm(x,q),zt=new gd(y,E,U,z,tt,m,l),ut=new om(y,tt,q),k=new vm(B,D,q,z),At=new vd(B,x,D,q),Pt=new Ad(B,x,D,q),D.programs=rt.programs,y.capabilities=q,y.extensions=x,y.properties=C,y.renderLists=mt,y.shadowMap=ut,y.state=z,y.info=D}_t();const wt=new gm(y,B);this.xr=wt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=x.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=x.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(I){I!==void 0&&(j=I,this.setSize(F,J,!1))},this.getSize=function(I){return I.set(F,J)},this.setSize=function(I,et,at=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,J=et,e.width=Math.floor(I*j),e.height=Math.floor(et*j),at===!0&&(e.style.width=I+"px",e.style.height=et+"px"),this.setViewport(0,0,I,et)},this.getDrawingBufferSize=function(I){return I.set(F*j,J*j).floor()},this.setDrawingBufferSize=function(I,et,at){F=I,J=et,j=at,e.width=Math.floor(I*at),e.height=Math.floor(et*at),this.setViewport(0,0,I,et)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(it)},this.setViewport=function(I,et,at,ot){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,et,at,ot),z.viewport(w.copy(it).multiplyScalar(j).floor())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,et,at,ot){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,et,at,ot),z.scissor(L.copy(G).multiplyScalar(j).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(I){z.setScissorTest(W=I)},this.setOpaqueSort=function(I){nt=I},this.setTransparentSort=function(I){Z=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,et=!0,at=!0){let ot=0;if(I){let st=!1;if(T!==null){const Ct=T.texture.format;st=Ct===dl||Ct===fl||Ct===hl}if(st){const Ct=T.texture.type,Ut=Ct===_n||Ct===dn||Ct===qs||Ct===Dn||Ct===cl||Ct===ul,Ft=zt.getClearColor(),kt=zt.getClearAlpha(),Wt=Ft.r,Gt=Ft.g,Ht=Ft.b;Ut?(d[0]=Wt,d[1]=Gt,d[2]=Ht,d[3]=kt,B.clearBufferuiv(B.COLOR,0,d)):(_[0]=Wt,_[1]=Gt,_[2]=Ht,_[3]=kt,B.clearBufferiv(B.COLOR,0,_))}else ot|=B.COLOR_BUFFER_BIT}et&&(ot|=B.DEPTH_BUFFER_BIT),at&&(ot|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),yt.dispose(),C.dispose(),E.dispose(),U.dispose(),tt.dispose(),Ot.dispose(),k.dispose(),rt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",pe),wt.removeEventListener("sessionend",Kt),xt&&(xt.dispose(),xt=null),re.stop()};function It(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const I=D.autoReset,et=ut.enabled,at=ut.autoUpdate,ot=ut.needsUpdate,st=ut.type;_t(),D.autoReset=I,ut.enabled=et,ut.autoUpdate=at,ut.needsUpdate=ot,ut.type=st}function dt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ft(I){const et=I.target;et.removeEventListener("dispose",ft),Lt(et)}function Lt(I){Nt(I),C.remove(I)}function Nt(I){const et=C.get(I).programs;et!==void 0&&(et.forEach(function(at){rt.releaseProgram(at)}),I.isShaderMaterial&&rt.releaseShaderCache(I))}this.renderBufferDirect=function(I,et,at,ot,st,Ct){et===null&&(et=Rt);const Ut=st.isMesh&&st.matrixWorld.determinant()<0,Ft=ac(I,et,at,ot,st);z.setMaterial(ot,Ut);let kt=at.index,Wt=1;if(ot.wireframe===!0){if(kt=$.getWireframeAttribute(at),kt===void 0)return;Wt=2}const Gt=at.drawRange,Ht=at.attributes.position;let se=Gt.start*Wt,Ce=(Gt.start+Gt.count)*Wt;Ct!==null&&(se=Math.max(se,Ct.start*Wt),Ce=Math.min(Ce,(Ct.start+Ct.count)*Wt)),kt!==null?(se=Math.max(se,0),Ce=Math.min(Ce,kt.count)):Ht!=null&&(se=Math.max(se,0),Ce=Math.min(Ce,Ht.count));const ue=Ce-se;if(ue<0||ue===1/0)return;Ot.setup(st,ot,Ft,at,kt);let Ye,te=At;if(kt!==null&&(Ye=O.get(kt),te=Pt,te.setIndex(Ye)),st.isMesh)ot.wireframe===!0?(z.setLineWidth(ot.wireframeLinewidth*bt()),te.setMode(B.LINES)):te.setMode(B.TRIANGLES);else if(st.isLine){let Xt=ot.linewidth;Xt===void 0&&(Xt=1),z.setLineWidth(Xt*bt()),st.isLineSegments?te.setMode(B.LINES):st.isLineLoop?te.setMode(B.LINE_LOOP):te.setMode(B.LINE_STRIP)}else st.isPoints?te.setMode(B.POINTS):st.isSprite&&te.setMode(B.TRIANGLES);if(st.isBatchedMesh)te.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else if(st.isInstancedMesh)te.renderInstances(se,ue,st.count);else if(at.isInstancedBufferGeometry){const Xt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Wr=Math.min(at.instanceCount,Xt);te.renderInstances(se,ue,Wr)}else te.render(se,ue)};function Zt(I,et,at){I.transparent===!0&&I.side===tn&&I.forceSinglePass===!1?(I.side=Ae,I.needsUpdate=!0,Zi(I,et,at),I.side=vn,I.needsUpdate=!0,Zi(I,et,at),I.side=tn):Zi(I,et,at)}this.compile=function(I,et,at=null){at===null&&(at=I),f=yt.get(at),f.init(),S.push(f),at.traverseVisible(function(st){st.isLight&&st.layers.test(et.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),I!==at&&I.traverseVisible(function(st){st.isLight&&st.layers.test(et.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),f.setupLights(y._useLegacyLights);const ot=new Set;return I.traverse(function(st){const Ct=st.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){const Ft=Ct[Ut];Zt(Ft,at,st),ot.add(Ft)}else Zt(Ct,at,st),ot.add(Ct)}),S.pop(),f=null,ot},this.compileAsync=function(I,et,at=null){const ot=this.compile(I,et,at);return new Promise(st=>{function Ct(){if(ot.forEach(function(Ut){C.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){st(I);return}setTimeout(Ct,10)}x.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let jt=null;function $t(I){jt&&jt(I)}function pe(){re.stop()}function Kt(){re.start()}const re=new Rl;re.setAnimationLoop($t),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(I){jt=I,wt.setAnimationLoop(I),I===null?re.stop():re.start()},wt.addEventListener("sessionstart",pe),wt.addEventListener("sessionend",Kt),this.render=function(I,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(et),et=wt.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,et,T),f=yt.get(I,S.length),f.init(),S.push(f),Et.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),ht.setFromProjectionMatrix(Et),Q=this.localClippingEnabled,K=Dt.init(this.clippingPlanes,Q),g=mt.get(I,u.length),g.init(),u.push(g),ye(I,et,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(nt,Z),this.info.render.frame++,K===!0&&Dt.beginShadows();const at=f.state.shadowsArray;if(ut.render(at,I,et),K===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1)&&zt.render(g,I),f.setupLights(y._useLegacyLights),et.isArrayCamera){const ot=et.cameras;for(let st=0,Ct=ot.length;st<Ct;st++){const Ut=ot[st];oa(g,I,Ut,Ut.viewport)}}else oa(g,I,et);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,et),Ot.resetDefaultState(),H=-1,X=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function ye(I,et,at,ot){if(I.visible===!1)return;if(I.layers.test(et.layers)){if(I.isGroup)at=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(et);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ht.intersectsSprite(I)){ot&&gt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);const Ut=tt.update(I),Ft=I.material;Ft.visible&&g.push(I,Ut,Ft,at,gt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ht.intersectsObject(I))){const Ut=tt.update(I),Ft=I.material;if(ot&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),gt.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),gt.copy(Ut.boundingSphere.center)),gt.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const kt=Ut.groups;for(let Wt=0,Gt=kt.length;Wt<Gt;Wt++){const Ht=kt[Wt],se=Ft[Ht.materialIndex];se&&se.visible&&g.push(I,Ut,se,at,gt.z,Ht)}}else Ft.visible&&g.push(I,Ut,Ft,at,gt.z,null)}}const Ct=I.children;for(let Ut=0,Ft=Ct.length;Ut<Ft;Ut++)ye(Ct[Ut],et,at,ot)}function oa(I,et,at,ot){const st=I.opaque,Ct=I.transmissive,Ut=I.transparent;f.setupLightsView(at),K===!0&&Dt.setGlobalState(y.clippingPlanes,at),Ct.length>0&&sc(st,Ct,et,at),ot&&z.viewport(w.copy(ot)),st.length>0&&ji(st,et,at),Ct.length>0&&ji(Ct,et,at),Ut.length>0&&ji(Ut,et,at),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function sc(I,et,at,ot){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;const Ct=q.isWebGL2;xt===null&&(xt=new Nn(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?Hi:_n,minFilter:Ln,samples:Ct?4:0})),y.getDrawingBufferSize(vt),Ct?xt.setSize(vt.x,vt.y):xt.setSize(ks(vt.x),ks(vt.y));const Ut=y.getRenderTarget();y.setRenderTarget(xt),y.getClearColor(V),v=y.getClearAlpha(),v<1&&y.setClearColor(16777215,.5),y.clear();const Ft=y.toneMapping;y.toneMapping=gn,ji(I,at,ot),M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt);let kt=!1;for(let Wt=0,Gt=et.length;Wt<Gt;Wt++){const Ht=et[Wt],se=Ht.object,Ce=Ht.geometry,ue=Ht.material,Ye=Ht.group;if(ue.side===tn&&se.layers.test(ot.layers)){const te=ue.side;ue.side=Ae,ue.needsUpdate=!0,la(se,at,ot,Ce,ue,Ye),ue.side=te,ue.needsUpdate=!0,kt=!0}}kt===!0&&(M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt)),y.setRenderTarget(Ut),y.setClearColor(V,v),y.toneMapping=Ft}function ji(I,et,at){const ot=et.isScene===!0?et.overrideMaterial:null;for(let st=0,Ct=I.length;st<Ct;st++){const Ut=I[st],Ft=Ut.object,kt=Ut.geometry,Wt=ot===null?Ut.material:ot,Gt=Ut.group;Ft.layers.test(at.layers)&&la(Ft,et,at,kt,Wt,Gt)}}function la(I,et,at,ot,st,Ct){I.onBeforeRender(y,et,at,ot,st,Ct),I.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),st.onBeforeRender(y,et,at,ot,I,Ct),st.transparent===!0&&st.side===tn&&st.forceSinglePass===!1?(st.side=Ae,st.needsUpdate=!0,y.renderBufferDirect(at,et,ot,st,I,Ct),st.side=vn,st.needsUpdate=!0,y.renderBufferDirect(at,et,ot,st,I,Ct),st.side=tn):y.renderBufferDirect(at,et,ot,st,I,Ct),I.onAfterRender(y,et,at,ot,st,Ct)}function Zi(I,et,at){et.isScene!==!0&&(et=Rt);const ot=C.get(I),st=f.state.lights,Ct=f.state.shadowsArray,Ut=st.state.version,Ft=rt.getParameters(I,st.state,Ct,et,at),kt=rt.getProgramCacheKey(Ft);let Wt=ot.programs;ot.environment=I.isMeshStandardMaterial?et.environment:null,ot.fog=et.fog,ot.envMap=(I.isMeshStandardMaterial?U:E).get(I.envMap||ot.environment),Wt===void 0&&(I.addEventListener("dispose",ft),Wt=new Map,ot.programs=Wt);let Gt=Wt.get(kt);if(Gt!==void 0){if(ot.currentProgram===Gt&&ot.lightsStateVersion===Ut)return ua(I,Ft),Gt}else Ft.uniforms=rt.getUniforms(I),I.onBuild(at,Ft,y),I.onBeforeCompile(Ft,y),Gt=rt.acquireProgram(Ft,kt),Wt.set(kt,Gt),ot.uniforms=Ft.uniforms;const Ht=ot.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ht.clippingPlanes=Dt.uniform),ua(I,Ft),ot.needsLights=lc(I),ot.lightsStateVersion=Ut,ot.needsLights&&(Ht.ambientLightColor.value=st.state.ambient,Ht.lightProbe.value=st.state.probe,Ht.directionalLights.value=st.state.directional,Ht.directionalLightShadows.value=st.state.directionalShadow,Ht.spotLights.value=st.state.spot,Ht.spotLightShadows.value=st.state.spotShadow,Ht.rectAreaLights.value=st.state.rectArea,Ht.ltc_1.value=st.state.rectAreaLTC1,Ht.ltc_2.value=st.state.rectAreaLTC2,Ht.pointLights.value=st.state.point,Ht.pointLightShadows.value=st.state.pointShadow,Ht.hemisphereLights.value=st.state.hemi,Ht.directionalShadowMap.value=st.state.directionalShadowMap,Ht.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ht.spotShadowMap.value=st.state.spotShadowMap,Ht.spotLightMatrix.value=st.state.spotLightMatrix,Ht.spotLightMap.value=st.state.spotLightMap,Ht.pointShadowMap.value=st.state.pointShadowMap,Ht.pointShadowMatrix.value=st.state.pointShadowMatrix),ot.currentProgram=Gt,ot.uniformsList=null,Gt}function ca(I){if(I.uniformsList===null){const et=I.currentProgram.getUniforms();I.uniformsList=wr.seqWithValue(et.seq,I.uniforms)}return I.uniformsList}function ua(I,et){const at=C.get(I);at.outputColorSpace=et.outputColorSpace,at.batching=et.batching,at.instancing=et.instancing,at.instancingColor=et.instancingColor,at.skinning=et.skinning,at.morphTargets=et.morphTargets,at.morphNormals=et.morphNormals,at.morphColors=et.morphColors,at.morphTargetsCount=et.morphTargetsCount,at.numClippingPlanes=et.numClippingPlanes,at.numIntersection=et.numClipIntersection,at.vertexAlphas=et.vertexAlphas,at.vertexTangents=et.vertexTangents,at.toneMapping=et.toneMapping}function ac(I,et,at,ot,st){et.isScene!==!0&&(et=Rt),M.resetTextureUnits();const Ct=et.fog,Ut=ot.isMeshStandardMaterial?et.environment:null,Ft=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:rn,kt=(ot.isMeshStandardMaterial?U:E).get(ot.envMap||Ut),Wt=ot.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Gt=!!at.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Ht=!!at.morphAttributes.position,se=!!at.morphAttributes.normal,Ce=!!at.morphAttributes.color;let ue=gn;ot.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ue=y.toneMapping);const Ye=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,te=Ye!==void 0?Ye.length:0,Xt=C.get(ot),Wr=f.state.lights;if(K===!0&&(Q===!0||I!==X)){const De=I===X&&ot.id===H;Dt.setState(ot,I,De)}let ie=!1;ot.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Wr.state.version||Xt.outputColorSpace!==Ft||st.isBatchedMesh&&Xt.batching===!1||!st.isBatchedMesh&&Xt.batching===!0||st.isInstancedMesh&&Xt.instancing===!1||!st.isInstancedMesh&&Xt.instancing===!0||st.isSkinnedMesh&&Xt.skinning===!1||!st.isSkinnedMesh&&Xt.skinning===!0||st.isInstancedMesh&&Xt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Xt.instancingColor===!1&&st.instanceColor!==null||Xt.envMap!==kt||ot.fog===!0&&Xt.fog!==Ct||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Dt.numPlanes||Xt.numIntersection!==Dt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Gt||Xt.morphTargets!==Ht||Xt.morphNormals!==se||Xt.morphColors!==Ce||Xt.toneMapping!==ue||q.isWebGL2===!0&&Xt.morphTargetsCount!==te)&&(ie=!0):(ie=!0,Xt.__version=ot.version);let Mn=Xt.currentProgram;ie===!0&&(Mn=Zi(ot,et,st));let ha=!1,Li=!1,Xr=!1;const ge=Mn.getUniforms(),En=Xt.uniforms;if(z.useProgram(Mn.program)&&(ha=!0,Li=!0,Xr=!0),ot.id!==H&&(H=ot.id,Li=!0),ha||X!==I){ge.setValue(B,"projectionMatrix",I.projectionMatrix),ge.setValue(B,"viewMatrix",I.matrixWorldInverse);const De=ge.map.cameraPosition;De!==void 0&&De.setValue(B,gt.setFromMatrixPosition(I.matrixWorld)),q.logarithmicDepthBuffer&&ge.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ge.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),X!==I&&(X=I,Li=!0,Xr=!0)}if(st.isSkinnedMesh){ge.setOptional(B,st,"bindMatrix"),ge.setOptional(B,st,"bindMatrixInverse");const De=st.skeleton;De&&(q.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),ge.setValue(B,"boneTexture",De.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}st.isBatchedMesh&&(ge.setOptional(B,st,"batchingTexture"),ge.setValue(B,"batchingTexture",st._matricesTexture,M));const Yr=at.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0&&q.isWebGL2===!0)&&Bt.update(st,at,Mn),(Li||Xt.receiveShadow!==st.receiveShadow)&&(Xt.receiveShadow=st.receiveShadow,ge.setValue(B,"receiveShadow",st.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(En.envMap.value=kt,En.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Li&&(ge.setValue(B,"toneMappingExposure",y.toneMappingExposure),Xt.needsLights&&oc(En,Xr),Ct&&ot.fog===!0&&lt.refreshFogUniforms(En,Ct),lt.refreshMaterialUniforms(En,ot,j,J,xt),wr.upload(B,ca(Xt),En,M)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(wr.upload(B,ca(Xt),En,M),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ge.setValue(B,"center",st.center),ge.setValue(B,"modelViewMatrix",st.modelViewMatrix),ge.setValue(B,"normalMatrix",st.normalMatrix),ge.setValue(B,"modelMatrix",st.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const De=ot.uniformsGroups;for(let qr=0,cc=De.length;qr<cc;qr++)if(q.isWebGL2){const fa=De[qr];k.update(fa,Mn),k.bind(fa,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function oc(I,et){I.ambientLightColor.needsUpdate=et,I.lightProbe.needsUpdate=et,I.directionalLights.needsUpdate=et,I.directionalLightShadows.needsUpdate=et,I.pointLights.needsUpdate=et,I.pointLightShadows.needsUpdate=et,I.spotLights.needsUpdate=et,I.spotLightShadows.needsUpdate=et,I.rectAreaLights.needsUpdate=et,I.hemisphereLights.needsUpdate=et}function lc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,et,at){C.get(I.texture).__webglTexture=et,C.get(I.depthTexture).__webglTexture=at;const ot=C.get(I);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=at===void 0,ot.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,et){const at=C.get(I);at.__webglFramebuffer=et,at.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(I,et=0,at=0){T=I,A=et,P=at;let ot=!0,st=null,Ct=!1,Ut=!1;if(I){const kt=C.get(I);kt.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(B.FRAMEBUFFER,null),ot=!1):kt.__webglFramebuffer===void 0?M.setupRenderTarget(I):kt.__hasExternalTextures&&M.rebindTextures(I,C.get(I.texture).__webglTexture,C.get(I.depthTexture).__webglTexture);const Wt=I.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ut=!0);const Gt=C.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[et])?st=Gt[et][at]:st=Gt[et],Ct=!0):q.isWebGL2&&I.samples>0&&M.useMultisampledRTT(I)===!1?st=C.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?st=Gt[at]:st=Gt,w.copy(I.viewport),L.copy(I.scissor),R=I.scissorTest}else w.copy(it).multiplyScalar(j).floor(),L.copy(G).multiplyScalar(j).floor(),R=W;if(z.bindFramebuffer(B.FRAMEBUFFER,st)&&q.drawBuffers&&ot&&z.drawBuffers(I,st),z.viewport(w),z.scissor(L),z.setScissorTest(R),Ct){const kt=C.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+et,kt.__webglTexture,at)}else if(Ut){const kt=C.get(I.texture),Wt=et||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,kt.__webglTexture,at||0,Wt)}H=-1},this.readRenderTargetPixels=function(I,et,at,ot,st,Ct,Ut){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=C.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){z.bindFramebuffer(B.FRAMEBUFFER,Ft);try{const kt=I.texture,Wt=kt.format,Gt=kt.type;if(Wt!==Ge&&Tt.convert(Wt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Gt===Hi&&(x.has("EXT_color_buffer_half_float")||q.isWebGL2&&x.has("EXT_color_buffer_float"));if(Gt!==_n&&Tt.convert(Gt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===en&&(q.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=I.width-ot&&at>=0&&at<=I.height-st&&B.readPixels(et,at,ot,st,Tt.convert(Wt),Tt.convert(Gt),Ct)}finally{const kt=T!==null?C.get(T).__webglFramebuffer:null;z.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(I,et,at=0){const ot=Math.pow(2,-at),st=Math.floor(et.image.width*ot),Ct=Math.floor(et.image.height*ot);M.setTexture2D(et,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,I.x,I.y,st,Ct),z.unbindTexture()},this.copyTextureToTexture=function(I,et,at,ot=0){const st=et.image.width,Ct=et.image.height,Ut=Tt.convert(at.format),Ft=Tt.convert(at.type);M.setTexture2D(at,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,at.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,at.unpackAlignment),et.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ot,I.x,I.y,st,Ct,Ut,Ft,et.image.data):et.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ot,I.x,I.y,et.mipmaps[0].width,et.mipmaps[0].height,Ut,et.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ot,I.x,I.y,Ut,Ft,et.image),ot===0&&at.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(I,et,at,ot,st=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=I.max.x-I.min.x+1,Ut=I.max.y-I.min.y+1,Ft=I.max.z-I.min.z+1,kt=Tt.convert(ot.format),Wt=Tt.convert(ot.type);let Gt;if(ot.isData3DTexture)M.setTexture3D(ot,0),Gt=B.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)M.setTexture2DArray(ot,0),Gt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ot.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ot.unpackAlignment);const Ht=B.getParameter(B.UNPACK_ROW_LENGTH),se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ce=B.getParameter(B.UNPACK_SKIP_PIXELS),ue=B.getParameter(B.UNPACK_SKIP_ROWS),Ye=B.getParameter(B.UNPACK_SKIP_IMAGES),te=at.isCompressedTexture?at.mipmaps[st]:at.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,te.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,te.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,I.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,I.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I.min.z),at.isDataTexture||at.isData3DTexture?B.texSubImage3D(Gt,st,et.x,et.y,et.z,Ct,Ut,Ft,kt,Wt,te.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Gt,st,et.x,et.y,et.z,Ct,Ut,Ft,kt,te.data)):B.texSubImage3D(Gt,st,et.x,et.y,et.z,Ct,Ut,Ft,kt,Wt,te),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),B.pixelStorei(B.UNPACK_SKIP_ROWS,ue),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye),st===0&&ot.generateMipmaps&&B.generateMipmap(Gt),z.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?M.setTextureCube(I,0):I.isData3DTexture?M.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?M.setTexture2DArray(I,0):M.setTexture2D(I,0),z.unbindTexture()},this.resetState=function(){A=0,P=0,T=null,z.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===js?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Un:ml}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Un?fe:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xm extends Fl{}xm.prototype.isWebGL1Renderer=!0;class ym extends oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class $s extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oo=new Y,Fo=new Y,zo=new ne,bs=new Zs,_r=new Ur;class zl extends oe{constructor(t=new Fe,e=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Oo.fromBufferAttribute(e,r-1),Fo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Oo.distanceTo(Fo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_r.radius+=s,t.ray.intersectsSphere(_r)===!1)return;zo.copy(r).invert(),bs.copy(t.ray).applyMatrix4(zo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,h=new Y,p=new Y,m=new Y,d=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const u=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let y=u,b=S-1;y<b;y+=d){const A=_.getX(y),P=_.getX(y+1);if(c.fromBufferAttribute(f,A),h.fromBufferAttribute(f,P),bs.distanceSqToSegment(c,h,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(m);H<t.near||H>t.far||e.push({distance:H,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let y=u,b=S-1;y<b;y+=d){if(c.fromBufferAttribute(f,y),h.fromBufferAttribute(f,y+1),bs.distanceSqToSegment(c,h,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(m);P<t.near||P>t.far||e.push({distance:P,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Bo=new Y,ko=new Y;class Sm extends zl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Bo.fromBufferAttribute(e,r),ko.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bo.distanceTo(ko);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mm extends Ee{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],m=n[r+1]-h,d=(o-h)/m;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new St:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new Y,r=[],s=[],o=[],a=new Y,l=new ne;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new Y)}s[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(me(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(me(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qs extends Xe{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new St,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,d=c-this.aY;l=m*h-d*p+this.aX,c=m*p+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Em extends Qs{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ta(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let m=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,d*=h,r(o,a,m,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const vr=new Y,ws=new ta,Ts=new ta,As=new ta;class bm extends Xe{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new Y){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(vr.subVectors(r[0],r[1]).add(r[0]),c=vr);const p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(vr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(m),d),f=Math.pow(m.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),f<1e-4&&(f=g),ws.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,_,g,f),Ts.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,_,g,f),As.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,_,g,f)}else this.curveType==="catmullrom"&&(ws.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),Ts.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),As.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return n.set(ws.calc(l),Ts.calc(l),As.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Y().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Go(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function wm(i,t){const e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Am(i,t){return i*i*t}function Bi(i,t,e,n){return wm(i,t)+Tm(i,e)+Am(i,n)}function Cm(i,t){const e=1-i;return e*e*e*t}function Rm(i,t){const e=1-i;return 3*e*e*i*t}function Pm(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function ki(i,t,e,n,r){return Cm(i,t)+Rm(i,e)+Pm(i,n)+Lm(i,r)}class Bl extends Xe{constructor(t=new St,e=new St,n=new St,r=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ki(t,r.x,s.x,o.x,a.x),ki(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dm extends Xe{constructor(t=new Y,e=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Y){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ki(t,r.x,s.x,o.x,a.x),ki(t,r.y,s.y,o.y,a.y),ki(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kl extends Xe{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Im extends Xe{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gl extends Xe{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Bi(t,r.x,s.x,o.x),Bi(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends Xe{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Bi(t,r.x,s.x,o.x),Bi(t,r.y,s.y,o.y),Bi(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends Xe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Go(a,l.x,c.x,h.x,p.x),Go(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new St().fromArray(r))}return this}}var Hs=Object.freeze({__proto__:null,ArcCurve:Em,CatmullRomCurve3:bm,CubicBezierCurve:Bl,CubicBezierCurve3:Dm,EllipseCurve:Qs,LineCurve:kl,LineCurve3:Im,QuadraticBezierCurve:Gl,QuadraticBezierCurve3:Um,SplineCurve:Hl});class Nm extends Xe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Hs[r.type]().fromJSON(r))}return this}}class Ho extends Nm{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kl(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Gl(this.currentPoint.clone(),new St(t,e),new St(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Bl(this.currentPoint.clone(),new St(t,e),new St(n,r),new St(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Qs(t,e,n,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ea extends Fe{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],m=[],d=[];let _=0;const g=[],f=n/2;let u=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(d,2));function S(){const b=new Y,A=new Y;let P=0;const T=(e-t)/n;for(let H=0;H<=s;H++){const X=[],w=H/s,L=w*(e-t)+t;for(let R=0;R<=r;R++){const V=R/r,v=V*l+a,F=Math.sin(v),J=Math.cos(v);A.x=L*F,A.y=-w*n+f,A.z=L*J,p.push(A.x,A.y,A.z),b.set(F,T,J).normalize(),m.push(b.x,b.y,b.z),d.push(V,1-w),X.push(_++)}g.push(X)}for(let H=0;H<r;H++)for(let X=0;X<s;X++){const w=g[X][H],L=g[X+1][H],R=g[X+1][H+1],V=g[X][H+1];h.push(w,L,V),h.push(L,R,V),P+=6}c.addGroup(u,P,0),u+=P}function y(b){const A=_,P=new St,T=new Y;let H=0;const X=b===!0?t:e,w=b===!0?1:-1;for(let R=1;R<=r;R++)p.push(0,f*w,0),m.push(0,w,0),d.push(.5,.5),_++;const L=_;for(let R=0;R<=r;R++){const v=R/r*l+a,F=Math.cos(v),J=Math.sin(v);T.x=X*J,T.y=f*w,T.z=X*F,p.push(T.x,T.y,T.z),m.push(0,w,0),P.x=F*.5+.5,P.y=J*.5*w+.5,d.push(P.x,P.y),_++}for(let R=0;R<r;R++){const V=A+R,v=L+R;b===!0?h.push(v,v+1,V):h.push(v+1,v,V),H+=3}c.addGroup(u,H,b===!0?1:2),u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends ea{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new na(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vl extends Ho{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Ho().fromJSON(r))}return this}}const Om={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Wl(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,p,m,d;if(n&&(s=Gm(i,t,s,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let _=e;_<r;_+=e)p=i[_],m=i[_+1],p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>h&&(h=m);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Vi(s,o,e,a,l,d,0),o}};function Wl(i,t,e,n,r){let s,o;if(r===$m(i,t,e,n)>0)for(s=t;s<e;s+=n)o=Vo(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=Vo(s,i[s],i[s+1],o);return o&&zr(o,o.next)&&(Xi(o),o=o.next),o}function Fn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zr(e,e.next)||ee(e.prev,e,e.next)===0)){if(Xi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vi(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Ym(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?zm(i,n,r,s):Fm(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Xi(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Bm(Fn(i),t,e),Vi(i,t,e,n,r,s,2)):o===2&&km(i,t,e,n,r,s):Vi(Fn(i),t,e,n,r,s,1);break}}}function Fm(i){const t=i.prev,e=i,n=i.next;if(ee(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,p=a<l?a<c?a:c:l<c?l:c,m=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=m&&_.y>=p&&_.y<=d&&hi(r,a,s,l,o,c,_.x,_.y)&&ee(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function zm(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ee(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,p=s.y,m=o.y,d=a<l?a<c?a:c:l<c?l:c,_=h<p?h<m?h:m:p<m?p:m,g=a>l?a>c?a:c:l>c?l:c,f=h>p?h>m?h:m:p>m?p:m,u=Vs(d,_,t,e,n),S=Vs(g,f,t,e,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=u&&b&&b.z<=S;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=f&&y!==r&&y!==o&&hi(a,h,l,p,c,m,y.x,y.y)&&ee(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=g&&b.y>=_&&b.y<=f&&b!==r&&b!==o&&hi(a,h,l,p,c,m,b.x,b.y)&&ee(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=f&&y!==r&&y!==o&&hi(a,h,l,p,c,m,y.x,y.y)&&ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=d&&b.x<=g&&b.y>=_&&b.y<=f&&b!==r&&b!==o&&hi(a,h,l,p,c,m,b.x,b.y)&&ee(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Bm(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!zr(r,s)&&Xl(r,n,n.next,s)&&Wi(r,s)&&Wi(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Xi(n),Xi(n.next),n=i=s),n=n.next}while(n!==i);return Fn(n)}function km(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let l=Yl(o,a);o=Fn(o,o.next),l=Fn(l,l.next),Vi(o,t,e,n,r,s,0),Vi(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Gm(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Wl(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(jm(c));for(r.sort(Hm),s=0;s<r.length;s++)e=Vm(r[s],e);return e}function Hm(i,t){return i.x-t.x}function Vm(i,t){const e=Wm(i,t);if(!e)return t;const n=Yl(e,i);return Fn(n,n.next),Fn(e,e.next)}function Wm(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=s&&m>n&&(n=m,r=e.x<e.next.x?e:e.next,m===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,p;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&hi(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(s-e.x),Wi(e,i)&&(p<h||p===h&&(e.x>r.x||e.x===r.x&&Xm(r,e)))&&(r=e,h=p)),e=e.next;while(e!==a);return r}function Xm(i,t){return ee(i.prev,i,t.prev)<0&&ee(t.next,i,i.next)<0}function Ym(i,t,e,n){let r=i;do r.z===0&&(r.z=Vs(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,qm(r)}function qm(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function Vs(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hi(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Km(i,t)&&(Wi(i,t)&&Wi(t,i)&&Jm(i,t)&&(ee(i.prev,i,t.prev)||ee(i,t.prev,t))||zr(i,t)&&ee(i.prev,i,i.next)>0&&ee(t.prev,t,t.next)>0)}function ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zr(i,t){return i.x===t.x&&i.y===t.y}function Xl(i,t,e,n){const r=yr(ee(i,t,e)),s=yr(ee(i,t,n)),o=yr(ee(e,n,i)),a=yr(ee(e,n,t));return!!(r!==s&&o!==a||r===0&&xr(i,e,t)||s===0&&xr(i,n,t)||o===0&&xr(e,i,n)||a===0&&xr(e,t,n))}function xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yr(i){return i>0?1:i<0?-1:0}function Km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Wi(i,t){return ee(i.prev,i,i.next)<0?ee(i,t,i.next)>=0&&ee(i,i.prev,t)>=0:ee(i,t,i.prev)<0||ee(i,i.next,t)<0}function Jm(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yl(i,t){const e=new Ws(i.i,i.x,i.y),n=new Ws(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Vo(i,t,e,n){const r=new Ws(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ws(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $m(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Gi{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Gi.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Wo(t),Xo(n,t);let o=t.length;e.forEach(Wo);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Xo(n,e[l]);const a=Om.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Wo(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xo(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ia extends Fe{constructor(t=new Vl([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new xe(r,3)),this.setAttribute("uv",new xe(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Qm;let y,b=!1,A,P,T,H;u&&(y=u.getSpacedPoints(h),b=!0,m=!1,A=u.computeFrenetFrames(h,!1),P=new Y,T=new Y,H=new Y),m||(f=0,d=0,_=0,g=0);const X=a.extractPoints(c);let w=X.shape;const L=X.holes;if(!Gi.isClockWise(w)){w=w.reverse();for(let B=0,pt=L.length;B<pt;B++){const x=L[B];Gi.isClockWise(x)&&(L[B]=x.reverse())}}const V=Gi.triangulateShape(w,L),v=w;for(let B=0,pt=L.length;B<pt;B++){const x=L[B];w=w.concat(x)}function F(B,pt,x){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(pt,x)}const J=w.length,j=V.length;function nt(B,pt,x){let q,z,D;const C=B.x-pt.x,M=B.y-pt.y,E=x.x-B.x,U=x.y-B.y,O=C*C+M*M,$=C*U-M*E;if(Math.abs($)>Number.EPSILON){const tt=Math.sqrt(O),rt=Math.sqrt(E*E+U*U),lt=pt.x-M/tt,mt=pt.y+C/tt,yt=x.x-U/rt,Dt=x.y+E/rt,ut=((yt-lt)*U-(Dt-mt)*E)/(C*U-M*E);q=lt+C*ut-B.x,z=mt+M*ut-B.y;const zt=q*q+z*z;if(zt<=2)return new St(q,z);D=Math.sqrt(zt/2)}else{let tt=!1;C>Number.EPSILON?E>Number.EPSILON&&(tt=!0):C<-Number.EPSILON?E<-Number.EPSILON&&(tt=!0):Math.sign(M)===Math.sign(U)&&(tt=!0),tt?(q=-M,z=C,D=Math.sqrt(O)):(q=C,z=M,D=Math.sqrt(O/2))}return new St(q/D,z/D)}const Z=[];for(let B=0,pt=v.length,x=pt-1,q=B+1;B<pt;B++,x++,q++)x===pt&&(x=0),q===pt&&(q=0),Z[B]=nt(v[B],v[x],v[q]);const it=[];let G,W=Z.concat();for(let B=0,pt=L.length;B<pt;B++){const x=L[B];G=[];for(let q=0,z=x.length,D=z-1,C=q+1;q<z;q++,D++,C++)D===z&&(D=0),C===z&&(C=0),G[q]=nt(x[q],x[D],x[C]);it.push(G),W=W.concat(G)}for(let B=0;B<f;B++){const pt=B/f,x=d*Math.cos(pt*Math.PI/2),q=_*Math.sin(pt*Math.PI/2)+g;for(let z=0,D=v.length;z<D;z++){const C=F(v[z],Z[z],q);Et(C.x,C.y,-x)}for(let z=0,D=L.length;z<D;z++){const C=L[z];G=it[z];for(let M=0,E=C.length;M<E;M++){const U=F(C[M],G[M],q);Et(U.x,U.y,-x)}}}const ht=_+g;for(let B=0;B<J;B++){const pt=m?F(w[B],W[B],ht):w[B];b?(T.copy(A.normals[0]).multiplyScalar(pt.x),P.copy(A.binormals[0]).multiplyScalar(pt.y),H.copy(y[0]).add(T).add(P),Et(H.x,H.y,H.z)):Et(pt.x,pt.y,0)}for(let B=1;B<=h;B++)for(let pt=0;pt<J;pt++){const x=m?F(w[pt],W[pt],ht):w[pt];b?(T.copy(A.normals[B]).multiplyScalar(x.x),P.copy(A.binormals[B]).multiplyScalar(x.y),H.copy(y[B]).add(T).add(P),Et(H.x,H.y,H.z)):Et(x.x,x.y,p/h*B)}for(let B=f-1;B>=0;B--){const pt=B/f,x=d*Math.cos(pt*Math.PI/2),q=_*Math.sin(pt*Math.PI/2)+g;for(let z=0,D=v.length;z<D;z++){const C=F(v[z],Z[z],q);Et(C.x,C.y,p+x)}for(let z=0,D=L.length;z<D;z++){const C=L[z];G=it[z];for(let M=0,E=C.length;M<E;M++){const U=F(C[M],G[M],q);b?Et(U.x,U.y+y[h-1].y,y[h-1].x+x):Et(U.x,U.y,p+x)}}}K(),Q();function K(){const B=r.length/3;if(m){let pt=0,x=J*pt;for(let q=0;q<j;q++){const z=V[q];vt(z[2]+x,z[1]+x,z[0]+x)}pt=h+f*2,x=J*pt;for(let q=0;q<j;q++){const z=V[q];vt(z[0]+x,z[1]+x,z[2]+x)}}else{for(let pt=0;pt<j;pt++){const x=V[pt];vt(x[2],x[1],x[0])}for(let pt=0;pt<j;pt++){const x=V[pt];vt(x[0]+J*h,x[1]+J*h,x[2]+J*h)}}n.addGroup(B,r.length/3-B,0)}function Q(){const B=r.length/3;let pt=0;xt(v,pt),pt+=v.length;for(let x=0,q=L.length;x<q;x++){const z=L[x];xt(z,pt),pt+=z.length}n.addGroup(B,r.length/3-B,1)}function xt(B,pt){let x=B.length;for(;--x>=0;){const q=x;let z=x-1;z<0&&(z=B.length-1);for(let D=0,C=h+f*2;D<C;D++){const M=J*D,E=J*(D+1),U=pt+q+M,O=pt+z+M,$=pt+z+E,tt=pt+q+E;gt(U,O,$,tt)}}}function Et(B,pt,x){l.push(B),l.push(pt),l.push(x)}function vt(B,pt,x){Rt(B),Rt(pt),Rt(x);const q=r.length/3,z=S.generateTopUV(n,r,q-3,q-2,q-1);bt(z[0]),bt(z[1]),bt(z[2])}function gt(B,pt,x,q){Rt(B),Rt(pt),Rt(q),Rt(pt),Rt(x),Rt(q);const z=r.length/3,D=S.generateSideWallUV(n,r,z-6,z-3,z-2,z-1);bt(D[0]),bt(D[1]),bt(D[3]),bt(D[1]),bt(D[2]),bt(D[3])}function Rt(B){r.push(l[B*3+0]),r.push(l[B*3+1]),r.push(l[B*3+2])}function bt(B){s.push(B.x),s.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Hs[r.type]().fromJSON(r)),new ia(n,t.options)}}const Qm={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new St(s,o),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[r*3],d=t[r*3+1],_=t[r*3+2],g=t[s*3],f=t[s*3+1],u=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-p),new St(m,1-_),new St(g,1-u)]:[new St(a,1-l),new St(h,1-p),new St(d,1-_),new St(f,1-u)]}};function tg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class eg extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ql extends oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ng extends ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cs=new ne,Yo=new Y,qo=new Y;class ig{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),Cs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rg extends ig{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ra extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(oe.DEFAULT_UP),this.updateMatrix(),this.target=new oe,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sg extends Sm{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Fe;r.setAttribute("position",new xe(e,3)),r.setAttribute("color",new xe(n,3));const s=new $s({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new qt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);const Zo={type:"change"},Rs={type:"start"},Ko={type:"end"},Sr=new Zs,Jo=new fn,ag=Math.cos(70*cu.DEG2RAD);class og extends Bn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",yt),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",yt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zo),n.update(),s=r.NONE},this.update=function(){const k=new Y,_t=new On().setFromUnitVectors(t.up,new Y(0,1,0)),wt=_t.clone().invert(),It=new Y,N=new On,dt=new Y,ft=2*Math.PI;return function(Nt=null){const Zt=n.object.position;k.copy(Zt).sub(n.target),k.applyQuaternion(_t),a.setFromVector3(k),n.autoRotate&&s===r.NONE&&R(w(Nt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=n.minAzimuthAngle,$t=n.maxAzimuthAngle;isFinite(jt)&&isFinite($t)&&(jt<-Math.PI?jt+=ft:jt>Math.PI&&(jt-=ft),$t<-Math.PI?$t+=ft:$t>Math.PI&&($t-=ft),jt<=$t?a.theta=Math.max(jt,Math.min($t,a.theta)):a.theta=a.theta>(jt+$t)/2?Math.max(jt,a.theta):Math.min($t,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?a.radius=it(a.radius):a.radius=it(a.radius*c),k.setFromSpherical(a),k.applyQuaternion(wt),Zt.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let pe=!1;if(n.zoomToCursor&&P){let Kt=null;if(n.object.isPerspectiveCamera){const re=k.length();Kt=it(re*c);const ye=re-Kt;n.object.position.addScaledVector(b,ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const re=new Y(A.x,A.y,0);re.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pe=!0;const ye=new Y(A.x,A.y,0);ye.unproject(n.object),n.object.position.sub(ye).add(re),n.object.updateMatrixWorld(),Kt=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Kt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Kt).add(n.object.position):(Sr.origin.copy(n.object.position),Sr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Sr.direction))<ag?t.lookAt(n.target):(Jo.setFromNormalAndCoplanarPoint(n.object.up,n.target),Sr.intersectPlane(Jo,n.target))))}else n.object.isOrthographicCamera&&(pe=c!==1,pe&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,P=!1,pe||It.distanceToSquared(n.object.position)>o||8*(1-N.dot(n.object.quaternion))>o||dt.distanceToSquared(n.target)>0?(n.dispatchEvent(Zo),It.copy(n.object.position),N.copy(n.object.quaternion),dt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",zt),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",yt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jo,l=new jo;let c=1;const h=new Y,p=new St,m=new St,d=new St,_=new St,g=new St,f=new St,u=new St,S=new St,y=new St,b=new Y,A=new St;let P=!1;const T=[],H={};let X=!1;function w(k){return k!==null?2*Math.PI/60*n.autoRotateSpeed*k:2*Math.PI/60/60*n.autoRotateSpeed}function L(k){const _t=Math.abs(k*.01);return Math.pow(.95,n.zoomSpeed*_t)}function R(k){l.theta-=k}function V(k){l.phi-=k}const v=function(){const k=new Y;return function(wt,It){k.setFromMatrixColumn(It,0),k.multiplyScalar(-wt),h.add(k)}}(),F=function(){const k=new Y;return function(wt,It){n.screenSpacePanning===!0?k.setFromMatrixColumn(It,1):(k.setFromMatrixColumn(It,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(wt),h.add(k)}}(),J=function(){const k=new Y;return function(wt,It){const N=n.domElement;if(n.object.isPerspectiveCamera){const dt=n.object.position;k.copy(dt).sub(n.target);let ft=k.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),v(2*wt*ft/N.clientHeight,n.object.matrix),F(2*It*ft/N.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(wt*(n.object.right-n.object.left)/n.object.zoom/N.clientWidth,n.object.matrix),F(It*(n.object.top-n.object.bottom)/n.object.zoom/N.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(k,_t){if(!n.zoomToCursor)return;P=!0;const wt=n.domElement.getBoundingClientRect(),It=k-wt.left,N=_t-wt.top,dt=wt.width,ft=wt.height;A.x=It/dt*2-1,A.y=-(N/ft)*2+1,b.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function G(k){p.set(k.clientX,k.clientY)}function W(k){Z(k.clientX,k.clientX),u.set(k.clientX,k.clientY)}function ht(k){_.set(k.clientX,k.clientY)}function K(k){m.set(k.clientX,k.clientY),d.subVectors(m,p).multiplyScalar(n.rotateSpeed);const _t=n.domElement;R(2*Math.PI*d.x/_t.clientHeight),V(2*Math.PI*d.y/_t.clientHeight),p.copy(m),n.update()}function Q(k){S.set(k.clientX,k.clientY),y.subVectors(S,u),y.y>0?j(L(y.y)):y.y<0&&nt(L(y.y)),u.copy(S),n.update()}function xt(k){g.set(k.clientX,k.clientY),f.subVectors(g,_).multiplyScalar(n.panSpeed),J(f.x,f.y),_.copy(g),n.update()}function Et(k){Z(k.clientX,k.clientY),k.deltaY<0?nt(L(k.deltaY)):k.deltaY>0&&j(L(k.deltaY)),n.update()}function vt(k){let _t=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),_t=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),_t=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),_t=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),_t=!0;break}_t&&(k.preventDefault(),n.update())}function gt(k){if(T.length===1)p.set(k.pageX,k.pageY);else{const _t=Tt(k),wt=.5*(k.pageX+_t.x),It=.5*(k.pageY+_t.y);p.set(wt,It)}}function Rt(k){if(T.length===1)_.set(k.pageX,k.pageY);else{const _t=Tt(k),wt=.5*(k.pageX+_t.x),It=.5*(k.pageY+_t.y);_.set(wt,It)}}function bt(k){const _t=Tt(k),wt=k.pageX-_t.x,It=k.pageY-_t.y,N=Math.sqrt(wt*wt+It*It);u.set(0,N)}function B(k){n.enableZoom&&bt(k),n.enablePan&&Rt(k)}function pt(k){n.enableZoom&&bt(k),n.enableRotate&&gt(k)}function x(k){if(T.length==1)m.set(k.pageX,k.pageY);else{const wt=Tt(k),It=.5*(k.pageX+wt.x),N=.5*(k.pageY+wt.y);m.set(It,N)}d.subVectors(m,p).multiplyScalar(n.rotateSpeed);const _t=n.domElement;R(2*Math.PI*d.x/_t.clientHeight),V(2*Math.PI*d.y/_t.clientHeight),p.copy(m)}function q(k){if(T.length===1)g.set(k.pageX,k.pageY);else{const _t=Tt(k),wt=.5*(k.pageX+_t.x),It=.5*(k.pageY+_t.y);g.set(wt,It)}f.subVectors(g,_).multiplyScalar(n.panSpeed),J(f.x,f.y),_.copy(g)}function z(k){const _t=Tt(k),wt=k.pageX-_t.x,It=k.pageY-_t.y,N=Math.sqrt(wt*wt+It*It);S.set(0,N),y.set(0,Math.pow(S.y/u.y,n.zoomSpeed)),j(y.y),u.copy(S);const dt=(k.pageX+_t.x)*.5,ft=(k.pageY+_t.y)*.5;Z(dt,ft)}function D(k){n.enableZoom&&z(k),n.enablePan&&q(k)}function C(k){n.enableZoom&&z(k),n.enableRotate&&x(k)}function M(k){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",U)),Bt(k),k.pointerType==="touch"?Dt(k):O(k))}function E(k){n.enabled!==!1&&(k.pointerType==="touch"?ut(k):$(k))}function U(k){switch(At(k),T.length){case 0:n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",U),n.dispatchEvent(Ko),s=r.NONE;break;case 1:const _t=T[0],wt=H[_t];Dt({pointerId:_t,pageX:wt.x,pageY:wt.y});break}}function O(k){let _t;switch(k.button){case 0:_t=n.mouseButtons.LEFT;break;case 1:_t=n.mouseButtons.MIDDLE;break;case 2:_t=n.mouseButtons.RIGHT;break;default:_t=-1}switch(_t){case Hn.DOLLY:if(n.enableZoom===!1)return;W(k),s=r.DOLLY;break;case Hn.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ht(k),s=r.PAN}else{if(n.enableRotate===!1)return;G(k),s=r.ROTATE}break;case Hn.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;G(k),s=r.ROTATE}else{if(n.enablePan===!1)return;ht(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Rs)}function $(k){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;K(k);break;case r.DOLLY:if(n.enableZoom===!1)return;Q(k);break;case r.PAN:if(n.enablePan===!1)return;xt(k);break}}function tt(k){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(k.preventDefault(),n.dispatchEvent(Rs),Et(rt(k)),n.dispatchEvent(Ko))}function rt(k){const _t=k.deltaMode,wt={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(_t){case 1:wt.deltaY*=16;break;case 2:wt.deltaY*=100;break}return k.ctrlKey&&!X&&(wt.deltaY*=10),wt}function lt(k){k.key==="Control"&&(X=!0,n.domElement.getRootNode().addEventListener("keyup",mt,{passive:!0,capture:!0}))}function mt(k){k.key==="Control"&&(X=!1,n.domElement.getRootNode().removeEventListener("keyup",mt,{passive:!0,capture:!0}))}function yt(k){n.enabled===!1||n.enablePan===!1||vt(k)}function Dt(k){switch(Pt(k),T.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;gt(k),s=r.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;Rt(k),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(k),s=r.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(k),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Rs)}function ut(k){switch(Pt(k),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;x(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;q(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(k),n.update();break;default:s=r.NONE}}function zt(k){n.enabled!==!1&&k.preventDefault()}function Bt(k){T.push(k.pointerId)}function At(k){delete H[k.pointerId];for(let _t=0;_t<T.length;_t++)if(T[_t]==k.pointerId){T.splice(_t,1);return}}function Pt(k){let _t=H[k.pointerId];_t===void 0&&(_t=new St,H[k.pointerId]=_t),_t.set(k.pageX,k.pageY)}function Tt(k){const _t=k.pointerId===T[0]?T[1]:T[0];return H[_t]}n.domElement.addEventListener("contextmenu",zt),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",tt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",lt,{passive:!0,capture:!0}),this.update()}}class lg extends oe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new St(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ai=new Y,$o=new ne,Qo=new ne,tl=new Y,el=new Y;class cg{constructor(t={}){const e=this;let n,r,s,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(d,_){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),$o.copy(_.matrixWorldInverse),Qo.multiplyMatrices(_.projectionMatrix,$o),c(d,d,_),m(d)},this.setSize=function(d,_){n=d,r=_,s=n/2,o=r/2,l.style.width=d+"px",l.style.height=_+"px"};function c(d,_,g){if(d.isCSS2DObject){ai.setFromMatrixPosition(d.matrixWorld),ai.applyMatrix4(Qo);const f=d.visible===!0&&ai.z>=-1&&ai.z<=1&&d.layers.test(g.layers)===!0;if(d.element.style.display=f===!0?"":"none",f===!0){d.onBeforeRender(e,_,g);const S=d.element;S.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(ai.x*s+s)+"px,"+(-ai.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),d.onAfterRender(e,_,g)}const u={distanceToCameraSquared:h(g,d)};a.objects.set(d,u)}for(let f=0,u=d.children.length;f<u;f++)c(d.children[f],_,g)}function h(d,_){return tl.setFromMatrixPosition(d.matrixWorld),el.setFromMatrixPosition(_.matrixWorld),tl.distanceToSquared(el)}function p(d){const _=[];return d.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function m(d){const _=p(d).sort(function(f,u){if(f.renderOrder!==u.renderOrder)return u.renderOrder-f.renderOrder;const S=a.objects.get(f).distanceToCameraSquared,y=a.objects.get(u).distanceToCameraSquared;return S-y}),g=_.length;for(let f=0,u=_.length;f<u;f++)_[f].element.style.zIndex=g-f}}}const oi=1024;function ug(i,t){if(i<=0||t<=0)return{width:oi,height:oi};const e=i/t;return e>=1?{width:oi,height:Math.round(oi/e)}:{width:Math.round(oi*e),height:oi}}function hg(i,t,e,n){const{width:r,height:s}=ug(t,e),o=document.createElement("canvas");o.width=r,o.height=s;const a=o.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,r,s);const l=Math.max(0,(n==null?void 0:n.x)??0),c=Math.max(0,(n==null?void 0:n.y)??0),h=t>0?l/t*r:0,p=e>0?c/e*s:0,m=Math.max(1,r-h*2),d=Math.max(1,s-p*2),_=i.width,g=i.height,f=Math.min(m/_,d/g),u=_*f,S=g*f,y=h+(m-u)/2,b=p+(d-S)/2;a.drawImage(i,y,b,u,S);const A=new Mm(o);return A.colorSpace=fe,A.wrapS=Le,A.wrapT=Le,A.needsUpdate=!0,A}class fg{parse(t,e={}){e=Object.assign({binary:!1},e);const n=e.binary,r=[];let s=0;t.traverse(function(u){if(u.isMesh){const S=u.geometry,y=S.index,b=S.getAttribute("position");s+=y!==null?y.count/3:b.count/3,r.push({object3d:u,geometry:S})}});let o,a=80;if(n===!0){const u=s*2+s*3*4*4+80+4,S=new ArrayBuffer(u);o=new DataView(S),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new Y,c=new Y,h=new Y,p=new Y,m=new Y,d=new Y;for(let u=0,S=r.length;u<S;u++){const y=r[u].object3d,b=r[u].geometry,A=b.index,P=b.getAttribute("position");if(A!==null)for(let T=0;T<A.count;T+=3){const H=A.getX(T+0),X=A.getX(T+1),w=A.getX(T+2);_(H,X,w,P,y)}else for(let T=0;T<P.count;T+=3){const H=T+0,X=T+1,w=T+2;_(H,X,w,P,y)}}return n===!1&&(o+=`endsolid exported
`),o;function _(u,S,y,b,A){l.fromBufferAttribute(b,u),c.fromBufferAttribute(b,S),h.fromBufferAttribute(b,y),A.isSkinnedMesh===!0&&(A.applyBoneTransform(u,l),A.applyBoneTransform(S,c),A.applyBoneTransform(y,h)),l.applyMatrix4(A.matrixWorld),c.applyMatrix4(A.matrixWorld),h.applyMatrix4(A.matrixWorld),g(l,c,h),f(l),f(c),f(h),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function g(u,S,y){p.subVectors(y,S),m.subVectors(u,S),p.cross(m).normalize(),d.copy(p).normalize(),n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function f(u){n===!0?(o.setFloat32(a,u.x,!0),a+=4,o.setFloat32(a,u.y,!0),a+=4,o.setFloat32(a,u.z,!0),a+=4):o+="			vertex "+u.x+" "+u.y+" "+u.z+`
`}}}var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Er(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jl={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,h){if(!r[c]){if(!n[c]){var p=typeof Er=="function"&&Er;if(!h&&p)return p(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var d=r[c]={exports:{}};n[c][0].call(d.exports,function(_){var g=n[c][1][_];return o(g||_)},d,d.exports,e,n,r,s)}return r[c].exports}for(var a=typeof Er=="function"&&Er,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,h,p,m,d,_,g,f=[],u=0,S=l.length,y=S,b=s.getTypeOf(l)!=="string";u<l.length;)y=S-u,p=b?(c=l[u++],h=u<S?l[u++]:0,u<S?l[u++]:0):(c=l.charCodeAt(u++),h=u<S?l.charCodeAt(u++):0,u<S?l.charCodeAt(u++):0),m=c>>2,d=(3&c)<<4|h>>4,_=1<y?(15&h)<<2|p>>6:64,g=2<y?63&p:64,f.push(a.charAt(m)+a.charAt(d)+a.charAt(_)+a.charAt(g));return f.join("")},r.decode=function(l){var c,h,p,m,d,_,g=0,f=0,u="data:";if(l.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&y--,l.charAt(l.length-2)===a.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=o.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(m=a.indexOf(l.charAt(g++)))>>4,h=(15&m)<<4|(d=a.indexOf(l.charAt(g++)))>>2,p=(3&d)<<6|(_=a.indexOf(l.charAt(g++))),S[f++]=c,d!==64&&(S[f++]=h),_!==64&&(S[f++]=p);return S}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(h,p,m,d,_){this.compressedSize=h,this.uncompressedSize=p,this.crc32=m,this.compression=d,this.compressedContent=_}c.prototype={getContentWorker:function(){var h=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return h.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(h,p,m){return h.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var h=0;h<8;h++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,h,p,m){var d=o,_=m+p;c^=-1;for(var g=m;g<_;g++)c=c>>>8^d[255&(c^h[g])];return-1^c}(0|l,a,a.length,0):function(c,h,p,m){var d=o,_=m+p;c^=-1;for(var g=m;g<_;g++)c=c>>>8^d[255&(c^h.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function h(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(h,l),h.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,p.data),!1)},h.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},r.compressWorker=function(p){return new h("Deflate",p)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(d,_){var g,f="";for(g=0;g<_;g++)f+=String.fromCharCode(255&d),d>>>=8;return f}function o(d,_,g,f,u,S){var y,b,A=d.file,P=d.compression,T=S!==c.utf8encode,H=a.transformTo("string",S(A.name)),X=a.transformTo("string",c.utf8encode(A.name)),w=A.comment,L=a.transformTo("string",S(w)),R=a.transformTo("string",c.utf8encode(w)),V=X.length!==A.name.length,v=R.length!==w.length,F="",J="",j="",nt=A.dir,Z=A.date,it={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(it.crc32=d.crc32,it.compressedSize=d.compressedSize,it.uncompressedSize=d.uncompressedSize);var G=0;_&&(G|=8),T||!V&&!v||(G|=2048);var W=0,ht=0;nt&&(W|=16),u==="UNIX"?(ht=798,W|=function(Q,xt){var Et=Q;return Q||(Et=xt?16893:33204),(65535&Et)<<16}(A.unixPermissions,nt)):(ht=20,W|=function(Q){return 63&(Q||0)}(A.dosPermissions)),y=Z.getUTCHours(),y<<=6,y|=Z.getUTCMinutes(),y<<=5,y|=Z.getUTCSeconds()/2,b=Z.getUTCFullYear()-1980,b<<=4,b|=Z.getUTCMonth()+1,b<<=5,b|=Z.getUTCDate(),V&&(J=s(1,1)+s(h(H),4)+X,F+="up"+s(J.length,2)+J),v&&(j=s(1,1)+s(h(L),4)+R,F+="uc"+s(j.length,2)+j);var K="";return K+=`
\0`,K+=s(G,2),K+=P.magic,K+=s(y,2),K+=s(b,2),K+=s(it.crc32,4),K+=s(it.compressedSize,4),K+=s(it.uncompressedSize,4),K+=s(H.length,2),K+=s(F.length,2),{fileRecord:p.LOCAL_FILE_HEADER+K+H+F,dirRecord:p.CENTRAL_FILE_HEADER+s(ht,2)+K+s(L.length,2)+"\0\0\0\0"+s(W,4)+s(f,4)+H+F+L}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),h=e("../crc32"),p=e("../signature");function m(d,_,g,f){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=f,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-f-1))/g:100}}))},m.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=o(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=o(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(f){return p.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,f=function(u,S,y,b,A){var P=a.transformTo("string",A(b));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(u,2)+s(u,2)+s(S,4)+s(y,4)+s(P.length,2)+P}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(d){var _=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var h=new o(l.streamFiles,c,l.platform,l.encodeFileName),p=0;try{a.forEach(function(m,d){p++;var _=function(S,y){var b=S||y,A=s[b];if(!A)throw new Error(b+" is not a valid compression method !");return A}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},f=d.dir,u=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:m,dir:f,date:u,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(h)}),h.entriesCount=p}catch(m){h.error(m)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),h=e("./nodejsUtils");function p(m){return new o.Promise(function(d,_){var g=m.decompressed.getContentWorker().pipe(new c);g.on("error",function(f){_(f)}).on("end",function(){g.streamInfo.crc32!==m.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(m,d){var _=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),h.isNode&&h.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,d.optimizedBinaryString,d.base64).then(function(g){var f=new l(d);return f.load(g),f}).then(function(g){var f=[o.Promise.resolve(g)],u=g.files;if(d.checkCRC32)for(var S=0;S<u.length;S++)f.push(p(u[S]));return o.Promise.all(f)}).then(function(g){for(var f=g.shift(),u=f.files,S=0;S<u.length;S++){var y=u[S],b=y.fileNameStr,A=s.resolve(y.fileNameStr);_.file(A,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:d.createFolders}),y.dir||(_.file(A).unsafeOriginalName=b)}return f.zipComment.length&&(_.comment=f.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(h){c.push({data:h,meta:{percent:0}})}).on("error",function(h){c.isPaused?this.generatedError=h:c.error(h)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var h=this;a.on("data",function(p,m){h.push(p)||h._helper.pause(),c&&c(m)}).on("error",function(p){h.emit("error",p)}).on("end",function(){h.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(A,P,T){var H,X=a.getTypeOf(P),w=a.extend(T||{},h);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(A=u(A)),w.createFolders&&(H=f(A))&&S.call(this,H,!0);var L=X==="string"&&w.binary===!1&&w.base64===!1;T&&T.binary!==void 0||(w.binary=!L),(P instanceof p&&P.uncompressedSize===0||w.dir||!P||P.length===0)&&(w.base64=!1,w.binary=!0,P="",w.compression="STORE",X="string");var R=null;R=P instanceof p||P instanceof l?P:_.isNode&&_.isStream(P)?new g(A,P):a.prepareContent(A,P,w.binary,w.optimizedBinaryString,w.base64);var V=new m(A,R,w);this.files[A]=V}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),h=e("./defaults"),p=e("./compressedObject"),m=e("./zipObject"),d=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),f=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var P=A.lastIndexOf("/");return 0<P?A.substring(0,P):""},u=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},S=function(A,P){return P=P!==void 0?P:h.createFolders,A=u(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:P}),this.files[A]};function y(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var b={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var P,T,H;for(P in this.files)H=this.files[P],(T=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&A(T,H)},filter:function(A){var P=[];return this.forEach(function(T,H){A(T,H)&&P.push(H)}),P},file:function(A,P,T){if(arguments.length!==1)return A=this.root+A,s.call(this,A,P,T),this;if(y(A)){var H=A;return this.filter(function(w,L){return!L.dir&&H.test(w)})}var X=this.files[this.root+A];return X&&!X.dir?X:null},folder:function(A){if(!A)return this;if(y(A))return this.filter(function(X,w){return w.dir&&A.test(X)});var P=this.root+A,T=S.call(this,P),H=this.clone();return H.root=T.name,H},remove:function(A){A=this.root+A;var P=this.files[A];if(P||(A.slice(-1)!=="/"&&(A+="/"),P=this.files[A]),P&&!P.dir)delete this.files[A];else for(var T=this.filter(function(X,w){return w.name.slice(0,A.length)===A}),H=0;H<T.length;H++)delete this.files[T[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var P,T={};try{if((T=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var H=T.comment||this.comment||"";P=d.generateWorker(this,T,H)}catch(X){(P=new l("error")).error(X)}return new c(P,T.type||"string",T.mimeType)},generateAsync:function(A,P){return this.generateInternalStream(A).accumulate(P)},generateNodeStream:function(A,P){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(P)}};n.exports=b},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),p=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===h&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),h=a.charCodeAt(2),p=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&h===m[2]&&p===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");n.exports=function(p){var m=s.getTypeOf(p);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(p):o.uint8array?new h(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(h){c.dataIsReady=!0,c.data=h,c.max=h&&h.length||0,c.type=s.getTypeOf(h),c.isPaused||c._tickAndRepeat()},function(h){c.error(h)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),h=e("../external"),p=null;if(c.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(_,g){return new h.Promise(function(f,u){var S=[],y=_._internalType,b=_._outputType,A=_._mimeType;_.on("data",function(P,T){S.push(P),g&&g(T)}).on("error",function(P){S=[],u(P)}).on("end",function(){try{var P=function(T,H,X){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",H),X);case"base64":return l.encode(H);default:return s.transformTo(T,H)}}(b,function(T,H){var X,w=0,L=null,R=0;for(X=0;X<H.length;X++)R+=H[X].length;switch(T){case"string":return H.join("");case"array":return Array.prototype.concat.apply([],H);case"uint8array":for(L=new Uint8Array(R),X=0;X<H.length;X++)L.set(H[X],w),w+=H[X].length;return L;case"nodebuffer":return Buffer.concat(H);default:throw new Error("concat : unsupported type '"+T+"'")}}(y,S),A);f(P)}catch(T){u(T)}S=[]}).resume()})}function d(_,g,f){var u=g;switch(g){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=g,this._mimeType=f,s.checkSupport(u),this._worker=_.pipe(new o(u)),_.lock()}catch(S){this._worker=new a("error"),this._worker.error(S)}}d.prototype={accumulate:function(_){return m(this,_)},on:function(_,g){var f=this;return _==="data"?this._worker.on(_,function(u){g.call(f,u.data,u.meta)}):this._worker.on(_,function(){s.delay(g,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),h=0;h<256;h++)c[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;c[254]=c[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(_){var g,f,u,S,y,b=_.length,A=0;for(S=0;S<b;S++)(64512&(f=_.charCodeAt(S)))==55296&&S+1<b&&(64512&(u=_.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(u-56320),S++),A+=f<128?1:f<2048?2:f<65536?3:4;for(g=o.uint8array?new Uint8Array(A):new Array(A),S=y=0;y<A;S++)(64512&(f=_.charCodeAt(S)))==55296&&S+1<b&&(64512&(u=_.charCodeAt(S+1)))==56320&&(f=65536+(f-55296<<10)+(u-56320),S++),f<128?g[y++]=f:(f<2048?g[y++]=192|f>>>6:(f<65536?g[y++]=224|f>>>12:(g[y++]=240|f>>>18,g[y++]=128|f>>>12&63),g[y++]=128|f>>>6&63),g[y++]=128|63&f);return g}(d)},r.utf8decode=function(d){return o.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,f,u,S,y=_.length,b=new Array(2*y);for(g=f=0;g<y;)if((u=_[g++])<128)b[f++]=u;else if(4<(S=c[u]))b[f++]=65533,g+=S-1;else{for(u&=S===2?31:S===3?15:7;1<S&&g<y;)u=u<<6|63&_[g++],S--;1<S?b[f++]=65533:u<65536?b[f++]=u:(u-=65536,b[f++]=55296|u>>10&1023,b[f++]=56320|1023&u)}return b.length!==f&&(b.subarray?b=b.subarray(0,f):b.length=f),s.applyFromCharCode(b)}(d=s.transformTo(o.uint8array?"uint8array":"array",d))},s.inherits(p,l),p.prototype.processChunk=function(d){var _=s.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var f=function(S,y){var b;for((y=y||S.length)>S.length&&(y=S.length),b=y-1;0<=b&&(192&S[b])==128;)b--;return b<0||b===0?y:b+c[S[b]]>y?b:y}(_),u=_;f!==_.length&&(o.uint8array?(u=_.subarray(0,f),this.leftOver=_.subarray(f,_.length)):(u=_.slice(0,f),this.leftOver=_.slice(f,_.length))),this.push({data:r.utf8decode(u),meta:d.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,s.inherits(m,l),m.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function h(g,f){for(var u=0;u<g.length;++u)f[u]=255&g.charCodeAt(u);return f}e("setimmediate"),r.newBlob=function(g,f){r.checkSupport("blob");try{return new Blob([g],{type:f})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(g),u.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(g,f,u){var S=[],y=0,b=g.length;if(b<=u)return String.fromCharCode.apply(null,g);for(;y<b;)f==="array"||f==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+u,b)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+u,b)))),y+=u;return S.join("")},stringifyByChar:function(g){for(var f="",u=0;u<g.length;u++)f+=String.fromCharCode(g[u]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(g){var f=65536,u=r.getTypeOf(g),S=!0;if(u==="uint8array"?S=p.applyCanBeUsed.uint8array:u==="nodebuffer"&&(S=p.applyCanBeUsed.nodebuffer),S)for(;1<f;)try{return p.stringifyByChunk(g,u,f)}catch{f=Math.floor(f/2)}return p.stringifyByChar(g)}function d(g,f){for(var u=0;u<g.length;u++)f[u]=g[u];return f}r.applyFromCharCode=m;var _={};_.string={string:c,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:function(g){return h(g,a.allocBuffer(g.length))}},_.array={string:m,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return m(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:m,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:m,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,f){if(f=f||"",!g)return f;r.checkSupport(g);var u=r.getTypeOf(f);return _[u][g](f)},r.resolve=function(g){for(var f=g.split("/"),u=[],S=0;S<f.length;S++){var y=f[S];y==="."||y===""&&S!==0&&S!==f.length-1||(y===".."?u.pop():u.push(y))}return u.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var f,u,S="";for(u=0;u<(g||"").length;u++)S+="\\x"+((f=g.charCodeAt(u))<16?"0":"")+f.toString(16).toUpperCase();return S},r.delay=function(g,f,u){setImmediate(function(){g.apply(u||null,f||[])})},r.inherits=function(g,f){function u(){}u.prototype=f.prototype,g.prototype=new u},r.extend=function(){var g,f,u={};for(g=0;g<arguments.length;g++)for(f in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],f)&&u[f]===void 0&&(u[f]=arguments[g][f]);return u},r.prepareContent=function(g,f,u,S,y){return l.Promise.resolve(f).then(function(b){return s.blob&&(b instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(b))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,P){var T=new FileReader;T.onload=function(H){A(H.target.result)},T.onerror=function(H){P(H.target.error)},T.readAsArrayBuffer(b)}):b}).then(function(b){var A=r.getTypeOf(b);return A?(A==="arraybuffer"?b=r.transformTo("uint8array",b):A==="string"&&(y?b=o.decode(b):u&&S!==!0&&(b=function(P){return h(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(b))),b):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function h(p){this.files=[],this.loadOptions=p}h.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var d=this.reader.index;this.reader.setIndex(p);var _=this.reader.readString(4)===m;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",d=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,d,_=this.zip64EndOfCentralSize-44;0<_;)p=this.reader.readInt(2),m=this.reader.readInt(4),d=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=m-d;if(0<_)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),h=e("./compressions"),p=e("./support");function m(d,_){this.options=d,this.loadOptions=_}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(f){for(var u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&h[u].magic===f)return h[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,f,u=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<u;)_=d.readInt(2),g=d.readInt(2),f=d.readData(g),this.extraFields[_]={id:_,length:g,value:f};d.setIndex(u)},handleUTF8:function(){var d=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var u=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,f){this.name=_,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=g,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),h=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,f="string";try{if(!_)throw new Error("No output type specified.");var u=(f=_.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!u&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&u&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new h("error")).error(y)}return new o(g,f,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(f,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof h?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<p.length;d++)s.prototype[p[d]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,h=new l(_),p=s.document.createTextNode("");h.observe(p,{characterData:!0}),o=function(){p.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var m=new s.MessageChannel;m.port1.onmessage=_,o=function(){m.port2.postMessage(0)}}var d=[];function _(){var g,f;a=!0;for(var u=d.length;u;){for(f=d,d=[],g=-1;++g<u;)f[g]();u=d.length}a=!1}n.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],h=["PENDING"];function p(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,u!==o&&g(this,u)}function m(u,S,y){this.promise=u,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function d(u,S,y){s(function(){var b;try{b=S(y)}catch(A){return a.reject(u,A)}b===u?a.reject(u,new TypeError("Cannot resolve promise with itself")):a.resolve(u,b)})}function _(u){var S=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof S=="function")return function(){S.apply(u,arguments)}}function g(u,S){var y=!1;function b(T){y||(y=!0,a.reject(u,T))}function A(T){y||(y=!0,a.resolve(u,T))}var P=f(function(){S(A,b)});P.status==="error"&&b(P.value)}function f(u,S){var y={};try{y.value=u(S),y.status="success"}catch(b){y.status="error",y.value=b}return y}(n.exports=p).prototype.finally=function(u){if(typeof u!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(u()).then(function(){return y})},function(y){return S.resolve(u()).then(function(){throw y})})},p.prototype.catch=function(u){return this.then(null,u)},p.prototype.then=function(u,S){if(typeof u!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(o);return this.state!==h?d(y,this.state===c?u:S,this.outcome):this.queue.push(new m(y,u,S)),y},m.prototype.callFulfilled=function(u){a.resolve(this.promise,u)},m.prototype.otherCallFulfilled=function(u){d(this.promise,this.onFulfilled,u)},m.prototype.callRejected=function(u){a.reject(this.promise,u)},m.prototype.otherCallRejected=function(u){d(this.promise,this.onRejected,u)},a.resolve=function(u,S){var y=f(_,S);if(y.status==="error")return a.reject(u,y.value);var b=y.value;if(b)g(u,b);else{u.state=c,u.outcome=S;for(var A=-1,P=u.queue.length;++A<P;)u.queue[A].callFulfilled(S)}return u},a.reject=function(u,S){u.state=l,u.outcome=S;for(var y=-1,b=u.queue.length;++y<b;)u.queue[y].callRejected(S);return u},p.resolve=function(u){return u instanceof this?u:a.resolve(new this(o),u)},p.reject=function(u){var S=new this(o);return a.reject(S,u)},p.all=function(u){var S=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=u.length,b=!1;if(!y)return this.resolve([]);for(var A=new Array(y),P=0,T=-1,H=new this(o);++T<y;)X(u[T],T);return H;function X(w,L){S.resolve(w).then(function(R){A[L]=R,++P!==y||b||(b=!0,a.resolve(H,A))},function(R){b||(b=!0,a.reject(H,R))})}},p.race=function(u){var S=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=u.length,b=!1;if(!y)return this.resolve([]);for(var A=-1,P=new this(o);++A<y;)T=u[A],S.resolve(T).then(function(H){b||(b=!0,a.resolve(P,H))},function(H){b||(b=!0,a.reject(P,H))});var T;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),h=Object.prototype.toString,p=0,m=-1,d=0,_=8;function g(u){if(!(this instanceof g))return new g(u);this.options=o.assign({level:m,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},u||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==p)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var b;if(b=typeof S.dictionary=="string"?a.string2buf(S.dictionary):h.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,b))!==p)throw new Error(l[y]);this._dict_set=!0}}function f(u,S){var y=new g(S);if(y.push(u,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(u,S){var y,b,A=this.strm,P=this.options.chunkSize;if(this.ended)return!1;b=S===~~S?S:S===!0?4:0,typeof u=="string"?A.input=a.string2buf(u):h.call(u)==="[object ArrayBuffer]"?A.input=new Uint8Array(u):A.input=u,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(P),A.next_out=0,A.avail_out=P),(y=s.deflate(A,b))!==1&&y!==p)return this.onEnd(y),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||b!==4&&b!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&y!==1);return b===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===p):b!==2||(this.onEnd(p),!(A.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Deflate=g,r.deflate=f,r.deflateRaw=function(u,S){return(S=S||{}).raw=!0,f(u,S)},r.gzip=function(u,S){return(S=S||{}).gzip=!0,f(u,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),h=e("./zlib/zstream"),p=e("./zlib/gzheader"),m=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||g&&g.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var u=s.inflateInit2(this.strm,f.windowBits);if(u!==l.Z_OK)throw new Error(c[u]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function _(g,f){var u=new d(f);if(u.push(g,!0),u.err)throw u.msg||c[u.err];return u.result}d.prototype.push=function(g,f){var u,S,y,b,A,P,T=this.strm,H=this.options.chunkSize,X=this.options.dictionary,w=!1;if(this.ended)return!1;S=f===~~f?f:f===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?T.input=a.binstring2buf(g):m.call(g)==="[object ArrayBuffer]"?T.input=new Uint8Array(g):T.input=g,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(H),T.next_out=0,T.avail_out=H),(u=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&X&&(P=typeof X=="string"?a.string2buf(X):m.call(X)==="[object ArrayBuffer]"?new Uint8Array(X):X,u=s.inflateSetDictionary(this.strm,P)),u===l.Z_BUF_ERROR&&w===!0&&(u=l.Z_OK,w=!1),u!==l.Z_STREAM_END&&u!==l.Z_OK)return this.onEnd(u),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&u!==l.Z_STREAM_END&&(T.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=a.utf8border(T.output,T.next_out),b=T.next_out-y,A=a.buf2string(T.output,y),T.next_out=b,T.avail_out=H-b,b&&o.arraySet(T.output,T.output,y,b,0),this.onData(A)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(w=!0)}while((0<T.avail_in||T.avail_out===0)&&u!==l.Z_STREAM_END);return u===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(u=s.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=_,r.inflateRaw=function(g,f){return(f=f||{}).raw=!0,_(g,f)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var h=c.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var p in h)h.hasOwnProperty(p)&&(l[p]=h[p])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,h,p,m){if(c.subarray&&l.subarray)l.set(c.subarray(h,h+p),m);else for(var d=0;d<p;d++)l[m+d]=c[h+d]},flattenChunks:function(l){var c,h,p,m,d,_;for(c=p=0,h=l.length;c<h;c++)p+=l[c].length;for(_=new Uint8Array(p),c=m=0,h=l.length;c<h;c++)d=l[c],_.set(d,m),m+=d.length;return _}},a={arraySet:function(l,c,h,p,m){for(var d=0;d<p;d++)l[m+d]=c[h+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function h(p,m){if(m<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,m));for(var d="",_=0;_<m;_++)d+=String.fromCharCode(p[_]);return d}l[254]=l[254]=1,r.string2buf=function(p){var m,d,_,g,f,u=p.length,S=0;for(g=0;g<u;g++)(64512&(d=p.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=p.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),S+=d<128?1:d<2048?2:d<65536?3:4;for(m=new s.Buf8(S),g=f=0;f<S;g++)(64512&(d=p.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=p.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?m[f++]=d:(d<2048?m[f++]=192|d>>>6:(d<65536?m[f++]=224|d>>>12:(m[f++]=240|d>>>18,m[f++]=128|d>>>12&63),m[f++]=128|d>>>6&63),m[f++]=128|63&d);return m},r.buf2binstring=function(p){return h(p,p.length)},r.binstring2buf=function(p){for(var m=new s.Buf8(p.length),d=0,_=m.length;d<_;d++)m[d]=p.charCodeAt(d);return m},r.buf2string=function(p,m){var d,_,g,f,u=m||p.length,S=new Array(2*u);for(d=_=0;d<u;)if((g=p[d++])<128)S[_++]=g;else if(4<(f=l[g]))S[_++]=65533,d+=f-1;else{for(g&=f===2?31:f===3?15:7;1<f&&d<u;)g=g<<6|63&p[d++],f--;1<f?S[_++]=65533:g<65536?S[_++]=g:(g-=65536,S[_++]=55296|g>>10&1023,S[_++]=56320|1023&g)}return h(S,_)},r.utf8border=function(p,m){var d;for((m=m||p.length)>p.length&&(m=p.length),d=m-1;0<=d&&(192&p[d])==128;)d--;return d<0||d===0?m:d+l[p[d]]>m?d:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,h=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;h=h+(c=c+o[l++]|0)|0,--p;);c%=65521,h%=65521}return c|h<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var h=s,p=c+l;o^=-1;for(var m=c;m<p;m++)o=o>>>8^h[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),h=e("./messages"),p=0,m=4,d=0,_=-2,g=-1,f=4,u=2,S=8,y=9,b=286,A=30,P=19,T=2*b+1,H=15,X=3,w=258,L=w+X+1,R=42,V=113,v=1,F=2,J=3,j=4;function nt(x,q){return x.msg=h[q],q}function Z(x){return(x<<1)-(4<x?9:0)}function it(x){for(var q=x.length;0<=--q;)x[q]=0}function G(x){var q=x.state,z=q.pending;z>x.avail_out&&(z=x.avail_out),z!==0&&(o.arraySet(x.output,q.pending_buf,q.pending_out,z,x.next_out),x.next_out+=z,q.pending_out+=z,x.total_out+=z,x.avail_out-=z,q.pending-=z,q.pending===0&&(q.pending_out=0))}function W(x,q){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,q),x.block_start=x.strstart,G(x.strm)}function ht(x,q){x.pending_buf[x.pending++]=q}function K(x,q){x.pending_buf[x.pending++]=q>>>8&255,x.pending_buf[x.pending++]=255&q}function Q(x,q){var z,D,C=x.max_chain_length,M=x.strstart,E=x.prev_length,U=x.nice_match,O=x.strstart>x.w_size-L?x.strstart-(x.w_size-L):0,$=x.window,tt=x.w_mask,rt=x.prev,lt=x.strstart+w,mt=$[M+E-1],yt=$[M+E];x.prev_length>=x.good_match&&(C>>=2),U>x.lookahead&&(U=x.lookahead);do if($[(z=q)+E]===yt&&$[z+E-1]===mt&&$[z]===$[M]&&$[++z]===$[M+1]){M+=2,z++;do;while($[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&$[++M]===$[++z]&&M<lt);if(D=w-(lt-M),M=lt-w,E<D){if(x.match_start=q,U<=(E=D))break;mt=$[M+E-1],yt=$[M+E]}}while((q=rt[q&tt])>O&&--C!=0);return E<=x.lookahead?E:x.lookahead}function xt(x){var q,z,D,C,M,E,U,O,$,tt,rt=x.w_size;do{if(C=x.window_size-x.lookahead-x.strstart,x.strstart>=rt+(rt-L)){for(o.arraySet(x.window,x.window,rt,rt,0),x.match_start-=rt,x.strstart-=rt,x.block_start-=rt,q=z=x.hash_size;D=x.head[--q],x.head[q]=rt<=D?D-rt:0,--z;);for(q=z=rt;D=x.prev[--q],x.prev[q]=rt<=D?D-rt:0,--z;);C+=rt}if(x.strm.avail_in===0)break;if(E=x.strm,U=x.window,O=x.strstart+x.lookahead,$=C,tt=void 0,tt=E.avail_in,$<tt&&(tt=$),z=tt===0?0:(E.avail_in-=tt,o.arraySet(U,E.input,E.next_in,tt,O),E.state.wrap===1?E.adler=l(E.adler,U,tt,O):E.state.wrap===2&&(E.adler=c(E.adler,U,tt,O)),E.next_in+=tt,E.total_in+=tt,tt),x.lookahead+=z,x.lookahead+x.insert>=X)for(M=x.strstart-x.insert,x.ins_h=x.window[M],x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+X-1])&x.hash_mask,x.prev[M&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=M,M++,x.insert--,!(x.lookahead+x.insert<X)););}while(x.lookahead<L&&x.strm.avail_in!==0)}function Et(x,q){for(var z,D;;){if(x.lookahead<L){if(xt(x),x.lookahead<L&&q===p)return v;if(x.lookahead===0)break}if(z=0,x.lookahead>=X&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+X-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),z!==0&&x.strstart-z<=x.w_size-L&&(x.match_length=Q(x,z)),x.match_length>=X)if(D=a._tr_tally(x,x.strstart-x.match_start,x.match_length-X),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=X){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+X-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else D=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(D&&(W(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<X-1?x.strstart:X-1,q===m?(W(x,!0),x.strm.avail_out===0?J:j):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?v:F}function vt(x,q){for(var z,D,C;;){if(x.lookahead<L){if(xt(x),x.lookahead<L&&q===p)return v;if(x.lookahead===0)break}if(z=0,x.lookahead>=X&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+X-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=X-1,z!==0&&x.prev_length<x.max_lazy_match&&x.strstart-z<=x.w_size-L&&(x.match_length=Q(x,z),x.match_length<=5&&(x.strategy===1||x.match_length===X&&4096<x.strstart-x.match_start)&&(x.match_length=X-1)),x.prev_length>=X&&x.match_length<=x.prev_length){for(C=x.strstart+x.lookahead-X,D=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-X),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=C&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+X-1])&x.hash_mask,z=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=X-1,x.strstart++,D&&(W(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((D=a._tr_tally(x,0,x.window[x.strstart-1]))&&W(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(D=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<X-1?x.strstart:X-1,q===m?(W(x,!0),x.strm.avail_out===0?J:j):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?v:F}function gt(x,q,z,D,C){this.good_length=x,this.max_lazy=q,this.nice_length=z,this.max_chain=D,this.func=C}function Rt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*P+1)),it(this.dyn_ltree),it(this.dyn_dtree),it(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(H+1),this.heap=new o.Buf16(2*b+1),it(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*b+1),it(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function bt(x){var q;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=u,(q=x.state).pending=0,q.pending_out=0,q.wrap<0&&(q.wrap=-q.wrap),q.status=q.wrap?R:V,x.adler=q.wrap===2?0:1,q.last_flush=p,a._tr_init(q),d):nt(x,_)}function B(x){var q=bt(x);return q===d&&function(z){z.window_size=2*z.w_size,it(z.head),z.max_lazy_match=s[z.level].max_lazy,z.good_match=s[z.level].good_length,z.nice_match=s[z.level].nice_length,z.max_chain_length=s[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=X-1,z.match_available=0,z.ins_h=0}(x.state),q}function pt(x,q,z,D,C,M){if(!x)return _;var E=1;if(q===g&&(q=6),D<0?(E=0,D=-D):15<D&&(E=2,D-=16),C<1||y<C||z!==S||D<8||15<D||q<0||9<q||M<0||f<M)return nt(x,_);D===8&&(D=9);var U=new Rt;return(x.state=U).strm=x,U.wrap=E,U.gzhead=null,U.w_bits=D,U.w_size=1<<U.w_bits,U.w_mask=U.w_size-1,U.hash_bits=C+7,U.hash_size=1<<U.hash_bits,U.hash_mask=U.hash_size-1,U.hash_shift=~~((U.hash_bits+X-1)/X),U.window=new o.Buf8(2*U.w_size),U.head=new o.Buf16(U.hash_size),U.prev=new o.Buf16(U.w_size),U.lit_bufsize=1<<C+6,U.pending_buf_size=4*U.lit_bufsize,U.pending_buf=new o.Buf8(U.pending_buf_size),U.d_buf=1*U.lit_bufsize,U.l_buf=3*U.lit_bufsize,U.level=q,U.strategy=M,U.method=z,B(x)}s=[new gt(0,0,0,0,function(x,q){var z=65535;for(z>x.pending_buf_size-5&&(z=x.pending_buf_size-5);;){if(x.lookahead<=1){if(xt(x),x.lookahead===0&&q===p)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var D=x.block_start+z;if((x.strstart===0||x.strstart>=D)&&(x.lookahead=x.strstart-D,x.strstart=D,W(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-L&&(W(x,!1),x.strm.avail_out===0))return v}return x.insert=0,q===m?(W(x,!0),x.strm.avail_out===0?J:j):(x.strstart>x.block_start&&(W(x,!1),x.strm.avail_out),v)}),new gt(4,4,8,4,Et),new gt(4,5,16,8,Et),new gt(4,6,32,32,Et),new gt(4,4,16,16,vt),new gt(8,16,32,32,vt),new gt(8,16,128,128,vt),new gt(8,32,128,256,vt),new gt(32,128,258,1024,vt),new gt(32,258,258,4096,vt)],r.deflateInit=function(x,q){return pt(x,q,S,15,8,0)},r.deflateInit2=pt,r.deflateReset=B,r.deflateResetKeep=bt,r.deflateSetHeader=function(x,q){return x&&x.state?x.state.wrap!==2?_:(x.state.gzhead=q,d):_},r.deflate=function(x,q){var z,D,C,M;if(!x||!x.state||5<q||q<0)return x?nt(x,_):_;if(D=x.state,!x.output||!x.input&&x.avail_in!==0||D.status===666&&q!==m)return nt(x,x.avail_out===0?-5:_);if(D.strm=x,z=D.last_flush,D.last_flush=q,D.status===R)if(D.wrap===2)x.adler=0,ht(D,31),ht(D,139),ht(D,8),D.gzhead?(ht(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),ht(D,255&D.gzhead.time),ht(D,D.gzhead.time>>8&255),ht(D,D.gzhead.time>>16&255),ht(D,D.gzhead.time>>24&255),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(ht(D,255&D.gzhead.extra.length),ht(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(x.adler=c(x.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,0),ht(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),ht(D,3),D.status=V);else{var E=S+(D.w_bits-8<<4)<<8;E|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(E|=32),E+=31-E%31,D.status=V,K(D,E),D.strstart!==0&&(K(D,x.adler>>>16),K(D,65535&x.adler)),x.adler=1}if(D.status===69)if(D.gzhead.extra){for(C=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),G(x),C=D.pending,D.pending!==D.pending_buf_size));)ht(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){C=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),G(x),C=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),M===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){C=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),G(x),C=D.pending,D.pending===D.pending_buf_size)){M=1;break}M=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,ht(D,M)}while(M!==0);D.gzhead.hcrc&&D.pending>C&&(x.adler=c(x.adler,D.pending_buf,D.pending-C,C)),M===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&G(x),D.pending+2<=D.pending_buf_size&&(ht(D,255&x.adler),ht(D,x.adler>>8&255),x.adler=0,D.status=V)):D.status=V),D.pending!==0){if(G(x),x.avail_out===0)return D.last_flush=-1,d}else if(x.avail_in===0&&Z(q)<=Z(z)&&q!==m)return nt(x,-5);if(D.status===666&&x.avail_in!==0)return nt(x,-5);if(x.avail_in!==0||D.lookahead!==0||q!==p&&D.status!==666){var U=D.strategy===2?function(O,$){for(var tt;;){if(O.lookahead===0&&(xt(O),O.lookahead===0)){if($===p)return v;break}if(O.match_length=0,tt=a._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++,tt&&(W(O,!1),O.strm.avail_out===0))return v}return O.insert=0,$===m?(W(O,!0),O.strm.avail_out===0?J:j):O.last_lit&&(W(O,!1),O.strm.avail_out===0)?v:F}(D,q):D.strategy===3?function(O,$){for(var tt,rt,lt,mt,yt=O.window;;){if(O.lookahead<=w){if(xt(O),O.lookahead<=w&&$===p)return v;if(O.lookahead===0)break}if(O.match_length=0,O.lookahead>=X&&0<O.strstart&&(rt=yt[lt=O.strstart-1])===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]){mt=O.strstart+w;do;while(rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&rt===yt[++lt]&&lt<mt);O.match_length=w-(mt-lt),O.match_length>O.lookahead&&(O.match_length=O.lookahead)}if(O.match_length>=X?(tt=a._tr_tally(O,1,O.match_length-X),O.lookahead-=O.match_length,O.strstart+=O.match_length,O.match_length=0):(tt=a._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++),tt&&(W(O,!1),O.strm.avail_out===0))return v}return O.insert=0,$===m?(W(O,!0),O.strm.avail_out===0?J:j):O.last_lit&&(W(O,!1),O.strm.avail_out===0)?v:F}(D,q):s[D.level].func(D,q);if(U!==J&&U!==j||(D.status=666),U===v||U===J)return x.avail_out===0&&(D.last_flush=-1),d;if(U===F&&(q===1?a._tr_align(D):q!==5&&(a._tr_stored_block(D,0,0,!1),q===3&&(it(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),G(x),x.avail_out===0))return D.last_flush=-1,d}return q!==m?d:D.wrap<=0?1:(D.wrap===2?(ht(D,255&x.adler),ht(D,x.adler>>8&255),ht(D,x.adler>>16&255),ht(D,x.adler>>24&255),ht(D,255&x.total_in),ht(D,x.total_in>>8&255),ht(D,x.total_in>>16&255),ht(D,x.total_in>>24&255)):(K(D,x.adler>>>16),K(D,65535&x.adler)),G(x),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?d:1)},r.deflateEnd=function(x){var q;return x&&x.state?(q=x.state.status)!==R&&q!==69&&q!==73&&q!==91&&q!==103&&q!==V&&q!==666?nt(x,_):(x.state=null,q===V?nt(x,-3):d):_},r.deflateSetDictionary=function(x,q){var z,D,C,M,E,U,O,$,tt=q.length;if(!x||!x.state||(M=(z=x.state).wrap)===2||M===1&&z.status!==R||z.lookahead)return _;for(M===1&&(x.adler=l(x.adler,q,tt,0)),z.wrap=0,tt>=z.w_size&&(M===0&&(it(z.head),z.strstart=0,z.block_start=0,z.insert=0),$=new o.Buf8(z.w_size),o.arraySet($,q,tt-z.w_size,z.w_size,0),q=$,tt=z.w_size),E=x.avail_in,U=x.next_in,O=x.input,x.avail_in=tt,x.next_in=0,x.input=q,xt(z);z.lookahead>=X;){for(D=z.strstart,C=z.lookahead-(X-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[D+X-1])&z.hash_mask,z.prev[D&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=D,D++,--C;);z.strstart=D,z.lookahead=X-1,xt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=X-1,z.match_available=0,x.next_in=U,x.input=O,x.avail_in=E,z.wrap=M,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,h,p,m,d,_,g,f,u,S,y,b,A,P,T,H,X,w,L,R,V,v,F;a=s.state,l=s.next_in,v=s.input,c=l+(s.avail_in-5),h=s.next_out,F=s.output,p=h-(o-s.avail_out),m=h+(s.avail_out-257),d=a.dmax,_=a.wsize,g=a.whave,f=a.wnext,u=a.window,S=a.hold,y=a.bits,b=a.lencode,A=a.distcode,P=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),H=b[S&P];e:for(;;){if(S>>>=X=H>>>24,y-=X,(X=H>>>16&255)===0)F[h++]=65535&H;else{if(!(16&X)){if(!(64&X)){H=b[(65535&H)+(S&(1<<X)-1)];continue e}if(32&X){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&H,(X&=15)&&(y<X&&(S+=v[l++]<<y,y+=8),w+=S&(1<<X)-1,S>>>=X,y-=X),y<15&&(S+=v[l++]<<y,y+=8,S+=v[l++]<<y,y+=8),H=A[S&T];n:for(;;){if(S>>>=X=H>>>24,y-=X,!(16&(X=H>>>16&255))){if(!(64&X)){H=A[(65535&H)+(S&(1<<X)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(L=65535&H,y<(X&=15)&&(S+=v[l++]<<y,(y+=8)<X&&(S+=v[l++]<<y,y+=8)),d<(L+=S&(1<<X)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(S>>>=X,y-=X,(X=h-p)<L){if(g<(X=L-X)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(V=u,(R=0)===f){if(R+=_-X,X<w){for(w-=X;F[h++]=u[R++],--X;);R=h-L,V=F}}else if(f<X){if(R+=_+f-X,(X-=f)<w){for(w-=X;F[h++]=u[R++],--X;);if(R=0,f<w){for(w-=X=f;F[h++]=u[R++],--X;);R=h-L,V=F}}}else if(R+=f-X,X<w){for(w-=X;F[h++]=u[R++],--X;);R=h-L,V=F}for(;2<w;)F[h++]=V[R++],F[h++]=V[R++],F[h++]=V[R++],w-=3;w&&(F[h++]=V[R++],1<w&&(F[h++]=V[R++]))}else{for(R=h-L;F[h++]=F[R++],F[h++]=F[R++],F[h++]=F[R++],2<(w-=3););w&&(F[h++]=F[R++],1<w&&(F[h++]=F[R++]))}break}}break}}while(l<c&&h<m);l-=w=y>>3,S&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=h,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=h<m?m-h+257:257-(h-m),a.hold=S,a.bits=y}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),h=1,p=2,m=0,d=-2,_=1,g=852,f=592;function u(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(R){var V;return R&&R.state?(V=R.state,R.total_in=R.total_out=V.total=0,R.msg="",V.wrap&&(R.adler=1&V.wrap),V.mode=_,V.last=0,V.havedict=0,V.dmax=32768,V.head=null,V.hold=0,V.bits=0,V.lencode=V.lendyn=new s.Buf32(g),V.distcode=V.distdyn=new s.Buf32(f),V.sane=1,V.back=-1,m):d}function b(R){var V;return R&&R.state?((V=R.state).wsize=0,V.whave=0,V.wnext=0,y(R)):d}function A(R,V){var v,F;return R&&R.state?(F=R.state,V<0?(v=0,V=-V):(v=1+(V>>4),V<48&&(V&=15)),V&&(V<8||15<V)?d:(F.window!==null&&F.wbits!==V&&(F.window=null),F.wrap=v,F.wbits=V,b(R))):d}function P(R,V){var v,F;return R?(F=new S,(R.state=F).window=null,(v=A(R,V))!==m&&(R.state=null),v):d}var T,H,X=!0;function w(R){if(X){var V;for(T=new s.Buf32(512),H=new s.Buf32(32),V=0;V<144;)R.lens[V++]=8;for(;V<256;)R.lens[V++]=9;for(;V<280;)R.lens[V++]=7;for(;V<288;)R.lens[V++]=8;for(c(h,R.lens,0,288,T,0,R.work,{bits:9}),V=0;V<32;)R.lens[V++]=5;c(p,R.lens,0,32,H,0,R.work,{bits:5}),X=!1}R.lencode=T,R.lenbits=9,R.distcode=H,R.distbits=5}function L(R,V,v,F){var J,j=R.state;return j.window===null&&(j.wsize=1<<j.wbits,j.wnext=0,j.whave=0,j.window=new s.Buf8(j.wsize)),F>=j.wsize?(s.arraySet(j.window,V,v-j.wsize,j.wsize,0),j.wnext=0,j.whave=j.wsize):(F<(J=j.wsize-j.wnext)&&(J=F),s.arraySet(j.window,V,v-F,J,j.wnext),(F-=J)?(s.arraySet(j.window,V,v-F,F,0),j.wnext=F,j.whave=j.wsize):(j.wnext+=J,j.wnext===j.wsize&&(j.wnext=0),j.whave<j.wsize&&(j.whave+=J))),0}r.inflateReset=b,r.inflateReset2=A,r.inflateResetKeep=y,r.inflateInit=function(R){return P(R,15)},r.inflateInit2=P,r.inflate=function(R,V){var v,F,J,j,nt,Z,it,G,W,ht,K,Q,xt,Et,vt,gt,Rt,bt,B,pt,x,q,z,D,C=0,M=new s.Buf8(4),E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return d;(v=R.state).mode===12&&(v.mode=13),nt=R.next_out,J=R.output,it=R.avail_out,j=R.next_in,F=R.input,Z=R.avail_in,G=v.hold,W=v.bits,ht=Z,K=it,q=m;t:for(;;)switch(v.mode){case _:if(v.wrap===0){v.mode=13;break}for(;W<16;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(2&v.wrap&&G===35615){M[v.check=0]=255&G,M[1]=G>>>8&255,v.check=a(v.check,M,2,0),W=G=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&G)<<8)+(G>>8))%31){R.msg="incorrect header check",v.mode=30;break}if((15&G)!=8){R.msg="unknown compression method",v.mode=30;break}if(W-=4,x=8+(15&(G>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){R.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,R.adler=v.check=1,v.mode=512&G?10:12,W=G=0;break;case 2:for(;W<16;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(v.flags=G,(255&v.flags)!=8){R.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){R.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=G>>8&1),512&v.flags&&(M[0]=255&G,M[1]=G>>>8&255,v.check=a(v.check,M,2,0)),W=G=0,v.mode=3;case 3:for(;W<32;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.head&&(v.head.time=G),512&v.flags&&(M[0]=255&G,M[1]=G>>>8&255,M[2]=G>>>16&255,M[3]=G>>>24&255,v.check=a(v.check,M,4,0)),W=G=0,v.mode=4;case 4:for(;W<16;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.head&&(v.head.xflags=255&G,v.head.os=G>>8),512&v.flags&&(M[0]=255&G,M[1]=G>>>8&255,v.check=a(v.check,M,2,0)),W=G=0,v.mode=5;case 5:if(1024&v.flags){for(;W<16;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.length=G,v.head&&(v.head.extra_len=G),512&v.flags&&(M[0]=255&G,M[1]=G>>>8&255,v.check=a(v.check,M,2,0)),W=G=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(Z<(Q=v.length)&&(Q=Z),Q&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,F,j,Q,x)),512&v.flags&&(v.check=a(v.check,F,Q,j)),Z-=Q,j+=Q,v.length-=Q),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(Z===0)break t;for(Q=0;x=F[j+Q++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&Q<Z;);if(512&v.flags&&(v.check=a(v.check,F,Q,j)),Z-=Q,j+=Q,x)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(Z===0)break t;for(Q=0;x=F[j+Q++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&Q<Z;);if(512&v.flags&&(v.check=a(v.check,F,Q,j)),Z-=Q,j+=Q,x)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;W<16;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(G!==(65535&v.check)){R.msg="header crc mismatch",v.mode=30;break}W=G=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),R.adler=v.check=0,v.mode=12;break;case 10:for(;W<32;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}R.adler=v.check=u(G),W=G=0,v.mode=11;case 11:if(v.havedict===0)return R.next_out=nt,R.avail_out=it,R.next_in=j,R.avail_in=Z,v.hold=G,v.bits=W,2;R.adler=v.check=1,v.mode=12;case 12:if(V===5||V===6)break t;case 13:if(v.last){G>>>=7&W,W-=7&W,v.mode=27;break}for(;W<3;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}switch(v.last=1&G,W-=1,3&(G>>>=1)){case 0:v.mode=14;break;case 1:if(w(v),v.mode=20,V!==6)break;G>>>=2,W-=2;break t;case 2:v.mode=17;break;case 3:R.msg="invalid block type",v.mode=30}G>>>=2,W-=2;break;case 14:for(G>>>=7&W,W-=7&W;W<32;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if((65535&G)!=(G>>>16^65535)){R.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&G,W=G=0,v.mode=15,V===6)break t;case 15:v.mode=16;case 16:if(Q=v.length){if(Z<Q&&(Q=Z),it<Q&&(Q=it),Q===0)break t;s.arraySet(J,F,j,Q,nt),Z-=Q,j+=Q,it-=Q,nt+=Q,v.length-=Q;break}v.mode=12;break;case 17:for(;W<14;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(v.nlen=257+(31&G),G>>>=5,W-=5,v.ndist=1+(31&G),G>>>=5,W-=5,v.ncode=4+(15&G),G>>>=4,W-=4,286<v.nlen||30<v.ndist){R.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;W<3;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.lens[E[v.have++]]=7&G,G>>>=3,W-=3}for(;v.have<19;)v.lens[E[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,z={bits:v.lenbits},q=c(0,v.lens,0,19,v.lencode,0,v.work,z),v.lenbits=z.bits,q){R.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;gt=(C=v.lencode[G&(1<<v.lenbits)-1])>>>16&255,Rt=65535&C,!((vt=C>>>24)<=W);){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(Rt<16)G>>>=vt,W-=vt,v.lens[v.have++]=Rt;else{if(Rt===16){for(D=vt+2;W<D;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(G>>>=vt,W-=vt,v.have===0){R.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],Q=3+(3&G),G>>>=2,W-=2}else if(Rt===17){for(D=vt+3;W<D;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}W-=vt,x=0,Q=3+(7&(G>>>=vt)),G>>>=3,W-=3}else{for(D=vt+7;W<D;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}W-=vt,x=0,Q=11+(127&(G>>>=vt)),G>>>=7,W-=7}if(v.have+Q>v.nlen+v.ndist){R.msg="invalid bit length repeat",v.mode=30;break}for(;Q--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){R.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,z={bits:v.lenbits},q=c(h,v.lens,0,v.nlen,v.lencode,0,v.work,z),v.lenbits=z.bits,q){R.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,z={bits:v.distbits},q=c(p,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,z),v.distbits=z.bits,q){R.msg="invalid distances set",v.mode=30;break}if(v.mode=20,V===6)break t;case 20:v.mode=21;case 21:if(6<=Z&&258<=it){R.next_out=nt,R.avail_out=it,R.next_in=j,R.avail_in=Z,v.hold=G,v.bits=W,l(R,K),nt=R.next_out,J=R.output,it=R.avail_out,j=R.next_in,F=R.input,Z=R.avail_in,G=v.hold,W=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;gt=(C=v.lencode[G&(1<<v.lenbits)-1])>>>16&255,Rt=65535&C,!((vt=C>>>24)<=W);){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(gt&&!(240&gt)){for(bt=vt,B=gt,pt=Rt;gt=(C=v.lencode[pt+((G&(1<<bt+B)-1)>>bt)])>>>16&255,Rt=65535&C,!(bt+(vt=C>>>24)<=W);){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}G>>>=bt,W-=bt,v.back+=bt}if(G>>>=vt,W-=vt,v.back+=vt,v.length=Rt,gt===0){v.mode=26;break}if(32&gt){v.back=-1,v.mode=12;break}if(64&gt){R.msg="invalid literal/length code",v.mode=30;break}v.extra=15&gt,v.mode=22;case 22:if(v.extra){for(D=v.extra;W<D;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.length+=G&(1<<v.extra)-1,G>>>=v.extra,W-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;gt=(C=v.distcode[G&(1<<v.distbits)-1])>>>16&255,Rt=65535&C,!((vt=C>>>24)<=W);){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(!(240&gt)){for(bt=vt,B=gt,pt=Rt;gt=(C=v.distcode[pt+((G&(1<<bt+B)-1)>>bt)])>>>16&255,Rt=65535&C,!(bt+(vt=C>>>24)<=W);){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}G>>>=bt,W-=bt,v.back+=bt}if(G>>>=vt,W-=vt,v.back+=vt,64&gt){R.msg="invalid distance code",v.mode=30;break}v.offset=Rt,v.extra=15&gt,v.mode=24;case 24:if(v.extra){for(D=v.extra;W<D;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}v.offset+=G&(1<<v.extra)-1,G>>>=v.extra,W-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){R.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(it===0)break t;if(Q=K-it,v.offset>Q){if((Q=v.offset-Q)>v.whave&&v.sane){R.msg="invalid distance too far back",v.mode=30;break}xt=Q>v.wnext?(Q-=v.wnext,v.wsize-Q):v.wnext-Q,Q>v.length&&(Q=v.length),Et=v.window}else Et=J,xt=nt-v.offset,Q=v.length;for(it<Q&&(Q=it),it-=Q,v.length-=Q;J[nt++]=Et[xt++],--Q;);v.length===0&&(v.mode=21);break;case 26:if(it===0)break t;J[nt++]=v.length,it--,v.mode=21;break;case 27:if(v.wrap){for(;W<32;){if(Z===0)break t;Z--,G|=F[j++]<<W,W+=8}if(K-=it,R.total_out+=K,v.total+=K,K&&(R.adler=v.check=v.flags?a(v.check,J,K,nt-K):o(v.check,J,K,nt-K)),K=it,(v.flags?G:u(G))!==v.check){R.msg="incorrect data check",v.mode=30;break}W=G=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;W<32;){if(Z===0)break t;Z--,G+=F[j++]<<W,W+=8}if(G!==(4294967295&v.total)){R.msg="incorrect length check",v.mode=30;break}W=G=0}v.mode=29;case 29:q=1;break t;case 30:q=-3;break t;case 31:return-4;case 32:default:return d}return R.next_out=nt,R.avail_out=it,R.next_in=j,R.avail_in=Z,v.hold=G,v.bits=W,(v.wsize||K!==R.avail_out&&v.mode<30&&(v.mode<27||V!==4))&&L(R,R.output,R.next_out,K-R.avail_out)?(v.mode=31,-4):(ht-=R.avail_in,K-=R.avail_out,R.total_in+=ht,R.total_out+=K,v.total+=K,v.wrap&&K&&(R.adler=v.check=v.flags?a(v.check,J,K,R.next_out-K):o(v.check,J,K,R.next_out-K)),R.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(ht==0&&K===0||V===4)&&q===m&&(q=-5),q)},r.inflateEnd=function(R){if(!R||!R.state)return d;var V=R.state;return V.window&&(V.window=null),R.state=null,m},r.inflateGetHeader=function(R,V){var v;return R&&R.state&&2&(v=R.state).wrap?((v.head=V).done=!1,m):d},r.inflateSetDictionary=function(R,V){var v,F=V.length;return R&&R.state?(v=R.state).wrap!==0&&v.mode!==11?d:v.mode===11&&o(1,V,F,0)!==v.check?-3:L(R,V,F,F)?(v.mode=31,-4):(v.havedict=1,m):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(h,p,m,d,_,g,f,u){var S,y,b,A,P,T,H,X,w,L=u.bits,R=0,V=0,v=0,F=0,J=0,j=0,nt=0,Z=0,it=0,G=0,W=null,ht=0,K=new s.Buf16(16),Q=new s.Buf16(16),xt=null,Et=0;for(R=0;R<=15;R++)K[R]=0;for(V=0;V<d;V++)K[p[m+V]]++;for(J=L,F=15;1<=F&&K[F]===0;F--);if(F<J&&(J=F),F===0)return _[g++]=20971520,_[g++]=20971520,u.bits=1,0;for(v=1;v<F&&K[v]===0;v++);for(J<v&&(J=v),R=Z=1;R<=15;R++)if(Z<<=1,(Z-=K[R])<0)return-1;if(0<Z&&(h===0||F!==1))return-1;for(Q[1]=0,R=1;R<15;R++)Q[R+1]=Q[R]+K[R];for(V=0;V<d;V++)p[m+V]!==0&&(f[Q[p[m+V]]++]=V);if(T=h===0?(W=xt=f,19):h===1?(W=o,ht-=257,xt=a,Et-=257,256):(W=l,xt=c,-1),R=v,P=g,nt=V=G=0,b=-1,A=(it=1<<(j=J))-1,h===1&&852<it||h===2&&592<it)return 1;for(;;){for(H=R-nt,w=f[V]<T?(X=0,f[V]):f[V]>T?(X=xt[Et+f[V]],W[ht+f[V]]):(X=96,0),S=1<<R-nt,v=y=1<<j;_[P+(G>>nt)+(y-=S)]=H<<24|X<<16|w|0,y!==0;);for(S=1<<R-1;G&S;)S>>=1;if(S!==0?(G&=S-1,G+=S):G=0,V++,--K[R]==0){if(R===F)break;R=p[m+f[V]]}if(J<R&&(G&A)!==b){for(nt===0&&(nt=J),P+=v,Z=1<<(j=R-nt);j+nt<F&&!((Z-=K[j+nt])<=0);)j++,Z<<=1;if(it+=1<<j,h===1&&852<it||h===2&&592<it)return 1;_[b=G&A]=J<<24|j<<16|P-g|0}}return G!==0&&(_[P+G]=R-nt<<24|64<<16|0),u.bits=J,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(C){for(var M=C.length;0<=--M;)C[M]=0}var c=0,h=29,p=256,m=p+1+h,d=30,_=19,g=2*m+1,f=15,u=16,S=7,y=256,b=16,A=17,P=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],H=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],X=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=new Array(2*(m+2));l(L);var R=new Array(2*d);l(R);var V=new Array(512);l(V);var v=new Array(256);l(v);var F=new Array(h);l(F);var J,j,nt,Z=new Array(d);function it(C,M,E,U,O){this.static_tree=C,this.extra_bits=M,this.extra_base=E,this.elems=U,this.max_length=O,this.has_stree=C&&C.length}function G(C,M){this.dyn_tree=C,this.max_code=0,this.stat_desc=M}function W(C){return C<256?V[C]:V[256+(C>>>7)]}function ht(C,M){C.pending_buf[C.pending++]=255&M,C.pending_buf[C.pending++]=M>>>8&255}function K(C,M,E){C.bi_valid>u-E?(C.bi_buf|=M<<C.bi_valid&65535,ht(C,C.bi_buf),C.bi_buf=M>>u-C.bi_valid,C.bi_valid+=E-u):(C.bi_buf|=M<<C.bi_valid&65535,C.bi_valid+=E)}function Q(C,M,E){K(C,E[2*M],E[2*M+1])}function xt(C,M){for(var E=0;E|=1&C,C>>>=1,E<<=1,0<--M;);return E>>>1}function Et(C,M,E){var U,O,$=new Array(f+1),tt=0;for(U=1;U<=f;U++)$[U]=tt=tt+E[U-1]<<1;for(O=0;O<=M;O++){var rt=C[2*O+1];rt!==0&&(C[2*O]=xt($[rt]++,rt))}}function vt(C){var M;for(M=0;M<m;M++)C.dyn_ltree[2*M]=0;for(M=0;M<d;M++)C.dyn_dtree[2*M]=0;for(M=0;M<_;M++)C.bl_tree[2*M]=0;C.dyn_ltree[2*y]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function gt(C){8<C.bi_valid?ht(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Rt(C,M,E,U){var O=2*M,$=2*E;return C[O]<C[$]||C[O]===C[$]&&U[M]<=U[E]}function bt(C,M,E){for(var U=C.heap[E],O=E<<1;O<=C.heap_len&&(O<C.heap_len&&Rt(M,C.heap[O+1],C.heap[O],C.depth)&&O++,!Rt(M,U,C.heap[O],C.depth));)C.heap[E]=C.heap[O],E=O,O<<=1;C.heap[E]=U}function B(C,M,E){var U,O,$,tt,rt=0;if(C.last_lit!==0)for(;U=C.pending_buf[C.d_buf+2*rt]<<8|C.pending_buf[C.d_buf+2*rt+1],O=C.pending_buf[C.l_buf+rt],rt++,U===0?Q(C,O,M):(Q(C,($=v[O])+p+1,M),(tt=T[$])!==0&&K(C,O-=F[$],tt),Q(C,$=W(--U),E),(tt=H[$])!==0&&K(C,U-=Z[$],tt)),rt<C.last_lit;);Q(C,y,M)}function pt(C,M){var E,U,O,$=M.dyn_tree,tt=M.stat_desc.static_tree,rt=M.stat_desc.has_stree,lt=M.stat_desc.elems,mt=-1;for(C.heap_len=0,C.heap_max=g,E=0;E<lt;E++)$[2*E]!==0?(C.heap[++C.heap_len]=mt=E,C.depth[E]=0):$[2*E+1]=0;for(;C.heap_len<2;)$[2*(O=C.heap[++C.heap_len]=mt<2?++mt:0)]=1,C.depth[O]=0,C.opt_len--,rt&&(C.static_len-=tt[2*O+1]);for(M.max_code=mt,E=C.heap_len>>1;1<=E;E--)bt(C,$,E);for(O=lt;E=C.heap[1],C.heap[1]=C.heap[C.heap_len--],bt(C,$,1),U=C.heap[1],C.heap[--C.heap_max]=E,C.heap[--C.heap_max]=U,$[2*O]=$[2*E]+$[2*U],C.depth[O]=(C.depth[E]>=C.depth[U]?C.depth[E]:C.depth[U])+1,$[2*E+1]=$[2*U+1]=O,C.heap[1]=O++,bt(C,$,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],function(yt,Dt){var ut,zt,Bt,At,Pt,Tt,Ot=Dt.dyn_tree,k=Dt.max_code,_t=Dt.stat_desc.static_tree,wt=Dt.stat_desc.has_stree,It=Dt.stat_desc.extra_bits,N=Dt.stat_desc.extra_base,dt=Dt.stat_desc.max_length,ft=0;for(At=0;At<=f;At++)yt.bl_count[At]=0;for(Ot[2*yt.heap[yt.heap_max]+1]=0,ut=yt.heap_max+1;ut<g;ut++)dt<(At=Ot[2*Ot[2*(zt=yt.heap[ut])+1]+1]+1)&&(At=dt,ft++),Ot[2*zt+1]=At,k<zt||(yt.bl_count[At]++,Pt=0,N<=zt&&(Pt=It[zt-N]),Tt=Ot[2*zt],yt.opt_len+=Tt*(At+Pt),wt&&(yt.static_len+=Tt*(_t[2*zt+1]+Pt)));if(ft!==0){do{for(At=dt-1;yt.bl_count[At]===0;)At--;yt.bl_count[At]--,yt.bl_count[At+1]+=2,yt.bl_count[dt]--,ft-=2}while(0<ft);for(At=dt;At!==0;At--)for(zt=yt.bl_count[At];zt!==0;)k<(Bt=yt.heap[--ut])||(Ot[2*Bt+1]!==At&&(yt.opt_len+=(At-Ot[2*Bt+1])*Ot[2*Bt],Ot[2*Bt+1]=At),zt--)}}(C,M),Et($,mt,C.bl_count)}function x(C,M,E){var U,O,$=-1,tt=M[1],rt=0,lt=7,mt=4;for(tt===0&&(lt=138,mt=3),M[2*(E+1)+1]=65535,U=0;U<=E;U++)O=tt,tt=M[2*(U+1)+1],++rt<lt&&O===tt||(rt<mt?C.bl_tree[2*O]+=rt:O!==0?(O!==$&&C.bl_tree[2*O]++,C.bl_tree[2*b]++):rt<=10?C.bl_tree[2*A]++:C.bl_tree[2*P]++,$=O,mt=(rt=0)===tt?(lt=138,3):O===tt?(lt=6,3):(lt=7,4))}function q(C,M,E){var U,O,$=-1,tt=M[1],rt=0,lt=7,mt=4;for(tt===0&&(lt=138,mt=3),U=0;U<=E;U++)if(O=tt,tt=M[2*(U+1)+1],!(++rt<lt&&O===tt)){if(rt<mt)for(;Q(C,O,C.bl_tree),--rt!=0;);else O!==0?(O!==$&&(Q(C,O,C.bl_tree),rt--),Q(C,b,C.bl_tree),K(C,rt-3,2)):rt<=10?(Q(C,A,C.bl_tree),K(C,rt-3,3)):(Q(C,P,C.bl_tree),K(C,rt-11,7));$=O,mt=(rt=0)===tt?(lt=138,3):O===tt?(lt=6,3):(lt=7,4)}}l(Z);var z=!1;function D(C,M,E,U){K(C,(c<<1)+(U?1:0),3),function(O,$,tt,rt){gt(O),ht(O,tt),ht(O,~tt),s.arraySet(O.pending_buf,O.window,$,tt,O.pending),O.pending+=tt}(C,M,E)}r._tr_init=function(C){z||(function(){var M,E,U,O,$,tt=new Array(f+1);for(O=U=0;O<h-1;O++)for(F[O]=U,M=0;M<1<<T[O];M++)v[U++]=O;for(v[U-1]=O,O=$=0;O<16;O++)for(Z[O]=$,M=0;M<1<<H[O];M++)V[$++]=O;for($>>=7;O<d;O++)for(Z[O]=$<<7,M=0;M<1<<H[O]-7;M++)V[256+$++]=O;for(E=0;E<=f;E++)tt[E]=0;for(M=0;M<=143;)L[2*M+1]=8,M++,tt[8]++;for(;M<=255;)L[2*M+1]=9,M++,tt[9]++;for(;M<=279;)L[2*M+1]=7,M++,tt[7]++;for(;M<=287;)L[2*M+1]=8,M++,tt[8]++;for(Et(L,m+1,tt),M=0;M<d;M++)R[2*M+1]=5,R[2*M]=xt(M,5);J=new it(L,T,p+1,m,f),j=new it(R,H,0,d,f),nt=new it(new Array(0),X,0,_,S)}(),z=!0),C.l_desc=new G(C.dyn_ltree,J),C.d_desc=new G(C.dyn_dtree,j),C.bl_desc=new G(C.bl_tree,nt),C.bi_buf=0,C.bi_valid=0,vt(C)},r._tr_stored_block=D,r._tr_flush_block=function(C,M,E,U){var O,$,tt=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=function(rt){var lt,mt=4093624447;for(lt=0;lt<=31;lt++,mt>>>=1)if(1&mt&&rt.dyn_ltree[2*lt]!==0)return o;if(rt.dyn_ltree[18]!==0||rt.dyn_ltree[20]!==0||rt.dyn_ltree[26]!==0)return a;for(lt=32;lt<p;lt++)if(rt.dyn_ltree[2*lt]!==0)return a;return o}(C)),pt(C,C.l_desc),pt(C,C.d_desc),tt=function(rt){var lt;for(x(rt,rt.dyn_ltree,rt.l_desc.max_code),x(rt,rt.dyn_dtree,rt.d_desc.max_code),pt(rt,rt.bl_desc),lt=_-1;3<=lt&&rt.bl_tree[2*w[lt]+1]===0;lt--);return rt.opt_len+=3*(lt+1)+5+5+4,lt}(C),O=C.opt_len+3+7>>>3,($=C.static_len+3+7>>>3)<=O&&(O=$)):O=$=E+5,E+4<=O&&M!==-1?D(C,M,E,U):C.strategy===4||$===O?(K(C,2+(U?1:0),3),B(C,L,R)):(K(C,4+(U?1:0),3),function(rt,lt,mt,yt){var Dt;for(K(rt,lt-257,5),K(rt,mt-1,5),K(rt,yt-4,4),Dt=0;Dt<yt;Dt++)K(rt,rt.bl_tree[2*w[Dt]+1],3);q(rt,rt.dyn_ltree,lt-1),q(rt,rt.dyn_dtree,mt-1)}(C,C.l_desc.max_code+1,C.d_desc.max_code+1,tt+1),B(C,C.dyn_ltree,C.dyn_dtree)),vt(C),U&&gt(C)},r._tr_tally=function(C,M,E){return C.pending_buf[C.d_buf+2*C.last_lit]=M>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&M,C.pending_buf[C.l_buf+C.last_lit]=255&E,C.last_lit++,M===0?C.dyn_ltree[2*E]++:(C.matches++,M--,C.dyn_ltree[2*(v[E]+p+1)]++,C.dyn_dtree[2*W(M)]++),C.last_lit===C.lit_bufsize-1},r._tr_align=function(C){K(C,2,3),Q(C,y,L),function(M){M.bi_valid===16?(ht(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)}(C)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,h,p,m=1,d={},_=!1,g=o.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(o);f=f&&f.setTimeout?f:o,l={}.toString.call(o.process)==="[object process]"?function(b){process.nextTick(function(){S(b)})}:function(){if(o.postMessage&&!o.importScripts){var b=!0,A=o.onmessage;return o.onmessage=function(){b=!1},o.postMessage("","*"),o.onmessage=A,b}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(b){o.postMessage(p+b,"*")}):o.MessageChannel?((h=new MessageChannel).port1.onmessage=function(b){S(b.data)},function(b){h.port2.postMessage(b)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(b){var A=g.createElement("script");A.onreadystatechange=function(){S(b),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(b){setTimeout(S,0,b)},f.setImmediate=function(b){typeof b!="function"&&(b=new Function(""+b));for(var A=new Array(arguments.length-1),P=0;P<A.length;P++)A[P]=arguments[P+1];var T={callback:b,args:A};return d[m]=T,l(m),m++},f.clearImmediate=u}function u(b){delete d[b]}function S(b){if(_)setTimeout(S,0,b);else{var A=d[b];if(A){_=!0;try{(function(P){var T=P.callback,H=P.args;switch(H.length){case 0:T();break;case 1:T(H[0]);break;case 2:T(H[0],H[1]);break;case 3:T(H[0],H[1],H[2]);break;default:T.apply(a,H)}})(A)}finally{u(b),_=!1}}}}function y(b){b.source===o&&typeof b.data=="string"&&b.data.indexOf(p)===0&&S(+b.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jl);var pg=jl.exports;const mg=dg(pg);function gg(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),URL.revokeObjectURL(e)}async function _g({mesh:i,dimensions:t,imageFile:e,chamfer:n}){const s=new fg().parse(i,{binary:!1}),o=new Blob([s],{type:"model/stl"}),a=!!(n!=null&&n.enabled),l=a?n.depth:0,c=[`width_in=${t.width}`,`height_in=${t.height}`,`depth_in=${t.depth}`,`pad_x_in=${t.padX??0}`,`pad_y_in=${t.padY??0}`,`chamfer_enabled=${a}`,`chamfer_angle_deg=${a?45:0}`,`chamfer_depth_in=${l}`,`image_filename=${e?e.name:"none"}`,`generated_at=${new Date().toISOString()}`].join(`
`),h=new mg;h.file("panel.stl",o),h.file("metadata.txt",c),e&&h.file(`image_${e.name}`,e);const p=await h.generateAsync({type:"blob"});gg(p,"panel_export.zip")}const xn=document.querySelector("#viewport"),Ai=document.querySelector("#width"),Ci=document.querySelector("#height"),qi=document.querySelector("#depth"),Xs=document.querySelector("#chamfer"),vg=document.querySelector("#image"),Si=document.querySelector("#padX"),Mi=document.querySelector("#padY"),Zl=document.querySelector("#resetPadding"),Kl=document.querySelector("#matchWidth"),Jl=document.querySelector("#matchHeight"),nl=document.querySelector("#togglePanel"),xg=document.querySelector("#exportBtn"),il=document.querySelector("#imageStatus"),yg=document.querySelector("#panel"),Sg=document.querySelector("#app"),Mg=document.querySelectorAll(".section-toggle"),ct={width:Number(Ai.value),height:Number(Ci.value),depth:Number(qi.value),chamfer:Xs.checked,padX:Number(Si.value),padY:Number(Mi.value),image:null,imageFile:null},Oe=new ym;Oe.background=new qt("#0f1317");const zn=new Ue(45,1,.1,2e3);zn.position.set(0,0,80);zn.lookAt(0,0,0);const Gn=new Fl({antialias:!0});Gn.setPixelRatio(window.devicePixelRatio);Gn.setSize(xn.clientWidth,xn.clientHeight);Gn.shadowMap.enabled=!0;xn.appendChild(Gn.domElement);const Sn=new cg;Sn.setSize(xn.clientWidth,xn.clientHeight);Sn.domElement.style.position="absolute";Sn.domElement.style.top="0";Sn.domElement.style.left="0";Sn.domElement.style.pointerEvents="none";xn.appendChild(Sn.domElement);const Ri=new og(zn,Gn.domElement);Ri.enableDamping=!0;Ri.dampingFactor=.08;Ri.minDistance=10;Ri.maxDistance=300;Ri.target.set(0,0,0);const Eg=new ng(16777215,2107443,.9);Oe.add(Eg);const sa=new ra(16777215,1);sa.position.set(60,90,50);sa.castShadow=!0;Oe.add(sa);const $l=new ra(10470655,.45);$l.position.set(-40,30,20);Oe.add($l);const Ql=new ra(16777215,.35);Ql.position.set(-20,50,-60);Oe.add(Ql);const bg=Rg();Oe.add(bg);const wg=new sg(20);Oe.add(wg);const Tg=new eg({color:2830648,metalness:.2,roughness:.65}),fi=new Or({color:16777215});fi.toneMapped=!1;let di=Ag();Oe.add(di);let li=Pg();Oe.add(li);const pn=new zi;Oe.add(pn);const $e=Cg();function Ag(){const i=rc(),t=new Te(i,Tg);return t.castShadow=!0,t.receiveShadow=!0,t.position.set(0,ct.height/2,0),t}function Br(){di&&(di.geometry.dispose(),di.geometry=rc(),di.position.set(0,ct.height/2,0)),Lg(),yn(),nc()}function yn(){if(!ct.image){fi.map=null,fi.needsUpdate=!0,il.textContent="No image loaded",rl(!1);return}const i=Vr(),t=hg(ct.image,i.width,i.height,{x:ct.padX,y:ct.padY});fi.map=t,fi.needsUpdate=!0,il.textContent="Image loaded",rl(!0)}function Ps(i,t,e,n=1/0){if(i==="")return null;const r=Number(i);return Number.isFinite(r)?Math.min(Math.max(r,e),n):null}function Pi(i){const t=Ps(Ai.value,ct.width,1),e=Ps(Ci.value,ct.height,1,35),n=Ps(qi.value,ct.depth,.1,1);t===null||e===null||n===null||(ct.width=t,ct.height=e,ct.depth=n,ct.image?Gr():Hr(i),Br())}function aa(){Ai.value=ct.width.toFixed(2),Ci.value=ct.height.toFixed(2),qi.value=ct.depth.toFixed(2)}Ai.addEventListener("input",()=>Pi("width"));Ci.addEventListener("input",()=>Pi("height"));qi.addEventListener("input",()=>Pi("depth"));Xs.addEventListener("change",()=>{ct.chamfer=Xs.checked,Br()});Ai.addEventListener("blur",()=>{Pi("width"),aa()});Ci.addEventListener("blur",()=>{Pi("height"),aa()});qi.addEventListener("blur",()=>{Pi("depth"),aa()});Si.addEventListener("input",()=>{ct.padX=Number(Si.value)||0,Hr("padX"),yn()});Mi.addEventListener("input",()=>{ct.padY=Number(Mi.value)||0,Hr("padY"),yn()});vg.addEventListener("change",i=>{var n;const t=(n=i.target.files)==null?void 0:n[0];if(!t){ct.image=null,ct.imageFile=null,yn();return}const e=new Image;e.onload=()=>{ct.image=e,ct.imageFile=t,Hr("image"),yn()},e.src=URL.createObjectURL(t)});Zl.addEventListener("click",()=>{ct.image&&(Gr(),yn())});nl.addEventListener("click",()=>{const i=yg.classList.toggle("collapsed");Sg.classList.toggle("panel-floating",i),nl.setAttribute("aria-label",i?"Expand panel":"Collapse panel"),kr()});Mg.forEach(i=>{i.addEventListener("click",()=>{const t=i.closest(".section");t&&t.classList.toggle("collapsed")})});Kl.addEventListener("click",()=>{if(!ct.image)return;const i=ct.image.width/ct.image.height;ct.width=ct.height*i,Ai.value=ct.width.toFixed(2),Gr(),Br(),yn()});Jl.addEventListener("click",()=>{if(!ct.image)return;const i=ct.image.width/ct.image.height;ct.height=ct.width/i,Ci.value=ct.height.toFixed(2),Gr(),Br(),yn()});xg.addEventListener("click",async()=>{await _g({mesh:di,dimensions:{width:ct.width,height:ct.height,depth:ct.depth,padX:ct.padX,padY:ct.padY},imageFile:ct.imageFile,chamfer:{enabled:ct.chamfer,depth:ct.chamfer?ct.depth*.3:0}})});function kr(){const{clientWidth:i,clientHeight:t}=xn;zn.aspect=i/t,zn.updateProjectionMatrix(),Gn.setSize(i,t),Sn.setSize(i,t)}const tc=new ResizeObserver(()=>{requestAnimationFrame(kr)});tc.observe(xn);tc.observe(document.body);window.addEventListener("resize",kr);function ec(){requestAnimationFrame(ec),Ri.update(),Gn.render(Oe,zn),Sn.render(Oe,zn)}ec();kr();function Cg(){const i=t=>{const e=document.createElement("div");return e.className="dim-label",e.textContent=t,new lg(e)};return{width:i(""),height:i(""),depth:i("")}}function Rg(){const i=new kn(1e4,1e4,1,1),t=new sn({transparent:!0,depthWrite:!1,uniforms:{minorColor:{value:new qt(8030102)},majorColor:{value:new qt(6056569)},minorSpacing:{value:5},majorSpacing:{value:25},fadeDistance:{value:220}},vertexShader:`
      varying vec3 vWorldPos;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      varying vec3 vWorldPos;
      uniform vec3 minorColor;
      uniform vec3 majorColor;
      uniform float minorSpacing;
      uniform float majorSpacing;
      uniform float fadeDistance;
      float gridLine(float spacing) {
        vec2 coord = vWorldPos.xz / spacing;
        vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
        float line = min(grid.x, grid.y);
        return 1.0 - clamp(line, 0.0, 1.0);
      }
      void main() {
        float minor = gridLine(minorSpacing);
        float major = gridLine(majorSpacing);
        vec3 color = mix(minorColor, majorColor, major);
        float dist = length(cameraPosition.xz - vWorldPos.xz);
        float fade = 1.0 - smoothstep(0.0, fadeDistance, dist);
        float alpha = clamp(max(minor, major) * 1.4, 0.0, 1.0) * fade;
        gl_FragColor = vec4(color, alpha);
      }
    `}),e=new Te(i,t);return e.rotation.x=-Math.PI/2,e.position.y=0,e}function nc(){pn.clear();const i=new $s({color:10134704}),t=new Or({color:10134704}),e=Math.max(.4,Math.min(ct.width,ct.height)*.03),n=new na(e*.4,e,12),r=.02,s=ct.width/2,o=ct.depth/2,a=0,l=new Y(-s,a,o+r),c=new Y(s,a,o+r),h=new Y(s+r,a,o),p=new Y(s+r,ct.height+a,o),m=new Y(s,ct.height+a+r,-o),d=new Y(s,ct.height+a+r,o);Ls(l,c,i,n,t),Ls(h,p,i,n,t),Ls(m,d,i,n,t),$e.width.element.textContent=`${ct.width} in`,$e.height.element.textContent=`${ct.height} in`,$e.depth.element.textContent=`${ct.depth} in`,$e.width.position.copy(l).lerp(c,.5).add(new Y(0,.6,0)),$e.height.position.copy(h).lerp(p,.5).add(new Y(.6,0,0)),$e.depth.position.copy(m).lerp(d,.5).add(new Y(.6,.6,0)),pn.add($e.width),pn.add($e.height),pn.add($e.depth)}nc();function rl(i){Zl.disabled=!i,Kl.disabled=!i,Jl.disabled=!i}function Gr(){if(!ct.image)return;const i=ct.image.width/ct.image.height,t=ct.width/ct.height;if(i>=t){ct.padX=0;const e=ct.width/i;ct.padY=Math.max(0,(ct.height-e)/2)}else{ct.padY=0;const e=ct.height*i;ct.padX=Math.max(0,(ct.width-e)/2)}ct.padX<.01&&(ct.padX=0),ct.padY<.01&&(ct.padY=0),Si.value=ct.padX.toFixed(2),Mi.value=ct.padY.toFixed(2)}function Hr(i){if(!ct.image){Si.value=ct.padX.toFixed(2),Mi.value=ct.padY.toFixed(2);return}const t=ct.image.width/ct.image.height,e=ct.width/ct.height,n=.1,r=Math.max(0,(ct.width-n)/2),s=Math.max(0,(ct.height-n)/2);if(i==="padY"){const o=Math.max(0,(ct.height-ct.width/t)/2),a=Math.min(Math.max(ct.padY,o),s),c=(ct.height-a*2)*t,h=Math.max(0,Math.min((ct.width-c)/2,r));ct.padY=a,ct.padX=h}else if(i==="padX"){const o=Math.max(0,(ct.width-ct.height*t)/2),a=Math.min(Math.max(ct.padX,o),r),c=(ct.width-a*2)/t,h=Math.max(0,Math.min((ct.height-c)/2,s));ct.padX=a,ct.padY=h}else if(t>=e){ct.padX=0;const a=(ct.width-ct.padX*2)/t;ct.padY=Math.max(0,Math.min((ct.height-a)/2,s))}else{ct.padY=0;const a=(ct.height-ct.padY*2)*t;ct.padX=Math.max(0,Math.min((ct.width-a)/2,r))}Si.value=ct.padX.toFixed(2),Mi.value=ct.padY.toFixed(2)}function ic(){if(!ct.chamfer)return 0;const i=Math.max(.001,ct.depth*.3),t=Math.min(ct.width/2,ct.height/2,ct.depth/2);return Math.min(i,t)}function Vr(){const i=ic();return{width:Math.max(.01,ct.width-i*2),height:Math.max(.01,ct.height-i*2)}}function rc(){if(!ct.chamfer)return new wi(ct.width,ct.height,ct.depth);const i=ic(),t=Vr(),e=t.width,n=t.height,r=new Vl;r.moveTo(-e/2,-n/2),r.lineTo(e/2,-n/2),r.lineTo(e/2,n/2),r.lineTo(-e/2,n/2),r.closePath();const s=Math.max(.01,ct.depth-i*2),o=new ia(r,{depth:s,bevelEnabled:!0,bevelSize:i,bevelThickness:i,bevelSegments:1,steps:1,curveSegments:1});return o.center(),o}function Pg(){const i=Vr(),t=new kn(i.width,i.height),e=new Te(t,fi);return e.position.set(0,ct.height/2,ct.depth/2+.01),e}function Lg(){if(!li)return;const i=Vr();li.geometry.dispose(),li.geometry=new kn(i.width,i.height),li.position.set(0,ct.height/2,ct.depth/2+.01),li.visible=!0}function Ls(i,t,e,n,r){const s=new Fe().setFromPoints([i,t]),o=new zl(s,e);pn.add(o);const a=new Y().subVectors(t,i).normalize(),l=i.distanceTo(t),c=Math.min(l*.06,.6),h=new Te(n,r);h.position.copy(i).add(a.clone().multiplyScalar(c)),h.quaternion.setFromUnitVectors(new Y(0,1,0),a.clone().negate()),pn.add(h);const p=new Te(n,r);p.position.copy(t).add(a.clone().multiplyScalar(-c)),p.quaternion.setFromUnitVectors(new Y(0,1,0),a),pn.add(p)}

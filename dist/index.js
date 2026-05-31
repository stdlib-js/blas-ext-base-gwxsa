"use strict";var x=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var j=x(function(K,P){
function B(a,e,u,i,t,r,s,g){var o,v,f,q,n,c,w;for(o=u.data,v=r.data,f=u.accessors[0],q=r.accessors[1],n=t,c=g,w=0;w<a;w++)q(v,c,f(o,n)-e),n+=i,c+=s;return r}P.exports=B
});var m=x(function(L,M){
var k=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/blas-base-gcopy/dist').ndarray,D=j(),b=5;function E(a,e,u,i,t,r,s,g){var o,v,f,q,n,c;if(a<=0)return r;if(e===0)return C(a,u,i,t,r,s,g);if(f=k(u),q=k(r),f.accessorProtocol||q.accessorProtocol)return D(a,e,f,i,t,q,s,g),r;if(o=t,v=g,i===1&&s===1){if(n=a%b,n>0)for(c=0;c<n;c++)r[v]=u[o]-e,o+=i,v+=s;if(a<b)return r;for(c=n;c<a;c+=b)r[v]=u[o]-e,r[v+1]=u[o+1]-e,r[v+2]=u[o+2]-e,r[v+3]=u[o+3]-e,r[v+4]=u[o+4]-e,o+=b,v+=b;return r}for(c=0;c<a;c++)r[v]=u[o]-e,o+=i,v+=s;return r}M.exports=E
});var z=x(function(Q,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),F=m();function G(a,e,u,i,t,r){return F(a,e,u,i,O(a,i),t,r,O(a,r))}R.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),I=m();H(A,"ndarray",I);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

(this.webpackJsonphelloswap=this.webpackJsonphelloswap||[]).push([[0],{210:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},211:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},218:function(e,t,n){},219:function(e,t,n){},221:function(e,t,n){},238:function(e,t){},240:function(e,t){},242:function(e,t){},246:function(e,t){},273:function(e,t){},275:function(e,t){},284:function(e,t){},286:function(e,t){},296:function(e,t){},298:function(e,t){},418:function(e,t){},420:function(e,t){},427:function(e,t){},428:function(e,t){},518:function(e,t,n){},520:function(e,t,n){},521:function(e,t,n){"use strict";n.r(t);var a=n(17),i=n.n(a),s=n(208),r=n.n(s),u=(n(218),n(19)),c=(n(219),n(13)),o=n(4),p=n.n(o),l=n(14),d=(n(221),n(30)),y=n(31),m=n(12),b=n.n(m),j=function(){var e=Object(l.a)(p.a.mark((function e(){var t,n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return t=new b.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:return e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:e.next=23;break;case 13:if(!window.web3){e.next=19;break}return n=window.web3,console.log("Injected web3 detected."),e.abrupt("return",n);case 19:return a=new b.a.providers.HttpProvider("http://127.0.0.1:9545"),i=new b.a(a),console.log("No web3 instance injected, using Local web3."),e.abrupt("return",i);case 23:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),f=n(210),x=function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.abrupt("return",new n.eth.Contract(f,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=n(211),h=function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.abrupt("return",new n.eth.Contract(T,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(n(518),n(1));var v=function(e){var t=["0xEcE0Dfdd6fA861B44117A30CCB432dfB332091EB","0xb289b361a633A9D2b0B39BAE76BB458d83f58CEC","0x03351b77e3548b2fa34b89b39e10f327b298c257","0x2d144001b32AFFdb3189186BE5B2F5D207384E89"],n=Object(a.useState)(t),i=Object(u.a)(n,2),s=i[0],r=i[1],c=Object(a.useState)([]),o=Object(u.a)(c,2),m=o[0],b=o[1];function f(){e.handedClickCLose&&e.handedClickCLose()}function T(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(p.a.mark((function e(t){var n,a,i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.next=5,n.eth.getAccounts();case 5:return a=e.sent,e.next=8,x(t);case 8:return i=e.sent,e.next=11,i.methods.balanceOf(a[0]).call();case 11:return s=e.sent,e.next=14,i.methods.decimals().call();case 14:return r=e.sent,e.next=17,i.methods.symbol().call();case 17:return u=e.sent,s=(s/Math.pow(10,r)).toFixed(3),e.abrupt("return",{symbol:u,decimals:r,balance:s,address:t});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Promise.all(s.map(function(){var e=Object(l.a)(p.a.mark((function e(n){var a,i,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(n);case 3:return a=e.sent,i=a.symbol,s=a.decimals,r=a.balance,e.next=9,t.push({symbol:i,decimals:s,balance:r,address:n});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Cant find token");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()));case 3:return e.next=5,b(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(O.jsx)("div",{className:"PanelTokenSearch",children:Object(O.jsxs)("div",{className:"MainCardTokenSearch",children:[Object(O.jsxs)("div",{className:"MainCardTokenSearchTitle",children:[Object(O.jsx)("nav",{children:"Select a token"}),Object(O.jsx)(d.a,{size:"2x",icon:y.d,onClick:f})]}),Object(O.jsx)("input",{type:"text",className:"TokenSearchInput",placeholder:"Add address to find token",onChange:function(){var e=Object(l.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=n.target.value).length>35?r([a]):0==a.length&&r(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)("h3",{children:"Take a token"}),Object(O.jsx)("div",{className:"CardTokenPanel",children:Object(O.jsx)("div",{children:m.map((function(t){var n=t.symbol,a=t.balance,i=t.address;return Object(O.jsxs)("div",{className:"CardToken",children:[Object(O.jsxs)("nav",{className:"CardToken-Symbol",onClick:function(){!function(t){e.handedClickCard&&e.handedClickCard(t)}(i),f()},children:[" ",n]}),Object(O.jsx)("button",{className:"CardToken-Remove",children:" Remove"}),Object(O.jsxs)("nav",{className:"CardToken-Token",children:[a," Token"]})]},i)}))})})]})})};var k=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),r=Object(u.a)(s,2),o=r[0],m=(r[1],Object(a.useState)("Loading...")),f=Object(u.a)(m,2),T=f[0],k=f[1],w=Object(a.useState)((function(){return{address:"0xb289b361a633a9d2b0b39bae76bb458d83f58cec",inputToken:0,decimals:0,balance:0,symbol:""}})),g=Object(u.a)(w,2),M=g[0],B=g[1],C=Object(a.useState)((function(){return{address:"0x03351b77e3548b2fa34b89b39e10f327b298c257",inputToken:0,decimals:0,balance:0,symbol:""}})),I=Object(u.a)(C,2),S=I[0],N=I[1],A="0xCc7aDc94F3D80127849D2b41b6439b7CF1eB4Ae0";function E(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(p.a.mark((function e(t){var n,a,i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.next=5,n.eth.getAccounts();case 5:return a=e.sent,e.next=8,x(t);case 8:return i=e.sent,e.next=11,i.methods.balanceOf(a[0]).call();case 11:return s=e.sent,e.next=14,i.methods.decimals().call();case 14:return r=e.sent,e.next=17,i.methods.symbol().call();case 17:return u=e.sent,e.abrupt("return",{symbol:u,decimals:r,balance:s,address:t});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(p.a.mark((function e(t,n,a){var i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:i=e.sent,s=i.symbol,r=i.decimals,u=i.balance,a(Object(c.a)(Object(c.a)({},n),{},{address:t,balance:u,decimals:r,symbol:s}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,t.eth.getAccounts();case 5:return n=e.sent,k(n[0]),e.next=9,H(M.address,M,B);case 9:return e.next=11,H(S.address,S,N);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:["A"==n?Object(O.jsx)(v,{handedClickCLose:function(){i(!1)},handedClickCard:function(){var e=Object(l.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,M,B);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),infoToken:[M,B]}):null,"B"==n?Object(O.jsx)(v,{handedClickCLose:function(){i(!1)},handedClickCard:function(){var e=Object(l.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,S,N);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),infoToken:[S,N]}):null,Object(O.jsx)("h3",{children:T}),Object(O.jsx)("div",{className:"MainContent",children:Object(O.jsxs)("div",{className:"MainCard",children:[Object(O.jsx)("nav",{className:"TitleCard",children:"Swap"}),Object(O.jsxs)("div",{className:"BoxInput",children:[Object(O.jsxs)("div",{className:"BoxInput-Info",children:[Object(O.jsx)("nav",{children:"Input"}),Object(O.jsxs)("nav",{children:["Balance:",(M.balance/Math.pow(10,M.decimals)).toFixed(3)]}),Object(O.jsxs)("nav",{children:[M.symbol," Coin"]})]}),Object(O.jsxs)("div",{className:"BoxInput-Value",children:[Object(O.jsx)("input",{type:"number",step:"0.01",placeholder:"0.00",value:M.inputToken/Math.pow(10,M.decimals),onChange:function(e){var t=e.target.value*Math.pow(10,M.decimals);B(Object(c.a)(Object(c.a)({},M),{},{inputToken:t}))},onBlur:function(){var e=Object(l.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value*Math.pow(10,18).toFixed(3),console.log(BigInt(n).toString()),e.prev=2,e.next=5,h(A);case 5:return a=e.sent,e.next=8,a.methods.getAmountsOut(b.a.utils.toBN(BigInt(n).toString()),[M.address,S.address]).call();case 8:i=(i=e.sent)[1],console.log(i),N(Object(c.a)(Object(c.a)({},S),{},{inputToken:i})),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)("button",{onClick:function(){B(Object(c.a)(Object(c.a)({},M),{},{inputToken:M.balance}))},children:"Max"}),Object(O.jsx)("button",{onClick:function(){i("A")},children:Object(O.jsx)(d.a,{size:"2x",icon:y.b})})]})]}),Object(O.jsx)(d.a,{size:"2x",className:"IconPlus",icon:y.c}),Object(O.jsxs)("div",{className:"BoxInput",children:[Object(O.jsxs)("div",{className:"BoxInput-Info",children:[Object(O.jsx)("nav",{children:"Input"}),Object(O.jsxs)("nav",{children:["Balance:",(S.balance/Math.pow(10,S.decimals)).toFixed(3)]}),Object(O.jsxs)("nav",{children:[S.symbol," Coin"]})]}),Object(O.jsxs)("div",{className:"BoxInput-Value",children:[Object(O.jsx)("input",{type:"number",step:"0.01",placeholder:"0.00",value:S.inputToken/Math.pow(10,S.decimals),onChange:function(e){var t=e.target.value*Math.pow(10,S.decimals);N(Object(c.a)(Object(c.a)({},S),{},{inputToken:t}))},onBlur:function(){var e=Object(l.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value*Math.pow(10,18).toFixed(3),console.log(BigInt(n).toString()),e.prev=2,e.next=5,h(A);case 5:return a=e.sent,e.next=8,a.methods.getAmountsIn(b.a.utils.toBN(BigInt(n).toString()),[M.address,S.address]).call();case 8:i=(i=e.sent)[0],console.log(i),B(Object(c.a)(Object(c.a)({},M),{},{inputToken:i})),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)("button",{onClick:function(){N(Object(c.a)(Object(c.a)({},S),{},{inputToken:S.balance}))},children:"Max"}),Object(O.jsx)("button",{onClick:function(){i("B")},children:Object(O.jsx)(d.a,{size:"2x",icon:y.b})})]})]}),Object(O.jsxs)("div",{className:"BoxInput-OverView",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"A per B"}),Object(O.jsx)("li",{children:"Poor Share"}),Object(O.jsx)("li",{children:"B per A"})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"50"}),Object(O.jsx)("li",{children:o}),Object(O.jsx)("li",{children:"50"})]})]}),Object(O.jsx)("button",{className:"Button-Confirm",onClick:Object(l.a)(p.a.mark((function e(){var t,n,a,i,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(M.address);case 2:return t=e.sent,e.next=5,t.methods.allowance(T,A).call();case 5:return n=e.sent,e.next=8,x(S.address);case 8:return a=e.sent,e.next=11,a.methods.allowance(T,A).call();case 11:if(i=e.sent,console.log(n),console.log(M.inputToken),!(+M.inputToken>+n)){e.next=18;break}return alert("Approve token "+M.symbol),e.next=18,t.methods.approve(A,b.a.utils.toBN(BigInt(Math.pow(10,50)).toString())).send({from:T});case 18:if(!(+S.inputToken>+i)){e.next=22;break}return alert("Approve token ",S.symbol),e.next=22,a.methods.approve(A,b.a.utils.toBN(BigInt(Math.pow(10,50)).toString())).send({from:T});case 22:return e.next=24,h(A);case 24:return s=e.sent,e.next=27,s.methods.swapExactTokensForTokens(b.a.utils.toBN(BigInt(M.inputToken).toString()),b.a.utils.toBN(BigInt(S.inputToken).toString()),[M.address,S.address],T,b.a.utils.toBN((new Date).getTime()+1200)).send({from:T});case 27:r=e.sent,alert("Swap Success Check on https://testnet.bscscan.com/tx/"+r.transactionHash);case 29:case"end":return e.stop()}}),e)}))),children:"Swap"})]})})]})};n(520);var w=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(0),r=Object(u.a)(s,2),o=r[0],m=(r[1],Object(a.useState)("Loading...")),f=Object(u.a)(m,2),T=f[0],k=f[1],w=Object(a.useState)((function(){return{address:"0xb289b361a633a9d2b0b39bae76bb458d83f58cec",inputToken:0,decimals:0,balance:0,symbol:""}})),g=Object(u.a)(w,2),M=g[0],B=g[1],C=Object(a.useState)((function(){return{address:"0x03351b77e3548b2fa34b89b39e10f327b298c257",inputToken:0,decimals:0,balance:0,symbol:""}})),I=Object(u.a)(C,2),S=I[0],N=I[1],A="0xCc7aDc94F3D80127849D2b41b6439b7CF1eB4Ae0";function E(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(p.a.mark((function e(t){var n,a,i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.next=5,n.eth.getAccounts();case 5:return a=e.sent,e.next=8,x(t);case 8:return i=e.sent,e.next=11,i.methods.balanceOf(a[0]).call();case 11:return s=e.sent,e.next=14,i.methods.decimals().call();case 14:return r=e.sent,e.next=17,i.methods.symbol().call();case 17:return u=e.sent,e.abrupt("return",{symbol:u,decimals:r,balance:s,address:t});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(p.a.mark((function e(t,n,a){var i,s,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:i=e.sent,s=i.symbol,r=i.decimals,u=i.balance,a(Object(c.a)(Object(c.a)({},n),{},{address:t,balance:u,decimals:r,symbol:s}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.next=5,t.eth.getAccounts();case 5:return n=e.sent,k(n[0]),e.next=9,H(M.address,M,B);case 9:return e.next=11,H(S.address,S,N);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:["A"==n?Object(O.jsx)(v,{handedClickCLose:function(){i(!1)},handedClickCard:function(){var e=Object(l.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,M,B);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),infoToken:[M,B]}):null,"B"==n?Object(O.jsx)(v,{handedClickCLose:function(){i(!1)},handedClickCard:function(){var e=Object(l.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,S,N);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),infoToken:[S,N]}):null,Object(O.jsx)("h3",{children:T}),Object(O.jsx)("div",{className:"MainContent",children:Object(O.jsxs)("div",{className:"MainCard",children:[Object(O.jsx)("nav",{className:"TitleCard",children:"Liquidity"}),Object(O.jsxs)("div",{className:"BoxInput",children:[Object(O.jsxs)("div",{className:"BoxInput-Info",children:[Object(O.jsx)("nav",{children:"Input"}),Object(O.jsxs)("nav",{children:["Balance:",(M.balance/Math.pow(10,M.decimals)).toFixed(3)]}),Object(O.jsxs)("nav",{children:[M.symbol," Coin"]})]}),Object(O.jsxs)("div",{className:"BoxInput-Value",children:[Object(O.jsx)("input",{type:"number",step:"0.01",placeholder:"0.00",value:M.inputToken/Math.pow(10,M.decimals),onChange:function(e){var t=e.target.value*Math.pow(10,M.decimals);B(Object(c.a)(Object(c.a)({},M),{},{inputToken:t}))},onBlur:function(){var e=Object(l.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value*Math.pow(10,M.decimals).toFixed(3),console.log(BigInt(n).toString()),e.prev=2,e.next=5,h(A);case 5:return a=e.sent,e.next=8,a.methods.getAmountsOut(b.a.utils.toBN(BigInt(1e4).toString()),[M.address,S.address]).call();case 8:i=(i=e.sent)[1]/1e4,i=(n*i).toFixed(0),console.log(i),N(Object(c.a)(Object(c.a)({},S),{},{inputToken:i})),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)("button",{onClick:function(){B(Object(c.a)(Object(c.a)({},M),{},{inputToken:M.balance}))},children:"Max"}),Object(O.jsx)("button",{onClick:function(){i("A")},children:Object(O.jsx)(d.a,{size:"2x",icon:y.b})})]})]}),Object(O.jsx)(d.a,{size:"2x",className:"IconPlus",icon:y.a}),Object(O.jsxs)("div",{className:"BoxInput",children:[Object(O.jsxs)("div",{className:"BoxInput-Info",children:[Object(O.jsx)("nav",{children:"Input"}),Object(O.jsxs)("nav",{children:["Balance:",(S.balance/Math.pow(10,S.decimals)).toFixed(3)]}),Object(O.jsxs)("nav",{children:[S.symbol," Coin"]})]}),Object(O.jsxs)("div",{className:"BoxInput-Value",children:[Object(O.jsx)("input",{type:"number",step:"0.01",placeholder:"0.00",value:S.inputToken/Math.pow(10,S.decimals),onChange:function(e){var t=e.target.value*Math.pow(10,S.decimals);N(Object(c.a)(Object(c.a)({},S),{},{inputToken:t}))},onBlur:function(){var e=Object(l.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value*Math.pow(10,S.decimals).toFixed(3),console.log(BigInt(n).toString()),e.prev=2,e.next=5,h(A);case 5:return a=e.sent,e.next=8,a.methods.getAmountsIn(b.a.utils.toBN(BigInt(1e4).toString()),[M.address,S.address]).call();case 8:i=(i=e.sent)[0]/1e4,i=(n*i).toFixed(0),console.log(i),B(Object(c.a)(Object(c.a)({},M),{},{inputToken:i})),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}()}),Object(O.jsx)("button",{onClick:function(){N(Object(c.a)(Object(c.a)({},S),{},{inputToken:S.balance}))},children:"Max"}),Object(O.jsx)("button",{onClick:function(){i("B")},children:Object(O.jsx)(d.a,{size:"2x",icon:y.b})})]})]}),Object(O.jsxs)("div",{className:"BoxInput-OverView",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"A per B"}),Object(O.jsx)("li",{children:"Poor Share"}),Object(O.jsx)("li",{children:"B per A"})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"50"}),Object(O.jsx)("li",{children:o}),Object(O.jsx)("li",{children:"50"})]})]}),Object(O.jsx)("button",{className:"Button-Confirm",onClick:Object(l.a)(p.a.mark((function e(){var t,n,a,i,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(M.address);case 2:return t=e.sent,e.next=5,t.methods.allowance(T,A).call();case 5:return n=e.sent,e.next=8,x(S.address);case 8:return a=e.sent,e.next=11,a.methods.allowance(T,A).call();case 11:if(i=e.sent,console.log(n),console.log(i),!(+M.inputToken>+n)){e.next=18;break}return alert("Approve token  "+M.symbol),e.next=18,t.methods.approve(A,b.a.utils.toBN(BigInt(Math.pow(10,50)).toString())).send({from:T});case 18:if(!(+S.inputToken>+i)){e.next=22;break}return alert("Approve token  "+S.symbol),e.next=22,a.methods.approve(A,b.a.utils.toBN(BigInt(Math.pow(10,50)).toString())).send({from:T});case 22:return e.next=24,h(A);case 24:return s=e.sent,e.next=27,s.methods.addLiquidity(M.address,S.address,b.a.utils.toBN(BigInt(M.inputToken).toString()),b.a.utils.toBN(BigInt(S.inputToken).toString()),b.a.utils.toBN(BigInt((.99*M.inputToken).toFixed(0)).toString()),b.a.utils.toBN(BigInt((.99*M.inputToken).toFixed(0)).toString()),T,b.a.utils.toBN((new Date).getTime()+1200)).send({from:T});case 27:r=e.sent,alert("Add Liquidity Success Check on   https://testnet.bscscan.com/tx/"+r.transactionHash);case 29:case"end":return e.stop()}}),e)}))),children:"Add Liquidity"})]})})]})};var g=function(){var e=Object(a.useState)("/Swap"),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("ul",{className:"router",children:[Object(O.jsx)("li",{onClick:function(){i("/Swap")},children:"Swap"}),Object(O.jsx)("li",{onClick:function(){i("/Liquidity")},children:"Liquidity"})]}),Object(O.jsxs)("div",{className:"main",children:["/Swap"==n?Object(O.jsx)(k,{}):null,"/Liquidity"==n?Object(O.jsx)(w,{}):null]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,525)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),M()}},[[521,1,2]]]);
//# sourceMappingURL=main.c249c491.chunk.js.map
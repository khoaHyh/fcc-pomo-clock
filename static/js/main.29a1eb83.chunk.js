(this["webpackJsonpfcc-pomo-clock"]=this["webpackJsonpfcc-pomo-clock"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t(11),a=t.n(i),o=(t(20),t(2)),s=t(3),l=(t(21),t(12)),u=t.n(l),d=t(4);function b(){var e=Object(s.a)(["\n    margin: 0.25rem;\n    padding: 0.2rem;\n    width: 3.5rem;\n    border: solid 1px grey;\n    border-radius: 0.25rem;\n    cursor:pointer;\n    background-color: white;\n\n    &:hover {\n        background-color: #e1e1e1;\n    }\n"]);return b=function(){return e},e}function m(){var e=Object(s.a)(["\n    margin: 0.75rem;\n    padding: 0.5rem;\n    border: solid 1px black;\n    border-radius: 0.25rem;\n    background-color: #333;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 8rem;\n"]);return m=function(){return e},e}var j=d.a.div(m()),f=d.a.button(b()),h=/decrement/i,O=function(e){var n=e.label,t=e.decrement,c=e.length,i=e.increment,a=e.text,o=e.breakTime,s=e.sessionTime,l=e.handleDecrement,u=e.handleIncrement,d=function(e){h.test(e.target.id)?l(n):u(n)};return Object(r.jsxs)(j,{className:"manipulate-time",children:[Object(r.jsx)("div",{id:n,children:a}),Object(r.jsx)(f,{id:t,onClick:d,children:"-"}),Object(r.jsx)("div",{id:c,children:"break-label"===n?o:s}),Object(r.jsx)(f,{id:i,onClick:d,children:"+"})]})},p=function(e){var n=e.manipulateTime,t=e.breakTime,c=e.sessionTime,i=e.handleDecrement,a=e.handleIncrement;return n.map((function(e,o){return Object(r.jsx)(O,{label:n[o].label,decrement:n[o].decrement,length:n[o].length,increment:n[o].increment,text:n[o].text,breakTime:t,sessionTime:c,handleDecrement:i,handleIncrement:a},o)}))};function g(){var e=Object(s.a)(["\n  margin: 0.25rem;\n  padding: 0.2rem;\n  width: 5rem;\n  border: solid 1px grey;\n  border-radius: 0.25rem;\n  cursor:pointer;\n  background-color: white;\n\n  &:hover {\n      background-color: #e1e1e1;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(s.a)(["\n  margin: 0.75rem;\n  padding: 0.5rem;\n  width: 8rem;\n  background-color: salmon;\n  color: white;\n  border: solid 1px black;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return e},e}var k,x=d.a.div(v()),S=d.a.button(g()),I=[{label:"break-label",decrement:"break-decrement",length:"break-length",increment:"break-increment",text:"Break Length"},{label:"session-label",decrement:"session-decrement",length:"session-length",increment:"session-increment",text:"Session Length"}],T=function(){var e=Object(c.useState)("Session"),n=Object(o.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(25),s=Object(o.a)(a,2),l=s[0],d=s[1],b=Object(c.useState)(5),m=Object(o.a)(b,2),j=m[0],f=m[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),g=O[0],v=O[1],T=Object(c.useState)(0),w=Object(o.a)(T,2),C=w[0],y=w[1],B=Object(c.useState)("25:00"),D=Object(o.a)(B,2),F=D[0],L=D[1],E=Object(c.useState)(1500),N=Object(o.a)(E,2),J=N[0],P=N[1],A=Object(c.useState)(!1),M=Object(o.a)(A,2),R=M[0],_=M[1],q=Object(c.useState)(!1),z=Object(o.a)(q,2),G=z[0],H=z[1],K=Object(c.useRef)(!0);Object(c.useEffect)((function(){L("".concat(l,":00")),H(!0)}),[l]),Object(c.useEffect)((function(){K.current?K.current=!1:"Break"===t?U(j,"Break"):U(l,"Session")}),[t]);var Q=function(e){var n,r;v(!0),_(!1),H(!1);var c=setInterval((function(){if(y(c),e--,P(e),n=Math.floor(e/60),r=(r=e-60*n)<10?"0"+r:r,L("".concat(n=n<10?"0"+n:n,":").concat(r)),0===e)return V(),"Session"===t?(clearInterval(c),void i("Break")):(clearInterval(c),void i("Session"))}),1e3)},U=function(e){v(!1),clearInterval(C),Q(60*e)},V=function(){k.currentTime=0,k.volume=.5,k.play().catch((function(e){return console.log(e)}))};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(p,{manipulateTime:I,handleDecrement:function(e){g||("break-label"===e?1!==j&&f(parseInt(j)-1):1!==l&&d(parseInt(l)-1))},handleIncrement:function(e){g||("break-label"===e?60!==j&&f(parseInt(j)+1):60!==l&&d(parseInt(l)+1))},sessionTime:l,breakTime:j}),Object(r.jsxs)(x,{className:"timer",children:[Object(r.jsx)("div",{id:"timer-label",children:t}),Object(r.jsx)(S,{id:"start_stop",onClick:function(){g?(v(!1),_(!0),clearInterval(C)):Q("Break"===t?60*j:R?G?60*l:J:60*l)},children:"start/stop"}),Object(r.jsx)("div",{id:"time-left",children:F}),Object(r.jsx)(S,{id:"reset",onClick:function(){clearInterval(C),L("25:00"),v(!1),_(!1),H(!1),f(5),d(25),K.current=!0,i("Session"),k.pause(),k.currentTime=0},children:"reset"})]}),Object(r.jsx)("audio",{id:"beep",ref:function(e){k=e},src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(T,{}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.29a1eb83.chunk.js.map
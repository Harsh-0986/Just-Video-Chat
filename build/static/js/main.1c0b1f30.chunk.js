(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t){},133:function(e,t){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),i=a.n(c),r=a(22),l=a(190),s=a(185),o=a(180),d=a(183),j=a(151),u=a(19),b=a(83),m=a(54),x=a.n(m),p=a(4),O=Object(n.createContext)(),h=Object(b.io)("https://just-video-chat-server.herokuapp.com/"),f=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(u.a)(a,2),i=c[0],r=c[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),o=s[0],d=s[1],j=Object(n.useState)({}),b=Object(u.a)(j,2),m=b[0],f=b[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)(!1),N=Object(u.a)(y,2),k=N[0],I=N[1],S=Object(n.useState)(""),D=Object(u.a)(S,2),B=D[0],A=D[1],R=Object(n.useRef)(),V=Object(n.useRef)(),E=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){r(e),R.current.srcObject=e})),h.on("me",(function(e){return d(e)})),h.on("calluser",(function(e){var t=e.from,a=e.name,n=e.signal;f({isRecievedCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(p.jsx)(O.Provider,{value:{call:m,callAccepted:C,myVideo:R,userVideo:V,stream:i,name:B,setName:A,callEnded:k,me:o,callUser:function(e){var t=new x.a({initiator:!0,trickle:!1,stream:i});t.on("signal",(function(t){h.emit("calluser",{userToCall:e,signalData:t,from:o,name:B})})),t.on("stream",(function(e){V.current.srcObject=e})),h.on("callaccepted",(function(e){w(!0),t.signal(e)})),E.current=t},leaveCall:function(){I(!0),E.current.destroy(),window.location.reload()},answerCall:function(){w(!0);var e=new x.a({initiator:!1,trickle:!1,stream:i});e.on("signal",(function(e){h.emit("answercall",{signal:e,to:m.from})})),e.on("stream",(function(e){V.current.srcObject=e})),e.signal(m.signal),E.current=e}},children:t})},g=Object(o.a)((function(e){return{video:Object(r.a)({width:"550px",height:"50vh"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),v=function(){var e=Object(n.useContext)(O),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,o=e.call,u=g();return Object(p.jsxs)(d.a,{container:!0,className:u.gridContainer,children:[l&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:t||"Name"}),Object(p.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:u.video})]})}),a&&!r&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:o.name||"Name"}),Object(p.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:u.video})]})})]})},C=a(192),w=function(){var e=Object(n.useContext)(O),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(p.jsx)(p.Fragment,{children:a.isRecievedCall&&!c&&Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(p.jsxs)("h3",{children:[a.name," is calling "]}),Object(p.jsx)(C.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},y=a(186),N=a(191),k=a(89),I=a(187),S=a(188),D=a(189),B=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),A=function(e){var t=e.children,a=Object(n.useContext)(O),c=a.me,i=a.callAccepted,r=a.name,l=a.setName,o=a.callEnded,b=a.leaveCall,m=a.callUser,x=Object(n.useState)(""),h=Object(u.a)(x,2),f=h[0],g=h[1],v=B();return Object(p.jsx)(y.a,{className:v.container,children:Object(p.jsxs)(j.a,{elevation:10,className:v.paper,children:[Object(p.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(p.jsxs)(d.a,{container:!0,className:v.gridContainer,children:[Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:"Account Info"}),Object(p.jsx)(N.a,{label:"Name",value:r,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)(k.CopyToClipboard,{text:c,className:v.margin,children:Object(p.jsx)(C.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(p.jsx)(I.a,{fontSize:"large"}),children:"Copy your ID"})})]}),Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(s.a,{variant:"h6",gutterBottom:!0,children:"Make a call"}),Object(p.jsx)(N.a,{label:"ID to call",value:f,onChange:function(e){return g(e.target.value)}}),i&&!o?Object(p.jsx)(C.a,{variant:"contained",color:"secondary",startIcon:Object(p.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:b,className:v.margin,children:"Hang Up"}):Object(p.jsx)(C.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(D.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return m(f)},className:v.margin,children:"Call"})]})]})}),t]})})},R=Object(o.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"45vw",border:"2px solid black",height:"10vh"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),V=function(){var e=R();return Object(p.jsxs)("div",{className:e.wrapper,children:[Object(p.jsx)(l.a,{position:"static",color:"inherit",className:e.appBar,children:Object(p.jsx)(s.a,{variant:"h5",align:"center",children:"Just Video Chat"})}),Object(p.jsx)(v,{}),Object(p.jsx)(A,{children:Object(p.jsx)(w,{})})]})};a(149);i.a.render(Object(p.jsx)(f,{children:Object(p.jsx)(V,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.1c0b1f30.chunk.js.map
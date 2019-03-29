(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),o=a(2),s=a(8),u=a(7),i=r.a.createContext(),m=function(){var e=Object(n.useContext)(i),t=e.token,a=e.setToken;return t?r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){localStorage.removeItem("token"),a(!1)}},"Sign Out"))))):r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/register"},"Register")))))},d=function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Welcome to TaskApp!"),r.a.createElement("h4",null,"Manage your todo list and get more things done"),r.a.createElement(o.b,{to:"/login",className:"btn btn-link"},"Get Started"))},E=a(11),p=a.n(E),f=a(12),h=a(9),v=a.n(h),b=function(e){var t=e.handleUserLogin;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(e.target.email.value,e.target.password.value)}(e)}},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Login"))},g=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],s=Object(n.useContext)(i),m=s.token,d=s.setToken;m&&e.history.push("/dashboard");var E=function(){var t=Object(f.a)(p.a.mark(function t(a,n){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&n){t.next=4;break}return t.abrupt("return",c("Please enter an email and a password"));case 4:c("");case 5:return t.prev=5,t.next=8,v.a.post("/user/login",{email:a,password:n});case 8:r=t.sent,d(r.data.token),localStorage.setItem("token",r.data.token),e.history.push("/dashboard"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),c("Something went wrong, please try again");case 17:case"end":return t.stop()}},t,null,[[5,14]])}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Login"),r.a.createElement(b,{handleUserLogin:E}),l&&r.a.createElement("p",{className:"alert-box alert-box__red"},l),r.a.createElement("p",null,"Don't have an account yet? Sign up for one ",r.a.createElement(o.b,{to:"/register"},"here"),".")))},k=function(e){var t=e.handleUserRegistration;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({firstName:e.target.firstName.value,lastName:e.target.lastName.value,email:e.target.email.value,password:e.target.password.value})}(e)}},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name"}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name"}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Register"))},N=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Register"),r.a.createElement(k,{handleUserRegistration:function(t){if(!(t.firstName&&t.lastName&&t.email&&t.password))return c("Please fill in all fields");c(""),console.log(t),v.a.post("/user",t).then(function(t){localStorage.setItem("token",t.data.token),e.history.push("/dashboard")}).catch(function(e){console.log(e),c(e.toString())})}}),l&&r.a.createElement("p",{className:"alert-box alert-box__red"},l),r.a.createElement("p",null,"Already have an account yet? Sign in ",r.a.createElement(o.b,{to:"/login"},"here"),".")))},w=function(e,t){var a=Object(n.useState)([]),r=Object(u.a)(a,2),l=r[0],c=r[1];return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(p.a.mark(function e(a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:t}},e.next=3,v.a.get("/".concat(a),n);case 3:r=e.sent,c(r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e)},[e]),l},x=a(16),y=a.n(x),S=function(e){var t=e.tasks;return r.a.createElement("div",{className:"task-list"},r.a.createElement("div",{className:"task-list__header"},r.a.createElement("div",null,"Description"),r.a.createElement("div",null,"Due Date"),r.a.createElement("div",null,"Completed Date")),t.map(function(e){return r.a.createElement("div",{className:"task-list__item",key:e._id},r.a.createElement("div",null,e.description),r.a.createElement("div",null,e.due_at?y()(e.due_at).format("MMMM Do YYYY"):r.a.createElement("button",null,"Set Due Date")),r.a.createElement("div",null,e.completed_at?y()(e.completed_at).format("MMMM Do YYYY"):"-"))}))},O=function(e){var t=Object(n.useContext)(i).token,a=w("user",t),l=w("tasks",t);return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",null,"Welcome back, ",a.firstName,"!"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Your Tasks"),r.a.createElement(S,{tasks:l}))},j=function(){var e=Object(n.useContext)(i).token;return console.log(e?"Yes: "+e:"No: "+e),r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(s.b,{path:"/login",render:function(t){return e?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(g,t)}}),r.a.createElement(s.b,{path:"/register",render:function(e){return r.a.createElement(N,e)}}),r.a.createElement(s.b,{path:"/dashboard",render:function(t){return e?r.a.createElement(O,t):r.a.createElement(s.a,{to:"/login"})}})))};a(64),a(65);c.a.render(r.a.createElement(function(e){var t=e.children,a=localStorage.getItem("token")||!1;"false"===a&&(a=JSON.parse(a));var l=Object(n.useState)(a),c=Object(u.a)(l,2),o=c[0],s=c[1];Object(n.useEffect)(function(){localStorage.setItem("token",o)},[o]);var m={token:o,setToken:s};return r.a.createElement(i.Provider,{value:m},t)},null,r.a.createElement(j,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.18f5e2ec.chunk.js.map
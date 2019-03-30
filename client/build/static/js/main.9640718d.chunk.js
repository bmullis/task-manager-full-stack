(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(94)},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=a(4),u=a(12),s=a(3),i=r.a.createContext(),m=function(){var e=Object(n.useContext)(i),t=e.auth,a=e.setAuth;return t.authed?r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){a({authed:!1,token:""})}},"Sign Out"))))):r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/register"},"Register")))))},d=function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Welcome to TaskApp!"),r.a.createElement("h4",null,"Manage your todo list and get more things done"),r.a.createElement(o.b,{to:"/login",className:"btn btn-link"},"Get Started"))},p=a(2),E=a.n(p),h=a(10),f=a(11),b=a.n(f),v=function(e){var t=e.handleUserLogin;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(e.target.email.value,e.target.password.value)}(e)}},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Login"))},k=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useContext)(i).setAuth,m=function(){var t=Object(h.a)(E.a.mark(function t(a,n){var r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&n){t.next=4;break}return t.abrupt("return",l("Please enter an email and a password"));case 4:l("");case 5:return t.prev=5,t.next=8,b.a.post("/user/login",{email:a,password:n});case 8:r=t.sent,u({authed:!0,token:r.data.token}),e.history.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Login"),r.a.createElement(v,{handleUserLogin:m}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c),r.a.createElement("p",null,"Don't have an account yet? Sign up for one ",r.a.createElement(o.b,{to:"/register"},"here"),".")))},g=function(e){var t=e.handleUserRegistration;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({firstName:e.target.firstName.value,lastName:e.target.lastName.value,email:e.target.email.value,password:e.target.password.value})}(e)}},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name"}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name"}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Register"))},w=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(n.useContext)(i).setAuth,m=function(){var t=Object(h.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.firstName&&a.lastName&&a.email&&a.password){t.next=4;break}return t.abrupt("return",l("Please fill in all fields"));case 4:l("");case 5:return t.prev=5,t.next=8,b.a.post("/user",a);case 8:n=t.sent,u({authed:!0,token:n.data.token}),e.history.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Register"),r.a.createElement(g,{handleUserRegistration:m}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c),r.a.createElement("p",null,"Already have an account yet? Sign in ",r.a.createElement(o.b,{to:"/login"},"here"),".")))},x=a(25),y=a.n(x),O=a(15),N=a.n(O),j=a(26),S=a.n(j),C=(a(91),function(e){var t=e.task,a=Object(n.useContext)(i).auth,c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(n.useState)(N()(t.due_at).toDate()),d=Object(s.a)(m,2),p=d[0],f=d[1],v=function(){u(!o)},k=function(){var e=Object(h.a)(E.a.mark(function e(n){var r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.patch("/tasks/".concat(t._id),{due_at:n},{headers:{Authorization:"Bearer ".concat(a.token)}});case 3:r=e.sent,console.log(r),t.due_at=n,f(n),v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"task-list__item"},r.a.createElement("div",null,t.description),r.a.createElement("div",null,t.due_at?r.a.createElement("div",null,r.a.createElement("div",{onClick:v},N()(t.due_at).format("MMMM Do YYYY")),o&&r.a.createElement(S.a,{onDayClick:k,selectedDays:p,initialMonth:N()(t.due_at).toDate()})):r.a.createElement("div",null,r.a.createElement("button",{onClick:v},"Set Due Date"),o&&r.a.createElement(S.a,{onDayClick:k,selectedDays:p}))),r.a.createElement("div",null,t.completed_at?N()(t.completed_at).format("MMMM Do YYYY"):"-"))}),_=function(e){var t=e.tasks;return r.a.createElement("div",{className:"task-list"},r.a.createElement("div",{className:"task-list__header"},r.a.createElement("div",null,"Description"),r.a.createElement("div",null,"Due Date"),r.a.createElement("div",null,"Completed Date")),function(e){return e.length>0?e.map(function(e){return r.a.createElement(C,{key:e._id,task:e})}):r.a.createElement("div",{style:{padding:"2rem 0.75rem"}},r.a.createElement("h5",null,"You don't have any tasks yet. Create one to get started."))}(t))},D=function(e){e.prevTask;var t=e.createNewTask;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({description:e.target.description.value})}(e)}},r.a.createElement("input",{type:"text",name:"description",placeholder:"What do you need to get done?"}),r.a.createElement("button",{type:"submit"},"Create Task"))},A=function(e,t){var a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)(function(){!function(){var e=Object(h.a)(E.a.mark(function e(a){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:t}},e.next=3,b.a.get("/".concat(a),n);case 3:r=e.sent,l(r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e)},[e]),c};y.a.setAppElement("#root");var T=function(){var e=Object(n.useContext)(i).auth,t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],d=u[1],p=A("user",e.token),f=A("tasks",e.token),v=function(){var t=Object(h.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.description){t.next=4;break}return t.abrupt("return",l("Please describe this task"));case 4:l("");case 5:return t.prev=5,t.next=8,b.a.post("/tasks",a,{headers:{Authorization:"Bearer ".concat(e.token)}});case 8:n=t.sent,f.push(n.data),d(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e){return t.apply(this,arguments)}}(),k=function(){d(!1)};return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",null,"Welcome back, ",p.firstName,"!"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Your Tasks"),r.a.createElement(_,{tasks:f}),r.a.createElement("button",{onClick:function(){d(!0)}},"Add Task +"),r.a.createElement(y.a,{isOpen:m,onAfterOpen:function(){},onRequestClose:k,contentLabel:"Create a New Task"},r.a.createElement("button",{onClick:k},"X"),r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Create a New Task"),r.a.createElement(D,{createNewTask:v}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c))))},M=function(){var e=Object(n.useContext)(i).auth;return r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(u.b,{path:"/login",render:function(t){return e.authed?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(k,t)}}),r.a.createElement(u.b,{path:"/register",render:function(t){return e.authed?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(w,t)}}),r.a.createElement(u.b,{path:"/dashboard",render:function(t){return e.authed?r.a.createElement(T,t):r.a.createElement(u.a,{to:"/login"})}})))};a(92),a(93);l.a.render(r.a.createElement(function(e){var t=e.children,a=function(e){return null===e?"":e}(localStorage.getItem("authToken")),c={authed:""!==a,token:a},l=Object(n.useState)(c),o=Object(s.a)(l,2),u=o[0],m=o[1];Object(n.useEffect)(function(){localStorage.setItem("authToken",u.token)},[u]);var d={auth:u,setAuth:m};return r.a.createElement(i.Provider,{value:d},t)},null,r.a.createElement(M,null)),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9640718d.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(94)},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=a(3),s=a(13),u=a(1),i=r.a.createContext(),m=a(4),d=a.n(m),p=a(11),E=a(12),f=a.n(E),h=function(e,t){var a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],l=r[1];return Object(n.useEffect)(function(){!function(){var e=Object(p.a)(d.a.mark(function e(a){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:t}},e.next=3,f.a.get("/".concat(a),n);case 3:r=e.sent,l(r.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(e)},[e]),c},b=function(){var e=Object(n.useContext)(i),t=e.auth,a=e.setAuth,c=Object(n.useState)(!1),l=Object(u.a)(c,2),s=l[0],m=l[1],d=h("notifications",t.token);console.log(d);return r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){a({authed:!1,token:""})}},"Sign Out")),r.a.createElement("li",null,r.a.createElement("span",{"aria-label":"notification bell",role:"img",onClick:function(){m(!1===s)}},"\ud83d\udd14 ",d.length>0?r.a.createElement("span",{className:"alert-dot"}):""))),s&&0===d.length&&r.a.createElement("div",{className:"notifications-box"},r.a.createElement("div",{className:"notifications-box__carat"}),r.a.createElement("h4",null,"No Notifications")),s&&d.length>0&&r.a.createElement("div",{className:"notifications-box"},d.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"notifications-box__carat"}),r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.message))}))))},v=function(){return Object(n.useContext)(i).auth.authed?r.a.createElement(b,null):r.a.createElement("nav",null,r.a.createElement("div",{className:"container"},r.a.createElement(o.c,{to:"/"},r.a.createElement("h4",null,"TaskApp")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/register"},"Register")))))},k=function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Welcome to TaskApp!"),r.a.createElement("h4",null,"Manage your todo list and get more things done"),r.a.createElement(o.b,{to:"/login",className:"btn btn-link"},"Get Started"))},g=function(e){var t=e.handleUserLogin;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(e.target.email.value,e.target.password.value)}(e)}},r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Login"))},w=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(i).setAuth,m=function(){var t=Object(p.a)(d.a.mark(function t(a,n){var r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a&&n){t.next=4;break}return t.abrupt("return",l("Please enter an email and a password"));case 4:l("");case 5:return t.prev=5,t.next=8,f.a.post("/user/login",{email:a,password:n});case 8:r=t.sent,s({authed:!0,token:r.data.token}),e.history.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Login"),r.a.createElement(g,{handleUserLogin:m}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c),r.a.createElement("p",null,"Don't have an account yet? Sign up for one ",r.a.createElement(o.b,{to:"/register"},"here"),".")))},x=function(e){var t=e.handleUserRegistration;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({firstName:e.target.firstName.value,lastName:e.target.lastName.value,email:e.target.email.value,password:e.target.password.value})}(e)}},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name"}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name"}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Register"))},O=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(i).setAuth,m=function(){var t=Object(p.a)(d.a.mark(function t(a){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.firstName&&a.lastName&&a.email&&a.password){t.next=4;break}return t.abrupt("return",l("Please fill in all fields"));case 4:l("");case 5:return t.prev=5,t.next=8,f.a.post("/user",a);case 8:n=t.sent,s({authed:!0,token:n.data.token}),e.history.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Register"),r.a.createElement(x,{handleUserRegistration:m}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c),r.a.createElement("p",null,"Already have an account? Sign in ",r.a.createElement(o.b,{to:"/login"},"here"),".")))},N=a(25),j=a.n(N),y=a(9),_=a.n(y),D=a(26),C=a.n(D),S=(a(91),function(e){var t=e.task,a=Object(n.useContext)(i).auth,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],s=l[1],m=Object(n.useState)(_()(t.due_at).toDate()),E=Object(u.a)(m,2),h=E[0],b=E[1],v=function(){s(!o)},k=function(){var e=Object(p.a)(d.a.mark(function e(n){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n<new Date)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,f.a.patch("/tasks/".concat(t._id),{due_at:n},{headers:{Authorization:"Bearer ".concat(a.token)}});case 5:r=e.sent,console.log(r),t.due_at=n,b(n),v(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"task-list__item"},r.a.createElement("div",null,t.description),r.a.createElement("div",null,t.due_at?r.a.createElement("div",{className:_()(t.due_at).toDate()<new Date?"overdue":""},r.a.createElement("div",{onClick:v},r.a.createElement("span",null,_()(t.due_at).format("MMMM Do YYYY"))),o&&r.a.createElement(C.a,{onDayClick:k,selectedDays:h,initialMonth:_()(t.due_at).toDate(),disabledDays:{before:new Date}})):r.a.createElement("div",null,r.a.createElement("button",{onClick:v},"Set Due Date"),o&&r.a.createElement(C.a,{onDayClick:k,selectedDays:h,disabledDays:{before:new Date}}))),r.a.createElement("div",null,t.completed_at?_()(t.completed_at).format("MMMM Do YYYY"):"-"))}),A=function(e){var t=e.tasks,a=Object(n.useState)("due_at"),c=Object(u.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)("asc"),i=Object(u.a)(s,2),m=i[0],d=i[1],p=function(e,t,a){return"due_at"===t&&"asc"===a?e.sort(function(e,t){return _()(e.due_at).toDate()-_()(t.due_at).toDate()}):"due_at"===t&&"desc"===a?e.sort(function(e,t){return _()(t.due_at).toDate()-_()(e.due_at).toDate()}):"description"===t&&"asc"===a?e.sort(function(e,t){return e.description.localeCompare(t.description)}):"description"===t&&"desc"===a?e.sort(function(e,t){return t.description.localeCompare(e.description)}):void 0}(t,l,m),E=function(e){o(e),d("asc"===m?"desc":"asc")};return r.a.createElement("div",{className:"task-list"},r.a.createElement("div",{className:"task-list__header"},r.a.createElement("div",{onClick:function(){return E("description")}},"Description ",r.a.createElement("span",{role:"img"},"\u2195")),r.a.createElement("div",{onClick:function(){return E("due_at")}},"Due Date ",r.a.createElement("span",{role:"img"},"\u2195"),"\ufe0f"),r.a.createElement("div",null,"Completed Date")),function(e){return e.length>0?e.map(function(e){return r.a.createElement(S,{key:e._id,task:e})}):r.a.createElement("div",{style:{padding:"2rem 0.75rem"}},r.a.createElement("h5",null,"You don't have any tasks yet. Create one to get started."))}(p))},T=function(e){e.prevTask;var t=e.createNewTask;return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t({description:e.target.description.value})}(e)}},r.a.createElement("input",{type:"text",name:"description",placeholder:"What do you need to get done?"}),r.a.createElement("button",{type:"submit"},"Create Task"))};j.a.setAppElement("#root");var M=function(){var e=Object(n.useContext)(i).auth,t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),m=s[0],E=s[1],b=h("user",e.token),v=h("tasks",e.token),k=function(){var t=Object(p.a)(d.a.mark(function t(a){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.description){t.next=4;break}return t.abrupt("return",l("Please describe this task"));case 4:l("");case 5:return t.prev=5,t.next=8,f.a.post("/tasks",a,{headers:{Authorization:"Bearer ".concat(e.token)}});case 8:n=t.sent,v.push(n.data),E(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),l("Something went wrong, please try again");case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e){return t.apply(this,arguments)}}(),g=function(){E(!1)};return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h3",null,"Welcome back, ",b.firstName,"!"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Your Tasks"),r.a.createElement(A,{tasks:v}),r.a.createElement("button",{onClick:function(){E(!0)}},"Add Task +"),r.a.createElement(j.a,{isOpen:m,onAfterOpen:function(){},onRequestClose:g,contentLabel:"Create a New Task"},r.a.createElement("button",{onClick:g},"X"),r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Create a New Task"),r.a.createElement(T,{createNewTask:k}),c&&r.a.createElement("p",{className:"alert-box alert-box__red"},c))))},Y=function(){var e=Object(n.useContext)(i).auth;return r.a.createElement(o.a,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(s.b,{path:"/login",render:function(t){return e.authed?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(w,t)}}),r.a.createElement(s.b,{path:"/register",render:function(t){return e.authed?r.a.createElement(s.a,{to:"/dashboard"}):r.a.createElement(O,t)}}),r.a.createElement(s.b,{path:"/dashboard",render:function(t){return e.authed?r.a.createElement(M,t):r.a.createElement(s.a,{to:"/login"})}})))};a(92),a(93);l.a.render(r.a.createElement(function(e){var t=e.children,a=function(e){return null===e?"":e}(localStorage.getItem("authToken")),c={authed:""!==a,token:a},l=Object(n.useState)(c),o=Object(u.a)(l,2),s=o[0],m=o[1];Object(n.useEffect)(function(){localStorage.setItem("authToken",s.token)},[s]);var d={auth:s,setAuth:m};return r.a.createElement(i.Provider,{value:d},t)},null,r.a.createElement(Y,null)),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8ef70836.chunk.js.map
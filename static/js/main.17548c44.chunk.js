(this.webpackJsonplearning_react=this.webpackJsonplearning_react||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a.n(r),s=a(9),n=a.n(s),o=(a(22),a(23),a(7)),i=a(40),l=a(36),j=a(37),d=a(38),b=a(39),u=a(1),O=function(e){var t=e.modal,a=e.toggle,c=e.save,s=Object(r.useState)(""),n=Object(o.a)(s,2),O=n[0],m=n[1],p=Object(r.useState)(""),x=Object(o.a)(p,2),h=x[0],f=x[1],g=function(e){var t=e.target,a=t.name,r=t.value;"taskName"===a?m(r):f(r)};return Object(u.jsxs)(i.a,{isOpen:t,toggle:a,children:[Object(u.jsx)(l.a,{toggle:a,children:"Create Your Task"}),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Enter Task Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:O,onChange:g,name:"taskName"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Enter Description"}),Object(u.jsx)("textarea",{rows:"5",className:"form-control",value:h,onChange:g,name:"description"})]})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=O,t.Description=h,c(t)},children:"Create"}),Object(u.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},m=function(e){var t=e.modal,a=e.toggle,c=e.updateTask,s=e.taskObj,n=Object(r.useState)(""),O=Object(o.a)(n,2),m=O[0],p=O[1],x=Object(r.useState)(""),h=Object(o.a)(x,2),f=h[0],g=h[1],v=function(e){var t=e.target,a=t.name,r=t.value;"taskName"===a?p(r):g(r)};Object(r.useEffect)((function(){p(s.Name),g(s.Description)}),[]);return Object(u.jsxs)(i.a,{isOpen:t,toggle:a,children:[Object(u.jsx)(l.a,{toggle:a,children:"Update Task"}),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Task Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:m,onChange:v,name:"taskName"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{rows:"5",className:"form-control",value:f,onChange:v,name:"description"})]})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.a,{color:"primary",onClick:function(e){e.preventDefault();var t={};t.Name=m,t.Description=f,c(t)},children:"Update"}),Object(u.jsx)(b.a,{color:"secondary",onClick:a,children:"Cancel"})]})]})},p=function(e){var t=e.taskObj,a=e.index,c=e.deleteTask,s=e.updateListArray,n=Object(r.useState)(!1),i=Object(o.a)(n,2),l=i[0],j=i[1],d=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"}];return Object(u.jsxs)("div",{class:"card-wrapper col-md-5 col-12 mr-5 mb-4 ",children:[Object(u.jsx)("div",{class:"card-top",style:{"background-color":d[a%5].primaryColor}}),Object(u.jsxs)("div",{class:"task-holder",children:[Object(u.jsx)("span",{class:"card-header",style:{"background-color":d[a%5].secondaryColor,"border-radius":"10px",height:"5vh"},children:t.Name}),Object(u.jsx)("p",{className:"mt-3",children:t.Description}),Object(u.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(u.jsx)("i",{class:"far fa-edit mr-3",style:{color:d[a%5].primaryColor,cursor:"pointer"},onClick:function(){return j(!0)}}),Object(u.jsx)("i",{class:"fas fa-trash-alt",style:{color:d[a%5].primaryColor,cursor:"pointer"},onClick:function(){c(a)}})]})]}),Object(u.jsx)(m,{modal:l,toggle:function(){j(!l)},updateTask:function(e){s(e,a)},taskObj:t})]})},x=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),n=Object(o.a)(s,2),i=n[0],l=n[1];Object(r.useEffect)((function(){var e=localStorage.getItem("taskList");if(e){var t=JSON.parse(e);l(t)}}),[]);var j=function(e){var t=i;t.splice(e,1),localStorage.setItem("taskList",JSON.stringify(t)),l(t),window.location.reload()},d=function(e,t){var a=i;a[t]=e,localStorage.setItem("taskList",JSON.stringify(a)),l(a),window.location.reload()};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header text-center",children:[Object(u.jsx)("h3",{children:"To-Do List By Rahul"}),Object(u.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return c(!0)},children:"Create Your Task Now"})]}),Object(u.jsx)("div",{className:"task-container",children:i&&i.map((function(e,t){return Object(u.jsx)(p,{taskObj:e,index:t,deleteTask:j,updateListArray:d})}))}),Object(u.jsx)(O,{toggle:function(){c(!a)},modal:a,save:function(e){var t=i;t.push(e),localStorage.setItem("taskList",JSON.stringify(t)),c(!1),l(i)}})]})};a(34);var h=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(x,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),r(e),c(e),s(e),n(e)}))};n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.17548c44.chunk.js.map
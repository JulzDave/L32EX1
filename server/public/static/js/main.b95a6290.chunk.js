(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},18:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),s=(n(24),n(4)),o=n(5),u=n(7),i=n(6),h=n(8),m=(n(13),n(36)),p=n(34),d=n(35),b=n(10),E=n.n(b),v=n(11),f=n(12),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={password:"",name:"",age:"",course:"",img:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"ID",value:function(){var e=Math.random().toString(36).substr(2,9);this.state.password=e,document.getElementById("idd").value=e}},{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Insert\\Update new student to database"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:this.state.name,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"text",id:"idd",placeholder:"make a unique id",name:"password",value:this.state.password,onChange:this.handleChange.bind(this)}),r.a.createElement("button",{onClick:this.ID.bind(this)},"Generate"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"Enter age",name:"age",value:this.state.age,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter course id",name:"course",value:this.state.course,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Insert pic url",name:"img",value:this.state.img,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",onClick:this.fetcher.bind(this),value:"Submit"}))}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"fetcher",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/newstudent",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={courseid:"",name:"",age:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{method:"post",action:"\\viewcourse"},r.a.createElement("h4",null,"View a course from the database"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter course ID",name:"courseid",value:this.state.courseid,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"view"})))}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"fetcher",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/viewcourse",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={course_name:"",tutor:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Insert new course to database"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter course name",name:"course_name",value:this.state.course_name,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter tutor name",name:"tutor",value:this.state.tutor,onChange:this.handleChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",onClick:this.fetcher.bind(this),value:"Submit"}))}},{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"fetcher",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/newcourse",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"new"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"Welcome to this website!"),r.a.createElement("br",null))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={allstudents:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{to:"/newstudent"},"New Student"),r.a.createElement(p.a,{to:"/newcourse"},"New Course"),r.a.createElement(p.a,{to:"/viewcourse"},"View Course"),r.a.createElement(p.a,{className:"home",to:"/"},"\ud83c\udfe0"),r.a.createElement(d.a,{path:"/newstudent",component:w}),r.a.createElement(d.a,{path:"/newcourse",component:g}),r.a.createElement(d.a,{path:"/viewcourse",component:y}),r.a.createElement(d.a,{exact:!0,path:"/",component:j})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.b95a6290.chunk.js.map
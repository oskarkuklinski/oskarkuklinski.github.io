(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/oskarkuklinski-profile.1537a28b.jpg"},29:function(e,a,t){e.exports=t(48)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(24),c=t.n(s),i=(t(34),t(8)),r=t(9),o=t(11),m=t(10),u=t(12),d=t(6),E=(t(35),t(36),t(25)),h=t.n(E),p=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"About-container"},l.a.createElement("div",{className:"About-left"},l.a.createElement("h1",null,"about me"),l.a.createElement("h2",null,"My name is ",l.a.createElement("span",{className:"highlight"},this.props.data.name)," and I am ",l.a.createElement("span",{className:"highlight"},this.props.data.role)," currently based in ",l.a.createElement("span",{className:"highlight"},this.props.data.city))),l.a.createElement("div",{className:"About-right"},l.a.createElement("img",{src:h.a}),l.a.createElement("h3",null,"Recent graduate with an ambitious drive to gain experience in developing innovative and creative web and mobile solutions. When I'm not coding, you'll find me creating workout plans, planning backpacking adventures and learning new languages")))}}]),a}(l.a.Component),g=(t(37),t(7)),k=function(){return l.a.createElement("nav",{className:"Header"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.b,{exact:!0,className:"Header-link",activeClassName:"Header-active",to:"/"},"about")),l.a.createElement("li",null,l.a.createElement(g.b,{className:"Header-link",activeClassName:"Header-active",to:"/resume"},"resume")),l.a.createElement("li",null,l.a.createElement(g.b,{className:"Header-link",activeClassName:"Header-active",to:"/portfolio"},"portfolio"))))},b=(t(42),function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"Portfolio-left"},l.a.createElement("h1",null,"to be continued...")),l.a.createElement("div",{className:"Portfolio-right"}))}),v=t(17),N=(t(43),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={flag:!1,categoryPressed:""},t.handleClick=t.handleClick.bind(Object(v.a)(t)),t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"handleClick",value:function(e){console.log(e.target.id),0==this.state.flag?this.setState({categoryPressed:e.target.id,flag:!0}):this.setState({categoryPressed:"",flag:!1})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"Resume-left"},l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"personal-projects",className:""==this.state.categoryPressed||"personal-projects"==this.state.categoryPressed?"Resume-category":"hidden"},"Personal Projects"),l.a.createElement("section",{className:"personal-projects"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("h3",null,"Ordering System for Restaurants (04/2019 - Present)"),l.a.createElement("ul",null,l.a.createElement("li",null,"Designed wireframes for the application using a collaborative interface design tool (Figma)."),l.a.createElement("li",null,"Translated wireframes into the responsive and interactive application by using reusable React Native components and CSS styles."),l.a.createElement("li",null,"Managed data requests and handled responses from the RESTful API."),l.a.createElement("li",null,"Hands-on experience in state management with Redux and Redux-thunk middleware."),l.a.createElement("li",null,"Tested and veri\ufb01ed the application's behaviour in real-time using Expo platform."),l.a.createElement("li",null,"Used ES6 features such as classes, spread operators, arrow functions."),l.a.createElement("li",null,"Experienced in using GitHub for source code management and version control."),l.a.createElement("li",null,"Used Node Package Manager (NPM) to manage modules.")))),l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"experience",className:""==this.state.categoryPressed||"experience"==this.state.categoryPressed?"Resume-category":"hidden"},"Experience"),l.a.createElement("section",{className:"experience"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("h3",null,"Buddy Trainer"),l.a.createElement("p",null,"Nando's"),l.a.createElement("span",null,"09/2015 - 09/2019"),l.a.createElement("span",null,"Edinburgh, United Kingdom"),l.a.createElement("span",null,"Achievements/Tasks"),l.a.createElement("ul",null,l.a.createElement("li",null,"Supporting new staff members, checking on their development and organizing tasks during the shif"),l.a.createElement("li",null,"Completing administrative papers"),l.a.createElement("li",null,"Training safety and risk assessments, giving feedback with techniques learnt on the Buddy Trainer course"),l.a.createElement("li",null,"Ensuring customer satisfaction and handling complaint"),l.a.createElement("li",null,"Handling cash and card transactions")),l.a.createElement("p",null,"Contact: ",l.a.createElement("span",null,"Nando's Chambers Street, EH1 1JB")))),l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"education",className:""==this.state.categoryPressed||"education"==this.state.categoryPressed?"Resume-category":"hidden"},"Education"),l.a.createElement("section",{className:"education"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("h3",null,"Computing and IT"),l.a.createElement("p",null,"The Open University"),l.a.createElement("span",null,"09/2016 - 09/2019"),l.a.createElement("span",null,"United Kingdom"),l.a.createElement("span",null,"Courses"),l.a.createElement("ul",null,l.a.createElement("li",null,"Interaction Design and User Experience"),l.a.createElement("li",null,"Web and Cloud Technologies"),l.a.createElement("li",null,"Software Engineering"))))),l.a.createElement("div",{className:"Resume-right"},l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"skills",className:""==this.state.categoryPressed||"skills"==this.state.categoryPressed?"Resume-category":"hidden"},"Skills"),l.a.createElement("section",{className:"skills"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"JavaScript")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"CSS")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"HTML")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"React.js")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"React Native")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"Redux")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"Responsive Design")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"Node.js")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"Git")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"User Interface")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"Expo")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"ES6")),l.a.createElement("div",{className:"skill-box"},l.a.createElement("span",null,"SASS")))),l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"certificates",className:""==this.state.categoryPressed||"certificates"==this.state.categoryPressed?"Resume-category":"hidden"},"Certificates"),l.a.createElement("section",{className:"certificates"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("h3",null,"Udemy React JS Web Development - The Essentials Bootcamp (11/2018 \u2013 01/2019)"),l.a.createElement("span",null,"Learned core React.js concepts such as component lifecycles, props, states, JSX, and composition in the React apps."),l.a.createElement("h3",null,"Treehouse Full Stack JavaScript Course (03/2017 \u2013 05/2017)"),l.a.createElement("span",null,"Learned JavaScript concepts including ES6 features, AJAX, Node.js (Express) and MongoDB basics, NPM, building REST API."))),l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"languages",className:""==this.state.categoryPressed||"languages"==this.state.categoryPressed?"Resume-category":"hidden"},"Languages"),l.a.createElement("section",{className:"languages"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("div",{className:"language-box"},l.a.createElement("span",null,"Polish (native)"),l.a.createElement("span",null,"Native or Bilingual Proficiency")),l.a.createElement("div",{className:"language-box"},l.a.createElement("span",null,"English"),l.a.createElement("span",null,"Full Professional Proficiency")),l.a.createElement("div",{className:"language-box"},l.a.createElement("span",null,"Spanish"),l.a.createElement("span",null,"Elementary Proficiency")))),l.a.createElement("div",{className:"Resume-button"},l.a.createElement("a",{onClick:this.handleClick,id:"interests",className:""==this.state.categoryPressed||"interests"==this.state.categoryPressed?"Resume-category":"hidden"},"Interests"),l.a.createElement("section",{className:"interests"!==this.state.categoryPressed?"hidden":"Resume-content"},l.a.createElement("div",{className:"interest-box"},l.a.createElement("span",null,"Bodybuilding (creating workout and diet plans)")),l.a.createElement("div",{className:"interest-box"},l.a.createElement("span",null,"Traveling (backpacking, immersing in new cultures)")),l.a.createElement("div",{className:"interest-box"},l.a.createElement("span",null,"Languages (nailing Duolingo levels)")),l.a.createElement("div",{className:"interest-box"},l.a.createElement("span",null,"Drinking Tea"))))))}}]),a}(l.a.Component)),f=(t(44),t(14)),y=t(16),x=t(28),P=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",null,"drop me a message"),l.a.createElement("div",null,l.a.createElement(f.a,{className:"Footer-icon",icon:x.a}),l.a.createElement("a",{href:"https://www.linkedin.com/in/oskar-kuklinski-a63019171/",target:"_blank"},l.a.createElement(f.a,{className:"Footer-icon",icon:y.d})),l.a.createElement("a",{href:"https://github.com/oskarkuklinski",target:"_blank"},l.a.createElement(f.a,{className:"Footer-icon",icon:y.c})),l.a.createElement("a",{href:"https://www.facebook.com/oskar.kuklinski",target:"_blank"},l.a.createElement(f.a,{className:"Footer-icon",icon:y.b})),l.a.createElement("a",{href:"https://codepen.io/osioo",target:"_blank"},l.a.createElement(f.a,{className:"Footer-icon",icon:y.a}))),l.a.createElement("p",null,"@2019 Oskar Kuklinski"))},R={name:"Oskar Kuklinski",role:"FrontEnd Developer",city:"Edinburgh"},C=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return l.a.createElement(p,Object.assign({},e,{data:R}))}}),l.a.createElement(d.a,{path:"/resume/",exact:!0,component:N}),l.a.createElement(d.a,{path:"/portfolio/",exact:!0,component:b})),l.a.createElement(P,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.bd54c984.chunk.js.map
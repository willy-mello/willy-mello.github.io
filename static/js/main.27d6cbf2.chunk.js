(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(9),r=t.n(s),c=(t(17),t(1)),i=t(2),o=t(4),m=t(3),d=t(5),u=t(7),p=t(10),h=t.n(p),E=(t(20),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,s=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,"I'm a ",n," based ",l.a.createElement("span",null,a)," ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},s))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2017 Willy Mello"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=(this.props.data.address.street,this.props.data.address.city),s=this.props.data.address.state,r=this.props.data.address.zip,c=this.props.data.phone,i=this.props.data.email;this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Tim Baker Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n," ",s,", ",r),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,i))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:"/profilepic.jpg",className:"button",download:"resume.jpg"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}),n=this.props.data.skills.map(function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))});return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))))}}]),a}(n.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.address.street,this.props.data.address.city),t=this.props.data.address.state,n=this.props.data.address.zip,s=this.props.data.phone,r=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},r))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a,", ",t," ",n,l.a.createElement("br",null),l.a.createElement("span",null,s))))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))});return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),N=(n.Component,{main:{name:"Willy Mello",occupation:"Software Engineer",description:" I am incredibly interested in building apps with social and recreational utility. I have experience working with React, React-Native, Node.js, Express, Sequelize, PostgreSQL and Firebase.",image:"profilepic.jpg",bio:"I am a graduate of Fullstack Acacemy in NYC; former enthusiastic educator with a combined 6 years of teaching, coaching, and mentorship experience at a public school in Montana and independent school in New Jersey. I love fishing, snowboarding, sailing, and bouldering",contactmessage:"In Development",email:"cwmello165@gmail.com",phone:"508-207-6386",address:{street:"",city:"Weehawken",state:"NJ",zip:""},website:"https://willy-mello.github.io/react-portfolio",resumedownload:"https://willy-mello.github.io",social:[{name:"facebook",url:"https://www.facebook.com/willy.mello",className:"fa fa-facebook"},{name:"stackoverflow",url:"https://stackoverflow.com/users/10946155/charles-mello",className:"fa fa-stack-overflow"},{name:"google-plus",url:"http://googleplus.com/cwmello165",className:"fa fa-google-plus"},{name:"linkedin",url:"https://www.linkedin.com/in/cwmello3",className:"fa fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/chilliamello3/",className:"fa fa-instagram"},{name:"github",url:"http://github.com/willy-mello",className:"fa fa-github"}]},resume:{skillmessage:"",education:[{school:"Full Stack Academy",degree:"1810 Immersive NERD Stack",graduated:"February 2019",description:"#1 ranked coding bootcamp in the USA, emphasizing pair programming, test driven development and the ability to learn whole language libraries within 3 months."},{school:"Duke University",degree:"BA US/ Canadian History",graduated:"May 2011",description:"4 year varsity wrestler, local middleschool tutor, weekend fisherman"}],work:[{company:"Blair Academy",title:"Teacher, Coach and Housemaster ",years:"May 2015 - June 2018",description:"Taught AP US History and Global Issues. Integrated primary source analysis, effective class discussions and  project-based learning into course syllabi. Served as live-in housemaster of West Hall for 26 students. Led practices, managed travel, and coached team resulting in a #1 high school wrestling program ranking in the USA."},{company:"Utterback Middle School",title:"Teacher and 3 Sport Coach",years:"March 2012 - May 2015",description:"Taught 6th, 7th, and 8th grade students English and History. Coached high school and middle school wrestling, track and football."}],skills:[{name:"Git",level:"75%"},{name:"Redux",level:"65%"},{name:"ReactJs",level:"75%"},{name:"CSS",level:"75%"},{name:"HTML5",level:"80%"},{name:"Sequelize",level:"80%"},{name:"PostgreSQL",level:"80%"},{name:"JavaScript",level:"85%"}]},portfolio:{projects:[{title:"Zero-Patients",category:"A clone of the popular board game pandemic",image:"canadian-wanderlust.jpg",url:"pandemic-clone@firebaseapp.com"}]},testimonials:{testimonials:[{text:"He's definitely related to me.",user:"USAF Captain Robert Mello"},{text:"That was graceful",user:"Fellow climber who saw me fall that one time"}]}}),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.setState({resumeData:N})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.resume}),l.a.createElement(b,{data:this.state.resumeData.testimonials}),l.a.createElement(w,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-portfolio","/service-worker.js");k?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.27d6cbf2.chunk.js.map
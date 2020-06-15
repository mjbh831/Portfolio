(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/MarcosHinojosResume.b247fdca.pdf"},,function(e,a,t){},,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(4),r=t.n(i),c=(t(13),t(5)),s=t(6),l=(t(14),t(7));t(15);function u(e){var a=e.title,t=e.info,n=e.backgroundText,i=e.backgroundColor,r=e.projectPic;return o.a.createElement("div",{className:r,style:{backgroundColor:i}},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"title"},a),o.a.createElement("div",{className:"divider"}),o.a.createElement("div",{className:"text-container"},o.a.createElement("div",{className:"background-text"},n),o.a.createElement("div",{className:"text"},t))))}var m=function(){var e=Object(n.useState)("bg bg1"),a=Object(l.a)(e,2),t=a[0],i=a[1];window.addEventListener("scroll",(function(e){window.scrollY>=window.innerHeight?i("bg fixed bg1"):i("bg bg1")}));var r={title:"About Me",info:"I'm a self-taught Web Developer born and raised in Dallas. After graduating from culinary school and spending a few years in the restaurant industry, I found my true passion for coding. Using Udemy, YouTube, and Harvard's CS50 online course, I've spent over 1000 hours studying computer science and web development. I now create user-friendly applications while striving to write readable and scalable code. I love to have fun and don't take myself too seriously. My years of being in the service industry have made me a strong communicator, hard-worker, and team player. I am also a huge believer in life-long learning and look forward to continuing to grow as a developer.",backgroundText:"About Me",backgroundColor:"#5cf4ff",projectPic:t};return o.a.createElement(u,{title:r.title,info:r.info,backgroundText:r.backgroundText,backgroundColor:r.backgroundColor,projectPic:r.projectPic})},d=(t(3),t(1)),b=t.n(d);function f(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"menu"},o.a.createElement("p",{className:"initials"},"mh."),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){window.open("https://www.linkedin.com/in/marcos-hinojos-8118251a7/","_blank")},className:"nav raise icons"},o.a.createElement("i",{className:"fab fa-linkedin"}))),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){window.open("https://github.com/mjbh831","_blank")},className:"nav raise icons"},o.a.createElement("i",{className:"fab fa-github"}))),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){window.open(b.a,"_blank")},className:"nav raise icons"},o.a.createElement("i",{className:"fab fas fa-file-alt"}))))),o.a.createElement("div",{className:"main"},o.a.createElement("p",{className:"welcome"},"Hi! I'm ",o.a.createElement("span",{id:"name"},"Marcos Hinojos")),o.a.createElement("h1",{className:"title-name"},"Front-End ",o.a.createElement("br",null)," Web Developer"))))}function h(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"container contact"},o.a.createElement("div",{className:"last-page"},o.a.createElement("p",{className:"thanks"},"Thanks for visiting my page!"),o.a.createElement("p",{className:"thanks"},"I would love to hear from you."),o.a.createElement("h1",{className:"footnote"},"contact me"),o.a.createElement("button",{onClick:function(){window.open("tel:512-934-1814")},className:"nav raise main-button mb-icon"},o.a.createElement("i",{className:"fas fa-phone"})),o.a.createElement("button",{onClick:function(){window.open("mailto:mjbh831@gmail.com")},className:"nav raise main-button mb-icon"},o.a.createElement("i",{className:"far fa-envelope"})),o.a.createElement("button",{onClick:function(){window.open("https://www.linkedin.com/in/marcos-hinojos-8118251a7/","_blank")},className:"nav raise nav raise main-button mb-icon"},o.a.createElement("i",{className:"fab fa-linkedin"})),o.a.createElement("button",{onClick:function(){window.open("https://github.com/mjbh831","_blank")},className:"nav raise main-button mb-icon"},o.a.createElement("i",{className:"fab fa-github-square"})),o.a.createElement("button",{onClick:function(){window.open(b.a,"_blank")},className:"nav raise main-button mb-icon"},o.a.createElement("i",{className:"fab fas fa-file-alt"})))),o.a.createElement("div",{class:"contact-info"},o.a.createElement("p",null,"Marcos Hinojos - (512)-934-1814 - mjbh831@gmail.com")))}var g=function(){function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(c.a)(this,e),this.title=a.title,this.info=a.info,this.backgroundText=a.backgroundText,this.backgroundColor=a.backgroundColor,this.projectPic=a.projectPic}return Object(s.a)(e,[{key:"NewPage",value:function(){return o.a.createElement(u,{title:this.title,info:this.info,backgroundText:this.backgroundText,backgroundColor:this.backgroundColor,projectPic:this.projectPic})}}]),e}(),p=new g({title:"EarthxHack State Farm Sponser Challenge",info:"State Farm challenged hackathon entrants to come up with a way to better serve their customer base during times of emergency like the COVID-19 pandemic. I built a feature on top of their existing app that allows users to enroll in community challenges and earn points that can be used toward policy discounts. One example is a challenge that encouraged users to upload an image of themselves wearing their homemade mask. This image was then validated by the Clarifai image recognition API which I trained to identify facemask. My submission won 2nd place.",backgroundText:"State Farm",backgroundColor:"#ffffff",projectPic:"bg fixed bg2"}),w=new g({title:"Stump the Chump Number Game",info:"A React Native application that utilizes React hooks such as useState, useRef, and useEffect to create reusable components for gameplay. Developed using Android Studio and Expo, this game allows the user to select a number for the computer to guess while giving clues along the way and trying to stump the computer for 10 or more guesses.",backgroundText:"Stump \n the Chump",backgroundColor:"#4D8CD0",projectPic:"bg fixed bg3"}),k=new g({title:"Face Recognition App",info:"A React app that identifies the face in an image. This app allows a registered user to upload an image, detect the face in the image, and update the number of images each user has submitted. The server was created using Node.js and Express. Used Postman to quickly check GET and POST requests. I also utilized Postgres, Knex.js, and bcrypt to securely save user information to the database.",backgroundText:"Face \n Recognition \n App",backgroundColor:"#D83711",projectPic:"bg fixed bg4"}),v=new g({title:"RoboFriends",info:"A searchable directory for all your robofriends! This app was built using React and Redux and connects with the JSONPlaceholder API to populate the directory, then it creates a unique robot avatar for each person by using the robohash API. Insert your JSON formatted contact list to see your all your friend's unique robots in this cool directory.",backgroundText:"Robo- \n friends",backgroundColor:"#4FFFA8",projectPic:"bg fixed bg5"}),E=new g({title:"Interactive Post-It",info:"Built using JavaScript and Flexbox, now your favorite sticky note is right on your screen. Each list item is rotated, spaced, or sized just a bit different to make items appear handwritten and keep from appearing too perfect. Features such as quick-add and quick-clear enhance the user experience.",backgroundText:"Interactive \n Post-It",backgroundColor:"#FFBF42",projectPic:"bg fixed bg6"}),N=new g({title:"Four Door Tour \n Travel Blog",info:"Multi-page responsive travel blog created using Bootstrap 4, CSS Grid, and Adobe Photoshop. This project was made super easy with the help of Bootstrap and its helpful documentation. One of these days I am taking a cross country road trip and then I'll update the lorem ipsum.",backgroundText:"Four \n Door \n Tour",backgroundColor:"#69A6FF",projectPic:"bg fixed bg7"});var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(m,null),p.NewPage(),w.NewPage(),k.NewPage(),v.NewPage(),E.NewPage(),N.NewPage(),o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.656149df.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(9),s=a.n(c),l=(a(16),a(6)),i=a(1),p=a(2),u=a(4),h=a(3),m=a(5),d=(a(8),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:a.props.ele.category,index:a.props.i,correct_answer:a.props.ele.correct_answer,question:a.props.ele.question,incorrect_answers:a.props.ele.incorrect_answers,collect:[a.props.ele.incorrect_answers[0],a.props.ele.incorrect_answers[1],a.props.ele.incorrect_answers[2],a.props.ele.correct_answer],Level:a.props.ele.difficulty},a.changeHandler=function(){a.props.the_question(a.state.question,a.state.collect,a.correct_answer,a.state.Level,a.state.index)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"box1",onClick:this.changeHandler},this.state.index+1)}}]),t}(r.Component)),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:a.props.ele.category,index:a.props.i,correct_answer:a.props.ele.correct_answer,question:a.props.ele.question,incorrect_answers:a.props.ele.incorrect_answers,collect:[a.props.ele.incorrect_answers[0],a.props.ele.incorrect_answers[1],a.props.ele.incorrect_answers[2],a.props.ele.correct_answer],Level:a.props.ele.difficulty},a.changeHandler=function(){a.props.the_question(a.state.question,a.state.collect,a.correct_answer,a.state.Level)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"box2",onClick:this.changeHandler},this.state.index+1)}}]),t}(r.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:a.props.ele.category,index:a.props.i,correct_answer:a.props.ele.correct_answer,question:a.props.ele.question,incorrect_answers:a.props.ele.incorrect_answers,collect:[a.props.ele.incorrect_answers[0],a.props.ele.incorrect_answers[1],a.props.ele.incorrect_answers[2],a.props.ele.correct_answer],Level:a.props.ele.difficulty},a.changeHandler=function(){a.props.the_question(a.state.question,a.state.collect,a.correct_answer,a.state.Level)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"box3",onClick:this.changeHandler},this.state.index+1)}}]),t}(r.Component),v=0,g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={General_Knowleg:["https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple"],Mathematics:["https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple"],History:["https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple"],Geography:["https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple"],Films:["https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple"],Animal:["https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple"],Sport:["https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"],Computer:["https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple","https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple","https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple"],server:[],server2:[],server3:[],the_question:"the_question",Options:["Options","Options","Options","Options"],correctAnswer:"",url:a.props.url,NameOftype:[],Level:"",flash:""},a.checkState=function(e){var t=Object(l.a)({},a.state);a.setState(t)},a.theQuestion=function(e,t,n,r,o){var c=Object(l.a)({},a.state);c.the_question=e,c.Options=t,c.correctAnswer=n,c.correctAnswer=t[3],c.Level=r,c.server.splice(o,1),a.setState(c)},a.changeHandler=function(e){console.log(),a.props.changeMainPage()},a.checkWin=function(e){var t=e.target.textContent.split("-");if(v>3&&(v=0),t[1]===a.state.correctAnswer){alert("yaaaaas corect inswer "+v);var n=Object(l.a)({},a.state);n.flash="blink",a.setState(n),"easy"==a.state.Level&&a.props.IncreaseScoor(v,5),"medium"==a.state.Level&&a.props.IncreaseScoor(v,7),"hard"==a.state.Level&&a.props.IncreaseScoor(v,9),v++,a.props.switchPlayer(v)}else v++,alert("noooo noooo nooo "+v),a.props.switchPlayer(v)},a.shuffle=function(e){for(var t,a,n=e.length;n;t=parseInt(Math.random()*n),a=e[--n],e[n]=e[t],e[t]=a);return e},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state["".concat(this.state.url)][0]).then(function(e){return e.json()}).then(function(t){return e.setState(function(e){return{server:t.results}})}),fetch(this.state["".concat(this.state.url)][1]).then(function(e){return e.json()}).then(function(t){return e.setState(function(e){return{server2:t.results}})}),fetch(this.state["".concat(this.state.url)][2]).then(function(e){return e.json()}).then(function(t){return e.setState(function(e){return{server3:t.results}})})}},{key:"render",value:function(){var e=this;console.log(this.state.Level);var t=this.state.server.map(function(t,a){return o.a.createElement(d,{ele:t,i:a,the_question:e.theQuestion})}),a=this.state.server2.map(function(t,a){return o.a.createElement(y,{ele:t,i:a,the_question:e.theQuestion})}),n=this.state.server3.map(function(t,a){return o.a.createElement(f,{ele:t,i:a,the_question:e.theQuestion})});return o.a.createElement("div",null,o.a.createElement("div",{onClick:this.changeHandler,className:"main_top"}),o.a.createElement("div",{className:"qc_Part"},o.a.createElement("div",{className:"question"},o.a.createElement("h2",null,this.state.the_question)),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h4",{className:this.state.flash,onClick:this.checkWin},"1-",this.state.Options[0]),o.a.createElement("h4",{className:this.state.flash,onClick:this.checkWin},"2-",this.state.Options[1])),o.a.createElement("div",null,o.a.createElement("h4",{className:this.state.flash,onClick:this.checkWin},"3-",this.state.Options[2]),o.a.createElement("h4",{className:this.state.flash,onClick:this.checkWin},"4-",this.state.Options[3])))),o.a.createElement("section",{className:"qc"},o.a.createElement("div",null,t),o.a.createElement("div",null,a),o.a.createElement("div",null,n)))}}]),t}(r.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={},a.changeHandler=function(e){n=e.target.textContent,a.props.changeMainPage(n)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("section",{className:"boxs"},o.a.createElement("div",null,o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"General_Knowleg")," ",o.a.createElement("div",{className:"GeneralKnowleg mm"}," ")),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Mathematics")," ",o.a.createElement("div",{className:"Mathematics mm",onClick:this.changeHandler})),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"History")," ",o.a.createElement("div",{className:"History mm",onClick:this.changeHandler})),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Geography")," ",o.a.createElement("div",{className:"Geography mm",onClick:this.changeHandler}))),o.a.createElement("div",null,o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Films"),"  ",o.a.createElement("div",{className:"Films mm"})),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Animal")," ",o.a.createElement("div",{className:"Animal mm"})),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Sport"),"  ",o.a.createElement("div",{className:"Sport mm"})),o.a.createElement("div",{onClick:this.changeHandler},o.a.createElement("p",null,"Computer"),"  ",o.a.createElement("div",{className:"Computer mm"})))))}}]),t}(r.Component),E=(r.Component,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={mainPage:!1,qcPage:!1,ChangThePage:0,url:"",switchPlayer:0,scoor:[0,0,0,0],aroow1:"aroow",aroow2:"",aroow3:"",aroow4:""},a.changeMainPageHandle=function(e){var t=Object(l.a)({},a.state);t.mainPage=!t.mainPage,t.url=e,a.setState(t)},a.switchPlayer=function(e){console.log(e);var t=Object(l.a)({},a.state);t.switchPlayer=e,a.setState(t),a.aroow(e)},a.IncreaseScoor=function(e,t){var n=Object(l.a)({},a.state);n.scoor[e]+=t,a.setState(n)},a.aroow=function(e){var t=Object(l.a)({},a.state);1==e?(t.aroow1="",t.aroow2="aroow",t.aroow3="",t.aroow4=""):2==e?(t.aroow1="",t.aroow2="",t.aroow3="aroow",t.aroow4=""):3==e?(t.aroow1="",t.aroow2="",t.aroow3="",t.aroow4="aroow"):4==e&&(t.aroow1="aroow",t.aroow2="",t.aroow3="",t.aroow4=""),a.setState(t)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=o.a.createElement(w,{qcPage:this.state.qcPage,mainPage:this.state.mainPage,changeMainPage:this.changeMainPageHandle,url:this.TheUrl}),t=e;return t=this.state.mainPage?o.a.createElement(g,{qcPage:this.state.qcPage,mainPage:this.state.mainPage,changeMainPage:this.changeMainPageHandle,url:this.state.url,switchPlayer:this.switchPlayer,IncreaseScoor:this.IncreaseScoor,aroow:this.aroow}):e,o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("div",{className:"hedder1"},o.a.createElement("div",null,o.a.createElement("h4",null,"one: ")," ",o.a.createElement("h4",null,this.state.scoor[0])),o.a.createElement("div",null,o.a.createElement("h4",null,"two: ")," ",o.a.createElement("h4",null,this.state.scoor[1])),o.a.createElement("div",null,o.a.createElement("h4",null,"three: ")," ",o.a.createElement("h4",null,this.state.scoor[2])),o.a.createElement("div",null,o.a.createElement("h4",null,"four: ")," ",o.a.createElement("h4",null,this.state.scoor[3])))),o.a.createElement("header",null,o.a.createElement("div",{className:"hedder2"},o.a.createElement("div",{className:this.state.aroow1}),o.a.createElement("div",{className:this.state.aroow2}," "),o.a.createElement("div",{className:this.state.aroow3}),o.a.createElement("div",{className:this.state.aroow4}," "))),o.a.createElement("div",null,o.a.createElement("h1",null,"Main Page ")),t)}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.18110198.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,a,t){"use strict";t.r(a),function(e){var l=t(2),n=t.n(l),c=t(3),r=t(8),s=t(0),m=t.n(s),i=t(4),o=t(9),u=t(5),d=t(17),p=t(91),E=t(28),f=t(81),v=t.n(f),N=m.a.memo(function(a){var t=Object(s.useState)(""),l=Object(r.a)(t,2),o=l[0],u=l[1],f=function(e){u(e.target.value)},N=Object(s.useState)(""),b=Object(r.a)(N,2),h=b[0],g=b[1],k=function(e){g(e.target.value)},y=Object(s.useState)(""),j=Object(r.a)(y,2),O=j[0],w=j[1],x=function(e){w(e.target.value)},C=Object(s.useState)(""),S=Object(r.a)(C,2),V=S[0],_=S[1],D=a.app,F=D.lang,I=(D.city,a.user.authenticated),K=Object(s.useState)(new Date),A=Object(r.a)(K,2),B=A[0],J=A[1],M=Object(s.useState)(void 0),T=Object(r.a)(M,2),U=T[0],W=T[1],G=Object(s.useState)([]),P=Object(r.a)(G,2),R=P[0],q=P[1],Y=new Date,z=Object(s.useState)([]),H=Object(r.a)(z,2),L=H[0],Q=H[1],X=Object(s.useState)(0),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],ae=Object(s.useState)(void 0),te=Object(r.a)(ae,2),le=te[0],ne=te[1],ce=[new Date,new Date(Y.setDate(Y.getDate()+1)),new Date(Y.setDate(Y.getDate()+1)),new Date(Y.setDate(Y.getDate()+1)),new Date(Y.setDate(Y.getDate()+1))],re=Object(s.useState)({}),se=Object(r.a)(re,2),me=se[0],ie=se[1],oe=Object(s.useState)({}),ue=Object(r.a)(oe,2),de=ue[0],pe=ue[1],Ee=function(){var e=Object(c.a)(n.a.mark(function e(a,t){var l,c,r,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(ne(t),c=-1,(l=L).find(function(e,t){JSON.stringify(e)===JSON.stringify(a)&&(c=t)}),-1===c?l.push(a):l.splice(c,1),r=0,s=0;s<l.length;s++)r+=parseInt(l[s].priceSelect);ee(r),Q(l);case 9:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}();Object(s.useEffect)(Object(c.a)(n.a.mark(function e(){var t,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getOther)({name:"\u041a\u0438\u043d\u043e\u041f\u043e\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044e",data:{name:a.location.pathname.split("/")[2]}});case 2:return void 0==(t=e.sent)&&(a.history.push("/"),window.location.reload()),e.next=6,pe(t);case 6:if(!I){e.next=13;break}return e.next=9,Object(i.getSecure)({name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"});case 9:l=e.sent,g(l.email),u(l.name+" "+l.surname),w(l.phonenumber);case 13:case"end":return e.stop()}},e,this)})),[]),document.title=de.name,Object(s.useEffect)(Object(c.a)(n.a.mark(function e(){var a,t,l,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===de.name){e.next=16;break}if(void 0===U.cinema){e.next=13;break}for(a=me,t=Object.keys(a),l=0;l<t.length;l++)a[t[l]]=!1;return a[U.cinema]=!0,ie(a),e.next=9,Object(i.getOther)({name:"\u0421\u0435\u0430\u043d\u0441\u041f\u043e\u0414\u0430\u0442\u0435",data:{movie:de._id,cinema:U.cinema,realDate:U.date}});case 9:c=e.sent,ne(c),e.next=14;break;case 13:ne(void 0);case 14:Q([]),ee(0);case 16:case"end":return e.stop()}},e,this)})),[U]),Object(s.useEffect)(Object(c.a)(n.a.mark(function e(){var a,t,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===de.name){e.next=9;break}return e.next=3,Object(i.getOther)({name:"\u041a\u0438\u043d\u043e\u041f\u043e\u0414\u0430\u0442\u0435",data:{movie:de._id,realDate:B}});case 3:for(a=e.sent,q(a),t={},l=0;l<a.length;l++)t[a[l].name]=!1;ie(t),W({});case 9:case"end":return e.stop()}},e,this)})),[B]);var fe=function(){var e=Object(c.a)(n.a.mark(function e(){var t,l,c,r,s,m,u,p;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],l=le,c=0;c<l.seats.length;c++)for(r=0;r<l.seats[c].length;r++)"hold"===l.seats[c][r].status&&(l.seats[c][r].status="sold");for(s=U.date.split("T")[0].split("-"),m=U.date.split("T")[1].split(":"),u=s[2]+" "+d.a[s[1]]+" "+s[0]+", "+m[0]+":"+m[1],p=0;p<L.length;p++)L[p].date=u,t[p]=L[p];return e.next=9,Object(i.getSecure)({name:"\u041a\u0443\u043f\u0438\u0442\u044c\u041a\u0438\u043d\u043e",data:{image:de.image,event:l,movie:de.name,cinema:l.cinema.split("|")[0],hall:l.cinema.split("|")[1],fullPrice:$,seats:t,wallet:V,service:Fe,name:o,email:h,phone:O}});case 9:if("Balance.kg"!==Fe){e.next=13;break}window.location=je,e.next=18;break;case 13:if("Visa/Maestro"===Fe){e.next=18;break}return e.next=16,a.history.push("/");case 16:return e.next=18,window.location.reload();case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ve=Object(s.useState)(!1),Ne=Object(r.a)(ve,2),be=Ne[0],he=Ne[1],ge=function(){var e=Object(c.a)(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=be){e.next=5;break}return e.next=3,Object(i.getOther)({name:"\u041a\u043e\u0434\u041f\u043b\u0430\u0442\u0435\u0436\u0430"});case 3:a=e.sent,_(a);case 5:Ie(""),Oe(""),he(!be);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ke=Object(s.useState)(""),ye=Object(r.a)(ke,2),je=ye[0],Oe=ye[1],we=Object(s.useState)(""),xe=Object(r.a)(we,2),Ce=xe[0],Se=xe[1],Ve=function(){var a=Object(c.a)(n.a.mark(function a(){var t;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t="170000097"+V+$+"https://kassir.kg/payment/visa/payhttps://kassir.kg/payment/testedAuthdaseronSKEY0097",t=v()(t),t=(t=new e(t,"hex")).toString("base64"),Se(t);case 5:case"end":return a.stop()}},a,this)}));return function(){return a.apply(this,arguments)}}(),_e=Object(s.useState)(""),De=Object(r.a)(_e,2),Fe=De[0],Ie=De[1],Ke=function(){var e=Object(c.a)(n.a.mark(function e(a,t){var l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getElsom)({sum:a,wallet:t});case 2:void 0==(l=e.sent)&&(l="error"),Oe(l);case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(c.a)(n.a.mark(function e(a,t){var l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getBalanceKg)({sum:a,wallet:t});case 2:void 0==(l=e.sent)&&(l="error"),Oe(l);case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"main-buy kino-detail"},m.a.createElement("div",{className:"film-detail-wrap"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 trailer-wrap"},m.a.createElement("div",{className:"trailer"},m.a.createElement("div",{style:{height:"85px"}}),m.a.createElement("div",{className:"trailer-video-wrap",id:"trailer-video",style:{display:"none"}},m.a.createElement("video",{width:"100%",controls:!0,id:"trailer-video-18891",className:"trailer-video",src:"https://api.kinohod.ru/o/3f/32/3f324763-9611-45c7-9fbc-aa57e8771237.mp4",poster:"https://api.kinohod.ru/c/900x450/8d/c4/8dc494f8-ad0b-4505-bec7-d86e76a0fa6b.jpg"})),m.a.createElement("div",{className:"trailer_description"},m.a.createElement("div",{className:"trailer_title"},m.a.createElement("h1",{className:"name"},de.name),m.a.createElement("div",{className:"genre"},de.genre),m.a.createElement("div",{className:"age"},de.ageCategory)))))),m.a.createElement("div",{className:"film-detail"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-3"},m.a.createElement("div",{className:"film-detail_image"},m.a.createElement("img",{src:de.imageThumbnail,onLoad:function(e){e.target.src.includes("thumbnail")&&(e.target.src=de.image)},alt:!0}))),m.a.createElement("div",{className:"col-5"},m.a.createElement("div",{className:"film-detail_info"},m.a.createElement("table",{className:"table"},m.a.createElement("tbody",null,E.b.current.offsetWidth>700?m.a.createElement(m.a.Fragment,null,m.a.createElement("tr",null,m.a.createElement("td",{className:"name"},"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"),m.a.createElement("td",{className:"prop"},de.duration)),m.a.createElement("tr",null,m.a.createElement("td",{className:"name"},"\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430:"),m.a.createElement("td",{className:"prop"},de.premier)),m.a.createElement("tr",null,m.a.createElement("td",{className:"name"},"\u0420\u0435\u0436\u0438\u0441\u0441\u0451\u0440\u044b:"),m.a.createElement("td",{className:"prop"},de.producers)),m.a.createElement("tr",null,m.a.createElement("td",{className:"name"},"\u0412 \u0440\u043e\u043b\u044f\u0445:"),m.a.createElement("td",{className:"prop"},de.actors))):null)))),E.b.current.offsetWidth>700?m.a.createElement("div",{className:"col-4"},m.a.createElement("div",{className:"film-detail_description"},m.a.createElement("p",null,de.description))):null)))),m.a.createElement("div",{className:"schedule-wrap"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"schedule"},m.a.createElement("div",{className:"schedule_filter-section"},m.a.createElement("div",{className:"schedule_title"},m.a.createElement("h2",null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0435\u0430\u043d\u0441\u043e\u0432")),m.a.createElement("div",{className:"schedule_days-list"},E.b.current.offsetWidth>700?m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[0]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[0])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[0])),"\u0421\u0435\u0433\u043e\u0434\u043d\u044f")),m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[1]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[1])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[1])),"\u0417\u0430\u0432\u0442\u0440\u0430")),m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[2]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[2])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[2])))),m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[3]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[3])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[3])))),m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[4]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[4])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[4]))))):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[0]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[0])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[0])),"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[1]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[1])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[1])),"\u0417\u0430\u0432\u0442\u0440\u0430"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-2"},m.a.createElement("a",{className:B===ce[2]?"day-item js-day-item active":"day-item js-day-item",onClick:function(){J(ce[2])}},m.a.createElement("span",{className:"date"},Object(d.b)(ce[2])),"\u041f\u043e\u0441\u043b\u0435\u0437\u0430\u0432\u0442\u0440\u0430"))))),m.a.createElement("div",{className:"map"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"}))))))))),m.a.createElement("div",{className:"cinema-list-container"},R.map(function(e,a){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"cinema-row"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"place"},m.a.createElement("div",{className:"name"},m.a.createElement("div",{className:"title"},m.a.createElement("a",{className:"cinema-icon"}),m.a.createElement("a",null,e.name.split("|")[0]))),m.a.createElement("div",{className:"address"},e.name.split("|")[1])),m.a.createElement("div",{className:"right"},m.a.createElement("div",{className:"section"},m.a.createElement("div",{className:"times"},e.seance.map(function(t,l){return m.a.createElement(m.a.Fragment,null,m.a.createElement("input",{type:"radio",onClick:function(){W({date:t.realDate,cinema:e.name})}}),m.a.createElement("label",{htmlFor:"time"+a+l,onClick:function(){W({date:t.realDate,cinema:e.name})}},m.a.createElement("b",null,t.type),"\xa0",t.price,"\xa0\u0441\u043e\u043c\xa0",Object(d.e)(t.realDate)))})))))),me[e.name]?m.a.createElement("div",{className:"schem-container"},m.a.createElement("div",{className:"change-place"},m.a.createElement("div",{className:"change-place_content"},void 0!==le&&void 0!==le.seats?m.a.createElement(p.a,{seats:le.seats,holderSeats:Ee,seance:le}):null),m.a.createElement("div",{className:"change-place_footer"},m.a.createElement("div",{className:"container wrap"},m.a.createElement("div",{className:"amount-ticket"},"\u0412\u0441\u0435\u0433\u043e ",m.a.createElement("br",null),L.length," \u0431\u0438\u043b\u0435\u0442\u043e\u0432"),m.a.createElement("div",{className:"ticket"},L.map(function(e){return m.a.createElement("div",null,m.a.createElement("span",{className:"white"},e.name))})),m.a.createElement("div",{className:"price"},m.a.createElement("div",null,"\u0418\u0442\u043e\u0433\u043e:",m.a.createElement("span",null,$,"\xa0\u0441\u043e\u043c"))),parseInt($)>0?m.a.createElement("div",{className:"order-wrap"},m.a.createElement("a",{onClick:function(){L.length>0&&ge()},className:"btn btn-primary order-btn"},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")):null))),m.a.createElement("div",{className:"order-form"},m.a.createElement("form",{action:"#"},m.a.createElement("div",{className:"ticket-information"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("span",{className:"back-to-schem"},"\u041d\u0430\u0437\u0430\u0434"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-4"},m.a.createElement("div",{className:"ticket_img"},m.a.createElement("img",{src:"img/film-detail1.jpg",alt:!0}))),m.a.createElement("div",{className:"col-3 ticket_info-wrap"},m.a.createElement("div",{className:"ticket_info"},m.a.createElement("div",{className:"ticket_title"},"\u0401\u043b\u043a\u0438 \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435"),m.a.createElement("div",{className:"ticket_date"},"6 \u044f\u043d\u0432\u0430\u0440\u044f, \u0432\u0441, 11:00",m.a.createElement("br",null),"\u0417\u0430\u043b 7"),m.a.createElement("div",{className:"ticket_labels"},m.a.createElement("div",{className:"label"},"\u041e\u0431\u044b\u0447\u043d\u044b\u0435 \u0441\u0435\u0430\u043d\u0441\u044b 2D"),m.a.createElement("div",{className:"label"},"6+")),m.a.createElement("div",{className:"ticket_place"},m.a.createElement("div",{className:"column"},"\u0440\u044f\u0434 ",m.a.createElement("span",{className:"white"},"2")),m.a.createElement("div",{className:"place"},"\u043c\u0435\u0441\u0442\u043e ",m.a.createElement("span",{className:"white"},"8"))))),m.a.createElement("div",{className:"col-5"},m.a.createElement("div",{className:"ticket_form"},m.a.createElement("div",{className:"form-group name"},m.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0418\u043c\u044f","aria-required":"true"}),m.a.createElement("div",{className:"help-block"})),m.a.createElement("div",{className:"email"},m.a.createElement("div",{className:"form-group name"},m.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email","aria-required":"true"}),m.a.createElement("div",{className:"help-block"}))))))),m.a.createElement("div",{className:"change-place_footer info_footer"},m.a.createElement("div",{className:"container wrap"},m.a.createElement("div",{className:"info"},"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c\xbb, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 ",m.a.createElement("a",{href:"http://kassir.kg/document/\u043f\u0443\u0431\u043b_\u043e\u0444\u0435\u0440\u0442\u0430.docx",download:!0,target:"_blank"},"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u043e\u0444\u0435\u0440\u0442\u044b"),"."),m.a.createElement("div",{className:"price"},m.a.createElement("div",null,"\u0418\u0442\u043e\u0433\u043e:",m.a.createElement("span",null,"1740 \u0440\u0443\u0431."))),m.a.createElement("div",{className:"order-wrap"},m.a.createElement("a",{className:"btn btn-primary order-btn",onClick:be},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c")))))))):null)})),be?m.a.createElement("div",{className:"lds-div1"},m.a.createElement("div",{onclick:function(){},style:{background:"white",padding:"25px",zIndex:"3000",maxWidth:"600px"}},m.a.createElement("div",{className:"event-content_info"},m.a.createElement("div",{className:"date-dropdown"},m.a.createElement("div",{className:"input-group"},m.a.createElement("select",{onChange:function(e){Ie(e.target.value),"Balance.kg"===e.target.value?Ae($,V):"\u042d\u041b\u0421\u041e\u041c"===e.target.value?Ke($,V):"Visa/Maestro"===e.target.value?Ve():Oe("")},className:"custom-select"},m.a.createElement("option",{selected:!0,disabled:!0,hidden:!0},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b"),m.a.createElement("option",null,"ASISNUR"),m.a.createElement("option",null,"\u041c-bank"),m.a.createElement("option",null,"Balance.kg"),m.a.createElement("option",null,"\u042d\u041b\u0421\u041e\u041c"),m.a.createElement("option",null,"Visa/Maestro"))))),m.a.createElement("br",null),"Visa/Maestro"===Fe?m.a.createElement(m.a.Fragment,null,m.a.createElement("fieldset",{className:"fields-agreement"},m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("legend",null,"ru"===F?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448 \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u044b"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:o,onChange:f,className:"form-control",type:"text",placeholder:"ru"===F?"\u0418\u043c\u044f":"\u042b\u0441\u044b\u043c"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:h,onChange:k,className:"form-control",type:"text",placeholder:"Email"})),m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},"\u0424\u043e\u0440\u043c\u0430\u0442: +996705356742"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:O,onChange:x,className:"form-control",type:"text",placeholder:"ru"===F?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0443\u0440\u0443"})))),m.a.createElement("form",{method:"post",action:"https://ecommerce.demirbank.kg/fim/est3Dgate"},m.a.createElement("center",null,m.a.createElement("table",{className:"tableClass"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{align:"center",colSpan:2},o.length>0&&h.length>0&&O.length>0&&Object(d.f)(h)&&Object(d.g)(O)?m.a.createElement("input",{onClick:fe,type:"submit",defaultValue:"Submit",className:"buttonClass"}):m.a.createElement("b",null,"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"))))),m.a.createElement("input",{type:"hidden",name:"clientid",defaultValue:"170000097"}),m.a.createElement("input",{type:"hidden",name:"amount",defaultValue:$}),m.a.createElement("input",{type:"hidden",name:"islemtipi",defaultValue:"Auth"}),m.a.createElement("input",{type:"hidden",name:"taksit",defaultValue:""}),m.a.createElement("input",{type:"hidden",name:"oid",defaultValue:V}),m.a.createElement("input",{type:"hidden",name:"okUrl",defaultValue:"https://kassir.kg/payment/visa/pay"}),m.a.createElement("input",{type:"hidden",name:"failUrl",defaultValue:"https://kassir.kg/payment/tested"}),m.a.createElement("input",{type:"hidden",name:"rnd",defaultValue:"daseron"}),m.a.createElement("input",{type:"hidden",name:"hash",defaultValue:Ce}),m.a.createElement("input",{type:"hidden",name:"storetype",defaultValue:"3D_PAY_HOSTING"}),m.a.createElement("input",{type:"hidden",name:"lang",defaultValue:"ru"}),m.a.createElement("input",{type:"hidden",name:"currency",defaultValue:"417"}),m.a.createElement("input",{type:"hidden",name:"refreshtime",defaultValue:0}),m.a.createElement("br",null)))):null,"\u041c-bank"===Fe?m.a.createElement(m.a.Fragment,null,m.a.createElement("fieldset",{className:"fields-agreement"},m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("legend",null,"ru"===F?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448 \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u044b"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:o,onChange:f,className:"form-control",type:"text",placeholder:"ru"===F?"\u0418\u043c\u044f":"\u042b\u0441\u044b\u043c"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:h,onChange:k,className:"form-control",type:"text",placeholder:"Email"})),m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},"\u0424\u043e\u0440\u043c\u0430\u0442: +996705356742"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:O,onChange:x,className:"form-control",type:"text",placeholder:"ru"===F?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0443\u0440\u0443"}))),m.a.createElement("div",{className:"checkbox icheck form-group"},m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},m.a.createElement("b",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u0431\u0438\u043b\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0430.")," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0451\u0442\u0430 ",m.a.createElement("b",null,V),", \u0432\u043d\u0435\u0441\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u043f\u043b\u0430\u0442\u044b ",m.a.createElement("b",null,$)," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \xab\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c\xbb."))),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",onClick:function(){o.length>0&&h.length>0&&O.length>0?Object(d.f)(h)&&Object(d.g)(O)?fe():alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!"):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!")}}),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){ge()}}))):null,"ASISNUR"===Fe?m.a.createElement(m.a.Fragment,null,m.a.createElement("fieldset",{className:"fields-agreement"},m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("legend",null,"ru"===F?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448 \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u044b"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:o,onChange:f,className:"form-control",type:"text",placeholder:"ru"===F?"\u0418\u043c\u044f":"\u042b\u0441\u044b\u043c"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:h,onChange:k,className:"form-control",type:"text",placeholder:"Email"})),m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},"\u0424\u043e\u0440\u043c\u0430\u0442: +996705356742"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:O,onChange:x,className:"form-control",type:"text",placeholder:"ru"===F?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0443\u0440\u0443"}))),m.a.createElement("div",{className:"checkbox icheck form-group"},m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},m.a.createElement("b",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u0431\u0438\u043b\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0447\u0430\u0441\u0430.")," \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b \xab\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b\xbb, \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \xabKASSIR.KG\xbb. \u0414\u0430\u043b\u0435\u0435 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0451\u0442\u0430 ",m.a.createElement("b",null,V),", \u0432\u043d\u0435\u0441\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u043f\u043b\u0430\u0442\u044b ",m.a.createElement("b",null,$)," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \xab\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c\xbb."))),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",onClick:function(){o.length>0&&h.length>0&&O.length>0?Object(d.f)(h)&&Object(d.g)(O)?fe():alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!"):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!")}}),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){ge()}}))):null,"\u042d\u041b\u0421\u041e\u041c"===Fe?m.a.createElement(m.a.Fragment,null,m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("legend",null,"ru"===F?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448 \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u044b"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:o,onChange:f,className:"form-control",type:"text",placeholder:"ru"===F?"\u0418\u043c\u044f":"\u042b\u0441\u044b\u043c"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:h,onChange:k,className:"form-control",type:"text",placeholder:"Email"})),m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},"\u0424\u043e\u0440\u043c\u0430\u0442: +996705356742"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:O,onChange:x,className:"form-control",type:"text",placeholder:"ru"===F?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0443\u0440\u0443"})))),m.a.createElement("fieldset",{className:"fields-change-pass"},m.a.createElement("b",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u0431\u0438\u043b\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0441\u0430."),' \u0412\u0430\u0448 \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0448\u0435\u043b\u0435\u043a "\u042d\u043b\u0441\u043e\u043c": ',m.a.createElement("div",{style:{color:"red"}},je),m.a.createElement("br",null),'\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0443 \u0432 \u041b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435 "\u042d\u043b\u0441\u043e\u043c" (web.elsom.kg) \u0438\u043b\u0438 \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 Google Play \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u042d\u041b\u0421\u041e\u041c 2.0. \u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0432 \u043f\u0443\u043d\u043a\u0442\u0435 \xab\u0420\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043e\u043f\u043b\u0430\u0442\u044b\xbb.'),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",onClick:function(){o.length>0&&h.length>0&&O.length>0?Object(d.f)(h)&&Object(d.g)(O)?fe():alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!"):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!")}})),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){ge()}}))):null,"Balance.kg"===Fe?m.a.createElement(m.a.Fragment,null,m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("fieldset",{className:"fields-contacts"},m.a.createElement("legend",null,"ru"===F?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":"\u0411\u0430\u0439\u043b\u0430\u043d\u044b\u0448 \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442\u0442\u0430\u0440\u044b"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:o,onChange:f,className:"form-control",type:"text",placeholder:"ru"===F?"\u0418\u043c\u044f":"\u042b\u0441\u044b\u043c"})),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:h,onChange:k,className:"form-control",type:"text",placeholder:"Email"})),m.a.createElement("label",{htmlFor:"flat-checkbox-1",className:"icheck"},"\u0424\u043e\u0440\u043c\u0430\u0442: +996705356742"),m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{value:O,onChange:x,className:"form-control",type:"text",placeholder:"ru"===F?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0443\u0440\u0443"})))),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c",onClick:function(){o.length>0&&h.length>0&&O.length>0?Object(d.f)(h)&&Object(d.g)(O)?fe():alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!"):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!!!")}})),m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){ge()}}))):null,""===Fe?m.a.createElement("div",{className:"form-group field-button"},m.a.createElement("input",{className:"btn btn-primary",defaultValue:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){ge()}})):null)):null))});a.default=Object(o.b)(function(e){return{user:e.user,app:e.app}},function(e){return{appActions:Object(u.b)(i,e)}})(N)}.call(this,t(80).Buffer)},91:function(e,a,t){"use strict";var l=t(2),n=t.n(l),c=t(3),r=t(8),s=t(0),m=t.n(s);t(92),t(82);a.a=function(e){var a=e.seats,t=e.holderSeats,l=e.seance,i=Object(s.useState)([]),o=Object(r.a)(i,2),u=o[0],d=o[1],p=function(){for(var e=[],t=0;t<a.length;t++){e[t]=[];for(var l=0;l<a[t].length;l++)e[t][l]=!1}d(e)},E=function(e,a){var t=u;t[e][a]=!t[e][a],d(t)};return Object(s.useEffect)(Object(c.a)(n.a.mark(function e(){var t,l,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==a){for(t=[],l=0;l<a.length;l++)for(t[l]=[],c=0;c<a[l].length;c++)t[l][c]=!1;d(t)}case 1:case"end":return e.stop()}},e,this)})),[a]),m.a.createElement(m.a.Fragment,null,void 0!==a?m.a.createElement("div",{style:{width:26*a[0].length+150+"px"}},m.a.createElement("div",{className:"part-div-price",style:{width:"500px"}},m.a.createElement("div",{className:"part-number"}),m.a.createElement("div",{className:"part-empty",style:{background:"black"}}),m.a.createElement("div",{className:"part-price"},"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e"),m.a.createElement("div",{className:"part-empty",style:{background:"red"}}),m.a.createElement("div",{className:"part-price"},"\u041f\u0440\u043e\u0434\u0430\u043d\u043e")),a.map(function(e,r){return m.a.createElement("div",null,m.a.createElement("div",{className:"part-number"},"\u0420\u044f\u0434: "+e[0].name.split(":")[0].split(" ")[1]),e.map(function(e,s){return"seat"===e.type&&"reserve"!==e.status?m.a.createElement("div",{style:{display:"inline-block"}},m.a.createElement("div",{onClick:Object(c.a)(n.a.mark(function c(){return n.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("block"===e.status||"sold"===e.status||"reserve"===e.status){n.next=12;break}if("red"===e.color){n.next=8;break}return n.next=4,p();case 4:return n.next=6,E(r,s);case 6:n.next=12;break;case 8:a[r][s].status="free",a[r][s].color="indigo",l.seats=a,t(e,l);case 12:case"end":return n.stop()}},c,this)})),className:"part",style:{background:e.color}},m.a.createElement("div",{className:"part-text"},e.name.split(":")[1].split(" ")[0])),u.length>0&&u[r][s]?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"gallery-subbackground",onClick:function(){p()}}),m.a.createElement("div",{className:"header-submenu"},m.a.createElement("div",{className:"header-submenu-item",onClick:function(){a[r][s].priceSelect=e.price,a[r][s].color="red",a[r][s].status="hold",l.seats=a,t(e,l),p()}},"\u0412\u0437\u0440\u043e\u0441\u043b\u044b\u0439: ",e.price),e.priceKid.length>0&&parseInt(e.priceKid)>0?m.a.createElement("div",{className:"header-submenu-item",onClick:function(){a[r][s].priceSelect=e.priceKid,a[r][s].color="red",a[r][s].status="hold",l.seats=a,t(e,l),p()}},"\u0414\u0435\u0442\u0441\u043a\u0438\u0439: ",e.priceKid):null,e.priceStud.length>0&&parseInt(e.priceStud)>0?m.a.createElement("div",{className:"header-submenu-item",onClick:function(){a[r][s].priceSelect=e.priceStud,a[r][s].color="red",a[r][s].status="hold",l.seats=a,t(e,l),p()}},"\u0421\u0442\u0443\u0434\u0435\u043d: ",e.priceStud):null)):null):m.a.createElement("div",{className:"part-empty",style:{background:e.color}})}))})):null)}},92:function(e,a,t){}}]);
//# sourceMappingURL=7.bd4f0d9a.chunk.js.map
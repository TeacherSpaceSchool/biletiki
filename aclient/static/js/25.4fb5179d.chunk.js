(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{117:function(e,t,a){e.exports=a.p+"static/media/oplata.15cddd07.png"},142:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(3),l=a(8),s=a(0),m=a.n(s),i=a(4),d=a(9),o=a(16),v=a(5),E=a(120),u=a(28),p=a(17),N=(a(117),m.a.memo(function(e){var t=e.app,a=t.city,n=t.lang,d=Object(s.useState)({events:[],ads:{}}),o=Object(l.a)(d,2),v=o[0],N=o[1];return Object(s.useEffect)(function(){Object(r.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getOther)({name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",data:{city:""}});case 2:if(void 0==(t=e.sent)){e.next=8;break}for(a=0;a<t.events.length;a++)t.events[a].dateTime=Object(p.e)(t.events[a].realDate.sort()[0]),t.events[a].dateStartEnd=Object(p.d)(t.events[a].realDate.sort()),t.events[a].price.sort(function(e,t){return parseInt(e.price)-parseInt(t.price)}),t.events[a].price=t.events[a].price[0].price;return t.ads=void 0===t.ads[0]?{}:t.ads[0],e.next=8,N(t);case 8:case"end":return e.stop()}},e,this)}))()},[a]),m.a.createElement("main",{className:"main-events-page"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-12 heading"},m.a.createElement("div",{className:"heading-title_wrap"},"ru"===n?"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435":"\u042d\u043b\u0434\u0438\u043a"),m.a.createElement("div",{className:"heading-title_line"}))),m.a.createElement("div",{className:"events"},m.a.createElement("div",{className:"row"},v.events.map(function(e,t){return m.a.createElement("div",{key:t,className:"col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2"},m.a.createElement("div",{className:"event"},void 0!==e.dateStartEnd?m.a.createElement("div",{className:"event_date"},m.a.createElement("div",null,m.a.createElement("span",{className:"day"},e.dateStartEnd[0]),m.a.createElement("span",{className:"month"},e.dateStartEnd[1])),e.dateStartEnd[0]!==e.dateStartEnd[2]&&e.dateStartEnd[1]!==e.dateStartEnd[3]?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"line"}),m.a.createElement("div",null,m.a.createElement("span",{className:"day"},e.dateStartEnd[2]),m.a.createElement("span",{className:"month"},e.dateStartEnd[3]))):null):null,m.a.createElement("div",{className:"event_image"},m.a.createElement(E.a,{onClick:function(){Object(u.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},m.a.createElement("img",{src:e.imageThumbnail}))),m.a.createElement("div",{className:"event-content"},m.a.createElement("div",{className:"event-content_title"},m.a.createElement(E.a,{onClick:function(){Object(u.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},"ru"===n?e.nameRu:e.nameKg)),"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435"===e.where.name?null:m.a.createElement("div",{className:"event-content_place"},m.a.createElement("span",{className:"event-content-place_text"},m.a.createElement(E.a,{to:"/hall/"+e.where.name},e.where.name))),m.a.createElement("div",{className:"event-content_info"},m.a.createElement("div",{className:"event-content-info_price"},"\u043e\u0442 ",e.price," \u0441\u043e\u043c"),m.a.createElement("div",{className:"event-content-info_date"},e.dateTime),m.a.createElement("div",{className:"event-content-info_btn-wrap"},m.a.createElement(E.a,{onClick:function(){Object(u.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},m.a.createElement("div",{className:"event-content-info_btn"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442")))))))})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("img",{style:{width:"100%",marginBottom:"30px"},onClick:function(){window.open(v.ads.link,"_blank")},src:v.ads.image}))))))}));t.default=Object(d.b)(function(e){return{user:e.user,app:e.app}},function(e){return{appActions:Object(v.b)(i,e),userActions:Object(v.b)(o,e)}})(N)}}]);
//# sourceMappingURL=25.4fb5179d.chunk.js.map
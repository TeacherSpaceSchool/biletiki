(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{102:function(e,a,t){e.exports=t.p+"static/media/oplata.15cddd07.png"},127:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),l=t(3),r=t(8),s=t(0),m=t.n(s),i=t(4),d=t(9),o=t(15),v=t(5),u=t(105),E=t(28),p=t(17),N=(t(102),m.a.memo(function(e){var a=e.app,t=a.city,n=a.lang,d=Object(s.useState)({events:[],ads:{}}),o=Object(r.a)(d,2),v=o[0],N=o[1];return Object(s.useEffect)(Object(l.a)(c.a.mark(function e(){var a,t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getOther)({name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",data:{city:""}});case 2:if(void 0==(a=e.sent)){e.next=8;break}for(t=0;t<a.events.length;t++)a.events[t].dateTime=Object(p.e)(a.events[t].realDate.sort()[0]),a.events[t].dateStartEnd=Object(p.d)(a.events[t].realDate.sort()),a.events[t].price.sort(function(e,a){return parseInt(e.price)-parseInt(a.price)}),a.events[t].price=a.events[t].price[0].price;return a.ads=void 0===a.ads[0]?{}:a.ads[0],e.next=8,N(a);case 8:case"end":return e.stop()}},e,this)})),[t]),m.a.createElement("main",{className:"main-events-page"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-xl-12 heading"},m.a.createElement("div",{className:"heading-title_wrap"},"ru"===n?"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435":"\u042d\u043b\u0434\u0438\u043a"),m.a.createElement("div",{className:"heading-title_line"}))),m.a.createElement("div",{className:"events"},m.a.createElement("div",{className:"row"},v.events.map(function(e){return m.a.createElement("div",{className:"col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2"},m.a.createElement("div",{className:"event"},void 0!==e.dateStartEnd?m.a.createElement("div",{className:"event_date"},m.a.createElement("div",null,m.a.createElement("span",{className:"day"},e.dateStartEnd[0]),m.a.createElement("span",{className:"month"},e.dateStartEnd[1])),e.dateStartEnd[0]!==e.dateStartEnd[2]&&e.dateStartEnd[1]!==e.dateStartEnd[3]?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"line"}),m.a.createElement("div",null,m.a.createElement("span",{className:"day"},e.dateStartEnd[2]),m.a.createElement("span",{className:"month"},e.dateStartEnd[3]))):null):null,m.a.createElement("div",{className:"event_image"},m.a.createElement(u.a,{onClick:function(){Object(E.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},m.a.createElement("a",null,m.a.createElement("img",{src:e.imageThumbnail,alt:!0})))),m.a.createElement("div",{className:"event-content"},m.a.createElement("div",{className:"event-content_title"},m.a.createElement(u.a,{onClick:function(){Object(E.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},m.a.createElement("a",null,"ru"===n?e.nameRu:e.nameKg))),m.a.createElement("div",{className:"event-content_place"},m.a.createElement("span",{className:"event-content-place_text"},m.a.createElement(u.a,{to:"/hall/"+e.where.name},m.a.createElement("a",null,e.where.name)))),m.a.createElement("div",{className:"event-content_info"},m.a.createElement("div",{className:"event-content-info_price"},"\u043e\u0442 ",e.price," \u0441\u043e\u043c"),m.a.createElement("div",{className:"event-content-info_date"},e.dateTime),m.a.createElement("div",{className:"event-content-info_btn-wrap"},m.a.createElement(u.a,{onClick:function(){Object(E.c)()},to:"/event/"+("ru"===n?e.nameRu:e.nameKg)},m.a.createElement("a",{className:"event-content-info_btn"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442")))))))})),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("img",{style:{width:"100%",marginBottom:"30px"},onClick:function(){window.open(v.ads.link,"_blank")},src:v.ads.imageThumbnail,onLoad:function(e){console.log("ad",v.ads.image),e.target.src.includes("thumbnail")&&(e.target.src=v.ads.image)},alt:!0}))))))}));a.default=Object(d.b)(function(e){return{user:e.user,app:e.app}},function(e){return{appActions:Object(v.b)(i,e),userActions:Object(v.b)(o,e)}})(N)}}]);
//# sourceMappingURL=25.8f007a85.chunk.js.map
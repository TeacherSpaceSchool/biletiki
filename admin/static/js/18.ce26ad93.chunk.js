(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,a,t){"use strict";t.r(a);var n=t(91),r=t(7),i=t.n(r),l=t(11),c=t(0),s=t.n(c),o=t(97),u=t(13),p=t(10),d=t(94),m=t(98),h=t.n(m),f=t(108),g=t.n(f),b=t(99),v=t.n(b),w=t(166),E=t.n(w),y=t(21),k=y.b.current.offsetWidth>800?500:240,S=((y.b.current.offsetWidth>800?y.b.current.offsetWidth-240:y.b.current.offsetWidth)-k)/2;a.default=Object(o.withStyles)(function(e){return{mainCam:{width:"100%",display:"flex",justifyContent:"center"},button:{margin:e.spacing.unit},textFieldSmall:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:k},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:k},urls:{margin:e.spacing.unit,width:k,maxHeight:100,overflow:"auto"},cam:{width:"100%",maxWidth:500,maxHeight:500},message:{width:k,marginTop:e.spacing.unit,marginBottom:e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit},text_message:{width:k,marginTop:e.spacing.unit,marginBottom:e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit,overflow:"hidden",wordWrap:"break-word"},center:{width:k,marginLeft:S,marginRight:S}}})(Object(u.b)(function(e){return{table:e.table,user:e.user}},function(e){return{tableActions:Object(p.b)(d,e)}})(function(e){Object(c.useEffect)(Object(l.a)(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"active"===o.status&&["admin","manager","cashier","cinema"].includes(o.role)||e.history.push("/");case 1:case"end":return a.stop()}},a,this)})),[]);var a=e.tableActions,t=a.setSelected,r=a.setData,o=e.user.status,u=e.classes,p=Object(c.useState)(null),m=Object(n.a)(p,2),f=m[0],b=m[1],w=Object(c.useState)(""),y=Object(n.a)(w,2),k=y[0],S=y[1],x=["\u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d","\u043f\u0440\u043e\u0434\u0430\u043d","\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d","\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d"],j=function(){var e=Object(l.a)(i.a.mark(function e(a){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,Object(d.getDataSimple)({name:"\u0411\u0438\u043b\u0435\u0442\u044b\u041a\u0438\u043d\u043eHash",data:{hash:a}});case 3:void 0!=(a=e.sent)&&(S(a.status),b(a));case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),A=Object(c.useState)("environment"),O=Object(n.a)(A,2),q=O[0],L=O[1];return s.a.createElement("div",null,null===f?s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement("b",null,"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(h.a,{select:!0,SelectProps:{MenuProps:{className:u.menu}},label:"\u0442\u0438\u043f \u043a\u0430\u043c\u0435\u0440\u044b",type:"login",className:u.textField,margin:"normal",value:q,onChange:function(e){L(e.target.value)}},["environment","user"].map(function(e){return s.a.createElement(g.a,{key:e,value:e},e)})),s.a.createElement("br",null),s.a.createElement("div",{className:u.mainCam},s.a.createElement(E.a,{facingMode:q,onError:function(e){console.log(e)},onScan:j,className:u.cam})),s.a.createElement("br",null)):s.a.createElement("div",{className:u.center},s.a.createElement("br",null),s.a.createElement("a",{style:{fontWeight:"bold"},href:f.ticket,target:"_blank"},"\u0411\u0438\u043b\u0435\u0442"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"Hash"),s.a.createElement("br",null),f.hash,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),s.a.createElement("br",null),"\u0438\u043c\u044f: "+f.user.name+"; email: "+f.user.email+"; id:"+f.user._id+";",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u0424\u0438\u043b\u044c\u043c"),s.a.createElement("br",null),f.movie,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u0422\u0438\u043f"),s.a.createElement("br",null),f.type,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"),s.a.createElement("br",null),f.cinema,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u0417\u0430\u043b"),s.a.createElement("br",null),f.hall,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("b",null,"\u041c\u0435\u0441\u0442\u0430"),s.a.createElement("br",null),f.seats.length>0?f.seats.map(function(e){return s.a.createElement(s.a.Fragment,null,"\u041c\u0435\u0441\u0442\u043e: "+e.name+" \u0426\u0435\u043d\u0430: "+e.priceSelect+" \u0414\u0430\u0442\u0430: "+e.date,s.a.createElement("br",null))}):null,s.a.createElement("br",null),s.a.createElement(h.a,{select:!0,SelectProps:{MenuProps:{className:u.menu}},label:"\u0441\u0442\u0430\u0442\u0443\u0441",type:"login",className:u.textField,margin:"normal",value:k,onChange:function(e){S(e.target.value)}},void 0!=x?x.map(function(e){return s.a.createElement(g.a,{key:e,value:e},e)}):null),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement(v.a,{variant:"contained",color:"primary",className:u.button,onClick:function(){r({id:f._id,search:"",sort:"",page:0,name:"\u0411\u0438\u043b\u0435\u0442\u044b",data:{status:k}}),t(-1),b(null)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),s.a.createElement(v.a,{variant:"contained",color:"secondary",className:u.button,onClick:function(){b(null)}},"\u0417\u0430\u043d\u043e\u0432\u043e"))))}))},94:function(e,a,t){"use strict";t.r(a),t.d(a,"setData",function(){return p}),t.d(a,"addData",function(){return d}),t.d(a,"setSelected",function(){return m}),t.d(a,"getIds",function(){return h}),t.d(a,"getData",function(){return f}),t.d(a,"getDataSimple",function(){return g}),t.d(a,"deleteData",function(){return b});var n=t(7),r=t.n(n),i=t(11),l=t(14),c=t(17),s=t.n(c),o=t(111),u=t.n(o);function p(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,o,p,d,m,h,f,g,b;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(n=new u.a).append("id",e.id),n.append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!=e.oldFile&&n.append("oldFile",e.oldFile),void 0!=e.oldFileWhatermark&&n.append("oldFileWhatermark",e.oldFileWhatermark),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}}else i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin};return a.next=13,s.a.post("/data/add",n,{headers:i});case 13:for(o=a.sent,p=[],d=0;d<o.data.row.length;d++)p.push({name:o.data.row[d],options:{filter:!0,sort:!0}});if(m=[],"\u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"!=e.name)for(h=0;h<o.data.data.length;h++){for(f=[],g=0;g<o.data.data[h].length;g++)(b=o.data.data[h][g]).length>200&&(b=b.substring(0,200)+"..."),f.push(b);m.push(f)}else m=o.data.data;e={count:o.data.count,page:e.page,data:o.data.data,data1:m,row:p,search:e.search,name:e.name,sort:e.sort},t({type:l.a,payload:e}),a.next=25;break;case 22:a.prev=22,a.t0=a.catch(0),console.error(a.t0);case 25:case"end":return a.stop()}},a,this,[[0,22]])}));return function(e){return a.apply(this,arguments)}}()}function d(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,o,p,d,m,h,f,g,b;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(n=new u.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("new",JSON.stringify(e.data)),void 0!=e.file){for(n.append("fileLength",e.file.length),c=0;c<e.file.length;c++)n.append("file"+c,e.file[c]),n.append("fileName"+c,e.file[c].name);i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(n._boundary),"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}}else i={accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin};return a.next=10,s.a.post("/data/add",n,{headers:i});case 10:for(o=a.sent,p=[],d=0;d<o.data.row.length;d++)p.push({name:o.data.row[d],options:{filter:!0,sort:!0}});if(m=[],"\u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"!=e.name)for(h=0;h<o.data.data.length;h++){for(f=[],g=0;g<o.data.data[h].length;g++)(b=o.data.data[h][g]).length>200&&(b=b.substring(0,200)+"..."),f.push(b);m.push(f)}else m=o.data.data;e={count:o.data.count,page:e.page,data:o.data.data,data1:m,row:p,search:e.search,name:e.name,sort:e.sort},t({type:l.a,payload:e}),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),console.error(a.t0);case 22:case"end":return a.stop()}},a,this,[[0,19]])}));return function(e){return a.apply(this,arguments)}}()}function m(e){return{type:l.c,payload:e}}function h(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new u.a).append("name",e),a.next=5,s.a.post("/data/getIds",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}});case 5:i=a.sent,t({type:l.b,payload:i.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}},a,this,[[0,9]])}));return function(e){return a.apply(this,arguments)}}()}function f(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,o,p,d,m,h,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new u.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),a.next=8,s.a.post("/data/get",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}});case 8:for(i=a.sent,c=[],o=0;o<i.data.row.length;o++)c.push({name:i.data.row[o],options:{filter:!0,sort:!0}});if(p=[],"\u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"!=e.name)for(d=0;d<i.data.data.length;d++){for(m=[],h=0;h<i.data.data[d].length;h++)(f=i.data.data[d][h]).length>200&&(f=f.substring(0,200)+"..."),m.push(f);p.push(m)}else p=i.data.data;e={count:i.data.count,page:e.page,data:i.data.data,data1:p,row:c,search:e.search,name:e.name,sort:e.sort},t({type:l.a,payload:e}),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(0),console.error(a.t0);case 20:case"end":return a.stop()}},a,this,[[0,17]])}));return function(e){return a.apply(this,arguments)}}()}var g=function(){var e=Object(i.a)(r.a.mark(function e(a){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new u.a).append("name",a.name),void 0!==a.data&&t.append("data",JSON.stringify(a.data)),e.next=6,s.a.post("/data/get",t,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}});case 6:return n=e.sent,e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(a){return e.apply(this,arguments)}}();function b(e){return function(){var a=Object(i.a)(r.a.mark(function a(t){var n,i,c,o,p,d,m,h,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new u.a).append("search",e.search),n.append("sort",e.sort),n.append("skip",JSON.stringify(10*e.page)),n.append("name",e.name),n.append("deleted",e.deleted),void 0!=e.oldFile&&e.oldFile.length>0&&n.append("oldFile",e.oldFile),a.next=10,s.a.post("/data/delete",n,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.userBiletikiAdmin}});case 10:for(i=a.sent,c=[],o=0;o<i.data.row.length;o++)c.push({name:i.data.row[o],options:{filter:!0,sort:!0}});if(p=[],"\u041f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"!==e.name)for(d=0;d<i.data.data.length;d++){for(m=[],h=0;h<i.data.data[d].length;h++)(f=i.data.data[d][h]).length>200&&(f=f.substring(0,200)+"..."),m.push(f);p.push(m)}else p=i.data.data;e={count:i.data.count,page:e.page,data:i.data.data,data1:p,row:c,search:e.search,name:e.name,sort:e.sort},t({type:l.a,payload:e}),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(0),console.error(a.t0);case 22:case"end":return a.stop()}},a,this,[[0,19]])}));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=18.ce26ad93.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{f2b8:function(a,t,e){"use strict";e.r(t);var n={name:"contato-list",computed:{columns:()=>[{name:"nome",align:"left",label:"nome",field:"nome",sortable:!0},{name:"cpf",align:"left",label:"cpf",field:"cpf",sortable:!0},{name:"email",align:"left",label:"email",field:"email",sortable:!0},{name:"datahora_cadastro",align:"left",label:"cadastro",field:"datahora_cadastro",sortable:!0,format:format.datetime}]},data:()=>({lista:[]}),methods:{async atualizar(){try{loading.show();const a=await backend("get","contato");this.lista=a.data.map(a=>({...a,categoria_nome:(a.categoria||{}).nome||""}))}catch(a){notifyError("erro na consulta",a)}finally{loading.hide()}}},mounted(){this.atualizar()}},o=e("2877"),l=e("9989"),r=e("eaac"),s=e("bd08"),i=e("357e"),c=e("db86"),d=e("9c40"),m=e("eebe"),u=e.n(m),p=Object(o.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"q-pa-md"},[e("q-table",{attrs:{title:"contatos",data:a.lista,columns:a.columns,"row-key":"id"},scopedSlots:a._u([{key:"header",fn:function(t){return[e("q-tr",{attrs:{props:t}},[e("q-th",{attrs:{"auto-width":""}}),a._l(t.cols,(function(n){return e("q-th",{key:n.name,attrs:{props:t}},[a._v("\n            "+a._s(n.label)+"\n          ")])}))],2)]}},{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},[e("q-td",{attrs:{"auto-width":""}},[e("q-btn",{attrs:{size:"sm",color:"primary",round:"",dense:"",to:{name:"contato-edit",params:{id:t.cols[0].value}},icon:"edit"}})],1),a._l(t.cols,(function(n){return e("q-td",{key:n.name,attrs:{props:t}},[a._v("\n            "+a._s(n.value)+"\n          ")])}))],2)]}}])})],1),e("q-btn",{attrs:{color:"primary",label:"adicionar",to:{name:"contato-edit"}}})],1)}),[],!1,null,null,null);t.default=p.exports;u()(p,"components",{QPage:l.a,QTable:r.a,QTr:s.a,QTh:i.a,QTd:c.a,QBtn:d.a})}}]);
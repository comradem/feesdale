(this.webpackJsonpfeesdale=this.webpackJsonpfeesdale||[]).push([[0],{257:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkARIMFRJLZyuoAAABuUlEQVQ4y4XTPWyNYRQH8F8bRFS7KEI61DWSmOpjEEQbaUWEVEiIqKGL+FgaY8XSSQwGi0ksEgYGiyaVK5EbCREEDa6BLk1vK/f2Iyr6GPq+733fe1vOWf7P/3n+5yPnPDwW/HBI1l4LgqCivebGbv2GlazNsGUP9Lsu2GMJ2y7orhEMYEe9YAX44Jduv+t46NAUoTlvVWL6U1Rz1eMMaZ+yL470TcmlVIZ8gvq8i1CjG4ZiwVcHvEoJ/iRoNMW/dLQxybBFQ4Q7XbUqeXTGhaSjdt9j+phgc4QfCmYdxnpjgmmtyXTuxBmKyEX4vIJ5JcwaNeOIiegmpxhnaBacTcpo8cJPXfLK9ibsOsGpapvjrqWabjIimLY/xe0UdFSPBXczI212y64Mc1LQWp1oMelh0SouZpfCVmUTjcsKam2D056nd6Zok8l/CFpMOZEVcM/YsoJxj7IB2wTH/dcaUvgNrlQXuM6C9+bTxDbFuiXP+lBtjJUm5PXIm9alU6cR43rdFFx2UHOtYI0FfThnIfrjz9zHRkHv0nUWfDHgs0J0HjRn0BMz2pYW5AyreJoMcbXbJn3UEz/4C9hQm2B4KonuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTE4VDEyOjIxOjE4KzAwOjAwmnN6nQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0xOFQxMjoyMToxOCswMDowMOsuwiEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},263:function(e,t,a){e.exports=a(552)},268:function(e,t,a){},269:function(e,t,a){},273:function(e,t,a){},543:function(e,t,a){},544:function(e,t,a){},545:function(e,t,a){},546:function(e,t,a){},548:function(e,t,a){},551:function(e,t,a){},552:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(61),l=a.n(c),o=(a(268),a(180)),s=a.n(o),i=a(28),u=a(34),m=a(37),d=a(35),h=a(36),p=a(10),b=a(7),E=a(21),f=(a(269),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSearchInput=function(e){a.setState({searchText:e.target.value})},a.handleSearch=function(){a.props.history.push({pathname:"/store/search?".concat(a.state.searchText)})},a.state={searchText:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"p-main-search-bar"},r.a.createElement("div",{className:"main-page-logo"},"MAX SUCCESS"),r.a.createElement(b.a,{onSubmit:this.handleSearch},r.a.createElement(b.a.Group,{controlId:"formSearch"},r.a.createElement(b.a.Control,{type:"text",placeholder:"Search ...",onChange:this.handleSearchInput})),r.a.createElement("div",{className:"search-bar-buttons"},r.a.createElement(E.a,{variant:"secondary",type:"button",className:"p-main-search-btn",onClick:this.handleSearch},"Search"),r.a.createElement(E.a,{variant:"secondary",type:"button",className:"p-main-search-btn",onClick:function(){return e.props.history.push({pathname:"/store"})}},"Find for me"))))}}]),t}(n.Component)),g=a(254),v=a(62),y=(a(273),a(55)),A=a.n(y),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=a.state,t=e.email,n=e.password,r=a.props.isAuth;A.a.User.logIn(t,n).then((function(e){r(!0),a.setState({isAuthenticated:!0})})).catch((function(e){}))},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={isAuthenticated:!1,email:"",password:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(!0===this.state.isAuthenticated)return r.a.createElement(p.a,{to:{pathname:"/manager",state:this.props.storeData}});var e=this.state,t=e.email,a=e.password;return r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"p-login"},r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(b.a.Label,null,"Email address"),r.a.createElement(b.a.Control,{name:"email",type:"email",placeholder:"Enter email",value:t,onChange:this.handleChange}),r.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{name:"password",type:"password",placeholder:"Password",value:a,onChange:this.handleChange})),r.a.createElement(b.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(b.a.Check,{type:"checkbox",label:"Remember me"})),r.a.createElement(E.a,{variant:"light",type:"button",onClick:this.handleSubmit},"Login")))}}]),t}(n.Component),j=(a(543),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"p-about-container"},r.a.createElement("div",null,"MAX Success",r.a.createElement("br",null),"Get ready for Spring 2020!",r.a.createElement("br",null),"New Collection already here",r.a.createElement("br",null),"Come and check out",r.a.createElement("br",null),"Sales on winter collection",r.a.createElement("div",null,"Address")))}}]),t}(n.Component)),k=a(65),I=a(82),C=a(127),w=a(95),S=(a(544),a(257)),N=a.n(S),x=a(258),B=Object(p.g)((function(e){var t=e.isAuth,a=e.handleLogout,c=e.history,l=e.numOfSelectedItems,o=Object(n.useState)(""),s=Object(k.a)(o,2),i=s[0],u=s[1],m="hidden";return 0!==l&&(m=""),r.a.createElement(C.a,{className:"sticky-top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(C.a.Brand,{as:I.b,to:{pathname:"/"}},"M&S"),r.a.createElement(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(w.a.Link,{as:I.b,to:{pathname:"/store"}},"Store"),r.a.createElement(w.a.Link,{as:I.b,to:{pathname:"/about"}},"About")),r.a.createElement(b.a,{onSubmit:function(){return c.push({pathname:"/store/search?".concat(i)})}},r.a.createElement("input",{type:"text",placeholder:"search",className:"search-bar-input",onChange:function(e){return u(e.target.value)}})),r.a.createElement(w.a,null,r.a.createElement(w.a.Link,{as:I.b,to:{pathname:"/basket"}},r.a.createElement(x.a,{className:"badge badge-pill badge-danger ".concat(m),variant:"danger"},l),r.a.createElement("span",{className:"img_bg"},r.a.createElement("img",{src:N.a,alt:"basket"}))),r.a.createElement(w.a.Link,{as:I.b,to:t?{pathname:"/manager"}:{pathname:"/login"},onClick:function(){return t?a():null}},t?"Logout":"Account"))))})),T=a(40),D=a(109),L=(a(545),function(e){var t=e.dataObject,a=t.productImage,c=t.productName,l=t.originalPrice,o=t.searchKeywords,s=e.addItemToBasket,i=e.isManager,u=e.dataObject,m=e.updateData,d=Object(n.useState)(!1),h=Object(k.a)(d,2),p=h[0],f=h[1],g=Object(n.useState)(l),v=Object(k.a)(g,2),y=v[0],A=v[1],O=Object(n.useState)(a),j=Object(k.a)(O,2),I=j[0],C=j[1],w=Object(n.useState)(c),S=Object(k.a)(w,2),N=S[0],x=S[1],B=Object(n.useState)(o),L=Object(k.a)(B,2),F=L[0],G=L[1],P=function(){f(!0)},M=function(){f(!1)};return r.a.createElement(T.a,{style:{width:"18rem"},className:"fd-card"},r.a.createElement(T.a.Img,{variant:"top",src:a}),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,c),r.a.createElement(T.a.Text,null,l,"$")),r.a.createElement(T.a.Footer,null,i?null:r.a.createElement(E.a,{variant:"success",onClick:function(t){e.dataObject.selected=!0,s(t,e.dataObject)}},"Add + "),i?r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{className:"edit-btn",name:"edit",variant:"danger",onClick:function(){P()}},"Edit"),r.a.createElement(D.a,{className:"modal-container",show:p,onHide:function(){return M()},animation:!0,bssize:"small"},r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,null,"Edit item: ","".concat(u.productId))),r.a.createElement(D.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formProductImage"},r.a.createElement(b.a.Label,null,"Image"),r.a.createElement(b.a.Control,{placeholder:"image url",value:I,onChange:function(e){return function(e){u.productImage=e.target.value,C(e.target.value)}(e)}})),r.a.createElement(b.a.Group,{controlId:"formProductName"},r.a.createElement(b.a.Label,null,"Name"),r.a.createElement(b.a.Control,{placeholder:"product name",value:N,onChange:function(e){return function(e){u.productName=e.target.value,x(e.target.value)}(e)}})),r.a.createElement(b.a.Group,{controlId:"formOriginalPrice"},r.a.createElement(b.a.Label,null,"Price"),r.a.createElement(b.a.Control,{placeholder:"price",value:y,onChange:function(e){return function(e){u.originalPrice=e.target.value,A(e.target.value)}(e)}})),r.a.createElement(b.a.Group,{controlId:"formSearchKeywords"},r.a.createElement(b.a.Label,null,"Keywords"),r.a.createElement(b.a.Control,{placeholder:"comma separated values",value:F,onChange:function(e){return function(e){u.searchKeywords=u.searchKeywords.concat(e.target.value.split(",")),G(e.target.value)}(e)}})),r.a.createElement(E.a,{bsStyle:"primary",type:"button",onClick:function(e){return function(e){console.log("why u no listen"),console.log(e)}(e)}},"Save changes"))),r.a.createElement(D.a.Footer,null,r.a.createElement(E.a,{onClick:function(){return M()}},"Close"))),r.a.createElement(E.a,{className:"remove-btn",name:"delete",variant:"danger",onClick:function(e){return m(e,u)}},"Delete")):null))}),F=(a(546),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.storeData,a=e.addItemToBasket,n=this.props.match.params.searchText,c=n?t.filter((function(e){return e.searchKeywords.join(" ").includes(n)})):t;if(0===c.length)return r.a.createElement(p.a,{to:{pathname:"/empty"}});var l=c.map((function(e,t){return r.a.createElement(L,{key:t,dataObject:e,addItemToBasket:a})}));return r.a.createElement(v.a,{className:"p-store"},l)}}]),t}(n.Component)),G=(a(547),a(548),a(259)),P=a(47),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).removeThisItem=function(){var e=a.props,t=e.dataObject;(0,e.removeItem)(t.productId)},a.handleQuantity=function(e,t){var n=a.props,r=n.dataObject,c=n.removeItem;if("0"===e)c(r.productId);else{var l=parseInt(e);r.quantity=l,a.setState({quantity:l})}},a.state={quantity:1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.dataObject;return e?r.a.createElement(T.a,null,r.a.createElement(T.a.Header,null,e.categoryName),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Img,{className:"item-image",variant:"top",src:e.productImage}),r.a.createElement(T.a.Title,null,e.productName),r.a.createElement(T.a.Text,null,"Price: ",e.originalPrice,"$")),r.a.createElement(T.a.Footer,null,r.a.createElement(G.a,{variant:"outline-secondary",title:"".concat(this.state.quantity),id:"input-group-dropdown-1"},r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"1"},"0(delete)"),r.a.createElement(P.a.Divider,null),r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"1"},"1"),r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"2"},"2"),r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"3"},"3"),r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"4"},"4"),r.a.createElement(P.a.Divider,null),r.a.createElement(P.a.Item,{href:"#",onSelect:this.handleQuantity,eventKey:"5"},"5+")),r.a.createElement(E.a,{variant:"secondary",onClick:this.removeThisItem},"Remove"))):r.a.createElement(n.Fragment,null)}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).removeItem=function(e){var t=a.state.data.filter((function(t){return t.productId!==e}));a.setState({data:t}),(0,a.props.updateBasket)(t)},a.moveToCheckout=function(){a.props.history.push({pathname:"/checkout",state:{data:a.state.data,updateBasket:a.props.updateBasket}})},a.state={data:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.basket&&this.setState({data:this.props.basket})}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t,a){return r.a.createElement(M,{key:a,dataObject:t,removeItem:e.removeItem})}));return t.length<=0?r.a.createElement(n.Fragment,null,"your basket is empty"):r.a.createElement(v.a,{fluid:!0},r.a.createElement("div",null,t),r.a.createElement("div",null,t.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement(E.a,{variant:"success",block:!0,type:"button",onClick:this.moveToCheckout},"Checkout")):null))}}]),t}(n.Component),K=Object(p.g)(Q),R=a(261),U=a.n(R),J=function e(t){Object(i.a)(this,e),this.categoryName=t?t.categoryName:"",this.categoryId=t?t.categoryId:"",this.productName=t?t.productName:"",this.productId=t?t.productId:"",this.productImage=t?t.productImage:"",this.productAllImages=t?t.productAllImages.split(","):"",this.productUrl=t?t.productUrl:"",this.originalPrice=t?t.originalPrice:"",this.salePrice=t?t.salePrice:"",this.commissionRate=t?t.commissionRate:"",this.outOfStock=t?t.outOfStock:"",this.discount=t?t.discount:"",this.clickUrl=t?t.clickUrl:"",this.selected=!1,this.searchKeywords=t?t.searchKeywords:[],this.quantity=1};a(551);var Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleFiles=function(e){var t=new FileReader;t.onload=function(e){var a=function(e){if(e){var t=e.split("\n");t.shift();return t.map((function(e,t){var a=e.substr(e.indexOf('"')+1,e.lastIndexOf('"')).split(",").join(":::"),n=e.replace(e.substring(e.indexOf('"')+1,e.lastIndexOf('"')),a),r=new J,c=n.split(","),l=Object.getOwnPropertyNames(r),o=l;l.length>c.length&&(o=c);for(var s=0;s<o.length;s++)r[l[s]]=c[s];return r}))}return null}(t.result),n=Object.getOwnPropertyNames(new J),r=A.a.Object.extend("FDObjectModel",null,n),c=a.map((function(e,t){for(var a=new r,c=0;c<n.length;c++)a.set(n[c],e["".concat(n[c])]);return t%17===0&&a.set("searchKeywords",[1,"dress","cloth"]),t%23===0&&a.set("searchKeywords",[1,"gadget"]),t%7===0&&a.set("searchKeywords",[1,"bike","test"]),t%131===0&&a.set("searchKeywords",[1,"best","item"]),a}));A.a.Object.saveAll(c).then((function(e){"undefined"!==typeof document&&console.log("ParseObject created",e)}),(function(e){"undefined"!==typeof document&&console.error("Error while creating ParseObject: ",e)}))},t.readAsText(e[0])},a.state={data:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.storeData,a=e.isAuth,c=e.updateData;if(!a)return r.a.createElement(p.a,{to:"/"});var l=t.map((function(e,t){return r.a.createElement(L,{key:t,dataObject:e,isManager:a,updateData:c})}));return r.a.createElement(n.Fragment,null,r.a.createElement(U.a,{handleFiles:this.handleFiles,fileTypes:".csv"},r.a.createElement(E.a,null,"Load File")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{className:"p-manager"},l))}}]),t}(n.Component),X=Object(p.g)(Z);var W=function(){return r.a.createElement("div",{className:"p-about-container"},"No items found, try a new search with another keywords (bike, gadget, etc...)")},Y=a(262),q=a(94);var H=Object(p.g)((function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),c=a[0],l=a[1],o=e.location.state,s=o.data,i=o.updateBasket;function u(){i([]),l(!0)}if(c)return r.a.createElement(p.a,{to:{pathname:"/store"}});var m=s.reduce((function(e,t){return e+parseFloat(t.originalPrice)*t.quantity}),0);return r.a.createElement(v.a,null,r.a.createElement("br",null),r.a.createElement(b.a,{onSubmit:u},r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Group,{as:q.a,controlId:"formName"},r.a.createElement(b.a.Label,null,"Name"),r.a.createElement(b.a.Control,{type:"text",placeholder:"Enter name"})),r.a.createElement(b.a.Group,{as:q.a,controlId:"formLastName"},r.a.createElement(b.a.Label,null,"Last Name"),r.a.createElement(b.a.Control,{type:"text",placeholder:"Last name"}))),r.a.createElement(b.a.Group,{controlId:"formGridAddress1"},r.a.createElement(b.a.Label,null,"Address"),r.a.createElement(b.a.Control,{placeholder:"1234 Main St"})),r.a.createElement(b.a.Group,{controlId:"formGridAddress2"},r.a.createElement(b.a.Label,null,"Address 2"),r.a.createElement(b.a.Control,{placeholder:"Apartment, studio, or floor"})),r.a.createElement(b.a.Row,null,r.a.createElement(b.a.Group,{as:q.a,controlId:"formGridCity"},r.a.createElement(b.a.Label,null,"City"),r.a.createElement(b.a.Control,null)),r.a.createElement(b.a.Group,{as:q.a,controlId:"formGridZip"},r.a.createElement(b.a.Label,null,"Zip"),r.a.createElement(b.a.Control,null))),r.a.createElement("div",null,"Total sum is: ",m,"$"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Y.PayPalButton,{amount:"0.01",onSuccess:function(e,t){return alert("Transaction completed by "+e.payer.name.given_name),fetch("/paypal-transaction-complete",{method:"post",body:JSON.stringify({orderID:t.orderID})})}}),r.a.createElement(E.a,{variant:"danger",onClick:u,block:!0},"Warning!!! Clicking here will clear the basket and take you to main page")))})),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addItem=function(e,t){a.setState({basket:a.state.basket.concat(t)})},a.isAuthenticated=function(e){a.setState({isAuthenticated:e})},a.updateBasket=function(e){a.setState({basket:e})},a.updateItem=function(e,t){var n=a.state.storeData;switch(e.target.name){case"delete":console.log("removing item from the store"+t),n.splice(n.indexOf(t),1);break;case"edit":console.log("editing item"+t)}a.setState({storeData:n})},a.logout=function(){a.setState({isAuthenticated:!1})},a.state={storeData:[],basket:[],isAuthenticated:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=Object.getOwnPropertyNames(new J),t=A.a.Object.extend("FDObjectModel",null,e),(a=new A.a.Query(t)).limit=1e3,c.next=6,s.a.awrap(a.find().then((function(e){if("undefined"!==typeof document)return e}),(function(e){if("undefined"!==typeof document)return console.error("Error while fetching FDObjectModel",e),[]})));case 6:n=c.sent,r=n.map((function(e){return new J(e.attributes)})),this.setState({storeData:r});case 9:case"end":return c.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.state,a=t.storeData,c=t.basket,l=this.state.basket.length;return r.a.createElement(n.Fragment,null,r.a.createElement(B,{numOfSelectedItems:l,basket:this.state.basket,isAuth:this.state.isAuthenticated,handleLogout:this.logout}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(f,Object.assign({},e,{searchData:a}))}}),r.a.createElement(p.b,{exact:!0,path:"/store",render:function(t){return r.a.createElement(F,Object.assign({},t,{storeData:a,addItemToBasket:e.addItem,basket:c}))}}),r.a.createElement(p.b,{exact:!0,path:"/store/search?:searchText",render:function(t){return r.a.createElement(F,Object.assign({},t,{storeData:a,addItemToBasket:e.addItem,basket:c}))}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(O,Object.assign({},t,{isAuth:e.isAuthenticated}))},storeData:a}),r.a.createElement(p.b,{exact:!0,path:"/basket",render:function(t){return r.a.createElement(K,Object.assign({},t,{basket:c,updateBasket:e.updateBasket}))}}),r.a.createElement(p.b,{exact:!0,path:"/manager",render:function(t){return r.a.createElement(X,Object.assign({},t,{storeData:a,isAuth:e.state.isAuthenticated,updateData:e.updateItem}))}}),r.a.createElement(p.b,{exact:!0,path:"/about",component:j}),r.a.createElement(p.b,{exact:!0,path:"/empty",render:function(e){return r.a.createElement(W,e)}}),r.a.createElement(p.b,{exact:!0,path:"/checkout",render:function(e){return r.a.createElement(H,e)}})))}}]),t}(n.Component),z=Object(p.g)(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));A.a.serverURL="https://parseapi.back4app.com",A.a.initialize("LZLxqqmf8QrOsF2rSZcmXr71VCM6h6YDBeIAvQnN","DN4sDSO2hjOyYfGNa0tlOPB7DGl7T6tgrzg2A1BB"),l.a.render(r.a.createElement(I.a,{basename:"https://comradem.github.io/feesdale"},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[263,1,2]]]);
//# sourceMappingURL=main.52806e42.chunk.js.map
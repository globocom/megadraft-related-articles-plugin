!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Megadraft")):"function"==typeof define&&define.amd?define(["React","Megadraft"],t):"object"==typeof exports?exports.megadraft_related_articles=t(require("React"),require("Megadraft")):e.megadraft_related_articles=t(e.React,e.Megadraft)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=r(o);t["default"]=a["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=r(o),i=n(8),l=r(i),u=n(7),c=r(u);t["default"]={type:c["default"].PLUGIN_TYPE,buttonComponent:a["default"],blockComponent:l["default"],options:{displayOptions:[],defaultDisplay:null}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(4),c=r(u),f=n(5),s=n(6),p=r(s),d=n(7),h=r(d),y=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.onClick=n.onClick.bind(n),n}return i(t,e),l(t,[{key:"onClick",value:function(e){var t={articles:[{key:f.DraftJS.genKey()}],type:h["default"].PLUGIN_TYPE};this.props.onChange((0,f.insertDataBlock)(this.props.editorState,t))}},{key:"render",value:function(){return c["default"].createElement("button",{className:this.props.className,type:"button",onClick:this.onClick},c["default"].createElement(p["default"],{className:"sidemenu__button__icon"}))}}]),t}(u.Component);t["default"]=y},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),s=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("svg",l({},this.props,{width:"24",height:"24",viewBox:"0 0 24 24"}),f["default"].createElement("g",{fill:"none",fillRule:"evenodd"},f["default"].createElement("path",{d:"M0 0h24v24H0z"}),f["default"].createElement("path",{d:"M14.485 18l-2.657 2.657L9.172 18H5.778C4.8 18 4 17.4 4 16.667V7.333C4 6.6 4.8 6 5.778 6h12.444C19.2 6 20 6.6 20 7.333v9.334C20 17.4 19.2 18 18.222 18h-3.737zM8 11h3v2H8v-2zm5 0h3v2h-3v-2zm-2-3h2v8h-2V8z",fill:"currentColor"})))}}]),t}(f["default"].Component);t["default"]=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={PLUGIN_TYPE:"related-articles"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),s=n(5),p=n(9),d=r(p),h=s.MegadraftPlugin.BlockContent,y=s.MegadraftPlugin.CommonBlock,b=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._handleAddAnotherClick=n._handleAddAnotherClick.bind(n),n.updateArticle=n.updateArticle.bind(n),n.removeArticle=n.removeArticle.bind(n),n.actions=[{key:"delete",icon:s.MegadraftIcons.DeleteIcon,action:n.props.container.remove}],n}return i(t,e),u(t,[{key:"_handleAddAnotherClick",value:function(e){e.preventDefault(),this.props.container.updateData({articles:this.props.data.articles.concat({key:s.DraftJS.genKey()})})}},{key:"updateArticle",value:function(e,t,n){var r=!0,o=!1,a=void 0;try{for(var i,l=this.props.data.articles[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){var u=i.value;u.key===e&&(u[t]=n)}}catch(c){o=!0,a=c}finally{try{!r&&l["return"]&&l["return"]()}finally{if(o)throw a}}this.props.container.updateData({articles:this.props.data.articles})}},{key:"removeArticle",value:function(e){var t=Array(),n=!0,r=!1,o=void 0;try{for(var a,i=this.props.data.articles[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var l=a.value;l.key!==e&&t.push(l)}}catch(u){r=!0,o=u}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw o}}this.props.container.updateData({articles:t})}},{key:"render",value:function(){var e=this;return f["default"].createElement(y,l({},this.props,{actions:this.actions}),f["default"].createElement(h,{className:"with-padding"},this.props.data.articles.map(function(t){return f["default"].createElement(d["default"],l({key:t.key,item:t,updateArticle:e.updateArticle,removeArticle:e.removeArticle},e.props))}),f["default"].createElement("div",{className:"related-articles__add-new-wrapper"},f["default"].createElement("a",{href:"#",onClick:this._handleAddAnotherClick,className:"related-articles__add-new"},"Add another link"))))}}]),t}(c.Component);t["default"]=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(4),c=r(u),f=n(5),s=f.MegadraftPlugin.BlockInput,p=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n._handleTitleChange=n._handleTitleChange.bind(n),n._handleLinkChange=n._handleLinkChange.bind(n),n._handleDeleteClick=n._handleDeleteClick.bind(n),n}return i(t,e),l(t,[{key:"_handleTitleChange",value:function(e){this.props.updateArticle(this.props.item.key,"title",e.target.value)}},{key:"_handleLinkChange",value:function(e){this.props.updateArticle(this.props.item.key,"link",e.target.value)}},{key:"_handleDeleteClick",value:function(e){this.props.removeArticle(this.props.item.key)}},{key:"render",value:function(){return c["default"].createElement("div",{className:"related-articles"},c["default"].createElement("div",{className:"related-articles__inputs"},c["default"].createElement(s,{placeholder:"Title",styles:{padding:"small",text:"big"},value:this.props.item.title,onChange:this._handleTitleChange}),c["default"].createElement(s,{placeholder:"Link",value:this.props.item.link,styles:{padding:"small"},onChange:this._handleLinkChange})),c["default"].createElement("div",{className:"related-articles__trash",onClick:this._handleDeleteClick},c["default"].createElement(f.MegadraftIcons.DeleteIcon,null)))}}]),t}(u.Component);t["default"]=p}])});
//# sourceMappingURL=megadraft_related_articles.js.map
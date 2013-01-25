(function(e,t){var n={version:[2013,1,24,15,26],newerThan:function(e){var t="version";v1=this[t],v2=e[t],len=v1.length;for(var n=0;n<len;n++){if(v1[n]>v2[n]){return true}}return false}};if(e["Toolkit"]&&e["Toolkit"].newerThan(n))return;(function(e){e.append=function(e,t){this[e]=t}})(n);e["Toolkit"]=n;e.exists=function(e){return function(t){return t!==e&&t!==null}}();e.create=function(e,n,r){var i=t.createElement(e);if(typeof n=="object"){for(property in n){if(Object.hasOwnProperty(n,property))continue;i.setAttribute(property,n[property])}}if(typeof n==="string"){r=n}if(r){i.innerHTML=r}return i};var r=function(e,t){var n=e.querySelectorAll(t),r=[];if(n.length==0){return[]}if(n.length==1){return n[0]}for(var i=0,s=n.length;i<s;i++){r[i]=n[i]}return r};e.find=function(e){return r(t,e)};var i="内のclasses";var s=function(e){this.owner=e;var t=e.getAttribute("class");this.classes=!t?[]:t.split(/\s+/)};s.prototype={classes:[],update:function(){if(this.classes.length===0){this.owner.removeAttribute("class")}else{this.owner.setAttribute("class",this.classes.join(" "))}},add:function(e){if(this.classes.indexOf(e)===-1){this.classes.push(e)}this.update();return this.owner},remove:function(e){var t=this.classes.indexOf(e);if(t>-1){this.classes.splice(t,1);this.update()}return this.owner},contains:function(e){return this.classes.indexOf(e)!==-1}};(function(e){e.pushUnique=function(e){if(this.indexOf(e)===-1){this.push(e)}};e.test=function(e){var t,n=this.length;for(t=0;t<n;t++){if(e(this[t]))return true}return false};e["元のforEach"]=e.forEach;e.forEach=function(e){this["元のforEach"](e);return this};e.classes=function(){if(!this[i]){this[i]={};var e=this;["add","remove"].forEach(function(t){e[i][t]=function(){var n=arguments,r;e.forEach(function(e){r=e.classes();r[t].apply(r,n)});return e}});this[i].contains=function(){var t=arguments,n;return e.test(function(e){n=e.classes();return n.contains.apply(n,t)})}}return this[i]};e.find=function(e){var t=[];this.forEach(function(n){n.find(e).forEach(function(e){t.pushUnique(e)})});return t};e.parent=function(){var e=[];this.forEach(function(t){e.pushUnique(t.parent())});return e};e.html=function(e){var t="";this.forEach(function(e){t+=e.html()});return t};e.css=function(){var e=false;input=arguments;this.forEach(function(t){e=t.css.apply(t,input)});return typeof e==="string"?e:this};["position","add","replace","get"].forEach(function(t){e[t]=function(){var e=this[0];return e[t].apply(e,arguments)}});["show","toggle","set","remove","clear","listen","listenOnce"].forEach(function(t){e[t]=function(){var e=arguments;this.map(function(n){n[t].apply(n,e)});return this}})})(Array.prototype);(function(e,t){e.forEach=function(e){e(this);return this};e.find=function(e){return t(this,e)};e.css=function(e,t){if(typeof t==="string"){this.style[e]=t;if(this.get("style")===""){this.set("style","")}return this}if(!t&&typeof e==="object"){for(p in e){if(Object.hasOwnProperty(e,p))continue;this.css(p,e[p])}return this}return getComputedStyle(this).getPropertyValue(e)||this.style[e]};e.position=function(){return this.getBoundingClientRect()};e.classes=function(){if(!this[i]){this[i]=new s(this)}return this[i]};e.show=function(e){if(e){this.removeAttribute(o)}else{this.setAttribute(o,"")}return this};e.toggle=function(){this.show(exists(this.get(o)));return this};e.html=function(e){if(exists(e)){this.innerHTML=e;return this}return this.innerHTML};e.parent=function(){return this.parentNode};e.add=function(){for(var e=0,t=arguments.length;e<t;e++){if(exists(arguments[e])){this.appendChild(arguments[e])}}return this};e.replace=function(e,t){if(exists(e.parentNode)&&exists(t)){e.parentNode.replaceChild(t,e);return t}this.parentNode.replaceChild(e,this);return e};e.remove=function(e){if(!e){this.parentNode.removeChild(this)}if(parseInt(e)==e){this.removeChild(this.children[cid])}else{this.removeChild(e)}return this};e.clear=function(){while(this.children.length>0){this.remove(this.get(0))}return this};e.get=function(e){if(e==parseInt(e)){return this.children[e]}return this.getAttribute(e)};e.set=function(e,t){if(!exists(t)){for(prop in e){if(!Object.hasOwnProperty(e,prop)){this.setAttribute(prop,e[prop])}}}else if(t===""){this.removeAttribute(e)}else{this.setAttribute(e,t)}return this};e.eventListeners=false;e.recordEventListener=function(e,t){if(!this.eventListeners){this.eventListeners={}}if(!this.eventListeners[e]){this.eventListeners[e]=[]}this.eventListeners[e].push(t)};e.listen=function(e,t,n){this.addEventListener(e,t,n|false);this.recordEventListener(e,t);return this};e.listenOnce=function(e,t,n){var r=this,i=function(){r.removeEventListener(e,i,n|false);t.call()};this.addEventListener(e,i,n|false);return this}})(HTMLElement.prototype,r);var o="data-tiny-toolkit-hidden";(function(e){var n=["display:none!important","visibility:hidden!important","opacity:0!important"],r="*["+e+"]{"+n.join(";")+"}",i=create("style",{type:"text/css"},r);t.head.add(i)})(o)}(window,document));

var global=function(e){function t(){var e,t,i,s;e=Date.now(),t=e-l,l=e,i=this.newOverviewPosition-c,c=this.newOverviewPosition,s=1e3*i/(1+t),n=.8*s+.2*n}function i(e,t){return 0>e?0:e>t?t:e}function s(e){for(var t=0;t<e.length;t++)if("undefined"!=typeof document.body.style[e[t]])return e[t];return null}var o,n,r,l,a,u,h=500,c=0,m=function(e,t){Object.defineProperties(this,{_element:{value:e},_viewPort:{value:document.createElement("div")},_overview:{value:document.createElement("div")},_scrollbarTrack:{value:document.createElement("div")},_thumb:{value:document.createElement("div")},touchScrollSpeed:{value:t.touchScrollSpeed||1},mouseWheelSpeed:{value:t.mouseWheelSpeed||.5,writable:!0},customThumbHeight:{value:t.customThumbHeight||void 0},preventDefaultScroll:{value:t.preventDefaultScroll||!1},_updateOnWindowResize:{value:t.updateOnWindowResize||!0},_measurements:{value:{}},_enabled:{value:!1,writable:!0}}),this.newThumbPosition=0,this.newOverviewPosition=0,this.thumbPosition=0,this.overviewPosition=0,this.frameRequested=!1,this._element.classList.add("scrollable"),this._viewPort.classList.add("viewport"),this._overview.classList.add("overview"),this._scrollbarTrack.classList.add("scrollbar-track"),this._thumb.classList.add("thumb");var i=document.createDocumentFragment();i.appendChild(this._scrollbarTrack),this._scrollbarTrack.appendChild(this._thumb),i.appendChild(this._viewPort),this._viewPort.appendChild(this._overview);for(var s=this._element.children;s.length;)this._overview.appendChild(s[0]);this._element.appendChild(i),this._checkOverflow(),this._calculateHeights(),this._enabled||this._scrollbarTrack.classList.add("display-none"),this._setScrollPosition(),this._initScrollingByThumbMousemove(),this._initMouseWheelScrolling(),"ontouchstart"in window&&(this._initTouchScrolling(),this._initScrollingByThumbTouchmove()),"onpointerdown"in window&&this._initPointerScrolling(),this._updateOnWindowResize&&this._initWindowResize()};Object.defineProperties(m.prototype,{_setScrollPosition:{value:function(){"msTransform"===_?(this._thumb.style[_]="translateY("+this.newThumbPosition+"px)",this._overview.style[_]="translateY("+-this.newOverviewPosition+"px)"):(this._thumb.style[_]="translateY("+this.newThumbPosition+"px) translateZ(0)",this._overview.style[_]="translateY("+-this.newOverviewPosition+"px) translateZ(0)"),this.thumbPosition=parseInt(this._thumb.style[_].slice(11),10),this.overviewPosition=-parseInt(this._overview.style[_].slice(11)),this.frameRequested=!1}},_calculateHeights:{value:function(){this._measurements.ratio=this._measurements.viewPortHeight/this._measurements.overviewHeight,this._measurements.thumbHeight=this._calculateThumbHeight(),this._measurements.maxThumbPosition=this._calculateMaxThumbPosition(),this._measurements.maxOverviewPosition=this._calculateMaxOverviewPosition(),this._thumb.style.height=this._measurements.thumbHeight+"px",void 0===this._measurements.scrollPercent&&(this._measurements.scrollPercent=0)}},_checkOverflow:{value:function(){this._measurements.viewPortHeight=this._element.clientHeight-parseInt(getComputedStyle(this._element).paddingTop),this._measurements.overviewHeight=this._overview.scrollHeight,this._enabled=this._measurements.overviewHeight>this._measurements.viewPortHeight}},resize:{value:function(){cancelAnimationFrame(o),this._checkOverflow(),this._enabled?(this._calculateHeights(),this._scrollbarTrack.classList.remove("display-none")):(this._scrollbarTrack.classList.add("display-none"),this.scrollOverviewTo(0))},enumerable:!0},_calculateThumbHeight:{value:function(){var e=this.customThumbHeight?this.customThumbHeight:this._measurements.ratio*this._measurements.viewPortHeight;return e}},_calculateMaxThumbPosition:{value:function(){return Math.max(0,this._measurements.viewPortHeight-this._measurements.thumbHeight)}},_calculateMaxOverviewPosition:{value:function(){return Math.max(0,this._measurements.overviewHeight-this._measurements.viewPortHeight)}},_initScrollingByThumbMousemove:{value:function(){var e,t=this,i=!1,s=function(e){t._scrollByThumbMousemove(e)};this._thumb.addEventListener("mousedown",function(o){t._enabled&&(t._startScrollingByThumbMousemove(o),document.addEventListener("mousemove",s),i=!0,t._thumb.classList.add("scroll-active"),e&&clearTimeout(e))}),document.addEventListener("mouseup",function(){i&&(i=!1,document.removeEventListener("mousemove",s),e=setTimeout(function(){t._thumb.classList.remove("scroll-active")},h))}),this._thumb.addEventListener("click",function(e){e.stopPropagation()})}},_startScrollingByThumbMousemove:{value:function(e){e.preventDefault(),this.lastY=e.pageY}},_scrollByThumbMousemove:{value:function(e){var t=e.pageY-this.lastY;this._scrollTumbBy(t),this.lastY=e.pageY}},_initScrollingByThumbTouchmove:{value:function(){var e,t=this,i=!1,s=function(e){t._scrollByThumbTouchmove(e)};this._thumb.addEventListener("touchstart",function(o){t._enabled&&(t._startScrollingByThumbTouchmove(o),document.addEventListener("touchmove",s),i=!0,t._thumb.classList.add("scroll-active"),e&&clearTimeout(e))}),document.addEventListener("touchend",function(){i&&(i=!1,document.removeEventListener("touchmove",s),e=setTimeout(function(){t._thumb.classList.remove("scroll-active")},h))})}},_startScrollingByThumbTouchmove:{value:function(e){e.preventDefault(),this.lastY=e.changedTouches[0].pageY}},_scrollByThumbTouchmove:{value:function(e){var t=e.changedTouches[0].pageY-this.lastY;this._scrollTumbBy(t),this.lastY=e.changedTouches[0].pageY}},_scrollTumbBy:{value:function(e){this.thumbPosition+=e,this.thumbPosition=i(this.thumbPosition,this._measurements.maxThumbPosition);this._measurements.scrollPercent;return this._measurements.scrollPercent=this.thumbPosition/this._measurements.maxThumbPosition,this.newThumbPosition=this.thumbPosition,this.newOverviewPosition=this._measurements.scrollPercent*this._measurements.maxOverviewPosition,this.frameRequested||(requestAnimationFrame(this._setScrollPosition.bind(this)),this.frameRequested=!0),!0}},_initMouseWheelScrolling:{value:function(){var e,t=this;"onwheel"in document?this._element.addEventListener("wheel",function(i){if(t._enabled){var s=t._mouseWheelScroll(i.deltaY);t._stopEventConditionally(i,s),1==i.deltaMode&&(t.mouseWheelSpeed=8),t._thumb.classList.add("scroll-active"),e&&clearTimeout(e),e=setTimeout(function(){t._thumb.classList.remove("scroll-active")},h),i.stopPropagation()}}):"onmousewheel"in document&&this._element.addEventListener("mousewheel",function(i){if(t._enabled){t.mouseWheelSpeed=.15;var s=t._mouseWheelScroll(-i.wheelDelta);t._stopEventConditionally(i,s),t._thumb.classList.add("scroll-active"),e&&clearTimeout(e),e=setTimeout(function(){t._thumb.classList.remove("scroll-active")},h)}})}},_mouseWheelScroll:{value:function(e){var t=e*this.mouseWheelSpeed;return 0!==t?this._scrollOverviewBy(t):void 0}},_scrollOverviewBy:{value:function(e){return this.overviewPosition+=e,this.scrollOverviewTo(this.overviewPosition)}},scrollOverviewTo:{value:function(e){e=i(e,this._measurements.maxOverviewPosition);var t=this._measurements.scrollPercent;if(this._measurements.scrollPercent=e/this._measurements.maxOverviewPosition,t!=this._measurements.scrollPercent){var s=this._measurements.scrollPercent*this._measurements.maxThumbPosition;return this.newThumbPosition=s,this.newOverviewPosition=e,this.frameRequested||(requestAnimationFrame(this._setScrollPosition.bind(this)),this.frameRequested=!0),!0}return this.overviewPosition=i(this.overviewPosition,this._measurements.maxOverviewPosition),!1},enumerable:!0},_stopEventConditionally:{value:function(e,t){(t||this.preventDefaultScroll)&&(e.preventDefault(),e.stopPropagation())}},_initTouchScrolling:{value:function(){var e,t=this;this._overview.addEventListener("touchstart",function(i){t._enabled&&(t._startTouchScrolling(i),t._thumb.classList.add("scroll-active"),e&&clearTimeout(e))}),this._overview.addEventListener("touchmove",function(e){t._touchScroll(e)}),this._overview.addEventListener("touchend",function(i){t._stopTouchScrolling(i),e=setTimeout(function(){t._thumb.classList.remove("scroll-active")},h)})}},_startTouchScrolling:{value:function(e){e.changedTouches&&(this.lastY=e.changedTouches[0].pageY,this._touchScrolling=!0,n=r=0,c=this.newOverviewPosition,l=Date.now(),clearInterval(a),a=setInterval(t,48))}},_touchScroll:{value:function(e){if(this._touchScrolling&&e.changedTouches){var t=(this.lastY-e.changedTouches[0].pageY)*this.touchScrollSpeed;if(0!==t){var i=this._scrollOverviewBy(t);i&&(this.lastY=e.changedTouches[0].pageY),this._stopEventConditionally(e,i)}}}},_stopTouchScrolling:{value:function(e){this._touchScrolling&&(clearInterval(a),(n>10||-10>n)&&(r=.8*n,u=Math.round(this.newOverviewPosition+r),l=Date.now(),o=requestAnimationFrame(this._autoScroll.bind(this)))),this._touchScrolling=!1}},_autoScroll:{value:function(){var e,t,i=325;r&&(e=Date.now()-l,t=-r*Math.exp(-e/i),t>.5||-.5>t?(this.scrollOverviewTo(u+t),o=requestAnimationFrame(this._autoScroll.bind(this))):this.scrollOverviewTo(u))}},_initPointerScrolling:{value:function(){var e=this,t=function(t){e._pointerScroll(t)};this._overview.addEventListener("pointerdown",function(i){e._enabled&&(e._startPointerScrolling(i),document.addEventListener("pointermove",t),e._thumb.classList.add("scroll-active"),timer&&clearTimeout(timer))}),this._overview.addEventListener("pointerup",function(i){e._stopPointerScrolling(i),document.removeEventListener("pointermove",t),timer=setTimeout(function(){e._thumb.classList.remove("scroll-active")})})}},_startPointerScrolling:{value:function(e){this.lastY=e.pageY,this._pointerScrolling=!0}},_pointerScroll:{value:function(e){if(this._pointerScrolling){var t=(this.lastY-e.pageY)*this.touchScrollSpeed,i=this._scrollOverviewBy(t);i&&(this.lastY=e.pageY)}}},_stopPointerScrolling:{value:function(e){this._pointerScrolling=!1}},_initWindowResize:{value:function(){var e=this;this.windowResize=function(){e._checkOverflow(),e._enabled?(e._calculateHeights(),e._keepScrollPosition(),e._scrollbarTrack.classList.remove("display-none")):(e._calculateHeights(),e._scrollbarTrack.classList.add("display-none"),e.scrollOverviewTo(0))},window.addEventListener("resize",this.windowResize)}},_keepScrollPosition:{value:function(){var e=this._measurements.scrollPercent*this._measurements.maxThumbPosition,t=this._measurements.scrollPercent*this._measurements.maxOverviewPosition;this.newOverviewPosition=t,this.newThumbPosition=e,this.frameRequested||(requestAnimationFrame(this._setScrollPosition.bind(this)),this.frameRequested=!0)}}});var v=["transform","msTransform","webkitTransform","mozTransform","oTransform"],_=s(v);return e.createScrollbar=function(e,t){return new m(e,t)},e}(global||{});
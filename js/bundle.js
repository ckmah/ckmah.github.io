/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});
if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * jQuery Smooth Scroll - v1.7.2 - 2016-01-23
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2016 Karl Swedberg
 * Licensed MIT
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){var b="1.7.2",c={},d={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},e=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c};a.fn.extend({scrollable:function(a){var b=e.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=e.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b,c){if(b=b||{},"options"===b)return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{},c);a(this).data("ssOpts",d)}):this.first().data("ssOpts");var d=a.extend({},a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")},e=this,f=a(this),g=a.extend({},d,f.data("ssOpts")||{}),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={},n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}),a.smoothScroll(m))};return null!==b.delegateSelector?this.undelegate(b.delegateSelector,"click.smoothscroll").delegate(b.delegateSelector,"click.smoothscroll",e):this.unbind("click.smoothscroll").bind("click.smoothscroll",e),this}}),a.smoothScroll=function(b,d){if("options"===b&&"object"==typeof d)return a.extend(c,d);var e,f,g,h,i,j=0,k="offset",l="scrollTop",m={},n={};"number"==typeof b?(e=a.extend({link:null},a.fn.smoothScroll.defaults,c),g=b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,b||{},c),e.scrollElement&&(k="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative"))),l="left"===e.direction?"scrollLeft":l,e.scrollElement?(f=e.scrollElement,/^(?:HTML|BODY)$/.test(f[0].nodeName)||(j=f[l]())):f=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(f,e),g="number"==typeof b?b:d||a(e.scrollTarget)[k]()&&a(e.scrollTarget)[k]()[e.direction]||0,m[l]=g+j+e.offset,h=e.speed,"auto"===h&&(i=Math.abs(m[l]-f[l]()),h=i/e.autoCoefficient),n={duration:h,easing:e.easing,complete:function(){e.afterScroll.call(e.link,e)}},e.step&&(n.step=e.step),f.length?f.stop().animate(m,n):e.afterScroll.call(e.link,e)},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=d});
/*!
 *
 *  Static Website Starter Kit
 *  Copyright 2015 Konstantin Tarkus, Kriasoft LLC. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function() {
  'use strict';
  $('a').smoothScroll();
  $(window).scroll(function() {
    var $navbar = $('#navbar');
    if ($navbar.offset().top > $(window).height()) {
      $navbar.addClass('scrolled-nav');
    } else {
      $navbar.removeClass('scrolled-nav');
    }
  });
})();

// particlesJS.load('particles-js', '../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
/*!
 *
 *  Static Website Starter Kit
 *  Copyright 2015 Konstantin Tarkus, Kriasoft LLC. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// Avoid `console` errors in browsers that lack a console.
(function() {
  'use strict';

  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5taW4uanMiLCJqcXVlcnkuc21vb3RoLXNjcm9sbC5taW4uanMiLCJtYWluLmpzIiwicGFydGljbGVzLmpzIiwicGx1Z2lucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIEJvb3RzdHJhcCB2My4zLjQgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxyXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE1IFR3aXR0ZXIsIEluYy5cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnlcIik7K2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWEuZm4uanF1ZXJ5LnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIi5cIik7aWYoYlswXTwyJiZiWzFdPDl8fDE9PWJbMF0mJjk9PWJbMV0mJmJbMl08MSl0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeSB2ZXJzaW9uIDEuOS4xIG9yIGhpZ2hlclwiKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib290c3RyYXBcIiksYj17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifTtmb3IodmFyIGMgaW4gYilpZih2b2lkIDAhPT1hLnN0eWxlW2NdKXJldHVybntlbmQ6YltjXX07cmV0dXJuITF9YS5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihiKXt2YXIgYz0hMSxkPXRoaXM7YSh0aGlzKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2M9ITB9KTt2YXIgZT1mdW5jdGlvbigpe2N8fGEoZCkudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpfTtyZXR1cm4gc2V0VGltZW91dChlLGIpLHRoaXN9LGEoZnVuY3Rpb24oKXthLnN1cHBvcnQudHJhbnNpdGlvbj1iKCksYS5zdXBwb3J0LnRyYW5zaXRpb24mJihhLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kPXtiaW5kVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsZGVsZWdhdGVUeXBlOmEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxoYW5kbGU6ZnVuY3Rpb24oYil7cmV0dXJuIGEoYi50YXJnZXQpLmlzKHRoaXMpP2IuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH19KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuYWxlcnRcIik7ZXx8Yy5kYXRhKFwiYnMuYWxlcnRcIixlPW5ldyBkKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXS5jYWxsKGMpfSl9dmFyIGM9J1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsZD1mdW5jdGlvbihiKXthKGIpLm9uKFwiY2xpY2tcIixjLHRoaXMuY2xvc2UpfTtkLlZFUlNJT049XCIzLjMuNFwiLGQuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsZC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2cuZGV0YWNoKCkudHJpZ2dlcihcImNsb3NlZC5icy5hbGVydFwiKS5yZW1vdmUoKX12YXIgZT1hKHRoaXMpLGY9ZS5hdHRyKFwiZGF0YS10YXJnZXRcIik7Znx8KGY9ZS5hdHRyKFwiaHJlZlwiKSxmPWYmJmYucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGc9YShmKTtiJiZiLnByZXZlbnREZWZhdWx0KCksZy5sZW5ndGh8fChnPWUuY2xvc2VzdChcIi5hbGVydFwiKSksZy50cmlnZ2VyKGI9YS5FdmVudChcImNsb3NlLmJzLmFsZXJ0XCIpKSxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZy5yZW1vdmVDbGFzcyhcImluXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZnLmhhc0NsYXNzKFwiZmFkZVwiKT9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGMpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTik6YygpKX07dmFyIGU9YS5mbi5hbGVydDthLmZuLmFsZXJ0PWIsYS5mbi5hbGVydC5Db25zdHJ1Y3Rvcj1kLGEuZm4uYWxlcnQubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFsZXJ0PWUsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5hbGVydC5kYXRhLWFwaVwiLGMsZC5wcm90b3R5cGUuY2xvc2UpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYnV0dG9uXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7ZXx8ZC5kYXRhKFwiYnMuYnV0dG9uXCIsZT1uZXcgYyh0aGlzLGYpKSxcInRvZ2dsZVwiPT1iP2UudG9nZ2xlKCk6YiYmZS5zZXRTdGF0ZShiKX0pfXZhciBjPWZ1bmN0aW9uKGIsZCl7dGhpcy4kZWxlbWVudD1hKGIpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQpLHRoaXMuaXNMb2FkaW5nPSExfTtjLlZFUlNJT049XCIzLjMuNFwiLGMuREVGQVVMVFM9e2xvYWRpbmdUZXh0OlwibG9hZGluZy4uLlwifSxjLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihiKXt2YXIgYz1cImRpc2FibGVkXCIsZD10aGlzLiRlbGVtZW50LGU9ZC5pcyhcImlucHV0XCIpP1widmFsXCI6XCJodG1sXCIsZj1kLmRhdGEoKTtiKz1cIlRleHRcIixudWxsPT1mLnJlc2V0VGV4dCYmZC5kYXRhKFwicmVzZXRUZXh0XCIsZFtlXSgpKSxzZXRUaW1lb3V0KGEucHJveHkoZnVuY3Rpb24oKXtkW2VdKG51bGw9PWZbYl0/dGhpcy5vcHRpb25zW2JdOmZbYl0pLFwibG9hZGluZ1RleHRcIj09Yj8odGhpcy5pc0xvYWRpbmc9ITAsZC5hZGRDbGFzcyhjKS5hdHRyKGMsYykpOnRoaXMuaXNMb2FkaW5nJiYodGhpcy5pc0xvYWRpbmc9ITEsZC5yZW1vdmVDbGFzcyhjKS5yZW1vdmVBdHRyKGMpKX0sdGhpcyksMCl9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3ZhciBhPSEwLGI9dGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyk7aWYoYi5sZW5ndGgpe3ZhciBjPXRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpO1wicmFkaW9cIj09Yy5wcm9wKFwidHlwZVwiKSYmKGMucHJvcChcImNoZWNrZWRcIikmJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIik/YT0hMTpiLmZpbmQoXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpKSxhJiZjLnByb3AoXCJjaGVja2VkXCIsIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIil9ZWxzZSB0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLXByZXNzZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSk7YSYmdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5idXR0b247YS5mbi5idXR0b249YixhLmZuLmJ1dHRvbi5Db25zdHJ1Y3Rvcj1jLGEuZm4uYnV0dG9uLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5idXR0b249ZCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KTtkLmhhc0NsYXNzKFwiYnRuXCIpfHwoZD1kLmNsb3Nlc3QoXCIuYnRuXCIpKSxiLmNhbGwoZCxcInRvZ2dsZVwiKSxjLnByZXZlbnREZWZhdWx0KCl9KS5vbihcImZvY3VzLmJzLmJ1dHRvbi5kYXRhLWFwaSBibHVyLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihiKXthKGIudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0blwiKS50b2dnbGVDbGFzcyhcImZvY3VzXCIsL15mb2N1cyhpbik/JC8udGVzdChiLnR5cGUpKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIiksZj1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxnPVwic3RyaW5nXCI9PXR5cGVvZiBiP2I6Zi5zbGlkZTtlfHxkLmRhdGEoXCJicy5jYXJvdXNlbFwiLGU9bmV3IGModGhpcyxmKSksXCJudW1iZXJcIj09dHlwZW9mIGI/ZS50byhiKTpnP2VbZ10oKTpmLmludGVydmFsJiZlLnBhdXNlKCkuY3ljbGUoKX0pfXZhciBjPWZ1bmN0aW9uKGIsYyl7dGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuJGluZGljYXRvcnM9dGhpcy4kZWxlbWVudC5maW5kKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIiksdGhpcy5vcHRpb25zPWMsdGhpcy5wYXVzZWQ9bnVsbCx0aGlzLnNsaWRpbmc9bnVsbCx0aGlzLmludGVydmFsPW51bGwsdGhpcy4kYWN0aXZlPW51bGwsdGhpcy4kaXRlbXM9bnVsbCx0aGlzLm9wdGlvbnMua2V5Ym9hcmQmJnRoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLmtleWRvd24sdGhpcykpLFwiaG92ZXJcIj09dGhpcy5vcHRpb25zLnBhdXNlJiYhKFwib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpJiZ0aGlzLiRlbGVtZW50Lm9uKFwibW91c2VlbnRlci5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5wYXVzZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLmN5Y2xlLHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4zLjRcIixjLlRSQU5TSVRJT05fRFVSQVRJT049NjAwLGMuREVGQVVMVFM9e2ludGVydmFsOjVlMyxwYXVzZTpcImhvdmVyXCIsd3JhcDohMCxrZXlib2FyZDohMH0sYy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihhKXtpZighL2lucHV0fHRleHRhcmVhL2kudGVzdChhLnRhcmdldC50YWdOYW1lKSl7c3dpdGNoKGEud2hpY2gpe2Nhc2UgMzc6dGhpcy5wcmV2KCk7YnJlYWs7Y2FzZSAzOTp0aGlzLm5leHQoKTticmVhaztkZWZhdWx0OnJldHVybn1hLnByZXZlbnREZWZhdWx0KCl9fSxjLnByb3RvdHlwZS5jeWNsZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSExKSx0aGlzLmludGVydmFsJiZjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCYmIXRoaXMucGF1c2VkJiYodGhpcy5pbnRlcnZhbD1zZXRJbnRlcnZhbChhLnByb3h5KHRoaXMubmV4dCx0aGlzKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpKSx0aGlzfSxjLnByb3RvdHlwZS5nZXRJdGVtSW5kZXg9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuJGl0ZW1zPWEucGFyZW50KCkuY2hpbGRyZW4oXCIuaXRlbVwiKSx0aGlzLiRpdGVtcy5pbmRleChhfHx0aGlzLiRhY3RpdmUpfSxjLnByb3RvdHlwZS5nZXRJdGVtRm9yRGlyZWN0aW9uPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5nZXRJdGVtSW5kZXgoYiksZD1cInByZXZcIj09YSYmMD09PWN8fFwibmV4dFwiPT1hJiZjPT10aGlzLiRpdGVtcy5sZW5ndGgtMTtpZihkJiYhdGhpcy5vcHRpb25zLndyYXApcmV0dXJuIGI7dmFyIGU9XCJwcmV2XCI9PWE/LTE6MSxmPShjK2UpJXRoaXMuJGl0ZW1zLmxlbmd0aDtyZXR1cm4gdGhpcy4kaXRlbXMuZXEoZil9LGMucHJvdG90eXBlLnRvPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz10aGlzLmdldEl0ZW1JbmRleCh0aGlzLiRhY3RpdmU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpKTtyZXR1cm4gYT50aGlzLiRpdGVtcy5sZW5ndGgtMXx8MD5hP3ZvaWQgMDp0aGlzLnNsaWRpbmc/dGhpcy4kZWxlbWVudC5vbmUoXCJzbGlkLmJzLmNhcm91c2VsXCIsZnVuY3Rpb24oKXtiLnRvKGEpfSk6Yz09YT90aGlzLnBhdXNlKCkuY3ljbGUoKTp0aGlzLnNsaWRlKGE+Yz9cIm5leHRcIjpcInByZXZcIix0aGlzLiRpdGVtcy5lcShhKSl9LGMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITApLHRoaXMuJGVsZW1lbnQuZmluZChcIi5uZXh0LCAucHJldlwiKS5sZW5ndGgmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksdGhpcy5jeWNsZSghMCkpLHRoaXMuaW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzfSxjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcIm5leHRcIil9LGMucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkaW5nP3ZvaWQgMDp0aGlzLnNsaWRlKFwicHJldlwiKX0sYy5wcm90b3R5cGUuc2xpZGU9ZnVuY3Rpb24oYixkKXt2YXIgZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIiksZj1kfHx0aGlzLmdldEl0ZW1Gb3JEaXJlY3Rpb24oYixlKSxnPXRoaXMuaW50ZXJ2YWwsaD1cIm5leHRcIj09Yj9cImxlZnRcIjpcInJpZ2h0XCIsaT10aGlzO2lmKGYuaGFzQ2xhc3MoXCJhY3RpdmVcIikpcmV0dXJuIHRoaXMuc2xpZGluZz0hMTt2YXIgaj1mWzBdLGs9YS5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihrKSwhay5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYodGhpcy5zbGlkaW5nPSEwLGcmJnRoaXMucGF1c2UoKSx0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCl7dGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgbD1hKHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGlzLmdldEl0ZW1JbmRleChmKV0pO2wmJmwuYWRkQ2xhc3MoXCJhY3RpdmVcIil9dmFyIG09YS5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpqLGRpcmVjdGlvbjpofSk7cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwic2xpZGVcIik/KGYuYWRkQ2xhc3MoYiksZlswXS5vZmZzZXRXaWR0aCxlLmFkZENsYXNzKGgpLGYuYWRkQ2xhc3MoaCksZS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2YucmVtb3ZlQ2xhc3MoW2IsaF0uam9pbihcIiBcIikpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGUucmVtb3ZlQ2xhc3MoW1wiYWN0aXZlXCIsaF0uam9pbihcIiBcIikpLGkuc2xpZGluZz0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS4kZWxlbWVudC50cmlnZ2VyKG0pfSwwKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTikpOihlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy5zbGlkaW5nPSExLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihtKSksZyYmdGhpcy5jeWNsZSgpLHRoaXN9fTt2YXIgZD1hLmZuLmNhcm91c2VsO2EuZm4uY2Fyb3VzZWw9YixhLmZuLmNhcm91c2VsLkNvbnN0cnVjdG9yPWMsYS5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY2Fyb3VzZWw9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXt2YXIgZCxlPWEodGhpcyksZj1hKGUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoZD1lLmF0dHIoXCJocmVmXCIpKSYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKTtpZihmLmhhc0NsYXNzKFwiY2Fyb3VzZWxcIikpe3ZhciBnPWEuZXh0ZW5kKHt9LGYuZGF0YSgpLGUuZGF0YSgpKSxoPWUuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7aCYmKGcuaW50ZXJ2YWw9ITEpLGIuY2FsbChmLGcpLGgmJmYuZGF0YShcImJzLmNhcm91c2VsXCIpLnRvKGgpLGMucHJldmVudERlZmF1bHQoKX19O2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlXVwiLGUpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlLXRvXVwiLGUpLGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpO2IuY2FsbChjLGMuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7dmFyIGMsZD1iLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGM9Yi5hdHRyKFwiaHJlZlwiKSkmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKTtyZXR1cm4gYShkKX1mdW5jdGlvbiBjKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuY29sbGFwc2VcIiksZj1hLmV4dGVuZCh7fSxkLkRFRkFVTFRTLGMuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTshZSYmZi50b2dnbGUmJi9zaG93fGhpZGUvLnRlc3QoYikmJihmLnRvZ2dsZT0hMSksZXx8Yy5kYXRhKFwiYnMuY29sbGFwc2VcIixlPW5ldyBkKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgZD1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjKSx0aGlzLiR0cmlnZ2VyPWEoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJytiLmlkKydcIl0sW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJytiLmlkKydcIl0nKSx0aGlzLnRyYW5zaXRpb25pbmc9bnVsbCx0aGlzLm9wdGlvbnMucGFyZW50P3RoaXMuJHBhcmVudD10aGlzLmdldFBhcmVudCgpOnRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsdGhpcy4kdHJpZ2dlciksdGhpcy5vcHRpb25zLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX07ZC5WRVJTSU9OPVwiMy4zLjRcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MzUwLGQuREVGQVVMVFM9e3RvZ2dsZTohMH0sZC5wcm90b3R5cGUuZGltZW5zaW9uPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcIndpZHRoXCIpO3JldHVybiBhP1wid2lkdGhcIjpcImhlaWdodFwifSxkLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSl7dmFyIGIsZT10aGlzLiRwYXJlbnQmJnRoaXMuJHBhcmVudC5jaGlsZHJlbihcIi5wYW5lbFwiKS5jaGlsZHJlbihcIi5pbiwgLmNvbGxhcHNpbmdcIik7aWYoIShlJiZlLmxlbmd0aCYmKGI9ZS5kYXRhKFwiYnMuY29sbGFwc2VcIiksYiYmYi50cmFuc2l0aW9uaW5nKSkpe3ZhciBmPWEuRXZlbnQoXCJzaG93LmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihmKSwhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7ZSYmZS5sZW5ndGgmJihjLmNhbGwoZSxcImhpZGVcIiksYnx8ZS5kYXRhKFwiYnMuY29sbGFwc2VcIixudWxsKSk7dmFyIGc9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VcIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpW2ddKDApLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRyaWdnZXIucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGg9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpW2ddKFwiXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIGguY2FsbCh0aGlzKTt2YXIgaT1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixnXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGgsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTilbZ10odGhpcy4kZWxlbWVudFswXVtpXSl9fX19LGQucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiPWEuRXZlbnQoXCJoaWRlLmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSwhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGM9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50W2NdKHRoaXMuJGVsZW1lbnRbY10oKSlbMF0ub2Zmc2V0SGVpZ2h0LHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgZT1mdW5jdGlvbigpe3RoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2VcIikudHJpZ2dlcihcImhpZGRlbi5icy5jb2xsYXBzZVwiKX07cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uP3ZvaWQgdGhpcy4kZWxlbWVudFtjXSgwKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGUsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTik6ZS5jYWxsKHRoaXMpfX19LGQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3RoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpP1wiaGlkZVwiOlwic2hvd1wiXSgpfSxkLnByb3RvdHlwZS5nZXRQYXJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLm9wdGlvbnMucGFyZW50KS5maW5kKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIicrdGhpcy5vcHRpb25zLnBhcmVudCsnXCJdJykuZWFjaChhLnByb3h5KGZ1bmN0aW9uKGMsZCl7dmFyIGU9YShkKTt0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhiKGUpLGUpfSx0aGlzKSkuZW5kKCl9LGQucHJvdG90eXBlLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcz1mdW5jdGlvbihhLGIpe3ZhciBjPWEuaGFzQ2xhc3MoXCJpblwiKTthLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsYyksYi50b2dnbGVDbGFzcyhcImNvbGxhcHNlZFwiLCFjKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpfTt2YXIgZT1hLmZuLmNvbGxhcHNlO2EuZm4uY29sbGFwc2U9YyxhLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yPWQsYS5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY29sbGFwc2U9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyxmdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2UuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxkLnByZXZlbnREZWZhdWx0KCk7dmFyIGY9YihlKSxnPWYuZGF0YShcImJzLmNvbGxhcHNlXCIpLGg9Zz9cInRvZ2dsZVwiOmUuZGF0YSgpO2MuY2FsbChmLGgpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7YiYmMz09PWIud2hpY2h8fChhKGUpLnJlbW92ZSgpLGEoZikuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1jKGQpLGY9e3JlbGF0ZWRUYXJnZXQ6dGhpc307ZS5oYXNDbGFzcyhcIm9wZW5cIikmJihlLnRyaWdnZXIoYj1hLkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiLGYpKSxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksZS5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcImhpZGRlbi5icy5kcm9wZG93blwiLGYpKSl9KSl9ZnVuY3Rpb24gYyhiKXt2YXIgYz1iLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtjfHwoYz1iLmF0dHIoXCJocmVmXCIpLGM9YyYmLyNbQS1aYS16XS8udGVzdChjKSYmYy5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgZD1jJiZhKGMpO3JldHVybiBkJiZkLmxlbmd0aD9kOmIucGFyZW50KCl9ZnVuY3Rpb24gZChiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YShcImJzLmRyb3Bkb3duXCIpO2R8fGMuZGF0YShcImJzLmRyb3Bkb3duXCIsZD1uZXcgZyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmRbYl0uY2FsbChjKX0pfXZhciBlPVwiLmRyb3Bkb3duLWJhY2tkcm9wXCIsZj0nW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLGc9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsdGhpcy50b2dnbGUpfTtnLlZFUlNJT049XCIzLjMuNFwiLGcucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2lmKCFlLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBmPWMoZSksZz1mLmhhc0NsYXNzKFwib3BlblwiKTtpZihiKCksIWcpe1wib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJiFmLmNsb3Nlc3QoXCIubmF2YmFyLW5hdlwiKS5sZW5ndGgmJmEoJzxkaXYgY2xhc3M9XCJkcm9wZG93bi1iYWNrZHJvcFwiLz4nKS5pbnNlcnRBZnRlcihhKHRoaXMpKS5vbihcImNsaWNrXCIsYik7dmFyIGg9e3JlbGF0ZWRUYXJnZXQ6dGhpc307aWYoZi50cmlnZ2VyKGQ9YS5FdmVudChcInNob3cuYnMuZHJvcGRvd25cIixoKSksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47ZS50cmlnZ2VyKFwiZm9jdXNcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksZi50b2dnbGVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihcInNob3duLmJzLmRyb3Bkb3duXCIsaCl9cmV0dXJuITF9fSxnLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKGIpe2lmKC8oMzh8NDB8Mjd8MzIpLy50ZXN0KGIud2hpY2gpJiYhL2lucHV0fHRleHRhcmVhL2kudGVzdChiLnRhcmdldC50YWdOYW1lKSl7dmFyIGQ9YSh0aGlzKTtpZihiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKSwhZC5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZT1jKGQpLGc9ZS5oYXNDbGFzcyhcIm9wZW5cIik7aWYoIWcmJjI3IT1iLndoaWNofHxnJiYyNz09Yi53aGljaClyZXR1cm4gMjc9PWIud2hpY2gmJmUuZmluZChmKS50cmlnZ2VyKFwiZm9jdXNcIiksZC50cmlnZ2VyKFwiY2xpY2tcIik7dmFyIGg9XCIgbGk6bm90KC5kaXNhYmxlZCk6dmlzaWJsZSBhXCIsaT1lLmZpbmQoJ1tyb2xlPVwibWVudVwiXScraCsnLCBbcm9sZT1cImxpc3Rib3hcIl0nK2gpO2lmKGkubGVuZ3RoKXt2YXIgaj1pLmluZGV4KGIudGFyZ2V0KTszOD09Yi53aGljaCYmaj4wJiZqLS0sNDA9PWIud2hpY2gmJmo8aS5sZW5ndGgtMSYmaisrLH5qfHwoaj0wKSxpLmVxKGopLnRyaWdnZXIoXCJmb2N1c1wiKX19fX07dmFyIGg9YS5mbi5kcm9wZG93bjthLmZuLmRyb3Bkb3duPWQsYS5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvcj1nLGEuZm4uZHJvcGRvd24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRyb3Bkb3duPWgsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGIpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93biBmb3JtXCIsZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX0pLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixmLGcucHJvdG90eXBlLnRvZ2dsZSkub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS5rZXlkb3duKS5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIiwnW3JvbGU9XCJtZW51XCJdJyxnLnByb3RvdHlwZS5rZXlkb3duKS5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIiwnW3JvbGU9XCJsaXN0Ym94XCJdJyxnLnByb3RvdHlwZS5rZXlkb3duKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiLGQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1hKHRoaXMpLGY9ZS5kYXRhKFwiYnMubW9kYWxcIiksZz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGUuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTtmfHxlLmRhdGEoXCJicy5tb2RhbFwiLGY9bmV3IGModGhpcyxnKSksXCJzdHJpbmdcIj09dHlwZW9mIGI/ZltiXShkKTpnLnNob3cmJmYuc2hvdyhkKX0pfXZhciBjPWZ1bmN0aW9uKGIsYyl7dGhpcy5vcHRpb25zPWMsdGhpcy4kYm9keT1hKGRvY3VtZW50LmJvZHkpLHRoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRkaWFsb2c9dGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKSx0aGlzLiRiYWNrZHJvcD1udWxsLHRoaXMuaXNTaG93bj1udWxsLHRoaXMub3JpZ2luYWxCb2R5UGFkPW51bGwsdGhpcy5zY3JvbGxiYXJXaWR0aD0wLHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSx0aGlzLm9wdGlvbnMucmVtb3RlJiZ0aGlzLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtY29udGVudFwiKS5sb2FkKHRoaXMub3B0aW9ucy5yZW1vdGUsYS5wcm94eShmdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQudHJpZ2dlcihcImxvYWRlZC5icy5tb2RhbFwiKX0sdGhpcykpfTtjLlZFUlNJT049XCIzLjMuNFwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0zMDAsYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLkRFRkFVTFRTPXtiYWNrZHJvcDohMCxrZXlib2FyZDohMCxzaG93OiEwfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaXNTaG93bj90aGlzLmhpZGUoKTp0aGlzLnNob3coYSl9LGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPWEuRXZlbnQoXCJzaG93LmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO3RoaXMuJGVsZW1lbnQudHJpZ2dlcihlKSx0aGlzLmlzU2hvd258fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0aGlzLmlzU2hvd249ITAsdGhpcy5jaGVja1Njcm9sbGJhcigpLHRoaXMuc2V0U2Nyb2xsYmFyKCksdGhpcy4kYm9keS5hZGRDbGFzcyhcIm1vZGFsLW9wZW5cIiksdGhpcy5lc2NhcGUoKSx0aGlzLnJlc2l6ZSgpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsYS5wcm94eSh0aGlzLmhpZGUsdGhpcykpLHRoaXMuJGRpYWxvZy5vbihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLiRlbGVtZW50Lm9uZShcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKGIpe2EoYi50YXJnZXQpLmlzKGQuJGVsZW1lbnQpJiYoZC5pZ25vcmVCYWNrZHJvcENsaWNrPSEwKX0pfSksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe3ZhciBlPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZkLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtkLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aHx8ZC4kZWxlbWVudC5hcHBlbmRUbyhkLiRib2R5KSxkLiRlbGVtZW50LnNob3coKS5zY3JvbGxUb3AoMCksZC5hZGp1c3REaWFsb2coKSxlJiZkLiRlbGVtZW50WzBdLm9mZnNldFdpZHRoLGQuJGVsZW1lbnQuYWRkQ2xhc3MoXCJpblwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwhMSksZC5lbmZvcmNlRm9jdXMoKTt2YXIgZj1hLkV2ZW50KFwic2hvd24uYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7ZT9kLiRkaWFsb2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkpfSxjLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKGIpe2ImJmIucHJldmVudERlZmF1bHQoKSxiPWEuRXZlbnQoXCJoaWRlLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSx0aGlzLmlzU2hvd24mJiFiLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYodGhpcy5pc1Nob3duPSExLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSxhKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJpblwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwhMCkub2ZmKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiKS5vZmYoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIiksdGhpcy4kZGlhbG9nLm9mZihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRlbGVtZW50Lm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkodGhpcy5oaWRlTW9kYWwsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6dGhpcy5oaWRlTW9kYWwoKSl9LGMucHJvdG90eXBlLmVuZm9yY2VGb2N1cz1mdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIikub24oXCJmb2N1c2luLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXt0aGlzLiRlbGVtZW50WzBdPT09YS50YXJnZXR8fHRoaXMuJGVsZW1lbnQuaGFzKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpfSx0aGlzKSl9LGMucHJvdG90eXBlLmVzY2FwZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmtleWJvYXJkP3RoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpezI3PT1hLndoaWNoJiZ0aGlzLmhpZGUoKX0sdGhpcykpOnRoaXMuaXNTaG93bnx8dGhpcy4kZWxlbWVudC5vZmYoXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIil9LGMucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93bj9hKHdpbmRvdykub24oXCJyZXNpemUuYnMubW9kYWxcIixhLnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLHRoaXMpKTphKHdpbmRvdykub2ZmKFwicmVzaXplLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5oaWRlTW9kYWw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuJGVsZW1lbnQuaGlkZSgpLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXthLiRib2R5LnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKSxhLnJlc2V0QWRqdXN0bWVudHMoKSxhLnJlc2V0U2Nyb2xsYmFyKCksYS4kZWxlbWVudC50cmlnZ2VyKFwiaGlkZGVuLmJzLm1vZGFsXCIpfSl9LGMucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wPWZ1bmN0aW9uKCl7dGhpcy4kYmFja2Ryb3AmJnRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpLHRoaXMuJGJhY2tkcm9wPW51bGx9LGMucHJvdG90eXBlLmJhY2tkcm9wPWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT9cImZhZGVcIjpcIlwiO2lmKHRoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmJhY2tkcm9wKXt2YXIgZj1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZTtpZih0aGlzLiRiYWNrZHJvcD1hKCc8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgJytlKydcIiAvPicpLmFwcGVuZFRvKHRoaXMuJGJvZHkpLHRoaXMuJGVsZW1lbnQub24oXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrP3ZvaWQodGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExKTp2b2lkKGEudGFyZ2V0PT09YS5jdXJyZW50VGFyZ2V0JiYoXCJzdGF0aWNcIj09dGhpcy5vcHRpb25zLmJhY2tkcm9wP3RoaXMuJGVsZW1lbnRbMF0uZm9jdXMoKTp0aGlzLmhpZGUoKSkpfSx0aGlzKSksZiYmdGhpcy4kYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGgsdGhpcy4kYmFja2Ryb3AuYWRkQ2xhc3MoXCJpblwiKSwhYilyZXR1cm47Zj90aGlzLiRiYWNrZHJvcC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixiKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pOmIoKX1lbHNlIGlmKCF0aGlzLmlzU2hvd24mJnRoaXMuJGJhY2tkcm9wKXt0aGlzLiRiYWNrZHJvcC5yZW1vdmVDbGFzcyhcImluXCIpO3ZhciBnPWZ1bmN0aW9uKCl7ZC5yZW1vdmVCYWNrZHJvcCgpLGImJmIoKX07YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGcpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6ZygpfWVsc2UgYiYmYigpfSxjLnByb3RvdHlwZS5oYW5kbGVVcGRhdGU9ZnVuY3Rpb24oKXt0aGlzLmFkanVzdERpYWxvZygpfSxjLnByb3RvdHlwZS5hZGp1c3REaWFsb2c9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50WzBdLnNjcm9sbEhlaWdodD5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O3RoaXMuJGVsZW1lbnQuY3NzKHtwYWRkaW5nTGVmdDohdGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmYT90aGlzLnNjcm9sbGJhcldpZHRoOlwiXCIscGFkZGluZ1JpZ2h0OnRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJiFhP3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIn0pfSxjLnByb3RvdHlwZS5yZXNldEFkanVzdG1lbnRzPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OlwiXCIscGFkZGluZ1JpZ2h0OlwiXCJ9KX0sYy5wcm90b3R5cGUuY2hlY2tTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT13aW5kb3cuaW5uZXJXaWR0aDtpZighYSl7dmFyIGI9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2E9Yi5yaWdodC1NYXRoLmFicyhiLmxlZnQpfXRoaXMuYm9keUlzT3ZlcmZsb3dpbmc9ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDxhLHRoaXMuc2Nyb2xsYmFyV2lkdGg9dGhpcy5tZWFzdXJlU2Nyb2xsYmFyKCl9LGMucHJvdG90eXBlLnNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPXBhcnNlSW50KHRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiKXx8MCwxMCk7dGhpcy5vcmlnaW5hbEJvZHlQYWQ9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHR8fFwiXCIsdGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmdGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsYSt0aGlzLnNjcm9sbGJhcldpZHRoKX0sYy5wcm90b3R5cGUucmVzZXRTY3JvbGxiYXI9ZnVuY3Rpb24oKXt0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIix0aGlzLm9yaWdpbmFsQm9keVBhZCl9LGMucHJvdG90eXBlLm1lYXN1cmVTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuY2xhc3NOYW1lPVwibW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmVcIix0aGlzLiRib2R5LmFwcGVuZChhKTt2YXIgYj1hLm9mZnNldFdpZHRoLWEuY2xpZW50V2lkdGg7cmV0dXJuIHRoaXMuJGJvZHlbMF0ucmVtb3ZlQ2hpbGQoYSksYn07dmFyIGQ9YS5mbi5tb2RhbDthLmZuLm1vZGFsPWIsYS5mbi5tb2RhbC5Db25zdHJ1Y3Rvcj1jLGEuZm4ubW9kYWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLm1vZGFsPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5tb2RhbC5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsZnVuY3Rpb24oYyl7dmFyIGQ9YSh0aGlzKSxlPWQuYXR0cihcImhyZWZcIiksZj1hKGQuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxlJiZlLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIikpLGc9Zi5kYXRhKFwiYnMubW9kYWxcIik/XCJ0b2dnbGVcIjphLmV4dGVuZCh7cmVtb3RlOiEvIy8udGVzdChlKSYmZX0sZi5kYXRhKCksZC5kYXRhKCkpO2QuaXMoXCJhXCIpJiZjLnByZXZlbnREZWZhdWx0KCksZi5vbmUoXCJzaG93LmJzLm1vZGFsXCIsZnVuY3Rpb24oYSl7YS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Zi5vbmUoXCJoaWRkZW4uYnMubW9kYWxcIixmdW5jdGlvbigpe2QuaXMoXCI6dmlzaWJsZVwiKSYmZC50cmlnZ2VyKFwiZm9jdXNcIil9KX0pLGIuY2FsbChmLGcsdGhpcyl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRvb2x0aXBcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjsoZXx8IS9kZXN0cm95fGhpZGUvLnRlc3QoYikpJiYoZXx8ZC5kYXRhKFwiYnMudG9vbHRpcFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKSl9KX12YXIgYz1mdW5jdGlvbihhLGIpe3RoaXMudHlwZT1udWxsLHRoaXMub3B0aW9ucz1udWxsLHRoaXMuZW5hYmxlZD1udWxsLHRoaXMudGltZW91dD1udWxsLHRoaXMuaG92ZXJTdGF0ZT1udWxsLHRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsYSxiKX07Yy5WRVJTSU9OPVwiMy4zLjRcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGMuREVGQVVMVFM9e2FuaW1hdGlvbjohMCxwbGFjZW1lbnQ6XCJ0b3BcIixzZWxlY3RvcjohMSx0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wiLHRpdGxlOlwiXCIsZGVsYXk6MCxodG1sOiExLGNvbnRhaW5lcjohMSx2aWV3cG9ydDp7c2VsZWN0b3I6XCJib2R5XCIscGFkZGluZzowfX0sYy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihiLGMsZCl7aWYodGhpcy5lbmFibGVkPSEwLHRoaXMudHlwZT1iLHRoaXMuJGVsZW1lbnQ9YShjKSx0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGQpLHRoaXMuJHZpZXdwb3J0PXRoaXMub3B0aW9ucy52aWV3cG9ydCYmYSh0aGlzLm9wdGlvbnMudmlld3BvcnQuc2VsZWN0b3J8fHRoaXMub3B0aW9ucy52aWV3cG9ydCksdGhpcy4kZWxlbWVudFswXWluc3RhbmNlb2YgZG9jdW1lbnQuY29uc3RydWN0b3ImJiF0aGlzLm9wdGlvbnMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiYHNlbGVjdG9yYCBvcHRpb24gbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBpbml0aWFsaXppbmcgXCIrdGhpcy50eXBlK1wiIG9uIHRoZSB3aW5kb3cuZG9jdW1lbnQgb2JqZWN0IVwiKTtmb3IodmFyIGU9dGhpcy5vcHRpb25zLnRyaWdnZXIuc3BsaXQoXCIgXCIpLGY9ZS5sZW5ndGg7Zi0tOyl7dmFyIGc9ZVtmXTtpZihcImNsaWNrXCI9PWcpdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLnRvZ2dsZSx0aGlzKSk7ZWxzZSBpZihcIm1hbnVhbFwiIT1nKXt2YXIgaD1cImhvdmVyXCI9PWc/XCJtb3VzZWVudGVyXCI6XCJmb2N1c2luXCIsaT1cImhvdmVyXCI9PWc/XCJtb3VzZWxlYXZlXCI6XCJmb2N1c291dFwiO3RoaXMuJGVsZW1lbnQub24oaCtcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5lbnRlcix0aGlzKSksdGhpcy4kZWxlbWVudC5vbihpK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmxlYXZlLHRoaXMpKX19dGhpcy5vcHRpb25zLnNlbGVjdG9yP3RoaXMuX29wdGlvbnM9YS5leHRlbmQoe30sdGhpcy5vcHRpb25zLHt0cmlnZ2VyOlwibWFudWFsXCIsc2VsZWN0b3I6XCJcIn0pOnRoaXMuZml4VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuZ2V0T3B0aW9ucz1mdW5jdGlvbihiKXtyZXR1cm4gYj1hLmV4dGVuZCh7fSx0aGlzLmdldERlZmF1bHRzKCksdGhpcy4kZWxlbWVudC5kYXRhKCksYiksYi5kZWxheSYmXCJudW1iZXJcIj09dHlwZW9mIGIuZGVsYXkmJihiLmRlbGF5PXtzaG93OmIuZGVsYXksaGlkZTpiLmRlbGF5fSksYn0sYy5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zPWZ1bmN0aW9uKCl7dmFyIGI9e30sYz10aGlzLmdldERlZmF1bHRzKCk7cmV0dXJuIHRoaXMuX29wdGlvbnMmJmEuZWFjaCh0aGlzLl9vcHRpb25zLGZ1bmN0aW9uKGEsZCl7Y1thXSE9ZCYmKGJbYV09ZCl9KSxifSxjLnByb3RvdHlwZS5lbnRlcj1mdW5jdGlvbihiKXt2YXIgYz1iIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcj9iOmEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gYyYmYy4kdGlwJiZjLiR0aXAuaXMoXCI6dmlzaWJsZVwiKT92b2lkKGMuaG92ZXJTdGF0ZT1cImluXCIpOihjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cImluXCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuc2hvdz92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJpblwiPT1jLmhvdmVyU3RhdGUmJmMuc2hvdygpfSxjLm9wdGlvbnMuZGVsYXkuc2hvdykpOmMuc2hvdygpKX0sYy5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSksY2xlYXJUaW1lb3V0KGMudGltZW91dCksYy5ob3ZlclN0YXRlPVwib3V0XCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuaGlkZT92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJvdXRcIj09Yy5ob3ZlclN0YXRlJiZjLmhpZGUoKX0sYy5vcHRpb25zLmRlbGF5LmhpZGUpKTpjLmhpZGUoKX0sYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBiPWEuRXZlbnQoXCJzaG93LmJzLlwiK3RoaXMudHlwZSk7aWYodGhpcy5oYXNDb250ZW50KCkmJnRoaXMuZW5hYmxlZCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpO3ZhciBkPWEuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0aGlzLiRlbGVtZW50WzBdKTtpZihiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwhZClyZXR1cm47dmFyIGU9dGhpcyxmPXRoaXMudGlwKCksZz10aGlzLmdldFVJRCh0aGlzLnR5cGUpO3RoaXMuc2V0Q29udGVudCgpLGYuYXR0cihcImlkXCIsZyksdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGcpLHRoaXMub3B0aW9ucy5hbmltYXRpb24mJmYuYWRkQ2xhc3MoXCJmYWRlXCIpO3ZhciBoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQ/dGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsZlswXSx0aGlzLiRlbGVtZW50WzBdKTp0aGlzLm9wdGlvbnMucGxhY2VtZW50LGk9L1xccz9hdXRvP1xccz8vaSxqPWkudGVzdChoKTtqJiYoaD1oLnJlcGxhY2UoaSxcIlwiKXx8XCJ0b3BcIiksZi5kZXRhY2goKS5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLmFkZENsYXNzKGgpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsdGhpcyksdGhpcy5vcHRpb25zLmNvbnRhaW5lcj9mLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpOmYuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7dmFyIGs9dGhpcy5nZXRQb3NpdGlvbigpLGw9ZlswXS5vZmZzZXRXaWR0aCxtPWZbMF0ub2Zmc2V0SGVpZ2h0O2lmKGope3ZhciBuPWgsbz10aGlzLm9wdGlvbnMuY29udGFpbmVyP2EodGhpcy5vcHRpb25zLmNvbnRhaW5lcik6dGhpcy4kZWxlbWVudC5wYXJlbnQoKSxwPXRoaXMuZ2V0UG9zaXRpb24obyk7aD1cImJvdHRvbVwiPT1oJiZrLmJvdHRvbSttPnAuYm90dG9tP1widG9wXCI6XCJ0b3BcIj09aCYmay50b3AtbTxwLnRvcD9cImJvdHRvbVwiOlwicmlnaHRcIj09aCYmay5yaWdodCtsPnAud2lkdGg/XCJsZWZ0XCI6XCJsZWZ0XCI9PWgmJmsubGVmdC1sPHAubGVmdD9cInJpZ2h0XCI6aCxmLnJlbW92ZUNsYXNzKG4pLmFkZENsYXNzKGgpfXZhciBxPXRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChoLGssbCxtKTt0aGlzLmFwcGx5UGxhY2VtZW50KHEsaCk7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgYT1lLmhvdmVyU3RhdGU7ZS4kZWxlbWVudC50cmlnZ2VyKFwic2hvd24uYnMuXCIrZS50eXBlKSxlLmhvdmVyU3RhdGU9bnVsbCxcIm91dFwiPT1hJiZlLmxlYXZlKGUpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kdGlwLmhhc0NsYXNzKFwiZmFkZVwiKT9mLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHIpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6cigpfX0sYy5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQ9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnRpcCgpLGU9ZFswXS5vZmZzZXRXaWR0aCxmPWRbMF0ub2Zmc2V0SGVpZ2h0LGc9cGFyc2VJbnQoZC5jc3MoXCJtYXJnaW4tdG9wXCIpLDEwKSxoPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLWxlZnRcIiksMTApO2lzTmFOKGcpJiYoZz0wKSxpc05hTihoKSYmKGg9MCksYi50b3A9Yi50b3ArZyxiLmxlZnQ9Yi5sZWZ0K2gsYS5vZmZzZXQuc2V0T2Zmc2V0KGRbMF0sYS5leHRlbmQoe3VzaW5nOmZ1bmN0aW9uKGEpe2QuY3NzKHt0b3A6TWF0aC5yb3VuZChhLnRvcCksbGVmdDpNYXRoLnJvdW5kKGEubGVmdCl9KX19LGIpLDApLGQuYWRkQ2xhc3MoXCJpblwiKTt2YXIgaT1kWzBdLm9mZnNldFdpZHRoLGo9ZFswXS5vZmZzZXRIZWlnaHQ7XCJ0b3BcIj09YyYmaiE9ZiYmKGIudG9wPWIudG9wK2Ytaik7dmFyIGs9dGhpcy5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEoYyxiLGksaik7ay5sZWZ0P2IubGVmdCs9ay5sZWZ0OmIudG9wKz1rLnRvcDt2YXIgbD0vdG9wfGJvdHRvbS8udGVzdChjKSxtPWw/MiprLmxlZnQtZStpOjIqay50b3AtZitqLG49bD9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIjtkLm9mZnNldChiKSx0aGlzLnJlcGxhY2VBcnJvdyhtLGRbMF1bbl0sbCl9LGMucHJvdG90eXBlLnJlcGxhY2VBcnJvdz1mdW5jdGlvbihhLGIsYyl7dGhpcy5hcnJvdygpLmNzcyhjP1wibGVmdFwiOlwidG9wXCIsNTAqKDEtYS9iKStcIiVcIikuY3NzKGM/XCJ0b3BcIjpcImxlZnRcIixcIlwiKX0sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCk7YS5maW5kKFwiLnRvb2x0aXAtaW5uZXJcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGIpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodFwiKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihiKXtmdW5jdGlvbiBkKCl7XCJpblwiIT1lLmhvdmVyU3RhdGUmJmYuZGV0YWNoKCksZS4kZWxlbWVudC5yZW1vdmVBdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLlwiK2UudHlwZSksYiYmYigpfXZhciBlPXRoaXMsZj1hKHRoaXMuJHRpcCksZz1hLkV2ZW50KFwiaGlkZS5icy5cIit0aGlzLnR5cGUpO3JldHVybiB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZyksZy5pc0RlZmF1bHRQcmV2ZW50ZWQoKT92b2lkIDA6KGYucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZi5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixkKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmQoKSx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzKX0sYy5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50OyhhLmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsYS5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oYil7Yj1ifHx0aGlzLiRlbGVtZW50O3ZhciBjPWJbMF0sZD1cIkJPRFlcIj09Yy50YWdOYW1lLGU9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtudWxsPT1lLndpZHRoJiYoZT1hLmV4dGVuZCh7fSxlLHt3aWR0aDplLnJpZ2h0LWUubGVmdCxoZWlnaHQ6ZS5ib3R0b20tZS50b3B9KSk7dmFyIGY9ZD97dG9wOjAsbGVmdDowfTpiLm9mZnNldCgpLGc9e3Njcm9sbDpkP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOmIuc2Nyb2xsVG9wKCl9LGg9ZD97d2lkdGg6YSh3aW5kb3cpLndpZHRoKCksaGVpZ2h0OmEod2luZG93KS5oZWlnaHQoKX06bnVsbDtyZXR1cm4gYS5leHRlbmQoe30sZSxnLGgsZil9LGMucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQ9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuXCJib3R0b21cIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LGxlZnQ6Yi5sZWZ0K2Iud2lkdGgvMi1jLzJ9OlwidG9wXCI9PWE/e3RvcDpiLnRvcC1kLGxlZnQ6Yi5sZWZ0K2Iud2lkdGgvMi1jLzJ9OlwibGVmdFwiPT1hP3t0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQtY306e3RvcDpiLnRvcCtiLmhlaWdodC8yLWQvMixsZWZ0OmIubGVmdCtiLndpZHRofX0sYy5wcm90b3R5cGUuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXt0b3A6MCxsZWZ0OjB9O2lmKCF0aGlzLiR2aWV3cG9ydClyZXR1cm4gZTt2YXIgZj10aGlzLm9wdGlvbnMudmlld3BvcnQmJnRoaXMub3B0aW9ucy52aWV3cG9ydC5wYWRkaW5nfHwwLGc9dGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7aWYoL3JpZ2h0fGxlZnQvLnRlc3QoYSkpe3ZhciBoPWIudG9wLWYtZy5zY3JvbGwsaT1iLnRvcCtmLWcuc2Nyb2xsK2Q7aDxnLnRvcD9lLnRvcD1nLnRvcC1oOmk+Zy50b3ArZy5oZWlnaHQmJihlLnRvcD1nLnRvcCtnLmhlaWdodC1pKX1lbHNle3ZhciBqPWIubGVmdC1mLGs9Yi5sZWZ0K2YrYztqPGcubGVmdD9lLmxlZnQ9Zy5sZWZ0LWo6az5nLndpZHRoJiYoZS5sZWZ0PWcubGVmdCtnLndpZHRoLWspfXJldHVybiBlfSxjLnByb3RvdHlwZS5nZXRUaXRsZT1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kZWxlbWVudCxjPXRoaXMub3B0aW9ucztyZXR1cm4gYT1iLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aXRsZT9jLnRpdGxlLmNhbGwoYlswXSk6Yy50aXRsZSl9LGMucHJvdG90eXBlLmdldFVJRD1mdW5jdGlvbihhKXtkbyBhKz1+figxZTYqTWF0aC5yYW5kb20oKSk7d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSkpO3JldHVybiBhfSxjLnByb3RvdHlwZS50aXA9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kdGlwPXRoaXMuJHRpcHx8YSh0aGlzLm9wdGlvbnMudGVtcGxhdGUpfSxjLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLnRvb2x0aXAtYXJyb3dcIil9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMX0sYy5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZD1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hdGhpcy5lbmFibGVkfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiYoYz1hKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSksY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSksYy50aXAoKS5oYXNDbGFzcyhcImluXCIpP2MubGVhdmUoYyk6Yy5lbnRlcihjKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCksdGhpcy5oaWRlKGZ1bmN0aW9uKCl7YS4kZWxlbWVudC5vZmYoXCIuXCIrYS50eXBlKS5yZW1vdmVEYXRhKFwiYnMuXCIrYS50eXBlKX0pfTt2YXIgZD1hLmZuLnRvb2x0aXA7YS5mbi50b29sdGlwPWIsYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yPWMsYS5mbi50b29sdGlwLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50b29sdGlwPWQsdGhpc319KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5wb3BvdmVyXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fCEvZGVzdHJveXxoaWRlLy50ZXN0KGIpKSYmKGV8fGQuZGF0YShcImJzLnBvcG92ZXJcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLmluaXQoXCJwb3BvdmVyXCIsYSxiKX07aWYoIWEuZm4udG9vbHRpcCl0aHJvdyBuZXcgRXJyb3IoXCJQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanNcIik7Yy5WRVJTSU9OPVwiMy4zLjRcIixjLkRFRkFVTFRTPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUyx7cGxhY2VtZW50OlwicmlnaHRcIix0cmlnZ2VyOlwiY2xpY2tcIixjb250ZW50OlwiXCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLGMucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpLGMucHJvdG90eXBlLmNvbnN0cnVjdG9yPWMsYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCksYz10aGlzLmdldENvbnRlbnQoKTthLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5maW5kKFwiLnBvcG92ZXItY29udGVudFwiKS5jaGlsZHJlbigpLmRldGFjaCgpLmVuZCgpW3RoaXMub3B0aW9ucy5odG1sP1wic3RyaW5nXCI9PXR5cGVvZiBjP1wiaHRtbFwiOlwiYXBwZW5kXCI6XCJ0ZXh0XCJdKGMpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKSxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5odG1sKCl8fGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmhpZGUoKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl8fHRoaXMuZ2V0Q29udGVudCgpfSxjLnByb3RvdHlwZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudCxiPXRoaXMub3B0aW9ucztyZXR1cm4gYS5hdHRyKFwiZGF0YS1jb250ZW50XCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYi5jb250ZW50P2IuY29udGVudC5jYWxsKGFbMF0pOmIuY29udGVudCl9LGMucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIuYXJyb3dcIil9O3ZhciBkPWEuZm4ucG9wb3ZlcjthLmZuLnBvcG92ZXI9YixhLmZuLnBvcG92ZXIuQ29uc3RydWN0b3I9YyxhLmZuLnBvcG92ZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnBvcG92ZXI9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihjLGQpe3RoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRzY3JvbGxFbGVtZW50PWEoYShjKS5pcyhkb2N1bWVudC5ib2R5KT93aW5kb3c6YyksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZCksdGhpcy5zZWxlY3Rvcj0odGhpcy5vcHRpb25zLnRhcmdldHx8XCJcIikrXCIgLm5hdiBsaSA+IGFcIix0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5zY3JvbGxIZWlnaHQ9MCx0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKFwic2Nyb2xsLmJzLnNjcm9sbHNweVwiLGEucHJveHkodGhpcy5wcm9jZXNzLHRoaXMpKSx0aGlzLnJlZnJlc2goKSx0aGlzLnByb2Nlc3MoKX1mdW5jdGlvbiBjKGMpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7ZXx8ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIsZT1uZXcgYih0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9Yi5WRVJTSU9OPVwiMy4zLjRcIixiLkRFRkFVTFRTPXtvZmZzZXQ6MTB9LGIucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodHx8TWF0aC5tYXgodGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl9LGIucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9XCJvZmZzZXRcIixkPTA7dGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLnNjcm9sbEhlaWdodD10aGlzLmdldFNjcm9sbEhlaWdodCgpLGEuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSl8fChjPVwicG9zaXRpb25cIixkPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkpLHRoaXMuJGJvZHkuZmluZCh0aGlzLnNlbGVjdG9yKS5tYXAoZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGU9Yi5kYXRhKFwidGFyZ2V0XCIpfHxiLmF0dHIoXCJocmVmXCIpLGY9L14jLi8udGVzdChlKSYmYShlKTtyZXR1cm4gZiYmZi5sZW5ndGgmJmYuaXMoXCI6dmlzaWJsZVwiKSYmW1tmW2NdKCkudG9wK2QsZV1dfHxudWxsfSkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhWzBdLWJbMF19KS5lYWNoKGZ1bmN0aW9uKCl7Yi5vZmZzZXRzLnB1c2godGhpc1swXSksYi50YXJnZXRzLnB1c2godGhpc1sxXSl9KX0sYi5wcm90b3R5cGUucHJvY2Vzcz1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSt0aGlzLm9wdGlvbnMub2Zmc2V0LGM9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxkPXRoaXMub3B0aW9ucy5vZmZzZXQrYy10aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpLGU9dGhpcy5vZmZzZXRzLGY9dGhpcy50YXJnZXRzLGc9dGhpcy5hY3RpdmVUYXJnZXQ7aWYodGhpcy5zY3JvbGxIZWlnaHQhPWMmJnRoaXMucmVmcmVzaCgpLGI+PWQpcmV0dXJuIGchPShhPWZbZi5sZW5ndGgtMV0pJiZ0aGlzLmFjdGl2YXRlKGEpO2lmKGcmJmI8ZVswXSlyZXR1cm4gdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLmNsZWFyKCk7Zm9yKGE9ZS5sZW5ndGg7YS0tOylnIT1mW2FdJiZiPj1lW2FdJiYodm9pZCAwPT09ZVthKzFdfHxiPGVbYSsxXSkmJnRoaXMuYWN0aXZhdGUoZlthXSl9LGIucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGIpe3RoaXMuYWN0aXZlVGFyZ2V0PWIsdGhpcy5jbGVhcigpO3ZhciBjPXRoaXMuc2VsZWN0b3IrJ1tkYXRhLXRhcmdldD1cIicrYisnXCJdLCcrdGhpcy5zZWxlY3RvcisnW2hyZWY9XCInK2IrJ1wiXScsZD1hKGMpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtkLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmKGQ9ZC5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGQudHJpZ2dlcihcImFjdGl2YXRlLmJzLnNjcm9sbHNweVwiKX0sYi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXthKHRoaXMuc2VsZWN0b3IpLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5zY3JvbGxzcHk7YS5mbi5zY3JvbGxzcHk9YyxhLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3Rvcj1iLGEuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5zY3JvbGxzcHk9ZCx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkLmJzLnNjcm9sbHNweS5kYXRhLWFwaVwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yy5jYWxsKGIsYi5kYXRhKCkpfSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRhYlwiKTtlfHxkLmRhdGEoXCJicy50YWJcIixlPW5ldyBjKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYil7dGhpcy5lbGVtZW50PWEoYil9O2MuVkVSU0lPTj1cIjMuMy40XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5lbGVtZW50LGM9Yi5jbG9zZXN0KFwidWw6bm90KC5kcm9wZG93bi1tZW51KVwiKSxkPWIuZGF0YShcInRhcmdldFwiKTtpZihkfHwoZD1iLmF0dHIoXCJocmVmXCIpLGQ9ZCYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKSwhYi5wYXJlbnQoXCJsaVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7dmFyIGU9Yy5maW5kKFwiLmFjdGl2ZTpsYXN0IGFcIiksZj1hLkV2ZW50KFwiaGlkZS5icy50YWJcIix7cmVsYXRlZFRhcmdldDpiWzBdfSksZz1hLkV2ZW50KFwic2hvdy5icy50YWJcIix7cmVsYXRlZFRhcmdldDplWzBdfSk7XHJcbmlmKGUudHJpZ2dlcihmKSxiLnRyaWdnZXIoZyksIWcuaXNEZWZhdWx0UHJldmVudGVkKCkmJiFmLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgaD1hKGQpO3RoaXMuYWN0aXZhdGUoYi5jbG9zZXN0KFwibGlcIiksYyksdGhpcy5hY3RpdmF0ZShoLGgucGFyZW50KCksZnVuY3Rpb24oKXtlLnRyaWdnZXIoe3R5cGU6XCJoaWRkZW4uYnMudGFiXCIscmVsYXRlZFRhcmdldDpiWzBdfSksYi50cmlnZ2VyKHt0eXBlOlwic2hvd24uYnMudGFiXCIscmVsYXRlZFRhcmdldDplWzBdfSl9KX19fSxjLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihiLGQsZSl7ZnVuY3Rpb24gZigpe2cucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcIj4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLGIuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksaD8oYlswXS5vZmZzZXRXaWR0aCxiLmFkZENsYXNzKFwiaW5cIikpOmIucmVtb3ZlQ2xhc3MoXCJmYWRlXCIpLGIucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoJiZiLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxlJiZlKCl9dmFyIGc9ZC5maW5kKFwiPiAuYWN0aXZlXCIpLGg9ZSYmYS5zdXBwb3J0LnRyYW5zaXRpb24mJihnLmxlbmd0aCYmZy5oYXNDbGFzcyhcImZhZGVcIil8fCEhZC5maW5kKFwiPiAuZmFkZVwiKS5sZW5ndGgpO2cubGVuZ3RoJiZoP2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZikuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpmKCksZy5yZW1vdmVDbGFzcyhcImluXCIpfTt2YXIgZD1hLmZuLnRhYjthLmZuLnRhYj1iLGEuZm4udGFiLkNvbnN0cnVjdG9yPWMsYS5mbi50YWIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRhYj1kLHRoaXN9O3ZhciBlPWZ1bmN0aW9uKGMpe2MucHJldmVudERlZmF1bHQoKSxiLmNhbGwoYSh0aGlzKSxcInNob3dcIil9O2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScsZSkub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsZSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5hZmZpeFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmFmZml4XCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLiR0YXJnZXQ9YSh0aGlzLm9wdGlvbnMudGFyZ2V0KS5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpKS5vbihcImNsaWNrLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLHRoaXMpKSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5hZmZpeGVkPW51bGwsdGhpcy51bnBpbj1udWxsLHRoaXMucGlubmVkT2Zmc2V0PW51bGwsdGhpcy5jaGVja1Bvc2l0aW9uKCl9O2MuVkVSU0lPTj1cIjMuMy40XCIsYy5SRVNFVD1cImFmZml4IGFmZml4LXRvcCBhZmZpeC1ib3R0b21cIixjLkRFRkFVTFRTPXtvZmZzZXQ6MCx0YXJnZXQ6d2luZG93fSxjLnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksZj10aGlzLiRlbGVtZW50Lm9mZnNldCgpLGc9dGhpcy4kdGFyZ2V0LmhlaWdodCgpO2lmKG51bGwhPWMmJlwidG9wXCI9PXRoaXMuYWZmaXhlZClyZXR1cm4gYz5lP1widG9wXCI6ITE7aWYoXCJib3R0b21cIj09dGhpcy5hZmZpeGVkKXJldHVybiBudWxsIT1jP2UrdGhpcy51bnBpbjw9Zi50b3A/ITE6XCJib3R0b21cIjphLWQ+PWUrZz8hMTpcImJvdHRvbVwiO3ZhciBoPW51bGw9PXRoaXMuYWZmaXhlZCxpPWg/ZTpmLnRvcCxqPWg/ZzpiO3JldHVybiBudWxsIT1jJiZjPj1lP1widG9wXCI6bnVsbCE9ZCYmaStqPj1hLWQ/XCJib3R0b21cIjohMX0sYy5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0PWZ1bmN0aW9uKCl7aWYodGhpcy5waW5uZWRPZmZzZXQpcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoXCJhZmZpeFwiKTt2YXIgYT10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksYj10aGlzLiRlbGVtZW50Lm9mZnNldCgpO3JldHVybiB0aGlzLnBpbm5lZE9mZnNldD1iLnRvcC1hfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcD1mdW5jdGlvbigpe3NldFRpbWVvdXQoYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcyksMSl9LGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpe3ZhciBiPXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCksZD10aGlzLm9wdGlvbnMub2Zmc2V0LGU9ZC50b3AsZj1kLmJvdHRvbSxnPWEoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCk7XCJvYmplY3RcIiE9dHlwZW9mIGQmJihmPWU9ZCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKGU9ZC50b3AodGhpcy4kZWxlbWVudCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihmPWQuYm90dG9tKHRoaXMuJGVsZW1lbnQpKTt2YXIgaD10aGlzLmdldFN0YXRlKGcsYixlLGYpO2lmKHRoaXMuYWZmaXhlZCE9aCl7bnVsbCE9dGhpcy51bnBpbiYmdGhpcy4kZWxlbWVudC5jc3MoXCJ0b3BcIixcIlwiKTt2YXIgaT1cImFmZml4XCIrKGg/XCItXCIraDpcIlwiKSxqPWEuRXZlbnQoaStcIi5icy5hZmZpeFwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoaiksai5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47dGhpcy5hZmZpeGVkPWgsdGhpcy51bnBpbj1cImJvdHRvbVwiPT1oP3RoaXMuZ2V0UGlubmVkT2Zmc2V0KCk6bnVsbCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKGkpLnRyaWdnZXIoaS5yZXBsYWNlKFwiYWZmaXhcIixcImFmZml4ZWRcIikrXCIuYnMuYWZmaXhcIil9XCJib3R0b21cIj09aCYmdGhpcy4kZWxlbWVudC5vZmZzZXQoe3RvcDpnLWItZn0pfX07dmFyIGQ9YS5mbi5hZmZpeDthLmZuLmFmZml4PWIsYS5mbi5hZmZpeC5Db25zdHJ1Y3Rvcj1jLGEuZm4uYWZmaXgubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFmZml4PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YSgpO2Qub2Zmc2V0PWQub2Zmc2V0fHx7fSxudWxsIT1kLm9mZnNldEJvdHRvbSYmKGQub2Zmc2V0LmJvdHRvbT1kLm9mZnNldEJvdHRvbSksbnVsbCE9ZC5vZmZzZXRUb3AmJihkLm9mZnNldC50b3A9ZC5vZmZzZXRUb3ApLGIuY2FsbChjLGQpfSl9KX0oalF1ZXJ5KTsiLCIvKiFcclxuICogalF1ZXJ5IFNtb290aCBTY3JvbGwgLSB2MS43LjIgLSAyMDE2LTAxLTIzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rc3dlZGJlcmcvanF1ZXJ5LXNtb290aC1zY3JvbGxcclxuICogQ29weXJpZ2h0IChjKSAyMDE2IEthcmwgU3dlZGJlcmdcclxuICogTGljZW5zZWQgTUlUXHJcbiAqL1xyXG5cclxuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOmEoXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/cmVxdWlyZShcImpxdWVyeVwiKTpqUXVlcnkpfShmdW5jdGlvbihhKXt2YXIgYj1cIjEuNy4yXCIsYz17fSxkPXtleGNsdWRlOltdLGV4Y2x1ZGVXaXRoaW46W10sb2Zmc2V0OjAsZGlyZWN0aW9uOlwidG9wXCIsZGVsZWdhdGVTZWxlY3RvcjpudWxsLHNjcm9sbEVsZW1lbnQ6bnVsbCxzY3JvbGxUYXJnZXQ6bnVsbCxiZWZvcmVTY3JvbGw6ZnVuY3Rpb24oKXt9LGFmdGVyU2Nyb2xsOmZ1bmN0aW9uKCl7fSxlYXNpbmc6XCJzd2luZ1wiLHNwZWVkOjQwMCxhdXRvQ29lZmZpY2llbnQ6MixwcmV2ZW50RGVmYXVsdDohMH0sZT1mdW5jdGlvbihiKXt2YXIgYz1bXSxkPSExLGU9Yi5kaXImJlwibGVmdFwiPT09Yi5kaXI/XCJzY3JvbGxMZWZ0XCI6XCJzY3JvbGxUb3BcIjtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtpZih0aGlzIT09ZG9jdW1lbnQmJnRoaXMhPT13aW5kb3cpcmV0dXJuIWRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnR8fHRoaXMhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJnRoaXMhPT1kb2N1bWVudC5ib2R5P3ZvaWQoYltlXSgpPjA/Yy5wdXNoKHRoaXMpOihiW2VdKDEpLGQ9YltlXSgpPjAsZCYmYy5wdXNoKHRoaXMpLGJbZV0oMCkpKTooYy5wdXNoKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQpLCExKX0pLGMubGVuZ3RofHx0aGlzLmVhY2goZnVuY3Rpb24oKXt0aGlzPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZcInNtb290aFwiPT09YSh0aGlzKS5jc3MoXCJzY3JvbGxCZWhhdmlvclwiKSYmKGM9W3RoaXNdKSxjLmxlbmd0aHx8XCJCT0RZXCIhPT10aGlzLm5vZGVOYW1lfHwoYz1bdGhpc10pfSksXCJmaXJzdFwiPT09Yi5lbCYmYy5sZW5ndGg+MSYmKGM9W2NbMF1dKSxjfTthLmZuLmV4dGVuZCh7c2Nyb2xsYWJsZTpmdW5jdGlvbihhKXt2YXIgYj1lLmNhbGwodGhpcyx7ZGlyOmF9KTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYil9LGZpcnN0U2Nyb2xsYWJsZTpmdW5jdGlvbihhKXt2YXIgYj1lLmNhbGwodGhpcyx7ZWw6XCJmaXJzdFwiLGRpcjphfSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIpfSxzbW9vdGhTY3JvbGw6ZnVuY3Rpb24oYixjKXtpZihiPWJ8fHt9LFwib3B0aW9uc1wiPT09YilyZXR1cm4gYz90aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGQ9YS5leHRlbmQoYi5kYXRhKFwic3NPcHRzXCIpfHx7fSxjKTthKHRoaXMpLmRhdGEoXCJzc09wdHNcIixkKX0pOnRoaXMuZmlyc3QoKS5kYXRhKFwic3NPcHRzXCIpO3ZhciBkPWEuZXh0ZW5kKHt9LGEuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLGIpLGU9ZnVuY3Rpb24oYil7dmFyIGM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKDp8XFwufFxcLykvZyxcIlxcXFwkMVwiKX0sZT10aGlzLGY9YSh0aGlzKSxnPWEuZXh0ZW5kKHt9LGQsZi5kYXRhKFwic3NPcHRzXCIpfHx7fSksaD1kLmV4Y2x1ZGUsaT1nLmV4Y2x1ZGVXaXRoaW4saj0wLGs9MCxsPSEwLG09e30sbj1hLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSxvPWEuc21vb3RoU2Nyb2xsLmZpbHRlclBhdGgoZS5wYXRobmFtZSkscD1sb2NhdGlvbi5ob3N0bmFtZT09PWUuaG9zdG5hbWV8fCFlLmhvc3RuYW1lLHE9Zy5zY3JvbGxUYXJnZXR8fG89PT1uLHI9YyhlLmhhc2gpO2lmKHImJiFhKHIpLmxlbmd0aCYmKGw9ITEpLGcuc2Nyb2xsVGFyZ2V0fHxwJiZxJiZyKXtmb3IoO2wmJmo8aC5sZW5ndGg7KWYuaXMoYyhoW2orK10pKSYmKGw9ITEpO2Zvcig7bCYmazxpLmxlbmd0aDspZi5jbG9zZXN0KGlbaysrXSkubGVuZ3RoJiYobD0hMSl9ZWxzZSBsPSExO2wmJihnLnByZXZlbnREZWZhdWx0JiZiLnByZXZlbnREZWZhdWx0KCksYS5leHRlbmQobSxnLHtzY3JvbGxUYXJnZXQ6Zy5zY3JvbGxUYXJnZXR8fHIsbGluazplfSksYS5zbW9vdGhTY3JvbGwobSkpfTtyZXR1cm4gbnVsbCE9PWIuZGVsZWdhdGVTZWxlY3Rvcj90aGlzLnVuZGVsZWdhdGUoYi5kZWxlZ2F0ZVNlbGVjdG9yLFwiY2xpY2suc21vb3Roc2Nyb2xsXCIpLmRlbGVnYXRlKGIuZGVsZWdhdGVTZWxlY3RvcixcImNsaWNrLnNtb290aHNjcm9sbFwiLGUpOnRoaXMudW5iaW5kKFwiY2xpY2suc21vb3Roc2Nyb2xsXCIpLmJpbmQoXCJjbGljay5zbW9vdGhzY3JvbGxcIixlKSx0aGlzfX0pLGEuc21vb3RoU2Nyb2xsPWZ1bmN0aW9uKGIsZCl7aWYoXCJvcHRpb25zXCI9PT1iJiZcIm9iamVjdFwiPT10eXBlb2YgZClyZXR1cm4gYS5leHRlbmQoYyxkKTt2YXIgZSxmLGcsaCxpLGo9MCxrPVwib2Zmc2V0XCIsbD1cInNjcm9sbFRvcFwiLG09e30sbj17fTtcIm51bWJlclwiPT10eXBlb2YgYj8oZT1hLmV4dGVuZCh7bGluazpudWxsfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxjKSxnPWIpOihlPWEuZXh0ZW5kKHtsaW5rOm51bGx9LGEuZm4uc21vb3RoU2Nyb2xsLmRlZmF1bHRzLGJ8fHt9LGMpLGUuc2Nyb2xsRWxlbWVudCYmKGs9XCJwb3NpdGlvblwiLFwic3RhdGljXCI9PT1lLnNjcm9sbEVsZW1lbnQuY3NzKFwicG9zaXRpb25cIikmJmUuc2Nyb2xsRWxlbWVudC5jc3MoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIikpKSxsPVwibGVmdFwiPT09ZS5kaXJlY3Rpb24/XCJzY3JvbGxMZWZ0XCI6bCxlLnNjcm9sbEVsZW1lbnQ/KGY9ZS5zY3JvbGxFbGVtZW50LC9eKD86SFRNTHxCT0RZKSQvLnRlc3QoZlswXS5ub2RlTmFtZSl8fChqPWZbbF0oKSkpOmY9YShcImh0bWwsIGJvZHlcIikuZmlyc3RTY3JvbGxhYmxlKGUuZGlyZWN0aW9uKSxlLmJlZm9yZVNjcm9sbC5jYWxsKGYsZSksZz1cIm51bWJlclwiPT10eXBlb2YgYj9iOmR8fGEoZS5zY3JvbGxUYXJnZXQpW2tdKCkmJmEoZS5zY3JvbGxUYXJnZXQpW2tdKClbZS5kaXJlY3Rpb25dfHwwLG1bbF09ZytqK2Uub2Zmc2V0LGg9ZS5zcGVlZCxcImF1dG9cIj09PWgmJihpPU1hdGguYWJzKG1bbF0tZltsXSgpKSxoPWkvZS5hdXRvQ29lZmZpY2llbnQpLG49e2R1cmF0aW9uOmgsZWFzaW5nOmUuZWFzaW5nLGNvbXBsZXRlOmZ1bmN0aW9uKCl7ZS5hZnRlclNjcm9sbC5jYWxsKGUubGluayxlKX19LGUuc3RlcCYmKG4uc3RlcD1lLnN0ZXApLGYubGVuZ3RoP2Yuc3RvcCgpLmFuaW1hdGUobSxuKTplLmFmdGVyU2Nyb2xsLmNhbGwoZS5saW5rLGUpfSxhLnNtb290aFNjcm9sbC52ZXJzaW9uPWIsYS5zbW9vdGhTY3JvbGwuZmlsdGVyUGF0aD1mdW5jdGlvbihhKXtyZXR1cm4gYT1hfHxcIlwiLGEucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvKD86aW5kZXh8ZGVmYXVsdCkuW2EtekEtWl17Myw0fSQvLFwiXCIpLnJlcGxhY2UoL1xcLyQvLFwiXCIpfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cz1kfSk7IiwiLyohXHJcbiAqXHJcbiAqICBTdGF0aWMgV2Vic2l0ZSBTdGFydGVyIEtpdFxyXG4gKiAgQ29weXJpZ2h0IDIwMTUgS29uc3RhbnRpbiBUYXJrdXMsIEtyaWFzb2Z0IExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxyXG4gKlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgJCgnYScpLnNtb290aFNjcm9sbCgpO1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJG5hdmJhciA9ICQoJyNuYXZiYXInKTtcclxuICAgIGlmICgkbmF2YmFyLm9mZnNldCgpLnRvcCA+ICQod2luZG93KS5oZWlnaHQoKSkge1xyXG4gICAgICAkbmF2YmFyLmFkZENsYXNzKCdzY3JvbGxlZC1uYXYnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkLW5hdicpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gcGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJy4uL3BhcnRpY2xlcy5qc29uJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgY29uc29sZS5sb2coJ2NhbGxiYWNrIC0gcGFydGljbGVzLmpzIGNvbmZpZyBsb2FkZWQnKTtcclxuLy8gfSk7XHJcbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cclxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLyogRGVtbyAvIEdlbmVyYXRvciA6IHZpbmNlbnRnYXJyZWF1LmNvbS9wYXJ0aWNsZXMuanNcclxuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcclxuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxyXG4vKiB2Mi4wLjBcclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbnZhciBwSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XHJcblxyXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XHJcblxyXG4gIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xyXG4gIHRoaXMucEpTID0ge1xyXG4gICAgY2FudmFzOiB7XHJcbiAgICAgIGVsOiBjYW52YXNfZWwsXHJcbiAgICAgIHc6IGNhbnZhc19lbC5vZmZzZXRXaWR0aCxcclxuICAgICAgaDogY2FudmFzX2VsLm9mZnNldEhlaWdodFxyXG4gICAgfSxcclxuICAgIHBhcnRpY2xlczoge1xyXG4gICAgICBudW1iZXI6IHtcclxuICAgICAgICB2YWx1ZTogNDAwLFxyXG4gICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICB2YWx1ZTogJyNmZmYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXHJcbiAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvbHlnb246IHtcclxuICAgICAgICAgIG5iX3NpZGVzOiA1XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAsXHJcbiAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2l6ZToge1xyXG4gICAgICAgIHZhbHVlOiAyMCxcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGFuaW06IHtcclxuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzcGVlZDogMjAsXHJcbiAgICAgICAgICBzaXplX21pbjogMCxcclxuICAgICAgICAgIHN5bmM6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lX2xpbmtlZDoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB3aWR0aDogMVxyXG4gICAgICB9LFxyXG4gICAgICBtb3ZlOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAyLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIG91dF9tb2RlOiAnb3V0JyxcclxuICAgICAgICBib3VuY2U6IGZhbHNlLFxyXG4gICAgICAgIGF0dHJhY3Q6IHtcclxuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICByb3RhdGVYOiAzMDAwLFxyXG4gICAgICAgICAgcm90YXRlWTogMzAwMFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXJyYXk6IFtdXHJcbiAgICB9LFxyXG4gICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICBvbmhvdmVyOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICBtb2RlOiAnZ3JhYidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uY2xpY2s6IHtcclxuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIG1vZGU6ICdwdXNoJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgZ3JhYjp7XHJcbiAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgbGluZV9saW5rZWQ6e1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBidWJibGU6e1xyXG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICAgIHNpemU6IDgwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVwdWxzZTp7XHJcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHVzaDp7XHJcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTp7XHJcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNlOnt9XHJcbiAgICB9LFxyXG4gICAgcmV0aW5hX2RldGVjdDogZmFsc2UsXHJcbiAgICBmbjoge1xyXG4gICAgICBpbnRlcmFjdDoge30sXHJcbiAgICAgIG1vZGVzOiB7fSxcclxuICAgICAgdmVuZG9yczp7fVxyXG4gICAgfSxcclxuICAgIHRtcDoge31cclxuICB9O1xyXG5cclxuICB2YXIgcEpTID0gdGhpcy5wSlM7XHJcblxyXG4gIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xyXG4gIGlmKHBhcmFtcyl7XHJcbiAgICBPYmplY3QuZGVlcEV4dGVuZChwSlMsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBwSlMudG1wLm9iaiA9IHtcclxuICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcclxuICAgIHNpemVfYW5pbV9zcGVlZDogcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXHJcbiAgICBtb3ZlX3NwZWVkOiBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQsXHJcbiAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcclxuICAgIGxpbmVfbGlua2VkX3dpZHRoOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxyXG4gICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxyXG4gICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcclxuICAgIG1vZGVfYnViYmxlX3NpemU6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxyXG4gICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZihwSlMucmV0aW5hX2RldGVjdCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpe1xyXG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXHJcbiAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcclxuICAgIH0gXHJcbiAgICBlbHNle1xyXG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSAxO1xyXG4gICAgICBwSlMudG1wLnJldGluYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuXHJcbiAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSBwSlMudG1wLm9iai5zaXplX2FuaW1fc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgPSBwSlMudG1wLm9iai5tb3ZlX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIHBKUy5mbi5jYW52YXNJbml0ID0gZnVuY3Rpb24oKXtcclxuICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIH07XHJcblxyXG4gIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xyXG4gICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XHJcblxyXG4gICAgaWYocEpTICYmIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUpe1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cclxuICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgICAgcEpTLmNhbnZhcy5oICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xyXG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XHJcblxyXG4gICAgICAgICAgLyogcmVwYWludCBjYW52YXMgb24gYW5pbSBkaXNhYmxlZCAqL1xyXG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcclxuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xyXG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24oKXtcclxuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qIC0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXHJcblxyXG4gIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uKGNvbG9yLCBvcGFjaXR5LCBwb3NpdGlvbil7XHJcblxyXG4gICAgLyogc2l6ZSAqL1xyXG4gICAgdGhpcy5yYWRpdXMgPSAocEpTLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZTtcclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XHJcbiAgICAgIHRoaXMuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy52cyA9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwO1xyXG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyl7XHJcbiAgICAgICAgdGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogcG9zaXRpb24gKi9cclxuICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICB0aGlzLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xyXG4gICAgaWYodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXM7XHJcbiAgICBlbHNlIGlmKHRoaXMueCA8IHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xyXG4gICAgaWYodGhpcy55ID4gcEpTLmNhbnZhcy5oIC0gdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXM7XHJcbiAgICBlbHNlIGlmKHRoaXMueSA8IHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzO1xyXG5cclxuICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XHJcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCh0aGlzLCBwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyogY29sb3IgKi9cclxuICAgIHRoaXMuY29sb3IgPSB7fTtcclxuICAgIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpe1xyXG5cclxuICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgdmFyIGNvbG9yX3NlbGVjdGVkID0gY29sb3IudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcEpTLnBhcnRpY2xlcy5jb2xvci52YWx1ZS5sZW5ndGgpXTtcclxuICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKGNvbG9yX3NlbGVjdGVkKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XHJcbiAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXHJcbiAgICAgICAgICAgIGc6IGNvbG9yLnZhbHVlLmcsXHJcbiAgICAgICAgICAgIGI6IGNvbG9yLnZhbHVlLmJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgdGhpcy5jb2xvci5oc2wgPSB7XHJcbiAgICAgICAgICAgIGg6IGNvbG9yLnZhbHVlLmgsXHJcbiAgICAgICAgICAgIHM6IGNvbG9yLnZhbHVlLnMsXHJcbiAgICAgICAgICAgIGw6IGNvbG9yLnZhbHVlLmxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcclxuICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XHJcbiAgICAgICAgcjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXHJcbiAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXHJcbiAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdzdHJpbmcnKXtcclxuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIG9wYWNpdHkgKi9cclxuICAgIHRoaXMub3BhY2l0eSA9IChwSlMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlO1xyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKXtcclxuICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XHJcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jKXtcclxuICAgICAgICB0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBhbmltYXRpb24gLSB2ZWxvY2l0eSBmb3Igc3BlZWQgKi9cclxuICAgIHZhciB2ZWxiYXNlID0ge31cclxuICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6LTEgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6LTAuNSB9O1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MSwgeTotMCB9O1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcclxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTowLjUgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjEgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcclxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6MSB9O1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMSwgeTowIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AtbGVmdCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5Oi0wLjUgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KXtcclxuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueDtcclxuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueTtcclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSl7XHJcbiAgICAgICAgdGhpcy52eCA9IHRoaXMudnggKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54ICsgTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnkgKyBNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgIC8vIHRoaXMudnggPSBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAvLyB0aGlzLnZ5ID0gTWF0aC5zaW4odGhldGEpO1xyXG5cclxuICAgIHRoaXMudnhfaSA9IHRoaXMudng7XHJcbiAgICB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXHJcblxyXG4gICAgdmFyIHNoYXBlX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnR5cGU7XHJcbiAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xyXG4gICAgICBpZihzaGFwZV90eXBlIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgIHZhciBzaGFwZV9zZWxlY3RlZCA9IHNoYXBlX3R5cGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVfdHlwZS5sZW5ndGgpXTtcclxuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnNoYXBlID09ICdpbWFnZScpe1xyXG4gICAgICB2YXIgc2ggPSBwSlMucGFydGljbGVzLnNoYXBlO1xyXG4gICAgICB0aGlzLmltZyA9IHtcclxuICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcclxuICAgICAgICByYXRpbzogc2guaW1hZ2Uud2lkdGggLyBzaC5pbWFnZS5oZWlnaHRcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcclxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyk7XHJcbiAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcclxuICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHAgPSB0aGlzO1xyXG5cclxuICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXNfYnViYmxlOyBcclxuICAgIH1lbHNle1xyXG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocC5vcGFjaXR5X2J1YmJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eV9idWJibGU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYocC5jb2xvci5yZ2Ipe1xyXG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK29wYWNpdHkrJyknO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcclxuICAgIH1cclxuXHJcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsU3R5bGUgPSBjb2xvcl92YWx1ZTtcclxuICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgIHN3aXRjaChwLnNoYXBlKXtcclxuXHJcbiAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZWRnZSc6XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgucmVjdChwLngtcmFkaXVzLCBwLnktcmFkaXVzLCByYWRpdXMqMiwgcmFkaXVzKjIpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueC1yYWRpdXMsIHAueStyYWRpdXMgLyAxLjY2LCByYWRpdXMqMiwgMywgMik7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXHJcbiAgICAgICAgICBwLnggLSByYWRpdXMgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMuNSksIC8vIHN0YXJ0WFxyXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXHJcbiAgICAgICAgICByYWRpdXMqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXHJcbiAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXHJcbiAgICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdzdGFyJzpcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcclxuICAgICAgICAgIHAueCAtIHJhZGl1cyoyIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy80KSwgLy8gc3RhcnRYXHJcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMioyLjY2LzMuNSksIC8vIHN0YXJ0WVxyXG4gICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcclxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXHJcbiAgICAgICAgICAyIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXHJcbiAgICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdpbWFnZSc6XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKXtcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgaW1nX29iaixcclxuICAgICAgICAgICAgcC54LXJhZGl1cyxcclxuICAgICAgICAgICAgcC55LXJhZGl1cyxcclxuICAgICAgICAgICAgcmFkaXVzKjIsXHJcbiAgICAgICAgICAgIHJhZGl1cyoyIC8gcC5pbWcucmF0aW9cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcclxuICAgICAgICAgIHZhciBpbWdfb2JqID0gcC5pbWcub2JqO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwSlMudG1wLmltZ19vYmo7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpbWdfb2JqKXtcclxuICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKXtcclxuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcjtcclxuICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XHJcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsKCk7XHJcbiAgICBcclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xyXG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwSlMuZm4ucGFydGljbGVzVXBkYXRlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAvKiB0aGUgcGFydGljbGUgKi9cclxuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG5cclxuICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcclxuICAgICAgLy8gdmFyIGYgPSAtQkFOR19TSVpFIC8gZDtcclxuICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xyXG4gICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcclxuICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XHJcbiAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xyXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICB2YXIgbXMgPSBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQvMjtcclxuICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xyXG4gICAgICAgIHAueSArPSBwLnZ5ICogbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGNoYW5nZSBvcGFjaXR5IHN0YXR1cyAqL1xyXG4gICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcclxuICAgICAgICBpZihwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcclxuICAgICAgICAgIGlmKHAub3BhY2l0eSA+PSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHAub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIGlmKHAub3BhY2l0eSA8PSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbikgcC5vcGFjaXR5X3N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICBwLm9wYWNpdHkgLT0gcC52bztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocC5vcGFjaXR5IDwgMCkgcC5vcGFjaXR5ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogY2hhbmdlIHNpemUgKi9cclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcclxuICAgICAgICBpZihwLnNpemVfc3RhdHVzID09IHRydWUpe1xyXG4gICAgICAgICAgaWYocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICBwLnJhZGl1cyArPSBwLnZzO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgaWYocC5yYWRpdXMgPD0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4pIHAuc2l6ZV9zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgcC5yYWRpdXMgLT0gcC52cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocC5yYWRpdXMgPCAwKSBwLnJhZGl1cyA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGNoYW5nZSBwYXJ0aWNsZSBwb3NpdGlvbiBpZiBpdCBpcyBvdXQgb2YgY2FudmFzICovXHJcbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XHJcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XHJcbiAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxyXG4gICAgICAgICAgeF9yaWdodDogIHBKUy5jYW52YXMudyxcclxuICAgICAgICAgIHlfdG9wOiBwLnJhZGl1cyxcclxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xyXG4gICAgICAgICAgeF9sZWZ0OiAtcC5yYWRpdXMsXHJcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcclxuICAgICAgICAgIHlfdG9wOiAtcC5yYWRpdXMsXHJcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oICsgcC5yYWRpdXNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHAueCAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KXtcclxuICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcclxuICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYocC54ICsgcC5yYWRpdXMgPCAwKXtcclxuICAgICAgICBwLnggPSBuZXdfcG9zLnhfcmlnaHQ7XHJcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgfVxyXG4gICAgICBpZihwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCl7XHJcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X3RvcDtcclxuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYocC55ICsgcC5yYWRpdXMgPCAwKXtcclxuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfYm90dG9tO1xyXG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIG91dCBvZiBjYW52YXMgbW9kZXMgKi9cclxuICAgICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7XHJcbiAgICAgICAgY2FzZSAnYm91bmNlJzpcclxuICAgICAgICAgIGlmIChwLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICBpZiAocC55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcclxuICAgICAgICAgIGVsc2UgaWYgKHAueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBldmVudHMgKi9cclxuICAgICAgaWYoaXNJbkFycmF5KCdncmFiJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe1xyXG4gICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcbiAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XHJcbiAgICAgICAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZShwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogaW50ZXJhY3Rpb24gYXV0byBiZXR3ZWVuIHBhcnRpY2xlcyAqL1xyXG4gICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSB8fCBwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xyXG4gICAgICAgIGZvcih2YXIgaiA9IGkgKyAxOyBqIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2pdO1xyXG5cclxuICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXHJcbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSl7XHJcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKHAscDIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXHJcbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xyXG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXHJcbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcclxuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlc0RyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xyXG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcclxuXHJcbiAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtcclxuXHJcbiAgICAvKiBkcmF3IGVhY2ggcGFydGljbGUgKi9cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG4gICAgICBwLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5ID0gZnVuY3Rpb24oKXtcclxuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcclxuICB9O1xyXG5cclxuICBwSlMuZm4ucGFydGljbGVzUmVmcmVzaCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLyogaW5pdCBhbGwgKi9cclxuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gdW5kZWZpbmVkO1xyXG4gICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xyXG4gICAgcEpTLnRtcC5jb3VudF9zdmcgPSAwO1xyXG4gICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XHJcbiAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcclxuICAgIFxyXG4gICAgLyogcmVzdGFydCAqL1xyXG4gICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxyXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHAxIGFuZCBwMiBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cclxuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XHJcblxyXG4gICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMS9wSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XHJcblxyXG4gICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIHN0eWxlICovXHJcbiAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XHJcbiAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cclxuICAgICAgICBcclxuICAgICAgICAvKiBwYXRoICovXHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAxLngsIHAxLnkpO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyAgPSBmdW5jdGlvbihwMSwgcDIpe1xyXG5cclxuICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cclxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxyXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgdmFyIGF4ID0gZHgvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVgqMTAwMCksXHJcbiAgICAgICAgICBheSA9IGR5LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKjEwMDApO1xyXG5cclxuICAgICAgcDEudnggLT0gYXg7XHJcbiAgICAgIHAxLnZ5IC09IGF5O1xyXG5cclxuICAgICAgcDIudnggKz0gYXg7XHJcbiAgICAgIHAyLnZ5ICs9IGF5O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICB9XHJcblxyXG5cclxuICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxyXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXHJcbiAgICAgICAgZGlzdF9wID0gcDEucmFkaXVzK3AyLnJhZGl1cztcclxuXHJcbiAgICBpZihkaXN0IDw9IGRpc3RfcCl7XHJcbiAgICAgIHAxLnZ4ID0gLXAxLnZ4O1xyXG4gICAgICBwMS52eSA9IC1wMS52eTtcclxuXHJcbiAgICAgIHAyLnZ4ID0gLXAyLnZ4O1xyXG4gICAgICBwMi52eSA9IC1wMi52eTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iLCBwb3Mpe1xyXG5cclxuICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5iOyBpKyspe1xyXG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2goXHJcbiAgICAgICAgbmV3IHBKUy5mbi5wYXJ0aWNsZShcclxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuY29sb3IsXHJcbiAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICd4JzogcG9zID8gcG9zLnBvc194IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudyxcclxuICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIGlmKGkgPT0gbmItMSl7XHJcbiAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcEpTLnRtcC5wdXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYil7XHJcblxyXG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xyXG4gICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgLyogb24gaG92ZXIgZXZlbnQgKi9cclxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcclxuXHJcbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXHJcbiAgICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xyXG5cclxuICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XHJcbiAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gcC5yYWRpdXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIG1vdXNlbW92ZSAtIGNoZWNrIHJhdGlvICovXHJcbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgICAgaWYocmF0aW8gPj0gMCAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAhPSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xyXG5cclxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xyXG4gICAgICAgICAgICAgIHZhciBzaXplID0gcC5yYWRpdXMgKyAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqcmF0aW8pO1xyXG4gICAgICAgICAgICAgIGlmKHNpemUgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdmFyIGRpZiA9IHAucmFkaXVzIC0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgIHNpemUgPSBwLnJhZGl1cyAtIChkaWYqcmF0aW8pO1xyXG4gICAgICAgICAgICAgIGlmKHNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBvcGFjaXR5ICovXHJcbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG5cclxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xyXG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkqcmF0aW87XHJcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA+IHAub3BhY2l0eSAmJiBvcGFjaXR5IDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcclxuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLXBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpyYXRpbztcclxuICAgICAgICAgICAgICBpZihvcGFjaXR5IDwgcC5vcGFjaXR5ICYmIG9wYWNpdHkgPj0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xyXG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvKiBtb3VzZWxlYXZlICovXHJcbiAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpe1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cclxuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xyXG5cclxuXHJcbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcclxuICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxcclxuICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcclxuICAgICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcclxuICAgICAgICAgICAgdGltZV9zcGVudCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzEwMDA7XHJcblxyXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pe1xyXG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24qMil7XHJcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xyXG5cclxuICAgICAgICBpZihidWJibGVfcGFyYW0gIT0gcGFydGljbGVzX3BhcmFtKXtcclxuXHJcbiAgICAgICAgICBpZighcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtcclxuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xyXG4gICAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHZhciBvYmogPSBwX29ial9idWJibGU7XHJcbiAgICAgICAgICAgICAgZWxzZSB2YXIgb2JqID0gcF9vYmo7XHJcbiAgICAgICAgICAgICAgaWYob2JqICE9IGJ1YmJsZV9wYXJhbSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICB2YXIgdmFsdWVfdG1wID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICBkaWYgPSBidWJibGVfcGFyYW0gLSB2YWx1ZV90bXA7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xyXG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xyXG4gICAgICAgIC8qIHNpemUgKi9cclxuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCBwSlMucGFydGljbGVzLnNpemUudmFsdWUsIHAucmFkaXVzX2J1YmJsZSwgcC5yYWRpdXMsICdzaXplJyk7XHJcbiAgICAgICAgLyogb3BhY2l0eSAqL1xyXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcclxuXHJcbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxyXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcclxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XHJcblxyXG4gICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcclxuICAgICAgICAgIHJlcHVsc2VSYWRpdXMgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLFxyXG4gICAgICAgICAgdmVsb2NpdHkgPSAxMDAsXHJcbiAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXHJcbiAgICAgICAgeTogcC55ICsgbm9ybVZlYy55ICogcmVwdWxzZUZhY3RvclxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgIGlmKHBvcy54IC0gcC5yYWRpdXMgPiAwICYmIHBvcy54ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLncpIHAueCA9IHBvcy54O1xyXG4gICAgICAgIGlmKHBvcy55IC0gcC5yYWRpdXMgPiAwICYmIHBvcy55ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLmgpIHAueSA9IHBvcy55O1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBwLnggPSBwb3MueDtcclxuICAgICAgICBwLnkgPSBwb3MueTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XHJcblxyXG4gICAgICBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XHJcbiAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XHJcbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NvdW50ID09IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKXtcclxuICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nKXtcclxuXHJcbiAgICAgICAgdmFyIHJlcHVsc2VSYWRpdXMgPSBNYXRoLnBvdyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLzYsIDMpO1xyXG5cclxuICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcclxuICAgICAgICAgICAgZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSxcclxuICAgICAgICAgICAgZCA9IGR4KmR4ICsgZHkqZHk7XHJcblxyXG4gICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoKXtcclxuXHJcbiAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xyXG4gICAgICAgICAgcC52eCA9IGZvcmNlICogTWF0aC5jb3MoZik7XHJcbiAgICAgICAgICBwLnZ5ID0gZm9yY2UgKiBNYXRoLnNpbihmKTtcclxuXHJcbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgICAgICB2YXIgcG9zID0ge1xyXG4gICAgICAgICAgICAgIHg6IHAueCArIHAudngsXHJcbiAgICAgICAgICAgICAgeTogcC55ICsgcC52eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XHJcbiAgICAgICAgICAgIGlmIChwb3MueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XHJcbiAgICAgICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxyXG4gICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcclxuICAgICAgICAvLyAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XHJcbiAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgIHByb2Nlc3MoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKXtcclxuXHJcbiAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xyXG4gICAgICAgICAgcC52eSA9IHAudnlfaTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJyl7XHJcblxyXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xyXG5cclxuICAgICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiB0aGUgY3Vyc29yIGFuZCB0aGUgcGFydGljbGUgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXHJcbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdF9tb3VzZSAvICgxL3BKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7XHJcblxyXG4gICAgICAgICAgLyogc3R5bGUgKi9cclxuICAgICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcclxuICAgICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qIHBhdGggKi9cclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAueCwgcC55KTtcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8qIGV2ZW50cyB0YXJnZXQgZWxlbWVudCAqL1xyXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKXtcclxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSB3aW5kb3c7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSBwSlMuY2FudmFzLmVsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBkZXRlY3QgbW91c2UgcG9zIC0gb24gaG92ZXIgLyBjbGljayBldmVudCAqL1xyXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XHJcblxyXG4gICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cclxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmVsID09IHdpbmRvdyl7XHJcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgIHBvc195ID0gZS5vZmZzZXRZIHx8IGUuY2xpZW50WTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gcG9zX3g7XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcclxuXHJcbiAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xyXG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbW92ZSc7XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8qIGVsIG9uIG9ubW91c2VsZWF2ZSAqL1xyXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gbnVsbDtcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbGVhdmUnO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXHJcbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k7XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgICAgIHN3aXRjaChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxyXG4gICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xyXG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdidWJibGUnOlxyXG4gICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdyZXB1bHNlJzpcclxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0sIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24qMTAwMClcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZihwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7XHJcblxyXG4gICAgICAvKiBjYWxjIGFyZWEgKi9cclxuICAgICAgdmFyIGFyZWEgPSBwSlMuY2FudmFzLmVsLndpZHRoICogcEpTLmNhbnZhcy5lbC5oZWlnaHQgLyAxMDAwO1xyXG4gICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgYXJlYSA9IGFyZWEvKHBKUy5jYW52YXMucHhyYXRpbyoyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xyXG4gICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xyXG5cclxuICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xyXG4gICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcclxuICAgICAgaWYobWlzc2luZ19wYXJ0aWNsZXMgPCAwKSBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhtaXNzaW5nX3BhcnRpY2xlcykpO1xyXG4gICAgICBlbHNlIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMobWlzc2luZ19wYXJ0aWNsZXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHAxLCBwb3NpdGlvbil7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XHJcblxyXG4gICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXHJcbiAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG5cclxuICAgICAgaWYoZGlzdCA8PSBwMS5yYWRpdXMgKyBwMi5yYWRpdXMpe1xyXG4gICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChwMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nID0gZnVuY3Rpb24ocCl7XHJcblxyXG4gICAgLyogc2V0IGNvbG9yIHRvIHN2ZyBlbGVtZW50ICovXHJcbiAgICB2YXIgc3ZnWG1sID0gcEpTLnRtcC5zb3VyY2Vfc3ZnLFxyXG4gICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxyXG4gICAgICAgIGNvbG9yZWRTdmdYbWwgPSBzdmdYbWwucmVwbGFjZShyZ2JIZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgICBpZihwLmNvbG9yLnJnYil7XHJcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrcC5vcGFjaXR5KycpJztcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrcC5vcGFjaXR5KycpJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjb2xvcl92YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvKiBwcmVwYXJlIHRvIGNyZWF0ZSBpbWcgd2l0aCBjb2xvcmVkIHN2ZyAqL1xyXG4gICAgdmFyIHN2ZyA9IG5ldyBCbG9iKFtjb2xvcmVkU3ZnWG1sXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgnfSksXHJcbiAgICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcclxuICAgICAgICB1cmwgPSBET01VUkwuY3JlYXRlT2JqZWN0VVJMKHN2Zyk7XHJcblxyXG4gICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgcC5pbWcub2JqID0gaW1nO1xyXG4gICAgICBwLmltZy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICBET01VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XHJcbiAgICB9KTtcclxuICAgIGltZy5zcmMgPSB1cmw7XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTID0gZnVuY3Rpb24oKXtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcclxuICAgIHBKU0RvbSA9IG51bGw7XHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZSA9IGZ1bmN0aW9uKGMsIHN0YXJ0WCwgc3RhcnRZLCBzaWRlTGVuZ3RoLCBzaWRlQ291bnROdW1lcmF0b3IsIHNpZGVDb3VudERlbm9taW5hdG9yKXtcclxuXHJcbiAgICAvLyBCeSBQcm9ncmFtbWluZyBUaG9tYXMgLSBodHRwczovL3Byb2dyYW1taW5ndGhvbWFzLndvcmRwcmVzcy5jb20vMjAxMy8wNC8wMy9uLXNpZGVkLXNoYXBlcy9cclxuICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcclxuICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcclxuICAgIHZhciBpbnRlcmlvckFuZ2xlRGVncmVlcyA9ICgxODAgKiAoZGVjaW1hbFNpZGVzIC0gMikpIC8gZGVjaW1hbFNpZGVzO1xyXG4gICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcclxuICAgIGMuc2F2ZSgpO1xyXG4gICAgYy5iZWdpblBhdGgoKTtcclxuICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgIGMubW92ZVRvKDAsMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XHJcbiAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsMCk7XHJcbiAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsMCk7XHJcbiAgICAgIGMucm90YXRlKGludGVyaW9yQW5nbGUpO1xyXG4gICAgfVxyXG4gICAgLy9jLnN0cm9rZSgpO1xyXG4gICAgYy5maWxsKCk7XHJcbiAgICBjLnJlc3RvcmUoKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24oKXtcclxuICAgIHdpbmRvdy5vcGVuKHBKUy5jYW52YXMuZWwudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSwgJ19ibGFuaycpO1xyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nID0gZnVuY3Rpb24odHlwZSl7XHJcblxyXG4gICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpe1xyXG5cclxuICAgICAgaWYodHlwZSA9PSAnc3ZnJyl7XHJcblxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuXHJcbiAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xyXG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1nLnNyYyA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjJyk7XHJcbiAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcclxuXHJcbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xyXG5cclxuICAgICAgICBpZihwSlMudG1wLmNvdW50X3N2ZyA+PSBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSl7XHJcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XHJcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgaWYocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xyXG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIGlmIHNoYXBlIGlzIGltYWdlXHJcbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XHJcblxyXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHBKUy50bXAuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzIGxvYWRlZCEgY2FuY2VsIGNoZWNrJyk7XHJcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMudG1wLmNoZWNrQW5pbUZyYW1lKTtcclxuICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3Ipe1xyXG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xyXG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XHJcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXHJcbiAgICBwSlMuZm4ucmV0aW5hSW5pdCgpO1xyXG4gICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcclxuICAgIHBKUy5mbi5jYW52YXNTaXplKCk7XHJcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQoKTtcclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcclxuICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XHJcblxyXG4gICAgLyogcGFydGljbGVzLmxpbmVfbGlua2VkIC0gY29udmVydCBoZXggY29sb3JzIHRvIHJnYiAqL1xyXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKGlzSW5BcnJheSgnaW1hZ2UnLCBwSlMucGFydGljbGVzLnNoYXBlLnR5cGUpKXtcclxuICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcclxuICAgICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyhwSlMudG1wLmltZ190eXBlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBwSlMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpO1xyXG5cclxuICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xyXG4gIFxyXG5cclxuXHJcbn07XHJcblxyXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuT2JqZWN0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XHJcbiAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXHJcbiAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcclxuICAgICAgYXJndW1lbnRzLmNhbGxlZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXtcclxuICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcclxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcclxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxud2luZG93LmNhbmNlbFJlcXVlc3RBbmltRnJhbWUgPSAoIGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICAgICB8fFxyXG4gICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxyXG4gICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxyXG4gICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxyXG4gICAgY2xlYXJUaW1lb3V0XHJcbn0gKSgpO1xyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KXtcclxuICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxyXG4gIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcclxuICB2YXIgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcbiAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICB9KTtcclxuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgcmV0dXJuIHJlc3VsdCA/IHtcclxuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gIH0gOiBudWxsO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW1iZXIsIG1pbiksIG1heCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc0luQXJyYXkodmFsdWUsIGFycmF5KSB7XHJcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbndpbmRvdy5wSlNEb20gPSBbXTtcclxuXHJcbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cclxuICAvKiBubyBzdHJpbmcgaWQ/IHNvIGl0J3Mgb2JqZWN0IHBhcmFtcywgYW5kIHNldCB0aGUgaWQgd2l0aCBkZWZhdWx0IGlkICovXHJcbiAgaWYodHlwZW9mKHRhZ19pZCkgIT0gJ3N0cmluZycpe1xyXG4gICAgcGFyYW1zID0gdGFnX2lkO1xyXG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XHJcbiAgfVxyXG5cclxuICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXHJcbiAgaWYoIXRhZ19pZCl7XHJcbiAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcclxuICB9XHJcblxyXG4gIC8qIHBKUyBlbGVtZW50cyAqL1xyXG4gIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcclxuICAgICAgcEpTX2NhbnZhc19jbGFzcyA9ICdwYXJ0aWNsZXMtanMtY2FudmFzLWVsJyxcclxuICAgICAgZXhpc3RfY2FudmFzID0gcEpTX3RhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBKU19jYW52YXNfY2xhc3MpO1xyXG5cclxuICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xyXG4gIGlmKGV4aXN0X2NhbnZhcy5sZW5ndGgpe1xyXG4gICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xyXG4gICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cclxuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XHJcblxyXG4gIC8qIHNldCBzaXplIGNhbnZhcyAqL1xyXG4gIGNhbnZhc19lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHJcbiAgLyogYXBwZW5kIGNhbnZhcyAqL1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLmFwcGVuZENoaWxkKGNhbnZhc19lbCk7XHJcblxyXG4gIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xyXG4gIGlmKGNhbnZhcyAhPSBudWxsKXtcclxuICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxud2luZG93LnBhcnRpY2xlc0pTLmxvYWQgPSBmdW5jdGlvbih0YWdfaWQsIHBhdGhfY29uZmlnX2pzb24sIGNhbGxiYWNrKXtcclxuXHJcbiAgLyogbG9hZCBqc29uIGNvbmZpZyAqL1xyXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XHJcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcclxuICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7XHJcbiAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcclxuICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogJyt4aHIuc3RhdHVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHhoci5zZW5kKCk7XHJcblxyXG59OyIsIi8qIVxyXG4gKlxyXG4gKiAgU3RhdGljIFdlYnNpdGUgU3RhcnRlciBLaXRcclxuICogIENvcHlyaWdodCAyMDE1IEtvbnN0YW50aW4gVGFya3VzLCBLcmlhc29mdCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcclxuICpcclxuICovXHJcblxyXG4vLyBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXHJcbihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBtZXRob2Q7XHJcbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcclxuICB2YXIgbWV0aG9kcyA9IFtcclxuICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAnZXhjZXB0aW9uJywgJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2luZm8nLCAnbG9nJyxcclxuICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXHJcbiAgICAndGltZWxpbmUnLCAndGltZWxpbmVFbmQnLCAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgXTtcclxuICB2YXIgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGg7XHJcbiAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdO1xyXG5cclxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cclxuICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XHJcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XHJcbiAgICB9XHJcbiAgfVxyXG59KCkpO1xyXG5cclxuLy8gUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

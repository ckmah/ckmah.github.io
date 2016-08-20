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
	var $navbar = $('#navbar');
	var scrollOffset = $navbar.height();
	$('a').smoothScroll({
		offset: -scrollOffset + 1
	});
	$(window).scroll(function() {
		var offset = $navbar.offset().top;
		if (offset > $navbar.height()) {
			$navbar.addClass('scrolled-nav');
		} else {
			$navbar.removeClass('scrolled-nav');
		}

		// reset
		$('#nav li').removeClass('active');

		// bottom to top order
		// contact page
		if (offset >= $('#contact').offset().top - scrollOffset) {
			// console.log('contact');
			$('#nav li a[href="#contact"]').parent().addClass('active');
		}
		// work page
		else if (offset >= $('#work').offset().top - scrollOffset) {
			// console.log('work');
			$('#nav li a[href="#work"]').parent().addClass('active');
		}
		// about page
		else if (offset >= $('#about').offset().top - scrollOffset) {
			// console.log('about');
			$('#nav li a[href="#about"]').parent().addClass('active');
		}
		// home page
		else {
			// console.log('home');
			$('#nav li a[href="#home"]').parent().addClass('active');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5taW4uanMiLCJqcXVlcnkuc21vb3RoLXNjcm9sbC5taW4uanMiLCJtYWluLmpzIiwicGFydGljbGVzLmpzIiwicGx1Z2lucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBCb290c3RyYXAgdjMuMy40IChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcclxuICogQ29weXJpZ2h0IDIwMTEtMjAxNSBUd2l0dGVyLCBJbmMuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5XCIpOytmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1hLmZuLmpxdWVyeS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCIuXCIpO2lmKGJbMF08MiYmYlsxXTw5fHwxPT1iWzBdJiY5PT1iWzFdJiZiWzJdPDEpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkgdmVyc2lvbiAxLjkuMSBvciBoaWdoZXJcIil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9vdHN0cmFwXCIpLGI9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn07Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YS5zdHlsZVtjXSlyZXR1cm57ZW5kOmJbY119O3JldHVybiExfWEuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oYil7dmFyIGM9ITEsZD10aGlzO2EodGhpcykub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtjPSEwfSk7dmFyIGU9ZnVuY3Rpb24oKXtjfHxhKGQpLnRyaWdnZXIoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKX07cmV0dXJuIHNldFRpbWVvdXQoZSxiKSx0aGlzfSxhKGZ1bmN0aW9uKCl7YS5zdXBwb3J0LnRyYW5zaXRpb249YigpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiYoYS5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZD17YmluZFR5cGU6YS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGRlbGVnYXRlVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsaGFuZGxlOmZ1bmN0aW9uKGIpe3JldHVybiBhKGIudGFyZ2V0KS5pcyh0aGlzKT9iLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIDB9fSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmFsZXJ0XCIpO2V8fGMuZGF0YShcImJzLmFsZXJ0XCIsZT1uZXcgZCh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0uY2FsbChjKX0pfXZhciBjPSdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nLGQ9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrXCIsYyx0aGlzLmNsb3NlKX07ZC5WRVJTSU9OPVwiMy4zLjRcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtnLmRldGFjaCgpLnRyaWdnZXIoXCJjbG9zZWQuYnMuYWxlcnRcIikucmVtb3ZlKCl9dmFyIGU9YSh0aGlzKSxmPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2Z8fChmPWUuYXR0cihcImhyZWZcIiksZj1mJiZmLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBnPWEoZik7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGcubGVuZ3RofHwoZz1lLmNsb3Nlc3QoXCIuYWxlcnRcIikpLGcudHJpZ2dlcihiPWEuRXZlbnQoXCJjbG9zZS5icy5hbGVydFwiKSksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KGcucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZy5oYXNDbGFzcyhcImZhZGVcIik/Zy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixjKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmMoKSl9O3ZhciBlPWEuZm4uYWxlcnQ7YS5mbi5hbGVydD1iLGEuZm4uYWxlcnQuQ29uc3RydWN0b3I9ZCxhLmZuLmFsZXJ0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hbGVydD1lLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYWxlcnQuZGF0YS1hcGlcIixjLGQucHJvdG90eXBlLmNsb3NlKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmJ1dHRvblwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmJ1dHRvblwiLGU9bmV3IGModGhpcyxmKSksXCJ0b2dnbGVcIj09Yj9lLnRvZ2dsZSgpOmImJmUuc2V0U3RhdGUoYil9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLmlzTG9hZGluZz0hMX07Yy5WRVJTSU9OPVwiMy4zLjRcIixjLkRFRkFVTFRTPXtsb2FkaW5nVGV4dDpcImxvYWRpbmcuLi5cIn0sYy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYil7dmFyIGM9XCJkaXNhYmxlZFwiLGQ9dGhpcy4kZWxlbWVudCxlPWQuaXMoXCJpbnB1dFwiKT9cInZhbFwiOlwiaHRtbFwiLGY9ZC5kYXRhKCk7Yis9XCJUZXh0XCIsbnVsbD09Zi5yZXNldFRleHQmJmQuZGF0YShcInJlc2V0VGV4dFwiLGRbZV0oKSksc2V0VGltZW91dChhLnByb3h5KGZ1bmN0aW9uKCl7ZFtlXShudWxsPT1mW2JdP3RoaXMub3B0aW9uc1tiXTpmW2JdKSxcImxvYWRpbmdUZXh0XCI9PWI/KHRoaXMuaXNMb2FkaW5nPSEwLGQuYWRkQ2xhc3MoYykuYXR0cihjLGMpKTp0aGlzLmlzTG9hZGluZyYmKHRoaXMuaXNMb2FkaW5nPSExLGQucmVtb3ZlQ2xhc3MoYykucmVtb3ZlQXR0cihjKSl9LHRoaXMpLDApfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt2YXIgYT0hMCxiPXRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpO2lmKGIubGVuZ3RoKXt2YXIgYz10aGlzLiRlbGVtZW50LmZpbmQoXCJpbnB1dFwiKTtcInJhZGlvXCI9PWMucHJvcChcInR5cGVcIikmJihjLnByb3AoXCJjaGVja2VkXCIpJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpP2E9ITE6Yi5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSksYSYmYy5wcm9wKFwiY2hlY2tlZFwiLCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKS50cmlnZ2VyKFwiY2hhbmdlXCIpfWVsc2UgdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpO2EmJnRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBkPWEuZm4uYnV0dG9uO2EuZm4uYnV0dG9uPWIsYS5mbi5idXR0b24uQ29uc3RydWN0b3I9YyxhLmZuLmJ1dHRvbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYnV0dG9uPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCk7ZC5oYXNDbGFzcyhcImJ0blwiKXx8KGQ9ZC5jbG9zZXN0KFwiLmJ0blwiKSksYi5jYWxsKGQsXCJ0b2dnbGVcIiksYy5wcmV2ZW50RGVmYXVsdCgpfSkub24oXCJmb2N1cy5icy5idXR0b24uZGF0YS1hcGkgYmx1ci5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYil7YShiLnRhcmdldCkuY2xvc2VzdChcIi5idG5cIikudG9nZ2xlQ2xhc3MoXCJmb2N1c1wiLC9eZm9jdXMoaW4pPyQvLnRlc3QoYi50eXBlKSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmNhcm91c2VsXCIpLGY9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksZz1cInN0cmluZ1wiPT10eXBlb2YgYj9iOmYuc2xpZGU7ZXx8ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIixlPW5ldyBjKHRoaXMsZikpLFwibnVtYmVyXCI9PXR5cGVvZiBiP2UudG8oYik6Zz9lW2ddKCk6Zi5pbnRlcnZhbCYmZS5wYXVzZSgpLmN5Y2xlKCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1jLHRoaXMucGF1c2VkPW51bGwsdGhpcy5zbGlkaW5nPW51bGwsdGhpcy5pbnRlcnZhbD1udWxsLHRoaXMuJGFjdGl2ZT1udWxsLHRoaXMuJGl0ZW1zPW51bGwsdGhpcy5vcHRpb25zLmtleWJvYXJkJiZ0aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpKSxcImhvdmVyXCI9PXRoaXMub3B0aW9ucy5wYXVzZSYmIShcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSYmdGhpcy4kZWxlbWVudC5vbihcIm1vdXNlZW50ZXIuYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMucGF1c2UsdGhpcykpLm9uKFwibW91c2VsZWF2ZS5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5jeWNsZSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMy40XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTYwMCxjLkRFRkFVTFRTPXtpbnRlcnZhbDo1ZTMscGF1c2U6XCJob3ZlclwiLHdyYXA6ITAsa2V5Ym9hcmQ6ITB9LGMucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24oYSl7aWYoIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYS50YXJnZXQudGFnTmFtZSkpe3N3aXRjaChhLndoaWNoKXtjYXNlIDM3OnRoaXMucHJldigpO2JyZWFrO2Nhc2UgMzk6dGhpcy5uZXh0KCk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59YS5wcmV2ZW50RGVmYXVsdCgpfX0sYy5wcm90b3R5cGUuY3ljbGU9ZnVuY3Rpb24oYil7cmV0dXJuIGJ8fCh0aGlzLnBhdXNlZD0hMSksdGhpcy5pbnRlcnZhbCYmY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwmJiF0aGlzLnBhdXNlZCYmKHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoYS5wcm94eSh0aGlzLm5leHQsdGhpcyksdGhpcy5vcHRpb25zLmludGVydmFsKSksdGhpc30sYy5wcm90b3R5cGUuZ2V0SXRlbUluZGV4PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLiRpdGVtcz1hLnBhcmVudCgpLmNoaWxkcmVuKFwiLml0ZW1cIiksdGhpcy4kaXRlbXMuaW5kZXgoYXx8dGhpcy4kYWN0aXZlKX0sYy5wcm90b3R5cGUuZ2V0SXRlbUZvckRpcmVjdGlvbj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZ2V0SXRlbUluZGV4KGIpLGQ9XCJwcmV2XCI9PWEmJjA9PT1jfHxcIm5leHRcIj09YSYmYz09dGhpcy4kaXRlbXMubGVuZ3RoLTE7aWYoZCYmIXRoaXMub3B0aW9ucy53cmFwKXJldHVybiBiO3ZhciBlPVwicHJldlwiPT1hPy0xOjEsZj0oYytlKSV0aGlzLiRpdGVtcy5sZW5ndGg7cmV0dXJuIHRoaXMuJGl0ZW1zLmVxKGYpfSxjLnByb3RvdHlwZS50bz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9dGhpcy5nZXRJdGVtSW5kZXgodGhpcy4kYWN0aXZlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSk7cmV0dXJuIGE+dGhpcy4kaXRlbXMubGVuZ3RoLTF8fDA+YT92b2lkIDA6dGhpcy5zbGlkaW5nP3RoaXMuJGVsZW1lbnQub25lKFwic2xpZC5icy5jYXJvdXNlbFwiLGZ1bmN0aW9uKCl7Yi50byhhKX0pOmM9PWE/dGhpcy5wYXVzZSgpLmN5Y2xlKCk6dGhpcy5zbGlkZShhPmM/XCJuZXh0XCI6XCJwcmV2XCIsdGhpcy4kaXRlbXMuZXEoYSkpfSxjLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSEwKSx0aGlzLiRlbGVtZW50LmZpbmQoXCIubmV4dCwgLnByZXZcIikubGVuZ3RoJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpLHRoaXMuY3ljbGUoITApKSx0aGlzLmludGVydmFsPWNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpc30sYy5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRpbmc/dm9pZCAwOnRoaXMuc2xpZGUoXCJuZXh0XCIpfSxjLnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcInByZXZcIil9LGMucHJvdG90eXBlLnNsaWRlPWZ1bmN0aW9uKGIsZCl7dmFyIGU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpLGY9ZHx8dGhpcy5nZXRJdGVtRm9yRGlyZWN0aW9uKGIsZSksZz10aGlzLmludGVydmFsLGg9XCJuZXh0XCI9PWI/XCJsZWZ0XCI6XCJyaWdodFwiLGk9dGhpcztpZihmLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXJldHVybiB0aGlzLnNsaWRpbmc9ITE7dmFyIGo9ZlswXSxrPWEuRXZlbnQoXCJzbGlkZS5icy5jYXJvdXNlbFwiLHtyZWxhdGVkVGFyZ2V0OmosZGlyZWN0aW9uOmh9KTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoayksIWsuaXNEZWZhdWx0UHJldmVudGVkKCkpe2lmKHRoaXMuc2xpZGluZz0hMCxnJiZ0aGlzLnBhdXNlKCksdGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpe3RoaXMuJGluZGljYXRvcnMuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIGw9YSh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgoZildKTtsJiZsLmFkZENsYXNzKFwiYWN0aXZlXCIpfXZhciBtPWEuRXZlbnQoXCJzbGlkLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcInNsaWRlXCIpPyhmLmFkZENsYXNzKGIpLGZbMF0ub2Zmc2V0V2lkdGgsZS5hZGRDbGFzcyhoKSxmLmFkZENsYXNzKGgpLGUub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtmLnJlbW92ZUNsYXNzKFtiLGhdLmpvaW4oXCIgXCIpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlLnJlbW92ZUNsYXNzKFtcImFjdGl2ZVwiLGhdLmpvaW4oXCIgXCIpKSxpLnNsaWRpbmc9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2kuJGVsZW1lbnQudHJpZ2dlcihtKX0sMCl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pKTooZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIobSkpLGcmJnRoaXMuY3ljbGUoKSx0aGlzfX07dmFyIGQ9YS5mbi5jYXJvdXNlbDthLmZuLmNhcm91c2VsPWIsYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1jLGEuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNhcm91c2VsPWQsdGhpc307dmFyIGU9ZnVuY3Rpb24oYyl7dmFyIGQsZT1hKHRoaXMpLGY9YShlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGQ9ZS5hdHRyKFwiaHJlZlwiKSkmJmQucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSk7aWYoZi5oYXNDbGFzcyhcImNhcm91c2VsXCIpKXt2YXIgZz1hLmV4dGVuZCh7fSxmLmRhdGEoKSxlLmRhdGEoKSksaD1lLmF0dHIoXCJkYXRhLXNsaWRlLXRvXCIpO2gmJihnLmludGVydmFsPSExKSxiLmNhbGwoZixnKSxoJiZmLmRhdGEoXCJicy5jYXJvdXNlbFwiKS50byhoKSxjLnByZXZlbnREZWZhdWx0KCl9fTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZV1cIixlKS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZS10b11cIixlKSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKTtiLmNhbGwoYyxjLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3ZhciBjLGQ9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIil8fChjPWIuYXR0cihcImhyZWZcIikpJiZjLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIik7cmV0dXJuIGEoZCl9ZnVuY3Rpb24gYyhiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmNvbGxhcHNlXCIpLGY9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7IWUmJmYudG9nZ2xlJiYvc2hvd3xoaWRlLy50ZXN0KGIpJiYoZi50b2dnbGU9ITEpLGV8fGMuZGF0YShcImJzLmNvbGxhcHNlXCIsZT1uZXcgZCh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGQ9ZnVuY3Rpb24oYixjKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGQuREVGQVVMVFMsYyksdGhpcy4kdHJpZ2dlcj1hKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycrYi5pZCsnXCJdLFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycrYi5pZCsnXCJdJyksdGhpcy50cmFuc2l0aW9uaW5nPW51bGwsdGhpcy5vcHRpb25zLnBhcmVudD90aGlzLiRwYXJlbnQ9dGhpcy5nZXRQYXJlbnQoKTp0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLiRlbGVtZW50LHRoaXMuJHRyaWdnZXIpLHRoaXMub3B0aW9ucy50b2dnbGUmJnRoaXMudG9nZ2xlKCl9O2QuVkVSU0lPTj1cIjMuMy40XCIsZC5UUkFOU0lUSU9OX0RVUkFUSU9OPTM1MCxkLkRFRkFVTFRTPXt0b2dnbGU6ITB9LGQucHJvdG90eXBlLmRpbWVuc2lvbj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJ3aWR0aFwiKTtyZXR1cm4gYT9cIndpZHRoXCI6XCJoZWlnaHRcIn0sZC5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJiF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiLGU9dGhpcy4kcGFyZW50JiZ0aGlzLiRwYXJlbnQuY2hpbGRyZW4oXCIucGFuZWxcIikuY2hpbGRyZW4oXCIuaW4sIC5jb2xsYXBzaW5nXCIpO2lmKCEoZSYmZS5sZW5ndGgmJihiPWUuZGF0YShcImJzLmNvbGxhcHNlXCIpLGImJmIudHJhbnNpdGlvbmluZykpKXt2YXIgZj1hLkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZiksIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe2UmJmUubGVuZ3RoJiYoYy5jYWxsKGUsXCJoaWRlXCIpLGJ8fGUuZGF0YShcImJzLmNvbGxhcHNlXCIsbnVsbCkpO3ZhciBnPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVtnXSgwKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0cmlnZ2VyLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciBoPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIikuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKVtnXShcIlwiKSx0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5jb2xsYXBzZVwiKX07aWYoIWEuc3VwcG9ydC50cmFuc2l0aW9uKXJldHVybiBoLmNhbGwodGhpcyk7dmFyIGk9YS5jYW1lbENhc2UoW1wic2Nyb2xsXCIsZ10uam9pbihcIi1cIikpO3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShoLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pW2ddKHRoaXMuJGVsZW1lbnRbMF1baV0pfX19fSxkLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYj1hLkV2ZW50KFwiaGlkZS5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksIWIuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBjPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudFtjXSh0aGlzLiRlbGVtZW50W2NdKCkpWzBdLm9mZnNldEhlaWdodCx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlIGluXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHRoaXMuJHRyaWdnZXIuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGU9ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIil9O3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbj92b2lkIHRoaXMuJGVsZW1lbnRbY10oMCkub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShlLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmUuY2FsbCh0aGlzKX19fSxkLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKT9cImhpZGVcIjpcInNob3dcIl0oKX0sZC5wcm90b3R5cGUuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcy5vcHRpb25zLnBhcmVudCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInK3RoaXMub3B0aW9ucy5wYXJlbnQrJ1wiXScpLmVhY2goYS5wcm94eShmdW5jdGlvbihjLGQpe3ZhciBlPWEoZCk7dGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoYihlKSxlKX0sdGhpcykpLmVuZCgpfSxkLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3M9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmhhc0NsYXNzKFwiaW5cIik7YS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpLGIudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwhYykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixjKX07dmFyIGU9YS5mbi5jb2xsYXBzZTthLmZuLmNvbGxhcHNlPWMsYS5mbi5jb2xsYXBzZS5Db25zdHJ1Y3Rvcj1kLGEuZm4uY29sbGFwc2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNvbGxhcHNlPWUsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBmPWIoZSksZz1mLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxoPWc/XCJ0b2dnbGVcIjplLmRhdGEoKTtjLmNhbGwoZixoKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe2ImJjM9PT1iLndoaWNofHwoYShlKS5yZW1vdmUoKSxhKGYpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9YyhkKSxmPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2UuaGFzQ2xhc3MoXCJvcGVuXCIpJiYoZS50cmlnZ2VyKGI9YS5FdmVudChcImhpZGUuYnMuZHJvcGRvd25cIixmKSksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KGQuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLGUucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuZHJvcGRvd25cIixmKSkpfSkpfWZ1bmN0aW9uIGMoYil7dmFyIGM9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIik7Y3x8KGM9Yi5hdHRyKFwiaHJlZlwiKSxjPWMmJi8jW0EtWmEtel0vLnRlc3QoYykmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGQ9YyYmYShjKTtyZXR1cm4gZCYmZC5sZW5ndGg/ZDpiLnBhcmVudCgpfWZ1bmN0aW9uIGQoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoXCJicy5kcm9wZG93blwiKTtkfHxjLmRhdGEoXCJicy5kcm9wZG93blwiLGQ9bmV3IGcodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZkW2JdLmNhbGwoYyl9KX12YXIgZT1cIi5kcm9wZG93bi1iYWNrZHJvcFwiLGY9J1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxnPWZ1bmN0aW9uKGIpe2EoYikub24oXCJjbGljay5icy5kcm9wZG93blwiLHRoaXMudG9nZ2xlKX07Zy5WRVJTSU9OPVwiMy4zLjRcIixnLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZj1jKGUpLGc9Zi5oYXNDbGFzcyhcIm9wZW5cIik7aWYoYigpLCFnKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhZi5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLGIpO3ZhciBoPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKGYudHJpZ2dlcihkPWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsaCkpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UudHJpZ2dlcihcImZvY3VzXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGYudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoXCJzaG93bi5icy5kcm9wZG93blwiLGgpfXJldHVybiExfX0sZy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihiKXtpZigvKDM4fDQwfDI3fDMyKS8udGVzdChiLndoaWNoKSYmIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYi50YXJnZXQudGFnTmFtZSkpe3ZhciBkPWEodGhpcyk7aWYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCksIWQuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIGU9YyhkKSxnPWUuaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKCFnJiYyNyE9Yi53aGljaHx8ZyYmMjc9PWIud2hpY2gpcmV0dXJuIDI3PT1iLndoaWNoJiZlLmZpbmQoZikudHJpZ2dlcihcImZvY3VzXCIpLGQudHJpZ2dlcihcImNsaWNrXCIpO3ZhciBoPVwiIGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYVwiLGk9ZS5maW5kKCdbcm9sZT1cIm1lbnVcIl0nK2grJywgW3JvbGU9XCJsaXN0Ym94XCJdJytoKTtpZihpLmxlbmd0aCl7dmFyIGo9aS5pbmRleChiLnRhcmdldCk7Mzg9PWIud2hpY2gmJmo+MCYmai0tLDQwPT1iLndoaWNoJiZqPGkubGVuZ3RoLTEmJmorKyx+anx8KGo9MCksaS5lcShqKS50cmlnZ2VyKFwiZm9jdXNcIil9fX19O3ZhciBoPWEuZm4uZHJvcGRvd247YS5mbi5kcm9wZG93bj1kLGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9ZyxhLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kcm9wZG93bj1oLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGYsZy5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsJ1tyb2xlPVwibWVudVwiXScsZy5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsJ1tyb2xlPVwibGlzdGJveFwiXScsZy5wcm90b3R5cGUua2V5ZG93bil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYixkKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUuZGF0YShcImJzLm1vZGFsXCIpLGc9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxlLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7Znx8ZS5kYXRhKFwiYnMubW9kYWxcIixmPW5ldyBjKHRoaXMsZykpLFwic3RyaW5nXCI9PXR5cGVvZiBiP2ZbYl0oZCk6Zy5zaG93JiZmLnNob3coZCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMub3B0aW9ucz1jLHRoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kZGlhbG9nPXRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1kaWFsb2dcIiksdGhpcy4kYmFja2Ryb3A9bnVsbCx0aGlzLmlzU2hvd249bnVsbCx0aGlzLm9yaWdpbmFsQm9keVBhZD1udWxsLHRoaXMuc2Nyb2xsYmFyV2lkdGg9MCx0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEsdGhpcy5vcHRpb25zLnJlbW90ZSYmdGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWNvbnRlbnRcIikubG9hZCh0aGlzLm9wdGlvbnMucmVtb3RlLGEucHJveHkoZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJsb2FkZWQuYnMubW9kYWxcIil9LHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4zLjRcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MzAwLGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5ERUZBVUxUUz17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2hvdzohMH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KGEpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT1hLkV2ZW50KFwic2hvdy5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksdGhpcy5pc1Nob3dufHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodGhpcy5pc1Nob3duPSEwLHRoaXMuY2hlY2tTY3JvbGxiYXIoKSx0aGlzLnNldFNjcm9sbGJhcigpLHRoaXMuJGJvZHkuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLCdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLGEucHJveHkodGhpcy5oaWRlLHRoaXMpKSx0aGlzLiRkaWFsb2cub24oXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC5vbmUoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbihiKXthKGIudGFyZ2V0KS5pcyhkLiRlbGVtZW50KSYmKGQuaWdub3JlQmFja2Ryb3BDbGljaz0hMCl9KX0pLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXt2YXIgZT1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZC4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik7ZC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGh8fGQuJGVsZW1lbnQuYXBwZW5kVG8oZC4kYm9keSksZC4kZWxlbWVudC5zaG93KCkuc2Nyb2xsVG9wKDApLGQuYWRqdXN0RGlhbG9nKCksZSYmZC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCxkLiRlbGVtZW50LmFkZENsYXNzKFwiaW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsITEpLGQuZW5mb3JjZUZvY3VzKCk7dmFyIGY9YS5FdmVudChcInNob3duLmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO2U/ZC4kZGlhbG9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihiKXtiJiZiLnByZXZlbnREZWZhdWx0KCksYj1hLkV2ZW50KFwiaGlkZS5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksdGhpcy5pc1Nob3duJiYhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKHRoaXMuaXNTaG93bj0hMSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksYShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiaW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsITApLm9mZihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIikub2ZmKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIpLHRoaXMuJGRpYWxvZy5vZmYoXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KHRoaXMuaGlkZU1vZGFsLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOnRoaXMuaGlkZU1vZGFsKCkpfSxjLnByb3RvdHlwZS5lbmZvcmNlRm9jdXM9ZnVuY3Rpb24oKXthKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLm9uKFwiZm9jdXNpbi5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy4kZWxlbWVudFswXT09PWEudGFyZ2V0fHx0aGlzLiRlbGVtZW50LmhhcyhhLnRhcmdldCkubGVuZ3RofHx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKX0sdGhpcykpfSxjLnByb3RvdHlwZS5lc2NhcGU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5rZXlib2FyZD90aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXsyNz09YS53aGljaCYmdGhpcy5oaWRlKCl9LHRoaXMpKTp0aGlzLmlzU2hvd258fHRoaXMuJGVsZW1lbnQub2ZmKFwia2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzU2hvd24/YSh3aW5kb3cpLm9uKFwicmVzaXplLmJzLm1vZGFsXCIsYS5wcm94eSh0aGlzLmhhbmRsZVVwZGF0ZSx0aGlzKSk6YSh3aW5kb3cpLm9mZihcInJlc2l6ZS5icy5tb2RhbFwiKX0sYy5wcm90b3R5cGUuaGlkZU1vZGFsPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczt0aGlzLiRlbGVtZW50LmhpZGUoKSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7YS4kYm9keS5yZW1vdmVDbGFzcyhcIm1vZGFsLW9wZW5cIiksYS5yZXNldEFkanVzdG1lbnRzKCksYS5yZXNldFNjcm9sbGJhcigpLGEuJGVsZW1lbnQudHJpZ2dlcihcImhpZGRlbi5icy5tb2RhbFwiKX0pfSxjLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcD1mdW5jdGlvbigpe3RoaXMuJGJhY2tkcm9wJiZ0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKSx0aGlzLiRiYWNrZHJvcD1udWxsfSxjLnByb3RvdHlwZS5iYWNrZHJvcD1mdW5jdGlvbihiKXt2YXIgZD10aGlzLGU9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/XCJmYWRlXCI6XCJcIjtpZih0aGlzLmlzU2hvd24mJnRoaXMub3B0aW9ucy5iYWNrZHJvcCl7dmFyIGY9YS5zdXBwb3J0LnRyYW5zaXRpb24mJmU7aWYodGhpcy4kYmFja2Ryb3A9YSgnPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wICcrZSsnXCIgLz4nKS5hcHBlbmRUbyh0aGlzLiRib2R5KSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz92b2lkKHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSk6dm9pZChhLnRhcmdldD09PWEuY3VycmVudFRhcmdldCYmKFwic3RhdGljXCI9PXRoaXMub3B0aW9ucy5iYWNrZHJvcD90aGlzLiRlbGVtZW50WzBdLmZvY3VzKCk6dGhpcy5oaWRlKCkpKX0sdGhpcykpLGYmJnRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoLHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKFwiaW5cIiksIWIpcmV0dXJuO2Y/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYikuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpiKCl9ZWxzZSBpZighdGhpcy5pc1Nob3duJiZ0aGlzLiRiYWNrZHJvcCl7dGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoXCJpblwiKTt2YXIgZz1mdW5jdGlvbigpe2QucmVtb3ZlQmFja2Ryb3AoKSxiJiZiKCl9O2Euc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRiYWNrZHJvcC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixnKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pOmcoKX1lbHNlIGImJmIoKX0sYy5wcm90b3R5cGUuaGFuZGxlVXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5hZGp1c3REaWFsb2coKX0sYy5wcm90b3R5cGUuYWRqdXN0RGlhbG9nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6IXRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJmE/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwiLHBhZGRpbmdSaWdodDp0aGlzLmJvZHlJc092ZXJmbG93aW5nJiYhYT90aGlzLnNjcm9sbGJhcldpZHRoOlwiXCJ9KX0sYy5wcm90b3R5cGUucmVzZXRBZGp1c3RtZW50cz1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQuY3NzKHtwYWRkaW5nTGVmdDpcIlwiLHBhZGRpbmdSaWdodDpcIlwifSl9LGMucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9d2luZG93LmlubmVyV2lkdGg7aWYoIWEpe3ZhciBiPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTthPWIucmlnaHQtTWF0aC5hYnMoYi5sZWZ0KX10aGlzLmJvZHlJc092ZXJmbG93aW5nPWRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg8YSx0aGlzLnNjcm9sbGJhcldpZHRoPXRoaXMubWVhc3VyZVNjcm9sbGJhcigpfSxjLnByb3RvdHlwZS5zZXRTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT1wYXJzZUludCh0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIil8fDAsMTApO3RoaXMub3JpZ2luYWxCb2R5UGFkPWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0fHxcIlwiLHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJnRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLGErdGhpcy5zY3JvbGxiYXJXaWR0aCl9LGMucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsdGhpcy5vcmlnaW5hbEJvZHlQYWQpfSxjLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmNsYXNzTmFtZT1cIm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlXCIsdGhpcy4kYm9keS5hcHBlbmQoYSk7dmFyIGI9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoO3JldHVybiB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKGEpLGJ9O3ZhciBkPWEuZm4ubW9kYWw7YS5mbi5tb2RhbD1iLGEuZm4ubW9kYWwuQ29uc3RydWN0b3I9YyxhLmZuLm1vZGFsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5tb2RhbD1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMubW9kYWwuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyksZT1kLmF0dHIoXCJocmVmXCIpLGY9YShkLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxnPWYuZGF0YShcImJzLm1vZGFsXCIpP1widG9nZ2xlXCI6YS5leHRlbmQoe3JlbW90ZTohLyMvLnRlc3QoZSkmJmV9LGYuZGF0YSgpLGQuZGF0YSgpKTtkLmlzKFwiYVwiKSYmYy5wcmV2ZW50RGVmYXVsdCgpLGYub25lKFwic2hvdy5icy5tb2RhbFwiLGZ1bmN0aW9uKGEpe2EuaXNEZWZhdWx0UHJldmVudGVkKCl8fGYub25lKFwiaGlkZGVuLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLmlzKFwiOnZpc2libGVcIikmJmQudHJpZ2dlcihcImZvY3VzXCIpfSl9KSxiLmNhbGwoZixnLHRoaXMpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50b29sdGlwXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fCEvZGVzdHJveXxoaWRlLy50ZXN0KGIpKSYmKGV8fGQuZGF0YShcImJzLnRvb2x0aXBcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLnR5cGU9bnVsbCx0aGlzLm9wdGlvbnM9bnVsbCx0aGlzLmVuYWJsZWQ9bnVsbCx0aGlzLnRpbWVvdXQ9bnVsbCx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzLiRlbGVtZW50PW51bGwsdGhpcy5pbml0KFwidG9vbHRpcFwiLGEsYil9O2MuVkVSU0lPTj1cIjMuMy40XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLkRFRkFVTFRTPXthbmltYXRpb246ITAscGxhY2VtZW50OlwidG9wXCIsc2VsZWN0b3I6ITEsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOlwiaG92ZXIgZm9jdXNcIix0aXRsZTpcIlwiLGRlbGF5OjAsaHRtbDohMSxjb250YWluZXI6ITEsdmlld3BvcnQ6e3NlbGVjdG9yOlwiYm9keVwiLHBhZGRpbmc6MH19LGMucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oYixjLGQpe2lmKHRoaXMuZW5hYmxlZD0hMCx0aGlzLnR5cGU9Yix0aGlzLiRlbGVtZW50PWEoYyksdGhpcy5vcHRpb25zPXRoaXMuZ2V0T3B0aW9ucyhkKSx0aGlzLiR2aWV3cG9ydD10aGlzLm9wdGlvbnMudmlld3BvcnQmJmEodGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yfHx0aGlzLm9wdGlvbnMudmlld3BvcnQpLHRoaXMuJGVsZW1lbnRbMF1pbnN0YW5jZW9mIGRvY3VtZW50LmNvbnN0cnVjdG9yJiYhdGhpcy5vcHRpb25zLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcImBzZWxlY3RvcmAgb3B0aW9uIG11c3QgYmUgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6aW5nIFwiK3RoaXMudHlwZStcIiBvbiB0aGUgd2luZG93LmRvY3VtZW50IG9iamVjdCFcIik7Zm9yKHZhciBlPXRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KFwiIFwiKSxmPWUubGVuZ3RoO2YtLTspe3ZhciBnPWVbZl07aWYoXCJjbGlja1wiPT1nKXRoaXMuJGVsZW1lbnQub24oXCJjbGljay5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy50b2dnbGUsdGhpcykpO2Vsc2UgaWYoXCJtYW51YWxcIiE9Zyl7dmFyIGg9XCJob3ZlclwiPT1nP1wibW91c2VlbnRlclwiOlwiZm9jdXNpblwiLGk9XCJob3ZlclwiPT1nP1wibW91c2VsZWF2ZVwiOlwiZm9jdXNvdXRcIjt0aGlzLiRlbGVtZW50Lm9uKGgrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMuZW50ZXIsdGhpcykpLHRoaXMuJGVsZW1lbnQub24oaStcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5sZWF2ZSx0aGlzKSl9fXRoaXMub3B0aW9ucy5zZWxlY3Rvcj90aGlzLl9vcHRpb25zPWEuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx7dHJpZ2dlcjpcIm1hbnVhbFwiLHNlbGVjdG9yOlwiXCJ9KTp0aGlzLmZpeFRpdGxlKCl9LGMucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGMuREVGQVVMVFN9LGMucHJvdG90eXBlLmdldE9wdGlvbnM9ZnVuY3Rpb24oYil7cmV0dXJuIGI9YS5leHRlbmQoe30sdGhpcy5nZXREZWZhdWx0cygpLHRoaXMuJGVsZW1lbnQuZGF0YSgpLGIpLGIuZGVsYXkmJlwibnVtYmVyXCI9PXR5cGVvZiBiLmRlbGF5JiYoYi5kZWxheT17c2hvdzpiLmRlbGF5LGhpZGU6Yi5kZWxheX0pLGJ9LGMucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucz1mdW5jdGlvbigpe3ZhciBiPXt9LGM9dGhpcy5nZXREZWZhdWx0cygpO3JldHVybiB0aGlzLl9vcHRpb25zJiZhLmVhY2godGhpcy5fb3B0aW9ucyxmdW5jdGlvbihhLGQpe2NbYV0hPWQmJihiW2FdPWQpfSksYn0sYy5wcm90b3R5cGUuZW50ZXI9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGMmJmMuJHRpcCYmYy4kdGlwLmlzKFwiOnZpc2libGVcIik/dm9pZChjLmhvdmVyU3RhdGU9XCJpblwiKTooY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSxjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJpblwiLGMub3B0aW9ucy5kZWxheSYmYy5vcHRpb25zLmRlbGF5LnNob3c/dm9pZChjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5cIj09Yy5ob3ZlclN0YXRlJiZjLnNob3coKX0sYy5vcHRpb25zLmRlbGF5LnNob3cpKTpjLnNob3coKSl9LGMucHJvdG90eXBlLmxlYXZlPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cIm91dFwiLGMub3B0aW9ucy5kZWxheSYmYy5vcHRpb25zLmRlbGF5LmhpZGU/dm9pZChjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wib3V0XCI9PWMuaG92ZXJTdGF0ZSYmYy5oaWRlKCl9LGMub3B0aW9ucy5kZWxheS5oaWRlKSk6Yy5oaWRlKCl9LGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj1hLkV2ZW50KFwic2hvdy5icy5cIit0aGlzLnR5cGUpO2lmKHRoaXMuaGFzQ29udGVudCgpJiZ0aGlzLmVuYWJsZWQpe3RoaXMuJGVsZW1lbnQudHJpZ2dlcihiKTt2YXIgZD1hLmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdGhpcy4kZWxlbWVudFswXSk7aWYoYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8IWQpcmV0dXJuO3ZhciBlPXRoaXMsZj10aGlzLnRpcCgpLGc9dGhpcy5nZXRVSUQodGhpcy50eXBlKTt0aGlzLnNldENvbnRlbnQoKSxmLmF0dHIoXCJpZFwiLGcpLHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixnKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiZmLmFkZENsYXNzKFwiZmFkZVwiKTt2YXIgaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50P3RoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLGZbMF0sdGhpcy4kZWxlbWVudFswXSk6dGhpcy5vcHRpb25zLnBsYWNlbWVudCxpPS9cXHM/YXV0bz9cXHM/L2ksaj1pLnRlc3QoaCk7aiYmKGg9aC5yZXBsYWNlKGksXCJcIil8fFwidG9wXCIpLGYuZGV0YWNoKCkuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KS5hZGRDbGFzcyhoKS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLHRoaXMpLHRoaXMub3B0aW9ucy5jb250YWluZXI/Zi5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTpmLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO3ZhciBrPXRoaXMuZ2V0UG9zaXRpb24oKSxsPWZbMF0ub2Zmc2V0V2lkdGgsbT1mWzBdLm9mZnNldEhlaWdodDtpZihqKXt2YXIgbj1oLG89dGhpcy5vcHRpb25zLmNvbnRhaW5lcj9hKHRoaXMub3B0aW9ucy5jb250YWluZXIpOnRoaXMuJGVsZW1lbnQucGFyZW50KCkscD10aGlzLmdldFBvc2l0aW9uKG8pO2g9XCJib3R0b21cIj09aCYmay5ib3R0b20rbT5wLmJvdHRvbT9cInRvcFwiOlwidG9wXCI9PWgmJmsudG9wLW08cC50b3A/XCJib3R0b21cIjpcInJpZ2h0XCI9PWgmJmsucmlnaHQrbD5wLndpZHRoP1wibGVmdFwiOlwibGVmdFwiPT1oJiZrLmxlZnQtbDxwLmxlZnQ/XCJyaWdodFwiOmgsZi5yZW1vdmVDbGFzcyhuKS5hZGRDbGFzcyhoKX12YXIgcT10aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQoaCxrLGwsbSk7dGhpcy5hcHBseVBsYWNlbWVudChxLGgpO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGE9ZS5ob3ZlclN0YXRlO2UuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK2UudHlwZSksZS5ob3ZlclN0YXRlPW51bGwsXCJvdXRcIj09YSYmZS5sZWF2ZShlKX07YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixyKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOnIoKX19LGMucHJvdG90eXBlLmFwcGx5UGxhY2VtZW50PWZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy50aXAoKSxlPWRbMF0ub2Zmc2V0V2lkdGgsZj1kWzBdLm9mZnNldEhlaWdodCxnPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLXRvcFwiKSwxMCksaD1wYXJzZUludChkLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLDEwKTtpc05hTihnKSYmKGc9MCksaXNOYU4oaCkmJihoPTApLGIudG9wPWIudG9wK2csYi5sZWZ0PWIubGVmdCtoLGEub2Zmc2V0LnNldE9mZnNldChkWzBdLGEuZXh0ZW5kKHt1c2luZzpmdW5jdGlvbihhKXtkLmNzcyh7dG9wOk1hdGgucm91bmQoYS50b3ApLGxlZnQ6TWF0aC5yb3VuZChhLmxlZnQpfSl9fSxiKSwwKSxkLmFkZENsYXNzKFwiaW5cIik7dmFyIGk9ZFswXS5vZmZzZXRXaWR0aCxqPWRbMF0ub2Zmc2V0SGVpZ2h0O1widG9wXCI9PWMmJmohPWYmJihiLnRvcD1iLnRvcCtmLWopO3ZhciBrPXRoaXMuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhKGMsYixpLGopO2subGVmdD9iLmxlZnQrPWsubGVmdDpiLnRvcCs9ay50b3A7dmFyIGw9L3RvcHxib3R0b20vLnRlc3QoYyksbT1sPzIqay5sZWZ0LWUraToyKmsudG9wLWYraixuPWw/XCJvZmZzZXRXaWR0aFwiOlwib2Zmc2V0SGVpZ2h0XCI7ZC5vZmZzZXQoYiksdGhpcy5yZXBsYWNlQXJyb3cobSxkWzBdW25dLGwpfSxjLnByb3RvdHlwZS5yZXBsYWNlQXJyb3c9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYXJyb3coKS5jc3MoYz9cImxlZnRcIjpcInRvcFwiLDUwKigxLWEvYikrXCIlXCIpLmNzcyhjP1widG9wXCI6XCJsZWZ0XCIsXCJcIil9LGMucHJvdG90eXBlLnNldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpLGI9dGhpcy5nZXRUaXRsZSgpO2EuZmluZChcIi50b29sdGlwLWlubmVyXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShiKSxhLnJlbW92ZUNsYXNzKFwiZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHRcIil9LGMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe1wiaW5cIiE9ZS5ob3ZlclN0YXRlJiZmLmRldGFjaCgpLGUuJGVsZW1lbnQucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIikudHJpZ2dlcihcImhpZGRlbi5icy5cIitlLnR5cGUpLGImJmIoKX12YXIgZT10aGlzLGY9YSh0aGlzLiR0aXApLGc9YS5FdmVudChcImhpZGUuYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gdGhpcy4kZWxlbWVudC50cmlnZ2VyKGcpLGcuaXNEZWZhdWx0UHJldmVudGVkKCk/dm9pZCAwOihmLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmYuaGFzQ2xhc3MoXCJmYWRlXCIpP2Yub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZCkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkKCksdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpcyl9LGMucHJvdG90eXBlLmZpeFRpdGxlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudDsoYS5hdHRyKFwidGl0bGVcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpKSYmYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiLGEuYXR0cihcInRpdGxlXCIpfHxcIlwiKS5hdHRyKFwidGl0bGVcIixcIlwiKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl9LGMucHJvdG90eXBlLmdldFBvc2l0aW9uPWZ1bmN0aW9uKGIpe2I9Ynx8dGhpcy4kZWxlbWVudDt2YXIgYz1iWzBdLGQ9XCJCT0RZXCI9PWMudGFnTmFtZSxlPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bnVsbD09ZS53aWR0aCYmKGU9YS5leHRlbmQoe30sZSx7d2lkdGg6ZS5yaWdodC1lLmxlZnQsaGVpZ2h0OmUuYm90dG9tLWUudG9wfSkpO3ZhciBmPWQ/e3RvcDowLGxlZnQ6MH06Yi5vZmZzZXQoKSxnPXtzY3JvbGw6ZD9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDpiLnNjcm9sbFRvcCgpfSxoPWQ/e3dpZHRoOmEod2luZG93KS53aWR0aCgpLGhlaWdodDphKHdpbmRvdykuaGVpZ2h0KCl9Om51bGw7cmV0dXJuIGEuZXh0ZW5kKHt9LGUsZyxoLGYpfSxjLnByb3RvdHlwZS5nZXRDYWxjdWxhdGVkT2Zmc2V0PWZ1bmN0aW9uKGEsYixjLGQpe3JldHVyblwiYm90dG9tXCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcInRvcFwiPT1hP3t0b3A6Yi50b3AtZCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcImxlZnRcIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0LWN9Ont0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQrYi53aWR0aH19LGMucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17dG9wOjAsbGVmdDowfTtpZighdGhpcy4kdmlld3BvcnQpcmV0dXJuIGU7dmFyIGY9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZ0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZ3x8MCxnPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2lmKC9yaWdodHxsZWZ0Ly50ZXN0KGEpKXt2YXIgaD1iLnRvcC1mLWcuc2Nyb2xsLGk9Yi50b3ArZi1nLnNjcm9sbCtkO2g8Zy50b3A/ZS50b3A9Zy50b3AtaDppPmcudG9wK2cuaGVpZ2h0JiYoZS50b3A9Zy50b3ArZy5oZWlnaHQtaSl9ZWxzZXt2YXIgaj1iLmxlZnQtZixrPWIubGVmdCtmK2M7ajxnLmxlZnQ/ZS5sZWZ0PWcubGVmdC1qOms+Zy53aWR0aCYmKGUubGVmdD1nLmxlZnQrZy53aWR0aC1rKX1yZXR1cm4gZX0sYy5wcm90b3R5cGUuZ2V0VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJGVsZW1lbnQsYz10aGlzLm9wdGlvbnM7cmV0dXJuIGE9Yi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGl0bGU/Yy50aXRsZS5jYWxsKGJbMF0pOmMudGl0bGUpfSxjLnByb3RvdHlwZS5nZXRVSUQ9ZnVuY3Rpb24oYSl7ZG8gYSs9fn4oMWU2Kk1hdGgucmFuZG9tKCkpO3doaWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKTtyZXR1cm4gYX0sYy5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHRpcD10aGlzLiR0aXB8fGEodGhpcy5vcHRpb25zLnRlbXBsYXRlKX0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi50b29sdGlwLWFycm93XCIpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITF9LGMucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQ9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9IXRoaXMuZW5hYmxlZH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YiYmKGM9YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpLGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSkpLGMudGlwKCkuaGFzQ2xhc3MoXCJpblwiKT9jLmxlYXZlKGMpOmMuZW50ZXIoYyl9LGMucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLHRoaXMuaGlkZShmdW5jdGlvbigpe2EuJGVsZW1lbnQub2ZmKFwiLlwiK2EudHlwZSkucmVtb3ZlRGF0YShcImJzLlwiK2EudHlwZSl9KX07dmFyIGQ9YS5mbi50b29sdGlwO2EuZm4udG9vbHRpcD1iLGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvcj1jLGEuZm4udG9vbHRpcC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udG9vbHRpcD1kLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMucG9wb3ZlclwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiOyhlfHwhL2Rlc3Ryb3l8aGlkZS8udGVzdChiKSkmJihlfHxkLmRhdGEoXCJicy5wb3BvdmVyXCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpKX0pfXZhciBjPWZ1bmN0aW9uKGEsYil7dGhpcy5pbml0KFwicG9wb3ZlclwiLGEsYil9O2lmKCFhLmZuLnRvb2x0aXApdGhyb3cgbmV3IEVycm9yKFwiUG9wb3ZlciByZXF1aXJlcyB0b29sdGlwLmpzXCIpO2MuVkVSU0lPTj1cIjMuMy40XCIsYy5ERUZBVUxUUz1hLmV4dGVuZCh7fSxhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IuREVGQVVMVFMse3BsYWNlbWVudDpcInJpZ2h0XCIsdHJpZ2dlcjpcImNsaWNrXCIsY29udGVudDpcIlwiLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiPjwvaDM+PGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPjwvZGl2PjwvZGl2Pid9KSxjLnByb3RvdHlwZT1hLmV4dGVuZCh7fSxhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IucHJvdG90eXBlKSxjLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1jLGMucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGMuREVGQVVMVFN9LGMucHJvdG90eXBlLnNldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpLGI9dGhpcy5nZXRUaXRsZSgpLGM9dGhpcy5nZXRDb250ZW50KCk7YS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGIpLGEuZmluZChcIi5wb3BvdmVyLWNvbnRlbnRcIikuY2hpbGRyZW4oKS5kZXRhY2goKS5lbmQoKVt0aGlzLm9wdGlvbnMuaHRtbD9cInN0cmluZ1wiPT10eXBlb2YgYz9cImh0bWxcIjpcImFwcGVuZFwiOlwidGV4dFwiXShjKSxhLnJlbW92ZUNsYXNzKFwiZmFkZSB0b3AgYm90dG9tIGxlZnQgcmlnaHQgaW5cIiksYS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaHRtbCgpfHxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5oaWRlKCl9LGMucHJvdG90eXBlLmhhc0NvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRUaXRsZSgpfHx0aGlzLmdldENvbnRlbnQoKX0sYy5wcm90b3R5cGUuZ2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQsYj10aGlzLm9wdGlvbnM7cmV0dXJuIGEuYXR0cihcImRhdGEtY29udGVudFwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGIuY29udGVudD9iLmNvbnRlbnQuY2FsbChhWzBdKTpiLmNvbnRlbnQpfSxjLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLmFycm93XCIpfTt2YXIgZD1hLmZuLnBvcG92ZXI7YS5mbi5wb3BvdmVyPWIsYS5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yPWMsYS5mbi5wb3BvdmVyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5wb3BvdmVyPWQsdGhpc319KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYyxkKXt0aGlzLiRib2R5PWEoZG9jdW1lbnQuYm9keSksdGhpcy4kc2Nyb2xsRWxlbWVudD1hKGEoYykuaXMoZG9jdW1lbnQuYm9keSk/d2luZG93OmMpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxiLkRFRkFVTFRTLGQpLHRoaXMuc2VsZWN0b3I9KHRoaXMub3B0aW9ucy50YXJnZXR8fFwiXCIpK1wiIC5uYXYgbGkgPiBhXCIsdGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLmFjdGl2ZVRhcmdldD1udWxsLHRoaXMuc2Nyb2xsSGVpZ2h0PTAsdGhpcy4kc2Nyb2xsRWxlbWVudC5vbihcInNjcm9sbC5icy5zY3JvbGxzcHlcIixhLnByb3h5KHRoaXMucHJvY2Vzcyx0aGlzKSksdGhpcy5yZWZyZXNoKCksdGhpcy5wcm9jZXNzKCl9ZnVuY3Rpb24gYyhjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnNjcm9sbHNweVwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2V8fGQuZGF0YShcImJzLnNjcm9sbHNweVwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfWIuVkVSU0lPTj1cIjMuMy40XCIsYi5ERUZBVUxUUz17b2Zmc2V0OjEwfSxiLnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHR8fE1hdGgubWF4KHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpfSxiLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPVwib2Zmc2V0XCIsZD0wO3RoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5zY3JvbGxIZWlnaHQ9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxhLmlzV2luZG93KHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0pfHwoYz1cInBvc2l0aW9uXCIsZD10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpKSx0aGlzLiRib2R5LmZpbmQodGhpcy5zZWxlY3RvcikubWFwKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxlPWIuZGF0YShcInRhcmdldFwiKXx8Yi5hdHRyKFwiaHJlZlwiKSxmPS9eIy4vLnRlc3QoZSkmJmEoZSk7cmV0dXJuIGYmJmYubGVuZ3RoJiZmLmlzKFwiOnZpc2libGVcIikmJltbZltjXSgpLnRvcCtkLGVdXXx8bnVsbH0pLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYVswXS1iWzBdfSkuZWFjaChmdW5jdGlvbigpe2Iub2Zmc2V0cy5wdXNoKHRoaXNbMF0pLGIudGFyZ2V0cy5wdXNoKHRoaXNbMV0pfSl9LGIucHJvdG90eXBlLnByb2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkrdGhpcy5vcHRpb25zLm9mZnNldCxjPXRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksZD10aGlzLm9wdGlvbnMub2Zmc2V0K2MtdGhpcy4kc2Nyb2xsRWxlbWVudC5oZWlnaHQoKSxlPXRoaXMub2Zmc2V0cyxmPXRoaXMudGFyZ2V0cyxnPXRoaXMuYWN0aXZlVGFyZ2V0O2lmKHRoaXMuc2Nyb2xsSGVpZ2h0IT1jJiZ0aGlzLnJlZnJlc2goKSxiPj1kKXJldHVybiBnIT0oYT1mW2YubGVuZ3RoLTFdKSYmdGhpcy5hY3RpdmF0ZShhKTtpZihnJiZiPGVbMF0pcmV0dXJuIHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5jbGVhcigpO2ZvcihhPWUubGVuZ3RoO2EtLTspZyE9ZlthXSYmYj49ZVthXSYmKHZvaWQgMD09PWVbYSsxXXx8YjxlW2ErMV0pJiZ0aGlzLmFjdGl2YXRlKGZbYV0pfSxiLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihiKXt0aGlzLmFjdGl2ZVRhcmdldD1iLHRoaXMuY2xlYXIoKTt2YXIgYz10aGlzLnNlbGVjdG9yKydbZGF0YS10YXJnZXQ9XCInK2IrJ1wiXSwnK3RoaXMuc2VsZWN0b3IrJ1tocmVmPVwiJytiKydcIl0nLGQ9YShjKS5wYXJlbnRzKFwibGlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ZC5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJihkPWQuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxkLnRyaWdnZXIoXCJhY3RpdmF0ZS5icy5zY3JvbGxzcHlcIil9LGIucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7YSh0aGlzLnNlbGVjdG9yKS5wYXJlbnRzVW50aWwodGhpcy5vcHRpb25zLnRhcmdldCxcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBkPWEuZm4uc2Nyb2xsc3B5O2EuZm4uc2Nyb2xsc3B5PWMsYS5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3I9YixhLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uc2Nyb2xsc3B5PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZC5icy5zY3JvbGxzcHkuZGF0YS1hcGlcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2MuY2FsbChiLGIuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50YWJcIik7ZXx8ZC5kYXRhKFwiYnMudGFiXCIsZT1uZXcgYyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIpe3RoaXMuZWxlbWVudD1hKGIpfTtjLlZFUlNJT049XCIzLjMuNFwiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBiPXRoaXMuZWxlbWVudCxjPWIuY2xvc2VzdChcInVsOm5vdCguZHJvcGRvd24tbWVudSlcIiksZD1iLmRhdGEoXCJ0YXJnZXRcIik7aWYoZHx8KGQ9Yi5hdHRyKFwiaHJlZlwiKSxkPWQmJmQucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSksIWIucGFyZW50KFwibGlcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe3ZhciBlPWMuZmluZChcIi5hY3RpdmU6bGFzdCBhXCIpLGY9YS5FdmVudChcImhpZGUuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6YlswXX0pLGc9YS5FdmVudChcInNob3cuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6ZVswXX0pO1xyXG5pZihlLnRyaWdnZXIoZiksYi50cmlnZ2VyKGcpLCFnLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGg9YShkKTt0aGlzLmFjdGl2YXRlKGIuY2xvc2VzdChcImxpXCIpLGMpLHRoaXMuYWN0aXZhdGUoaCxoLnBhcmVudCgpLGZ1bmN0aW9uKCl7ZS50cmlnZ2VyKHt0eXBlOlwiaGlkZGVuLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6YlswXX0pLGIudHJpZ2dlcih7dHlwZTpcInNob3duLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6ZVswXX0pfSl9fX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYixkLGUpe2Z1bmN0aW9uIGYoKXtnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmZpbmQoXCI+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGg/KGJbMF0ub2Zmc2V0V2lkdGgsYi5hZGRDbGFzcyhcImluXCIpKTpiLnJlbW92ZUNsYXNzKFwiZmFkZVwiKSxiLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmYi5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksZSYmZSgpfXZhciBnPWQuZmluZChcIj4gLmFjdGl2ZVwiKSxoPWUmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYoZy5sZW5ndGgmJmcuaGFzQ2xhc3MoXCJmYWRlXCIpfHwhIWQuZmluZChcIj4gLmZhZGVcIikubGVuZ3RoKTtnLmxlbmd0aCYmaD9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGYpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZigpLGcucmVtb3ZlQ2xhc3MoXCJpblwiKX07dmFyIGQ9YS5mbi50YWI7YS5mbi50YWI9YixhLmZuLnRhYi5Db25zdHJ1Y3Rvcj1jLGEuZm4udGFiLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50YWI9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXtjLnByZXZlbnREZWZhdWx0KCksYi5jYWxsKGEodGhpcyksXCJzaG93XCIpfTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGUpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLGUpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYWZmaXhcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5hZmZpeFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIsZCl7dGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy4kdGFyZ2V0PWEodGhpcy5vcHRpb25zLnRhcmdldCkub24oXCJzY3JvbGwuYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbix0aGlzKSkub24oXCJjbGljay5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCx0aGlzKSksdGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuYWZmaXhlZD1udWxsLHRoaXMudW5waW49bnVsbCx0aGlzLnBpbm5lZE9mZnNldD1udWxsLHRoaXMuY2hlY2tQb3NpdGlvbigpfTtjLlZFUlNJT049XCIzLjMuNFwiLGMuUkVTRVQ9XCJhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tXCIsYy5ERUZBVUxUUz17b2Zmc2V0OjAsdGFyZ2V0OndpbmRvd30sYy5wcm90b3R5cGUuZ2V0U3RhdGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGY9dGhpcy4kZWxlbWVudC5vZmZzZXQoKSxnPXRoaXMuJHRhcmdldC5oZWlnaHQoKTtpZihudWxsIT1jJiZcInRvcFwiPT10aGlzLmFmZml4ZWQpcmV0dXJuIGM+ZT9cInRvcFwiOiExO2lmKFwiYm90dG9tXCI9PXRoaXMuYWZmaXhlZClyZXR1cm4gbnVsbCE9Yz9lK3RoaXMudW5waW48PWYudG9wPyExOlwiYm90dG9tXCI6YS1kPj1lK2c/ITE6XCJib3R0b21cIjt2YXIgaD1udWxsPT10aGlzLmFmZml4ZWQsaT1oP2U6Zi50b3Asaj1oP2c6YjtyZXR1cm4gbnVsbCE9YyYmYz49ZT9cInRvcFwiOm51bGwhPWQmJmkraj49YS1kP1wiYm90dG9tXCI6ITF9LGMucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldD1mdW5jdGlvbigpe2lmKHRoaXMucGlubmVkT2Zmc2V0KXJldHVybiB0aGlzLnBpbm5lZE9mZnNldDt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKFwiYWZmaXhcIik7dmFyIGE9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGI9dGhpcy4kZWxlbWVudC5vZmZzZXQoKTtyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ9Yi50b3AtYX0sYy5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpLDEpfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uPWZ1bmN0aW9uKCl7aWYodGhpcy4kZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKXt2YXIgYj10aGlzLiRlbGVtZW50LmhlaWdodCgpLGQ9dGhpcy5vcHRpb25zLm9mZnNldCxlPWQudG9wLGY9ZC5ib3R0b20sZz1hKGRvY3VtZW50LmJvZHkpLmhlaWdodCgpO1wib2JqZWN0XCIhPXR5cGVvZiBkJiYoZj1lPWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlPWQudG9wKHRoaXMuJGVsZW1lbnQpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoZj1kLmJvdHRvbSh0aGlzLiRlbGVtZW50KSk7dmFyIGg9dGhpcy5nZXRTdGF0ZShnLGIsZSxmKTtpZih0aGlzLmFmZml4ZWQhPWgpe251bGwhPXRoaXMudW5waW4mJnRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsXCJcIik7dmFyIGk9XCJhZmZpeFwiKyhoP1wiLVwiK2g6XCJcIiksaj1hLkV2ZW50KGkrXCIuYnMuYWZmaXhcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGopLGouaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO3RoaXMuYWZmaXhlZD1oLHRoaXMudW5waW49XCJib3R0b21cIj09aD90aGlzLmdldFBpbm5lZE9mZnNldCgpOm51bGwsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjLlJFU0VUKS5hZGRDbGFzcyhpKS50cmlnZ2VyKGkucmVwbGFjZShcImFmZml4XCIsXCJhZmZpeGVkXCIpK1wiLmJzLmFmZml4XCIpfVwiYm90dG9tXCI9PWgmJnRoaXMuJGVsZW1lbnQub2Zmc2V0KHt0b3A6Zy1iLWZ9KX19O3ZhciBkPWEuZm4uYWZmaXg7YS5mbi5hZmZpeD1iLGEuZm4uYWZmaXguQ29uc3RydWN0b3I9YyxhLmZuLmFmZml4Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hZmZpeD1kLHRoaXN9LGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoKTtkLm9mZnNldD1kLm9mZnNldHx8e30sbnVsbCE9ZC5vZmZzZXRCb3R0b20mJihkLm9mZnNldC5ib3R0b209ZC5vZmZzZXRCb3R0b20pLG51bGwhPWQub2Zmc2V0VG9wJiYoZC5vZmZzZXQudG9wPWQub2Zmc2V0VG9wKSxiLmNhbGwoYyxkKX0pfSl9KGpRdWVyeSk7IiwiLyohXHJcbiAqIGpRdWVyeSBTbW9vdGggU2Nyb2xsIC0gdjEuNy4yIC0gMjAxNi0wMS0yM1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20va3N3ZWRiZXJnL2pxdWVyeS1zbW9vdGgtc2Nyb2xsXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNiBLYXJsIFN3ZWRiZXJnXHJcbiAqIExpY2Vuc2VkIE1JVFxyXG4gKi9cclxuXHJcbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6alF1ZXJ5KX0oZnVuY3Rpb24oYSl7dmFyIGI9XCIxLjcuMlwiLGM9e30sZD17ZXhjbHVkZTpbXSxleGNsdWRlV2l0aGluOltdLG9mZnNldDowLGRpcmVjdGlvbjpcInRvcFwiLGRlbGVnYXRlU2VsZWN0b3I6bnVsbCxzY3JvbGxFbGVtZW50Om51bGwsc2Nyb2xsVGFyZ2V0Om51bGwsYmVmb3JlU2Nyb2xsOmZ1bmN0aW9uKCl7fSxhZnRlclNjcm9sbDpmdW5jdGlvbigpe30sZWFzaW5nOlwic3dpbmdcIixzcGVlZDo0MDAsYXV0b0NvZWZmaWNpZW50OjIscHJldmVudERlZmF1bHQ6ITB9LGU9ZnVuY3Rpb24oYil7dmFyIGM9W10sZD0hMSxlPWIuZGlyJiZcImxlZnRcIj09PWIuZGlyP1wic2Nyb2xsTGVmdFwiOlwic2Nyb2xsVG9wXCI7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7aWYodGhpcyE9PWRvY3VtZW50JiZ0aGlzIT09d2luZG93KXJldHVybiFkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHx0aGlzIT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZ0aGlzIT09ZG9jdW1lbnQuYm9keT92b2lkKGJbZV0oKT4wP2MucHVzaCh0aGlzKTooYltlXSgxKSxkPWJbZV0oKT4wLGQmJmMucHVzaCh0aGlzKSxiW2VdKDApKSk6KGMucHVzaChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSwhMSl9KSxjLmxlbmd0aHx8dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dGhpcz09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmXCJzbW9vdGhcIj09PWEodGhpcykuY3NzKFwic2Nyb2xsQmVoYXZpb3JcIikmJihjPVt0aGlzXSksYy5sZW5ndGh8fFwiQk9EWVwiIT09dGhpcy5ub2RlTmFtZXx8KGM9W3RoaXNdKX0pLFwiZmlyc3RcIj09PWIuZWwmJmMubGVuZ3RoPjEmJihjPVtjWzBdXSksY307YS5mbi5leHRlbmQoe3Njcm9sbGFibGU6ZnVuY3Rpb24oYSl7dmFyIGI9ZS5jYWxsKHRoaXMse2RpcjphfSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGIpfSxmaXJzdFNjcm9sbGFibGU6ZnVuY3Rpb24oYSl7dmFyIGI9ZS5jYWxsKHRoaXMse2VsOlwiZmlyc3RcIixkaXI6YX0pO3JldHVybiB0aGlzLnB1c2hTdGFjayhiKX0sc21vb3RoU2Nyb2xsOmZ1bmN0aW9uKGIsYyl7aWYoYj1ifHx7fSxcIm9wdGlvbnNcIj09PWIpcmV0dXJuIGM/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxkPWEuZXh0ZW5kKGIuZGF0YShcInNzT3B0c1wiKXx8e30sYyk7YSh0aGlzKS5kYXRhKFwic3NPcHRzXCIsZCl9KTp0aGlzLmZpcnN0KCkuZGF0YShcInNzT3B0c1wiKTt2YXIgZD1hLmV4dGVuZCh7fSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxiKSxlPWZ1bmN0aW9uKGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyg6fFxcLnxcXC8pL2csXCJcXFxcJDFcIil9LGU9dGhpcyxmPWEodGhpcyksZz1hLmV4dGVuZCh7fSxkLGYuZGF0YShcInNzT3B0c1wiKXx8e30pLGg9ZC5leGNsdWRlLGk9Zy5leGNsdWRlV2l0aGluLGo9MCxrPTAsbD0hMCxtPXt9LG49YS5zbW9vdGhTY3JvbGwuZmlsdGVyUGF0aChsb2NhdGlvbi5wYXRobmFtZSksbz1hLnNtb290aFNjcm9sbC5maWx0ZXJQYXRoKGUucGF0aG5hbWUpLHA9bG9jYXRpb24uaG9zdG5hbWU9PT1lLmhvc3RuYW1lfHwhZS5ob3N0bmFtZSxxPWcuc2Nyb2xsVGFyZ2V0fHxvPT09bixyPWMoZS5oYXNoKTtpZihyJiYhYShyKS5sZW5ndGgmJihsPSExKSxnLnNjcm9sbFRhcmdldHx8cCYmcSYmcil7Zm9yKDtsJiZqPGgubGVuZ3RoOylmLmlzKGMoaFtqKytdKSkmJihsPSExKTtmb3IoO2wmJms8aS5sZW5ndGg7KWYuY2xvc2VzdChpW2srK10pLmxlbmd0aCYmKGw9ITEpfWVsc2UgbD0hMTtsJiYoZy5wcmV2ZW50RGVmYXVsdCYmYi5wcmV2ZW50RGVmYXVsdCgpLGEuZXh0ZW5kKG0sZyx7c2Nyb2xsVGFyZ2V0Omcuc2Nyb2xsVGFyZ2V0fHxyLGxpbms6ZX0pLGEuc21vb3RoU2Nyb2xsKG0pKX07cmV0dXJuIG51bGwhPT1iLmRlbGVnYXRlU2VsZWN0b3I/dGhpcy51bmRlbGVnYXRlKGIuZGVsZWdhdGVTZWxlY3RvcixcImNsaWNrLnNtb290aHNjcm9sbFwiKS5kZWxlZ2F0ZShiLmRlbGVnYXRlU2VsZWN0b3IsXCJjbGljay5zbW9vdGhzY3JvbGxcIixlKTp0aGlzLnVuYmluZChcImNsaWNrLnNtb290aHNjcm9sbFwiKS5iaW5kKFwiY2xpY2suc21vb3Roc2Nyb2xsXCIsZSksdGhpc319KSxhLnNtb290aFNjcm9sbD1mdW5jdGlvbihiLGQpe2lmKFwib3B0aW9uc1wiPT09YiYmXCJvYmplY3RcIj09dHlwZW9mIGQpcmV0dXJuIGEuZXh0ZW5kKGMsZCk7dmFyIGUsZixnLGgsaSxqPTAsaz1cIm9mZnNldFwiLGw9XCJzY3JvbGxUb3BcIixtPXt9LG49e307XCJudW1iZXJcIj09dHlwZW9mIGI/KGU9YS5leHRlbmQoe2xpbms6bnVsbH0sYS5mbi5zbW9vdGhTY3JvbGwuZGVmYXVsdHMsYyksZz1iKTooZT1hLmV4dGVuZCh7bGluazpudWxsfSxhLmZuLnNtb290aFNjcm9sbC5kZWZhdWx0cyxifHx7fSxjKSxlLnNjcm9sbEVsZW1lbnQmJihrPVwicG9zaXRpb25cIixcInN0YXRpY1wiPT09ZS5zY3JvbGxFbGVtZW50LmNzcyhcInBvc2l0aW9uXCIpJiZlLnNjcm9sbEVsZW1lbnQuY3NzKFwicG9zaXRpb25cIixcInJlbGF0aXZlXCIpKSksbD1cImxlZnRcIj09PWUuZGlyZWN0aW9uP1wic2Nyb2xsTGVmdFwiOmwsZS5zY3JvbGxFbGVtZW50PyhmPWUuc2Nyb2xsRWxlbWVudCwvXig/OkhUTUx8Qk9EWSkkLy50ZXN0KGZbMF0ubm9kZU5hbWUpfHwoaj1mW2xdKCkpKTpmPWEoXCJodG1sLCBib2R5XCIpLmZpcnN0U2Nyb2xsYWJsZShlLmRpcmVjdGlvbiksZS5iZWZvcmVTY3JvbGwuY2FsbChmLGUpLGc9XCJudW1iZXJcIj09dHlwZW9mIGI/YjpkfHxhKGUuc2Nyb2xsVGFyZ2V0KVtrXSgpJiZhKGUuc2Nyb2xsVGFyZ2V0KVtrXSgpW2UuZGlyZWN0aW9uXXx8MCxtW2xdPWcraitlLm9mZnNldCxoPWUuc3BlZWQsXCJhdXRvXCI9PT1oJiYoaT1NYXRoLmFicyhtW2xdLWZbbF0oKSksaD1pL2UuYXV0b0NvZWZmaWNpZW50KSxuPXtkdXJhdGlvbjpoLGVhc2luZzplLmVhc2luZyxjb21wbGV0ZTpmdW5jdGlvbigpe2UuYWZ0ZXJTY3JvbGwuY2FsbChlLmxpbmssZSl9fSxlLnN0ZXAmJihuLnN0ZXA9ZS5zdGVwKSxmLmxlbmd0aD9mLnN0b3AoKS5hbmltYXRlKG0sbik6ZS5hZnRlclNjcm9sbC5jYWxsKGUubGluayxlKX0sYS5zbW9vdGhTY3JvbGwudmVyc2lvbj1iLGEuc21vb3RoU2Nyb2xsLmZpbHRlclBhdGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YXx8XCJcIixhLnJlcGxhY2UoL15cXC8vLFwiXCIpLnJlcGxhY2UoLyg/OmluZGV4fGRlZmF1bHQpLlthLXpBLVpdezMsNH0kLyxcIlwiKS5yZXBsYWNlKC9cXC8kLyxcIlwiKX0sYS5mbi5zbW9vdGhTY3JvbGwuZGVmYXVsdHM9ZH0pOyIsIi8qIVxyXG4gKlxyXG4gKiAgU3RhdGljIFdlYnNpdGUgU3RhcnRlciBLaXRcclxuICogIENvcHlyaWdodCAyMDE1IEtvbnN0YW50aW4gVGFya3VzLCBLcmlhc29mdCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcclxuICpcclxuICovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdHZhciAkbmF2YmFyID0gJCgnI25hdmJhcicpO1xyXG5cdHZhciBzY3JvbGxPZmZzZXQgPSAkbmF2YmFyLmhlaWdodCgpO1xyXG5cdCQoJ2EnKS5zbW9vdGhTY3JvbGwoe1xyXG5cdFx0b2Zmc2V0OiAtc2Nyb2xsT2Zmc2V0ICsgMVxyXG5cdH0pO1xyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgb2Zmc2V0ID0gJG5hdmJhci5vZmZzZXQoKS50b3A7XHJcblx0XHRpZiAob2Zmc2V0ID4gJG5hdmJhci5oZWlnaHQoKSkge1xyXG5cdFx0XHQkbmF2YmFyLmFkZENsYXNzKCdzY3JvbGxlZC1uYXYnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRuYXZiYXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGVkLW5hdicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlc2V0XHJcblx0XHQkKCcjbmF2IGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdC8vIGJvdHRvbSB0byB0b3Agb3JkZXJcclxuXHRcdC8vIGNvbnRhY3QgcGFnZVxyXG5cdFx0aWYgKG9mZnNldCA+PSAkKCcjY29udGFjdCcpLm9mZnNldCgpLnRvcCAtIHNjcm9sbE9mZnNldCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnY29udGFjdCcpO1xyXG5cdFx0XHQkKCcjbmF2IGxpIGFbaHJlZj1cIiNjb250YWN0XCJdJykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gd29yayBwYWdlXHJcblx0XHRlbHNlIGlmIChvZmZzZXQgPj0gJCgnI3dvcmsnKS5vZmZzZXQoKS50b3AgLSBzY3JvbGxPZmZzZXQpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3dvcmsnKTtcclxuXHRcdFx0JCgnI25hdiBsaSBhW2hyZWY9XCIjd29ya1wiXScpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdC8vIGFib3V0IHBhZ2VcclxuXHRcdGVsc2UgaWYgKG9mZnNldCA+PSAkKCcjYWJvdXQnKS5vZmZzZXQoKS50b3AgLSBzY3JvbGxPZmZzZXQpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2Fib3V0Jyk7XHJcblx0XHRcdCQoJyNuYXYgbGkgYVtocmVmPVwiI2Fib3V0XCJdJykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gaG9tZSBwYWdlXHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2hvbWUnKTtcclxuXHRcdFx0JCgnI25hdiBsaSBhW2hyZWY9XCIjaG9tZVwiXScpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSkoKTtcclxuXHJcbi8vIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1qcycsICcuLi9wYXJ0aWNsZXMuanNvbicsIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XHJcbi8vIH0pO1xyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKiBBdXRob3IgOiBWaW5jZW50IEdhcnJlYXUgIC0gdmluY2VudGdhcnJlYXUuY29tXHJcbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXHJcbi8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXHJcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcclxuLyogdjIuMC4wXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xyXG5cclxuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrdGFnX2lkKycgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xyXG5cclxuICAvKiBwYXJ0aWNsZXMuanMgdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXMgKi9cclxuICB0aGlzLnBKUyA9IHtcclxuICAgIGNhbnZhczoge1xyXG4gICAgICBlbDogY2FudmFzX2VsLFxyXG4gICAgICB3OiBjYW52YXNfZWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGg6IGNhbnZhc19lbC5vZmZzZXRIZWlnaHRcclxuICAgIH0sXHJcbiAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgdmFsdWU6IDQwMCxcclxuICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgICB9LFxyXG4gICAgICBzaGFwZToge1xyXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxyXG4gICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb2x5Z29uOiB7XHJcbiAgICAgICAgICBuYl9zaWRlczogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgIHNyYzogJycsXHJcbiAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICB2YWx1ZTogMSxcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIGFuaW06IHtcclxuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBzcGVlZDogMixcclxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxyXG4gICAgICAgICAgc3luYzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNpemU6IHtcclxuICAgICAgICB2YWx1ZTogMjAsXHJcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICBhbmltOiB7XHJcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgc3BlZWQ6IDIwLFxyXG4gICAgICAgICAgc2l6ZV9taW46IDAsXHJcbiAgICAgICAgICBzeW5jOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbGluZV9saW5rZWQ6IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgd2lkdGg6IDFcclxuICAgICAgfSxcclxuICAgICAgbW92ZToge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMixcclxuICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcclxuICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgICBvdXRfbW9kZTogJ291dCcsXHJcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcclxuICAgICAgICBhdHRyYWN0OiB7XHJcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgcm90YXRlWDogMzAwMCxcclxuICAgICAgICAgIHJvdGF0ZVk6IDMwMDBcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFycmF5OiBbXVxyXG4gICAgfSxcclxuICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgb25ob3Zlcjoge1xyXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgbW9kZTogJ2dyYWInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbmNsaWNrOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICBtb2RlOiAncHVzaCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb2Rlczoge1xyXG4gICAgICAgIGdyYWI6e1xyXG4gICAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICAgIGxpbmVfbGlua2VkOntcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnViYmxlOntcclxuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXHJcbiAgICAgICAgICBzaXplOiA4MCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcHVsc2U6e1xyXG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1c2g6e1xyXG4gICAgICAgICAgcGFydGljbGVzX25iOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6e1xyXG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZTp7fVxyXG4gICAgfSxcclxuICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxyXG4gICAgZm46IHtcclxuICAgICAgaW50ZXJhY3Q6IHt9LFxyXG4gICAgICBtb2Rlczoge30sXHJcbiAgICAgIHZlbmRvcnM6e31cclxuICAgIH0sXHJcbiAgICB0bXA6IHt9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHBKUyA9IHRoaXMucEpTO1xyXG5cclxuICAvKiBwYXJhbXMgc2V0dGluZ3MgKi9cclxuICBpZihwYXJhbXMpe1xyXG4gICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgcEpTLnRtcC5vYmogPSB7XHJcbiAgICBzaXplX3ZhbHVlOiBwSlMucGFydGljbGVzLnNpemUudmFsdWUsXHJcbiAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxyXG4gICAgbW92ZV9zcGVlZDogcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxyXG4gICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXHJcbiAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcclxuICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcclxuICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXHJcbiAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcclxuICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4ucmV0aW5hSW5pdCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKXtcclxuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87IFxyXG4gICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XHJcbiAgICB9IFxyXG4gICAgZWxzZXtcclxuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gMTtcclxuICAgICAgcEpTLnRtcC5yZXRpbmEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcblxyXG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gcEpTLnRtcC5vYmouc2l6ZV92YWx1ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xyXG4gICAgcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gcEpTLnRtcC5vYmoubW92ZV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XHJcblxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gY2FudmFzIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICBwSlMuZm4uY2FudmFzSW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwSlMuY2FudmFzLmN0eCA9IHBKUy5jYW52YXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9O1xyXG5cclxuICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgIGlmKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKXtcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXHJcbiAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMudyAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICAgIHBKUy5jYW52YXMuaCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcclxuICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xyXG5cclxuICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cclxuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XHJcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcclxuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogZGVuc2l0eSBwYXJ0aWNsZXMgZW5hYmxlZCAqL1xyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4uY2FudmFzUGFpbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG4gIH07XHJcblxyXG4gIHBKUy5mbi5jYW52YXNDbGVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xyXG5cclxuICBwSlMuZm4ucGFydGljbGUgPSBmdW5jdGlvbihjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pe1xyXG5cclxuICAgIC8qIHNpemUgKi9cclxuICAgIHRoaXMucmFkaXVzID0gKHBKUy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLnNpemUudmFsdWU7XHJcbiAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xyXG4gICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcclxuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMpe1xyXG4gICAgICAgIHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIHBvc2l0aW9uICovXHJcbiAgICB0aGlzLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuXHJcbiAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cclxuICAgIGlmKHRoaXMueCA+IHBKUy5jYW52YXMudyAtIHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzO1xyXG4gICAgZWxzZSBpZih0aGlzLnggPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cztcclxuICAgIGlmKHRoaXMueSA+IHBKUy5jYW52YXMuaCAtIHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xyXG4gICAgZWxzZSBpZih0aGlzLnkgPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cztcclxuXHJcbiAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xyXG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcywgcG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGNvbG9yICovXHJcbiAgICB0aGlzLmNvbG9yID0ge307XHJcbiAgICBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdvYmplY3QnKXtcclxuXHJcbiAgICAgIGlmKGNvbG9yLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgIHZhciBjb2xvcl9zZWxlY3RlZCA9IGNvbG9yLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBKUy5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLnIgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmcgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmIgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xyXG4gICAgICAgICAgICByOiBjb2xvci52YWx1ZS5yLFxyXG4gICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxyXG4gICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLmggIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLnMgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmwgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xyXG4gICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxyXG4gICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxyXG4gICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihjb2xvci52YWx1ZSA9PSAncmFuZG9tJyl7XHJcbiAgICAgIHRoaXMuY29sb3IucmdiID0ge1xyXG4gICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxyXG4gICAgICAgIGI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnc3RyaW5nJyl7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBvcGFjaXR5ICovXHJcbiAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSl7XHJcbiAgICAgIHRoaXMub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy52byA9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwO1xyXG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luYyl7XHJcbiAgICAgICAgdGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXHJcbiAgICB2YXIgdmVsYmFzZSA9IHt9XHJcbiAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbil7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5Oi0xIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5Oi0wLjUgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICB2ZWxiYXNlID0geyB4OjEsIHk6LTAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6MC41IH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeToxIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XHJcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5OjEgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTEsIHk6MCB9O1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSAndG9wLWxlZnQnOlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeTotMC41IH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTowIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCl7XHJcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLng7XHJcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnk7XHJcbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5yYW5kb20pe1xyXG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnZ5ICogKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKS0wLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xyXG4gICAgLy8gdGhpcy52eSA9IE1hdGguc2luKHRoZXRhKTtcclxuXHJcbiAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4O1xyXG4gICAgdGhpcy52eV9pID0gdGhpcy52eTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xyXG5cclxuICAgIHZhciBzaGFwZV90eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xyXG4gICAgaWYodHlwZW9mKHNoYXBlX3R5cGUpID09ICdvYmplY3QnKXtcclxuICAgICAgaWYoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KXtcclxuICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKXtcclxuICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcclxuICAgICAgdGhpcy5pbWcgPSB7XHJcbiAgICAgICAgc3JjOiBzaC5pbWFnZS5zcmMsXHJcbiAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRoaXMuaW1nLnJhdGlvKSB0aGlzLmltZy5yYXRpbyA9IDE7XHJcbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xyXG4gICAgICAgIGlmKHBKUy50bXAucHVzaGluZyl7XHJcbiAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBwID0gdGhpcztcclxuXHJcbiAgICBpZihwLnJhZGl1c19idWJibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzX2J1YmJsZTsgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHAub3BhY2l0eV9idWJibGUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHAuY29sb3IucmdiKXtcclxuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytvcGFjaXR5KycpJztcclxuICAgIH1lbHNle1xyXG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrb3BhY2l0eSsnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFN0eWxlID0gY29sb3JfdmFsdWU7XHJcbiAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICBzd2l0Y2gocC5zaGFwZSl7XHJcblxyXG4gICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2VkZ2UnOlxyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54LXJhZGl1cywgcC55LXJhZGl1cywgcmFkaXVzKjIsIHJhZGl1cyoyKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICd0cmlhbmdsZSc6XHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKHBKUy5jYW52YXMuY3R4LCBwLngtcmFkaXVzLCBwLnkrcmFkaXVzIC8gMS42NiwgcmFkaXVzKjIsIDMsIDIpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxyXG4gICAgICAgICAgcC54IC0gcmFkaXVzIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zLjUpLCAvLyBzdGFydFhcclxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyLjY2LzMuNSksIC8vIHN0YXJ0WVxyXG4gICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXHJcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgMSAvLyBzaWRlQ291bnREZW5vbWluYXRvclxyXG4gICAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnc3Rhcic6XHJcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXHJcbiAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxyXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIqMi42Ni8zLjUpLCAvLyBzdGFydFlcclxuICAgICAgICAgIHJhZGl1cyoyKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXHJcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxyXG4gICAgICAgICAgMiAvLyBzaWRlQ291bnREZW5vbWluYXRvclxyXG4gICAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkcmF3KCl7XHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIGltZ19vYmosXHJcbiAgICAgICAgICAgIHAueC1yYWRpdXMsXHJcbiAgICAgICAgICAgIHAueS1yYWRpdXMsXHJcbiAgICAgICAgICAgIHJhZGl1cyoyLFxyXG4gICAgICAgICAgICByYWRpdXMqMiAvIHAuaW1nLnJhdGlvXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XHJcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHAuaW1nLm9iajtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW1nX29iail7XHJcbiAgICAgICAgICBkcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XHJcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XHJcbiAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xyXG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xyXG4gICAgXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUgPSBmdW5jdGlvbigpe1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlOyBpKyspIHtcclxuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBwSlMuZm4ucGFydGljbGUocEpTLnBhcnRpY2xlcy5jb2xvciwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgLyogdGhlIHBhcnRpY2xlICovXHJcbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcclxuXHJcbiAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XHJcbiAgICAgIC8vIHZhciBmID0gLUJBTkdfU0laRSAvIGQ7XHJcbiAgICAgIC8vIGlmICggZCA8IEJBTkdfU0laRSApIHtcclxuICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XHJcbiAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xyXG4gICAgICAvLyAgICAgcC52eSA9IGYgKiBNYXRoLnNpbih0KTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLyogbW92ZSB0aGUgcGFydGljbGUgKi9cclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XHJcbiAgICAgICAgdmFyIG1zID0gcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7XHJcbiAgICAgICAgcC54ICs9IHAudnggKiBtcztcclxuICAgICAgICBwLnkgKz0gcC52eSAqIG1zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBjaGFuZ2Ugb3BhY2l0eSBzdGF0dXMgKi9cclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XHJcbiAgICAgICAgaWYocC5vcGFjaXR5X3N0YXR1cyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPj0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBwLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICBwLm9wYWNpdHkgKz0gcC52bztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgcC5vcGFjaXR5IC09IHAudm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHAub3BhY2l0eSA8IDApIHAub3BhY2l0eSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGNoYW5nZSBzaXplICovXHJcbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XHJcbiAgICAgICAgaWYocC5zaXplX3N0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgIGlmKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgIHAucmFkaXVzIC09IHAudnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHAucmFkaXVzIDwgMCkgcC5yYWRpdXMgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBjaGFuZ2UgcGFydGljbGUgcG9zaXRpb24gaWYgaXQgaXMgb3V0IG9mIGNhbnZhcyAqL1xyXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xyXG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xyXG4gICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcclxuICAgICAgICAgIHhfcmlnaHQ6ICBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICB5X3RvcDogcC5yYWRpdXMsXHJcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oXHJcbiAgICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcclxuICAgICAgICAgIHhfbGVmdDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgeF9yaWdodDogcEpTLmNhbnZhcy53ICsgcC5yYWRpdXMsXHJcbiAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxyXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaCArIHAucmFkaXVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudyl7XHJcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XHJcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHAueCArIHAucmFkaXVzIDwgMCl7XHJcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xyXG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XHJcbiAgICAgIH1cclxuICAgICAgaWYocC55IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpe1xyXG4gICAgICAgIHAueSA9IG5ld19wb3MueV90b3A7XHJcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHAueSArIHAucmFkaXVzIDwgMCl7XHJcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcclxuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBvdXQgb2YgY2FudmFzIG1vZGVzICovXHJcbiAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpe1xyXG4gICAgICAgIGNhc2UgJ2JvdW5jZSc6XHJcbiAgICAgICAgICBpZiAocC54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcclxuICAgICAgICAgIGVsc2UgaWYgKHAueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XHJcbiAgICAgICAgICBlbHNlIGlmIChwLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogZXZlbnRzICovXHJcbiAgICAgIGlmKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcclxuICAgICAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKHApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xyXG4gICAgICAgIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xyXG4gICAgICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUocCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgcEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcclxuICAgICAgICBmb3IodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcclxuXHJcbiAgICAgICAgICAvKiBsaW5rIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xyXG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLHAyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBhdHRyYWN0IHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcclxuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xyXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XHJcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCxwMik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIHBKUy5mbi5wYXJ0aWNsZXNEcmF3ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvKiBjbGVhciBjYW52YXMgKi9cclxuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XHJcblxyXG4gICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXHJcbiAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XHJcblxyXG4gICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcclxuICAgICAgcC5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XHJcbiAgfTtcclxuXHJcbiAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8qIGluaXQgYWxsICovXHJcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5jaGVja0FuaW1GcmFtZSk7XHJcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IHVuZGVmaW5lZDtcclxuICAgIHBKUy50bXAuaW1nX29iaiA9IHVuZGVmaW5lZDtcclxuICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcclxuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xyXG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyKCk7XHJcbiAgICBcclxuICAgIC8qIHJlc3RhcnQgKi9cclxuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XHJcblxyXG4gIH07XHJcblxyXG5cclxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxyXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXHJcbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0IC8gKDEvcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO1xyXG5cclxuICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvKiBzdHlsZSAqL1xyXG4gICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xyXG4gICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogcGF0aCAqL1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcclxuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocDIueCwgcDIueSk7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMgID0gZnVuY3Rpb24ocDEsIHAyKXtcclxuXHJcbiAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXHJcbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcclxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxyXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XHJcblxyXG4gICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcclxuXHJcbiAgICAgIHZhciBheCA9IGR4LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKjEwMDApLFxyXG4gICAgICAgICAgYXkgPSBkeS8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSoxMDAwKTtcclxuXHJcbiAgICAgIHAxLnZ4IC09IGF4O1xyXG4gICAgICBwMS52eSAtPSBheTtcclxuXHJcbiAgICAgIHAyLnZ4ICs9IGF4O1xyXG4gICAgICBwMi52eSArPSBheTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XHJcblxyXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcclxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpLFxyXG4gICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XHJcblxyXG4gICAgaWYoZGlzdCA8PSBkaXN0X3Ape1xyXG4gICAgICBwMS52eCA9IC1wMS52eDtcclxuICAgICAgcDEudnkgPSAtcDEudnk7XHJcblxyXG4gICAgICBwMi52eCA9IC1wMi52eDtcclxuICAgICAgcDIudnkgPSAtcDIudnk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYiwgcG9zKXtcclxuXHJcbiAgICBwSlMudG1wLnB1c2hpbmcgPSB0cnVlO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKXtcclxuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKFxyXG4gICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXHJcbiAgICAgICAgICBwSlMucGFydGljbGVzLmNvbG9yLFxyXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXHJcbiAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICBpZihpID09IG5iLTEpe1xyXG4gICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBKUy50bXAucHVzaGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24obmIpe1xyXG5cclxuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcclxuICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgIC8qIG9uIGhvdmVyIGV2ZW50ICovXHJcbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XHJcblxyXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxyXG4gICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gcC5vcGFjaXR5O1xyXG4gICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xyXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XHJcblxyXG4gICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLyogc2l6ZSAqL1xyXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcclxuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcclxuICAgICAgICAgICAgICBpZihzaXplID49IDApe1xyXG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHZhciBkaWYgPSBwLnJhZGl1cyAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcclxuICAgICAgICAgICAgICBpZihzaXplID4gMCl7XHJcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogb3BhY2l0eSAqL1xyXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ID4gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcclxuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KnJhdGlvO1xyXG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XHJcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5IC0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZS1wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkqcmF0aW87XHJcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA8IHAub3BhY2l0eSAmJiBvcGFjaXR5ID49IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcclxuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLyogbW91c2VsZWF2ZSAqL1xyXG4gICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKXtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXHJcbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcclxuXHJcblxyXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XHJcbiAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXHJcbiAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ksXHJcbiAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXHJcbiAgICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xMDAwO1xyXG5cclxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKXtcclxuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKjIpe1xyXG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoYnViYmxlX3BhcmFtLCBwYXJ0aWNsZXNfcGFyYW0sIHBfb2JqX2J1YmJsZSwgcF9vYmosIGlkKXtcclxuXHJcbiAgICAgICAgaWYoYnViYmxlX3BhcmFtICE9IHBhcnRpY2xlc19wYXJhbSl7XHJcblxyXG4gICAgICAgICAgaWYoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCl7XHJcbiAgICAgICAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcclxuICAgICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xyXG4gICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xyXG4gICAgICAgICAgICAgIGlmKG9iaiAhPSBidWJibGVfcGFyYW0pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgdmFyIHZhbHVlX3RtcCA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGJ1YmJsZV9wYXJhbSArIGRpZjtcclxuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcclxuICAgICAgICAvKiBzaXplICovXHJcbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBwLnJhZGl1c19idWJibGUsIHAucmFkaXVzLCAnc2l6ZScpO1xyXG4gICAgICAgIC8qIG9wYWNpdHkgKi9cclxuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIHAub3BhY2l0eV9idWJibGUsIHAub3BhY2l0eSwgJ29wYWNpdHknKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcclxuXHJcbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XHJcblxyXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcclxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXHJcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xyXG5cclxuICAgICAgdmFyIG5vcm1WZWMgPSB7eDogZHhfbW91c2UvZGlzdF9tb3VzZSwgeTogZHlfbW91c2UvZGlzdF9tb3VzZX0sXHJcbiAgICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcclxuICAgICAgICAgIHZlbG9jaXR5ID0gMTAwLFxyXG4gICAgICAgICAgcmVwdWxzZUZhY3RvciA9IGNsYW1wKCgxL3JlcHVsc2VSYWRpdXMpKigtMSpNYXRoLnBvdyhkaXN0X21vdXNlL3JlcHVsc2VSYWRpdXMsMikrMSkqcmVwdWxzZVJhZGl1cyp2ZWxvY2l0eSwgMCwgNTApO1xyXG4gICAgICBcclxuICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICB4OiBwLnggKyBub3JtVmVjLnggKiByZXB1bHNlRmFjdG9yLFxyXG4gICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcclxuICAgICAgICBpZihwb3MueCAtIHAucmFkaXVzID4gMCAmJiBwb3MueCArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy53KSBwLnggPSBwb3MueDtcclxuICAgICAgICBpZihwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcC54ID0gcG9zLng7XHJcbiAgICAgICAgcC55ID0gcG9zLnk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xyXG5cclxuICAgICAgaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xyXG4gICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCsrO1xyXG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCl7XHJcbiAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyl7XHJcblxyXG4gICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LCAzKTtcclxuXHJcbiAgICAgICAgdmFyIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLngsXHJcbiAgICAgICAgICAgIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnksXHJcbiAgICAgICAgICAgIGQgPSBkeCpkeCArIGR5KmR5O1xyXG5cclxuICAgICAgICB2YXIgZm9yY2UgPSAtcmVwdWxzZVJhZGl1cyAvIGQgKiAxO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCl7XHJcblxyXG4gICAgICAgICAgdmFyIGYgPSBNYXRoLmF0YW4yKGR5LGR4KTtcclxuICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xyXG4gICAgICAgICAgcC52eSA9IGZvcmNlICogTWF0aC5zaW4oZik7XHJcblxyXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IHtcclxuICAgICAgICAgICAgICB4OiBwLnggKyBwLnZ4LFxyXG4gICAgICAgICAgICAgIHk6IHAueSArIHAudnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xyXG4gICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xyXG4gICAgICAgICAgcHJvY2VzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcclxuICAgICAgICAvLyBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XHJcbiAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xyXG4gICAgICAgIC8vICAgICBwcm9jZXNzKCk7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICBwcm9jZXNzKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9PSBmYWxzZSl7XHJcblxyXG4gICAgICAgICAgcC52eCA9IHAudnhfaTtcclxuICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xyXG5cclxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXHJcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxyXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcclxuXHJcbiAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xyXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2Upe1xyXG5cclxuICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMS9wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApe1xyXG5cclxuICAgICAgICAgIC8qIHN0eWxlICovXHJcbiAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XHJcbiAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvKiBwYXRoICovXHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KTtcclxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cclxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jyl7XHJcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gd2luZG93O1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogZGV0ZWN0IG1vdXNlIHBvcyAtIG9uIGhvdmVyIC8gY2xpY2sgZXZlbnQgKi9cclxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xyXG5cclxuICAgICAgLyogZWwgb24gbW91c2Vtb3ZlICovXHJcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5lbCA9PSB3aW5kb3cpe1xyXG4gICAgICAgICAgdmFyIHBvc194ID0gZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdmFyIHBvc194ID0gZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICBwb3NfeSA9IGUub2Zmc2V0WSB8fCBlLmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gcG9zX3k7XHJcblxyXG4gICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcclxuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ICo9IHBKUy5jYW52YXMucHhyYXRpbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cclxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IG51bGw7XHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xyXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcclxuXHJcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeDtcclxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195O1xyXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcclxuXHJcbiAgICAgICAgICBzd2l0Y2gocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcclxuICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcclxuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcclxuICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XHJcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9LCBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKjEwMDApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICB9O1xyXG5cclxuICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpe1xyXG5cclxuICAgICAgLyogY2FsYyBhcmVhICovXHJcbiAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcclxuICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xyXG4gICAgICAgIGFyZWEgPSBhcmVhLyhwSlMuY2FudmFzLnB4cmF0aW8qMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cclxuICAgICAgdmFyIG5iX3BhcnRpY2xlcyA9IGFyZWEgKiBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSAvIHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYTtcclxuXHJcbiAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cclxuICAgICAgdmFyIG1pc3NpbmdfcGFydGljbGVzID0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBuYl9wYXJ0aWNsZXM7XHJcbiAgICAgIGlmKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcclxuICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAgPSBmdW5jdGlvbihwMSwgcG9zaXRpb24pe1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xyXG5cclxuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXHJcbiAgICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxyXG4gICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcclxuXHJcbiAgICAgIGlmKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKXtcclxuICAgICAgICBwMS54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcclxuICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcclxuICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAocDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uKHApe1xyXG5cclxuICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xyXG4gICAgdmFyIHN2Z1htbCA9IHBKUy50bXAuc291cmNlX3N2ZyxcclxuICAgICAgICByZ2JIZXggPSAvIyhbMC05QS1GXXszLDZ9KS9naSxcclxuICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xyXG4gICAgICAgICAgaWYocC5jb2xvci5yZ2Ipe1xyXG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK3Aub3BhY2l0eSsnKSc7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK3Aub3BhY2l0eSsnKSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cclxuICAgIHZhciBzdmcgPSBuZXcgQmxvYihbY29sb3JlZFN2Z1htbF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J30pLFxyXG4gICAgICAgIERPTVVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3csXHJcbiAgICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xyXG5cclxuICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHAuaW1nLm9iaiA9IGltZztcclxuICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgRE9NVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICBwSlMudG1wLmNvdW50X3N2ZysrO1xyXG4gICAgfSk7XHJcbiAgICBpbWcuc3JjID0gdXJsO1xyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICBjYW52YXNfZWwucmVtb3ZlKCk7XHJcbiAgICBwSlNEb20gPSBudWxsO1xyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUgPSBmdW5jdGlvbihjLCBzdGFydFgsIHN0YXJ0WSwgc2lkZUxlbmd0aCwgc2lkZUNvdW50TnVtZXJhdG9yLCBzaWRlQ291bnREZW5vbWluYXRvcil7XHJcblxyXG4gICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXHJcbiAgICB2YXIgc2lkZUNvdW50ID0gc2lkZUNvdW50TnVtZXJhdG9yICogc2lkZUNvdW50RGVub21pbmF0b3I7XHJcbiAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XHJcbiAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcclxuICAgIHZhciBpbnRlcmlvckFuZ2xlID0gTWF0aC5QSSAtIE1hdGguUEkgKiBpbnRlcmlvckFuZ2xlRGVncmVlcyAvIDE4MDsgLy8gY29udmVydCB0byByYWRpYW5zXHJcbiAgICBjLnNhdmUoKTtcclxuICAgIGMuYmVnaW5QYXRoKCk7XHJcbiAgICBjLnRyYW5zbGF0ZShzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICBjLm1vdmVUbygwLDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlQ291bnQ7IGkrKykge1xyXG4gICAgICBjLmxpbmVUbyhzaWRlTGVuZ3RoLDApO1xyXG4gICAgICBjLnRyYW5zbGF0ZShzaWRlTGVuZ3RoLDApO1xyXG4gICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcclxuICAgIH1cclxuICAgIC8vYy5zdHJva2UoKTtcclxuICAgIGMuZmlsbCgpO1xyXG4gICAgYy5yZXN0b3JlKCk7XHJcblxyXG4gIH07XHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyA9IGZ1bmN0aW9uKHR5cGUpe1xyXG5cclxuICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjICE9ICcnKXtcclxuXHJcbiAgICAgIGlmKHR5cGUgPT0gJ3N2Zycpe1xyXG5cclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xyXG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcblxyXG4gICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHBKUy50bXAuaW1nX29iaiA9IGltZztcclxuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltZy5zcmMgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xyXG4gICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XHJcblxyXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcclxuXHJcbiAgICAgICAgaWYocEpTLnRtcC5jb3VudF9zdmcgPj0gcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUpe1xyXG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RpbGwgbG9hZGluZy4uLicpO1xyXG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcclxuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcclxuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xyXG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XHJcbiAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxyXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xyXG5cclxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBwSlMudG1wLmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShjaGVjayk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLnRtcC5jaGVja0FuaW1GcmFtZSk7XHJcbiAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKXtcclxuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcclxuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xyXG4gICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5pbml0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xyXG4gICAgcEpTLmZuLnJldGluYUluaXQoKTtcclxuICAgIHBKUy5mbi5jYW52YXNJbml0KCk7XHJcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xyXG4gICAgcEpTLmZuLmNhbnZhc1BhaW50KCk7XHJcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XHJcbiAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xyXG5cclxuICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cclxuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBoZXhUb1JnYihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKTtcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZihpc0luQXJyYXkoJ2ltYWdlJywgcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlKSl7XHJcbiAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XHJcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcocEpTLnRtcC5pbWdfdHlwZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG5cclxuXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0gcEpTIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXHJcblxyXG5cclxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcclxuXHJcbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcclxuICBcclxuXHJcblxyXG59O1xyXG5cclxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cclxuXHJcbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xyXG4gICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxyXG4gICAgIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XHJcbiAgICAgIGFyZ3VtZW50cy5jYWxsZWUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcclxufTtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XHJcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XHJcbiAgICBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICAgfHxcclxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcclxuICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcclxuICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcclxuICAgIGNsZWFyVGltZW91dFxyXG59ICkoKTtcclxuXHJcbmZ1bmN0aW9uIGhleFRvUmdiKGhleCl7XHJcbiAgLy8gQnkgVGltIERvd24gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjI0MTM5LzM0OTM2NTBcclxuICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXHJcbiAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24obSwgciwgZywgYikge1xyXG4gICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgfSk7XHJcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gIHJldHVybiByZXN1bHQgPyB7XHJcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxyXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuICB9IDogbnVsbDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgbWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xyXG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXHJcblxyXG53aW5kb3cucEpTRG9tID0gW107XHJcblxyXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XHJcblxyXG4gIC8vY29uc29sZS5sb2cocGFyYW1zKTtcclxuXHJcbiAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xyXG4gIGlmKHR5cGVvZih0YWdfaWQpICE9ICdzdHJpbmcnKXtcclxuICAgIHBhcmFtcyA9IHRhZ19pZDtcclxuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xyXG4gIH1cclxuXHJcbiAgLyogbm8gaWQ/IHNldCB0aGUgaWQgdG8gZGVmYXVsdCBpZCAqL1xyXG4gIGlmKCF0YWdfaWQpe1xyXG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XHJcbiAgfVxyXG5cclxuICAvKiBwSlMgZWxlbWVudHMgKi9cclxuICB2YXIgcEpTX3RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCksXHJcbiAgICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXHJcbiAgICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcclxuXHJcbiAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgcEpTIHRhcmdldCB0YWcgKi9cclxuICBpZihleGlzdF9jYW52YXMubGVuZ3RoKXtcclxuICAgIHdoaWxlKGV4aXN0X2NhbnZhcy5sZW5ndGggPiAwKXtcclxuICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogY3JlYXRlIGNhbnZhcyBlbGVtZW50ICovXHJcbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xyXG5cclxuICAvKiBzZXQgc2l6ZSBjYW52YXMgKi9cclxuICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICBjYW52YXNfZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gIC8qIGFwcGVuZCBjYW52YXMgKi9cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xyXG5cclxuICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cclxuICBpZihjYW52YXMgIT0gbnVsbCl7XHJcbiAgICBwSlNEb20ucHVzaChuZXcgcEpTKHRhZ19pZCwgcGFyYW1zKSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gZnVuY3Rpb24odGFnX2lkLCBwYXRoX2NvbmZpZ19qc29uLCBjYWxsYmFjayl7XHJcblxyXG4gIC8qIGxvYWQganNvbiBjb25maWcgKi9cclxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgeGhyLm9wZW4oJ0dFVCcsIHBhdGhfY29uZmlnX2pzb24pO1xyXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XHJcbiAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xyXG4gICAgICAgIHdpbmRvdy5wYXJ0aWNsZXNKUyh0YWdfaWQsIHBhcmFtcyk7XHJcbiAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcreGhyLnN0YXR1cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB4aHIuc2VuZCgpO1xyXG5cclxufTsiLCIvKiFcclxuICpcclxuICogIFN0YXRpYyBXZWJzaXRlIFN0YXJ0ZXIgS2l0XHJcbiAqICBDb3B5cmlnaHQgMjAxNSBLb25zdGFudGluIFRhcmt1cywgS3JpYXNvZnQgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXHJcbiAqXHJcbiAqL1xyXG5cclxuLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgbWV0aG9kO1xyXG4gIHZhciBub29wID0gZnVuY3Rpb24gKCkge307XHJcbiAgdmFyIG1ldGhvZHMgPSBbXHJcbiAgICAnYXNzZXJ0JywgJ2NsZWFyJywgJ2NvdW50JywgJ2RlYnVnJywgJ2RpcicsICdkaXJ4bWwnLCAnZXJyb3InLFxyXG4gICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxyXG4gICAgJ3RpbWVsaW5lJywgJ3RpbWVsaW5lRW5kJywgJ3RpbWVTdGFtcCcsICd0cmFjZScsICd3YXJuJ1xyXG4gIF07XHJcbiAgdmFyIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoO1xyXG4gIHZhciBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xyXG5cclxuICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXTtcclxuXHJcbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXHJcbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG4gICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbi8vIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

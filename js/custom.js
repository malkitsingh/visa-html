$(document).ready(function(){
    $('.tab-block-list a').click(function(){
        $('.section-block').removeClass('show');
        var my_txt= $(this).attr("href");
        
        $('.section-block'+my_txt).addClass('show');

    });
    $('.cut-drop ').click(function(){
        $(this).toggleClass('open');
        $('.tabs.upper-tab ').slideToggle();
    });
    $('.toggle-btn').click(function(){
        $(this).toggleClass('open');
        $('.sidebar').toggleClass('open');
    });
   
 $('select').material_select();
  $('.specail-case > h3').click(function(){
    $(this).toggleClass('open');
    $('.case-cont').slideToggle();
 });
  $('.visa-option').click(function(){
 	$('.inner-tab-part').addClass('hide');
 		var tab_value = $(this).attr('data-content');
 		$('.inner-tab-part#'+tab_value).removeClass('hide');
 });

});
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){  
//     $('header').addClass("sticky");
//     $('.content-part').addClass("sticky");
   
//   }
//   else{
//     $('header').removeClass("sticky");
//      $('.content-part').removeClass("sticky");
//   }
// });
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('.list-menu-links').addClass('sticky');
        $('#sticky-anchor').height($('.list-menu-links').outerHeight());
    } else {
        $('.list-menu-links').removeClass('sticky');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

if ($(window).width() > 768) {
$('.my-carousel').owlCarousel({
    loop:false,
    margin:40,
    responsiveClass:true,
    responsive:{
        
        1600:{
            items:5,
            nav:false,
            loop:false
        }
    }
});

}
if ($(window).width() < 768) {

        $('.tabs.upper-tab a ').click(function(){
       var txt= $(this).attr('data-content');
        $('.tabs.upper-tab ').slideUp();
        $('.cut-drop').html(txt);
    });

    }
    if($(window).width() < 768){
         $('.Visa-Types.section-block').addClass('show');
    }
    // https://github.com/jmschabdach/bootstrap-tabdrop


// !function ($) {

//     var WinResizer = (function () {
//         var registered = [];
//         var inited = false;
//         var timer;
//         var resize = function () {
//             clearTimeout(timer);
//             timer = setTimeout(notify, 100);
//         };
//         var notify = function () {
//             for (var i = 0, cnt = registered.length; i < cnt; i++) {
//                 registered[i].apply();
//             }
//         };
//         return {
//             register: function (fn) {
//                 registered.push(fn);
//                 if (inited === false) {
//                     $(window).bind('resize', resize);
//                     inited = true;
//                 }
//             },
//             unregister: function (fn) {
//                 var registeredFnIndex = registered.indexOf(fn);
//                 if (registeredFnIndex > -1) {
//                     registered.splice(registeredFnIndex, 1);
//                 }
//             }
//         }
//     }());

//     var TabDrop = function (element, options) {
//         this.element = $(element);
//         this.options = options;

//         if (options.align === "left")
//             this.dropdown = $('<li class="dropdown hide pull-left tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="display-tab"></span><b class="caret"></b></a><ul class="dropdown-menu"></ul></li>');
//         else
//             this.dropdown = $('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="display-tab"></span><b class="caret"></b></a><ul class="dropdown-menu"></ul></li>');

//         this.dropdown.prependTo(this.element);
//         if (this.element.parent().is('.tabs-below')) {
//             this.dropdown.addClass('dropup');
//         }

//         var boundLayout = $.proxy(this.layout, this);

//         WinResizer.register(boundLayout);
//         this.element.on('shown.bs.tab', function (e) {
//         boundLayout();
//         });

//         this.teardown = function () {
//             WinResizer.unregister(boundLayout);
//             this.element.off('shown.bs.tab', function (e) {
//                 boundLayout();
//             });
//         };

//         this.layout();
//     };

//     TabDrop.prototype = {
//         constructor: TabDrop,

//         layout: function () {
//             var self = this;
//             var collection = [];
//       var isUsingFlexbox = function(el){
//         return el.element.css('display').indexOf('flex') > -1;
//       };

//             function setDropdownText(text) {
//                 self.dropdown.find('a span.display-tab').html(text);
//             }

//             function setDropdownDefaultText(collection) {
//                 var text;
//                 if (jQuery.isFunction(self.options.text)) {
//                     text = self.options.text(collection);
//                 } else {
//                     text = self.options.text;
//                 }
//                 setDropdownText(text);
//             }

//       // Flexbox support
//       function handleFlexbox(){
//         if (isUsingFlexbox(self)){
//           if (self.element.find('li.tabdrop').hasClass('pull-right')){
//             self.element.find('li.tabdrop').css({position: 'absolute', right: 0});
//                         self.element.css('padding-right', self.element.find('.tabdrop').outerWidth(true));
//           }
//         }  
//       }

//             function checkOffsetAndPush(recursion) {
//                 self.element.find('> li:not(.tabdrop)')
//                     .each(function () {
//                         if (this.offsetTop > self.options.offsetTop) {
//                             collection.push(this);
//                         }
//                     });

//                 if (collection.length > 0) {
//                     if (!recursion) {
//                         self.dropdown.removeClass('hide');
//                         self.dropdown.find('ul').empty();
//                     }
//                     self.dropdown.find('ul').prepend(collection);
                    
//                     if (self.dropdown.find('.active').length == 1) {
//                         self.dropdown.addClass('active');
//                         setDropdownText(self.dropdown.find('.active > a').html());
//                     } else {
//                         self.dropdown.removeClass('active');
//                         setDropdownDefaultText(collection);
//                     }
//           handleFlexbox();
//                     collection = [];
//                     checkOffsetAndPush(true);
//                 } else {
//                     if (!recursion) {
//                         self.dropdown.addClass('hide');
//                     }
//                 }
//             }
    
//             self.element.append(self.dropdown.find('li'));
//             checkOffsetAndPush();
//         }
//     };

//     $.fn.tabdrop = function (option) {
//         return this.each(function () {
//             var $this = $(this),
//                 data = $this.data('tabdrop'),
//                 options = typeof option === 'object' && option;
//             if (!data) {
//                 options = $.extend({}, $.fn.tabdrop.defaults, options);
//                 data = new TabDrop(this, options);
//                 $this.data('tabdrop', data);
//             }
//             if (typeof option == 'string') {
//                 data[option]();
//             }
//         })
//     };

//     $.fn.tabdrop.defaults = {
//         text: '<i class="fa fa-bars"></i>',
//         offsetTop: 0
//     };

//     $.fn.tabdrop.Constructor = TabDrop;

// }(window.jQuery);

// // init
// this.$('.nav-tabs').tabdrop();
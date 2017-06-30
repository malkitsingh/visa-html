$(document).ready(function(){
      $('select').selectize();
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
        $('body').toggleClass('open');
    });
   

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
$(window).load(function(){
$('.loader').fadeOut();
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    // $('header').addClass("sticky");
    $('.content-part').addClass("sticky");
   
  }
  else{
    // $('header').removeClass("sticky");
     $('.content-part').removeClass("sticky");
  }
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
// if ($(window).width() < 768) {

//         $('.tabs.upper-tab a ').click(function(){
//        var txt= $(this).attr('data-content');
//         $('.tabs.upper-tab ').slideUp();
//         $('.cut-drop').html(txt);
//     });

   // }
    if($(window).width() < 768){
         $('.Visa-Types.section-block').addClass('show');
         $(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");

  }
  else{
     $('header').removeClass("sticky");
  }
});
    }
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('.visa-option').addClass('safari');

}
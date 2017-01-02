jQuery(document).ready(function($){

  var galleryImages = $('.inventory-gallery .views-row');

  if (galleryImages.length >= 3) {
    $(galleryImages[2]).addClass('featured');
  } else {
    $(galleryImages[0]).addClass('featured');
  }
}); //end doc

jQuery(document).ready(function($){

  // SHOW COOKIE POPUP ... Mmm... cookies...
  window.setTimeout(function(){
    popup('show');
  }, 2000);

  function popup(hideOrShow) {
    if (hideOrShow == 'show') {
      if ( localStorage.getItem('cookiePopupDismissed') == null ){
        $('#cookie-popup').slideToggle(500);
      }
    }
  }
  $('#cookie-popup .button-small').click(function(){
    localStorage.setItem('cookiePopupDismissed', 1);
    $('#cookie-popup').slideToggle(500);
  });

});// end doc

jQuery(document).ready(function($){
  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

  if ($('#homepage-layout').length > 0) { //Only do it on the home page

    var whatDesc = $('.what-description')
        howDesc = $('.how-description')
        whoDesc = $('.who-description')
        whatInfo = $('.info-nav .info-what')
        whoInfo = $('.info-nav .info-who')
        howInfo = $('.info-nav .info-how')
        whatGallery = $('.what-gallery')
        howGallery = $('.how-gallery')
        whoGallery = $('.who-gallery');


    howDesc.hide();
    whoDesc.hide();
    howGallery.hide();
    whoGallery.hide();

    whatInfo.click(function (){
      howDesc.hide();
      whoDesc.hide();
      whatDesc.show();
      howGallery.hide();
      whoGallery.hide();
      whatGallery.show();
    });
    howInfo.click(function (){
      whatDesc.hide();
      whoDesc.hide();
      howDesc.show();
      whatGallery.hide();
      whoGallery.hide();
      howGallery.show();
    });
    whoInfo.click(function (){
      whatDesc.hide();
      howDesc.hide();
      whoDesc.show();
      whatGallery.hide();
      howGallery.hide();
      whoGallery.show();
    });
  }


}); //doc end

jQuery(document).ready(function($){

  if ($(window).width() < 1081 ) { // Only do this for mobile
    var navButton = $('#mobile-menu-button');
    var navMenu = $('#main-menu');

    navMenu.hide();

    navButton.click(function(){
      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected')
        navMenu.slideToggle(800);
      } else {
        $(this).addClass('selected');
        navMenu.slideToggle(800);
      }
    });

    $('#main-menu a').click(function(){
      if (navMenu.hasClass('selected')) {
        navMenu.removeClass('selected');
        navMenu.slideToggle(800);
      }
    });
  }


  // Smooth scroll to top button
  $('.to-the-top').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 800 );
  });

  // Smooth scroll to next section down
  $('.scroll-down').click(function(){
    var section = $(this).parents('.section').next('.section');
    var sectop = section.offset().top;

    $("html, body").animate({ scrollTop: sectop }, 800);
  });

// Change navbar background on scroll
var changePoint = 60;

$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = $(window).scrollTop();

    if (stop > changePoint) {
        $('#main-navigation').addClass('past-point');
    } else {
        $('#main-navigation').removeClass('past-point');
    }

});



}); //end doc

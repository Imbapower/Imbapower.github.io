$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1
    });
  });

  
// navbar
(function($){
	$(function() {
	  $('.menu__icon').on('click', function() {
		$(this).closest('.menu').toggleClass('menu_state_open');
	  });
	});
  })(jQuery);
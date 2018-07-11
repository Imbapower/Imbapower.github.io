$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        nav:true,
        loop:true
    });
  });

$(document).ready(function(){
    var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$(".item").imagefill();
		$container.masonry({
			columnWidth: ".item",
		itemSelector: ".item"
	});
});
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});

(function($){
	$(function() {
	  $('.menu__icon').on('click', function() {
		$(this).closest('.menu').toggleClass('menu_state_open');
	  });
	});
  })(jQuery);

// masonry (galeria)
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

// navbar
(function($){
	$(function() {
	  $('.menu__icon').on('click', function() {
		$(this).closest('.menu').toggleClass('menu_state_open');
	  });
	});
  })(jQuery);
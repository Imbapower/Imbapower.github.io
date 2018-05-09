// пролоадер
document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
    {
        preloader.classList.add('done');
    }
    },1000);
    }
// плагин плавного перехода
$('.top_nav a, .top').mPageScroll2id({
    offset:50
});
// мансори
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

// слайдер
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4
    });
  });
  
if($(window).width() < 420){
    $(".owl-carousel").owlCarousel({
        items:1
    });
};
// sendmail
$(document).ready(function() {
 
    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
   
  });
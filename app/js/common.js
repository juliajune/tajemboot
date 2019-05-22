$(function() {

	 $('[data-fancybox="gallery"]').fancybox({
    	baseClass: "fancybox-custom-layout",
    	infobar: false,
    	touch: {
      		vertical: false
    	},
    	buttons: ["close", "thumbs"],
    	animationEffect: "fade",
   		transitionEffect: "fade",
    	preventCaptionOverlap: false,
    	idleTime: false,
    	gutter: 0
    	
  	});


});

$(window).on('load', function() {
  $('.loader_inner').fadeOut();
    $('.loader').delay(600).fadeOut('slow');
});

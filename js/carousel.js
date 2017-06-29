$(function() {
	var Carousel = $('.carousel').owlCarousel({
		items : 1,
		loop : true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,

	})

	$('.carousel__button-prev').on('click', function(e) {
		e.preventDefault();
		// slied speed 700ms
		Carousel.trigger('prev.owl.carousel' ,[700]);
	});

	$('.carousel__button-next').on('click', function(e) {
		e.preventDefault();
		Carousel.trigger('next.owl.carousel', [700]);
	});
})

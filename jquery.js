$(document).ready(function(){	

	$('li').mouseenter(function(){
		$(this).css('color', 'black');
	});
	$('li').mouseleave(function(){
		$(this).css('color', 'grey');
	});	
	
    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

    $('#carousel .right').click(function(){
    	$slideContainer.animate({'margin-left': '-='+width}, 'fast', function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
    	clearInterval(interval);
	});
	 $('#carousel .right').mouseenter(function(){
	 	$(this).css("border-color","#3333ff");
	 	$(this).css("border-width", "2px");
	 });

	 $('#carousel .right').mouseleave(function(){
	 	$(this).css("border-color","black");
	 	$(this).css("border-width", "1px");
	 })
	
});

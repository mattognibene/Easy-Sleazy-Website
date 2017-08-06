$(document).ready(function(){	
	/*
	$('.navigation').mouseenter(function(){
		$('.navigation').fadeTo('fast', 1);
	});
	$('.navigation').mouseleave(function(){
		$('.navigation').fadeTo('fast', .5);
		$('#home').css('background','rgba(255,255,255,1)');
		//TODO
	});
	*/
	//TODO find a better way to do this
	$('li').mouseenter(function(){
		$(this).css('color', 'black');
	});
	$('li').mouseleave(function(){
		$(this).css('color', 'grey');
	});	
	
});
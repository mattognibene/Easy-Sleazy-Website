$(document).ready(function(){
	$('.navigation').mouseenter(function(){
		$('.navigation').fadeTo('fast', 1);
	});
	$('.navigation').mouseleave(function(){
		$('.navigation').fadeTo('fast', .5);
		$('#home').css('background','rgba(255,255,255,1)');
		//TODO
	});
	//TODO find a better way to do this
	$('#products_tab').mouseenter(function(){
		$('#products_tab').css('color', 'black');
	});
	$('#products_tab').mouseleave(function(){
		$('#products_tab').css('color', 'grey');
	});
	$('#gallery_tab').mouseenter(function(){
		$('#gallery_tab').css('color', 'black');
	});
	$('#gallery_tab').mouseleave(function(){
		$('#gallery_tab').css('color', 'grey');
	});
	$('#contact_tab').mouseenter(function(){
		$('#contact_tab').css('color', 'black');
	});
	$('#contact_tab').mouseleave(function(){
		$('#contact_tab').css('color', 'grey');
	});
});
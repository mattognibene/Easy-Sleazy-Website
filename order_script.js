$(document).ready(function(){

var shirtIsSelected = false;
var shirtSelection = -1;
var ul = document.getElementById("styles_ul");
var items = ul.getElementsByTagName("li");

var allColorsUl  = document.getElementById("all_colors_ul");
var pallettes = allColorsUl.getElementsByTagName("li");

$("#styles li").mouseenter(function(){
	if(!shirtIsSelected){
		$(this).css("border", "1px solid blue");
	}
});
$("#styles li").mouseleave(function(){
	if(!shirtIsSelected){
		$(this).css("border", "1px solid transparent");
	}
});
$("#styles li").click(function(){
	if(shirtSelection === $(this).index()){
		shirtSelection = -1;
		shirtIsSelected = false;
		$(this).css("border", "1px solid transparent");
	}else{
		for(var i = 0; i <items.length; i++){
			$(items[i]).css("border", "1px solid transparent");
		}
		$(this).css("border", "2px solid blue");
		shirtIsSelected=true;
		shirtSelection=$(this).index();

		//Here lies changes to color picker
		//NOTE - the indexes make zero sense. good luck
		for(var i =0; i<pallettes.length;i++){
			$(pallettes[i]).css("display", "inline-block");
		}
		if(shirtSelection===0){
			$(pallettes[2]).css("display", "none");
			$(pallettes[4]).css("display", "none");
		}
		else if(shirtSelection===1){
			$(pallettes[0]).css("display", "none");
			$(pallettes[4]).css("display", "none");
		}	
		else if(shirtSelection===2){
			$(pallettes[0]).css("display", "none");
			$(pallettes[2]).css("display", "none");
		}
		else if(shirtSelection===3){
			$(pallettes[2]).css("display", "none");
			$(pallettes[4]).css("display", "none");
		}
	}
});
	
});
 $(document).ready(function(){

// var height=$(".body").height()
// $(".sidebar").height(height)

// on mouse over highlight area


// $("p").on("mouseover", function(){
// 	$("p").css("backgroundColor", "blueviolet");

// });
// $("p").on("mouseleave", function(){
// 	$("p").css("backgroundColor", "transparent");
// });

// pop up window ask if you are navigating away from a page

$("a").on("click",function(){
	var navAway=confirm("Are you sure you want to navagate away from this page?")
	if (navAway){

	}
	else{
		return false
	};
});
// $("h1, h2, h3, h4").on("mouseover", function(){
// 	$(this).append("!");
// });
 // on click of thank you button a pop up will say thank you using JS
 
var thankYou=$("#thankYou")
var dialog=$("<div>Thanks for visiting.</div>")
 thankYou.click(function(){
	$("#dialogContainer").append(dialog);
});

});

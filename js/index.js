
$(document).ready(function() {


$('.hamburger').click(toggleMenu);

// define toggle menu function. 
function toggleMenu() {
	// first part of jquery is any css selector
	$('nav ul').slideToggle();

}


});
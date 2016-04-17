$(document).ready(function() {

	//Register click listener
	$('.hamburger').click(toggleMenu);


	function  toggleMenu() {
		$('.menu-list').toggle();
	}
});

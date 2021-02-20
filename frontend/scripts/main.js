var lMediaQueryPc = window.matchMedia("screen and (min-width: 1200px)");
	
$(document).ready(function() {
	//__________________MOBILE MENU EVENT
	$(".e-menu-mobile, .e-header-mobile-background").click(function() {
		$(".e-header-mobile-background, .eh-right-block").toggleClass("active");
	});
});
$( ".search-btn" ).click(function() {
    $(".opened").toggleClass('d-none');
    $(".closed").toggleClass('d-none');
    $(".search-modal").toggleClass('d-flex');
});


//initializes the plugin with empty options
$('.nav-box').overlayScrollbars({
    className       : "os-theme-dark",
	resize          : "both",
	sizeAutoCapable : true,
	paddingAbsolute : true,
	scrollbars : {
		clickScrolling : true
	}
}); 
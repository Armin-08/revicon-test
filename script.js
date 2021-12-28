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

$('[data-fancybox]').fancybox({
	// Options will go here
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	dots: false,
	navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5.5
        }
    }
})
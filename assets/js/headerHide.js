
//hide header on scroll
var didScroll;
var lastScrollTop = 0;
var delta = 10;//distance to scroll before hide in px
var navbarHeight = $('.header').outerHeight();

$('.slides').scroll(function(event){
    didScroll = true;
	
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 10);/* how much need to scroll up before hidden / visible*/ 


function hasScrolled() {
    var st = $('.slides').scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        //if  Scroll Down 
		$('.header').addClass('header_hidden');
        $('#form').removeClass('form_hidden');
    } else {
        $('.header').removeClass('header_hidden');
         $('#form').addClass('form_hidden');
    }
    
    lastScrollTop = st;
}
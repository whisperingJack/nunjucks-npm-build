//give element to position id (in this case ".form")

// Activates depending on screen width.
function screenClass() {
    if($(window).innerWidth() > 767) {
   var elem = document.getElementById("form");
document.body.appendChild(elem);
    //} else {
      //  $('body').addClass('small-screen').removeClass('big-screen');
    }
}

// Fire.
screenClass();

// And recheck if window gets resized.
$(window).bind('resize',function(){
    screenClass();
});

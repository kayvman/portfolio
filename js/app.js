$(document).foundation();
$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 45) {
      $("h1:first, nav").addClass("scrolled");
    } else{
      $("h1:first, nav").removeClass("scrolled");
    }
  });
});




$(document).ready(function() {
  $(window).scroll(function(){
    $('.index-main-background').each(function(i){
      var margin = 80;
      var h = $('.index-main-background h1').position().top + margin;
      var w = $(window).scrollTop();
      var distance = h - w;

      if(distance > 0) {
        var target = 0.25;
        var top = 1;
        var bottom = 0.25;

        var percent = distance / h;
        var start = target + ((top - target) * percent);
        var end = target - ((target - bottom) * percent);

        $(this).css("background-image", "url(/images/index-main-background.png), linear-gradient(rgba(255, 255, 255, " + start + "), rgba(255, 255, 255, " + end + "))");
      } else {
        $(this).css("background-image", "url(/images/index-main-background.png), linear-gradient(rgba(255, 255, 255, " + target + "), rgba(255, 255, 255, " + target + "))");
      }
    });
  });
});

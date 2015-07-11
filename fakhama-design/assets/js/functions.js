$(document).ready(function() {
  //alert('Hi');

  $('.carousel > div:gt(0)').hide();

  setInterval(function() {
    $('.carousel > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.carousel');
  }, 3000);
});

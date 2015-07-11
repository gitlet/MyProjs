$(document).ready(function() {
  //alert('Hi there..!');

  /* toggling the menu */
  $('#handle').click(function() {
    $('.nav-bar').slideToggle('100')
  });

  /* carousel */
  $('.carousel > div:gt(0)').hide();

  setInterval(function() {
    $('.carousel > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.carousel');
  }, 3000);

  /* clients image slider
  $('.clients > div:gt(0)').hide();

  setInterval(function() {
    $('.clients > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.clients');
  }, 3000); */
});

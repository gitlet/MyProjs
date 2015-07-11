$(document).ready(function() {
  //alert('Hi');

  $("h1").click(function() {
    $(".nav-bar").slideToggle();
  });

  /* TOGGLING MENU FOR SMALLER VIEWPORTS */
  // $(".handle").on("click", function() {
  //   $(".nav-bar").toggleClass("showing");
  // });



  /*  SLIDER  */

  $(".slider > div:gt(0)").hide();

  setInterval(function() {
    $('.slider > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slider');
  }, 5000);


  /* aside element offering quick access to the start of the page */
  $("aside").hover(function() {
    $("#go-to").slideToggle();
  });

});

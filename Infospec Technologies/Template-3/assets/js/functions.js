/* ALLOW THE DOC TO LOAD */
$(document).ready(function() {
  //alert('Hi there!');

  /*setInterval(function() {
    alert("Hey");
  }, 3000); */

  /* MAKING THE CURSOR EFFECT..BLINKING THE UNDERSCORE */
  var blink = function() {
    $(".blink").toggle();
  };
  setInterval(blink, 500);

  /*MAKING THE DECO-BOXES BLINK AS WELL.. */
  /* BOX-1 */
  var box1 = function() {
    $(".gear-one").toggle();
  };
  setInterval(box1, 300);

  /* BOX-2 */
  var box2 = function() {
    $(".gear-two").toggle();
  };
  setInterval(box2, 900);

  /* BOX-3 */
  var box3 = function() {
    $(".gear-three").toggle();
  };
  setInterval(box3, 1500);

  /* BOX-4 */
  var box4 = function() {
    $(".gear-four").toggle();
  };
  setInterval(box4, 1200);

  /* BOX-5 */
  var box5 = function() {
    $(".gear-five").toggle();
  };
  setInterval(box5, 800);

  /* BOX-6 */
  var box6 = function() {
    $(".gear-six").toggle();
  };
  setInterval(box6, 400);

  /* BOX-7 */
  var box7 = function() {
    $(".gear-seven").toggle();
  };
  setInterval(box7, 1500);

  /* BOX-8 */
  var box8 = function() {
    $(".gear-eight").toggle();
  };
  setInterval(box8, 550);

  /* MAKING THE SYSTEM-ALERT BOX BLINK.. */
  var alert = function() {
    $("#alert").toggle();
  };
  setInterval(alert, 300);

  /* TOGGLING THE NAV-BAR USING HANDLE */
  $("#handle").click(function() {
    $(".nav-bar").slideToggle();
  });

});

$(document).ready(function() {
  //alert('Hi');

  $("#li-1").click(function() {
    $("#profile").show();
    $("#excellence, #pro-vision, #welcome").hide();

    /*ATTACHING THE 'ACTIVE' CLASS */
    $("#li-1").addClass("active");
    $("#li-2, #li-3, #li-4").removeClass("active");
  });

  $("#li-2").click(function() {
    $("#excellence").show();
    $("#profile, #pro-vision, #welcome").hide();

    /*ATTACHING THE 'ACTIVE' CLASS */
    $("#li-2").addClass("active");
    $("#li-1, #li-3, #li-4").removeClass("active");
  });

  $("#li-3").click(function() {
    $("#pro-vision").show();
    $("profile, #excellence, #welcome").hide();

    /*ATTACHING THE 'ACTIVE' CLASS */
    $("#li-3").addClass("active");
    $("#li-1, #li-2, #li-4").removeClass("active");
  });

  $("#li-4").click(function() {
    $("#welcome").show();
    $("#profile, #excellence, #pro-vision").hide();

    /*ATTACHING THE 'ACTIVE' CLASS */
    $("#li-4").addClass("active");
    $("#li-1, #li-2, #li-3").removeClass("active");
  });
});

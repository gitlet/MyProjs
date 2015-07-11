//alert('Hi');
/*
var i;
for(i=0; i<40; i++) {
  document.write("<h3>" + (i+1) + "Dummy content....</h3>");
}..*/

/* NOW, WRITING THE SCROLL FUNCTION */

function yScroll() {
  var container, menu, yPos;
  container = document.getElementById("container");
  menu = document.getElementById("menu");
  yPos = window.pageYOffset;
  if(yPos > 40) {
    container.style.height = "120px";
    container.style.paddingTop = "20px";
    menu.style.height = "0px";
  } else {
    container.style.height = "180px";
    container.style.paddingTop = "30x";
    menu.style.height = "50px";
  }
}

/* ADDING AN EVENT LISTENER FOR THE EFFECT TO TAKE PLACE */
window.addEventListener("scroll", yScroll);
/* PLEASE be VERY CAREFULL with SPELLINGS..otherwise it can RUIN everything unnecessarily...! */


/* ADDING EFFECTS TO THE ARTICLES */
$(document).ready(function() {
/*  $("#art-1").hover(function() {
    $("#para-1").addClass(".hiding-p");
    $("#para-1").slideToggle();
    $("#para-1").removeClass(".hiding-p");
    //$("article > img").addClass("img");
  });
  /*$("article").mouseleave(function() {
    $("p").hide()
    $("article > img").removeClass("img");
  })
});

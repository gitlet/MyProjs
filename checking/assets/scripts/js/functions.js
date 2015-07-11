//alert("Hi");
var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var sum = document.getElementById('add');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseInt(numOne.value) || 0;
  var two = parseInt(numTwo.value) || 0;
  //console.log(one, two);
  var add = one+two;
  sum.innerHTML = "Result is: "+add;
}

/*PERCENTAGE*/
var act_price = document.getElementById('ap');
var perc_off = document.getElementById('po');
var disc_price = document.getElementById('pap');

act_price.addEventListener("input", percentage);
perc_off.addEventListener("input", percentage);
//disc_price.addEventListener("input", percentage);

function percentage() {
  var real_pr = parseInt(act_price.value) || 0;
  var disc = parseInt(perc_off.value) || 0;
  //var adv = disc_price.value
  var p = (disc/100)*real_pr;
  var price_to_pay = real_pr-p
  disc_price.innerHTML = "Price after % off: "+price_to_pay;
}

/*MODULO DIVISION*/
var dvdnt = document.getElementById('divident');
var dvsr = document.getElementById('divisor');
var rsltnt = document.getElementById('resultant');

dvdnt.addEventListener("input", mod_div);
dvsr.addEventListener("input", mod_div);

function mod_div() {
  var x = parseInt(dvdnt.value) || 0;
  var y = parseInt(dvsr.value) || 0;
  var z = x % y;
  rsltnt.innerHTML = "Modulu-division : "+z;
}

/*GALLERY*/
var rms = document.getElementById('rms');
//var rmsPic = document.getElementById('rms-pic');

var jg = document.getElementById('jg');
//var jgPic = document.getElementById('jg-pic');

var bs = document.getElementById('bs');
//var bsPic = document.getElementById('bs-pic');

// rms.addEventListener("click", function() {
//   if(rmsPic.className === "hide") {
//     rmsPic.className = "";
//   } else {
//     rmsPic.className = "hide";
//   }
// });
//
// jg.addEventListener("click", function() {
//   if(jgPic.className === "hide") {
//     jgPic.className = "";
//   } else {
//     jgPic.className = "hide";
//   }
// });
//
// bs.addEventListener("click", function() {
//   if(bsPic.className === "hide") {
//     bsPic.className = "";
//   } else {
//     bsPic.className = "hide";
//   }
// });

rms.addEventListener("click", picLink);
jg.addEventListener("click", picLink);
bs.addEventListener("click", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");
  for(var i = 0; i <allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  //console.log(picId);
  var pic = document.getElementById(picId);
  if(pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

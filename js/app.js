//Movement Animation to happen
const card = document.querySelector(".card");
const card1 = document.getElementById("cardTR");
const card2 = document.getElementById("cardBL");
const card3 = document.getElementById("cardBR");
const krog = document.getElementById("krog");

//Items
const use = document.querySelector(".sneaker");
const use1 = document.getElementById("sneakerTR");
const use2 = document.getElementById("sneakerBL");
const use3 = document.getElementById("sneakerBR");
const sneakerPrvi = document.getElementById("krog");
const naslov = document.getElementById("naslov");

//Animate In
naslov.addEventListener("mouseenter", (e) => { 
  //Popout
  naslov.style.transform = "translateY(-10%)";
});
//Animate Out
naslov.addEventListener("mouseleave", (e) => {
naslov.style.transition = "all 0.75s ease";
  //Popback
  naslov.style.transform = "translateY(0%)";
});


//Animate In
krog.addEventListener("mouseenter", (e) => { 
  //Popout
  sneakerPrvi.style.transform = "rotateZ(20deg) scale(1.1)";
});
//Animate Out
krog.addEventListener("mouseleave", (e) => {
krog.style.transition = "all 0.75s ease";
  //Popback
  sneakerPrvi.style.transform = "rotateZ(0deg)";
});


//Animate In
card.addEventListener("mouseenter", (e) => { 
  //Popout
  use.style.transform = "rotateZ(-45deg)";
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
card.style.transition = "all 0.5s ease";
  //Popback
  use.style.transform = "rotateZ(0deg)";
});

//Animate In
card1.addEventListener("mouseenter", (e) => { 
  //Popout
  use1.style.transform = "rotateZ(-45deg)";
});
//Animate Out
card1.addEventListener("mouseleave", (e) => {
card1.style.transition = "all 0.5s ease";
  //Popback
  use1.style.transform = "rotateZ(0deg)";
});

//Animate In
card2.addEventListener("mouseenter", (e) => { 
  //Popout
  use2.style.transform = "rotateZ(-45deg)";
});
//Animate Out
card2.addEventListener("mouseleave", (e) => {
card2.style.transition = "all 0.5s ease";
  //Popback
  use2.style.transform = "rotateZ(0deg)";
});

//Animate In
card3.addEventListener("mouseenter", (e) => { 
  //Popout
  use3.style.transform = "rotateZ(-45deg)";
});
//Animate Out
card3.addEventListener("mouseleave", (e) => {
card3.style.transition = "all 0.5s ease";
  //Popback
  use3.style.transform = "rotateZ(0deg)";
});


window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.scale(3,3);
  context.beginPath();
  context.moveTo(15, 4);
  context.bezierCurveTo(15, 4, 11.181, 14.419, 13, 17);
  context.bezierCurveTo(14.819, 19.581, 17.525, 23.677, 26, 21);
  context.bezierCurveTo(34.475, 18.323, 96, 1, 96, 1);
  context.bezierCurveTo(96, 1, 23, 35, 23, 35);
  context.bezierCurveTo(23, 35, 11.004, 38.839, 5, 34);
  context.bezierCurveTo(-1.004, 29.161, 2.649, 18.931, 5, 15);
  context.bezierCurveTo(7.351, 11.069, 15, 4, 15, 4);
  context.bezierCurveTo(15, 4, 15, 4, 15, 4);
  context.lineWidth = 1;

  context.strokeStyle = '#fff';
  context.stroke();

  context.fillStyle = '#fff';
  context.fill();
}

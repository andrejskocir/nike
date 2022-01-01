//Movement Animation to happen
const card = document.querySelector(".card");
const card1 = document.getElementById("cardTR");
const card2 = document.getElementById("cardBL");
const card3 = document.getElementById("cardBR");
const krog = document.getElementById("krog");
const area1 = document.getElementById("area1");

//Items
const use = document.querySelector(".sneaker");
const use1 = document.getElementById("sneakerTR");
const use2 = document.getElementById("sneakerBL");
const use3 = document.getElementById("sneakerBR");
const sneakerPrvi = document.getElementById("sneakerPrvi");
const tekst = document.getElementById("tekst");
const vip = document.getElementById("vip");

//Animate In
tekst.addEventListener("mouseenter", (e) => { 
  //Popout
  tekst.style.transform = "translateY(-10%)";
});
//Animate Out
tekst.addEventListener("mouseleave", (e) => {
  tekst.style.transition = "all 0.75s ease";
  //Popback
  tekst.style.transform = "translateY(0%)";
});


//Animate In
krog.addEventListener("mouseenter", (e) => { 
  //Popout
  krog.style.transform = "rotateZ(20deg) scale(1.05)";
  sneakerPrvi.style.transform = "scale(1.08)";
});
//Animate Out
krog.addEventListener("mouseleave", (e) => {
krog.style.transition = "all 0.75s ease";
  //Popback
  sneakerPrvi.style.transform = "scale(1)";
  krog.style.transform = "rotateZ(0deg) scale(1)";
});

//Animate In
area1.addEventListener("mouseenter", (e) => { 
  //Popout

  vip.style.transform = "perspective(1000px) translateZ(80px)";
  
});
//Animate Out
area1.addEventListener("mouseleave", (e) => {
vip.style.transition = "all 0.75s ease";

  //Popback
  vip.style.transform = "translateZ(0px)";
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

//Curved text
const ZadNaslov = document.getElementById("ZadNaslov");
ZadNaslov.innerHTML = ZadNaslov.innerText.split("").map(
  (char,i) =>
  `<span style="transform: rotate(${i * 10-67.5}deg)">${char}</span>`

).join("");



/*
//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});*/
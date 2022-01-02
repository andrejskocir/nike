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

  vip.style.transform = "rotateZ(-30deg)";
  
});
//Animate Out
area1.addEventListener("mouseleave", (e) => {
vip.style.transition = "all 0.75s ease";

  //Popback
  vip.style.transform = "rotateZ(0deg)";
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




//Movement Animation to happen
const Zadcontainer = document.getElementById("ZadContainer");
//Items
const ZadNaslov2 = document.getElementById("ZadNaslov2");
const zadnji = document.querySelector(".zadnji");

//Moving Animation Event
Zadcontainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (4000 - e.pageY)/100;
  Zadcontainer.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
});
//Animate In
Zadcontainer.addEventListener("mouseenter", (e) => {
  Zadcontainer.style.transition = "none";


});
//Animate Out
Zadcontainer.addEventListener("mouseleave", (e) => {
  Zadcontainer.style.transition = "all 0.5s ease";
  Zadcontainer.style.transform = `rotateY(0deg)`;

});

var radios = document.getElementsByTagName('input');
var value;
const pur1 = document.getElementById("pur1");
const pur2 = document.getElementById("pur2");
const pur3 = document.getElementById("pur3");
const pur4 = document.getElementById("pur4");
pur1.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp' && radios[i].checked) {
        //Swal.fire("Your selected size is "+radios[i].value);
        Swal.fire({
          title: "Your selected size is "+radios[i].value
        })
    }

  }
}
pur2.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp0' && radios[i].checked) {
        Swal.fire("Your selected size is "+radios[i].value);
    }
  }
}
pur3.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp3' && radios[i].checked) {
        Swal.fire("Your selected size is "+radios[i].value);
    }
  }
}
pur4.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp1' && radios[i].checked) {
        Swal.fire("Your selected size is "+radios[i].value);
    }
  }
}

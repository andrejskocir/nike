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
  context.scale(0.075,0.075);
  
  context.moveTo(353, 393);
  context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
  context.bezierCurveTo(617, 530, 348, 777, 114, 644);
  context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
  context.bezierCurveTo(181, 197, 202, 359, 353, 393);
  context.lineTo(353, 393);
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

  vip.style.transform = "rotateZ(-30deg)";

});
//Animate Out
Zadcontainer.addEventListener("mouseleave", (e) => {
  Zadcontainer.style.transition = "all 0.5s ease";
  Zadcontainer.style.transform = `rotateY(0deg)`;
  vip.style.transition = "all 0.75s ease";
  vip.style.transform = "rotateZ(0deg)";
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
          title: "Your selected size is "+radios[i].value,
          confirmButtonColor: "#f16041",
        });
    }

  }
}
pur2.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp0' && radios[i].checked) {
      Swal.fire({
        title: "Your selected size is "+radios[i].value,
        confirmButtonColor: "#f16041"
      });
    }
  }
}
pur3.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp3' && radios[i].checked) {
      Swal.fire({
        title: "Your selected size is "+radios[i].value,
        confirmButtonColor: "#8cbd6e"
      });
    }
  }
}
pur4.onclick = function(){
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].name === 'skp1' && radios[i].checked) {
      Swal.fire({
        title: "Your selected size is "+radios[i].value,
        confirmButtonColor: "#8cbd6e"
      });
    }
  }
}

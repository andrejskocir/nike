//Movement Animation to happen
const card = document.querySelector(".card");
const card1 = document.querySelector(".card topright");
const container = document.querySelector(".container");
const container1 = document.querySelector(".container topright");
//Athletes
const pos1 = document.getElementById("pos1");
const pos2 = document.getElementById("pos2");
const pos3 = document.getElementById("pos3");
const pos4 = document.getElementById("pos4");
const su = document.getElementById("su");
const jacobs = document.getElementById("jacobs");
const thompson = document.getElementById("thompson");
const murphy = document.getElementById("murphy");
const sutext = document.getElementById("sutext");
const jacobstext = document.getElementById("jacobstext");
const thompsontext = document.getElementById("thompsontext");
const murphytext = document.getElementById("murphytext");
//Items
const use = document.querySelector(".sneaker");
const use1 = document.querySelector(".sneaker");
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

//Pos1
pos1.addEventListener("mouseenter", (e) => { 
  pos1.style.transition = "all 0.5s ease";
  su.style.transition = "all 0.5s ease";
  sutext.style.transition = "all 0.5s ease";
  sutext.style.fontSize = "1.55em";
});
pos1.addEventListener("mouseleave", (e) => {
  pos1.style.transition = "all 0.5s ease";
  su.style.transition = "all 0.5s ease";
  sutext.style.transition = "all 0.5s ease";
  sutext.style.fontSize = "1.5em";
  });
//Pos2
pos2.addEventListener("mouseenter", (e) => { 
    pos2.style.transition = "all 0.5s ease";
    jacobs.style.transition = "all 0.5s ease";
    jacobstext.style.transition = "all 0.5s ease";
    jacobstext.style.fontSize = "1.55em";
  });
  pos2.addEventListener("mouseleave", (e) => {
  pos2.style.transition = "all 0.5s ease";
  jacobs.style.transition = "all 0.5s ease";
  jacobstext.style.transition = "all 0.5s ease";
  jacobstext.style.fontSize = "1.5em";
    });
//Pos3
pos3.addEventListener("mouseenter", (e) => { 
 pos3.style.transition = "all 0.5s ease";
 thompson.style.transition = "all 0.5s ease";
  thompsontext.style.transition = "all 0.5s ease";
  thompsontext.style.fontSize = "1.55em";
    });
pos3.addEventListener("mouseleave", (e) => {
  pos3.style.transition = "all 0.5s ease";
  thompson.style.transition = "all 0.5s ease";
  thompsontext.style.transition = "all 0.5s ease";
  thompsontext.style.fontSize = "1.5em";
      });
//Pos4
pos4.addEventListener("mouseenter", (e) => { 
  pos4.style.transition = "all 0.5s ease";
  murphy.style.transition = "all 0.5s ease";
  murphytext.style.transition = "all 0.5s ease";
  murphytext.style.fontSize = "1.55em";
      });
pos4.addEventListener("mouseleave", (e) => {
  pos4.style.transition = "all 0.5s ease";
  murphy.style.transition = "all 0.5s ease";
  murphytext.style.transition = "all 0.5s ease";
  murphytext.style.fontSize = "1.5em";
        });





window.onload = function() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

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

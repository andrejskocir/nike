//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const card1 = document.querySelector(".card topright");
//Items
const sneaker = document.querySelector(".sneaker img");
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  sneaker.style.transform = "rotateZ(-45deg)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  //Popback
  sneaker.style.transform = "rotateZ(0deg)";
});

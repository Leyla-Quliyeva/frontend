let click = document.querySelector(".click");
let clickBox=document.querySelector(".clickbox")
let input = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let pElem = document.querySelector("#result");
let box = document.querySelector(".box");
let count=0
let angle = 0;
click.classList.add("button");
click.addEventListener("mouseover", function () {
  click.classList.add("button-red");
});
click.addEventListener("mouseout", function () {
  click.classList.add("button-gray");
});
clickBox.addEventListener("click", ()=>{
count++
clickBox.textContent=count+ " click "
})
input1.addEventListener("keyup", function () {
  input1.value = input1.value.toUpperCase();
});
input2.addEventListener("keydown", function (event) {
  if (event.code === "Enter") pElem.textContent = input2.value;
});
window.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    angle += 15;
  } else if (event.code === "ArrowLeft") {
    angle -= 15;
  } else if (event.code === "ArrowUp") {
    angle = 90;
  } else if (event.code === "ArrowDown") {
    angle = 180;
  }
  box.style.transform = `rotate(${angle}deg)`;
});


let addBtn = document.createElement("button");
addBtn.innerText = "Add";
document.querySelector("body").append(addBtn);
let removeBtn = document.createElement("button");
removeBtn.innerText = "Remove";
document.querySelector("body").append(removeBtn);
let toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle";
document.querySelector("body").append(toggleBtn);
let hElem = document.createElement("h3");
hElem.innerText = "Hello World!";
document.querySelector("body").append(hElem);

addBtn.classList.add("width", "ml", "font", "hover");
removeBtn.classList.add("width", "ml", "font", "hover");
toggleBtn.classList.add("width", "ml", "font", "hover");
hElem.classList.add("margin", "font");

addBtn.addEventListener("click", function () {
  hElem.classList.add("text");
});
removeBtn.addEventListener("click", function () {
  hElem.classList.remove("text");
});
toggleBtn.addEventListener("click", function () {
  hElem.classList.contains("text")
    ? hElem.classList.remove("text")
    : hElem.classList.add("text");
});

let toggleBtn = document.createElement("button");
toggleBtn.innerText = "Mode On";
document.querySelector("body").append(toggleBtn);
let body = document.querySelector("body");
let pElem = document.querySelector("p");
let iElem = document.querySelector("i");
pElem.classList.add("font");
iElem.classList.add("icon");
body.classList.add("body");
toggleBtn.classList.add("button", "font", "hover");
toggleBtn.addEventListener("click", function () {
  body.classList.contains("dark")
    ? body.classList.remove("dark")
    : body.classList.add("dark");
});

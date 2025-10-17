let barsBtn = document.querySelector(".fa-bars");
let navBar = document.querySelector("nav");

barsBtn.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

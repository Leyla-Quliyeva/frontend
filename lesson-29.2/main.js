let keyBtn = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  let key = e.key.toLocaleLowerCase();

  keyBtn.forEach((el) => {
    if (el.textContent === key) {
      el.classList.add("active");
    }
  });
});

window.addEventListener("keyup", function (e) {
  let key = e.key.toLocaleLowerCase();

  keyBtn.forEach((el) => {
    if (el.textContent === key) {
      el.classList.remove("active");
    }
  });
});

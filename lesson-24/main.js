let startBtn = document.querySelector(".start");
let result = document.querySelector(".result");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  console.log("start btn");
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 100);
});
stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
});

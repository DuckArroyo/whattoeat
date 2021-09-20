var score = 10;

var scoreButtonEl = document.querySelector("#submiter"); //!Need submit button id.
var scoreEl = document.querySelector("#score");

scoreButtonEl.addEventListener("click", function () {
  event.preventDefault();
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
});

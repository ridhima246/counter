let count = 0;

const countLabel = document.getElementById("countlabel");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

decreaseBtn.onclick = function() {
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}

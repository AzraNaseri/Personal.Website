let count = 0;
const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener("click", () => {
	count++;
	countDisplay.innerText = count;
});

resetBtn.addEventListener("click", () => {
	count = 0;
	countDisplay.innerText = count;
});
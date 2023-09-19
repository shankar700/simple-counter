let count = 0;
let incrementValue = 1;
let countdownInterval;

const countDisplay = document.getElementById("countDisplay");
const resetButton = document.getElementById("resetButton");
const incrementInput = document.getElementById("incrementInput");
const resetIncrementButton = document.getElementById("resetIncrementButton");

const updateDisplay = () => {
  countDisplay.textContent = count;
  resetButton.disabled = count === 0;
  console.log(count);
  console.log(count === 0);
};

const increment = () => {
  count += incrementValue;
  updateDisplay();
};

const decrement = () => {
  count = Math.max(count - incrementValue, 0);
  updateDisplay();
};

resetIncrementButton.addEventListener("click", () => {
    // Reset the increment value to 1 (or your desired default value)
    incrementInput.value = 1;
  });

const updateIncrementValue = () => {
  incrementValue = parseInt(incrementInput.value) || 1;
};

updateDisplay(); // Initial display

const resetWithCountdown = () => {
    const currentCount = parseInt(countDisplay.innerText);
  
    if (currentCount === 0) {
      countDisplay.innerText = '0';
      return;
    }
  
    resetButton.disabled = true;
    const interval = currentCount !== 0 ? 1000 / currentCount : 1000;
  
    countdownInterval = setInterval(() => {
      if (count === 0) {
        clearInterval(countdownInterval);
        resetButton.disabled = false;
      } else {
        count--;
        countDisplay.innerText = count;
      }
    }, interval);
  };
  

// Select the Enter button and the count display using const because these references do not change
const enterButton = document.getElementById("increase"); // 'Enter' button
const countDisplay = document.getElementById("count"); // Count display

// Select the Exit button using const because this reference does not change
const exitButton = document.getElementById("decrease"); // 'Exit' button

// Use let for count because its value will change
let count = 0;

// Add a click event listener to the Enter button
enterButton.addEventListener("click", function() {
  if (count < 50) { // Only increase if count is less than 50
    count = count + 1;
    countDisplay.textContent = count;
  }
});

// Add a click event listener to the Exit button
exitButton.addEventListener("click", function() {
  if (count > 0) { // Only decrease if count is greater than 0
    count = count - 1;
    countDisplay.textContent = count;
  }
});
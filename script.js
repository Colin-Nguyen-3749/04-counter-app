// Select the Enter button and the count display using const because these references do not change
const enterButton = document.getElementById("increase"); // 'Enter' button
const countDisplay = document.getElementById("count"); // Count display

// Select the Exit button using const because this reference does not change
const exitButton = document.getElementById("decrease"); // 'Exit' button

// Use let for count because its value will change
let count = 0;

// Add a click event listener to the Enter button
enterButton.addEventListener("click", function() {
  count++; // Increase the count by 1
  countDisplay.textContent = count; // Update the display
});

// Add a click event listener to the Exit button
exitButton.addEventListener("click", function() {
  count = count - 1; // Decrease the count by 1
  countDisplay.textContent = count; // Update the display
});
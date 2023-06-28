const inputText = document.getElementById('text');
const inputDelay = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function to display the message after a delay
async function displayMessageWithDelay() {
// Get the user input values
const text = inputText.value;
const delay = parseInt(inputDelay.value);

// Wait for the specified delay
await new Promise(resolve => setTimeout(resolve, delay));

// Display the message on the webpage
outputDiv.textContent = text;
}

// Event listener for the button click
btn.addEventListener('click', () => {
displayMessageWithDelay();
});
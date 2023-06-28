document.getElementById('btn').addEventListener('click', async () => {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const message = textInput.value;
  const delay = Number(delayInput.value) * 1000; // Convert delay to milliseconds

  outputDiv.textContent = 'Loading...';

  await new Promise(resolve => setTimeout(resolve, delay));

  outputDiv.textContent = message;
});
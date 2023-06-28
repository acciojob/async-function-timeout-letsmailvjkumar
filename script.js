//your JS code here. If required.
	const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const displayButton = document.getElementById('btn');
    const outputDiv = document.getElementById('output');
	
	async function delayedMessage(message, delay) {
	      await new Promise(resolve => setTimeout(resolve, delay * 1000)); // Convert seconds to milliseconds
      return message;
    }
	displayButton.addEventListener('click', async () => {
      const message = textInput.value;
      const delay = delayInput.value;

      if (message && delay) {
        outputDiv.textContent = 'Loading...';
        try {
          const resolvedMessage = await delayedMessage(message, delay);
	        outputDiv.textContent = resolvedMessage;
        } catch (error) {
          outputDiv.textContent = 'An error occurred.';
          console.error(error);
        }
      }
    });
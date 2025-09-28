import { fetchStatusData } from './api.js';
import { updateImage, updateJSONOutput, showError } from './ui.js';

const button = document.getElementById('checkBtn');
const input = document.getElementById('statusInput');
button.addEventListener('click', async () => {
  const code = input.value.trim();
  if (!code) return showError('Please enter a status code.');

  try {
    const data = await fetchStatusData(code);
    updateImage(code);
    updateJSONOutput(data);
    console.log('Status Data:', data);
  } catch (err) {
    showError(err.message);
    console.error(err);
  }
});
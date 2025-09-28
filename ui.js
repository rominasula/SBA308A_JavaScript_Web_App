export function updateImage(code) {
  const img = document.getElementById('statusImage');
  img.src = `https://status.pizza/${code}.png`;
  img.alt = `Status ${code} Pizza`;
}

export function updateJSONOutput(data) {
  const jsonBox = document.getElementById('jsonOutput');
  jsonBox.textContent = JSON.stringify(data, null, 2);
}

export function showError(message) {
  const jsonBox = document.getElementById('jsonOutput');
  const img = document.getElementById('statusImage');
  img.src = '';
  jsonBox.textContent = `Error: ${message}`;
}

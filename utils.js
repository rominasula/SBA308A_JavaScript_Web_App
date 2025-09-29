// utils.js

export function updateImage(code, imgElement) {
    imgElement.src = `https://status.pizza/${code}.png`;
    imgElement.alt = `Status ${code} Pizza`;
}

export function updateJSONOutput(data, outputElement) {
    outputElement.textContent = JSON.stringify(data, null, 2);
}

export function showError(message, imgElement, outputElement) {
    if (imgElement) imgElement.src = "";
    if (outputElement) outputElement.textContent = message;
}

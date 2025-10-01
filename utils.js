// utils.js

export function updateImage(code, imgElement) {
    imgElement.src = `https://status.pizza/${code}.png`;
    imgElement.alt = `Status ${code} Pizza`;
}

export function updateJSONOutput(data, outputElement) {
    outputElement.innerHTML = `
        <p><strong>Code:</strong> ${data.code}</p>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Category:</strong> ${data.category}</p>
    `;
}

export function showError(message, imgElement, outputElement) {
    if (imgElement) imgElement.src = "";
    if (outputElement) outputElement.textContent = message;
}

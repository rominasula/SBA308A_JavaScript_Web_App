import { fetchStatusData } from "./api.js";

const button = document.getElementById("checkBtn");
const input = document.getElementById("statusInput");
const statusImage = document.getElementById("statusImage");
const jsonOutput = document.getElementById("jsonOutput");
const galleryContainer = document.getElementById("galleryContainer");

// Helper functions
function updateImage(code) {
    statusImage.src = `https://status.pizza/${code}.png`;
    statusImage.alt = `Status ${code} Pizza`;
}

function updateJSONOutput(data) {
    jsonOutput.textContent = JSON.stringify(data, null, 2);
}

function showError(message) {
    statusImage.src = "";
    jsonOutput.textContent = message;
}

// Event listener: fetch data based on user input
button.addEventListener("click", async () => {
    const code = input.value.trim();
    if (!code) return showError("Please enter a status code.");

    showError("Loading..."); // temporary message

    try {
        const data = await fetchStatusData(code);
        updateImage(code);
        updateJSONOutput(data);
        console.log("Status Data:", data);
    } catch (err) {
        showError(err.message);
        console.error(err);
    }
});

// Example: load initial gallery
loadGallery([200, 201, 404, 418, 500]);

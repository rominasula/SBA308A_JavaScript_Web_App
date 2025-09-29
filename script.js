import { fetchStatusData } from "./api.js";
import { updateImage, updateJSONOutput, showError } from "./utils.js";

const button = document.getElementById("checkBtn");
const input = document.getElementById("statusInput");
const statusImage = document.getElementById("statusImage");
const jsonOutput = document.getElementById("jsonOutput");
const galleryContainer = document.getElementById("galleryContainer");

// Event listener: fetch data based on user input
button.addEventListener("click", async () => {
    const code = input.value.trim();
    if (!code) return showError("Please enter a status code.", statusImage, jsonOutput);

    showError("Loading...", null, jsonOutput); // temporary message

    try {
        const data = await fetchStatusData(code);
        updateImage(code, statusImage);
        updateJSONOutput(data, jsonOutput);
        console.log("Status Data:", data);
    } catch (err) {
        showError(err.message, statusImage, jsonOutput);
        console.error(err);
    }
});

// -------- Gallery Feature --------
function loadGallery(codes) {
    galleryContainer.innerHTML = "";
    codes.forEach(code => {
        const item = document.createElement("div");
        item.classList.add("galleryItem");

        item.innerHTML = `
            <img src="https://status.pizza/${code}.png" alt="Status ${code} Pizza">
            <p><strong>${code}</strong>: ${statusTexts[code] || ""}</p>
        `;
        galleryContainer.appendChild(item);
    });
}

const statusTexts = {
    200: "OK",
    201: "Created",
    404: "Not Found",
    418: "I'm a teapot",
    500: "Internal Server Error"
};

// Example: load initial gallery
loadGallery([200, 201, 404, 418, 500]);

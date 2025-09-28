export function updateImage(code) {
  const img = document.getElementById('statusImage');
  img.src = `https://status.pizza/${code}.png`;
  img.alt = `Status ${code} Pizza`;
}

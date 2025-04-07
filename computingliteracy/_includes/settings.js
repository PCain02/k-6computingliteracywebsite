// settings.js

let currentFontSize = 100; // Start at 100%

function increaseTextSize() {
  currentFontSize += 10;
  applyFontSize();
}

function decreaseTextSize() {
  currentFontSize = Math.max(50, currentFontSize - 10); // Min 50%
  applyFontSize();
}

function applyFontSize() {
  document.documentElement.style.fontSize = currentFontSize + '%';
  localStorage.setItem('textSize', currentFontSize);
}

// Load saved font size on page load
document.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem('textSize');
  if (saved) {
    currentFontSize = parseInt(saved);
    applyFontSize();
  }
});
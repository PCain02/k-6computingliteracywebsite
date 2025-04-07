// settings.js

// Function to toggle High Contrast Mode
function toggleAccessibilityTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme.includes("high-contrast")) {
    // If currently in high contrast mode, remove the high contrast overlay
    const baseTheme = currentTheme.replace("-high-contrast", "");
    html.setAttribute("data-theme", baseTheme);
    localStorage.setItem("theme", baseTheme);
  } else {
    // Add high contrast overlay to the current theme (light or dark)
    const newTheme = `${currentTheme || "light"}-high-contrast`;
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
}

// Function to toggle between Light and Dark Modes
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme") || "light"; // Default to light theme

  if (currentTheme.includes("high-contrast")) {
    // If in high contrast mode, toggle the base theme (light or dark) and keep high contrast
    const baseTheme = currentTheme.replace("-high-contrast", "");
    const newBaseTheme = baseTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", `${newBaseTheme}-high-contrast`);
    localStorage.setItem("theme", `${newBaseTheme}-high-contrast`);
  } else {
    // Toggle between light and dark themes
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
}

// Reset settings to default
function resetAccessibilitySettings() {
  // Reset text size and theme to default
  currentFontSize = 100;
  applyFontSize();
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.removeItem("textSize");
  localStorage.removeItem("theme");
}

// Function to increase text size
function increaseTextSize() {
  currentFontSize += 10;
  applyFontSize();
}

// Function to decrease text size
function decreaseTextSize() {
  currentFontSize = Math.max(50, currentFontSize - 10); // Don't allow text size below 50%
  applyFontSize();
}

// Apply the current text size to the page
function applyFontSize() {
  document.documentElement.style.fontSize = `${currentFontSize}%`;
  localStorage.setItem("textSize", currentFontSize);
}

// Restore the saved theme and text size from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const savedSize = localStorage.getItem("textSize");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme); // Apply the saved theme
  }

  if (savedSize) {
    currentFontSize = parseInt(savedSize);
    applyFontSize();
  }
});
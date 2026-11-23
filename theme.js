// Light / dark mode switch.
// 1. On load: use the theme you picked last time, or else your computer's setting.
// 2. On click: flip the theme and remember the choice.

(function () {
  var root = document.documentElement;   // the <html> tag

  function getSavedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function saveTheme(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var button = document.querySelector(".theme-toggle");
    if (button) {
      // "On" means dark mode — screen readers announce it as a switch
      button.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
      button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  // Runs immediately (before the page paints) so there's no flash of the wrong theme
  var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(getSavedTheme() || (systemPrefersDark ? "dark" : "light"));

  // Once the page has loaded, wire up the button
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    applyTheme(root.getAttribute("data-theme"));   // sets the button's label

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  });
})();

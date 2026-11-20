(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var navLinks = document.querySelectorAll(".nav a");
  var themeColors = { light: "#e3eef9", dark: "#010510" };
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function preferredTheme() {
    return systemTheme.matches ? "dark" : "light";
  }

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    return set === "light" || set === "dark" ? set : preferredTheme();
  }

  function syncTheme() {
    var theme = currentTheme();
    if (toggle) toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (themeColor) themeColor.setAttribute("content", themeColors[theme]);
  }

  function panelFromId(id) {
    if (id === "experience" || id === "education" || id === "projects") return id;
    if (id === "home" || id === "about" || id === "contact") return "home";
    if (!id || id === "main") return root.getAttribute("data-panel") || "home";
    var el = document.getElementById(id);
    if (el) {
      var panel = el.closest(".panel");
      if (panel && panel.id) return panel.id;
    }
    return "home";
  }

  function syncNav() {
    var panel = root.getAttribute("data-panel") || "home";
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + panel) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function scrollToId(id) {
    var panel = root.getAttribute("data-panel") || "home";
    var target = (id && document.getElementById(id)) || document.getElementById(panel);
    if (target) target.scrollIntoView();
  }

  document.addEventListener("click", function (event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var origin = event.target instanceof Element ? event.target : event.target.parentElement;
    var link = origin && origin.closest("a[href^='#']");
    if (!link) return;
    var id = link.getAttribute("href").slice(1);
    if (id === "main") return;
    var same = location.hash === "#" + id || (id === "home" && location.hash === "");
    root.setAttribute("data-panel", panelFromId(id));
    syncNav();
    if (same) scrollToId(id);
  }, true);

  window.addEventListener("hashchange", function () {
    var id = location.hash.replace(/^#/, "");
    root.setAttribute("data-panel", panelFromId(id));
    syncNav();
    if (id && id !== "main") scrollToId(id);
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {}
      syncTheme();
    });
  }

  systemTheme.addEventListener("change", function () {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (err) {}
    if (stored !== "light" && stored !== "dark") syncTheme();
  });

  var skip = document.querySelector(".skip-link");
  if (skip) {
    skip.addEventListener("click", function (event) {
      var main = document.getElementById("main");
      if (!main) return;
      event.preventDefault();
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    });
  }

  syncNav();
  syncTheme();
})();

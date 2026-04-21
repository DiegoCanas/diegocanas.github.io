function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
}

(function () {
    const saved = localStorage.getItem("theme");

    if (saved) {
        setTheme(saved);
    } else {
        setTheme("dark"); // default
    }
})();
const translations = {
    es: {
        home: "Inicio",
        cv: "CV",
        projects: "Proyectos",

        role: "Ingeniero DevOps",
        intro: "Construyo infraestructuras escalables y automatizadas",

        title_cv: "CV",
        title_projects: "Proyectos",

        experience: "Experiencia",
        skills: "Skills",

        view_github: "Ver en GitHub"
    },

    en: {
        home: "Home",
        cv: "Resume",
        projects: "Projects",

        role: "DevOps Engineer",
        intro: "I build scalable and automated infrastructures",

        title_cv: "Resume",
        title_projects: "Projects",

        experience: "Experience",
        skills: "Skills",

        view_github: "View on GitHub"
    }
};

let lang = localStorage.getItem("lang") || "es";

function setLang(newLang) {
    lang = newLang;
    localStorage.setItem("lang", lang);
    updateUI();
}

function switchLang() {
    setLang(lang === "es" ? "en" : "es");
}

function updateUI() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = translations[lang][key];

        if (value) {
            el.innerText = value;
        }
    });

    // opcional: actualizar html lang
    document.documentElement.lang = lang;
}

// init
document.addEventListener("DOMContentLoaded", updateUI);
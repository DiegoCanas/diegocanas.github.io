const translations = {
    es: {
        home: "Inicio",
        cv: "CV",
        projects: "Proyectos",
        articles: "Artículos",

        role: "Ingeniero DevOps",
        intro: "Construyo infraestructuras escalables y automatizadas",

        title_cv: "CV",
        title_projects: "Proyectos",
        title_articles: "Artículos",

        experience: "Experiencia",
        skills: "Skills",

        view_github: "Ver en GitHub"
    },

    en: {
        home: "Home",
        cv: "Resume",
        projects: "Projects",
        articles: "Articles",

        role: "DevOps Engineer",
        intro: "I build scalable and automated infrastructures",

        title_cv: "Resume",
        title_projects: "Projects",
        title_articles: "Articles",

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

    // actualizar idioma HTML (SEO + accesibilidad)
    document.documentElement.lang = lang;
}
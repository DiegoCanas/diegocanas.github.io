const translations = {
    es: {
        // NAV
        home: "Inicio",
        cv: "CV",
        projects: "Artículos",

        // HOME
        kicker: "DevOps Engineer · Cloud · Platform Engineering",
        headline: "Construyo infraestructuras escalables y sistemas de automatización.",
        subheadline: "Ingeniero DevOps enfocado en Kubernetes, CI/CD, cloud y automatización de infraestructura. Diseño sistemas escalables, auto-recuperables y optimizados en coste.",

        view_cv: "Ver CV",
        view_projects: "Ver Artículos",

        cloud_title: "Plataformas Cloud",
        cicd_title: "CI / CD",
        iac_title: "Infrastructure as Code",
        obs_title: "Observabilidad",

        trust_text: "Experiencia en entornos enterprise con más de 1000 usuarios, arquitecturas multi-cloud y sistemas críticos en producción.",

        // CV
        tech_info: "Información Técnica",
        ci_cd: "CI / CD & Artifact Management",
        containers: "Containerización y Orquestación",
        observability: "Observabilidad",
        iac: "Infrastructure as Code",
        cloud: "Cloud",
        languages: "Lenguajes de Programación",
        databases: "Bases de Datos",
        languages_spoken: "Idiomas",

        functions: "Funciones",

        nymiz_summary: "Evolución de un entorno DevOps en fase temprana contribuyendo a la mejora de observabilidad, CI/CD e infraestructura.",
        mercadona_summary: "Mantenimiento y automatización de herramientas DevOps críticas para más de 2000 desarrolladores.",
        capgemini_summary: "Automatización de procesos internos y proyectos con clientes internacionales.",
        ite_summary: "Inicio en entorno DevOps desde base cero.",
        nymiz_1: "Implementación de OpenTelemetry y exportación de logs, métricas y trazas a GCP",
        nymiz_2: "Diseño de sistemas de alarmado ante incidencias críticas",
        nymiz_3: "Disaster Recovery y automatización de backups",
        nymiz_4: "Infrastructure as Code con Terraform, GitLab CI y Ansible",
        nymiz_5: "Calidad de código con tests y SonarQube",
        nymiz_6: "CD automatizado en on-premise (>1000 usuarios)",
        nymiz_7: "Optimización de costes (~20K€/mes)",
        nymiz_8: "Integración multi-cloud (GCP + AWS + Azure AKS)",

        mercadona_1: "GitLab, Nexus y Jenkins en Kubernetes",
        mercadona_2: "Alta disponibilidad mediante observabilidad",
        mercadona_3: "Disaster Recovery con GitLab Geo",
        mercadona_4: "CI/CD con Jenkins, Docker y Helm",
        mercadona_5: "Feature Flags para despliegues seguros",

        capgemini_1: "CI/CD con Jenkins y GitHub Actions",
        capgemini_2: "Docker, Kubernetes y Helm en AWS y Azure",
        capgemini_3: "Administración de Linux",
        capgemini_4: "Monitorización con ELK, Prometheus y Grafana",

        ite_1: "CI/CD con Jenkins",
        ite_2: "Docker, Kubernetes, Helm, Nexus",
        ite_3: "Monitorización con Prometheus, Grafana y Loki",
        ite_4: "Automatización con Python y Bash",
    },

    en: {
        // NAV
        home: "Home",
        cv: "Resume",
        projects: "Articles",

        // HOME
        kicker: "DevOps Engineer · Cloud · Platform Engineering",
        headline: "I build scalable infrastructure and automation systems.",
        subheadline: "DevOps Engineer focused on Kubernetes, CI/CD, cloud platforms and infrastructure automation. I design systems that scale, self-heal and reduce operational cost.",

        view_cv: "View Resume",
        view_projects: "View Articles",

        cloud_title: "Cloud Platforms",
        cicd_title: "CI / CD",
        iac_title: "Infrastructure as Code",
        obs_title: "Observability",

        trust_text: "Experience in enterprise environments with 1000+ users, multi-cloud architectures and production-critical systems.",

        // CV
        tech_info: "Technical Information",
        ci_cd: "CI / CD & Artifact Management",
        containers: "Containerization & Orchestration",
        observability: "Observability",
        iac: "Infrastructure as Code",
        cloud: "Cloud",
        languages: "Programming Languages",
        databases: "Databases",
        languages_spoken: "Languages",

        functions: "Responsibilities",

        nymiz_summary: "Evolution of an early-stage DevOps environment improving observability, CI/CD and infrastructure.",
        mercadona_summary: "Maintenance and automation of critical DevOps tools serving 2000+ developers.",
        capgemini_summary: "Automation of internal processes and collaboration with international clients.",
        ite_summary: "Started in a DevOps environment from scratch.",
        nymiz_1: "Implementation of OpenTelemetry and export of logs, metrics and traces to GCP",
        nymiz_2: "Design of alerting systems for critical incidents",
        nymiz_3: "Disaster Recovery strategies and automated backups",
        nymiz_4: "Infrastructure as Code with Terraform, GitLab CI and Ansible",
        nymiz_5: "Code quality with tests and SonarQube",
        nymiz_6: "Automated CD for on-premise environments (>1000 users)",
        nymiz_7: "Cost optimization (~€20K/month)",
        nymiz_8: "Multi-cloud integration (GCP + AWS + Azure AKS)",

        mercadona_1: "GitLab, Nexus and Jenkins on Kubernetes",
        mercadona_2: "High availability through observability",
        mercadona_3: "Disaster Recovery with GitLab Geo",
        mercadona_4: "CI/CD with Jenkins, Docker and Helm",
        mercadona_5: "Feature Flags for safe deployments",

        capgemini_1: "CI/CD with Jenkins and GitHub Actions",
        capgemini_2: "Docker, Kubernetes and Helm on AWS and Azure",
        capgemini_3: "Linux administration",
        capgemini_4: "Monitoring with ELK, Prometheus and Grafana",

        ite_1: "CI/CD with Jenkins",
        ite_2: "Docker, Kubernetes, Helm, Nexus stack",
        ite_3: "Monitoring with Prometheus, Grafana and Loki",
        ite_4: "Automation with Python and Bash",
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
            el.textContent = value;
        }
    });

    document.documentElement.lang = lang;
}

// INIT
updateUI();
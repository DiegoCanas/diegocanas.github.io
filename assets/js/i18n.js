const translations = {
    es: {
        // ================= NAV =================
        home: "Inicio",
        cv: "CV",
        projects: "Artículos",

        // ================= HOME =================
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

        // ================= CV =================
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

        nymiz_summary: "Transición dese un entorno DevOps en fase temprana contribuyento a la mejora de la monitorización, la entrega y el despliegue continuos y la infrastructura.",

        nymiz_1: "Implementación de OpenTelemetry y exportación de los logs (Promtail), métricas (Prometheus) y trazas a GCP.",
        nymiz_2: "Desarrollo de lógica e implementación del alarmado frente a incidencias críticas.",
        nymiz_3: "Diseño e implementación de estrategias de recuperación ante desastres (DR), incluyendo monitorización con alertas y automatización de backups de bases de datos.",
        nymiz_4: "Responsable de transicionar la creación manual de la infrastructura a la creación y configuración automática de la misma utilizando Terraform, Gitlab CI y Ansible.",
        nymiz_5: "Agregar calidad en el código a partir de la estandarización de pruebas en el CI mediante la ejecución de test y la medición de la calidad de código lo largo del ciclo de vida del código usando herramientas como SonarQube.",
        nymiz_6: "Diseño e implementación de CD automatizadas para despliegues continuos a entornos preproductivos y productivos on-premise que daban servicio a más de 1000 usuarios.",
        nymiz_7: "Implementación de procesos que premiten el ahorro de 20k€ mensuales con estrategias gestión de VM y HA en base a schedules y alertas personalizadas adaptadas al caso de uso del negocio.",
        nymiz_8: "Uso de GCP como proveedor principal, integrando servicios de AWS (SQS, SNS, Route53, Textract...) y orquestación de contenedores en Kubernetes sobre Microsoft Azure (AKS).",
        nymiz_9: "Gestión y ejecución de despliegues de la plataforma en entornos de clientes tanto españoles como internacionales.",

        mercadona_summary: "Mantenimiento de diferentes herramientas devops y automatización de procesos internos que daban servicio a más de 2000 desarrolladores.",
        mercadona_1: "Mantenimiento, gestion y soporte de Gitlab, Nexus y Jenkins desplegados en un cluster de kubernetes de GCP y on-premise asegurando el servicio continuo a 2000 desarrolladores.",
        mercadona_2: "Implementación de triggers de alertado para avisos críticos asegurando una alta disponibilidad.",
        mercadona_3: "Implementación de un DR para Gitlab mediante la herramienta GEO.",
        mercadona_4: "Creación y mantenimiento de pipelines de CI/CD con Jenkins, automatizando los despliegues y otros procesos. Uso de herramientas como Helm para los despliegues y Docker para la contenerización.",
        mercadona_5: "Implementación y seguimiento de Feature Flags para la adición o eliminación de funcionalidades sin afectar a la herramienta objetivo.",

        capgemini_summary: "Participación en proyectos tanto propios como con clientes Holandeses para la automatización de procesos internos.",
        capgemini_1: "Desarrollo de pipelines de CI/CD con Jenkins y GitHub actions usando herramientas como Docker, Helm y Kubernetes.",
        capgemini_2: "Uso de Azure y AWS como proveedores en la nube y herramientas de monitorización como ELK, Prometheus y Grafana.",
        capgemini_3: "Administración de sistemas Linux.",

        ite_summary: "Fase incial partiendo de una base sin un entorno DevOps.",
        ite_1: "Desarrollo de pipelines de CI/CD con Jenkins.",
        ite_2: "Stack base de Docker, Helm, Kubernetes y Nexus como repositorio de artefactos.",
        ite_3: "Monitorización con Loki, Promtail, Prometheus y Grafana.",
        ite_4: "Trabajo con el lenguaje Python y bash en el desarrollo de scripts de automatización."
    },

    en: {
        // ================= NAV =================
        home: "Home",
        cv: "Resume",
        projects: "Articles",

        // ================= HOME =================
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

        // NYMIZ
        nymiz_summary: "Transition from an early-stage DevOps environment contributing to improvements in monitoring, continuous delivery and deployment, and infrastructure.",

        nymiz_1: "Implementation of OpenTelemetry and export of logs (Promtail), metrics (Prometheus) and traces to GCP.",
        nymiz_2: "Development of logic and implementation of alerting systems for critical incidents.",
        nymiz_3: "Design and implementation of Disaster Recovery (DR) strategies, including monitoring with alerts and automated database backups.",
        nymiz_4: "Responsible for transitioning from manual infrastructure provisioning to automated creation and configuration using Terraform, GitLab CI and Ansible.",
        nymiz_5: "Improvement of code quality through standardized CI testing and code quality measurement across the software lifecycle using tools such as SonarQube.",
        nymiz_6: "Design and implementation of automated CD pipelines for continuous deployments to pre-production and production on-premise environments serving more than 1000 users.",
        nymiz_7: "Implementation of processes that enabled savings of approximately €20K per month through VM management strategies and high availability based on schedules and custom alerts aligned with business needs.",
        nymiz_8: "Use of GCP as the main cloud provider, integrating AWS services (SQS, SNS, Route53, Textract...) and container orchestration in Kubernetes on Microsoft Azure (AKS).",
        nymiz_9: "Management and execution of platform deployments in both Spanish and international client environments.",

        // MERCADONA
        mercadona_summary: "Maintenance of multiple DevOps tools and automation of internal processes serving more than 2000 developers.",

        mercadona_1: "Maintenance, management and support of GitLab, Nexus and Jenkins deployed on Kubernetes clusters in GCP and on-premise, ensuring continuous service for 2000 developers.",
        mercadona_2: "Implementation of alert triggers for critical incidents ensuring high availability.",
        mercadona_3: "Implementation of Disaster Recovery for GitLab using GitLab Geo.",
        mercadona_4: "Creation and maintenance of CI/CD pipelines with Jenkins, automating deployments and other processes using tools such as Helm and Docker.",
        mercadona_5: "Implementation and management of Feature Flags to enable or disable functionality without impacting target systems, including both web and internal tools.",

        // CAPGEMINI
        capgemini_summary: "Participation in internal and client projects (Dutch clients) focused on process automation.",

        capgemini_1: "Development of CI/CD pipelines using Jenkins and GitHub Actions, leveraging tools such as Docker, Helm and Kubernetes, with Azure and AWS as cloud providers.",
        capgemini_2: "Use of monitoring tools such as ELK, Prometheus and Grafana.",
        capgemini_3: "Linux systems administration.",

        // ITE
        ite_summary: "Initial phase starting from a non-DevOps environment, building the foundations.",

        ite_1: "Development of CI/CD pipelines using Jenkins.",
        ite_2: "Core stack including Docker, Helm, Kubernetes and Nexus as artifact repository.",
        ite_3: "Monitoring with Loki, Promtail, Prometheus and Grafana.",
        ite_4: "Automation scripting using Python and Bash.",
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

updateUI();
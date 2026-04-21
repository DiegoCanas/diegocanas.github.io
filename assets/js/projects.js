function filterProjects(tag) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(p => {
        if (tag === "all") {
            p.style.display = "block";
            return;
        }

        if (p.classList.contains(tag)) {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    });
}
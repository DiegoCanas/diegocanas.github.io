function filterArticles(category) {
    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {
        if (category === "all") {
            article.style.display = "block";
            return;
        }

        if (article.classList.contains(category)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
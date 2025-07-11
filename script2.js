document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".result-box");

  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-category");

      cards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });

      const resultSection = document.getElementById("result-section");
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

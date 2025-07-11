// Add this to your script.js file
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");

  // Prevent scrolling when menu is open
  if (navBar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-items li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

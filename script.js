const humberger = document.getElementById("humberger");
const navlinks = document.getElementById("nav-links");

humberger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

document.querySelectorAll(".clickable").forEach((link) => {
  link.addEventListener("click", function (event) {
    this.classList.toggle("clicked");
  });
});
// script.js
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight / 3) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});

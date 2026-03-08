const navLinks = document.querySelectorAll("[data-nav]");
const currentPageFromData = document.body.dataset.page;
const currentPath = window.location.pathname.split("/").pop() || "index.html";

const pageByPath = {
  "": "home",
  "index.html": "home",
  "about.html": "about",
  "programs.html": "programs",
  "contact.html": "contact",
};

const activePage = currentPageFromData || pageByPath[currentPath] || "home";

navLinks.forEach((link) => {
  const targetPath = link.getAttribute("href")?.replace(/^\.\//, "");
  if (link.dataset.nav === activePage || targetPath === currentPath) {
    link.classList.add("active");
  }
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

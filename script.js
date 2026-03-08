const navLinks = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const targetPath = link.getAttribute("href")?.split("/").pop();
  const isHomePath = currentPath === "" || currentPath === "/" || currentPath === "index.html";
  const isActive =
    targetPath === currentPath ||
    (targetPath === "index.html" && isHomePath);

  if (isActive) {
    link.classList.add("active");
  }
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

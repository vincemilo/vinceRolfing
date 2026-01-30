// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileMenuBtn.innerHTML = mainNav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Simple form submission handling
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

// In a real implementation, you would send this data to a server
// For this example, we'll just show an alert
//   alert("Thank you for your message! I will get back to you within 24 hours.");
//   this.reset();
// });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

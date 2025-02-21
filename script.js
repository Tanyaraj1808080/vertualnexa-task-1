// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle navigation for smaller screens
  const toggleBtn = document.querySelector(".toggle-btn");
  const navLinks = document.querySelector(".nav-links");
  
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
// Theme switching
document.getElementById("theme-switch").addEventListener("change", function () {
    document.body.classList.toggle("dark-theme");
  });
  
  // Smooth scroll effect for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
  
      if (target) {
        window.scrollTo({
          behavior: "smooth",
          top: target.offsetTop,
        });
      }
    });
  });
  



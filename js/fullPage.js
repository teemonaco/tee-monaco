document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll("section");
      const navDots = document.querySelectorAll(".nav-dots .dot");

      const handleScroll = () => {
        let currentSection = null;

        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = index;
          }
        });

        navDots.forEach(dot => dot.classList.remove("active"));
        if (currentSection !== null) {
          navDots[currentSection].classList.add("active");
        }
      };

      window.addEventListener("scroll", handleScroll);

      handleScroll(); // Initialize the active dot on page load
    });

/* =========================================
   SANKET METHE — PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- PAGE LOADER ---------- */

  const loader = document.querySelector(".loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      if (loader) {
        loader.classList.add("hide");
      }
    }, 600);
  });


  /* ---------- NAVBAR ---------- */

  const nav = document.querySelector("nav");

  const updateNavbar = () => {
    if (!nav) return;

    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();


  /* ---------- SCROLL REVEAL ---------- */

  const revealElements = document.querySelectorAll(
    ".skill, .project, .timeline-item, .about-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("revealed");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* ---------- ACTIVE NAVIGATION ---------- */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );

          if (activeLink) {
            activeLink.classList.add("active");
          }

        }

      });

    },
    {
      threshold: 0.35
    }
  );


  sections.forEach((section) => {
    sectionObserver.observe(section);
  });


  /* ---------- SMOOTH NAVIGATION ---------- */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* ---------- DESKTOP MOUSE GLOW ---------- */

  const glow = document.createElement("div");

  glow.className = "mouse-glow";

  document.body.appendChild(glow);


  if (window.matchMedia("(pointer: fine)").matches) {

    window.addEventListener("pointermove", (event) => {

      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;

    });

  }


  /* ---------- PROJECT HOVER TILT ---------- */

  const projects = document.querySelectorAll(".project");

  if (window.matchMedia("(pointer: fine)").matches) {

    projects.forEach((project) => {

      project.addEventListener("mousemove", (event) => {

        const rect = project.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        project.style.transform =
          `perspective(800px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-8px)`;

      });


      project.addEventListener("mouseleave", () => {

        project.style.transform = "";

      });

    });

  }


  /* ---------- DYNAMIC YEAR ---------- */

  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });


  /* ---------- CONSOLE MESSAGE ---------- */

  console.log(
    "%cSanket Methe Portfolio",
    "font-size:20px;font-weight:bold;"
  );

  console.log(
    "Built with HTML, CSS & JavaScript."
  );

});

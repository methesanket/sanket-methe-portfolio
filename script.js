/* =========================================================
   SANKET METHE — PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Cursor Glow ---------- */

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });


    /* ---------- Scroll Reveal ---------- */

    const revealElements = document.querySelectorAll(
        "section, .project, .skill, .about, .contact"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* ---------- Project Tilt Effect ---------- */

    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {

        project.addEventListener("mousemove", (event) => {

            const rect = project.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            project.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "";
        });

    });


    /* ---------- Dynamic Year ---------- */

    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    /* ---------- Smooth Anchor Navigation ---------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ---------- Magnetic Buttons ---------- */

    const buttons = document.querySelectorAll(
        ".btn, button, .project a"
    );

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

    });


    /* ---------- Page Loaded ---------- */

    document.body.classList.add("loaded");

    console.log(
        "%cSanket Methe Portfolio",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cBuilt with HTML, CSS & JavaScript.",
        "font-size:14px;"
    );

});
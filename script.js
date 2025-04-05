document.addEventListener("DOMContentLoaded", () => {
    console.log("Modern Portfolio Loaded!");

    // Smooth scroll (already works due to CSS scroll-behavior)

    // Reveal sections on scroll
    const sections = document.querySelectorAll("section");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < triggerBottom) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check
});


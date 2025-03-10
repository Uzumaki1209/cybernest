document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
    });
});

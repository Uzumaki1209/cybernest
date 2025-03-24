function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        name.value = sanitizeInput(name.value);
        email.value = sanitizeInput(email.value);
        message.value = sanitizeInput(message.value);
    });

    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

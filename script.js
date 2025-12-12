// MENU MOBILE
function toggleMenu() {
    const nav = document.querySelector(".navbar ul");
    nav.classList.toggle("open");
}

// ANIMAÇÃO DO HEADER AO ROLAR A PÁGINA
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// CARROSSEL DE DESTAQUES
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
}

setInterval(showSlides, 5000);
showSlides();

// FORMULÁRIO DE CONTATO (exemplo)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! Em breve responderei.");
            form.reset();
        });
    }
});

// BOTÃO DE VOLTAR AO TOPO
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

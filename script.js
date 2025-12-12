/* ===========================
      MENU MOBILE
=========================== */
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}



/* ===========================
      BOTÃO VOLTAR AO TOPO
=========================== */
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}



/* ===========================
      FORM DE TESTE DO COACH
=========================== */
document.getElementById("testeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Seu teste foi enviado! A equipe analisará sua aplicação.");
    this.reset();
});


/* ===========================
      FORM DE CONTATO
=========================== */
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada! Em breve responderemos.");
    this.reset();
});

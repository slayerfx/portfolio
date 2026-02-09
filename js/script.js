// Menu burger pour mobile
let navToggle = document.querySelector(".nav-toggle");
let navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien
let navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
}

// Clic sur une carte de projet = ouvrir le site
let cards = document.querySelectorAll(".project-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (e) {
    // Si on clique sur un lien github/externe, on laisse le lien faire son travail
    if (e.target.closest(".project-link-btn")) {
      return;
    }
    let url = this.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
}

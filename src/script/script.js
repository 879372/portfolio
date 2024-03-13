window.addEventListener("scroll", function () {
    if (window.scrollY > 700) { // Defina a quantidade de rolagem necessária para mostrar o cabeçalho
      document.querySelector(".header").classList.add("esconder")
    } else {
      document.querySelector(".header").classList.remove("esconder")
    }
  });

  window.sr = ScrollReveal({ reset: false });
sr.reveal('.texto-home', { duration: 2000 });
sr.reveal('.img-home', { duration: 2500 });
sr.reveal('.imagem-sobre-mim', { duration: 2500 });
sr.reveal('.informacoes-sobre-mim', { duration: 2000 });
sr.reveal('.habilidades', { duration: 2000 });
sr.reveal('.funcoes', { duration: 2000 });
sr.reveal('.container-projetos', { duration: 2000 });
// sr.reveal('.nossa-plataforma', { duration: 2000 });
// sr.reveal('.carousel-container', { duration: 3000 });
// sr.reveal('.como-funciona', { duration: 2000 });
// sr.reveal('.YouTube', { duration: 2000 });
// sr.reveal('.image-fazendo', { duration: 2000 });
// sr.reveal('.image-fazendo', { duration: 2000 });
// sr.reveal('.image-fazendo', { duration: 2000 });
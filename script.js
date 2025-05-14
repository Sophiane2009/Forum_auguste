document.addEventListener("DOMContentLoaded", function () {
  const batiments = document.querySelectorAll(".batiment");
  const fiche = document.getElementById("fiche");

  batiments.forEach(function (batiment) {
    batiment.addEventListener("click", function () {
      const texte = batiment.getAttribute("data-fiche");
      fiche.innerHTML = `<div class="fiche">${texte}</div>`; 
    });
  });
});

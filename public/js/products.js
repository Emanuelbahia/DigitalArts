window.addEventListener("load", function () {
  let cuadro = document.querySelector(".clase-cuadro");
  let detail = document.querySelector(".detail-none");
  /* 
  for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener("mouseover", function () {
      detail.classList.toggle("detail-none");
    });
  } */

  cuadro.addEventListener("mouseover", function () {
    detail.classList.toggle("detail-none");
  });
});

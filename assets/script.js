document.addEventListener("DOMContentLoaded", handler);

function handler() {

  let tamanhoSlide = document.querySelector(".projects__menu").clientWidth;
  let quantidadeSlides = document.querySelectorAll(".projects__menu__card").length;
  let tamanhoContainer = quantidadeSlides * 260 + (quantidadeSlides * 15);

  console.log({ tamanhoSlide, quantidadeSlides, tamanhoContainer });

  let first = tamanhoSlide - (parseInt(tamanhoSlide / 260)) * 275;
  console.log(first);




  // document.querySelector(".projects__menu").setAttribute('style', `transform: translate3d(-${260 + n}px, 0px, 0px)`);


}
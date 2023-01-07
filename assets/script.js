document.addEventListener("DOMContentLoaded", handler);

function handler() {

  let tamanhoSlide = document.querySelector(".projects__menu").clientWidth;
  let quantidadeSlides = document.querySelectorAll(".projects__menu__card").length;
  let tamanhoContainer = quantidadeSlides * 260 + (quantidadeSlides * 15);

  console.log({ tamanhoSlide, quantidadeSlides, tamanhoContainer });

  let first = tamanhoSlide - (parseInt(tamanhoSlide / 260)) * 275;
  console.log();


  let buttonNext = document.querySelector("#next");
  buttonNext.addEventListener('click', function () {

    let style = document.querySelector(".projects__menu").getAttribute('style');


    if (style == null) {
      document.querySelector(".projects__menu").setAttribute('style', `transform: translate3d(-${274 - first}px, 0px, 0px)`);
    } else {
      const translate3d = style.match(/translate3d\(([^)]+)\)/)[1];
      let [a, b, c] = translate3d.split(', ');
      a = a.replace(/px$/, '');

      let checkFinal = tamanhoContainer - tamanhoSlide;
      let abs = Math.abs(a);
      console.log(abs);

      if ((abs + 275) < checkFinal) {
        document.querySelector(".projects__menu").setAttribute('style', `transform: translate3d(${a - 275}px, 0px, 0px)`);
      }
    }
  });

  let buttonPrevious = document.querySelector("#previous");
  buttonPrevious.addEventListener('click', function () {

    let style = document.querySelector(".projects__menu").getAttribute('style');

    if (style == null) {

    } else {
      const translate3d = style.match(/translate3d\(([^)]+)\)/)[1];
      let [a, b, c] = translate3d.split(', ');
      a = parseInt(a.replace(/px$/, ''));

      // let checkFinal = tamanhoContainer - tamanhoSlide;
      let abs = Math.abs(a);
      console.log("AAA " + abs);
      // console.log(abs);
      if (abs < 275) {
        document.querySelector(".projects__menu").removeAttribute('style');
      } else {
        document.querySelector(".projects__menu").setAttribute('style', `transform: translate3d(${a + 275}px, 0px, 0px)`);
      }

    }
  });

}
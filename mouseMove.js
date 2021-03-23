// Реакция на движение мышью


import { gsap } from "gsap";


// .js-tweenelem(data-movekoef="5")

function mouseMoveHandler(e) {
  const tweenElem = document.querySelectorAll(".js-tweenelem");

  let centerX = Math.round(window.innerWidth / 2);
  let centerY = Math.round(window.innerHeight / 2);
  let diffX = (e.clientX - centerX) / centerX;
  let diffY = (e.clientY - centerY) / centerY;

  tweenElem.forEach(function (elem) {
    gsap.to(elem, 1, {
      x: Math.round(elem.dataset.movekoef * diffX),
      y: Math.round(elem.dataset.movekoef * diffY),
    });
  });
};
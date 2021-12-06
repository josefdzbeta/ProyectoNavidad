/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'

//INTRO
const intro = document.querySelector('header')
const text = intro.querySelector("h1")
const video = intro.querySelector("video")

//Scroll
const controller = new ScrollMagic.Controller()
//Escenas
let scene = new ScrollMagic.Scene({
    duration: 12000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller)

//Texto
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);
//Animacion de video
let accelamount = 0.1
let scrollpos = 0
let delay = 0

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount
  console.log(scrollpos, delay)

  video.currentTime = delay
}, 33.3);
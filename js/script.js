/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'

window.onload = iniciar

function iniciar(){
  document.getElementById('musica').onclick=musicaFondo
  
  const MUSICAFONDO=document.querySelector("audio")
  MUSICAFONDO.loop
  MUSICAFONDO.volume=0.5
  function musicaFondo(){
    if(MUSICAFONDO.paused){
        MUSICAFONDO.play()
    }else{
        MUSICAFONDO.pause()
    }
  }
}

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

//Animacion de texto inicial 
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

//Convertir en segundos los milisegundos
scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

//Conseguir un delay al hacer el scroll para que el delay intente alcanzar la posicion de scroll y así conseguir una transición más suave
setInterval(() => {
  delay += (scrollpos - delay) * accelamount
  //console.log(scrollpos, delay)
  video.currentTime = delay
}, 33.3);
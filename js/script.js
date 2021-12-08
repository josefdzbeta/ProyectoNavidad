/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'

//Particulas en JavaScript


window.onload = iniciar

function iniciar(){
  document.getElementById('musica').onclick=musicaDeFondo
  document.getElementById('nieve').onclick=nevar;
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  const music=document.querySelector('audio')
  music.loop
  music.volume=0.5
  function musicaDeFondo(){
    if(music.paused){
        music.play()
    }else{
        music.pause()
    }
  }

 
}

function nevar(){
  if(document.querySelector("#particles-js").style.display!="none"){
    document.querySelector("#particles-js").style.display="none";
  }else{
    document.querySelector("#particles-js").style.display="block";
  }
}

//Intro video animacion 
const intro = document.querySelector('header')
const text = intro.querySelector('h1')
const video = intro.querySelector('video')
//const contenedor = document.querySelector('contendor')

//Nuevo Scroll
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
scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

//Conseguir un delay al hacer el scroll para que el delay intente alcanzar la posicion de scroll y así conseguir una transición más suave
setInterval(() => {
  delay += (scrollpos - delay) * accelamount
  //console.log(scrollpos, delay)
  video.currentTime = delay
}, 33.3);


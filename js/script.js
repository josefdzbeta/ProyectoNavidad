/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'


/**
 * @function iniciar 
 * @description carga las funciones handler y particles.js
 */

window.onload = iniciar

function iniciar(){
  document.getElementById('musica').onclick=musicaDeFondo
  document.getElementById('nieve').onclick=nevar;
  //Particulas en JavaScript
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  const music=document.querySelector('audio')
  /**
   * @function musicaDeFondo
   * @description Reproduce o pausa la música
   */
  function musicaDeFondo(){
    if(music.paused){
        music.play()
    }else{
        music.pause()
    }
  }

 
}
/**
 * @function nevar
 * @description Activa o desactiva el efecto nieve de particles.js
 */
function nevar(){
  if(document.querySelector("#particles-js").style.display!="none"){
    document.querySelector("#particles-js").style.display="none";
  }else{
    document.querySelector("#particles-js").style.display="block";
  }
}

//Intro video animacion 
const intro = document.querySelector('header')
const text =  intro.querySelector('h1')
const video = intro.querySelector('video')

//Nuevo Scroll
const controller = new ScrollMagic.Controller()

//Escenas
let scene = new ScrollMagic.Scene({
    duration: 12000,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller)

//Animacion texto inicial
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller)
//Animacion de video
let accelamount = 0.1
let scrollpos = 0
let delay = 0


/**
 * @param {Event}
 * @description Convertir en segundos los milisegundos
 */
scene.on('update', e => {
  scrollpos = e.scrollPos / 1000
})

setInterval(() => {
  delay += (scrollpos - delay) * accelamount
  //console.log(scrollpos, delay)
  video.currentTime = delay
}, 33.3)


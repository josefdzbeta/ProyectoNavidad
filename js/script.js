/**
 * @author Jose Angel Betancourt
 * @license GPL V3 2021
 */

'use strict'

//INTRO
const intro = document.querySelector('header')

//FIN SECCION SCROLL
const final = document.querySelector('contenedor')


//Scroll
const controller = new ScrollMagic.Controller()

const escena = new ScrollMagic.Scene({
    duration: 1000,
    triggerElemnt: intro,
    triggerHook: 0
})

.addIndicators()
.addTo(controller)
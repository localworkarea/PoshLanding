import { FLS } from "@js/common/functions.js";
// Docs: https://www.npmjs.com/package/gsap
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
// Стилі модуля
import './gsap.scss'

function gsapInit() {
	
}

document.querySelector('[data-fls-gsap]') ?
	window.addEventListener('load', gsapInit) : null



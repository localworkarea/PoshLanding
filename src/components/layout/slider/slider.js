import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

// Підключення базових стилів
import "./slider.scss";
// Повний набір стилів з node_modules
// import 'swiper/css/bundle';

function initSliders() {
	if (document.querySelector('.cost-guarantee__slider')) {
		new Swiper('.cost-guarantee__slider', { 
			// modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

		
			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 12,
				},
				768: {
					slidesPerView: 2.1,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', { 
			// modules: [],
			observer: true,
			observeParents: true,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

		
			breakpoints: {
				320: {
					slidesPerView: 1.1,
					spaceBetween: 12,
				},
				768: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 1.52,
					spaceBetween: 45,
				},
			},
			// Події
			on: {

			}
		});
	}
	// if (document.querySelector('.swiper')) {
	// 	new Swiper('.swiper', { 
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
}
document.querySelector('[data-fls-slider]') ?
	window.addEventListener("load", initSliders) : null
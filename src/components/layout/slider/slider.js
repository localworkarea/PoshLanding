import Swiper from 'swiper';
import { Navigation,FreeMode } from 'swiper/modules';
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
	if (document.querySelector('.brief-refs__slider')) {
		new Swiper('.brief-refs__slider', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 500,
			freeMode: {
  		  enabled: true,
				momentumBounceRatio: 1,
				momentumRatio: 0.5,
				momentumVelocityRatio: 1.5,
  		},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

		
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 8,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3.3,
					spaceBetween: 10,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.brief-type__slider')) {
		new Swiper('.brief-type__slider', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			freeMode: {
  		  enabled: true,
				momentumBounceRatio: 1,
				momentumRatio: 0.5,
				momentumVelocityRatio: 1.5,
  		},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

		
			breakpoints: {
				320: {
					slidesPerView: 1.6,
					spaceBetween: 8,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3.3,
					spaceBetween: 10,
				},
			},
			// Події
			on: {

			}
		});
	}
}
document.querySelector('[data-fls-slider]') ?
	// window.addEventListener("load", initSliders) : null 
	window.addEventListener("load", () => {

  initSliders(); 
const filterContainer = document.querySelector('[data-brief-filters]');
  const sliderEl = document.querySelector('.brief-type__slider');

  if (!filterContainer || !sliderEl) return;

  const swiper = sliderEl.swiper;
  const slides = [...sliderEl.querySelectorAll('.swiper-slide')];

  function applyFilters() {
    const selectedFilters = [...filterContainer.querySelectorAll('input[data-filter]:checked')]
      .map(i => i.value);

    slides.forEach(slide => {
      const tags = slide.dataset.refTags.split(',').map(t => t.trim());

      const match =
        selectedFilters.length === 0 ||
        selectedFilters.some(f => tags.includes(f));

      slide.style.display = match ? "" : "none";
    });


    swiper.updateSlides();
    swiper.update();
  }

  filterContainer.addEventListener('change', applyFilters);
}) : null 

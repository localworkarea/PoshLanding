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


	// function updateSliderEdges(swiper) {
	// 	const wrapper = swiper.el.closest('.swiper'); // родитель (контейнер)
	// 	if (!wrapper) return;

	// 	const maxTranslate = swiper.maxTranslate(); // максимум влево (отриц.)
	// 	const minTranslate = swiper.minTranslate(); // должно быть 0
	// 	const current = swiper.translate;

	// 	// сбрасываем классы
	// 	wrapper.classList.remove('--left-side', '--right-side');

	// 	// если контента недостаточно — ставим оба класса
	// 	if (maxTranslate === minTranslate) {
	// 		wrapper.classList.add('--left-side', '--right-side');
	// 		return;
	// 	}

	// 	// левый край
	// 	if (current >= minTranslate) {
	// 		wrapper.classList.add('--left-side');
	// 	}

	// 	// правый край
	// 	if (current <= maxTranslate) {
	// 		wrapper.classList.add('--right-side');
	// 	}
	// }


	if (document.querySelector('.brief-refs__slider')) {
		const sliderRefs = new Swiper('.brief-refs__slider', { 
			modules: [FreeMode, Navigation],
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

				navigation: {
					prevEl: '.brief-refs__slider .swiper-button-prev',
					nextEl: '.brief-refs__slider .swiper-button-next',
				},

		
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 8,
					// initialSlide: 0,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 10,
					// initialSlide: 0,
				},
				1024: {
					slidesPerView: 3.3,
					spaceBetween: 10,
					// initialSlide: 1,
				},
				1300: {
					slidesPerView: 5.4,
					spaceBetween: 10,
					// initialSlide: 1,
				},
			},
			// Події
			on: {
				// init(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// slideChange(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// transitionEnd(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// touchEnd(swiper) {
				// 	setTimeout(() => updateSliderEdges(swiper), 50);
				// },
			}
		});
			// window.addEventListener('resize', () => updateSliderEdges(sliderRefs));
	}
	if (document.querySelector('.brief-type__slider')) {
		const sliderType =  new Swiper('.brief-type__slider', { 
			modules: [FreeMode, Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 10,
			slidesPerView: 'auto',
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

				navigation: {
					prevEl: '.brief-type__slider .swiper-button-prev',
					nextEl: '.brief-type__slider .swiper-button-next',
				},
		
			breakpoints: {
				320: {
					// slidesPerView: 1.6,
					spaceBetween: 16,
				},
				768: {
					// slidesPerView: 2.5,
					spaceBetween: 33,
				},
				// 1024: {
					// slidesPerView: 3.3,
					// spaceBetween: 10,
				// },
			},
			// Події
			on: {
				// init(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// slideChange(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// transitionEnd(swiper) {
				// 	updateSliderEdges(swiper);
				// },
				// touchEnd(swiper) {
				// 	setTimeout(() => updateSliderEdges(swiper), 50);
				// },
			}
		});
			// window.addEventListener('resize', () => updateSliderEdges(sliderType));
	}
}
document.querySelector('[data-fls-slider]') ?
	// window.addEventListener("load", initSliders) : null 
	window.addEventListener("load", () => {

  initSliders(); 
// const filterContainer = document.querySelector('[data-brief-filters]');
//   const sliderEl = document.querySelector('.brief-type__slider');

//   if (!filterContainer || !sliderEl) return;

//   const swiper = sliderEl.swiper;
//   const slides = [...sliderEl.querySelectorAll('.swiper-slide')];

//   function applyFilters() {
//     const selectedFilters = [...filterContainer.querySelectorAll('input[data-filter]:checked')]
//       .map(i => i.value);

//     slides.forEach(slide => {
//       const tags = slide.dataset.refTags.split(',').map(t => t.trim());

//       const match =
//         selectedFilters.length === 0 ||
//         selectedFilters.some(f => tags.includes(f));

//       slide.style.display = match ? "" : "none";
//     });


//     swiper.updateSlides();
//     swiper.update();
//   }

  // filterContainer.addEventListener('change', applyFilters);

	const filterContainer = document.querySelector('[data-brief-filters]');
  const sliderEl = document.querySelector('.brief-type__slider');

  if (!filterContainer || !sliderEl) return;

  const swiper = sliderEl.swiper;
  const slides = [...sliderEl.querySelectorAll('.swiper-slide')];

  const filterAll = filterContainer.querySelector('input[value="all"]');
  const filterInputs = [...filterContainer.querySelectorAll('input[data-filter]')]
    .filter(i => i.value !== "all");

  // 🔥 Применение фильтров
  function applyFilters() {
    const selectedFilters = [...filterContainer.querySelectorAll('input[data-filter]:checked')]
      .map(i => i.value);

    // Если выбран "Все"
    if (selectedFilters.includes("all")) {
      slides.forEach(slide => (slide.style.display = ""));
      swiper.updateSlides();
      swiper.update();
      return;
    }

    slides.forEach(slide => {
      const tags = slide.dataset.refTags.split(',').map(t => t.trim());

      const match = selectedFilters.some(f => tags.includes(f));
      slide.style.display = match ? "" : "none";
    });

    swiper.updateSlides();
    swiper.update();
  }

  // 🔥 Логика переключения чекбоксов
  filterContainer.addEventListener('change', (e) => {
    const target = e.target;

    // Если нажали "Все"
    if (target.value === "all") {

      // Снимаем все остальные
      filterInputs.forEach(i => (i.checked = false));

      // "Все" всегда остаётся выбранным
      filterAll.checked = true;

      applyFilters();
      return;
    }

    // Если нажали не "Все":
    if (target.value !== "all") {

      // Снимем "Все"
      filterAll.checked = false;

      // Если сняли последний чекбокс → активируем "Все"
      const anyChecked = filterInputs.some(i => i.checked);

      if (!anyChecked) {
        filterAll.checked = true;
      }

      applyFilters();
      return;
    }
	});

}) : null 

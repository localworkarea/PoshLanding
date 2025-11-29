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
				
			}
		});
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
			
			}
		});
	}
}
document.querySelector('[data-fls-slider]')
  ? window.addEventListener("load", () => {

      initSliders();

      const filterBlocks = document.querySelectorAll('[data-brief-filters]');

      filterBlocks.forEach(filterBlock => {

        // Ищем слайдер ТОЛЬКО внутри этого filterBlock
        const sliderEl = filterBlock.querySelector('[data-fls-slider]');
        if (!sliderEl) return;

        const swiper = sliderEl.swiper;
        const slides = [...sliderEl.querySelectorAll('.swiper-slide')];

        // Ищем элементы фильтров внутри этого filterBlock
        const filterAll = filterBlock.querySelector('input[value="all"]');
        const filterInputs = [...filterBlock.querySelectorAll('input[data-filter]')]
          .filter(i => i.value !== "all");

        // --- Функция фильтрации ---
        function applyFilters() {
          const selectedFilters = [...filterBlock.querySelectorAll('input[data-filter]:checked')]
            .map(i => i.value);

          // Если выбран "Все"
          if (selectedFilters.includes("all")) {
            slides.forEach(slide => (slide.style.display = ""));
            swiper.updateSlides();
            swiper.update();
            return;
          }

          // Обычные фильтры
          slides.forEach(slide => {
            const tags = slide.dataset.refTags.split(',').map(t => t.trim());
            const match = selectedFilters.some(f => tags.includes(f));
            slide.style.display = match ? "" : "none";
          });

          swiper.updateSlides();
          swiper.update();
        }

        // --- ВЫБОРА ЧЕКБОКСОВ ---
        filterBlock.addEventListener('change', (e) => {
          const target = e.target;

          // Если нажали "Все"
          if (target.value === "all") {
            filterInputs.forEach(i => (i.checked = false));
            filterAll.checked = true;

            applyFilters();
            return;
          }

          // Если нажали НЕ "Все"
          if (target.value !== "all") {

            filterAll.checked = false;

            // Если снят последний → включить "Все"
            const anyChecked = filterInputs.some(i => i.checked);
            if (!anyChecked) {
              filterAll.checked = true;
            }
            
            applyFilters();
            return;
          }
        });

      }); 

    })
  : null;



// document.querySelector('[data-fls-slider]') ?
// 	window.addEventListener("load", () => {

//   initSliders(); 

// 	const filterContainer = document.querySelector('[data-brief-filters]');
//   const sliderEl = document.querySelector('.brief-type__slider');

//   if (!filterContainer || !sliderEl) return;

//   const swiper = sliderEl.swiper;
//   const slides = [...sliderEl.querySelectorAll('.swiper-slide')];

//   const filterAll = filterContainer.querySelector('input[value="all"]');
//   const filterInputs = [...filterContainer.querySelectorAll('input[data-filter]')]
//     .filter(i => i.value !== "all");

//   // Применение фильтров
//   function applyFilters() {
//     const selectedFilters = [...filterContainer.querySelectorAll('input[data-filter]:checked')]
//       .map(i => i.value);

//     // Если выбран "Все"
//     if (selectedFilters.includes("all")) {
//       slides.forEach(slide => (slide.style.display = ""));
//       swiper.updateSlides();
//       swiper.update();
//       return;
//     }

//     slides.forEach(slide => {
//       const tags = slide.dataset.refTags.split(',').map(t => t.trim());

//       const match = selectedFilters.some(f => tags.includes(f));
//       slide.style.display = match ? "" : "none";
//     });

//     swiper.updateSlides();
//     swiper.update();
//   }

//   // Логика переключения чекбоксов
//   filterContainer.addEventListener('change', (e) => {
//     const target = e.target;

//     // Если нажали "Все"
//     if (target.value === "all") {

//       // Снимаем все остальные
//       filterInputs.forEach(i => (i.checked = false));

//       // "Все" всегда остаётся выбранным
//       filterAll.checked = true;

//       applyFilters();
//       return;
//     }

//     // Если нажали не "Все":
//     if (target.value !== "all") {

//       // Снимем "Все"
//       filterAll.checked = false;

//       // Если сняли последний чекбокс → активируем "Все"
//       const anyChecked = filterInputs.some(i => i.checked);

//       if (!anyChecked) {
//         filterAll.checked = true;
//       }

//       applyFilters();
//       return;
//     }
// 	});

// }) : null 

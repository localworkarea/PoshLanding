import { FLS, slideUp, slideDown, slideToggle, dataMediaQueries } from "@js/common/functions.js";
import { ScrollTrigger } from "gsap/all";
// Підключення базових стилів
import "./spollers.scss";


export function spollers() {
	const spollersArray = document.querySelectorAll('[data-fls-spollers]');
	if (spollersArray.length > 0) {
		FLS(`_FLS_SPOLLERS_START`, spollersArray.length)

		// // =========================================================
		// // === VIDEO FUNCTIONS  (добавлены) ========================
		// // =========================================================

		// function playSpollerVideo(spollerBlock) {            // VIDEO <<<
		// 	const video = spollerBlock.querySelector("video[data-spollers-video]");
		// 	if (!video) return;

		// 	try {
		// 		video.pause();
		// 		video.currentTime = 0;
		// 		video.loop = false;
		// 		video.play();
		// 	} catch (e) {
		// 		console.warn("Video playback error:", e);
		// 	}
		// }

		// function resetSpollerVideo(spollerBlock) {           // VIDEO <<<
		// 	const video = spollerBlock.querySelector("video[data-spollers-video]");
		// 	if (!video) return;

		// 	video.pause();
		// 	video.currentTime = 0;
		// }

		// // =========================================================
		// // =========================================================


		// Подія кліку
		document.addEventListener("click", setSpollerAction);
		// Отримання звичайних слойлерів
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.flsSpollers.split(",")[0];
		});
		// Ініціалізація звичайних слойлерів
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Отримання слойлерів з медіа-запитами
		let mdQueriesArray = dataMediaQueries(spollersArray, "flsSpollers");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Подія
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Ініціалізація
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('--spoller-init');
					initSpollerBody(spollersBlock);
				} else {
					spollersBlock.classList.remove('--spoller-init');
					initSpollerBody(spollersBlock, false);
				}
			});
		}
		// Робота з контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			let spollerItems = spollersBlock.querySelectorAll('details');
			if (spollerItems.length) {
				spollerItems.forEach(spollerItem => {
					let spollerTitle = spollerItem.querySelector('summary');
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerItem.hasAttribute('data-fls-spollers-open')) {
							spollerItem.open = false;
							spollerTitle.nextElementSibling.hidden = true;
						} else {
							spollerTitle.classList.add('--spoller-active');
							spollerItem.open = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.classList.remove('--spoller-active');
						spollerItem.open = true;
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.closest('summary') && el.closest('[data-fls-spollers]')) {
				e.preventDefault();
				if (el.closest('[data-fls-spollers]').classList.contains('--spoller-init')) {
					const spollerTitle = el.closest('summary');
					const spollerBlock = spollerTitle.closest('details');
					const spollersBlock = spollerTitle.closest('[data-fls-spollers]');
					const oneSpoller = spollersBlock.hasAttribute('data-fls-spollers-one');
					const scrollSpoller = spollerBlock.hasAttribute('data-fls-spollers-scroll');
					const spollerSpeed = spollersBlock.dataset.flsSpollersSpeed ? parseInt(spollersBlock.dataset.flsSpollersSpeed) : 500;

					if (!spollersBlock.querySelectorAll('.--slide').length) {

						const isOpening = !spollerBlock.open;   // VIDEO <<<

						if (oneSpoller && !spollerBlock.open) {
							hideSpollersBody(spollersBlock);
						}

						!spollerBlock.open
							? spollerBlock.open = true
							: setTimeout(() => { spollerBlock.open = false }, spollerSpeed);

						spollerTitle.classList.toggle('--spoller-active');
						slideToggle(spollerTitle.nextElementSibling, spollerSpeed);

						if (isOpening) {
						  setTimeout(() => {
						    const canvas = spollerBlock.querySelector('.hero-3d-process');
						    if (canvas && canvas._threeController) {
						      canvas._threeController.play();
						    }
						  }, spollerSpeed);
						}



						// // =========================================================
						// // === VIDEO CONTROL LOGIC  (добавлено) ====================
						// // =========================================================

						// if (isOpening) {
						//     // Открытие → запускаем после открытия
						//     setTimeout(() => {
						//         playSpollerVideo(spollerBlock);
						//     }, spollerSpeed);
						// } else {
						//     // Закрытие → сброс только ПОСЛЕ slideUp, через spollerSpeed
						//     setTimeout(() => {
						//         resetSpollerVideo(spollerBlock);
						//     }, spollerSpeed);
						// }


						// // =========================================================
						// // =========================================================


						// Обновление ScrollTrigger после зміни висоти
						setTimeout(() => {
							ScrollTrigger.refresh();
						}, spollerSpeed + 50);

						if (scrollSpoller && spollerTitle.classList.contains('--spoller-active')) {
							const scrollSpollerValue = spollerBlock.dataset.flsSpollersScroll;
							const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
							const scrollSpollerNoHeader = spollerBlock.hasAttribute('data-fls-spollers-scroll-noheader') ? document.querySelector('.header').offsetHeight : 0;

							window.scrollTo({
								top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
								behavior: "smooth",
							});
						}
					}
				}
			}
			// Закриття при кліку поза спойлером
			if (!el.closest('[data-fls-spollers]')) {
				const spollersClose = document.querySelectorAll('[data-fls-spollers-close]');
				if (spollersClose.length) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-fls-spollers]');
						const spollerCloseBlock = spollerClose.parentNode;
						if (spollersBlock.classList.contains('--spoller-init')) {
							const spollerSpeed = spollersBlock.dataset.flsSpollersSpeed ? parseInt(spollersBlock.dataset.flsSpollersSpeed) : 500;
							spollerClose.classList.remove('--spoller-active');
							slideUp(spollerClose.nextElementSibling, spollerSpeed);
							// setTimeout(() => { spollerCloseBlock.open = false }, spollerSpeed);
							// setTimeout(() => {
							//     spollerCloseBlock.open = false;
							//     // resetSpollerVideo(spollerCloseBlock);   // VIDEO RESET
							// }, spollerSpeed);
							setTimeout(() => {
						  	const canvas = spollerBlock.querySelector('.hero-3d-process');
							  if (canvas && canvas._threeController) {
							    canvas._threeController.reset();
							  }
							  spollerBlock.open = false;
							}, spollerSpeed);

							
						}
					});
				}
			}
		}
		function hideSpollersBody(spollersBlock) {
		    const spollerActiveBlock = spollersBlock.querySelector('details[open]');
		    if (spollerActiveBlock && !spollersBlock.querySelectorAll('.--slide').length) {
		        const spollerActiveTitle = spollerActiveBlock.querySelector('summary');
		        const spollerSpeed = spollersBlock.dataset.flsSpollersSpeed ? parseInt(spollersBlock.dataset.flsSpollersSpeed) : 500;
				
		        spollerActiveTitle.classList.remove('--spoller-active');
		        slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
				
		        // setTimeout(() => {
		        //     // resetSpollerVideo(spollerActiveBlock);  // VIDEO RESET (добавлено)
		        //     spollerActiveBlock.open = false;
		        // }, spollerSpeed);
						setTimeout(() => {
						  const canvas = spollerActiveBlock.querySelector('.hero-3d-process');
						  if (canvas && canvas._threeController) {
						    canvas._threeController.reset();
						  }
						  spollerActiveBlock.open = false;
						}, spollerSpeed);

		    }
		}


	}
}

window.addEventListener('load', spollers);

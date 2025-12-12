import { FLS } from "@js/common/functions.js";
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  autoRaf: false, // Отключаем autoRaf, чтобы Lenis работал через GSAP ticker
  lerp: 0.08, // Оптимальное значение для гладкого скролла
  // lerp: 0.06, // Оптимальное значение для гладкого скролла
  wheelMultiplier: 1, // Контроль скорости прокрутки
  touchMultiplier: 2,
});

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000); // GSAP даёт секунды, Lenis хочет миллисекунды
//   ScrollTrigger.update(); // Обновляем ScrollTrigger в одном месте
// });

// один раз обновляем после lenis
lenis.on('scroll', ScrollTrigger.update);

// в тикере только lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Отключаем лаг-гашение, чтобы всё было отзывчиво
gsap.ticker.lagSmoothing(0);






document.addEventListener("DOMContentLoaded", () => {

	document.querySelectorAll("[data-gsap], .trust__img img, .fill-form__images img")
  .forEach(el => {
    el.style.willChange = "transform";
  });


	// == index sections ===============
	const page = document.querySelector('.page--index');
	if (!page) return;

	const children = Array.from(page.children);
	const maxZ = children.length;

	children.forEach((child, i) => {
		child.style.zIndex = maxZ - i;
	});

	// == GSAP animations

	let refreshTimeout;
	function safeRefresh() {
	  clearTimeout(refreshTimeout);
	  refreshTimeout = setTimeout(() => {
	    ScrollTrigger.refresh();
	  }, 150);
	}
	 safeRefresh();

	function createGsapAnim() {

		// удаляем тригеры после срабатывания фунции (поворота экрана...)
		ScrollTrigger.getAll().forEach(trigger => trigger.kill());

		// GSAP animations only for viewport >= 30.061em
		const GSAP_MQ = window.matchMedia('(min-width: 30.061em)');
		if (!GSAP_MQ.matches) {
			return;
		}

		document.querySelectorAll('[data-gsap]').forEach(section => {

			const prevSection = section.previousElementSibling;
			if (!prevSection) return;

			// читаем значение из data-gsap-end
			let endValue = section.dataset.gsapEnd || "35%";

			// небольшой сдвиг старта анимации по скроллу (px) — даёт эффект задержки
			const startOffset = parseInt(section.dataset.gsapStartOffset || 30, 10);

			gsap.to(section, {
				y: 0,
				ease: "none",
				scrollTrigger: {
					trigger: prevSection,
					start: `bottom bottom+=${startOffset}`,
					end: `bottom ${endValue}`,
					scrub: 0.6, // для более гладкой анимации вместо true
					invalidateOnRefresh: true,
				}
			});


			const trustImg = section.querySelector('.trust__img img');
			if (trustImg) {
				gsap.to(trustImg, {
					y: 0,
					duration: 2,
					ease: 'none',
					scrollTrigger: {
						trigger: prevSection,
						start: `bottom bottom+=${startOffset}`,
						end: `bottom top`,
						scrub: 0.6,
						invalidateOnRefresh: true,
					}
				});
			}
			const fillFormImg = section.querySelector('.fill-form__images img');
			if (fillFormImg) {
				gsap.to(fillFormImg, {
					y: 0,
					// duration: 2,
					ease: 'none',
					scrollTrigger: {
						trigger: prevSection,
						start: `bottom bottom`,
						end: `bottom top`,
						scrub: 0.6,
						invalidateOnRefresh: true,
					}
				});
			}


		});

		// ScrollTrigger.refresh(); // Обновляем после создания всех триггеров
		// let refreshTimeout;

		// function safeRefresh() {
		//   clearTimeout(refreshTimeout);
		//   refreshTimeout = setTimeout(() => {
		//     ScrollTrigger.refresh();
		//   }, 150);
		// }
		// safeRefresh();

	}
		createGsapAnim();

		const itemsSol = document.querySelectorAll('.item-solutions__txt');
		// if (itemsSol.length) {
			const mqDesktop = window.matchMedia('(min-width: 600px)');
	
			function resetMinHeight() {
				itemsSol.forEach(el => {
					el.style.minHeight = '';
				});
			}
	
			function setMaxMinHeight() {
				if (!mqDesktop.matches) return;
			
				resetMinHeight();
			
				let maxHeight = 0;
			
				itemsSol.forEach(el => {
					const height = el.offsetHeight;
					if (height > maxHeight) {
						maxHeight = height;
					}
				});
			
				itemsSol.forEach(el => {
					el.style.minHeight = `${maxHeight}px`;
				});
			}
	
			if (mqDesktop.matches) {
				setMaxMinHeight();
			}
	
			mqDesktop.addEventListener('change', e => {
				if (e.matches) {
					setMaxMinHeight();
				} else {
					resetMinHeight();
				}
			});
		// }


	// === RESIZE OBSERVER WITH DEBOUNCE ==========================================
	let lastWidth2 = window.innerWidth;
	let resizeTimeout = null;

	const resizeObserver2 = new ResizeObserver(entries => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			const currentWidth = window.innerWidth;
			if (currentWidth !== lastWidth2) {
				lastWidth2 = currentWidth;
				createGsapAnim();
				
				if (mqDesktop.matches) {
      	  setMaxMinHeight();
      	} 

			}
		}, 250); // Debounce 250ms
	});
	resizeObserver2.observe(document.body);


	// == animations list-hero__item ===========
	const items = document.querySelectorAll(".list-hero__item");
	if (items.length) {
		let animationInterval = null;
		const MQ = window.matchMedia("(max-width: 48.061em)");
		const DURATION = 700;
		const DELAY = 1500;
	
		function showSequentially() {
			let index = 0;
	
			function animateNext() {
				// Сбрасываем все
				items.forEach(item => {
					item.style.transition = "none";
					item.style.opacity = "0";
					item.style.transform = "translate(-50%, 100%)";
				});
	
				requestAnimationFrame(() => {
					const item = items[index];
					item.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
					item.style.opacity = "1";
					item.style.transform = "translate(-50%, 0)";
				});
	
				index = (index + 1) % items.length;
	
				// Следующий элемент через 1 сек + время анимации
				clearTimeout(animationInterval);
				animationInterval = setTimeout(animateNext, DELAY + DURATION);
			}
	
			animateNext();
		}
	
		function stopAnimation() {
			clearTimeout(animationInterval);
			animationInterval = null;
			items.forEach(item => {
				item.style.transition = "";
				item.style.opacity = "";
				item.style.transform = "";
			});
		}
	
		function checkAnimation() {
			if (MQ.matches) {
				if (!animationInterval) showSequentially();
			} else {
				stopAnimation();
			}
		}
	
		checkAnimation();
		MQ.addEventListener("change", checkAnimation);
	}



	// === HERO LIST VIDEO HOVER REPLAY ==================================
	const heroVideosList = document.querySelectorAll(".list-hero__item video");

	if (heroVideosList.length) {
		heroVideosList.forEach(video => {
			let firstPlayDone = false;
			let canReplayOnHover = false;

			video.addEventListener("ended", () => {
				if (!firstPlayDone) {
					firstPlayDone = true;
					canReplayOnHover = true;
				} else {
					canReplayOnHover = true;
				}
			});

			video.addEventListener("mouseenter", () => {
				if (!firstPlayDone) return; 
				if (!canReplayOnHover) return; 

				canReplayOnHover = false; 
				video.currentTime = 0;
				video.play();
			});
		});
	}




	// == animations parallax section .portfolio =================
	const portfolio = document.querySelector('.portfolio');
	if (portfolio) {

		let mouseX = 0;
		let targetX = 0;

		const strength = 40;  // максимальное смещение (px)
		const easing = 0.03;  // плавность

		// центр экрана
		let centerX = window.innerWidth / 2;
		window.addEventListener('resize', () => {
			centerX = window.innerWidth / 2;
		});

		// Ловим мышь (лёгкая логика)
		window.addEventListener('mousemove', (e) => {
			const offset = (e.clientX - centerX) / centerX; // -1..1
			targetX = offset * strength;
		}, { passive: true });

		// === Рендер функция (используется GSAP ticker'ом) ===
		function render() {
			mouseX += (targetX - mouseX) * easing;
			portfolio.style.transform = `translate3d(${mouseX}px,0,0)`;
		}

		// === Observer включает и выключает GSAP ticker ===
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// Элемент появился → запускаем рендер
					gsap.ticker.add(render);
				} else {
					// Элемент ушёл → отключаем, чтобы не тратить ресурсы
					gsap.ticker.remove(render);
				}
			});
		}, { threshold: 0.2 });

		observer.observe(portfolio);

		// браузерные оптимизации
		try {
			portfolio.style.willChange = 'transform';
			portfolio.style.backfaceVisibility = 'hidden';
		} catch (e) {}
	}



	// == hero video =================================

	const heroBlock = document.querySelector("[data-video-hero]");
	// if (!heroBlock) return;
	if (heroBlock) {
		const playBtn = heroBlock.querySelector(".video-hero__play");
		const previewWrapper = heroBlock.querySelector(".video-hero__preview");
		const previewVideo = previewWrapper?.querySelector("video");
		const mainWrapper = heroBlock.querySelector(".video-hero__main");
		const mainVideo = mainWrapper?.querySelector("video");
	
		if (!playBtn || !previewVideo || !mainVideo) return;
	
		// --- Начальные состояния ---
		mainVideo.pause(); 
		previewVideo.muted = true; 
		// previewVideo.play().catch(() => {});
		let mainWasPlayedOnce = false;
	
		// --- Функция запуска основного видео ---
		function playMainVideo() {
			mainWasPlayedOnce = true;
	
			// 1. Скрываем кнопку
			playBtn.style.opacity = "0";
			playBtn.style.pointerEvents = "none";
	
			// 2. Скрываем превью
			previewWrapper.classList.add("--not-active");
			previewVideo.pause();
	
			// 3. Запускаем основное
			mainVideo.play();
		}
	
		// --- Функция паузы/плея после первого запуска ---
		function toggleMainPlayback() {
			if (mainVideo.paused) {
				mainVideo.play();
				playBtn.style.opacity = "0";
				playBtn.style.pointerEvents = "none";
			} else {
				mainVideo.pause();
				playBtn.style.opacity = "1";
				playBtn.style.pointerEvents = "auto";
			}
		}
	
		// --- Обработчик клика по всему блоку ---
		heroBlock.addEventListener("click", () => {
			// Первый клик — запускаем основное
			if (!mainWasPlayedOnce) {
				playMainVideo();
				return;
			}
	
			// Дальше — только управление основным
			toggleMainPlayback();
		});
	
		// --- Поведение при выходе блока из вьюпорта ---
		const observer2 = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) {
						// Останавливаем только основное видео
						if (!mainVideo.paused) {
							mainVideo.pause();
							if (mainWasPlayedOnce) {
								playBtn.style.opacity = "1";
								playBtn.style.pointerEvents = "auto";
							}
						}
					}
				});
			}, {
				threshold: 0.2
			}
		);
	
		observer2.observe(heroBlock);
	};






	// Плавный скролл к блокам с учётом GSAP и Lenis
	document.addEventListener("click", (e) => {
		const link = e.target.closest("[data-go-link]");
		if (link) {
					e.preventDefault();
			
					const targetId = link.dataset.goLink;
					const target = document.querySelector(`[data-go-id="${targetId}"]`);
			
					if (!target) return;
			
					const offset = 30;
			
					const rect = target.getBoundingClientRect();
					let targetY = rect.top + window.scrollY - offset;
			
					// 2. Если у блока есть transform → Учесть GSAP-смещение
					const style = window.getComputedStyle(target);
					const matrix = style.transform;
			
					if (matrix && matrix !== "none") {
						const values = matrix.match(/matrix.*\((.+)\)/);
						if (values) {
							const parts = values[1].split(',');
							const translateY = parseFloat(parts[5]); // Y-смещение
			
							if (!isNaN(translateY)) {
								// translateY например "-113px" → надо вычесть
								targetY -= translateY;
							}
						}
					}
			
					// 3. Динамическая плавность
					const currentY = lenis.scroll;
					const distance = Math.abs(targetY - currentY);
			
					let duration;
					if (distance < 300) {
						duration = 1.4;
					} else if (distance < 900) {
						duration = 1.8;
					} else {
						duration = 2;
					}
			
					// 4. Плавный scroll с учетом GSAP transform
					lenis.scrollTo(targetY, {
						duration,
						easing: (t) => 1 - Math.pow(1 - t, 4),
					});

		}
	});

		// Optimize media: pause/play many small autoplay videos when they are offscreen
	const mediaObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const v = entry.target;
			if (entry.isIntersecting) {
				// prefer light preload and try to play when visible
				try { v.preload = v.preload || 'metadata'; } catch (e) {}
				v.play && v.play().catch(() => {});
			} else {
				if (v && !v.paused) v.pause && v.pause();
			}
		});
	}, { threshold: 0.5 });

	const smallVideos = document.querySelectorAll('.list-hero__item video, .portfolio video');
	if (smallVideos.length) {
		smallVideos.forEach(v => {
			try { v.preload = v.preload || 'metadata'; } catch (e) {}
			mediaObserver.observe(v);
		});
	}


});
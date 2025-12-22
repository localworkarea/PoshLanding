import { FLS, isMobile } from "@js/common/functions.js";
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from "gsap/all";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3, Vector3 } from 'three';



gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  autoRaf: false, // Отключаем autoRaf, чтобы Lenis работал через GSAP ticker
  lerp: 0.08, // значение для гладкого скролла
  wheelMultiplier: 1, // Контроль скорости прокрутки
  touchMultiplier: 2,
});


lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Отключаем лаг-гашение, чтобы всё было отзывчиво
gsap.ticker.lagSmoothing(0);





const ROTATION_ANGLE = -Math.PI * 2;
const ROTATION_DURATION = 5000;

const HERO_3D_PRESETS = {
  hero: {
    targetSize: 1.2,
    cameraZ: 3,
    lights: [
     {
				// сверху
        position: [0, 5, 2],
        intensity: 10,
      },
      {
				// сзади правее
        position: [2, 0, -2],
        intensity: 25,
      },
				{
        // сзади левее
        position: [-3, 0, -2],
        intensity: 5,
      },
      {
				// спереди левее
        position: [-1.5, 0, 4],
        intensity: 5,
      },
    ],
  },

  process: {
    targetSize: 1.4,
    cameraZ: 3.2,
    lights: [
      {
				// сверху
        position: [0, 5, 2],
        intensity: 10,
      },
      {
				// сзади правее
        position: [2, 0, -2],
        intensity: 25,
      },
			{
        // сзади левее
        position: [-3, 0, -2],
        intensity: 5,
      },
      {
				// спереди левее
        position: [-1.5,0, 4],
        intensity: 5,
      },
    ],
  },
};



function initHeroIcon(canvas, modelSrc, preset) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    30,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );
  camera.position.z = preset.cameraZ;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
	renderer.setClearColor(0x000000, 0);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	// ================= LIGHT (from presets) =================
	if (preset.lights && Array.isArray(preset.lights)) {
	  preset.lights.forEach(({ position, intensity }) => {
	    const light = new THREE.DirectionalLight(0xffffff, intensity);
	    light.position.set(...position);

	    light.target.position.set(0, 0, 0);
	    scene.add(light);
	    scene.add(light.target);
	  });
	}


	// ================= STATE =================
	let isAnimating = false;
	let rotationStart = 0;
	let rotationFrom = 0;
	let rotationTo = 0;

	let rafId = null;
	let isRendering = false;

  // ================= MODEL =================
  let model;

  const loader = new GLTFLoader();
  loader.load(modelSrc, (gltf) => {
		 console.log('GLB cameras:', gltf.cameras);
  console.log('GLB scene children:', gltf.scene.children);

    model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxSide = Math.max(size.x, size.y, size.z);
    const scale = preset.targetSize / maxSide;

    model.scale.setScalar(scale);

    box.setFromObject(model);
    const center = new THREE.Vector3();
    box.getCenter(center);
    model.position.sub(center);

  scene.add(model);

	if (preset === HERO_3D_PRESETS.hero) {
	  isRendering = true;

	  requestAnimationFrame((t1) => {
	    render(t1);

	    requestAnimationFrame((t2) => {
	      render(t2);
	      rotateOnce(true);

	      const icon = canvas.closest('.list-hero__icon');
				if (icon) {
				  icon.classList.add('is-visible');
				}

	    });
	  });
	}


  });


 	function rotateOnce(force = false) {
	  if (!model) return;

	  // для hero — запрещаем перезапуск во время анимации
	  if (preset === HERO_3D_PRESETS.hero && isAnimating) return;

	  // для process можно форсить
	  if (isAnimating && !force) return;

	  isAnimating = true;
	  rotationStart = performance.now();
	  rotationFrom = model.rotation.y;
	  rotationTo = rotationFrom + ROTATION_ANGLE;
	}


  if (preset === HERO_3D_PRESETS.hero) {
    canvas.addEventListener('mouseenter', rotateOnce);
  }

  // ================= RENDER LOOP =================
  function render(time) {
    if (!isRendering) return;

    if (isAnimating && model) {
      const progress = Math.min(
        (time - rotationStart) / ROTATION_DURATION,
        1
      );

      model.rotation.y =
        rotationFrom + (rotationTo - rotationFrom) * progress;

      if (progress === 1) {
        model.rotation.y = rotationTo;
        isAnimating = false;
      }
    }

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(render);
  }

  // ================= CONTROLLER =================
  return {
    play() {
      if (!model) return;

      if (!isRendering) {
        isRendering = true;
        render(performance.now());
      }

      rotateOnce(true);
    },

    reset() {
      if (!model) return;

      isRendering = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      model.rotation.y = 0;
      isAnimating = false;

      renderer.render(scene, camera);
    },
  };
}

function lazyInit3D(canvas, preset) {
  let initialized = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !initialized) {
          initialized = true;

          const modelSrc = canvas.dataset['3dSrc'];
          if (!modelSrc) return;

          const controller = initHeroIcon(canvas, modelSrc, preset);
          canvas._threeController = controller;

          observer.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: '1500px', // подгружаем заранее
      threshold: 0.1,
    }
  );

  observer.observe(canvas);
}

document.querySelectorAll('.hero-3d').forEach((canvas) => {
  const modelSrc = canvas.dataset['3dSrc'];
  if (modelSrc) {
    initHeroIcon(canvas, modelSrc, HERO_3D_PRESETS.hero);
  }
});

document.querySelectorAll('.hero-3d-process').forEach((canvas) => {
  lazyInit3D(canvas, HERO_3D_PRESETS.process);
});

// document.querySelectorAll('.hero-3d-process').forEach((canvas) => {
//   const modelSrc = canvas.dataset['3dSrc'];
//   if (modelSrc) {
//     const controller = initHeroIcon(
//       canvas,
//       modelSrc,
//       HERO_3D_PRESETS.process
//     );
//     canvas._threeController = controller;
//   }
// });



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



	// // === HERO LIST VIDEO HOVER REPLAY ==================================
	// const heroVideosList = document.querySelectorAll(".list-hero__item video");

	// if (heroVideosList.length) {
	// 	heroVideosList.forEach(video => {
	// 		let firstPlayDone = false;
	// 		let canReplayOnHover = false;

	// 		video.addEventListener("ended", () => {
	// 			if (!firstPlayDone) {
	// 				firstPlayDone = true;
	// 				canReplayOnHover = true;
	// 			} else {
	// 				canReplayOnHover = true;
	// 			}
	// 		});

	// 		video.addEventListener("mouseenter", () => {
	// 			if (!firstPlayDone) return; 
	// 			if (!canReplayOnHover) return; 

	// 			canReplayOnHover = false; 
	// 			video.currentTime = 0;
	// 			video.play();
	// 		});
	// 	});
	// }




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
	// const heroBlock = document.querySelector("[data-video-hero]");
	// if (heroBlock) {
	// 	const playBtn = heroBlock.querySelector(".video-hero__play");
	// 	const previewWrapper = heroBlock.querySelector(".video-hero__preview");
	// 	const previewVideo = previewWrapper?.querySelector("video");
	// 	const mainWrapper = heroBlock.querySelector(".video-hero__main");
	// 	const mainVideo = mainWrapper?.querySelector("video");
	
	// 	if (!playBtn || !previewVideo || !mainVideo) return;
	
	// 	// --- Начальные состояния ---
	// 	mainVideo.pause(); 
	// 	previewVideo.muted = true; 
	// 	// previewVideo.play().catch(() => {});
	// 	let mainWasPlayedOnce = false;
	
	// 	// --- Функция запуска основного видео ---
	// 	function playMainVideo() {
	// 		mainWasPlayedOnce = true;
	
	// 		// 1. Скрываем кнопку
	// 		playBtn.style.opacity = "0";
	// 		playBtn.style.pointerEvents = "none";
	
	// 		// 2. Скрываем превью
	// 		previewWrapper.classList.add("--not-active");
	// 		previewVideo.pause();
	
	// 		// 3. Запускаем основное
	// 		mainVideo.play();
	// 	}
	
	// 	// --- Функция паузы/плея после первого запуска ---
	// 	function toggleMainPlayback() {
	// 		if (mainVideo.paused) {
	// 			mainVideo.play();
	// 			playBtn.style.opacity = "0";
	// 			playBtn.style.pointerEvents = "none";
	// 		} else {
	// 			mainVideo.pause();
	// 			playBtn.style.opacity = "1";
	// 			playBtn.style.pointerEvents = "auto";
	// 		}
	// 	}
	
	// 	// --- Обработчик клика по всему блоку ---
	// 	heroBlock.addEventListener("click", () => {
	// 		// Первый клик — запускаем основное
	// 		if (!mainWasPlayedOnce) {
	// 			playMainVideo();
	// 			return;
	// 		}
	
	// 		// Дальше — только управление основным
	// 		toggleMainPlayback();
	// 	});
	
	// 	// --- Поведение при выходе блока из вьюпорта ---
	// 	const observer2 = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach(entry => {
	// 				if (!entry.isIntersecting) {
	// 					// Останавливаем только основное видео
	// 					if (!mainVideo.paused) {
	// 						mainVideo.pause();
	// 						if (mainWasPlayedOnce) {
	// 							playBtn.style.opacity = "1";
	// 							playBtn.style.pointerEvents = "auto";
	// 						}
	// 					}
	// 				}
	// 			});
	// 		}, {
	// 			threshold: 0.2
	// 		}
	// 	);
	
	// 	observer2.observe(heroBlock);
	// };


const heroBlock = document.querySelector("[data-video-hero]");
if (heroBlock) {
	const playBtn = heroBlock.querySelector(".video-hero__play");
	const previewWrapper = heroBlock.querySelector(".video-hero__preview");
	const previewVideo = previewWrapper?.querySelector("video");
	const mainWrapper = heroBlock.querySelector(".video-hero__main");
	const mainVideo = mainWrapper?.querySelector("video");

	if (!playBtn || !previewVideo || !mainVideo) return;

	const isTouch = isMobile.any();

	let mainWasPlayedOnce = false;
	let mobileInteractionDone = false;
	let mobileAutoFullscreenDone = false;

	mainVideo.pause();
	mainVideo.muted = true;
	mainVideo.controls = false;
	mainVideo.volume = 0.3;

	previewVideo.muted = true;

	function hidePlayBtn() {
		playBtn.style.opacity = "0";
		playBtn.style.pointerEvents = "none";
	}

	function showPlayBtn() {
		playBtn.style.opacity = "1";
		playBtn.style.pointerEvents = "auto";
	}

	// desktop — синхронизация с play/pause
	function updatePlayButtonDesktop() {
		if (mainVideo.paused) {
			showPlayBtn();
		} else {
			hidePlayBtn();
		}
	}

	// MOBILE FULLSCREEN (ONCE)
	async function openFullscreenOnceOnMobile() {
		if (!isTouch || mobileAutoFullscreenDone) return;

		mobileAutoFullscreenDone = true;

		try {
			// iOS Safari
			if (typeof mainVideo.webkitEnterFullscreen === "function") {
				mainVideo.webkitEnterFullscreen();
				return;
			}

			// Android / Chrome / others
			if (mainVideo.requestFullscreen) {
				await mainVideo.requestFullscreen();
			}
		} catch (e) {
			// fullscreen может быть запрещён — игнорируем
		}
	}

	// START MAIN VIDEO
	function playMainVideo() {
		mainWasPlayedOnce = true;

		previewWrapper.classList.add("--not-active");
		previewVideo.pause();

		mainVideo.muted = false;
		mainVideo.volume = 0.3;
		mainVideo.controls = true;

		mainVideo.play();
		hidePlayBtn();

		if (isTouch) {
			mobileInteractionDone = true;
			openFullscreenOnceOnMobile(); // авто-fullscreen один раз
		}
	}

	// TOGGLE (DESKTOP ONLY)
	function toggleMainPlayback() {
		if (mainVideo.paused) {
			mainVideo.play();
		} else {
			mainVideo.pause();
		}
		updatePlayButtonDesktop();
	}

	// HERO CLICK
	heroBlock.addEventListener("click", (e) => {
		if (e.target.closest("video")) return;

		// TOUCH — только первый запуск
		if (isTouch) {
			if (!mobileInteractionDone) {
				playMainVideo();
			}
			return;
		}

		// DESKTOP
		if (!mainWasPlayedOnce) {
			playMainVideo();
			return;
		}

		toggleMainPlayback();
	});

	// VIDEO CLICK
	mainVideo.addEventListener("click", (e) => {
		if (isTouch) {
			// на тач — только первый клик
			if (!mobileInteractionDone) {
				e.preventDefault();
				playMainVideo();
			}
			return;
		}

		// desktop
		e.preventDefault();
		toggleMainPlayback();
	});

	// DESKTOP: sync with native controls
	if (!isTouch) {
		mainVideo.addEventListener("play", updatePlayButtonDesktop);
		mainVideo.addEventListener("pause", updatePlayButtonDesktop);
	}

	const observer2 = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting && !mainVideo.paused) {
					mainVideo.pause();

					if (!isTouch) {
						showPlayBtn();
					}
				}
			});
		},
		{ threshold: 0.2 }
	);

	observer2.observe(heroBlock);
}




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
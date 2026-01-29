import { FLS, isMobile } from "@js/common/functions.js";
import Lenis from 'lenis'



// gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis({
//   autoRaf: false, // Отключаем autoRaf, чтобы Lenis работал через GSAP ticker
//   lerp: 0.08, // значение для гладкого скролла
//   wheelMultiplier: 1, // Контроль скорости прокрутки
//   touchMultiplier: 2,
// });


// lenis.on('scroll', ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// // Отключаем лаг-гашение, чтобы всё было отзывчиво
// gsap.ticker.lagSmoothing(0);







/* ===================== LENIS (MANAGED) ===================== */
let lenis = null;

function createLenis({ autoRaf }) {
  // если был старый Lenis — уничтожаем
  if (lenis) {
    try { lenis.destroy(); } catch (e) {}
    lenis = null;
  }

  lenis = new Lenis({
    autoRaf,
    lerp: 0.08,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  lenis.start();
  return lenis;
}


/* ===================== GSAP STATE ===================== */
let gsapEnabled = false;
let gsapTicker = null;
let ScrollTriggerRef = null;
let gsapTweens = [];
let onLenisScroll = null;


/* ===================== HELPERS ===================== */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function clearGsapSectionStyles() {
  const sections = document.querySelectorAll("[data-gsap]");
  const trustImgs = document.querySelectorAll(".trust__img img");
  const fillFormImgs = document.querySelectorAll(".fill-form__images img");

  if (!window.gsap) {
    [...sections, ...trustImgs, ...fillFormImgs].forEach(el => {
      el.style.transform = "";
      el.style.willChange = "";
    });
    return;
  }

  // очистить стили при рисайзе
  window.gsap.set([...sections, ...trustImgs, ...fillFormImgs], {
    clearProps: "transform,willChange"
  });
}

function initGsapAnimations(gsap, ScrollTrigger) {
  // kill old tweens
  gsapTweens.forEach(t => t.kill());
  gsapTweens = [];
  ScrollTrigger.getAll().forEach(t => t.kill());

  document.querySelectorAll("[data-gsap]").forEach(section => {
    const prevSection = section.previousElementSibling;
    if (!prevSection) return;

    const endValue = section.dataset.gsapEnd || "35%";
    const startOffset = parseInt(section.dataset.gsapStartOffset || 30, 10);

    const twSection = gsap.to(section, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: prevSection,
        start: `bottom bottom+=${startOffset}`,
        end: `bottom ${endValue}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
      }
    });
    gsapTweens.push(twSection);

    const trustImg = section.querySelector(".trust__img img");
    if (trustImg) {
      const twTrust = gsap.to(trustImg, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: prevSection,
          start: `bottom bottom+=${startOffset}`,
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        }
      });
      gsapTweens.push(twTrust);
    }

    const fillFormImg = section.querySelector(".fill-form__images img");
    if (fillFormImg) {
      const twFill = gsap.to(fillFormImg, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: prevSection,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        }
      });
      gsapTweens.push(twFill);
    }
  });

  // refresh после того как DOM стабилизировался
  setTimeout(() => ScrollTrigger.refresh(), 150);
}


/* ===================== ENABLE / DISABLE GSAP ===================== */
async function enableGsap() {
  if (gsapEnabled) return;

  // 1) Lenis должен быть в режиме без autoRaf, потому что RAF идёт через gsap.ticker
  createLenis({ autoRaf: false });

  // 2) Load GSAP
  await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js");
  await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js");

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTriggerRef = ScrollTrigger;

  // 3) Sync Lenis -> ScrollTrigger
  onLenisScroll = () => ScrollTrigger.update();
  lenis.on("scroll", onLenisScroll);

  // 4) Drive Lenis via GSAP ticker
  gsapTicker = (time) => {
    // GSAP time in seconds, Lenis wants ms
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(gsapTicker);
  gsap.ticker.lagSmoothing(0);

  // 5) Init animations
  initGsapAnimations(gsap, ScrollTrigger);

  gsapEnabled = true;
}

function disableGsap() {
  if (!gsapEnabled) {
    // даже если gsap уже выключен — убедимся что Lenis в mobile режиме живой
    if (!lenis || lenis.options?.autoRaf === false) {
      createLenis({ autoRaf: true });
    }
    return;
  }

  // 1) Kill tweens + triggers
  gsapTweens.forEach(t => t.kill());
  gsapTweens = [];

  ScrollTriggerRef?.getAll().forEach(t => t.kill());
  ScrollTriggerRef?.clearScrollMemory?.();

  // 2) Unhook ticker
  if (gsapTicker && window.gsap) {
    window.gsap.ticker.remove(gsapTicker);
    gsapTicker = null;
  }

  // 3) Unhook Lenis scroll event
  if (onLenisScroll && lenis?.off) {
    lenis.off("scroll", onLenisScroll);
    onLenisScroll = null;
  }

  // 4) Clear inline GSAP props
  clearGsapSectionStyles();

  // 5) 🔥 Главное: пересоздаём Lenis под mobile (autoRaf true)
  createLenis({ autoRaf: true });

  gsapEnabled = false;
}


/* ===================== BREAKPOINT ===================== */
const mq = window.matchMedia("(min-width: 30.061em)");

function handleBreakpoint(e) {
  if (e.matches) {
    enableGsap();
  } else {
    disableGsap();
  }
}

mq.addEventListener("change", handleBreakpoint);

document.addEventListener("DOMContentLoaded", () => {
  // Создаём стартовый Lenis под текущий режим
  if (mq.matches) {
    enableGsap();
  } else {
    createLenis({ autoRaf: true });
  }
});


/* ===================== RESIZE / ORIENTATION (MOBILE SAFETY) ===================== */
// На iOS rotate иногда даёт серию resize → делаем защитный пересозданный lenis в mobile режиме
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    // если мы на мобилке (gsap выключен) — пересоздаём Lenis, чтобы scrollTo не умирал
    if (!mq.matches) {
      createLenis({ autoRaf: true });
    } else {
      // на десктопе просто refresh ScrollTrigger (если есть)
      ScrollTriggerRef?.refresh?.();
    }
  }, 250);
});


/* ===================== CLICK SCROLL (Lenis + optional GSAP transform) ===================== */
// document.addEventListener("click", (e) => {
//   const link = e.target.closest("[data-go-link]");
//   if (!link) return;

//   e.preventDefault();

//   const targetId = link.dataset.goLink;
//   const target = document.querySelector(`[data-go-id="${targetId}"]`);
//   if (!target || !lenis) return;

//   const offset = 30;

//   // Всегда считаем от реального DOM scrollY — он гарантированно актуален после rotate
//   const rect = target.getBoundingClientRect();
//   let targetY = rect.top + window.scrollY - offset;

//   // Если GSAP включён — учтём transform (только тогда!)
//   if (gsapEnabled && window.gsap) {
//     const style = window.getComputedStyle(target);
//     const matrix = style.transform;

//     if (matrix && matrix !== "none") {
//       const values = matrix.match(/matrix.*\((.+)\)/);
//       if (values) {
//         const parts = values[1].split(",");
//         const translateY = parseFloat(parts[5]);
//         if (!isNaN(translateY)) {
//           targetY -= translateY;
//         }
//       }
//     }
//   }

//   const current = window.scrollY;
//   const distance = Math.abs(targetY - current);

//   const duration =
//     distance < 300 ? 1.4 :
//     distance < 900 ? 1.8 :
//     2;

//   lenis.scrollTo(targetY, {
//     duration,
//     easing: (t) => 1 - Math.pow(1 - t, 4),
//   });
// });


function getTargetScrollY(target, offset = 30) {
  const rect = target.getBoundingClientRect();
  let targetY = rect.top + window.scrollY - offset;

  // учитываем GSAP transform ТОЛЬКО если он реально включён
  if (gsapEnabled && window.gsap) {
    const style = window.getComputedStyle(target);
    const matrix = style.transform;

    if (matrix && matrix !== "none") {
      const values = matrix.match(/matrix.*\((.+)\)/);
      if (values) {
        const parts = values[1].split(",");
        const translateY = parseFloat(parts[5]);
        if (!isNaN(translateY)) {
          targetY -= translateY;
        }
      }
    }
  }

  return targetY;
}

function scrollToTarget(target, { updateHash = false, duration = null } = {}) {
  if (!target || !lenis) return;

  const targetId = target.dataset.goId;
  const targetY = getTargetScrollY(target);
  const current = window.scrollY;
  const distance = Math.abs(targetY - current);

  const finalDuration = duration ?? (
    distance < 300 ? 1.4 :
    distance < 900 ? 1.8 :
    2
  );

  if (updateHash && targetId) {
    history.pushState(null, "", `#${targetId}`);
  }

  lenis.scrollTo(targetY, {
    duration: finalDuration,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-go-link]");
  if (!link) return;

  e.preventDefault();

  const targetId = link.dataset.goLink;
  const target = document.querySelector(`[data-go-id="${targetId}"]`);
  if (!target) return;

  scrollToTarget(target, { updateHash: true });
});

window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (!hash) return;

  const targetId = hash.slice(1);
  const target = document.querySelector(`[data-go-id="${targetId}"]`);
  if (!target) return;

  // даём layout и Lenis стабилизироваться
  requestAnimationFrame(() => {
    scrollToTarget(target, { duration: 2 });
  });
});








document.addEventListener("DOMContentLoaded", () => {

	// document.querySelectorAll("[data-gsap], .trust__img img, .fill-form__images img")
  // .forEach(el => {
  //   el.style.willChange = "transform";
  // });


	// == index sections ===============
	const page = document.querySelector('.page--index');
	if (!page) return;

	const children = Array.from(page.children);
	const maxZ = children.length;

	children.forEach((child, i) => {
		child.style.zIndex = maxZ - i;
	});


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


	// === RESIZE OBSERVER ==========================================
	let lastWidth2 = window.innerWidth;
	let resizeTimeout = null;

	const resizeObserver2 = new ResizeObserver(entries => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			const currentWidth = window.innerWidth;
			if (currentWidth !== lastWidth2) {
				lastWidth2 = currentWidth;
				// createGsapAnim();
				
				if (mqDesktop.matches) {
      	  setMaxMinHeight();
      	} 

			}
		}, 250);
	});
	resizeObserver2.observe(document.body);


	// // == animations list-hero__item ===========
	// const items = document.querySelectorAll(".list-hero__item");
	// if (items.length) {
	// 	let animationInterval = null;
	// 	const MQ = window.matchMedia("(max-width: 48.061em)");
	// 	const DURATION = 700;
	// 	const DELAY = 1500;
	
	// 	function showSequentially() {
	// 		let index = 0;
	
	// 		function animateNext() {
	// 			// Сбрасываем все
	// 			items.forEach(item => {
	// 				item.style.transition = "none";
	// 				item.style.opacity = "0";
	// 				item.style.transform = "translate(-50%, 100%)";
	// 			});
	
	// 			requestAnimationFrame(() => {
	// 				const item = items[index];
	// 				item.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
	// 				item.style.opacity = "1";
	// 				item.style.transform = "translate(-50%, 0)";
	// 			});
	
	// 			index = (index + 1) % items.length;
	
	// 			// Следующий элемент через 1 сек + время анимации
	// 			clearTimeout(animationInterval);
	// 			animationInterval = setTimeout(animateNext, DELAY + DURATION);
	// 		}
	
	// 		animateNext();
	// 	}
	
	// 	function stopAnimation() {
	// 		clearTimeout(animationInterval);
	// 		animationInterval = null;
	// 		items.forEach(item => {
	// 			item.style.transition = "";
	// 			item.style.opacity = "";
	// 			item.style.transform = "";
	// 		});
	// 	}
	
	// 	function checkAnimation() {
	// 		if (MQ.matches) {
	// 			if (!animationInterval) showSequentially();
	// 		} else {
	// 			stopAnimation();
	// 		}
	// 	}
	
	// 	checkAnimation();
	// 	MQ.addEventListener("change", checkAnimation);
	// }

  //анимация в Header =========================
	// const aboutHeader = document.querySelectorAll(".about-header__item");
	// if (aboutHeader.length) {
	// 	let animationInterval = null;
	// 	const DURATION = 700;
	// 	const DELAY = 1500;
	
	// 	function showSequentially() {
	// 		let index = 0;
	
	// 		function animateNext() {
	// 			// Сбрасываем все
	// 			aboutHeader.forEach(item => {
	// 				item.style.transition = "none";
	// 				item.style.opacity = "0";
	// 				item.style.transform = "translate(0%, 100%)";
	// 			});
	
	// 			requestAnimationFrame(() => {
	// 				const item = aboutHeader[index];
	// 				item.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
	// 				item.style.opacity = "1";
	// 				item.style.transform = "translate(0%, 0%)";
	// 			});
	
	// 			index = (index + 1) % aboutHeader.length;
	
	// 			// Следующий элемент через 1 сек + время анимации
	// 			clearTimeout(animationInterval);
	// 			animationInterval = setTimeout(animateNext, DELAY + DURATION);
	// 		}
	
	// 		animateNext();
	// 	}
	
  //   showSequentially();
	// }

  const aboutHeaderItems = Array.from(document.querySelectorAll(".about-header__item"));

if (aboutHeaderItems.length) {
	let animationTimer = null;
	const DURATION = 700;
	const DELAY = 1500;

	const mq = window.matchMedia("(max-width: 46.936em)");

	let itemsForAnim = [];
	let index = 0;

	function stopAnimation() {
		clearTimeout(animationTimer);
		animationTimer = null;
	}

	function resetStyles(items) {
		items.forEach(item => {
			item.style.transition = "none";
			item.style.opacity = "0";
			item.style.transform = "translate(0%, 100%)";
		});
	}

	function setHiddenState(isMobile) {
		aboutHeaderItems.forEach(item => {
			if (item.classList.contains("item-pc-hidden")) {
				item.style.display = isMobile ? "" : "none";
			}
		});
	}

	function buildItemsList(isMobile) {
		return isMobile ? aboutHeaderItems : aboutHeaderItems.filter(item => !item.classList.contains("item-pc-hidden"));
	}

	function animateNext() {
		if (!itemsForAnim.length) return;

		resetStyles(itemsForAnim);

		requestAnimationFrame(() => {
			const item = itemsForAnim[index];
			item.style.transition = `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`;
			item.style.opacity = "1";
			item.style.transform = "translate(0%, 0%)";
		});

		index = (index + 1) % itemsForAnim.length;

		stopAnimation();
		animationTimer = setTimeout(animateNext, DELAY + DURATION);
	}

	function startAnimation(isMobile) {
		stopAnimation();

		setHiddenState(isMobile);

    itemsForAnim = buildItemsList(isMobile);

		index = 0;

		animateNext();
	}

	startAnimation(mq.matches);

	mq.addEventListener("change", (e) => {
		startAnimation(e.matches);
	});
}



	// == NATIVE parallax mouse section .portfolio =================
(function () {
  const portfolio = document.querySelector('.portfolio');
  if (!portfolio) return;

  // // Проверяем, есть ли мышь (desktop)
  // const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // if (!hasMouse) return;

  let mouseX = 0;
  let targetX = 0;
  let rafId = null;
  let isActive = false;

  const strength = 40; // max offset (px)
  const easing = 0.03;

  let centerX = window.innerWidth / 2;

  function onResize() {
    centerX = window.innerWidth / 2;
  }

  function onMouseMove(e) {
    const offset = (e.clientX - centerX) / centerX; // -1..1
    targetX = offset * strength;
  }

  function render() {
    mouseX += (targetX - mouseX) * easing;
    portfolio.style.transform = `translate3d(${mouseX}px, 0, 0)`;
    rafId = requestAnimationFrame(render);
  }

  function start() {
    if (isActive) return;
    isActive = true;
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);
  }

  function stop() {
    isActive = false;
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // === IntersectionObserver ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.isIntersecting ? start() : stop();
    });
  }, { threshold: 0.2 });

  observer.observe(portfolio);

  // === Resize ===
  window.addEventListener('resize', onResize);

  // === Optimizations ===
  portfolio.style.willChange = 'transform';
  portfolio.style.backfaceVisibility = 'hidden';
})();


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

	  // // подгружаем видео 
	  // const sources = mainVideo.querySelectorAll('source');
	  // sources.forEach(source => {
	  //   if (!source.src) {
	  //     source.src = source.dataset.src;
	  //   }
	  // });
	  // mainVideo.load();

	  previewWrapper.classList.add("--not-active");
	  previewVideo.pause();

	  mainVideo.muted = false;
	  mainVideo.volume = 0.3;
	  mainVideo.controls = true;

	  mainVideo.play();
	  hidePlayBtn();

	  if (isTouch) {
	    mobileInteractionDone = true;
	    openFullscreenOnceOnMobile();
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


	
});

const videosLazy = document.querySelectorAll('[data-lazy-video]');

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const video = entry.target;
    const sources = video.querySelectorAll('source');

    sources.forEach(source => {
      source.src = source.dataset.src;
    });

    video.load();
    video.play().catch(() => {});

    observer.unobserve(video);
  });
}, {
  rootMargin: '300px'
});

videosLazy.forEach(video => io.observe(video));

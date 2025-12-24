import { FLS, isMobile } from "@js/common/functions.js";
import Lenis from 'lenis'
// import { gsap, ScrollTrigger } from "gsap/all";



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




// /* ===================== HELPERS ===================== */
// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     if (document.querySelector(`script[src="${src}"]`)) {
//       resolve();
//       return;
//     }

//     const s = document.createElement("script");
//     s.src = src;
//     s.async = true;
//     s.onload = resolve;
//     s.onerror = reject;
//     document.head.appendChild(s);
//   });
// }

// /* ===================== GSAP INIT ===================== */
// async function initGsapIfDesktop() {
//   const mq = window.matchMedia("(min-width: 30.061em)");
//   if (!mq.matches) return; // ⛔ мобилки — GSAP НЕ грузим

//   // 👉 Загружаем GSAP только сейчас
//   await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js");
//   await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js");

//   const { gsap, ScrollTrigger } = window;

//   gsap.registerPlugin(ScrollTrigger);

//   /* ===================== LENIS ===================== */
//   const lenis = new Lenis({
//     autoRaf: false,
//     lerp: 0.08,
//     wheelMultiplier: 1,
//     touchMultiplier: 2,
//   });

//   lenis.on("scroll", ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing(0);

//   document.querySelectorAll("[data-gsap], .trust__img img, .fill-form__images img")
//     .forEach(el => el.style.willChange = "transform");

//   const page = document.querySelector(".page--index");
//   if (!page) return;

//   const children = Array.from(page.children);
//   const maxZ = children.length;
//   children.forEach((child, i) => {
//     child.style.zIndex = maxZ - i;
//   });

//   let refreshTimeout;
//   function safeRefresh() {
//     clearTimeout(refreshTimeout);
//     refreshTimeout = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 150);
//   }

//   function createGsapAnim() {
//     ScrollTrigger.getAll().forEach(t => t.kill());

//     document.querySelectorAll("[data-gsap]").forEach(section => {
//       const prevSection = section.previousElementSibling;
//       if (!prevSection) return;

//       const endValue = section.dataset.gsapEnd || "35%";
//       const startOffset = parseInt(section.dataset.gsapStartOffset || 30, 10);

//       gsap.to(section, {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: prevSection,
//           start: `bottom bottom+=${startOffset}`,
//           end: `bottom ${endValue}`,
//           scrub: 0.6,
//           invalidateOnRefresh: true,
//         }
//       });

//       const trustImg = section.querySelector(".trust__img img");
//       if (trustImg) {
//         gsap.to(trustImg, {
//           y: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: prevSection,
//             start: `bottom bottom+=${startOffset}`,
//             end: "bottom top",
//             scrub: 0.6,
//             invalidateOnRefresh: true,
//           }
//         });
//       }

//       const fillFormImg = section.querySelector(".fill-form__images img");
//       if (fillFormImg) {
//         gsap.to(fillFormImg, {
//           y: 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: prevSection,
//             start: "bottom bottom",
//             end: "bottom top",
//             scrub: 0.6,
//             invalidateOnRefresh: true,
//           }
//         });
//       }
//     });

//     safeRefresh();
//   }

//   createGsapAnim();

//   mq.addEventListener("change", e => {
//     if (e.matches) createGsapAnim();
//   });
// }

// /* ===================== START ===================== */
// document.addEventListener("DOMContentLoaded", initGsapIfDesktop);









// /* ===================== LENIS (GLOBAL) ===================== */
// const lenis = new Lenis({
//   autoRaf: true,  
//   lerp: 0.08,
//   wheelMultiplier: 1,
//   touchMultiplier: 2,
// });


// let gsapEnabled = false;
// let gsapTicker = null;
// let ScrollTriggerRef = null;
// let gsapTweens = [];
// let onLenisScroll = null;



// function hardResetLenis() {
//   lenis.stop();

//   const currentScroll = window.scrollY;

//   lenis.scrollTo(currentScroll, { immediate: true });

//   lenis.start();
// }



// /* ===================== HELPERS ===================== */
// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     if (document.querySelector(`script[src="${src}"]`)) {
//       resolve();
//       return;
//     }

//     const s = document.createElement("script");
//     s.src = src;
//     s.async = true;
//     s.onload = resolve;
//     s.onerror = reject;
//     document.head.appendChild(s);
//   });
// }

// async function enableGsap() {
//   if (gsapEnabled) return;

//   await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js");
//   await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js");

//   const { gsap, ScrollTrigger } = window;
//   gsap.registerPlugin(ScrollTrigger);

//   ScrollTriggerRef = ScrollTrigger;

//   lenis.options.autoRaf = false;
//   lenis.start();

//   onLenisScroll = () => ScrollTrigger.update();
// 	lenis.on("scroll", onLenisScroll);


//   gsapTicker = (time) => {
//     lenis.raf(time * 1000);
//   };
//   gsap.ticker.add(gsapTicker);
//   gsap.ticker.lagSmoothing(0);

//   initGsapAnimations(gsap, ScrollTrigger);

//   gsapEnabled = true;
// }

// function disableGsap() {
//   if (!gsapEnabled) return;

//   gsapTweens.forEach(t => t.kill());
//   gsapTweens = [];

//   ScrollTriggerRef?.getAll().forEach(t => t.kill());
//   ScrollTriggerRef?.clearScrollMemory?.();

//   if (gsapTicker && window.gsap) {
//     window.gsap.ticker.remove(gsapTicker);
//     gsapTicker = null;
//   }

//   if (onLenisScroll) {
//     lenis.off?.("scroll", onLenisScroll);
//     onLenisScroll = null;
//   }

//   // 🔥 ВАЖНО: очистка inline-стилей GSAP
//   clearGsapSectionStyles();

//   lenis.options.autoRaf = true;
//   lenis.start();

//   gsapEnabled = false;
// }


// function clearGsapSectionStyles() {
//   const sections = document.querySelectorAll("[data-gsap]");
//   const trustImgs = document.querySelectorAll(".trust__img img");
//   const fillFormImgs = document.querySelectorAll(".fill-form__images img");

//   if (!window.gsap) {
//     [...sections, ...trustImgs, ...fillFormImgs].forEach(el => {
//       el.style.transform = "";
//       el.style.willChange = "";
//     });
//     return;
//   }

//   gsap.set(
//     [...sections, ...trustImgs, ...fillFormImgs],
//     { clearProps: "all" }
//   );
// }

// function initGsapAnimations(gsap, ScrollTrigger) {

//   let refreshTimeout;
//   function safeRefresh() {
//     clearTimeout(refreshTimeout);
//     refreshTimeout = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 150);
//   }

//   // kill old tweens
//   gsapTweens.forEach(t => t.kill());
//   gsapTweens = [];

//   ScrollTrigger.getAll().forEach(t => t.kill());

//   document.querySelectorAll("[data-gsap]").forEach(section => {
//     const prevSection = section.previousElementSibling;
//     if (!prevSection) return;

//     const endValue = section.dataset.gsapEnd || "35%";
//     const startOffset = parseInt(section.dataset.gsapStartOffset || 30, 10);

//     const twSection = gsap.to(section, {
//       y: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: prevSection,
//         start: `bottom bottom+=${startOffset}`,
//         end: `bottom ${endValue}`,
//         scrub: 0.6,
//         invalidateOnRefresh: true,
//       }
//     });
//     gsapTweens.push(twSection);

//     const trustImg = section.querySelector(".trust__img img");
//     if (trustImg) {
//       const twTrust = gsap.to(trustImg, {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: prevSection,
//           start: `bottom bottom+=${startOffset}`,
//           end: "bottom top",
//           scrub: 0.6,
//           invalidateOnRefresh: true,
//         }
//       });
//       gsapTweens.push(twTrust);
//     }

//     const fillFormImg = section.querySelector(".fill-form__images img");
//     if (fillFormImg) {
//       const twFill = gsap.to(fillFormImg, {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: prevSection,
//           start: "bottom bottom",
//           end: "bottom top",
//           scrub: 0.6,
//           invalidateOnRefresh: true,
//         }
//       });
//       gsapTweens.push(twFill);
//     }
//   });

//   safeRefresh();
// }

// const mq = window.matchMedia("(min-width: 30.061em)");

// function handleBreakpoint(e) {
//   if (e.matches) {
//     enableGsap();
//   } else {
//     disableGsap();
//   }
// 	hardResetLenis();
// }

// let resizeTimeout;

// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     hardResetLenis();
//   }, 250);
// });


// mq.addEventListener("change", handleBreakpoint);

// document.addEventListener("DOMContentLoaded", () => {
//   handleBreakpoint(mq);
// });


// document.addEventListener("click", (e) => {
//   const link = e.target.closest("[data-go-link]");
//   if (!link) return;

//   e.preventDefault();

//   const targetId = link.dataset.goLink;
//   const target = document.querySelector(`[data-go-id="${targetId}"]`);
//   if (!target) return;

//   const offset = 30;

//   const rect = target.getBoundingClientRect();
//   // let targetY = rect.top + lenis.scroll - offset;
// 	const currentScroll =
//   typeof lenis.scroll === "number"
//     ? lenis.scroll
//     : window.scrollY;

// 	let targetY = rect.top + currentScroll - offset;


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

//   const distance = Math.abs(targetY - lenis.scroll);

//   const duration =
//     distance < 300 ? 1.4 :
//     distance < 900 ? 1.8 :
//     2;

//   lenis.scrollTo(targetY, {
//     duration,
//     easing: (t) => 1 - Math.pow(1 - t, 4),
//   });
// });






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
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-go-link]");
  if (!link) return;

  e.preventDefault();

  const targetId = link.dataset.goLink;
  const target = document.querySelector(`[data-go-id="${targetId}"]`);
  if (!target || !lenis) return;

  const offset = 30;

  // Всегда считаем от реального DOM scrollY — он гарантированно актуален после rotate
  const rect = target.getBoundingClientRect();
  let targetY = rect.top + window.scrollY - offset;

  // Если GSAP включён — учтём transform (только тогда!)
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

  const current = window.scrollY;
  const distance = Math.abs(targetY - current);

  const duration =
    distance < 300 ? 1.4 :
    distance < 900 ? 1.8 :
    2;

  lenis.scrollTo(targetY, {
    duration,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });
});








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

	// // == GSAP animations

	// let refreshTimeout;
	// function safeRefresh() {
	//   clearTimeout(refreshTimeout);
	//   refreshTimeout = setTimeout(() => {
	//     ScrollTrigger.refresh();
	//   }, 150);
	// }
	//  safeRefresh();

	// function createGsapAnim() {

	// 	// удаляем тригеры после срабатывания фунции (поворота экрана...)
	// 	ScrollTrigger.getAll().forEach(trigger => trigger.kill());

	// 	// GSAP animations only for viewport >= 30.061em
	// 	const GSAP_MQ = window.matchMedia('(min-width: 30.061em)');
	// 	if (!GSAP_MQ.matches) {
	// 		return;
	// 	}

	// 	document.querySelectorAll('[data-gsap]').forEach(section => {

	// 		const prevSection = section.previousElementSibling;
	// 		if (!prevSection) return;

	// 		// читаем значение из data-gsap-end
	// 		let endValue = section.dataset.gsapEnd || "35%";

	// 		// небольшой сдвиг старта анимации по скроллу (px) — даёт эффект задержки
	// 		const startOffset = parseInt(section.dataset.gsapStartOffset || 30, 10);

	// 		gsap.to(section, {
	// 			y: 0,
	// 			ease: "none",
	// 			scrollTrigger: {
	// 				trigger: prevSection,
	// 				start: `bottom bottom+=${startOffset}`,
	// 				end: `bottom ${endValue}`,
	// 				scrub: 0.6, // для более гладкой анимации вместо true
	// 				invalidateOnRefresh: true,
	// 			}
	// 		});


	// 		const trustImg = section.querySelector('.trust__img img');
	// 		if (trustImg) {
	// 			gsap.to(trustImg, {
	// 				y: 0,
	// 				duration: 2,
	// 				ease: 'none',
	// 				scrollTrigger: {
	// 					trigger: prevSection,
	// 					start: `bottom bottom+=${startOffset}`,
	// 					end: `bottom top`,
	// 					scrub: 0.6,
	// 					invalidateOnRefresh: true,
	// 				}
	// 			});
	// 		}
	// 		const fillFormImg = section.querySelector('.fill-form__images img');
	// 		if (fillFormImg) {
	// 			gsap.to(fillFormImg, {
	// 				y: 0,
	// 				// duration: 2,
	// 				ease: 'none',
	// 				scrollTrigger: {
	// 					trigger: prevSection,
	// 					start: `bottom bottom`,
	// 					end: `bottom top`,
	// 					scrub: 0.6,
	// 					invalidateOnRefresh: true,
	// 				}
	// 			});
	// 		}


	// 	});

	// 	// ScrollTrigger.refresh(); // Обновляем после создания всех триггеров
	// 	// let refreshTimeout;

	// 	// function safeRefresh() {
	// 	//   clearTimeout(refreshTimeout);
	// 	//   refreshTimeout = setTimeout(() => {
	// 	//     ScrollTrigger.refresh();
	// 	//   }, 150);
	// 	// }
	// 	// safeRefresh();

	// }
	// 	createGsapAnim();

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




	// // == animations parallax section .portfolio =================
	// const portfolio = document.querySelector('.portfolio');
	// if (portfolio) {

	// 	let mouseX = 0;
	// 	let targetX = 0;

	// 	const strength = 40;  // максимальное смещение (px)
	// 	const easing = 0.03;  // плавность

	// 	// центр экрана
	// 	let centerX = window.innerWidth / 2;
	// 	window.addEventListener('resize', () => {
	// 		centerX = window.innerWidth / 2;
	// 	});

	// 	// Ловим мышь (лёгкая логика)
	// 	window.addEventListener('mousemove', (e) => {
	// 		const offset = (e.clientX - centerX) / centerX; // -1..1
	// 		targetX = offset * strength;
	// 	}, { passive: true });

	// 	// === Рендер функция (используется GSAP ticker'ом) ===
	// 	function render() {
	// 		mouseX += (targetX - mouseX) * easing;
	// 		portfolio.style.transform = `translate3d(${mouseX}px,0,0)`;
	// 	}

	// 	// === Observer включает и выключает GSAP ticker ===
	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach(entry => {
	// 			if (entry.isIntersecting) {
	// 				gsap.ticker.add(render);
	// 			} else {
	// 				gsap.ticker.remove(render);
	// 			}
	// 		});
	// 	}, { threshold: 0.2 });

	// 	observer.observe(portfolio);

	// 	// браузерные оптимизации
	// 	try {
	// 		portfolio.style.willChange = 'transform';
	// 		portfolio.style.backfaceVisibility = 'hidden';
	// 	} catch (e) {}
	// }

	// == NATIVE parallax mouse section .portfolio =================
(function () {
  const portfolio = document.querySelector('.portfolio');
  if (!portfolio) return;

  // 👉 Проверяем, есть ли мышь (desktop)
  const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasMouse) return;

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




	// // Плавный скролл к блокам с учётом GSAP и Lenis
	// document.addEventListener("click", (e) => {
	// 	const link = e.target.closest("[data-go-link]");
	// 	if (link) {
	// 				e.preventDefault();
			
	// 				const targetId = link.dataset.goLink;
	// 				const target = document.querySelector(`[data-go-id="${targetId}"]`);
			
	// 				if (!target) return;
			
	// 				const offset = 30;
			
	// 				const rect = target.getBoundingClientRect();
	// 				let targetY = rect.top + window.scrollY - offset;
			
	// 				// 2. Если у блока есть transform → Учесть GSAP-смещение
	// 				const style = window.getComputedStyle(target);
	// 				const matrix = style.transform;
			
	// 				if (matrix && matrix !== "none") {
	// 					const values = matrix.match(/matrix.*\((.+)\)/);
	// 					if (values) {
	// 						const parts = values[1].split(',');
	// 						const translateY = parseFloat(parts[5]); // Y-смещение
			
	// 						if (!isNaN(translateY)) {
	// 							// translateY например "-113px" → надо вычесть
	// 							targetY -= translateY;
	// 						}
	// 					}
	// 				}
			
	// 				// 3. Динамическая плавность
	// 				const currentY = lenis.scroll;
	// 				const distance = Math.abs(targetY - currentY);
			
	// 				let duration;
	// 				if (distance < 300) {
	// 					duration = 1.4;
	// 				} else if (distance < 900) {
	// 					duration = 1.8;
	// 				} else {
	// 					duration = 2;
	// 				}
			
	// 				// 4. Плавный scroll с учетом GSAP transform
	// 				lenis.scrollTo(targetY, {
	// 					duration,
	// 					easing: (t) => 1 - Math.pow(1 - t, 4),
	// 				});

	// 	}
	// });

	


	
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

// Підключення функціоналу "аа"
import { addTouchAttr, addLoadedAttr, isMobile, FLS, slideUp, slideDown, slideToggle, dataMediaQueries } from "@js/common/functions.js"
import "./model.scss"

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   DirectionalLight,
//   MeshStandardMaterial,
//   Box3,
//   Vector3,
//   Color,
//   PMREMGenerator,
//   DoubleSide
// } from 'three';

// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




// const ROTATION_ANGLE = -Math.PI * 2;
// const ROTATION_DURATION = 5000;

// /* ================= PRESETS ================= */

// const HERO_3D_PRESETS = {
//   hero: {
//     targetSize: 1.2,
//     cameraZ: 3,
//     environment: { color: 0x404040, intensity: 1 },
//     material: { color: 0xE7E7E7, metalness: 1, roughness: 0.159 },
//     lights: [
//       { position: [0, 5, 2], intensity: 10 },
//       { position: [2, 0, -2], intensity: 25 },
//       { position: [-2, 0, -2], intensity: 12 },
//       { position: [-1.5, 0, 4], intensity: 5 },
//     ],
//   },

//   process: {
//     targetSize: 1.4,
//     cameraZ: 3.2,
//     environment: { color: 0x404040, intensity: 1 },
//     material: { color: 0xE7E7E7, metalness: 1, roughness: 0.159 },
//     lights: [
//       { position: [0, 5, 2], intensity: 10 },
//       { position: [2, 0, -2], intensity: 25 },
//       { position: [-2, 0, -2], intensity: 12 },
//       { position: [-1.5, 0, 4], intensity: 5 },
//     ],
//   },
// };

// /* ============== CANVAS CREATION ============== */

// function createCanvas(container) {
//   const canvas = document.createElement('canvas');
//   canvas.style.width = '100%';
//   canvas.style.height = '100%';
//   canvas.style.display = 'block';
//   container.appendChild(canvas);
//   return canvas;
// }

// /* ============== MAIN INIT ==================== */

// function initHeroIcon(container, modelSrc, preset) {
//   const canvas = createCanvas(container);

//   // const scene = new THREE.Scene();
// 	const scene = new Scene();

//   // const camera = new THREE.PerspectiveCamera(
//   const camera = new PerspectiveCamera(
//     30,
//     container.clientWidth / container.clientHeight,
//     0.1,
//     100
//   );
//   camera.position.z = preset.cameraZ;

//   // const renderer = new THREE.WebGLRenderer({
// 	const renderer = new WebGLRenderer({
//     canvas,
//     alpha: true,
//     antialias: true,
//   });

//   renderer.setClearColor(0x000000, 0);
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 	// ================= RESIZE OBSERVER (CANVAS) =================
// 	let resizeTimeout = null;

// 	const resizeObserver = new ResizeObserver(() => {
// 	  clearTimeout(resizeTimeout);

// 	  resizeTimeout = setTimeout(() => {
// 	    const width = container.clientWidth;
// 	    const height = container.clientHeight;
// 	    if (!width || !height) return;

// 	    // setSize обновляет и внутренний buffer canvas (canvas.width/height)
// 	    renderer.setSize(width, height, true);
// 	    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 	    camera.aspect = width / height;
// 	    camera.updateProjectionMatrix();

// 	    renderer.render(scene, camera);
// 	  }, 100);
// 	});

// 	resizeObserver.observe(container);


//   /* ================= LIGHT ================= */

//   preset.lights.forEach(({ position, intensity }) => {
//     // const light = new THREE.DirectionalLight(0xffffff, intensity);
// 		const light = new DirectionalLight(0xffffff, intensity);
//     light.position.set(...position);
//     scene.add(light);
//   });

//   /* ============== ENVIRONMENT =============== */

//   // const pmrem = new THREE.PMREMGenerator(renderer);
// 	const pmrem = new PMREMGenerator(renderer);
//   // const envScene = new THREE.Scene();
// 	const envScene = new Scene();
//   // envScene.background = new THREE.Color(preset.environment.color);
// 	envScene.background = new Color(preset.environment.color);
//   scene.environment = pmrem.fromScene(envScene).texture;
//   pmrem.dispose();

//   /* ================= STATE ================= */

//   let model;
//   let isAnimating = false;
//   let isRendering = false;
//   let rotationStart = 0;
//   let rotationFrom = 0;
//   let rotationTo = 0;
//   let rafId = null;

//   /* ================= MODEL ================= */

//   const loader = new GLTFLoader();
//   loader.load(modelSrc, (gltf) => {
//     model = gltf.scene;

//     // const box = new THREE.Box3().setFromObject(model);
// 		const box = new Box3().setFromObject(model);
//     // const size = new THREE.Vector3();
// 		const size = new Vector3();
//     box.getSize(size);

//     const scale = preset.targetSize / Math.max(size.x, size.y, size.z);
//     model.scale.setScalar(scale);

//     box.setFromObject(model);
//     // const center = new THREE.Vector3();
// 		const center = new Vector3();
//     box.getCenter(center);
//     model.position.sub(center);

//     model.traverse((child) => {
//       // if (child.isMesh) {
//       //   // child.material = new THREE.MeshStandardMaterial({
// 			// 	child.material = new MeshStandardMaterial({
//       //     color: preset.material.color,
//       //     metalness: preset.material.metalness,
//       //     roughness: preset.material.roughness,
//       //     // side: THREE.DoubleSide,
// 			// 		side: DoubleSide,
//       //   });
//       // }
// 			 if (child.isMesh) {
  		  // child.castShadow = false;
  		  // child.receiveShadow = false;


// 				//  console.log(child.material);
// 				//  const m = child.material;
//   		  // console.log({
//   		  //   color: m.color?.getHex(),
//   		  //   metalness: m.metalness,
//   		  //   roughness: m.roughness,
//   		  //   map: !!m.map,
//   		  //   normalMap: !!m.normalMap,
//   		  // });
//   		}
//     });

//     scene.add(model);

//     isRendering = true;
//     render(performance.now());

//     if (preset === HERO_3D_PRESETS.hero) {
//       rotateOnce(true);
//       container.classList.add('is-visible');
//     }
//   });

//   /* ================= ROTATION ================= */

//   function rotateOnce(force = false) {
//     if (!model) return;
//     if (isAnimating && !force) return;

//     isAnimating = true;
//     rotationStart = performance.now();
//     rotationFrom = model.rotation.y;
//     rotationTo = rotationFrom + ROTATION_ANGLE;
//   }

//   if (preset === HERO_3D_PRESETS.hero) {
//     container.addEventListener('mouseenter', rotateOnce);
//   }

//   /* ================= RENDER ================= */

//   function render(time) {
//     if (!isRendering) return;

//     if (isAnimating) {
//       const p = Math.min((time - rotationStart) / ROTATION_DURATION, 1);
//       model.rotation.y = rotationFrom + (rotationTo - rotationFrom) * p;
//       if (p === 1) isAnimating = false;
//     }

//     renderer.render(scene, camera);
//     rafId = requestAnimationFrame(render);
//   }

// 	return {
// 	  play() {
// 	    isRendering = true;
// 	    rotateOnce(true);
// 	    render(performance.now());
// 	  },

// 	  reset() {
// 	    isRendering = false;
// 	    cancelAnimationFrame(rafId);

// 	    if (model) model.rotation.y = 0;
// 	    renderer.render(scene, camera);
// 	  },

// 	  destroy() {
// 	    isRendering = false;
// 	    cancelAnimationFrame(rafId);

// 	    resizeObserver.disconnect();

// 	    renderer.dispose();

// 	    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
// 	  },
// 	};

// }

// /* ============== LAZY INIT ================= */

// function lazyInit3D(container, preset) {
//   let initialized = false;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting && !initialized) {
//         initialized = true;
//         observer.disconnect();

//         const src = container.dataset['3dSrc'];
//         container._threeController = initHeroIcon(container, src, preset);
//       }
//     },
//     { rootMargin: '1500px', threshold: 0.1 }
//   );

//   observer.observe(container);
// }

// /* ============== BOOTSTRAP ================= */

// document.querySelectorAll('.hero-3d').forEach((el) => {
//   const src = el.dataset['3dSrc'];
//   if (src) initHeroIcon(el, src, HERO_3D_PRESETS.hero);
// });

// document.querySelectorAll('.hero-3d-process').forEach((el) => {
//   lazyInit3D(el, HERO_3D_PRESETS.process);
// });



import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
  Box3,
  Vector3,
  Color,
	SRGBColorSpace
} from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





const ROTATION_ANGLE = -Math.PI * 2;
const ROTATION_DURATION = 5000;

const gltfCache = new Map();


/* ================= PRESETS ================= */

export const HERO_3D_PRESETS = {
  hero: {
    targetSize: 1.2,
    cameraZ: 3,
    lights: [
      { position: [0, 5, 2], intensity: 10 },
      { position: [2, 0, -2], intensity: 25 },
      { position: [-2, 0, -2], intensity: 12 },
      { position: [-1.5, 0, 4], intensity: 5 },
    ],
  },

  process: {
    targetSize: 1.4,
    cameraZ: 3.2,
    lights: [
      { position: [0, 5, 2], intensity: 10 },
      { position: [2, 0, -2], intensity: 25 },
      { position: [-2, 0, -2], intensity: 12 },
      { position: [-1.5, 0, 4], intensity: 5 },
    ],
  },
};

/* ============== CANVAS CREATION ============== */

function createCanvas(container) {
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  container.appendChild(canvas);
  return canvas;
}

/* ============== MAIN INIT ==================== */

export function initHeroIcon(container, modelSrc, preset) {
  const canvas = createCanvas(container);

  const scene = new Scene();

	scene.environment = new Color(0x404040);

  const camera = new PerspectiveCamera(
    30,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.z = preset.cameraZ;

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
	
	renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);

  /* ================= RESIZE ================= */

  let resizeTimeout = null;

  const resizeObserver = new ResizeObserver(() => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, true);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    }, 100);
  });

  resizeObserver.observe(container);

  /* ================= LIGHT ================= */
	scene.add(new AmbientLight(0xffffff, 0.4));

  preset.lights.forEach(({ position, intensity }) => {
    const light = new DirectionalLight(0xffffff, intensity);

    light.position.set(...position);
    scene.add(light);
  });

  /* ================= STATE ================= */

  let model;
  let isAnimating = false;
  // let isRendering = false;
  let rotationStart = 0;
  let rotationFrom = 0;
  let rotationTo = 0;
  let rafId = null;

  let pendingPlay = false;


  /* ================= MODEL ================= */

  // const loader = new GLTFLoader();
  // loader.load(modelSrc, (gltf) => {
  loadGLTFOnce(modelSrc).then((gltf) => {
    model = gltf.scene.clone(true);
    // model = gltf.scene;

    const box = new Box3().setFromObject(model);
    const size = new Vector3();
    box.getSize(size);

    const scale = preset.targetSize / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(scale);

    box.setFromObject(model);
    const center = new Vector3();
    box.getCenter(center);
    model.position.sub(center);

		model.traverse((child) => {
        if (!child.isMesh) return;
	  		child.material.metalness = 0.9;
        child.material.needsUpdate = true;
    });



    scene.add(model);

    // isRendering = true;
    render(performance.now());

    if (pendingPlay) {
      rotateOnce(true);
      pendingPlay = false;
    }


    if (preset === HERO_3D_PRESETS.hero) {
      rotateOnce(true);
      container.classList.add('is-visible');
    }
  });

  /* ================= ROTATION ================= */

  function rotateOnce(force = false) {
    if (!model) return;
    if (isAnimating && !force) return;

    isAnimating = true;
    rotationStart = performance.now();
    rotationFrom = model.rotation.y;
    rotationTo = rotationFrom + ROTATION_ANGLE;
  }

  if (preset === HERO_3D_PRESETS.hero) {
    container.addEventListener('mouseenter', rotateOnce);
  }

  /* ================= RENDER ================= */

  function render(time) {
    // if (!isRendering) return;

    if (isAnimating) {
      const p = Math.min((time - rotationStart) / ROTATION_DURATION, 1);
      model.rotation.y = rotationFrom + (rotationTo - rotationFrom) * p;
      if (p === 1) isAnimating = false;
    }

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(render);
  }


  return {
    play() {
      if (!model) {
        pendingPlay = true;
        return;
      }
      // isRendering = true;
      rotateOnce(true);
      // render(performance.now());
    },


    reset() {
      // isRendering = false;
      pendingPlay = false;
     isAnimating = false;
      // cancelAnimationFrame(rafId);

      if (model) model.rotation.y = 0;
      // renderer.render(scene, camera);
    },

    destroy() {
      // isRendering = false;
      cancelAnimationFrame(rafId);

      resizeObserver.disconnect();
      renderer.dispose();

      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    },
  };
}

function loadGLTFOnce(src) {
  if (gltfCache.has(src)) {
    return gltfCache.get(src);
  }

  const loader = new GLTFLoader();
  const promise = new Promise((resolve, reject) => {
    loader.load(src, resolve, undefined, reject);
  });

  gltfCache.set(src, promise);
  return promise;
}



/* ============== LAZY INIT ================= */

// function lazyInit3D(container, preset) {
//   let initialized = false;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting && !initialized) {
//         initialized = true;
//         observer.disconnect();

//         const src = container.dataset['3dSrc'];
//         container._threeController = initHeroIcon(container, src, preset);
//       }
//     },
//     { rootMargin: '1500px', threshold: 0.1 }
//   );

//   observer.observe(container);
// }

/* ============== BOOTSTRAP ================= */

document.querySelectorAll('.hero-3d').forEach((el) => {
  const src = el.dataset['3dSrc'];
  if (src) initHeroIcon(el, src, HERO_3D_PRESETS.hero);
});

// document.querySelectorAll('.hero-3d-process').forEach((el) => {
//   lazyInit3D(el, HERO_3D_PRESETS.process);
// });

document.querySelectorAll('.hero-3d-process').forEach((el) => {
  const src = el.dataset['3dSrc'];

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loadGLTFOnce(src);
        observer.disconnect();
      }
    },
    { rootMargin: '1000px' }
  );

  observer.observe(el);
});





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

						// if (isOpening) {
						//   setTimeout(() => {
						//     const canvas = spollerBlock.querySelector('.hero-3d-process');
						//     if (canvas && canvas._threeController) {
						//       canvas._threeController.play();
						//     }
						//   }, spollerSpeed);
						// }

						if (isOpening) {
						  setTimeout(() => {
						    const container = spollerBlock.querySelector('.hero-3d-process');
						    if (!container) return;
							
						    if (!container._threeController) {
						      const src = container.dataset['3dSrc'];
						      container._threeController = initHeroIcon(
						        container,
						        src,
						        HERO_3D_PRESETS.process
						      );
						    }
							
						    container._threeController.play();
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
						// setTimeout(() => {
						// 	ScrollTrigger.refresh();
						// }, spollerSpeed + 50);
						setTimeout(() => {
						  if (window.ScrollTrigger && typeof ScrollTrigger.refresh === "function") {
						    ScrollTrigger.refresh();
						  }
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

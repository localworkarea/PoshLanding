// Підключення функціоналу "аа"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

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

/* ================= PRESETS ================= */

const HERO_3D_PRESETS = {
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

function initHeroIcon(container, modelSrc, preset) {
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
  let isRendering = false;
  let rotationStart = 0;
  let rotationFrom = 0;
  let rotationTo = 0;
  let rafId = null;

  /* ================= MODEL ================= */

  const loader = new GLTFLoader();
  loader.load(modelSrc, (gltf) => {
    model = gltf.scene;

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
      // const m = child.material;

      // console.group('🔍 MATERIAL DEBUG');
      // console.log('Material type:', m.type);
      // console.log('Base color (hex):', m.color?.getHexString());
      // console.log('Metalness:', m.metalness);
      // console.log('Roughness:', m.roughness);
      // console.log('Has map:', !!m.map);
      // console.log('Has normalMap:', !!m.normalMap);
      // console.log('Final visible color:', m.color?.clone().multiplyScalar(1).getHexString());
      // console.groupEnd();
    	// console.log('Environment:', scene.environment);

    });



    scene.add(model);

    isRendering = true;
    render(performance.now());

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
    if (!isRendering) return;

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
      isRendering = true;
      rotateOnce(true);
      render(performance.now());
    },

    reset() {
      isRendering = false;
      cancelAnimationFrame(rafId);

      if (model) model.rotation.y = 0;
      renderer.render(scene, camera);
    },

    destroy() {
      isRendering = false;
      cancelAnimationFrame(rafId);

      resizeObserver.disconnect();
      renderer.dispose();

      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    },
  };
}

/* ============== LAZY INIT ================= */

function lazyInit3D(container, preset) {
  let initialized = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !initialized) {
        initialized = true;
        observer.disconnect();

        const src = container.dataset['3dSrc'];
        container._threeController = initHeroIcon(container, src, preset);
      }
    },
    { rootMargin: '1500px', threshold: 0.1 }
  );

  observer.observe(container);
}

/* ============== BOOTSTRAP ================= */

document.querySelectorAll('.hero-3d').forEach((el) => {
  const src = el.dataset['3dSrc'];
  if (src) initHeroIcon(el, src, HERO_3D_PRESETS.hero);
});

document.querySelectorAll('.hero-3d-process').forEach((el) => {
  lazyInit3D(el, HERO_3D_PRESETS.process);
});






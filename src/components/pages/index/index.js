import Lenis from 'lenis'


// // 3.Добавь СSS для lenis
// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   // console.log(e)
// })
// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })
// gsap.ticker.lagSmoothing(0)

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });


document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".list-hero__item");
	if (!items.length) return;

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




  const portfolio = document.querySelector('.portfolio');
  if (!portfolio) return;

  let mouseX = 0;
  let targetX = 0;
  let isInView = false;

  const strength = 40; // максимальное смещение (px)
  const easing = 0.03; // плавность движения

  // Отслеживаем движение мыши
  window.addEventListener('mousemove', (e) => {
    const rect = portfolio.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    // нормализуем положение от -1 до 1
    const offset = (e.clientX - centerX) / centerX;
    targetX = offset * strength;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        isInView = entry.isIntersecting;
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(portfolio);

  // Анимационный цикл
  function animate() {
    if (isInView) {
      mouseX += (targetX - mouseX) * easing;
      portfolio.style.transform = `translateX(${mouseX}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();




	const productVideoBlock = document.querySelector(".video-hero__video");
	if (!productVideoBlock) return;

	const playBtn = productVideoBlock.querySelector(".video-hero__play");
	const video = productVideoBlock.querySelector("video");

	if (!playBtn || !video) return;

	// Изначально видео на паузе
	video.pause();

	// Клик по кнопке — запускаем видео
	playBtn.addEventListener("click", () => {
		video.play();
		playBtn.style.opacity = "0";
		playBtn.style.pointerEvents = "none";
	});

	// Клик по видео — ставим на паузу
	video.addEventListener("click", () => {
		if (video.paused) {
			video.play();
			playBtn.style.opacity = "0";
			playBtn.style.pointerEvents = "none";
		} else {
			video.pause();
			playBtn.style.opacity = "1";
			playBtn.style.pointerEvents = "auto";
		}
	});

	// Отслеживание вьюпорта
	const observer2 = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					video.pause();
					playBtn.style.opacity = "1";
					playBtn.style.pointerEvents = "auto";
				}
			});
		},
		{ threshold: 0.2 }
	);

	observer2.observe(productVideoBlock);


	const page = document.querySelector('.page--index');
  if (!page) return;

  const children = Array.from(page.children);
  const maxZ = children.length;

  children.forEach((child, i) => {
    child.style.zIndex = maxZ - i;
  });




});

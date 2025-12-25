// Підключення функціоналу "аа"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

import "./gallerys.scss"

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('[data-fls-gallerys]');
  if (!gallery) return;

  const fullscreen = gallery.querySelector('[data-gallery-fullscreen]');
  const fullscreenImage = fullscreen.querySelector('[data-gallery-image]');
  const overlay = fullscreen.querySelector('[data-gallery-overlay]');
  const closeBtn = fullscreen.querySelector('[data-gallery-close]');
  const html = document.documentElement;

  // Создаем лоадер
  const loader = document.createElement('div');
  loader.classList.add('gallery__loader');
  fullscreen.appendChild(loader);

  function showLoader() {
    loader.classList.add('is-visible');
  }

  function hideLoader() {
    loader.classList.remove('is-visible');
  }

  // ФУНКЦИЯ ВЫБОРА КАРТИНКИ ПО РАЗМЕРУ ЭКРАНА
  function getAdaptiveSrc(btn) {
    const mobile = btn.dataset.srcMobile;
    const desktop = btn.dataset.srcDesktop;

    // Мобильный брейкпоинт — можно подстроить под проект
    if (window.innerWidth <= 600 && mobile) return mobile;

    return desktop || mobile; // fallback если нет desktop
  }

  // Открытие изображения
  function openFullscreen(src, alt) {
    showLoader();
    fullscreenImage.classList.remove('is-loaded');
    closeBtn.classList.remove('is-visible');
    fullscreenImage.src = ''; 
    fullscreen.setAttribute('aria-hidden', 'false');
    fullscreen.classList.add('is-active');
    html.classList.add('lock');

    const img = new Image();
    img.src = src;
    img.alt = alt || '';

    img.onload = () => {
      fullscreenImage.src = src;
      fullscreenImage.alt = alt || '';
      fullscreenImage.classList.add('is-loaded');
      hideLoader();
      closeBtn.classList.add('is-visible');
    };

    img.onerror = () => {
      hideLoader();
      fullscreenImage.src = '';
      closeBtn.classList.remove('is-visible');
      console.error('Ошибка загрузки изображения:', src);
    };
  }

  // Закрытие
  function closeFullscreen() {
    fullscreen.classList.remove('is-active');
    fullscreen.setAttribute('aria-hidden', 'true');
    fullscreenImage.src = '';
    fullscreenImage.classList.remove('is-loaded');
    closeBtn.classList.remove('is-visible');
    html.classList.remove('lock');
    hideLoader();
  }

  gallery.addEventListener('click', (e) => {
    const marqueeParent = e.target.closest('[data-fls-marquee]');
    if (marqueeParent && marqueeParent.dataset.marqueeJustDragged === "true") {
      return;
    }

    const btn = e.target.closest('[data-gallery-item]');
    if (!btn) return;

    const src = getAdaptiveSrc(btn);

    const img = btn.querySelector('img');
    const alt = img ? img.alt : '';

    openFullscreen(src, alt);
  });

  overlay.addEventListener('click', closeFullscreen);
  closeBtn.addEventListener('click', closeFullscreen);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreen.classList.contains('is-active')) {
      closeFullscreen();
    }
  });
});

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

  // Открытие изображения
  function openFullscreen(src, alt) {
    showLoader();
    fullscreenImage.classList.remove('is-loaded');
    fullscreenImage.src = ''; // сброс предыдущего src
    fullscreen.setAttribute('aria-hidden', 'false');
    fullscreen.classList.add('is-active');
    html.classList.add('lock');

    // Загружаем новое изображение
    const img = new Image();
    img.src = src;
    img.alt = alt || '';

    img.onload = () => {
      fullscreenImage.src = src;
      fullscreenImage.alt = alt || '';
      fullscreenImage.classList.add('is-loaded');
      hideLoader();
    };

    img.onerror = () => {
      hideLoader();
      fullscreenImage.src = '';
      console.error('Ошибка загрузки изображения:', src);
    };
  }

  // Закрытие
  function closeFullscreen() {
    fullscreen.classList.remove('is-active');
    fullscreen.setAttribute('aria-hidden', 'true');
    fullscreenImage.src = '';
    fullscreenImage.classList.remove('is-loaded');
    html.classList.remove('lock');
    hideLoader();
  }

  // Обработчик кликов по изображениям
  gallery.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-gallery-item]');
    if (!btn) return;

    const src = btn.dataset.src;
    const img = btn.querySelector('img');
    const alt = img ? img.alt : '';
    openFullscreen(src, alt);
  });

  // Закрытие по клику на overlay или кнопку
  overlay.addEventListener('click', closeFullscreen);
  closeBtn.addEventListener('click', closeFullscreen);

  // Закрытие по клавише Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreen.classList.contains('is-active')) {
      closeFullscreen();
    }
  });
});

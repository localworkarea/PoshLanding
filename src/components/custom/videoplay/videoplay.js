// Підключення функціоналу "аа"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

import "./videoplay.scss"


document.addEventListener("DOMContentLoaded", () => {
  if (isMobile.iOS()) {
    const videoElements = document.querySelectorAll("[data-fls-videoplay]");

    if (videoElements.length > 0) {
      // Добавляем свойство playing к HTMLMediaElement
      Object.defineProperty(HTMLMediaElement.prototype, "playing", {
        get: function () {
          return !!(
            this.currentTime > 0 &&
            !this.paused &&
            !this.ended &&
            this.readyState > 2
          );
        },
      });

      // Добавляем playsinline, если его нет
      videoElements.forEach((video) => {
        if (!video.hasAttribute("playsinline")) {
          video.setAttribute("playsinline", "");
        }
      });

      // Функция безопасного воспроизведения
      const attemptPlay = (video) => {
        if (!video.playing) {
          video
            .play()
            .catch((err) =>
              console.error("Failed to play video:", err)
            );
        }
      };

      // Пробуем воспроизводить при клике или касании
      const handleInteraction = () => {
        videoElements.forEach((video) => attemptPlay(video));
      };

      document.body.addEventListener("click", handleInteraction, { passive: true });
      document.body.addEventListener("touchstart", handleInteraction, { passive: true });
    }
  }
});
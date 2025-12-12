// Підключення функціоналу "аа"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

import "./setyear.scss"

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();

  document.querySelectorAll('.set-year').forEach(el => {
    el.textContent = year;
  });
});

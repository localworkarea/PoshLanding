import { addTouchAttr, addLoadedAttr, isMobile,  bodyLockToggle, bodyUnlock, bodyLock, FLS } from "@js/common/functions.js"

document.addEventListener("DOMContentLoaded", () => {
  const formBrief = document.querySelector('[data-form="brief"]');
  if (!formBrief) return;

  const steps = [...formBrief.querySelectorAll(".brief__section")];
  const btnPrev = formBrief.querySelector("[data-brief-prev]");
  const btnNext = formBrief.querySelector("[data-brief-next]");
  const btnSubmit = formBrief.querySelector("[data-brief-submit]");

  const progressFill = document.querySelector(".header-brief__progress-fill");
  const progressCurrent = document.querySelector("[data-brief-current]");
  const progressTotal = document.querySelector("[data-brief-total]");

  const TOTAL = steps.length;
  let current = 0; // теперь это индекс массива

  progressTotal.textContent = TOTAL;

  // --- валидация ---
  function validateCurrentStep() {
    const currentStep = steps[current];
    if (!currentStep) return true;

    const requiredFields = currentStep.querySelectorAll("[required]");
    if (!requiredFields.length) return true;

    for (const field of requiredFields) {
      if (!field.checkValidity()) {
        field.focus();
        if (field.reportValidity) field.reportValidity();
        return false;
      }
    }

    return true;
  }

  // --- показать шаг ---
  function showStep(index) {
    current = index;

    steps.forEach((step, i) => {
      step.hidden = i !== current;
    });

    // кнопки
    btnPrev.style.display = current === 0 ? "none" : "";
    btnNext.style.display = current === TOTAL - 1 ? "none" : "";
    btnSubmit.style.display = current === TOTAL - 1 ? "" : "none";

    // прогресс бар
    const percent = ((current + 1) / TOTAL) * 100;
    progressFill.style.width = percent + "%";
    progressCurrent.textContent = current + 1;
  }

  // кнопка NEXT
  btnNext.addEventListener("click", () => {
    if (current < TOTAL - 1 && validateCurrentStep()) {
      showStep(current + 1);
    }
  });

  // кнопка PREV
  btnPrev.addEventListener("click", () => {
    if (current > 0) showStep(current - 1);
  });

  // старт
  showStep(0);


  // Вернуть бриф на первый шаг после отправки (вызов через form.js)
  document.addEventListener("briefResetSteps", () => {
      current = 0;
      showStep(0);
  });

  // дейсвтия после клика по кнопке внутри попапа brief-msg -- 
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-brief-start]");
    if (!btn) return;

    const popup = document.querySelector("[data-brief-msg]");
    const html = document.documentElement;

    if (popup) {
        popup.classList.remove("--brief-sent");
        html.classList.remove("--brief-sent");
        popup.setAttribute("aria-hidden", "true");
    }

    bodyUnlock();

    // Вернуть бриф в начало
    // current = 0;
    // showStep(0);
  });



});

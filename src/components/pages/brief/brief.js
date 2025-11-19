import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector('[data-form="brief"]');
//   if (!form) return;

//   const steps = [...form.querySelectorAll("[data-brief-step]")];
//   const btnPrev = form.querySelector("[data-brief-prev]");
//   const btnNext = form.querySelector("[data-brief-next]");
//   const btnSubmit = form.querySelector("[data-brief-submit]");

//   const progressFill = document.querySelector(".header-brief__progress-fill");
//   const progressCurrent = document.querySelector("[data-brief-current]");
//   const progressTotal = document.querySelector("[data-brief-total]");

//   const TOTAL = steps.length;
//   let current = 1; // текущий шаг

//   progressTotal.textContent = TOTAL;

//   // --- валидация текущего шага ---
//   function validateCurrentStep() {
//     const currentStep = steps.find(
//       (step) => Number(step.dataset.briefStep) === current
//     );
//     if (!currentStep) return true;

//     const requiredFields = currentStep.querySelectorAll("[required]");
//     if (!requiredFields.length) return true;

//     let firstInvalid = null;

//     for (const field of requiredFields) {
//       if (!field.checkValidity()) {
//         firstInvalid = field;
//         break;
//       }
//     }

//     if (firstInvalid) {
//       // фокус на первое невалидное поле
//       firstInvalid.focus();
//       // вывести нативное сообщение браузера, если поддерживается
//       if (typeof firstInvalid.reportValidity === "function") {
//         firstInvalid.reportValidity();
//       }
//       return false;
//     }

//     return true;
//   }

//   // --- показать нужный шаг ---
//   function showStep(index) {
//     current = index;

//     steps.forEach((step) => {
//       step.hidden = Number(step.dataset.briefStep) !== current;
//     });

//     // кнопки
//     btnPrev.style.display = current === 1 ? "none" : "";
//     btnNext.style.display = current === TOTAL ? "none" : "";
//     btnSubmit.style.display = current === TOTAL ? "" : "none";

//     // прогресс-бар
//     const percent = (current / TOTAL) * 100;
//     progressFill.style.width = percent + "%";
//     progressCurrent.textContent = current;
//   }

//   // --- кнопки ---
//   btnNext.addEventListener("click", () => {
//     // не даём перейти дальше, пока текущий шаг не валиден
//     if (current < TOTAL && validateCurrentStep()) {
//       showStep(current + 1);
//     }
//   });

//   btnPrev.addEventListener("click", () => {
//     if (current > 1) showStep(current - 1);
//   });

//   // старт
//   showStep(1);

// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('[data-form="brief"]');
  if (!form) return;

  const steps = [...form.querySelectorAll(".brief__section")];
  const btnPrev = form.querySelector("[data-brief-prev]");
  const btnNext = form.querySelector("[data-brief-next]");
  const btnSubmit = form.querySelector("[data-brief-submit]");

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
});

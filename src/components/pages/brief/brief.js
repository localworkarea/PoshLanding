import { addTouchAttr, addLoadedAttr, isMobile,  bodyLockToggle, bodyUnlock, bodyLock, FLS } from "@js/common/functions.js"

// document.addEventListener("DOMContentLoaded", () => {
//   const formBrief = document.querySelector('[data-form="brief"]');
//   if (!formBrief) return;

//   const steps = [...formBrief.querySelectorAll(".brief__section")];
//   const btnPrev = formBrief.querySelector("[data-brief-prev]");
//   const btnNext = formBrief.querySelector("[data-brief-next]");
//   const btnSubmit = formBrief.querySelector("[data-brief-submit]");

//   const progressFill = document.querySelector(".header-brief__progress-fill");
//   const progressCurrent = document.querySelector("[data-brief-current]");
//   const progressTotal = document.querySelector("[data-brief-total]");

//   const TOTAL = steps.length;
//   let current = 0; // теперь это индекс массива

//   progressTotal.textContent = TOTAL;

//   // --- валидация ---
//   function validateCurrentStep() {
//     const currentStep = steps[current];
//     if (!currentStep) return true;

//     const requiredFields = currentStep.querySelectorAll("[required]");
//     if (!requiredFields.length) return true;

//     for (const field of requiredFields) {
//       if (!field.checkValidity()) {
//         field.focus();
//         if (field.reportValidity) field.reportValidity();
//         return false;
//       }
//     }

//     return true;
//   }

//   // --- показать шаг ---
//   function showStep(index) {
//     current = index;

//     steps.forEach((step, i) => {
//       step.hidden = i !== current;
//     });

//     // кнопки
//     btnPrev.style.display = current === 0 ? "none" : "";
//     btnNext.style.display = current === TOTAL - 1 ? "none" : "";
//     btnSubmit.style.display = current === TOTAL - 1 ? "" : "none";

//     // прогресс бар
//     const percent = ((current + 1) / TOTAL) * 100;
//     progressFill.style.width = percent + "%";
//     progressCurrent.textContent = current + 1;
//   }

//   // --- ПРОКРУТКА НАВЕРХ ПЕРЕД СЛЕДУЮЩИМ ШАГОМ ---
//   function scrollPage() {
//       const scrollY = window.scrollY || document.documentElement.scrollTop;

//       if (scrollY > 0) {
//         window.scrollTo({
//           top: 0,
//         });
//       }
//   }

//   // кнопка NEXT
//   btnNext.addEventListener("click", () => {
//     if (current < TOTAL - 1 && validateCurrentStep()) {
//       scrollPage();
//       showStep(current + 1);
//     }
//   });
  
//   // кнопка PREV
//   btnPrev.addEventListener("click", () => {
//     scrollPage();
//     if (current > 0) showStep(current - 1);
//   });

//   // старт
//   showStep(0);

//   // запретить отправку по нажатию на enter
//     formBrief.addEventListener("keydown", function (e) {
//     // Если нажали Enter
//     if (e.key === "Enter") {
//       const target = e.target;

//       // --- Разрешаем Enter в textarea (для переносов строки)
//       if (target.tagName === "TEXTAREA") return;

//       // --- Разрешаем Enter внутри элементов с contenteditable
//       if (target.hasAttribute("contenteditable")) return;

//       // --- Блокируем Enter для всех остальных случаев
//       e.preventDefault();
//     }
//   });



//   // Вернуть бриф на первый шаг после отправки (вызов через form.js)
//   document.addEventListener("briefResetSteps", () => {
//       current = 0;
//       showStep(0);
//   });

//   // дейсвтия после клика по кнопке внутри попапа brief-msg -- 
//   document.addEventListener("click", (e) => {
//     const btn = e.target.closest("[data-brief-start]");
//     if (!btn) return;

//     const popup = document.querySelector("[data-brief-msg]");
//     const html = document.documentElement;

//     if (popup) {
//         popup.classList.remove("--brief-sent");
//         html.classList.remove("--brief-sent");
//         popup.setAttribute("aria-hidden", "true");
//     }

//     bodyUnlock();

//     // Вернуть бриф в начало
//     current = 0;
//     showStep(0);
//   });


// });


document.addEventListener("DOMContentLoaded", () => {
  const formBrief = document.querySelector('[data-form="brief"]');
  if (!formBrief) return;

  const allSteps = [...formBrief.querySelectorAll(".brief__section")];

  const btnPrev = formBrief.querySelector("[data-brief-prev]");
  const btnNext = formBrief.querySelector("[data-brief-next]");
  const btnSubmit = formBrief.querySelector("[data-brief-submit]");

  const progress = document.querySelector(".header-brief__progress");
  const progressFill = document.querySelector(".header-brief__progress-fill");
  const progressCurrent = document.querySelector("[data-brief-current]");
  const progressTotal = document.querySelector("[data-brief-total]");

  // --- состояние ---
  let activeSteps = [...allSteps];
  let current = 0;

  // Скрываем прогрессбар полностью
  progress.style.display = "none";

  // ============================================
  // ФУНКЦИЯ ПОЛНОГО СБРОСА ВЕТВЛЕНИЯ
  // ============================================
  function resetBranchingState() {
    allSteps.forEach(s => {
      s.hidden = false;
      s.style.display = "";
    });

    activeSteps = [...allSteps];
    current = 0;
    progress.style.display = "none";
  }

  // ============= ВЕТВЛЕНИЕ =============
  function applyBranching() {
    const firstStep = allSteps[0];
    const branchInput = firstStep.querySelector('input[name="brief_branch"]:checked');
    if (!branchInput) return false;

    const branchValue = branchInput.value;

    activeSteps = allSteps.filter(step => {
      const val = step.dataset.briefStep;
      if (!val) return true;
      return val === branchValue;
    });

    // Пересчёт общего кол-ва (без первого шага)
    progressTotal.textContent = activeSteps.length - 1;

    return true;
  }

  // ============= ПОКАЗ ШАГА =============
  function showStep(index) {
    current = index;

    allSteps.forEach(s => {
      s.hidden = true;
    });

    activeSteps.forEach(s => {
      s.hidden = true;
    });

    const step = activeSteps[current];
    step.hidden = false;
    step.style.display = "";


    // Кнопки
    if (current === 0) {
      btnPrev.style.display = "none";
      btnNext.style.display = "";
      btnSubmit.style.display = "none";
      progress.style.display = "none";
    } else if (current === activeSteps.length - 1) {
      btnPrev.style.display = "";
      btnNext.style.display = "none";
      btnSubmit.style.display = "";
    } else {
      btnPrev.style.display = "";
      btnNext.style.display = "";
      btnSubmit.style.display = "none";
    }

    // Обновление прогресса
    if (current > 0) {
      progress.style.display = "flex";
      const currentNumber = current;
      const percent = (currentNumber / (activeSteps.length - 1)) * 100;

      progressFill.style.width = percent + "%";
      progressCurrent.textContent = currentNumber;
    }
  }

  // ============= ВАЛИДАЦИЯ =============
  function validateCurrentStep() {
    const step = activeSteps[current];
    const required = [...step.querySelectorAll("[required]")];

    for (const f of required) {
      if (!f.checkValidity()) {
        f.focus();
        if (f.reportValidity) f.reportValidity();
        return false;
      }
    }

    return true;
  }

  // ============= Scroll =============
  function scrollPage() {
    if (window.scrollY > 0) window.scrollTo({ top: 0 });
  }

  // ============= Обработка первого шага (ветвление) =============
  const firstStep = allSteps[0];

  firstStep.addEventListener("change", e => {
    if (e.target.name !== "brief_branch") return;

    // ПОЛНЫЙ СБРОС ПЕРЕД ВЕТВЛЕНИЕМ
    resetBranchingState();

    applyBranching();
    showStep(0);
  });

  // ============= кнопка NEXT =============
  btnNext.addEventListener("click", () => {
    const branchSelected = firstStep.querySelector('input[name="brief_branch"]:checked');
    if (!branchSelected) {
      const fake = firstStep.querySelector('input[name="brief_branch"]');
      fake.focus();
      fake.reportValidity();
      return;
    }

    if (!validateCurrentStep()) return;

    if (current < activeSteps.length - 1) {
      scrollPage();
      showStep(current + 1);
    }
  });

  // ============= кнопка PREV =============
  btnPrev.addEventListener("click", () => {
    scrollPage();
    if (current > 0) showStep(current - 1);
  });

  // ============= блокировка Enter =============
  formBrief.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      if (e.target.tagName === "TEXTAREA") return;
      if (e.target.hasAttribute("contenteditable")) return;
      e.preventDefault();
    }
  });

  // ============= ресет после отправки =============
  // document.addEventListener("briefResetSteps", () => {
  //   resetBranchingState(); // 👈 ДОБАВЛЕНО
  //   showStep(0);
  // });

  // ============= закрытие popup brief-msg =============
  document.addEventListener("click", e => {
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

    // 👇 ДОБАВЛЕНО
    resetBranchingState();
    showStep(0);
  });

  // Старт
  showStep(0);
});

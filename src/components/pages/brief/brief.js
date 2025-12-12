import { addTouchAttr, addLoadedAttr, isMobile,  bodyLockToggle, bodyUnlock, bodyLock, FLS } from "@js/common/functions.js"


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


  // ===============================
  // STORAGE + HISTORY
  // ===============================
  const STORAGE_KEY = "briefFormState";
  let isHistoryNavigation = false;

  function saveState() {
   
    const data = {
      current,
      values: {},
      timestamp: Date.now(),
    };


    allSteps.forEach(step => {
      const fields = step.querySelectorAll("input, textarea, select");
      fields.forEach(f => {
        if (!f.name) return;

        if (f.type === "checkbox") {
          if (!Array.isArray(data.values[f.name])) {
            data.values[f.name] = [];
          }
          if (f.checked) {
            data.values[f.name].push(f.value);
          }
        }
        else if (f.type === "radio") {
          if (f.checked) {
            data.values[f.name] = f.value;
          }
        }
        else {
          data.values[f.name] = f.value;
        }

      });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function restoreState() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

      // ===== TTL (24 часа) =====
      const TTL = 24 * 60 * 60 * 1000;
      if (!saved.timestamp || Date.now() - saved.timestamp > TTL) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }

    // восстановление значений
    allSteps.forEach(step => {
      const fields = step.querySelectorAll("input, textarea, select");
      fields.forEach(f => {
        if (!f.name || !(f.name in saved.values)) return;

      if (f.type === "checkbox") {
        f.checked =
          Array.isArray(saved.values[f.name]) &&
          saved.values[f.name].includes(f.value);
      }
      else if (f.type === "radio") {
        f.checked = saved.values[f.name] === f.value;
      }
      else {
        f.value = saved.values[f.name];
      }

      });
    });

    // восстановление ветки
    applyBranching();

    if (Number.isInteger(saved.current)) {
      current = Math.min(saved.current, activeSteps.length - 1);
    }
  }
  // ======


  // --- состояние ---
  let activeSteps = [...allSteps];
  let current = 0;

  // Скрываем прогрессбар полностью
  progress.style.display = "none";

  // ФУНКЦИЯ ПОЛНОГО СБРОСА ВЕТВЛЕНИЯ
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


      // сохраняем состояние
      saveState();

      // добавляем шаг в history (если это не popstate)
      if (!isHistoryNavigation) {
        history.pushState({ step: current }, "", "#step-" + current);
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

    resetBranchingState();
    showStep(0);
  });

  // Старт
  // showStep(0);

  restoreState();
  history.replaceState({ step: current }, "", "#step-" + current);
  showStep(current);


  formBrief.addEventListener("input", saveState);
  formBrief.addEventListener("change", saveState);


  window.addEventListener("popstate", e => {
    if (!e.state || typeof e.state.step !== "number") return;

    isHistoryNavigation = true;
    showStep(e.state.step);
    isHistoryNavigation = false;
  });


});

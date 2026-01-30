import { gotoBlock, bodyLockToggle, bodyUnlock, bodyLock, FLS } from "@js/common/functions.js";
// Підключення функціоналу модуля форм
import { formValidate } from "../_functions.js";

import './form.scss'


// ======================================================
//  BRIEF UPLOADS — IndexedDB HELPERS
// ======================================================

const BRIEF_DB_NAME = "briefUploadsDB";
const BRIEF_DB_VERSION = 1;
const BRIEF_STORE_NAME = "files";

// ---------- open DB ----------
function openBriefDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(BRIEF_DB_NAME, BRIEF_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(BRIEF_STORE_NAME)) {
        db.createObjectStore(BRIEF_STORE_NAME);
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// ---------- save files ----------
function saveBriefFiles(key, files) {
  return openBriefDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(BRIEF_STORE_NAME, "readwrite");
      const store = tx.objectStore(BRIEF_STORE_NAME);

      store.put(files, key);

      tx.oncomplete = () => {
        db.close();
        resolve();
      };

      tx.onerror = () => {
        db.close();
        reject(tx.error);
      };
    });
  });
}

// ---------- load files ----------
function loadBriefFiles(key) {
  return openBriefDB().then(db => {
    return new Promise(resolve => {
      const tx = db.transaction(BRIEF_STORE_NAME, "readonly");
      const store = tx.objectStore(BRIEF_STORE_NAME);
      const request = store.get(key);

      request.onsuccess = () => {
        resolve(request.result || []);
      };

      request.onerror = () => {
        resolve([]);
      };

      tx.oncomplete = () => {
        db.close();
      };
    });
  });
}

// ---------- clear files ----------
function clearBriefFiles(key) {
  return openBriefDB().then(db => {
    return new Promise(resolve => {
      const tx = db.transaction(BRIEF_STORE_NAME, "readwrite");
      const store = tx.objectStore(BRIEF_STORE_NAME);

      store.delete(key);

      tx.oncomplete = () => {
        db.close();
        resolve();
      };

      tx.onerror = () => {
        db.close();
        resolve();
      };
    });
  });
}

// ---------- clear ALL files (optional) ----------
function clearAllBriefFiles() {
  return openBriefDB().then(db => {
    return new Promise(resolve => {
      const tx = db.transaction(BRIEF_STORE_NAME, "readwrite");
      tx.objectStore(BRIEF_STORE_NAME).clear();

      tx.oncomplete = () => {
        db.close();
        resolve();
      };
    });
  });
}


function formInit() {
	// Відправлення форм
	function formSubmit() {
		const forms = document.forms;
		if (forms.length) {
			for (const form of forms) {
				// Прибираємо вбудовану валідацію
				!form.hasAttribute('data-fls-form-novalidate') ? form.setAttribute('novalidate', true) : null
				// Подія відправки
				form.addEventListener('submit', function (e) {
					const form = e.target;
					formSubmitAction(form, e);
				});
				// Подія очистки
				form.addEventListener('reset', function (e) {
					const form = e.target;
					formValidate.formClean(form);
				});
			}
		}
		async function formSubmitAction(form, e) {
			const error = formValidate.getErrors(form)
			if (error === 0) {
				if (form.dataset.flsForm === 'ajax') { // Якщо режим ajax
					e.preventDefault();
					const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
					const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
					const formData = new FormData(form);

					const uploadBlocksAjax = document.querySelectorAll("[data-brief-upload]");
					uploadBlocksAjax.forEach(block => {
						const files = block._filesArray || [];
						const input = block.querySelector(".brief-upload__input");
						if (!files.length || !input?.name) return;

						files.forEach(file => {
							formData.append(input.name, file);
						});
					});


					form.classList.add('--sending');
					const response = await fetch(formAction, {
						method: formMethod,
						body: formData
					});
					if (response.ok) {
						let responseResult = await response.json()
						form.classList.remove('--sending')
						formSent(form, responseResult)
					} else {
						FLS("_FLS_FORM_AJAX_ERR")
						form.classList.remove('--sending')
					}
				} else if (form.dataset.flsForm === 'dev') {	// Якщо режим розробки
					e.preventDefault()

					formSent(form)
				}
			} else {
				e.preventDefault();
				if (form.querySelector('.--form-error') && form.hasAttribute('data-fls-form-gotoerr')) {
					const formGoToErrorClass = form.dataset.flsFormGotoerr ? form.dataset.flsFormGotoerr : '.--form-error';
					gotoBlock(formGoToErrorClass);
				}
			}
		}
		// Дії після надсилання форми
		function formSent(form, responseResult = ``) {
			// Створюємо подію відправлення форми
			document.dispatchEvent(new CustomEvent("formSent", {
				detail: {
					form: form
				}
			}));
			// Показуємо попап, якщо підключено модуль попапів 
			// та для форми вказано налаштування
			setTimeout(() => {
				if (window.flsPopup) {
					const popup = form.dataset.flsFormPopup;
					popup ? window.flsPopup.open(popup) : null;
				}
			}, 200);

			//  ОЧИСТКА LOCAL + INDEXED DB ПОСЛЕ SUBMIT
			if (form.dataset.form === "brief") {
				localStorage.removeItem("briefFormState");

				const uploadBlocks = document.querySelectorAll("[data-brief-upload]");
				uploadBlocks.forEach(block => {
					const input = block.querySelector(".brief-upload__input");
					if (input?.name) {
						clearBriefFiles(input.name);
					}
				});
			}

			// Очищуємо форму
			formValidate.formClean(form);


			// === ЛОГИКА ДЛЯ БРИФА ===
			if (form.dataset.form === "brief") {
			
			    const popupBrief = document.querySelector("[data-brief-msg]");
					
			    if (popupBrief) {
							const html = document.documentElement;
			        popupBrief.classList.add("--brief-sent");
							popupBrief.setAttribute("aria-hidden", "false");
			        html.classList.add("--brief-sent");
					
			        bodyLock();
			    }
			}


			// Повідомляємо до консолі
			FLS(`_FLS_FORM_SEND`);
		}
	}
	// Робота із полями форми.
	function formFieldsInit() {
		document.body.addEventListener("focusin", function (e) {
			const targetElement = e.target;
			if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
				if (!targetElement.hasAttribute('data-fls-form-nofocus')) {
					targetElement.classList.add('--form-focus');
					targetElement.parentElement.classList.add('--form-focus');
				}
				targetElement.hasAttribute('data-fls-form-validatenow') ? formValidate.removeError(targetElement) : null;
			}
		});
		document.body.addEventListener("focusout", function (e) {
			const targetElement = e.target;
			if ((targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA')) {
				if (!targetElement.hasAttribute('data-fls-form-nofocus')) {
					targetElement.classList.remove('--form-focus');
					targetElement.parentElement.classList.remove('--form-focus');
				}
				// Миттєва валідація
				targetElement.hasAttribute('data-fls-form-validatenow') ? formValidate.validateInput(targetElement) : null;
			}
		});
		document.body.addEventListener("input", function (e) {
			const target = e.target;
				
			if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
					if (target.value.trim() !== "") {
						target.classList.add("--input-fill");
						target.parentElement.classList.add("--input-fill");
					} else {
						target.classList.remove("--input-fill");
						target.parentElement.classList.remove("--input-fill");
					}
				}
		});
		document.body.addEventListener("change", function (e) {
			const target = e.target;
			if (!target || target.tagName !== "INPUT") return;
			if (target.type === "radio" || target.type === "checkbox") {
				formValidate.validateInput(target);
			}
		});


	}
	
	// ====== FILE BLOCKS (для всех форм) ======
	const fileBlocks = document.querySelectorAll(".form-file");

	if (fileBlocks.length) {
		fileBlocks.forEach((fileBlock) => {
			const input = fileBlock.querySelector(".form-file__input");
			const btn = fileBlock.querySelector(".form-file__btn");
			const textDefault = fileBlock.querySelector(".form-file__text");
			const textFile = fileBlock.querySelector(".form-file__file-name");

			if (!input || !btn || !textFile) return;

			btn.addEventListener("click", () => {
				input.click();
			});

			input.addEventListener("change", () => {
				if (input.files && input.files.length > 0) {
					const fileName = input.files[0].name;

					fileBlock.classList.add("--file-added");
					textFile.textContent = fileName;
				} else {
					fileBlock.classList.remove("--file-added");
					textFile.textContent = "";
				}
			});
		});
	}


	// ==================== UPLOAD BLOCKS ====================
	const uploadBlocks = document.querySelectorAll("[data-brief-upload]");
	if (uploadBlocks.length) {
		const MAX_SIZE = 10 * 1024 * 1024;

		uploadBlocks.forEach(block => {
			block._filesArray = [];

			const input = block.querySelector(".brief-upload__input");
			const btn = block.querySelector("[data-upload-btn]");
			const list = block.querySelector("[data-upload-list]");
			const error = block.querySelector("[data-upload-error]");

			let filesArray = block._filesArray;

			/* ==========================================
			   ВОССТАНОВЛЕНИЕ ФАЙЛОВ ИЗ IndexedDB
			   ========================================== */
			if (input?.name) {
				loadBriefFiles(input.name).then(savedFiles => {
					if (!savedFiles || !savedFiles.length) return;
					block._filesArray = savedFiles;
					filesArray = block._filesArray;
					renderList();
				});
			}
			/* ========================================== */

			btn.addEventListener("click", () => input.click());

			input.addEventListener("change", async () => {
				const chosenFiles = Array.from(input.files);

				const currentSize = filesArray.reduce((t, f) => t + f.size, 0);
				const chosenSize = chosenFiles.reduce((t, f) => t + f.size, 0);

				if (currentSize + chosenSize > MAX_SIZE) {
					error.classList.add("--show");
					input.value = "";
					return;
				}

				error.classList.remove("--show");
				filesArray.push(...chosenFiles);
				input.value = "";

				await saveBriefFiles(input.name, filesArray);
				renderList();
			});

			function renderList() {
				list.innerHTML = "";

				filesArray.forEach((file, index) => {
					const item = document.createElement("div");
					item.className = "brief-upload__file";
					item.innerHTML = `
						${file.name}
						<button type="button" data-remove-index="${index}" aria-label="remove">×</button>
					`;
					list.appendChild(item);
				});
			}

			list.addEventListener("click", async e => {
				const btn = e.target.closest("[data-remove-index]");
				if (!btn) return;

				const index = +btn.dataset.removeIndex;
				filesArray.splice(index, 1);

				await saveBriefFiles(input.name, filesArray);
				error.classList.remove("--show");
				renderList();
			});
		});
	}

	formSubmit()
	formFieldsInit()
}
document.querySelector('[data-fls-form]') ?
	window.addEventListener('load', formInit) : null
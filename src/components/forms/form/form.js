import { gotoBlock, bodyLockToggle, bodyUnlock, bodyLock, FLS } from "@js/common/functions.js";
// Підключення функціоналу модуля форм
import { formValidate } from "../_functions.js";

import './form.scss'

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
			}, 0);
			// Очищуємо форму
			formValidate.formClean(form);


			// === ЛОГИКА ДЛЯ БРИФА ===
			if (form.dataset.form === "brief") {
			
			    const popupBrief = document.querySelector("[data-brief-msg]");
					
			    if (popupBrief) {
							const html = document.documentElement;
			        // Показать окно
			        popupBrief.classList.add("--brief-sent");
							popupBrief.setAttribute("aria-hidden", "false");
			        html.classList.add("--brief-sent");
					
			        // Заблокировать скролл
			        bodyLock();
					
			        // // Через 3 секунды вернуть бриф на 1 шаг
			        // setTimeout(() => {
			        //     const event = new CustomEvent("briefResetSteps");
			        //     document.dispatchEvent(event);
			        // }, 3000);
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
	}
	
	const fileBlock = document.querySelector(".form-file");
	
	if (fileBlock) {
		const input = fileBlock.querySelector(".form-file__input");
		const btn = fileBlock.querySelector(".form-file__btn");
		const textDefault = fileBlock.querySelector(".form-file__text");
		const textFile = fileBlock.querySelector(".form-file__file-name");
	
		btn.addEventListener("click", () => {
			input.click();
		});
	
		input.addEventListener("change", () => {
			if (input.files.length > 0) {
				const fileName = input.files[0].name;
			
				fileBlock.classList.add("--file-added");
				textFile.textContent = fileName;
			} else {
				fileBlock.classList.remove("--file-added");
				textFile.textContent = "";
			}
		});
	}

 	const uploadBlocks = document.querySelectorAll("[data-brief-upload]");
	if (uploadBlocks.length) {
		const MAX_SIZE = 10 * 1024 * 1024; // 10MB
	
		uploadBlocks.forEach(block => {
	    block._filesArray = [];
	    const input = block.querySelector(".brief-upload__input");
	    const btn = block.querySelector("[data-upload-btn]");
	    const list = block.querySelector("[data-upload-list]");
	    const error = block.querySelector("[data-upload-error]");

	    let filesArray = block._filesArray; // ← ВАЖНО!

	
			// открыть input
			btn.addEventListener("click", () => input.click());
	
			// выбор файлов
			input.addEventListener("change", () => {
				const chosenFiles = Array.from(input.files);
	
				const currentSize = filesArray.reduce((t, f) => t + f.size, 0);
				const chosenSize = chosenFiles.reduce((t, f) => t + f.size, 0);
	
				if (currentSize + chosenSize > MAX_SIZE) {
					error.classList.add("--show");
					input.value = "";
					return;
				} else {
					error.classList.remove("--show");
				}
	
				filesArray.push(...chosenFiles);
				input.value = ""; // очистка
	
				renderList();
			});
	
			// render
			function renderList() {
				list.innerHTML = "";
	
				filesArray.forEach((file, index) => {
					const item = document.createElement("div");
					item.className = "brief-upload__file";
					item.innerHTML = `
						${file.name}
						<button type="button" data-remove-index="${index}" aria-label="remove">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#676767"/>
								<path d="M5 5L8 8L5 11" stroke="#676767"/>
								<path d="M11 11L8 8L11 5" stroke="#676767"/>
							</svg>
						</button>
					`;
					list.appendChild(item);
				});
			}
	
			// удаление
			list.addEventListener("click", e => {
				const btn = e.target.closest("[data-remove-index]");
				if (!btn) return;
	
				const index = +btn.dataset.removeIndex;
				filesArray.splice(index, 1);
	
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
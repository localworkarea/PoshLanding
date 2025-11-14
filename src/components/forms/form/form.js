import { gotoBlock, FLS } from "@js/common/functions.js";
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
	


	formSubmit()
	formFieldsInit()
}
document.querySelector('[data-fls-form]') ?
	window.addEventListener('load', formInit) : null
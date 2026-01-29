import { FLS } from "@js/common/functions.js"

// Валідація форм
export let formValidate = {
	getErrors(form) {
		FLS(`_FLS_FORM_VALIDATE`);
		let error = 0;
		let formRequiredItems = form.querySelectorAll('[required]');
		if (formRequiredItems.length) {
			formRequiredItems.forEach(formRequiredItem => {
				if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) {
					error += this.validateInput(formRequiredItem);
				}
			});
		}

	
		
		return error;
	},
	validateInput(formRequiredItem) {
		let error = 0;
			// RADIO GROUP VALIDATION (обязательна только та группа, где есть required)
		if (formRequiredItem.type === "radio") {
			const form = formRequiredItem.closest("form");
			if (!form) return 0;
			const groupName = formRequiredItem.name;
			const safeName = (window.CSS && CSS.escape) ? CSS.escape(groupName) : groupName.replace(/"/g, '\\"');

			const group = form.querySelectorAll(`input[type="radio"][name="${safeName}"]`);
			const checked = form.querySelector(`input[type="radio"][name="${safeName}"]:checked`);

			if (!checked) {
				// ошибка на всей группе (чтобы подсветка была)
				group.forEach(r => {
					this.addError(r);
					this.removeSuccess(r);
				});
				error++;
			} else {
				group.forEach(r => {
					this.removeError(r);
					this.addSuccess(r);
				});
			}
			return error;
		};
		if (formRequiredItem.type === "email") {
			formRequiredItem.value = formRequiredItem.value.replace(" ", "");
			if (this.emailTest(formRequiredItem)) {
				this.addError(formRequiredItem);
				this.removeSuccess(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
				this.addSuccess(formRequiredItem);
			}
		} else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
			this.addError(formRequiredItem);
			this.removeSuccess(formRequiredItem);
			error++;
		} else {
			if (!formRequiredItem.value.trim()) {
				this.addError(formRequiredItem);
				this.removeSuccess(formRequiredItem);
				error++;
			} else {
				this.removeError(formRequiredItem);
				this.addSuccess(formRequiredItem);
			}
		}
		return error;
	},
	addError(formRequiredItem) {
		formRequiredItem.classList.add('--form-error');
		formRequiredItem.parentElement.classList.add('--form-error');
		let inputError = formRequiredItem.parentElement.querySelector('[data-fls-form-error]');
		if (inputError) formRequiredItem.parentElement.removeChild(inputError);
		if (formRequiredItem.dataset.flsFormErrtext) {
			formRequiredItem.parentElement.insertAdjacentHTML('beforeend', `<div data-fls-form-error>${formRequiredItem.dataset.flsFormErrtext}</div>`);
		}
	},
	removeError(formRequiredItem) {
		formRequiredItem.classList.remove('--form-error');
		formRequiredItem.parentElement.classList.remove('--form-error');
		if (formRequiredItem.parentElement.querySelector('[data-fls-form-error]')) {
			formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('[data-fls-form-error]'));
		}
	},
	addSuccess(formRequiredItem) {
		formRequiredItem.classList.add('--form-success');
		formRequiredItem.parentElement.classList.add('--form-success');
	},
	removeSuccess(formRequiredItem) {
		formRequiredItem.classList.remove('--form-success')
		formRequiredItem.parentElement.classList.remove('--form-success')
	},
	removeFocus(formRequiredItem) {
		formRequiredItem.classList.remove('--form-focus')
		formRequiredItem.parentElement.classList.remove('--form-focus')
	},
	formClean(form) {
		form.reset();
		setTimeout(() => {
			let inputs = form.querySelectorAll('input,textarea')
			for (let index = 0; index < inputs.length; index++) {
				const el = inputs[index];
				formValidate.removeFocus(el)
				formValidate.removeSuccess(el)
				formValidate.removeError(el)

				el.classList.remove('--input-fill');
				if (el.parentElement) {
					el.parentElement.classList.remove('--input-fill');
				}
			}
			let checkboxes = form.querySelectorAll('input[type="checkbox"]')
			if (checkboxes.length) {
				checkboxes.forEach(checkbox => {
					if (!checkbox.hasAttribute('data-default-checked')) {
                    checkbox.checked = false;
          }
				})
			}
			if (window['flsSelect']) {
				let selects = form.querySelectorAll('select[data-fls-select]')
				if (selects.length) {
					selects.forEach(select => {
						window['flsSelect'].selectBuild(select)
					})
				}
			}
			
			let fileBlocks = form.querySelectorAll(".form-file");
			if (fileBlocks.length) {
				fileBlocks.forEach(block => {
					let input = block.querySelector(".form-file__input");
						let textFile = block.querySelector(".form-file__file-name");
				
					input.value = "";
					block.classList.remove("--file-added");
					textFile.textContent = "";
				});
			}

			// === Очистка кастомных upload-блоков брифа ===
			let briefUploads = form.querySelectorAll("[data-brief-upload]");
			if (briefUploads.length) {
			    briefUploads.forEach(block => {
			        const input = block.querySelector(".brief-upload__input");
			        const list = block.querySelector("[data-upload-list]");
			        const error = block.querySelector("[data-upload-error]");
					
			        input.value = "";
			        if (error) error.classList.remove("--show");
			        if (list) list.innerHTML = "";
					
			        block._filesArray = []; // ← сброс массива файлов
			    });
			}
			
		}, 0)
	},
	emailTest(formRequiredItem) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
	}
}
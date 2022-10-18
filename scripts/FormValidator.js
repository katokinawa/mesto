export class Validation {
  constructor(enableValidationConfig, validationElement) {
    this._formSelector = enableValidationConfig.formSelector;
    this._inputSelector = enableValidationConfig.inputSelector;
    this._submitButtonSelector = enableValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = enableValidationConfig.inactiveButtonClass;
    this._inputErrorClass = enableValidationConfig.inputErrorClass;
    this._errorClass = enableValidationConfig.errorClass;
    this._validationElement = validationElement;
    this._inputs = Array.from(this._validationElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._validationElement.querySelector(this._submitButtonSelector);
  }
    // Валидируем инпуты
  _validateInputs(input) {
    this._showCloseError(input);
    if (!input.validity.valid) {
      input.classList.add(this.inputErrorClass);
    } else {
      input.classList.remove(this.inputErrorClass);
    };
  };

  // Показываем ошибку
  _showError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    error.classList.add(this._errorClass);
    error.textContent = input.validationMessage;
  };
  // Убираем ошибку
  _closeError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  };

  // Проверяем валидацию и по итогу показываем или убираем ошибку
  _checkValidity(el) {
    if (!el.validity.valid) {
      this._showError(el)
    } else {
      this._closeError(el)
    };
  };

  // Проверяем валидность инпута для переключения статуса кнопки
  _hasInvalid() {
    return this._inputs.some((input) => {
      return !input.validity.valid
    });
  };

  // Задаём кнопке статус вкл/выкл добавлением класса
  _setButtonStateSave() {
    if (this._hasInvalid()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  };

  // Вешаем обработчики на инпуты и передаём метод валидации для лайв-валидации
  _setHandlerInputs() {
    this._setButtonStateSave(); // Проверяем в начале
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInputs(input);
        this._setButtonStateSave(); // Проверяем при инпуте
      });
    });
  };

 // Очищаем инпуты от ошибок
  _validityReset() {
    this._inputs.forEach((el) => {
      this._closeError(el);
    });
    this._setButtonStateSave();
  };

  // Метод запуска валидации
  enableValidation() {
    this._setButtonStateSave();
    this._inputs.forEach((el) => {
      el.addEventListener('input', () => {
        this._checkValidity(el);
        this._setButtonStateSave();
      });
    });
  };
};



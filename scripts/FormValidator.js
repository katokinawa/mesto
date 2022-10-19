export class FormValidator {
  constructor(ValidationConfig, validationElement) {
    this._formSelector = ValidationConfig.formSelector;
    this._inputSelector = ValidationConfig.inputSelector;
    this._submitButtonSelector = ValidationConfig.submitButtonSelector;
    this._inactiveButtonClass = ValidationConfig.inactiveButtonClass;
    this._inputErrorClass = ValidationConfig.inputErrorClass;
    this._errorClass = ValidationConfig.errorClass;
    this._validationElement = validationElement;
    this._inputs = Array.from(this._validationElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._validationElement.querySelector(this._submitButtonSelector);
  }

  // Показываем ошибку
  _showError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    error.classList.add(this._errorClass);
    error.classList.add(this.inputErrorClass);
    error.textContent = input.validationMessage;
  };
  // Убираем ошибку
  _closeError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    error.classList.remove(this._errorClass);
    error.classList.remove(this.inputErrorClass);
    error.textContent = '';
  };

  // Проверяем валидацию и по итогу показываем или убираем ошибку
  _checkValidity(el) {
    this._closeError(el);
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
        this._checkValidity(input);
        this._setButtonStateSave(); // Проверяем при инпуте
      });
    });
  };

 // Очищаем инпуты от ошибок
  validityReset() {
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



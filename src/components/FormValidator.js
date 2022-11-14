export default class FormValidator {
  constructor(validationConfig, validationElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._validationElement = validationElement;
    this._inputs = Array.from(this._validationElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._validationElement.querySelector(this._submitButtonSelector);
  }

  // Показываем ошибку
  _showError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = input.validationMessage;
    error.classList.add(this._errorClass);
  };
  // Убираем ошибку
  _hideError(input) {
    const error = this._validationElement.querySelector(`.${input.id}-error`);
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
  };

  // Проверяем валидацию и по итогу показываем или убираем ошибку
  _checkValidity(el) {
    this._hideError(el);
    if (!el.validity.valid) {
      this._showError(el)
    } else {
      this._hideError(el)
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

 // Очищаем инпуты от ошибок
  resetValidation() {
    this._inputs.forEach((el) => {
      this._hideError(el);
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



// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// Дальше по коду именуется "cfg"
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-button',
  submitButtonSelector: '.popup__create-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function hasInvalid (inputs) {
  return inputs.some((input) => !input.validity.valid);
}

function setButtonStateSave(cfg, buttonSave, inputs) {
  if (hasInvalid(inputs)) {
    buttonSave.classList.add(cfg.inactiveButtonClass);
  } else {
    buttonSave.classList.remove(cfg.inactiveButtonClass);
  };
};

function setButtonStateSubmit(cfg, buttonSubmit, inputs) {
  if (hasInvalid(inputs)) {
    buttonSubmit.classList.add(cfg.inactiveButtonClass);
  } else {
    buttonSubmit.classList.remove(cfg.inactiveButtonClass);
  };
};

// Показываем ошибку в инпуте
function showInputError (form, input, cfg) {
  const error = form.querySelector(`.${input.id}-error`);
  if (!input.validity.valid) {
    error.classList.add(cfg.errorClass);
    error.textContent = input.validationMessage;
  };
};

// Прячем ошибку в инпуте
function hideInputError(form, input, cfg) {
  const error = form.querySelector(`.${input.id}-error`);
  if (input.validity.valid) {
    error.classList.remove(cfg.errorClass);
    error.textContent = '';
  };
};

// Валидируем инпуты
function validateInputs(form, input, cfg) {
  showInputError(form, input, cfg);
  hideInputError(form, input, cfg);
  if (!input.validity.valid) {
    input.classList.add(cfg.inputErrorClass);
  } else {
    input.classList.remove(cfg.inputErrorClass);
  };
};

// Вешаем обработчики на инпуты и передаём функцию валидации в режиме реального времени
function setHandlerInputs (form, cfg) {
  const inputs = Array.from(form.querySelectorAll(cfg.inputSelector));
  const buttonSubmit = form.querySelector(cfg.submitButtonSelector);
  const buttonSave = form.querySelector(cfg.setButtonStateSave);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInputs(form, input, cfg);
      setButtonStateSubmit(cfg, buttonSubmit, inputs);
      setButtonStateSave(cfg, buttonSave, inputs);
    });
  });
};

// Отключаем дефолтное поведение
function disableDefaultHandling (evt) {
  evt.preventDefault();
};

// Функция запуска валидации
function enableValidation (cfg) {
  const forms = document.querySelectorAll(cfg.formSelector);
  forms.forEach((form) => {
    form.addEventListener('submit', disableDefaultHandling); // Функция отключения дефолтного поведения для форм
    setHandlerInputs(form, cfg); // Функция вешает обработчики на инпуты
  });
};

// Включаем валидацию
enableValidation(enableValidationConfig);

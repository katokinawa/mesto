// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// Дальше по коду именуется "cfg"
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Показываем ошибки в span либо скрываем
function errorShowAndHidden (form, input, cfg) {
  const error = form.querySelector(`.${input.id}-error`);
  if (!input.validity.valid) {
    error.classList.add(cfg.errorClass);
    error.textContent = input.validationMessage;
  } else {
    error.classList.remove(cfg.errorClass);
    error.textContent = '';
  };
};

// Валидируем инпуты
function validateInputs(form, input, cfg) {
  errorShowAndHidden(form, input, cfg);
  if (!input.validity.valid) {
    input.classList.add(cfg.inputErrorClass);
  } else {
    input.classList.remove(cfg.inputErrorClass);
  };
};

// Вешаем обработчики на инпуты
function setHandlerInputs (form, cfg) {
  const inputs = Array.from(form.querySelectorAll(cfg.inputSelector));
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInputs(form, input, cfg);
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

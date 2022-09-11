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

// Проверяем валидность инпута для переключения статуса кнопки
function hasInvalid (inputs) {
  return inputs.some((input) => !input.validity.valid);
}

// Задаём кнопке статус вкл/выкл добавлением класса
function setButtonStateSave(cfg, button, inputs) {
  if (hasInvalid(inputs)) {
    button.classList.add(cfg.inactiveButtonClass);
  } else {
    button.classList.remove(cfg.inactiveButtonClass);
  };
};

// Вешаем обработчики на инпуты и передаём функцию валидации для лайв-валидации
function setHandlerInputs (form, cfg) {
  const inputs = Array.from(form.querySelectorAll(cfg.inputSelector));
  const button = form.querySelector(cfg.submitButtonSelector);
  setButtonStateSave(cfg, button, inputs); // Проверяем в начале
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInputs(form, input, cfg);
      setButtonStateSave(cfg, button, inputs); // Проверяем при инпуте
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

// Запуск валидации
enableValidation(enableValidationConfig);

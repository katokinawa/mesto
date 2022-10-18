import Card from './Card.js';
import { initialCards } from './initialcards.js';
import { Validation } from './FormValidator.js'
/* button */
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button')
const addButton = document.querySelector('.profile__add-button');

/* form */
const submitProfileFormHandlerAdd = document.querySelector('.submit-profile-form-handler-add');
const submitProfileFormHandlerEdit = document.querySelector('.submit-profile-form-handler-edit')
const nameInput = document.querySelector('.name-input');
const jobInput = document.querySelector('.job-input');
const itemNameInput = document.querySelector('.item-name-input');
const itemLinkInput = document.querySelector('.item-link-input');

/* other */
const profilePopup = document.querySelector('.profile-popup');
const photoItemPopup = document.querySelector('.photo-item-popup');
const photoFullscreenPopup = document.querySelector('.photo-fullscreen-popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const photoFlexItem = document.querySelector('.photo-flex__list');
const imageModal = document.querySelector('.popup__image');
const imageModalTitle = document.querySelector('.popup__title-image');
const popups = document.querySelectorAll('.popup');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupCreateButton = document.querySelector('.popup__create-button');
/* main js code */

const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formValidator = new Object();

// Валидация
function enableValidity(el) {
  const form = Array.from(document.querySelectorAll(el.formSelector))
  form.forEach((form) => {
    const validator = new Validation(el, form)
    const name = form.getAttribute('name')
    formValidator[name] = validator;
    validator.enableValidation();
  });
};

enableValidity(enableValidationConfig);

// Функции открытия попапа
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupHandleClickEscape);
};

// Функция закрытия попапа
function closePopup(popupClose) {
  popupClose.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupHandleClickEscape)
};

// Функция включения кнопки в попапе редактирования профиля
function setButtonActiveProfile() {
  popupSaveButton.classList.remove('popup__button_disabled');
  popupSaveButton.removeAttribute('disabled');
};

// Функция выключения кнопки в попапе добавления карточек
function setButtonDisabledPhotoItem() {
  popupCreateButton.classList.add('popup__button_disabled');
  popupCreateButton.setAttribute('disabled', '');
};

// Функция закрытия попапа по клику на клавишу "Esc"
function closePopupHandleClickEscape(evt) {
  if (evt.key === 'Escape') {
    const popupClosePressEsc = document.querySelector('.popup_opened');
    closePopup(popupClosePressEsc);
  };
};

// Функция закрытия попапа по клику на оверлей
function closePopupHandleClickOnOverlay() {
  popups.forEach((el) => {
    el.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(el);
      };
    });
  });
};

closePopupHandleClickOnOverlay();

// Слушатели событий
closeButtons.forEach((button) => {
  const popupClosest = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClosest))
});

// Слушатель, который открывает попап изменения профиля и подставляет "старые" значения в поля ввода
editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  setButtonActiveProfile();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formValidator[submitProfileFormHandlerEdit.getAttribute('name')]._validityReset();
});

// Слушатель открывает попап и делает кнопку добавления недоступной, также очищает поля
addButton.addEventListener('click', () => {
  openPopup(photoItemPopup);
  setButtonDisabledPhotoItem();
  formValidator[submitProfileFormHandlerAdd.getAttribute('name')]._validityReset();
});

// Слушатель отправки формы редактирования на сайте
submitProfileFormHandlerEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
});

// Чтобы по нажатию по картинке открывалась во весь экран
function imgCardOpenFullscreen(nameCard, linkCard) {
  imageModalTitle.textContent = nameCard;
  imageModal.src = linkCard;
  imageModal.alt = nameCard;
  openPopup(photoFullscreenPopup);
};

// Создание карточек
function createCard(cardInfo) {
  const cardElement = new Card(cardInfo, '#photo-template', imgCardOpenFullscreen).generateCard();
  return cardElement;
};

// Присвоение значения новым айтемам и добавление на страницу
function addPhotoItem(cardAdd) {
  const item = createCard(cardAdd);
  photoFlexItem.prepend(item);
};

// Передача родных карточек на сайт и их добавление
initialCards.forEach((item) => {
  addPhotoItem(item);
});

// Слушатель, который позволяет отправлять форму и создавать карточки
submitProfileFormHandlerAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardBlank = new Object();
  cardBlank.name = itemNameInput.value;
  cardBlank.link = itemLinkInput.value;
  addPhotoItem(cardBlank);
  closePopup(photoItemPopup);
});

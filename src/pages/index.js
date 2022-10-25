import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js'
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';

import { initialCards, photoFlexItem, editButton, addButton, enableValidationConfig, nameInput, jobInput, profileName, profileJob } from "../utils/constants.js";
import "./index.css"

const formValidator = new Object();

// Валидация
function enableValidity(el) {
  const form = Array.from(document.querySelectorAll(el.formSelector))
  form.forEach((form) => {
    const validator = new FormValidator(el, form)
    const name = form.getAttribute('name')
    formValidator[name] = validator;
    validator.enableValidation();
  });
};

enableValidity(enableValidationConfig);

// Создание карточек
function createCard(cardInfo) {
  const cardElement = new Card(cardInfo, '#photo-template', () => {
    {popupWithImage.open(cardInfo)}
  }).generateCard();

  return cardElement;
};

// первоначальные карточки
const cards = new Section({
  items: initialCards, // это массив данных, которые нужно добавить на страницу при инициализации класса
  renderer: (data) => { // функция, которая отвечает за создание и отрисовку данных на странице.
    cards.addItem(createCard(data)); // добавялем на сайт
    },
  },
  photoFlexItem // селектор контейнера, в который нужно добавлять созданные элементы.
);
cards.renderItems();

// попап с картинкой
const popupWithImage = new PopupWithImage('.photo-fullscreen-popup')
popupWithImage.setEventListeners(); // слушатели


// попап с формой
const popupAdd = new PopupWithForm({
  popupSelector: '.photo-item-popup', // это селектор
  submitProfileFormHandler: (data) => { // колбэк сабмита формы
    console.dir(data)
    cards.addItem(createCard({name: data.itemNameInput, link: data.itemLinkInput})); // добавляем на сайт
    },
});
popupAdd.setEventListeners(); // слушатели


// Слушатель открывает попап и делает кнопку добавления недоступной, также очищает поля
addButton.addEventListener('click', () => {
  popupAdd.open();
  const addButton = popupAdd.getformPopup();
  formValidator[addButton.getAttribute('name')].validityReset();
});

// попап с редактированием профиля
const popupEdit = new PopupWithForm({
  popupSelector: '.profile-popup',
  submitProfileFormHandler
});
popupEdit.setEventListeners(); // слушатели

// Информация о пользователе
const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob
});

// Слушатель, который открывает попап изменения профиля и подставляет "старые" значения в поля ввода
editButton.addEventListener('click', () => {
  popupEdit.open();
  const formEdit = popupEdit.getformPopup();
  const el = userInfo.getUserInfo();
  nameInput.value= el.name;
  jobInput.value= el.job;
  formValidator[formEdit.getAttribute('name')].validityReset();
});

function submitProfileFormHandler(el){
  userInfo.setUserInfo(el.nameInput, el.jobInput);
}

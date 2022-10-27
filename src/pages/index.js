import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { initialCards, photoFlexItem, editButton, addButton, enableValidationConfig, nameInput, jobInput } from "../utils/constants.js";
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

// Первоначальные карточки
const cardSection = new Section({
  items: initialCards, // это массив данных, которые нужно добавить на страницу при инициализации класса
  renderer: (data) => { // функция, которая отвечает за создание и отрисовку данных на странице.
    cardSection.addItem(createCard(data)); // добавялем на сайт
    },
  },
  photoFlexItem // селектор контейнера, в который нужно добавлять созданные элементы.
);
cardSection.renderItems();

// Попап с картинкой
const popupWithImage = new PopupWithImage('.photo-fullscreen-popup')
popupWithImage.setEventListeners(); // слушатели


// Попап с формой
const popupAdd = new PopupWithForm({
  popupSelector: '.photo-item-popup', // это селектор
  submitProfileFormHandler: (data) => { // колбэк сабмита формы
    cardSection.addItem(createCard({name: data.itemNameInput, link: data.itemLinkInput})); // добавляем на сайт
    },
});
popupAdd.setEventListeners(); // слушатели


// Слушатель открывает попап и делает кнопку добавления недоступной, также очищает поля
addButton.addEventListener('click', () => {
  popupAdd.open();
  const formAdd = popupAdd.getformPopup();
  formValidator[formAdd.getAttribute('name')].validityReset();
});

// Попап с редактированием профиля
const popupEdit = new PopupWithForm({
  popupSelector: '.profile-popup',
  submitProfileFormHandler
});
popupEdit.setEventListeners(); // слушатели

// Информация о пользователе
const userInfo = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitle'
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

// Функция сабмита, которая обращается к методу класса userInfo.setUserInfo и задаёт имя и работу
function submitProfileFormHandler(el){
  userInfo.setUserInfo(el.nameInput, el.jobInput);
}

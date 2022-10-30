import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import { initialCards, photoFlexItem, editButton, addButton, enableValidationConfig, nameInput, jobInput, apiOptions } from "../utils/constants.js";
import "./index.css"

let userId = '';
let cardId = '';
let cardForTrash = '';

const api = new Api(apiOptions);

const formValidator = new Object();

const promises = [api.getUserInfo(), api.getInitialCards()]
// Передаём массив с промисами методу Promise.all
Promise.all(promises)
  .then(([userData, CardsData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserId(userData);
    userId = userData._id
    cardsList.renderItems(CardsData);
  })
  .catch((err) => {
    console.log(`${err}`)
  });

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
  const cardElement = new Card(cardInfo, '#photo-template', {
  handleCardClick: () => {
    popupWithImage.open(cardInfo).generateCard();
  },

  handleAddLike: () => {
    api.addLikeCard(cardInfo._id)
    .then((obj) => {
      cardElement.setLikeInfo(obj.likes);
    })
    .catch((err) => {
      console.log('Ошибка при лайке', err);
  })},

  handleRemoveLike: () => {
    api.removeLikeCard(cardInfo._id)
    .then((obj) => {
      cardElement.setLikeInfo(obj.likes);
    })
    .catch((err) => {
      console.log('Ошибка удаление лайка', err);
  })},

  handleTrashClick: () => {
    popupConfirm.open(cardInfo);
    cardId = cardInfo._id;
    cardForTrash = cardElement;
  }},
  userId
  );

  return cardElement;
};

// Первоначальные карточки
const cardSection = new Section({
    renderer: (data) => { // функция, которая отвечает за создание и отрисовку данных на странице.
    cardSection.addItem(createCard(data)); // добавялем на сайт
    },
  },
  photoFlexItem // селектор контейнера, в который нужно добавлять созданные элементы.
);

// Попап с картинкой
const popupWithImage = new PopupWithImage('.photo-fullscreen-popup')
popupWithImage.setEventListeners(); // слушатели


// Попап с формой
const popupAdd = new PopupWithForm({
  popupSelector: '.photo-item-popup', // это селектор
  submitProfileFormHandler: (data) => { // колбэк сабмита формы
    return api.generateCard(data.itemNameInput, data.itemLinkInput)
    .then((data) => {
      cardSection.addItem(generateCard(data));
    })
    .catch((err) => {
      console.log('Ошибка при добавлении карточки', err);
    })
  },
});
popupAdd.setEventListeners(); // слушатели


// Слушатель открывает попап и делает кнопку добавления недоступной, также очищает поля
addButton.addEventListener('click', () => {
  popupAdd.open();
  const formAdd = popupAdd.getformPopup();
  formValidator[formAdd.getAttribute('name')].validityReset();
});

// Информация о пользователе
const userInfo = new UserInfo({
  name: '.profile__title',
  job: '.profile__subtitle',
  avatar: '.profile__avatar'
});

// Попап с редактированием профиля
const popupEdit = new PopupWithForm({
  popupSelector: '.profile-popup',
  submitProfileFormHandler: (data) => {
    return api.setUserInfo(data.name, data.job)
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => {
      console.log('Ошибка при редактировании профиля', err)
    })
  }
});
popupEdit.setEventListeners(); // слушатели

// Слушатель, который открывает попап изменения профиля и подставляет "старые" значения в поля ввода
editButton.addEventListener('click', () => {
  popupEdit.open();
  const formEdit = popupEdit.getformPopup();
  const el = userInfo.getUserInfo();
  nameInput.value= el.name;
  jobInput.value= el.job;
  formValidator[formEdit.getAttribute('name')].validityReset();
});

const popupAvatar = new PopupWithForm({
  popupSelector: '.update-avatar-popup',
  submitProfileFormHandler: (data)  => {
    return api.setUserAvatar(data.avatar)
    .then(data => {
      userInfo.setUserAvatar(data);
    })
    .catch((err) => {
      console.log('Ошибка при редактировании аватара', err);
    })
  },
});
popupAvatar.setEventListeners();

const popupConfirm = new PopupWithForm({
  popupSelector: '.confirm-popup',
  submitProfileFormHandler: ()  => {
    return api.deleteCard(cardId)
    .then(() => {
      cardForDelete.handleClickDelete();
    })
    .catch((err) => {
      console.log('Ошибка при подтверждении удаления карточки', err);
    })
  },
});
popupConfirm.setEventListeners();

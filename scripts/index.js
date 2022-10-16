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
      if (evt.target === evt.currentTarget) { // У ревьювера была ошибка в слове "target" в окне замечания, а я решил скопировать, вместо того, чтобы писать вручную (мем смешной, ситуация страшная)...
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

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  setButtonActiveProfile();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addButton.addEventListener('click', () => {
  openPopup(photoItemPopup);
  setButtonDisabledPhotoItem();
  submitProfileFormHandlerAdd.reset();
});

// Слушатель отправки формы редактирования на сайте
submitProfileFormHandlerEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
});

// Родные карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Функиця создания карточки

class Card {
  constructor(templateSelector, cardInfo, openImageFullscreen) {
    this._templateSelector = templateSelector;
    this._imageNameCard = cardInfo.imageNameCard;
    this._imageLinkCard = cardInfo.imageLinkCard;
    this._openImageFullscreen = openImageFullscreen;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector('#container').cloneNode(true);
  }
  generateCard() {
    this._element = this._getTemplate();

    this._imageNameCard = this._element.querySelector('.photo-flex__title');
    this._imageLinkCard = this._element.querySelector('.photo-flex__image');
    this._likeButton = this._element.querySelector('.photo-flex__like-button');
    this._trashButton = this._element.querySelector('.photo-flex__trash');

    this._NameCard.textContent = this._imageNameCard;
    this._LinkCard.src = this._imageLinkCard;
    this._LinkCard.alt = this._imageNameCard;

    return this._element;
  }
}

function openPopup(initialCards) {
  imageNameCard.textContent = initialCards.name;
  imageLinkCard.src = initialCards.link;
  imageLinkCard.alt = initialCards.name;
  openPopup(popupCard);
}


function createCard(cardAdd) {
  const newCardElement = new Card(photoFlexItem, cardAdd, openPopup).createCard();
  return newCardElement;
}

// Присвоение значения новым айтемам и добавление на страницу
function addPhotoItem(cardAdd) {
  photoFlexItem.prepend(createCard(cardAdd));
}

// Передача родных карточек на сайте
initialCards.forEach((item) => {
  addPhotoItem(item);
});


// initialCards.forEach((item) => {
//   const card = new Card(templateSelector, cardInfo, openImageFullscreen);
//   const cardElement = card.generateCard();
//   photoFlexItem.append(cardElement);
// });

// function createCard(item) {
//   const photoElement = photoTemplate.querySelector('#container').cloneNode(true);
//   const imageNameCard = photoElement.querySelector('.photo-flex__title');
//   const imageLinkCard = photoElement.querySelector('.photo-flex__image');
//   imageNameCard.textContent = item.name;
//   imageLinkCard.src = item.link;
//   imageLinkCard.alt = item.name;

//   // Кнопка лайка внутри карточки
//   const likeButton = photoElement.querySelector('.photo-flex__like-button');
//   likeButton.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('photo-flex__like-button_active');
//   });

//   // Кнопка удаления карточки
//   const deleteButton = photoElement.querySelector('.photo-flex__trash');
//   deleteButton.addEventListener('click', (evt) => {
//     evt.target.closest('.photo-flex__item').remove();
//   });

//   // Открытие полного размера изображения внутри карточки
//   imageLinkCard.addEventListener('click', (item) => {
//     imageModalTitle.textContent = item.target.alt;
//     imageModal.src = item.target.src;
//     imageModal.alt = item.target.alt;
//     openPopup(photoFullscreenPopup);
//   });

//   return photoElement;
// };

// // Присвоение значения новым айтемам и добавление на страницу
// function addPhotoItem(cardAdd) {
//   photoFlexItem.prepend(createCard(cardAdd));
// };

// // Передача родных карточек на сайте
// initialCards.forEach(addPhotoItem);

// Слушатель, который позволяет отправлять форму и создавать карточки
submitProfileFormHandlerAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardBlank = new Object();
  cardBlank.name = itemNameInput.value;
  cardBlank.link = itemLinkInput.value;
  addPhotoItem(cardBlank);
  closePopup(photoItemPopup);
});

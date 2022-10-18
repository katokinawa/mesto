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
  constructor(cardInfo, templateSelector) {
    this._templateSelector = templateSelector;
    this._imageNameCard = cardInfo.name;
    this._imageLinkCard = cardInfo.link;

  }

  _getTemplate() {
    const template = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('#container')
    .cloneNode(true);

    return template;
  }
  generateCard() {
    this._element = this._getTemplate();

    this._imgCardName = this._element.querySelector('.photo-flex__title');
    this._imgCardLink = this._element.querySelector('.photo-flex__image');
    this._like = this._element.querySelector('.photo-flex__like-button');
    this._trash = this._element.querySelector('.photo-flex__trash');

    this._imgCardName.textContent = this._imageNameCard;
    this._imgCardLink.src = this._imageLinkCard;
    this._imgCardLink.alt = this._imageNameCard;

    return this._element;
  }

  _photoFullscreenPopup(name, link) {
    imageModalTitle.textContent = _imageNameCard;
    imageModal.src = link;
    imageModal.alt = _imageNameCard;
    openPopup(photoFullscreenPopup);
  }

  _handleClick() {
    this._photoFullscreenPopup(this._imageNameCard, this._imageLinkCard);
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleLike() {
    this._like.classList.toggle('photo-flex__like-button_active');
  }

  _setEventListeners() {
    this._imgCardLink.addEventListener('click', () => {
      _handleClick();
    });
    this._trash.addEventListener('click', () => {
      _handleDelete();
    });
    this._like.addEventListener('click', () => {
      _handleLike();
    });
  }
}

function createCard(cardInfo) {
  const cardElement = new Card(cardInfo, '#photo-template').generateCard();
  return cardElement;
}

// Присвоение значения новым айтемам и добавление на страницу
function addPhotoItem(cardAdd) {
  const item = createCard(cardAdd);
  photoFlexItem.prepend(item);
}

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

/* button */
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button')
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelectorAll('.popup__save-button');

/* form */
const formElements = document.querySelectorAll('.popup__form-container');
const profileHandleFormSubmitAdd = document.querySelector('.handle-profile-form-submit-add');
const profileHandleFormSubmitEdit = document.querySelector('.handle-profile-form-submit-edit')
const nameInput = document.querySelector('.name-input');
const jobInput = document.querySelector('.job-input');
const itemNameInput = document.querySelector('.item-name-input');
const itemLinkInput = document.querySelector('.item-link-input');

/* other */
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.profile-popup');
const photoItemPopup = document.querySelector('.photo-item-popup');
const photoFullscreenPopup = document.querySelector('.photo-fullscreen-popup');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const photoFlexItem = document.querySelector('.photo-flex__list');
const photoTemplate = document.querySelector('#photo-template').content;
const imageModal = photoFullscreenPopup.querySelector('.popup__image');
const imageModalTitle = photoFullscreenPopup.querySelector('.popup__title-image');
const imagePopupClick = photoTemplate.querySelector('.photo-flex__image');
const likeButton = photoTemplate.querySelector('.photo-flex__like-button');

/* main js code */



// Функции открытия попапа
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
};

// Функция закрытия попапа
function closePopup(popupClose) {
  popupClose.classList.remove('popup_opened');
};


// Слушатели событий
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup))
});

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.setAttribute('value', profileName.textContent);
  jobInput.setAttribute('value', profileJob.textContent);
});

addButton.addEventListener('click', () => {
  openPopup(photoItemPopup);
  profileHandleFormSubmitAdd.reset();
});

// Слушатели отправки форм на сайте
profileHandleFormSubmitEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
});


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

  // Создание карточки
  function createCard(item) {
    const photoElement = photoTemplate.querySelector('#container').cloneNode(true);
    const imageNameCard = photoElement.querySelector('.photo-flex__title');
    const imageLinkCard = photoElement.querySelector('.photo-flex__image');
    imageNameCard.textContent = item.name;
    imageLinkCard.src = item.link;
    imageLinkCard.alt = item.name;
    return photoElement;
  };

  const deleteButton = photoTemplate.querySelector('.photo-flex__trash');
  console.log(deleteButton);

  deleteButton.addEventListener('click', () => {
    deleteButton.remove();
    console.log('test');
  });

  // Присвоение значения новым айтемам и добавление на сайт
  function addPhotoItem(cardAdd) {
    photoFlexItem.prepend(createCard(cardAdd));
  };

  // Передача родных карточек на сайте
  initialCards.forEach(addPhotoItem);

  // Добавляет всплытие картинки
  function imageModalAdd (name, link) {
    openPopup(photoFullscreenPopup);
    imageModal.src = link;
    imageModal.alt = name;
    imageModalTitle.textContent = name;
    return name, link;
  }

  // Удаление карточки


// Кнопка лайка
function likeButtonActive () {
    likeButton.classList.toggle('photo-flex__like-button_active')
  };


  likeButton.addEventListener('click', likeButtonActive);


  imagePopupClick.addEventListener('click', imageModalAdd);

  // Слушатели для всплытия картинки и добавления карточки

  profileHandleFormSubmitAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardBlank = new Object();
    cardBlank.name = itemNameInput.value;
    cardBlank.link = itemLinkInput.value;
    addPhotoItem(cardBlank);
    closePopup(photoItemPopup);
  });


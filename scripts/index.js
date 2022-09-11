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
const photoTemplate = document.querySelector('#photo-template').content;
const imageModal = document.querySelector('.popup__image');
const imageModalTitle = document.querySelector('.popup__title-image');
const popup = document.querySelectorAll('.popup');
/* main js code */

// Функции открытия попапа
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
};

// Функция закрытия попапа
function closePopup(popupClose) {
  popupClose.classList.remove('popup_opened');
};

// Функция закрытия попапа по клику на оверлей
popup.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popupElement);
    };
  });
})

// Слушатели событий
closeButtons.forEach((button) => {
  const popupClosest = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClosest))
});

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.setAttribute('value', profileName.textContent);
  jobInput.setAttribute('value', profileJob.textContent);
});

addButton.addEventListener('click', () => {
  openPopup(photoItemPopup);
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
function createCard(item) {
  const photoElement = photoTemplate.querySelector('#container').cloneNode(true);
  const imageNameCard = photoElement.querySelector('.photo-flex__title');
  const imageLinkCard = photoElement.querySelector('.photo-flex__image');
  imageNameCard.textContent = item.name;
  imageLinkCard.src = item.link;
  imageLinkCard.alt = item.name;

  // Кнопка лайка внутри карточки
  const likeButton = photoElement.querySelector('.photo-flex__like-button');
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('photo-flex__like-button_active');
  });

  // Кнопка удаления карточки
  const deleteButton = photoElement.querySelector('.photo-flex__trash');
  deleteButton.addEventListener('click', (evt) => {
    evt.target.closest('.photo-flex__item').remove();
  });

  // Открытие полного размера изображения внутри карточки
  imageLinkCard.addEventListener('click', (evt) => {
    imageModalTitle.textContent = evt.target.alt;
    imageModal.src = evt.target.src;
    imageModal.alt = evt.target.alt;
    openPopup(photoFullscreenPopup);
  });

  return photoElement;
};

// Присвоение значения новым айтемам и добавление на страницу
function addPhotoItem(cardAdd) {
  photoFlexItem.prepend(createCard(cardAdd));
};

// Передача родных карточек на сайте
initialCards.forEach(addPhotoItem);

// Слушатель, который позволяет отправлять форму и создавать карточки
submitProfileFormHandlerAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardBlank = new Object();
  cardBlank.name = itemNameInput.value;
  cardBlank.link = itemLinkInput.value;
  addPhotoItem(cardBlank);
  closePopup(photoItemPopup);
});

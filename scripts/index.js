/* button */
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button')
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelectorAll('.popup__save-button');

/* form */
const formElement = document.querySelectorAll('.popup__form-container');
const nameInput = document.querySelector('.name-input');
const jobInput = document.querySelector('.job-input');
const itemNameInput = document.querySelector('.item-name-input');
const itemLinkInput = document.querySelector('.item-link-input');

/* other */
const popupShow = document.querySelectorAll('.popup')
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const photoFlexItem = document.querySelector('.photo-flex__list');
const photoTemplate = document.querySelector('#photo-template').content;
/* main js code */


function popupFormValue() {
  nameInput.setAttribute('value', profileName.textContent);
  jobInput.setAttribute('value', profileJob.textContent);
};
// Функции открытия попапа
function openPopup() {
  popupFormValue();
  popupShow[0].classList.add('popup_opened');
};
function openPopupAdd() {
  popupShow[1].classList.add('popup_opened');
};
function openPopupImage() {
  popupShow[2].classList.add('popup_opened');
};

// Функция закрытия попапа
function closePopup() {
  popupShow[0].classList.remove('popup_opened');
  popupShow[1].classList.remove('popup_opened');
  popupShow[2].classList.remove('popup_opened');
};

// Слушатели событий
editButton.addEventListener('click', openPopup);
closeButton[0].addEventListener('click', closePopup);
closeButton[1].addEventListener('click', closePopup);
closeButton[2].addEventListener('click', closePopup);
addButton.addEventListener('click', openPopupAdd);

// Функция отправки
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
};

formElement[0].addEventListener('submit', formSubmitHandler);

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


function addPhotoItem(name, link) {
  const photoElement = photoTemplate.querySelector('#container').cloneNode(true);
  const likeButton = photoElement.querySelector('.photo-flex__like-button');
  const deleteButton = photoElement.querySelector('.photo-flex__trash');


  // Присвоение значения новым айтемам
  photoElement.querySelector('#name').textContent = name;
  photoElement.querySelector('#link').src = link;
  photoElement.querySelector('#link').alt = name;
  photoFlexItem.prepend(photoElement);

  // Кнопка лайка
  function likeButtonActive () {
    likeButton.classList.toggle('photo-flex__like-button_active')
  };

  // Удаление карточки
  function deletePhotoItem () {
    photoElement.remove();
  };

  // Добавляет всплытие картинки
  function imageModalAdd (addPhotoItem) {
    openPopupImage();
    const imageModal = document.querySelector('.popup__image');
    const imageModalTitle = document.querySelector('.popup__title-image');
    imageModal.src = link;
    imageModal.alt = name;
    imageModalTitle.textContent = name;
  }

  const imagePopupClick = document.querySelector('.photo-flex__image');
  // Слушатели для всплытия картинки, кнопки удаления и лайка
  imagePopupClick.addEventListener('click', imageModalAdd);
  deleteButton.addEventListener('click', deletePhotoItem);
  likeButton.addEventListener('click', likeButtonActive);
};


// Передача родных карточек на сайте
initialCards.forEach(function (item) {
  addPhotoItem(item.name, item.link);
});

// Кнопка сохраненния значений новых карточек
saveButton[1].addEventListener('click', function () {
  const name = itemNameInput;
  const link = itemLinkInput;
  addPhotoItem(name.value, link.value);
});

// Функция отправки
function formSubmitHandlerPhoto(evt) {
  evt.preventDefault();
  closePopup();
}
formElement[1].addEventListener('submit', formSubmitHandlerPhoto);


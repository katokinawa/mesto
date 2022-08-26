/* button */
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelectorAll('.popup__close-button')
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelectorAll('.popup__save-button');

/* form */
const formElement = document.querySelectorAll('.popup__form-container');
const nameInput = document.querySelector('.name-input');
const jobInput = document.querySelector('.job-input');
const itemNameInput = document.querySelector('.item__name-input');
const itemLinkInput = document.querySelector('.item__link-input');

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

function openPopup() {
  popupFormValue();
  popupShow[0].classList.add('popup_opened');
};

function openPopupAdd() {
  popupShow[1].classList.add('popup_opened');
};

function closePopup() {
  popupShow[0].classList.remove('popup_opened');
  popupShow[1].classList.remove('popup_opened');
};


editButton.addEventListener('click', openPopup);
closeButton[0].addEventListener('click', closePopup);
closeButton[1].addEventListener('click', closePopup);
addButton.addEventListener('click', openPopupAdd);


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
  photoElement.querySelector('#name').textContent = name;
  photoElement.querySelector('#link').src = link;
  photoElement.querySelector('#name').setAttribute('alt', name);
  photoFlexItem.prepend(photoElement);
};

initialCards.forEach(function (item) {
  addPhotoItem(item.name, item.link);
  photoFlexItem.append(item);
});

saveButton[1].addEventListener('click', function () {
  const name = itemNameInput;
  const link = itemLinkInput;
  addPhotoItem(name.value, link.value);
});


function formSubmitHandlerPhoto(evt) {
  evt.preventDefault();
  closePopup();
}
formElement[1].addEventListener('submit', formSubmitHandlerPhoto);


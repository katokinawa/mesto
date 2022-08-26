/* button */
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelectorAll('.popup__close-button')
let addButton = document.querySelector('.profile__add-button');
let saveButton = document.querySelectorAll('#save-button');

/* form */
let formElement = document.querySelectorAll('#form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let itemNameInput = document.querySelector('#itemNameInput');
let itemUrlInput = document.querySelector('#itemUrlInput');

/* other */
let popupShow = document.querySelectorAll('#popup')
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let photoFlexItem = document.querySelector('#photoFlexContainer');
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

function addPhotoItem(nameValue, linkValue) {
  const photoTemplate = document.querySelector('#photo-template').content;
  const photoElement = photoTemplate.querySelector('#container').cloneNode(true);
  photoElement.querySelector('#name').textContent = nameValue;
  photoElement.querySelector('#link').src = linkValue;
  photoFlexItem.append(photoElement);

};

saveButton[1].addEventListener('click', function () {
  const nameValue = document.querySelector('#itemNameInput');
  const linkValue = document.querySelector('#itemLinkInput');
  addPhotoItem(nameValue.value, linkValue.value);
});


function formSubmitHandlerPhoto(evt) {
  evt.preventDefault();
  closePopup();
}
formElement[1].addEventListener('submit', formSubmitHandlerPhoto);




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

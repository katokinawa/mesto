/* button */
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button')
let addButton = document.querySelector('.profile__add-button');
let saveButton = document.querySelector('.popup__save-button');
let likeButton = document.querySelector('.photo-flex__like-button')

/* form */
let formElement = document.querySelector('#form');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

/* other */
let popupShow = document.querySelector('#popup')
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let PageOpacity = document.querySelector('.page');
/* main js code */

function backgroundOpacity() {
  PageOpacity.style = 'opacity: 0.5';
}

function backgroundOpacityNormal() {
  PageOpacity.style = 'opacity: 1';
}

function popupFormValue() {
  nameInput.setAttribute('value', profileName.textContent);
  jobInput.setAttribute('value', profileJob.textContent);
}

function openPopup() {
  popupFormValue();
  backgroundOpacity();
  popupShow.classList.add('popup_opened');
}

function closePopup() {
  backgroundOpacityNormal()
  popupShow.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('click', closePopup)

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

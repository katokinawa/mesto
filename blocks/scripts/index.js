/* button */
let editButton = document.querySelector('.profile__edit-button');

let closeButton = document.querySelector('.popup__close-button')
let addButton = document.querySelector('.profile__add-button');
let saveButton = document.querySelector('.popup__save-button');
let likeButton = document.querySelector('.photo-flex__like-button')

/* form */
let formElement = document.querySelector('.popup__form-container');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

/* other */
let popupShow = document.querySelector('#popup')
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

/* main js code */

function popupFormValue() {
  nameInput.setAttribute('value', profileName.textContent);
  jobInput.setAttribute('value', profileJob.textContent);
  console.log('1');
}

function openPopup() {
  popupFormValue();
  popupShow.classList.add('popup_opened');
  console.log('2');
}

function closePopup() {
  popupShow.classList.remove('popup_opened');
  console.log('3');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('click', closePopup)

function formSumbitHandler(evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  console.log('4');
}

formElement.addEventListener('sumbit', formSumbitHandler);

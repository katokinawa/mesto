/* button */
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button')

/* form */
let formElement = document.querySelector('#form');
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
}

function openPopup() {
  popupFormValue();
  popupShow.classList.add('popup_opened');
}

function closePopup() {
  popupShow.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);

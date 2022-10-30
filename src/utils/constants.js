export const apiOptions = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
      authorization: 'e5ef6c8f-bf2d-4d8f-9be9-29b7fb227f3e',
      'Content-Type': 'application/json'
    },
}

export const nameInput = document.querySelector('.name-input');
export const jobInput = document.querySelector('.job-input');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const editAvatar = document.querySelector('profile__avatar');
export const photoFlexItem = '.photo-flex__list';


export const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


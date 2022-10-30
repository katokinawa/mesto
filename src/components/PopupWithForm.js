import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitProfileFormHandler }) {
    super(popupSelector);
    this._formPopup = this._popup.querySelector('.popup__form');
    this._popupButton = this._popup.querySelector('.popup__button');
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._submitProfileFormHandler = submitProfileFormHandler;
    this._initialText = this._popupButton.textContent;
  }

  // Получаем форму
  getFormPopup() {
    return this._formPopup;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) =>
     this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._popupButton.textContent = 'Сохранение...';
      this._submitProfileFormHandler(this._getInputValues())
      .then(() => {
        this.close();
      })
      .finally(() => {
        this._popupButton.textContent = this._initialText;
      })
    });
  }

  close() {
    super.close()
    this._formPopup.reset();
  }
}

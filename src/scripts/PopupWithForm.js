import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, submitProfileFormHandler }) {
    super(selectorPopup);
    this._selectorPopup = document.querySelector(selectorPopup);
    this._formPopup = this._selectorPopup.querySelector('.popup__form');
    this._inputList = this._selectorPopup.querySelectorAll('.popup__input');
    this._submitProfileFormHandler = submitProfileFormHandler;
  }
  _getInputValues() {

  }
  setEventListeners() {

  }
  close() {

  }
}

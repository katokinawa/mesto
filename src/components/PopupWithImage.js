import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageModal = document.querySelector('.popup__image');
    this._imageModalTitle = document.querySelector('.popup__title-image');
  }
  // вставляем в попап с фуллскрин картинкой его тайтл, алт, и саму картинку
  // Также перезаписываем родительский метод
  open(element) {
    super.open()
    this._imageModal.src = element.link;
    this._imageModal.alt = element.name;
    this._imageModalTitle.textContent = element.name;
  };
};

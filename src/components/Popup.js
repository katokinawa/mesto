export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  };
  // Открыть попап
  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };
  // Закрыть попап
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  };

  // Закрытие по клику, по оверлею
  _handleClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  // Закрытие по клику клавиши ESC
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  // Слушатели
  setEventListeners() {
      const popupClose = this._popupSelector.querySelector('.popup__close-button');
      popupClose.addEventListener('click', () => {
        this.close()
      });
      this._popupSelector.addEventListener('mousedown', this._handleClickOnOverlay);
  };
};

export default class Card {
  // В конструктор вместо отдельных свойст имени и ссылки передаётся объект CardInfo
  constructor(cardInfo, templateSelector, imgCardFullscreen) {
    this._templateSelector = templateSelector;
    this._imageNameCard = cardInfo.name;
    this._imageLinkCard = cardInfo.link;
    this._imgCardFullscreen = imgCardFullscreen;
  }

  // Получаем шаблон
  _getTemplate() {
    const template = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('#container')
    .cloneNode(true);

    return template;
  }

  // Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();

    this._imgCardName = this._element.querySelector('.photo-flex__title');
    this._imgCardLink = this._element.querySelector('.photo-flex__image');
    this._like = this._element.querySelector('.photo-flex__like-button');
    this._trash = this._element.querySelector('.photo-flex__trash');

    this._imgCardName.textContent = this._imageNameCard;
    this._imgCardLink.src = this._imageLinkCard;
    this._imgCardLink.alt = this._imageNameCard;

    this._setEventListeners();
    
    // Возвращаем размеченную карточку
    return this._element;
  }
  // По клику карточка во весь экран
  _handleClickImgFullscreen() {
    this._imgCardFullscreen(this._imageNameCard, this._imageLinkCard);
  }

 // По клику мусорного ведра - карточка удаляется
  _handleClickDelete() {
    this._element.remove();
  }

  // По клику кнопки лайк, ставится лайк
  _handleClickLike() {
    this._like.classList.toggle('photo-flex__like-button_active');
  }

  // Слушатели событий на методы открытия изображения, кнопки удаления и кнопки лайка
  _setEventListeners() {
    this._imgCardLink.addEventListener('click', () => {
      this._handleClickImgFullscreen();
    });
    this._trash.addEventListener('click', () => {
      this._handleClickDelete();
    });
    this._like.addEventListener('click', () => {
      this._handleClickLike();
    });
  }
}

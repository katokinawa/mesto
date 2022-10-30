export default class Card {
  // В конструктор вместо отдельных свойст имени и ссылки передаётся объект CardInfo
  constructor(cardInfo, templateSelector, { handleCardClick, handleAddLike, handleRemoveLike, handleTrashClick }, userId) {
    this._templateSelector = templateSelector;
    this._imageNameCard = cardInfo.name;
    this._imageLinkCard = cardInfo.link;
    this._owner = cardInfo.owner;
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleTrashClick = handleTrashClick;
    this._likes = cardInfo.likes;
    this._likeArr = cardInfo.likes;
    this._userId = userId;
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

  // По клику карточка во весь экран
  _handleClickImgOpenFullscreen() {
    this._handleCardClick(this._imageNameCard, this._imageLinkCard);
  }

 // По клику мусорного ведра - карточка удаляется
  handleClickDelete() {
    this._element.remove();
    this._element =  null;
  }

  // По клику кнопки лайк, ставится лайк
  _handleClickLike() {
    if (this._like.classList.contains('photo-flex__like-button_active')) {
      this._handleRemoveLike(this)
    } else {
      this._handleAddLike(this)
    }
  }

  _setLike(array) {
    if (array.find(el => el._id === this._userId)) {
      this._like.classList.add('photo-flex__like-button_active');
    } else {
      this._like.classList.remove('photo-flex__like-button_active');
    }
  }

  setLikeInfo(array) {
    this._likeArr = array;
    this._likeCount.textContent = this._likeArr.length;
    this._setLike(this._likeArr);
  }

  // Метод создания карточки
  generateCard() {
    this._element = this._getTemplate();

    this._imgCardName = this._element.querySelector('.photo-flex__title');
    this._imgCardLink = this._element.querySelector('.photo-flex__image');
    this._like = this._element.querySelector('.photo-flex__like-button');
    this._trash = this._element.querySelector('.photo-flex__trash');
    this._likeCount = this._element.querySelector('.photo__like-count');
    this._imgCardName.textContent = this._imageNameCard;
    this._imgCardLink.src = this._imageLinkCard;
    this._imgCardLink.alt = this._imageNameCard;
    this._likeCount.textContent = this._likes.length;
    this._setLike(this._likes)

    if (this._userId !== this._owner._id) {
      this._trash.remove();
    }

    this._setEventListeners();

    // Возвращаем размеченную карточку
    return this._element;
  }

  // Слушатели событий на методы открытия изображения, кнопки удаления и кнопки лайка
  _setEventListeners() {
    this._imgCardLink.addEventListener('click', () => {
      this._handleClickImgOpenFullscreen();
    });
    this._trash.addEventListener('click', () => {
      this._handleClickDelete();
    });
    this._like.addEventListener('click', () => {
      this._handleClickLike();
    });
  }
}

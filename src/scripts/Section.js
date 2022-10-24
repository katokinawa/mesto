export default class Section {
  constructor ({items, renderer}, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._selectorContainer = document.querySelector(selectorContainer);
  }

  // Рендерим карточку
  renderItems() {
    this._items.forEach((item) =>
     this._renderer(item)
    );
  };
  // Добавялем на сайт
  addItem(cardAdd) {
    console.log(cardAdd);
    this._selectorContainer.prepend(cardAdd);
  };
};

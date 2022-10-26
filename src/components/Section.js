export default class Section {
  constructor ({items, renderer}, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  // Рендерим карточку
  renderItems() {
    this._items.forEach((item) =>
     this._renderer(item)
    );
  };
  // Добавялем на сайт
  addItem(cardAdd) {
    this._container.prepend(cardAdd);
  };
};

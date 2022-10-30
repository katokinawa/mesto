export default class Section {
  constructor ({renderer}, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  // Рендерим карточку
  renderItems(items) {
      items.forEach((item) =>
      this._renderer(item)
    );
  };
  // Добавялем на сайт
  addItem(cardAdd) {
    this._container.prepend(cardAdd);
  };
};

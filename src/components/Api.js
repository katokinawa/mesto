export default class Api {
  constructor(config) {
    this._url = config.url;
    this._header = config.header;
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(this._url + "cards", {
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  getUserInfo() {
    return fetch(this._url + "users/me", {
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  setUserInfo(name, job) {
    return fetch(this._url + "users/me", {
      headers: this._header,
      method: "PATCH",
      body: JSON.stringify({
        name,
        job
        }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }
  setUserAvatar(item) {
    return fetch(this._url + "users/me/avatar", {
      headers: this._header,
      method: "PATCH",
      body: JSON.stringify({ item }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  generateCard(item) {
    return fetch(this._url + "cards", {
      headers: this._header,
      method: "POST",
      body: JSON.stringify({
        name: item.itemNameInput,
        link: item.itemLinkInput,
      }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  deleteCard(cardObject) {
    return fetch(this._url + "cards/" + cardObject.cardId, {
      headers: this._header,
      method: "DELETE",
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  LikeCard(likeCardId, removeLike) {
    return fetch(this._url + "cards/likes/" + likeCardId, {
      headers: this._header,
      method: removeLike ? "DELETE" : "PUT",
    }).then((res) => {
      return this._getResponse(res);
    });
  }
}

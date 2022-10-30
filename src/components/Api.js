export default class Api {
  constructor(config) {
    this._url = config.url;
    this._header = config.headers;
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      headers: this._header,
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }
  setUserAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._header,
      method: "PATCH",
      body: JSON.stringify({ item }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  generateCard(name, link) {
    return fetch(`${this._url}/cards`, {
      headers: this._header,
      method: "POST",
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._header,
      method: "DELETE",
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  addLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }

  removeLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._header,
    }).then((res) => {
      return this._getResponse(res);
    });
  }
}

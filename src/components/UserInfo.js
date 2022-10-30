export default class UserInfo {
  constructor({name, job, avatar}) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  // Получаем имя и работу
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
  // Задаём имя и работу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  setUserId(data) {
    return data._id;
  }

  getUserId() {
    return this._id;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}


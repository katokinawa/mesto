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
  setUserInfo(name, job, avatar) {
    this._name.textContent = name;
    this._job.textContent = job;
    this._avatar.src = avatar;
  }

  setUserId(data) {
    return formData._id;
  }

  getUserId() {
    return this._id;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}


export default class UserInfo {
  constructor({name, job}) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  // Получаем имя и работу
  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
  // Задаём имя и работу
  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}

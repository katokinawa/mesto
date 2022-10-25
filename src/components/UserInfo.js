export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
  }

  // Получаем имя и работу
  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent
    }
  }
  // Задаём имя и работу
  setUserInfo(name, job) {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = job;
  }
}

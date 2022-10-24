export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
  }
  getUserInfo() {
    this._object = {};
    this._object.username = this._nameSelector.textContent;
    this._object.job = this._jobSelector.textContent;
    return this._object;
  }
  setUserInfo(data) {
    this._nameSelector.textContent = data.username;
    this._jobSelector.textContent = data.job;
  }
}

/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */
export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }
  validUserName() {
    const validOne = /^[^\d_-][\dA-Za-z_-]*[^\d_-]$/.test(this.userName);
    const validFirst = !(/\d{4}/.test(this.userName));
    if (validOne && validFirst) {
      return true;
    } return false;
  }
}

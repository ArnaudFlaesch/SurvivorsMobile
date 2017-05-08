/**
 * Created by Arnaud on 13/04/2017.
 */

export class User {
  private _email: string;
  private _nickname: string;
  private _password: string;

  constructor() {}

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

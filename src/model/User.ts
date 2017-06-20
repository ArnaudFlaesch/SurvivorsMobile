/**
 * Created by Arnaud on 13/04/2017.
 */

export class User {
  private _id: Number;
  private _email: string;
  private _nickname: string;
  private _password: string;

  get id(): Number {
    return this._id;
  }

  set id(value: Number)  {
    this._id = value;
  }

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

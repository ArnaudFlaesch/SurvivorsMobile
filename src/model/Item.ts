/**
 * Created by Arnaud on 14/06/2017.
 */

export class Item {
  private _name: String;
  private _description: String;
  private _type: Number;

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get type(): Number {
    return this._type;
  }

  set type(value: Number) {
    this._type = value;
  }
}

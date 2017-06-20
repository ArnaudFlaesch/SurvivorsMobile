/**
 * Created by Arnaud on 14/06/2017.
 */

import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";
import {HTTP, HTTPResponse} from "@ionic-native/http";
import {Item} from "../model/Item";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class InventoryService {
  private API_URL = "http://52.17.200.158:3000/user/inventory";
  private headers = new Headers();

  constructor(public http: HTTP) {
    this.headers.append("Access-Control-Allow-Origin" , "*");
    this.headers.append("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
    this.headers.append("Content-Type" , "application/json");
  }

  public getInventory(idUser: Number): Promise<HTTPResponse> {
    return this.http.get(this.API_URL, idUser, this.headers);
  }

  public addItem(newItem: Item, idUser: Number): Promise<HTTPResponse> {
    return this.http.post(this.API_URL + idUser, newItem, {headers : this.headers});
  }

  public updateItem(updatedItem: Item, idUser: Number): Promise<HTTPResponse> {
    return this.http.post(this.API_URL + idUser, updatedItem, {headers : this.headers});
  }

  public deleteItem(deletedItem: Item, idUser: Number): Promise<HTTPResponse> {
    return this.http.post(this.API_URL + idUser, deletedItem, {headers : this.headers});
  }
}

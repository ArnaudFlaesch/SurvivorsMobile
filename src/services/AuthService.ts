/**
 * Created by Arnaud on 04/04/2017.
 */
import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";
import {HTTP, HTTPResponse} from "@ionic-native/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/User";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {
  private currentUser: User;
  private API_URL = "http://34.250.254.92:3000/user";
  private headers = new Headers();

  constructor(public http: HTTP) {
    this.headers.append("Access-Control-Allow-Origin" , "*");
    this.headers.append("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type, Accept");
    this.headers.append("Content-Type" , "application/json");
  }

  public login(credentials: User): Promise<HTTPResponse> {
    return this.http.post(this.API_URL + "/login", credentials, this.headers);
  }

  public register(credentials: User): Promise<HTTPResponse> {
    return this.http.post(this.API_URL + "/register", credentials, {headers : this.headers});
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}

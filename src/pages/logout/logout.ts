import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import {LoginPage} from "../login/login";

@Component({
  selector: "page-logout",
  templateUrl: "logout.html"
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {}

  public logout() {
    this.storage.ready().then(() => {
      this.storage.set("nickname", null);
      this.storage.set("password", null);
      this.navCtrl.setRoot(LoginPage);
    });
  }
}

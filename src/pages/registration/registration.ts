import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import {AuthService} from "../../services/AuthService";
import {User} from "../../model/User";

@Component({
  selector: "page-registration",
  templateUrl: "registration.html",
  providers: [AuthService]
})
export class RegistrationPage {
  private createSuccess = false;
  private registerCredentials = new User();

  constructor(public nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {}

  public register() {
    this.auth.register(this.registerCredentials)
      .then(user => {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
      })
      .catch(error => {
        this.showPopup("Error", error.error);
      });
  }

  private showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: "OK",
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}

import {Component} from "@angular/core";
import {AlertController, Loading, LoadingController, NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";
import {AuthService} from "../../services/AuthService";
import {RegistrationPage} from "../registration/registration";
import {User} from "../../model/User";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private loading: Loading;
  private loginCredentials = new User();

  constructor(public navCtrl: NavController, private auth: AuthService, public storage: Storage, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    storage.ready().then(() => {
      storage.get("nickname").then((val) => {
        console.log("Your nickname is", val);
        this.loginCredentials.nickname = val;
      });
      storage.get("password").then((val) => {
        console.log("Your password is", val);
        this.loginCredentials.password = val;
      });

    });
  }

  public createAccount() {
    this.navCtrl.push(RegistrationPage);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.loginCredentials)
      .then(user => {
        if (user.data !== []) {
          this.storage.set("nickname", user.data._nickname);
          this.storage.set("password", user.data._password);
          setTimeout(() => {
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
          });
        }
        else {
          this.showError("Identifiant ou mot de passe invalide.");
        }
      })
      .catch(error => {
        this.showError(error.error);
      });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loading.present();
  }

  private showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: "Erreur",
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present(prompt);
  }
}

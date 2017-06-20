import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import * as THREE from "three";
import {User} from "../../model/User";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public title: String;
  private userService: AuthService;
  private currentUser: User;

  constructor(public navCtrl: NavController, private authService: AuthService) {
    this.title = "Survivors - Page d'accueil";
    this.userService = authService;
    this.currentUser = this.userService.getUserInfo();
  }
}

import {Component} from "@angular/core";
import {AlertController, Loading, LoadingController, NavController} from "ionic-angular";
import {Item} from "../../model/Item";
import {InventoryService} from "../../services/InventoryService";
import {AuthService} from "../../services/AuthService";

@Component({
  selector: "page-inventory",
  templateUrl: "inventory.html"
})
export class InventoryPage {

  private inventory: [Item];
  private bagService: InventoryService;
  private userService: AuthService;
  private loading: Loading;

  constructor(public navCtrl: NavController, private authService: AuthService, private inventoryService: InventoryService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    this.bagService = inventoryService;
    this.userService = authService;
    this.inventory = this.getInventory(this.authService.getUserInfo().id);
  }

  public addItem(item: Item) {
    this.inventoryService.addItem(item, this.authService.getUserInfo().id);
  }

  public getInventory(idUser: Number): [Item] {
    console.log(idUser);
    this.inventoryService.getInventory(idUser)
      .then(inventory => {
        return inventory;
      })
      .catch(error => {
        console.log(error);
        console.log(error.error);
        console.log(JSON.parse(error.error));
        this.showError(error.error);
      });
    return null;
  }

  public useItem(item: Item) {
    // use item
    this.inventoryService.updateItem(item, this.authService.getUserInfo().id);
  }

  public deleteItem(item: Item) {
    this.inventoryService.deleteItem(item, this.authService.getUserInfo().id);
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Patientez..."
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

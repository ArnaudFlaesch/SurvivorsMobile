import {Component, ViewChild} from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import {GoogleMaps, LatLng} from "@ionic-native/google-maps";

declare var google;

@Component({
  selector: "page-map",
  templateUrl: "map.html",
  providers: [Geolocation, GoogleMaps]
})
export class MapPage {
  @ViewChild("map") protected mapElement;
  protected map: any;
  protected geoLocation: Geolocation;

  private title: String;

  constructor(public geolocation: Geolocation) {
    this.title = "Carte";
    this.geoLocation = geolocation;
  }

  public ionViewDidLoad() {
    this.loadMap();
  }

  public loadMap() {
    let latLng = new google.maps.LatLng(48.864716, 2.349014);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then((resp) => {
      let ionic: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map.panTo(ionic);
    }).catch((error) => {
      console.log("Error getting location", error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      let ionic: LatLng = new LatLng(data.coords.latitude, data.coords.longitude);
      this.map.panTo(ionic);
    });
  }
}

import {TestBed, ComponentFixture, async } from "@angular/core/testing";
import {IonicModule, NavController} from "ionic-angular";
import {SurvivorsApplication} from "../../app/app.component";
import {HomePage} from "./home";
import {HTTP} from "@ionic-native/http";

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let el: HTMLElement;

describe("Home page tests", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurvivorsApplication, HomePage],
      providers: [
        NavController,
        HTTP
      ],
      imports: [
        IonicModule.forRoot(SurvivorsApplication)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp    = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    el = null;
  });

  it("is created", () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it("initialises title", () => {
    expect(comp["title"]).toEqual("Survivors - Page d'accueil");
  });

  it("can set the title to a supplied value", () => {
    el = fixture.debugElement.nativeElement.querySelector("ion-title");
    comp.title = "Welcome to Ionic!";
    fixture.detectChanges();
    expect(comp["title"]).toEqual("Welcome to Ionic!");
    expect(el.textContent).toContain("Welcome to Ionic!");
  });
});

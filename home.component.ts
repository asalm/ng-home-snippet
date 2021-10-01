import { Component, isDevMode, OnInit } from "@angular/core";
import { ILoginService as LoginService } from "../../shared/auth/ilogin.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "skums-nis-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public show = false;
  public isDevMode = true;

  public aufgaben = [
    {
      name: "Vorhabenspruefungen",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Vorhabens - prüfungen",
      beschreibung: [
        {
          title: "Recherche für Vorhabenspruefungen",
          link: "recherchevorhabenpruefung",
        },
      ],
      link: "vorhabenspruefungeng",
    },
    {
      name: "Naturschutzmassnahmen",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Naturschutz - maßnahmen",
      beschreibung: [
        { title: "Naturschutzmaßnahmen", link: "naturschutzmassnahmen" },
        { title: "Flächenpools", link: "flaechenpools" },
      ],
      link: "naturschutzmassnahmen",
    },
    {
      name: "Naturschutzbuch",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Naturschutzbuch",
      beschreibung: [
        {
          title: "Geschützte Biotope",
          link: "naturschutzbuch/geschuetztebiotope",
        },
        { title: "FFH-LRT", link: "ffhlrt" },
        { title: "Nationale Schutzgebiete", link: "naturschutzbuch/nationaleschutzgebiete" },
        {
          title: "Europäische Schutzgebiete",
          link: "europaeischeschutzgebiete",
        },
        { title: "Wald", link: "naturschutzbuchwald" },
      ],
      link: "naturschutzbuch",
    },
    {
      name: "Schutzgebietsbetreuung",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Schutzgebiets - betreuung",
      beschreibung: [
        { title: "Pflegemaßnahmenplanung", link: "pflegemassnahmenplanung" },
        { title: "Pflegemaßnahmenvollzug", link: "pflegemassnahmenvollzug" },
      ],
      link: "schutzgebietsbetreuung",
    },
    {
      name: "Vollzug",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Vollzug",
      beschreibung: [
        {
          title: "Vollzug von Schutzgebietsverordnungen",
          link: "vollzugschutzgebietsverordnung",
        },
      ],
      link: "vollzug",
    },
    {
      name: "Kartierung",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Kartierung",
      beschreibung: [
        {
          title: "Erfassung von Tier- und Pflanzenarten",
          link: "erfassungtierundpflanzen",
        },
        { title: "Kartierungsplanung", link: "kartierungsplanung" },
        {
          title: "Dokumentation Kartierungsdurchführung",
          link: "dokukartierungsdurchfuehrung",
        },
        { title: "Import Arten", link: "importarten" },
      ],
      link: "kartierung",
    },
    {
      name: "Recherche & Auswertung",
      iconUrl: "assets/DefaultIcon.png",
      displayName: "Recherche & Auswertung",
      beschreibung: [
        {
          title: "Globale Recherchen und Auswertung",
          link: "rechercheundauswertung",
        },
      ],
      link: "rechercheundauswertung",
    },
  ];

  constructor(
    private readonly route: Router,
    public router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.show = this.loginService.isAllreadyLogged();
    this.loginService.isLoggeg.subscribe((isLoggeg) => {
      console.log(
        "this.loginService.identityManager1",
        this.loginService.identityManager.toJSON()
      );
      this.show = isLoggeg;
    });
  }

  public signIn() {
    isDevMode() ? this.router.navigate(["login"]) : this.loginService.sigIn();
  }
}
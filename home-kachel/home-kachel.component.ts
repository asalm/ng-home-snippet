import { Component, OnInit, Input, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "skums-nis-home-kachel",
  templateUrl: "./home-kachel.component.html",
  styleUrls: ["./home-kachel.component.scss"],
})
export class HomeKachelComponent implements OnInit {
  @Input("id") _id: string;
  @Input() Click: string;
  @Input() Icon: string;
  @Input() Title: string;
  @Input() Aufgaben: Array<Object>;

  activeKachel: string = "";
  activeLink: string = "";

  constructor(private readonly route: Router) {}

  ngOnInit(): void {}

  public OnCardClick(link: string) {
    this.route.navigate([link]);
  }
  public OnLinkClick(link: string) {
    this.route.navigate([link]);
  }

  public EventListener(kachel: string, link: string) {
    this.activeKachel = kachel;
    this.activeLink = link;
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-desktop-layout",
  templateUrl: "./desktop-layout.component.html",
  styleUrls: ["./desktop-layout.component.scss"],
})
export class DesktopLayoutComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard"]);
    }
  }

}

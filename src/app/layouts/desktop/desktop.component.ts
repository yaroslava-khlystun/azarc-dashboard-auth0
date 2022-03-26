import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-desktop-layout",
  templateUrl: "./desktop.component.html",
  styleUrls: ["./desktop.component.scss"],
})
export class DesktopComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard"]);
    }
  }

}

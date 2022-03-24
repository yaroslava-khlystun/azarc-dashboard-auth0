import { Component, OnInit, HostListener } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

//declare var $: any;

@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard"]);
    }
  }

}

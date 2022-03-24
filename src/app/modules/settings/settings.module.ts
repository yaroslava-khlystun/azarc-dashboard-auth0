import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { SettingsComponent } from "./settings.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Settings",
      urls: [{ title: "Profile", url: "/settings" }, { title: "Settings" }],
    },
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
})
export class SettingsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from "./dashboard.component";
import { EmployeeListComponent } from "./dashboard-components/employee-list/employee-list.component";
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    Ng2SearchPipeModule
  ],
  declarations: [
    DashboardComponent,
    EmployeeListComponent
  ],
})
export class DashboardModule {}

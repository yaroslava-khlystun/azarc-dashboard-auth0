import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CurrentUser } from '../../core/models/currentUser.model';
import { PersonalDetails } from '../../core/models/currentUser.model';
import { UserService } from "../../core/services/user/user.service";

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  personalDetails:PersonalDetails = {
    residential_address: '',
    work_office_location: [],
  };

  currentUser:CurrentUser = {
    given_name: '',
    family_name: '',
    nickname: '',
    name: '',
    picture: '',
    locale: '',
    updated_at: '',
    email: '',
    email_verified: true,
    sub: '',
    personal_details: this.personalDetails
  };

  constructor(public auth: AuthService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.auth.getUser<CurrentUser>()
      .subscribe((data) => {
        this.currentUser = {...this.currentUser, ...data};
        this.userService.setCurrentUser(this.currentUser);
      });
  }
}

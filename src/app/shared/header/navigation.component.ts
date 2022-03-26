import { Component, OnInit } from '@angular/core';

import { CurrentUser } from '../../core/models/currentUser.model';
import { PersonalDetails } from '../../core/models/currentUser.model';

import { AuthService } from '@auth0/auth0-angular';
import { UserService } from "../../core/services/user/user.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  personalDetails:PersonalDetails = {
    residential_address: 'NEW',
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
    this.currentUser = this.userService.getCurrentUser();
  }

  logout(): void {
    // Call this to log the user out of the application
    this.auth.logout({ returnTo: window.location.origin });
    this.userService.removeCurrentUser();
  }
}

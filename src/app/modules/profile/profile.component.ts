import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CurrentUser } from '../../core/models/currentUser.model';
import { PersonalDetails } from '../../core/models/currentUser.model';
import { UserService } from "../../core/services/user/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
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
              public userService: UserService) {}

  ngOnInit(): void {

    // this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    // this.currentUser['personal_details'] = this.personalDetails;
    // localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    this.currentUser = this.userService.getCurrentUser();

    console.log('PROFILE this.currentUser= ', this.currentUser);
  }
}

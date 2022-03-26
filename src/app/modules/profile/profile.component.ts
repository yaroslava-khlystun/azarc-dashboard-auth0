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
    this.currentUser = this.userService.getCurrentUser();
  }

  addItemEvent(newItem: string) {
    if (this.currentUser.personal_details.hasOwnProperty('work_office_location')) {
      this.currentUser.personal_details.work_office_location?.push(newItem)
    }
  }

  removeLocation(removeItem: string) {
    if (this.currentUser.personal_details.hasOwnProperty('work_office_location')) {
      this.currentUser.personal_details.work_office_location?.splice(this.currentUser.personal_details.work_office_location?.
      findIndex(item => item === removeItem),1);
    }
  }

  updateProfile() {
    this.userService.setCurrentUser(this.currentUser);
    console.log('user updated!');
  }
}

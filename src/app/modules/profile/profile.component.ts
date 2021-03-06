import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../core/models/currentUser.model';
import { PersonalDetails } from '../../core/models/currentUser.model';
import { UserService } from "../../core/services/user/user.service";
import { AlertService } from "../../core/services/alert/alert.service";

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
  isDisabled: boolean = false;
  constructor(public userService: UserService,
              public alertService: AlertService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUserFromLocalStorage();
  }

  getUpdatedUser(updatedUser: CurrentUser) {
    this.currentUser = updatedUser;
  }

  updateProfile() {
    this.userService.setCurrentUserToLocalStorage(this.currentUser);
    this.isDisabled = true;
    this.alertService.success('User profile successfully updated!');
    this.isDisabled = false;
  }
}

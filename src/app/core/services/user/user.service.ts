import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import {CurrentUser, PersonalDetails} from '../../models/currentUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  constructor(public auth: AuthService) {
    if (Object.keys(this.getCurrentUserFromLocalStorage()).length !== 0) {
      return;
    }
    this.initCurrentUser();
  }

  initCurrentUser() {
    this.auth.getUser<CurrentUser>()
      .subscribe((data) => {
        this.currentUser = {...data, personal_details: this.personalDetails};
        this.setCurrentUserToLocalStorage(this.currentUser);
      });
  }

  setCurrentUserToLocalStorage(user: CurrentUser | undefined) {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  getCurrentUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  removeCurrentUser() {
    localStorage.clear();
  }

}

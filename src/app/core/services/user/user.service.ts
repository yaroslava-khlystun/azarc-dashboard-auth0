import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { CurrentUser } from '../../models/currentUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthService) {

  }

  setCurrentUser(user: CurrentUser) {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  removeCurrentUser() {
    localStorage.clear();
  }

}

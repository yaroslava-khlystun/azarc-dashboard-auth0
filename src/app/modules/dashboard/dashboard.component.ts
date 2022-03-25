import {Component, AfterViewInit, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CurrentUser } from '../../core/models/currentUser.model';
import { PersonalDetails } from '../../core/models/currentUser.model';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnInit {
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
  user: any;

  constructor(public auth: AuthService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (localStorage.setItem('currentUser', profile ? JSON.stringify(profile) : '{}'))
    );
  }
}

import {TestBed} from '@angular/core/testing';

import { UserService } from './user.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AuthService} from "@auth0/auth0-angular";
import {of} from "rxjs";
import {CurrentUser} from "../../models/currentUser.model";

describe('UserService', () => {
  let service: UserService;

  const user = {
    given_name: 'lkhlkjlkjlk',
    family_name: 'jljl',
    nickname: '',
    name: '',
    picture: '',
    locale: '',
    updated_at: '',
    email: '',
    email_verified: true,
    sub: '',
    personal_details: {
      residential_address: '',
      work_office_location: [],
    }
  };

  beforeEach(() => {
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['getUser']);
    TestBed.configureTestingModule({
      providers: [UserService, {provide: AuthService, useValue: authServiceSpyObj}],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    authServiceSpyObj.getUser.and.returnValue(of(user));

    service = TestBed.inject(UserService);
    service.currentUser = {} as CurrentUser;

    localStorage.clear();
  });

  it('should create the service',
    () => {
      expect(service).toBeTruthy();
  });

  it('removeCurrentUser success', () => {
    spyOn(localStorage, 'clear').and.callThrough();
    localStorage.setItem('currentUser', JSON.stringify(user));
    service.removeCurrentUser();
    expect(localStorage.clear).toHaveBeenCalled();
    expect(localStorage.getItem('currentUser')).not.toBeTruthy();
  });

  it('getCurrentUserFromLocalStorage success', () => {
    spyOn(localStorage, 'getItem').and.callThrough();
    localStorage.setItem('currentUser', JSON.stringify(user));
    expect(service.getCurrentUserFromLocalStorage()).toEqual(user);
    expect(localStorage.getItem).toHaveBeenCalledOnceWith('currentUser');
  });

  it('setCurrentUserToLocalStorage success', () => {
    spyOn(localStorage, 'setItem');
    service.setCurrentUserToLocalStorage(user);
    expect(localStorage.setItem).toHaveBeenCalledOnceWith('currentUser', JSON.stringify(user));
  });

  it('initCurrentUser', () => {
    spyOn(service, 'setCurrentUserToLocalStorage');
    service.initCurrentUser();
    expect(service.setCurrentUserToLocalStorage).toHaveBeenCalledOnceWith(user);
    expect(service.currentUser).toEqual(user);
  });
});

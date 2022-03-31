import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { AuthService } from '@auth0/auth0-angular';
import {UserService} from "../../core/services/user/user.service";
import {CurrentUser} from "../../core/models/currentUser.model";
import {of} from "rxjs";
import { RouterTestingModule } from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('NavigationComponent', () => {
  let service: UserService;

  const user = {
    given_name: 'lkhlkjlkjlk',
    family_name: 'jljl',
    nickname: '',
    name: 'user name1',
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

  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  const userServiceSpyObj = jasmine.createSpyObj('UserService', ['getCurrentUserFromLocalStorage', 'removeCurrentUser']);

  beforeEach(async () => {
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['getUser', 'logout']);
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [{provide: UserService, useValue: userServiceSpyObj}, {provide: AuthService, useValue: authServiceSpyObj}],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    authServiceSpyObj.getUser.and.returnValue(of(user));
    authServiceSpyObj.logout.and.returnValue();
    userServiceSpyObj.getCurrentUserFromLocalStorage.and.returnValue({} as CurrentUser);
    userServiceSpyObj.removeCurrentUser.and.returnValue();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserService);
    service.currentUser = {} as CurrentUser;
    component.currentUser = {} as CurrentUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should welcome logged in user after Angular calls ngAfterViewInit', () => {
    expect(component.currentUser).toEqual({} as CurrentUser);
    userServiceSpyObj.getCurrentUserFromLocalStorage.and.returnValue(user);
    component.ngAfterViewInit();
    expect(service.getCurrentUserFromLocalStorage).toHaveBeenCalled();
    expect(component.currentUser).toEqual(user);
  });

  it('should have currentUser.name after init', () => {
    const span =  fixture.debugElement.nativeElement.querySelector('span[data-user-dropdown="user-dropdown"]');
    expect(span.textContent).toEqual('');

    userServiceSpyObj.getCurrentUserFromLocalStorage.and.returnValue(user);
    component.ngAfterViewInit();

    expect(span.textContent).toEqual(user.name);
  });

  it('should logout', () => {
    component.logout();

    expect(component.auth.logout).toHaveBeenCalled();
    expect(component.userService.removeCurrentUser).toHaveBeenCalled();
    expect(component.currentUser).toEqual({} as CurrentUser);
  });
});

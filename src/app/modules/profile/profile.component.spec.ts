import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";

import { ProfileComponent } from './profile.component';
import {UserService} from "../../core/services/user/user.service";
import {of} from "rxjs";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

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

  beforeEach(async () => {
    const userServiceSpyObj = jasmine.createSpyObj('userService', ['getCurrentUserFromLocalStorage']);

    @Component({selector: 'app-card-with-image', template: ''})
    class CardWithImageStubComponent {
    }
    @Component({selector: 'app-card-with-form', template: ''})
    class CardWithFormStubComponent {
    }
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent , CardWithImageStubComponent, CardWithFormStubComponent],
      providers: [{provide: UserService, useValue: userServiceSpyObj}],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    userServiceSpyObj.getCurrentUserFromLocalStorage.and.returnValue(of(user));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders app-card-with-image exists', () => {
    const cardWithImage = fixture.debugElement.nativeElement.querySelector('app-card-with-image');
    expect(cardWithImage).toBeTruthy();
  });

  it('renders app-card-with-form exists', () => {
    const { debugElement } = fixture;
    const cardWithForm = debugElement.query(By.css('app-card-with-form'));
    expect(cardWithForm).toBeTruthy();
  });
});

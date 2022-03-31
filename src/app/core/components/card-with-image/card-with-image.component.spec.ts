import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithImageComponent } from './card-with-image.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {CurrentUser} from "../../models/currentUser.model";

describe('CardWithImageComponent', () => {
  let component: CardWithImageComponent;
  let fixture: ComponentFixture<CardWithImageComponent>;

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
    await TestBed.configureTestingModule({
      declarations: [ CardWithImageComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.user = user as CurrentUser;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user @Input ', () => {
    expect(component.user).toEqual(user);
  });

});

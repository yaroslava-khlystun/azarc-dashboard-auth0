import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithFormComponent } from './card-with-form.component';
import {CurrentUser} from "../../models/currentUser.model";
import {NgChipsComponent} from "../ng-chips/ng-chips.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CardWithFormComponent', () => {
  let component: CardWithFormComponent;
  let fixture: ComponentFixture<CardWithFormComponent>;

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
      declarations: [ CardWithFormComponent, NgChipsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.currentUser = user as CurrentUser;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the updatedUser event when residential_address added', () => {
    component.currentUser = user;
    component.currentUser.personal_details.residential_address = 'Lviv';
    component.updatedUser.subscribe((response) => {
      expect(response).toEqual(component.currentUser);
    })
    component.updateResidentialAddress();
    expect(component.currentUser.personal_details.residential_address).toContain('Lviv')
  });

  it('raises the updatedUser event when work_office_location added', () => {
    component.currentUser = user;
    component.updatedUser.subscribe((response) => {
      expect(response).toEqual(component.currentUser);
    });
    component.addItemEvent('NY');
    expect(component.currentUser.personal_details.work_office_location).toContain('NY')
  });

  it('raises the updatedUser event when work_office_location removed', () => {
    component.currentUser = user;
    component.addItemEvent('NY');
    component.removeLocation('NY');
    component.updatedUser.subscribe((response) => {
      expect(response).toEqual(component.currentUser);
    });
    expect(component.currentUser.personal_details.work_office_location).not.toContain('NY')
  });

});

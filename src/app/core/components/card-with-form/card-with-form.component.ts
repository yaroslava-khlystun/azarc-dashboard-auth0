import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CurrentUser} from '../../models/currentUser.model';

@Component({
  selector: 'app-card-with-form',
  templateUrl: './card-with-form.component.html',
  styleUrls: ['./card-with-form.component.scss']
})
export class CardWithFormComponent {
  @Input() currentUser: CurrentUser = {
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
    personal_details: {}
  };


  @Output() updatedUser = new EventEmitter<object>();

  constructor() {
  }

  addItemEvent(newItem: string) {
    if (this.currentUser.personal_details.hasOwnProperty('work_office_location')) {
      this.currentUser.personal_details.work_office_location?.push(newItem);
      this.updatedUser.emit(this.currentUser);
    }
  }

  removeLocation(removeItem: string) {
    if (this.currentUser.personal_details.hasOwnProperty('work_office_location')) {
      this.currentUser.personal_details.work_office_location?.splice(this.currentUser.personal_details.work_office_location?.
      findIndex(item => item === removeItem),1);
      this.updatedUser.emit(this.currentUser);
    }
  }

  updateResidentialAddress() {
    this.updatedUser.emit(this.currentUser);
  }
}

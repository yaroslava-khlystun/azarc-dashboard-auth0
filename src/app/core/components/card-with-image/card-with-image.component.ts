import { Component, Input } from '@angular/core';
import { CurrentUser } from '../../models/currentUser.model';

@Component({
  selector: 'app-card-with-image',
  templateUrl: './card-with-image.component.html',
  styleUrls: ['./card-with-image.component.scss']
})
export class CardWithImageComponent {
  @Input() user: CurrentUser = {
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

  constructor() {
  }
}

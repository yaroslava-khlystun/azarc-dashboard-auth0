import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagModel } from 'ngx-chips/core/tag-model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ng-chips',
  templateUrl: './ng-chips.component.html',
  styleUrls: ['./ng-chips.component.scss']
})
export class NgChipsComponent {
  @Input() items = [];
  @Output() addItemEvent = new EventEmitter<string>();
  @Output() removeItemEvent = new EventEmitter<string>();

  constructor() {
  }

  onAdding(tag: any): Observable<TagModel> {
    this.addItemEvent.emit(tag.value);
    return of(tag);
  }

  onRemoving(tag: any): Observable<TagModel> {
    this.removeItemEvent.emit(tag);
    return of(tag);
  }
}

import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { NgChipsComponent } from './ng-chips.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';

describe('NgChipsComponent', () => {
  let component: NgChipsComponent;
  let fixture: ComponentFixture<NgChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgChipsComponent ],
      imports: [TagInputModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChipsComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits the event onAdd', () => {
    const itemName = 'New Item';

    fakeAsync(async (done: DoneFn) => {

      await component.onAdding(itemName);

      tick();
      fixture.detectChanges();
    });
  });

});

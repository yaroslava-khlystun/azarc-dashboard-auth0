import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithFormComponent } from './card-with-form.component';

describe('CardWithFormComponent', () => {
  let component: CardWithFormComponent;
  let fixture: ComponentFixture<CardWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

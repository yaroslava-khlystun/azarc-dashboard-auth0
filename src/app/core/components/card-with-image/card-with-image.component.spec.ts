import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithImageComponent } from './card-with-image.component';

describe('CardWithImageComponent', () => {
  let component: CardWithImageComponent;
  let fixture: ComponentFixture<CardWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

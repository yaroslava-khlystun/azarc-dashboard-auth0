import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpinnerComponent } from './spinner.component';
import {of} from "rxjs";

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  const fakeSpinner = {
    spinnerState: of({ isSpinnerVisible: true }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ],
      providers: [{ provide: SpinnerComponent, useValue: fakeSpinner }],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set component.visible based on spinnerService state', () => {
    expect(component.isSpinnerVisible).toEqual(true)
  });
});

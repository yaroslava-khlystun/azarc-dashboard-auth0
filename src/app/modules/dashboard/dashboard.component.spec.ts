import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    @Component({selector: 'app-employee-list', template: ''})
    class EmployeeListStubComponent {
    }
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent , EmployeeListStubComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders app-employee-list exists', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-employee-list'));
    expect(counter).toBeTruthy();
  });

});

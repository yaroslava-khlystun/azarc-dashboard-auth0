import { NO_ERRORS_SCHEMA} from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeesList } from './employee-list-data';
import {By} from "@angular/platform-browser";

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeListComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        Ng2SearchPipeModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    component.employeesList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of elements', () => {
    component.employeesList = EmployeesList;

    fixture.detectChanges();
    const { debugElement } = fixture;
    const elements = debugElement.queryAll(By.css('.employee-row'));
    expect(elements.length).toEqual(20);
  });

  it('should pass down the correct data to its child components', () => {
    component.employeesList = EmployeesList;
    fixture.detectChanges();
    const { debugElement } = fixture;
    const elements = debugElement.queryAll(By.css('.employee-row'));
    for (let i = 0; i < component.employeesList.length; i++) {
      const employeeFullName = elements[i].nativeElement.querySelector('[data-employee-fullName="employee_fullName"]');
      const employeeMail= elements[i].nativeElement.querySelector('[data-employee-email="employee_email"]');
      const employeePosition= elements[i].nativeElement.querySelector('[data-employee-position="employee_position"]');
      const employeeProject= elements[i].nativeElement.querySelector('[data-employee-project="employee_project"]');
      const employeeStatus= elements[i].nativeElement.querySelector('[data-employee-status="employee_status"]');
      expect(employeeFullName.textContent.trim()).toEqual(component.employeesList[i].fullName);
      expect(employeeMail.textContent.trim()).toEqual(component.employeesList[i].email);
      expect(employeePosition.textContent.trim()).toEqual(component.employeesList[i].position);
      expect(employeeProject.textContent.trim()).toEqual(component.employeesList[i].project);
      expect(employeeStatus.textContent.trim()).toEqual(component.employeesList[i].status);
    }
  });

});


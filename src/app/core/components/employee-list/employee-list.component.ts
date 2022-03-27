import { Component, OnInit } from '@angular/core';
import { EmployeesList } from './employee-list-data';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employeesList:Employee[];
  filterTerm!: string;

  constructor() {
    this.employeesList = EmployeesList;
  }

  ngOnInit(): void {
  }
}

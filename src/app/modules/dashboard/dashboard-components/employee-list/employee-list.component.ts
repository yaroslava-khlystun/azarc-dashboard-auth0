import { Component, OnInit } from '@angular/core';
import {EmployeesList} from './employee-list-data';
import {Employee} from '../../../../core/models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employeesList:Employee[];
  currentPage = 1;
  itemsPerPage = 5;
  pageSize: number = 0;
  filterTerm!: string;

  constructor() {
    this.employeesList = EmployeesList;
  }

  ngOnInit(): void {
  }
}

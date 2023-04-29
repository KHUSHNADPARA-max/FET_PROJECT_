import { Component } from '@angular/core';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeList: IEmployee [];
  showEdit: boolean;
  constructor() {
    this.employeeList = [];
    this.showEdit = false;
    this.addDemoEmployee();
  }

  addDemoEmployee() {
    this.employeeList = [
      {DOB:'26/12/2003', Email:'khushnadpara1@gmail.com',EmployeeId:1, FirstName:'KHUSH',LastName:'VASANT BHAI NADPARA', Salary: 100000},
      {DOB:'26/12/2003', Email:'khushnadpara2@gmail.com',EmployeeId:2, FirstName:'KHUSH',LastName:'VASANT BHAI NADPARA', Salary: 850000},
      {DOB:'26/12/2003', Email:'khushnadpara3@gmail.com',EmployeeId:3, FirstName:'KHUSH',LastName:'VASANT BHAI NADPARA', Salary: 700000},
    ]
  }

  ngOnInit(): void {

  }

  EditEmp(){
    this.showEdit = true;
  }

  UpdateEmp(){
    this.showEdit = false;
  }

}

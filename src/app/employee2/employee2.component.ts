import { Component } from '@angular/core';
@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.scss']
})
export class Employee2Component {
  employee=[
 {
    id:1,
    first_name:"Nayab",
    last_name:"Khan",
    salary:20000,
    dob:new Date("12/25/1999"),
    email:"nayabkhan0202@gmail.com",
  },
];
  showEdit : boolean= false;
  currentIndex:any;
  constructor() {}
  EditEmp()
  {
    this.showEdit=true;
  }
  UpdateEmp()
  {
    this.showEdit=false;
  }
}
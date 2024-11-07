import { Component } from '@angular/core';
@Component({
  selector: 'app-employee3',
  templateUrl: './employee3.component.html',
  styleUrls: ['./employee3.component.scss']
})
export class Employee3Component {
  employee3=[
    {
      id:1,
      first_name:"Nayab",
      last_name:"Khan",
      salary:20000,
      dob:new Date("12/25/1999"),
      email:"nayabkhan0202@gmail.com",
    },
    {
      id:2,
      first_name:"Mohd",
      last_name:"Arsh",
      salary:10000,
      dob:new Date ("07/17/2008"),
      email:"iamarsh@gmail.com",
   },
   {
     id:3,
     first_name:"Jiya",
     last_name:"Khan",
     salary:5000,
     dob:new Date("09/24/2014"),
     email:"jiyakhan@gmail.com",
    },
    {
     id:4,
     first_name:"Afiya",
     last_name:"Zara",
     salary:80000,
     dob:new Date("03/14/2011"),
     email:"afiyazara02@gmail.com",
    },
    {
     id:5,
     first_name:"Nastaeen",
     last_name:"Khan",
     salary:500,
     dob:new Date("07/25/1999"),
     email:"alamnastaeen@gmail.com",
    }
  ];
}

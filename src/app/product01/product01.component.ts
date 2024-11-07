import { Component } from '@angular/core';

@Component({
  selector: 'app-product01',
  templateUrl: './product01.component.html',
  styleUrls: ['./product01.component.scss']
})
export class Product01Component {
  product : any=[{
    id:1,
    name:"iPhone 14 pro Max",
    price:177999,
  },
  {
    id:2,
    name:"SAMSUNG Galaxy S23 Ultra",
    price:134999,
  },
  {
    id:3,
    name:"Realme GT Neo 3T",
    price:26999,
  },
  {
    id:4,
    name:"REDMI Note 6 Pro",
    price:15999,
  }];
}

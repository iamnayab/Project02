import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../product01/details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productID:any;
  product: any;
  constructor(private productservice:DetailsService,private activatedroute : ActivatedRoute )
  {
  }
  ngOnInit(): void{
    this.activatedroute.paramMap.subscribe((param)=>{ this.productID= param.get('id');
    this.product=this.productservice.productsdetail.find(x=> x.id == this.productID)})
  }
}

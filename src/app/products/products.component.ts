import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  selectType: any;
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  mainList: any;
  isDone: any;
  

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.isDone = true;
    this.service.getProduct().subscribe((result: any) => {
      this.productList = result;
      console.log(this.productList);
    });
  }

  getfilteredProducts() {
    this.isDone = false;
    console.log(this.selectType);
    this.mainList = this.productList.filter(
      (data: { bodyType: any }) => data.bodyType == this.selectType
    );

    console.log(this.mainList);
  }
}

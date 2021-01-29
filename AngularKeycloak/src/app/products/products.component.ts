import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 // @ts-ignore
  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[

      {id:1,name:"PC HP 45",price:4126},
      {id:2,name:"PC HP 78",price:7855},
      {id:3,name:"PC HP 221",price:5569}
    ]
  }


}

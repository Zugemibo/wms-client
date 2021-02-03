import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductStock } from '../classes/ProductStock';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-product-check',
  templateUrl: './product-check.component.html',
  styleUrls: ['./product-check.component.css']
})
export class ProductCheckComponent implements OnInit {

  stockControl = new FormControl();
  stocks: ProductStock[];
  stock: ProductStock;
  barcode: string;

  constructor(private service: TestServiceService) { }

  ngOnInit() {
  }

  onSubmit(data: string) {
    const barcode: string = data;
    this.service.getStocks(barcode).subscribe(data => this.stocks = data);
  }
}

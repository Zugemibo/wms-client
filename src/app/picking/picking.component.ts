import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Order } from '../classes/Order';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.css']
})
export class PickingComponent implements OnInit {
  
  orderControl = new FormControl();
  orders: Order[];
  order: Order;

  constructor(private service: TestServiceService) { }

  ngOnInit() {
    this.service.getUncompletedOrders().subscribe(data => this.orders = data);
  }
}
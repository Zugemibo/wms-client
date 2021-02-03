import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductMovement } from '../classes/ProductMovement';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-unit-move',
  templateUrl: './unit-move.component.html',
  styleUrls: ['./unit-move.component.css']
})
export class UnitMoveComponent implements OnInit {
  productMovement: FormGroup;
  movement: ProductMovement = new ProductMovement();

  constructor(private formBuilder: FormBuilder, private service: TestServiceService) { }

  ngOnInit() {
    this.productMovement = this.formBuilder.group({
      spaceFrom: [null, Validators.required],
      productBarcode: [null, Validators.required],
      quantity: [null, Validators.required],
      spaceWhere: [null, Validators.required]
    });
  }

  onSubmit(): any {
    this.movement = <ProductMovement> this.productMovement.value;
    const result = this.movement

    this.service.addMovement(this.movement);
    this.productMovement.reset();
    console.log(result);

  }

  get spaceFrom(){
    return this.productMovement.get('spaceFrom');
  }
  get productBarcode(){
    return this.productMovement.get('productBarcode');
  }
  get quantity(){
    return this.productMovement.get('quantity');
  }
  get spaceWhere(){
    return this.productMovement.get('spaceWhere');
  }
}
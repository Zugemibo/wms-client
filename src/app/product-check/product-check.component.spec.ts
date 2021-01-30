import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckComponent } from './product-check.component';

describe('ProductCheckComponent', () => {
  let component: ProductCheckComponent;
  let fixture: ComponentFixture<ProductCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

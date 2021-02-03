import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMoveComponent } from './unit-move.component';

describe('UnitMoveComponent', () => {
  let component: UnitMoveComponent;
  let fixture: ComponentFixture<UnitMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

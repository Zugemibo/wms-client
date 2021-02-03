import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckingComponent } from './checking/checking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { PickingComponent } from './picking/picking.component';
import { ProductCheckComponent } from './product-check/product-check.component';
import { ProductMovementComponent } from './product-movement/product-movement.component';
import { UnitMoveComponent } from './unit-move/unit-move.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LogInComponent},
  { path: 'picking', component: PickingComponent },
  { path: 'product_move', component: ProductMovementComponent },
  { path: 'product_move/unit_move', component: UnitMoveComponent},
  { path: 'checking', component: CheckingComponent },
  { path: 'checking/product_check', component: ProductCheckComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

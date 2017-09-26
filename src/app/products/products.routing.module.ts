import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes:Routes = [{
  path: '', component: ProductsComponent, canActivate: [AuthGuard],
  children: [
    { path: '', component: ProductsListComponent, canActivate: [AuthGuard]},
    { path: ':id', component: ProductsFormComponent, canActivate: [AuthGuard]},
    { path: 'new', component: ProductsFormComponent, canActivate: [AuthGuard] },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }

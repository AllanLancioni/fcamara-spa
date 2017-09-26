import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsRoutingModule } from './products.routing.module';
import { NavbarComponent } from '../navbar/navbar.component';

import { ProductsService } from '../services/products.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductsComponent,
    ProductsFormComponent,
    ProductsListComponent,
    NavbarComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }

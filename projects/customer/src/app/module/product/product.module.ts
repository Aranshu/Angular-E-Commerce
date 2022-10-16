import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHomeComponent } from './product-home/product-home.component';

@NgModule({
  declarations: [ProductListComponent, ProductHomeComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}

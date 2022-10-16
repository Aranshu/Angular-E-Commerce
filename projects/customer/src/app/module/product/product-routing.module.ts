import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHomeComponent } from './product-home/product-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'ProductList', pathMatch: 'full' },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'ProductHome', component: ProductHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { 
    path: 'Home', 
    loadChildren: () => 
      import('./module/home/home.module').then(m => m.HomeModule) },
  {
    path: 'Product',
    loadChildren: () =>
      import('./module/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'Blog',
    loadChildren: () =>
      import('./module/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'More',
    loadChildren: () =>
      import('./module/more/more.module').then((m) => m.MoreModule),
  },
  { 
    path: 'Cart', loadChildren: () => import('./module/cart/cart.module').then(m => m.CartModule) 
  },
  { 
    path: 'Wishlist', loadChildren: () => import('./module/wishlist/wishlist.module').then(m => m.WishlistModule) 
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

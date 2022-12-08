import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnProductComponent } from './learn-product/learn-product.component';
import { ProductsComponent } from './products/products.component';
import { ShopProductComponent } from './shop-product/shop-product.component';

const routes: Routes = [
  {
    path: '',
    component:ProductsComponent
  },
  {
    path : 'learn',
    component : LearnProductComponent
  },
  {
    path  : 'shop',
    component : ShopProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

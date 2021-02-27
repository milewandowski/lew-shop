import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from '@angular/router';
import { CategoryNavComponent } from './components/category-nav/category-nav.component';

const routes: Routes = [
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'product', component: ProductListComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: '**', redirectTo: '/product', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryNavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

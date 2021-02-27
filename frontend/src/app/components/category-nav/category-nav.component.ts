import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  categories: Category[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.productService.getCategoryList().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators'
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product';
  private categoryUrl = 'http://localhost:8080/api/category';

  constructor(private httpClient: HttpClient) { }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProduct>(searchUrl).pipe(
      map(response => response._embedded.product)
    );
  }

  getProductListByCategoryId(categoryId: number): Observable<Product[]> {
    let searchUrl: string = this.baseUrl;
    if(categoryId != 0) {
      searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    }

    return this.getProducts(searchUrl);
  }

  getProductListByKeyword(keyword: string): Observable<Product[]> {
    let searchUrl: string = `${this.baseUrl}/search/findByNameContaining?name=${keyword}`;

    return this.getProducts(searchUrl);
  }

  getProductListPaginate(pageNumber: number, pageSize: number,
    categoryId: number): Observable<GetResponseProduct> {
      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}&page=${pageNumber}&size=${pageSize}`;

      return this.httpClient.get<GetResponseProduct>(searchUrl);
    }

  getProduct(id: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${id}`;
    
    return this.httpClient.get<Product>(productUrl);
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<GetResponseCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.category)
    );
  }

}

interface GetResponseProduct {
  _embedded: {
    product: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseCategory {
  _embedded: {
    category: Category[];
  }
}
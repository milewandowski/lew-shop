import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product';

  constructor(private httpClient: HttpClient) { }

  getProductList(categoryId: number): Observable<Product[]> {
    let searchUrl: string = this.baseUrl;
    if(categoryId != 0) {
      searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    }

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.product)
    );
  }
}

interface GetResponse {
  _embedded: {
    product: Product[];
  }
}
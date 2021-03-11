import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Country } from '../common/country';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFormService {

  private countryUrl = "http://localhost:8080/api/country";

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<GetResponseCountry>(this.countryUrl).pipe(
      map(response => response._embedded.country)
    );
  }

}

interface GetResponseCountry {
  _embedded: {
    country: Country[];
  }
}
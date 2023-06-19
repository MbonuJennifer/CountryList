import { Injectable } from '@angular/core';
import { ListCountry } from './list-country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseApiUrl = 'https://restcountries.com/v3.1/all';
  data: any;
  constructor(private http: HttpClient) {}

  getAllCountries (): any {
    return this.http.get()
  }


}

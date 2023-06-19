import { Injectable } from '@angular/core';
import { ListCountry } from './list-country';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  // private baseApiUrl = 'https://restcountries.com/v3.1/all';
  data: any;
  constructor(private http: HttpClient) {}

  getAllCountries (): any {
    return this.http.get<ListCountry[]>(
      'https://restcountries.com/v3.1/all'
    ).pipe(
      map((response: any) => {
        return response.map((data) => {
          return {
            flag: data.flags.png,
            name: data.name.common,
            capital: data.capital,
            population: data.population,
            area: data.area,
            continent: data.continents[0],
          };
        });
      })
    );

  }


}

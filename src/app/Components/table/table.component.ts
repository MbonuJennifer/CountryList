import { ListCountry } from './../../list-country';
import { CountryService } from './../../country.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  countries: ListCountry[];
  page = 1; //the initial page to display
  collectionSize = 250; //total number of countries in the list
  pageSize = 10; //size of the first page
  constructor(private service: CountryService) {}
  ngOnInit(): void {
    // this.service.getAllCountries().subscribe((x) => {
    //   console.log(x);
    // });
    this.loadInitialCountries();
  }
  loadInitialCountries() {
    this.service.getAllCountries().subscribe((x) => {
      this.countries = x;
      localStorage.setItem('countryList', JSON.stringify(x));
      this.refreshCountries(); // Display the first page
    });
  }
  refreshCountries() {
    this.countries = JSON.parse(localStorage.getItem('countryList'))
      .map((country, i) => ({ id: i + 1, ...country }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}

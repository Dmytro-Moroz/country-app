import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from 'src/app/models/country';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  editState: boolean = false;
  countryToEdit: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => {
      // console.log(countries);
      this.countries = countries;
    });
  }

  deleteCountry(event, country:Country){
    this.clearState();
    this.countryService.deleteCountry(country);
  }

  editCountry(event, country:Country){
    this.editState = true;
    this.countryToEdit = country;
  }

  updateCountry(country){
    this.countryService.updateCountry(country);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.countryToEdit = null;
  }
}
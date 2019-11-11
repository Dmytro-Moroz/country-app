import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  country: Country = {
    title: '',
    description: ''
  }

  constructor(public countryService: CountryService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.country.title != '' && this.country.description != '') {
      this.countryService.addCountry(this.country);
      this.country.title = '';
      this.country.description = '';
    }
  }

} 
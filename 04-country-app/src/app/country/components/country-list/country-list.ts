import { Component, input } from '@angular/core';
//import { ResCountry } from '../../interfaces/res-countries.interfaces';
import { Country }  from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-country-list',
  imports: [ DecimalPipe ],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {

  countries = input.required<Country[]>();

}

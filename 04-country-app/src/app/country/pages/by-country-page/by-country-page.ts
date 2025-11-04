import { Component, inject, Input, resource, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { Country } from '../../services/country';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-by-country-page',
  imports: [ CountryList,SearchInput ],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css'
})
export class ByCountryPage {

  datosRecibidos: any = null;
   recibirDatos(datos: string) {
    this.datosRecibidos = datos;
    console.log('Datos recibidos del hijo:', datos);
  }



  /*


  */
  countryServuce = inject(Country );
  country = signal('');


    countryResources = resource({
    params: () => ({ query: this.country() }),
    loader: async ({ params }) => {
      if (!params.query) return []

      return await firstValueFrom( this.countryServuce.searchByCountry(params.query) );
    }
  });

}


import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';
import { Country } from '../../services/country';
import { ResCountry } from '../../interfaces/res-countries.interfaces';
import { Country  as countries} from '../../interfaces/country.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput,CountryList], //
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPage {

  /*
  datosRecibidos: any = null;
  countryServuce = inject(Country );
  showAlert= true;

  isLoading = signal(false);
  hasError = signal<string | null >(null);
  countries = signal<countries[]>([]);

   closeAlert(): void {
        this.showAlert = false;
    }

  onSearch(capital: string) {
    if ( this.isLoading() ) return ;
    this.datosRecibidos = capital;
    this.isLoading.set(true);
    this.hasError.set(null);
    //console.log('Datos recibidos del hijo:', capital);
    this.countryServuce.searchByCapital(capital)
    .subscribe({
      next:(countries)=>
      {
         this.isLoading.set(false);
         this.countries.set(countries)
         //const c = CountryMapper.mapCountriesArrayToCountryArray(countries);
         //console.info(c);
      },
      error : (err)=>{
        console.error(`El error es: ${err}`);

        this.isLoading.set(false);
        this.countries.set([]);
        this.hasError.set(`No se econtro un pais con la capital ${capital}`);
      }
    }) ;

  }

*/
  countryServuce = inject(Country );
  country = signal('');


    countryResources = resource({
    params: () => ({ query: this.country() }),
    loader: async ({ params }) => {
      if (!params.query) return []

      return await firstValueFrom( this.countryServuce.searchByCapital(params.query) );
    }
  });

}

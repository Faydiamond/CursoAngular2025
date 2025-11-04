import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResCountry } from '../interfaces/res-countries.interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import  type { Country  as countryyy}  from '../interfaces/country.interface';
import { map, Observable, catchError, throwError } from 'rxjs';

const API_URL = `https://restcountries.com/v3.1`;

@Injectable({
  providedIn: 'root'
})
export class Country {
  private http =   inject(HttpClient);

  searchByCapital( query:string ) : Observable<countryyy[]> {
    query = query.toLocaleLowerCase();
    return this.http.get<ResCountry[]>( `${API_URL}/capital/${query}`)
    .pipe(
      map( ResCountries=> CountryMapper.mapCountriesArrayToCountryArray(ResCountries) ),
      catchError(error=> {
        console.log( 'Error fetching ' , error );

        return throwError(()=> new Error (`No se encontraron paises por la capital : ${query}`)  );
      })
    );
  }

  searchByCountry( query:string ) {
    query = query.toLocaleLowerCase();
    const url =  `${API_URL}/name/${query}`;
    return this.http.get<ResCountry[]>( url)
    .pipe(
      map( ResCountries=> CountryMapper.mapCountriesArrayToCountryArray(ResCountries) ),
      catchError(error=> {
        console.log( 'Error fetching ' , error );

        return throwError(()=> new Error (`No se encontraron paises por la capital : ${query}`)  );
      })
    );
  }

}

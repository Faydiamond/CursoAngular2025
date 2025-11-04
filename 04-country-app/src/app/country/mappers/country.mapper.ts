import { ResCountry } from "../interfaces/res-countries.interfaces";
import { Country } from "../interfaces/country.interface";

export class CountryMapper {
  static mapCountry ( country:ResCountry ) : Country {
    return {
      cca2: country.cca2 ,
      flag:country.flag ,
      flagSvg:country.flags.svg,
      name:country.name.common,
      capital:country.capital.join(',') ,
      population: country.population,
      spa : country.translations["spa"].common ?? 'No spanish name'
    }
  }

  static mapCountriesArrayToCountryArray (  countries:ResCountry[]) :Country[] {
    return countries.map(this.mapCountry)
  }


}

import { Routes } from '@angular/router';
import { Home } from './shared/pages/home/home';
import { CountryLayout } from './country/layouts/country-layout/country-layout';
import { ByCapitalPage } from './country/pages/by-capital-page/by-capital-page';



export const routes: Routes = [
  {
    path:'',
    component:Home,

  },

  {
    path:"country",
    loadChildren:  ()=>  import ('./country/country.routes'),
  },

  {
    path:'**',
    redirectTo:''
  }
  /*
  */
];

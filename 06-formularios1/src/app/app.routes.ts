import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'reactive',
    loadChildren : ()=> import('./reactive/reactive.routes').then((module)=> module.reactiveRoutes)
  },
  {
    path:'auth',
    loadChildren : ()=> import('./auth/auth.routes')        //del otro lado se exporto por defecto
  },
  {
    path:'country',
    loadChildren : ()=> import('./country/country.routes').then((module)=> module.countryRoutes ) //del otro lado se exporto por defecto
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];

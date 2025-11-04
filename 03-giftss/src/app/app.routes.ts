import { Routes } from '@angular/router';
import { validatorGuard } from './gifts/guard/validator-guard';

export const routes: Routes = [
  {
    path:'login',
   loadComponent: () => import('./gifts/pages/login/login'),
  },


  {
    path: 'dasboard',
    //component: no carga perezosa
    canActivate: [validatorGuard],
    loadComponent: () => import('./gifts/pages/dashbord-page/dashbord-page.component'),
    //hijas
    children:[
        {
          path: 'trending',
          //component: no carga perezosa

          loadComponent: () => import('./gifts/pages/trending-page/trending-page.component')
        },
        {
            path: 'search',
            //component: no carga perezosa
            loadComponent: () => import('./gifts/pages/search-page/search-page.component')
        },
        {
            path: 'history/:query', //:query
            //component: no carga perezosa
            loadComponent: () => import('./gifts/pages/gif-history/gif-history')
        },


        {
            path: '**',
            redirectTo: 'trending'
         },
    ]
  },

   {
    path: '**',
    redirectTo: 'dasboard'
  },


];

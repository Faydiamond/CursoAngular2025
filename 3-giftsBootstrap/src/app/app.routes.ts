import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'dashboard',
    loadComponent: ()=> import('./gifts/pages/dashboard-page/dashboard-page'),
   children:[
     {
      path:'search',
      loadComponent: ()=>import('./gifts/pages/search-page/search-page')
    },
    {
      path:'trending',
      loadComponent: ()=>import('./gifts/pages/trending-page/trending-page')
    }
   ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Parent } from './parent/parent';

export const routes: Routes = [
  {
    path:"inicio",
    component:Inicio
  },
  {
    path:"padre",
    component: Parent
  }

];

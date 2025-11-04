import { Routes } from '@angular/router';
import { CounterPAgeComponent } from './pages/counter/counter-page.component';
import { HeroPAgeComponent } from './pages/hero/hero';

export const routes: Routes = [
  {
    path:'',
    component: CounterPAgeComponent
  },
  {
    path:'hero',
    component:HeroPAgeComponent
  }
];

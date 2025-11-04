import { Routes } from '@angular/router';
import { CounterPageComponentComponent } from './counter-page-component/counter-page-component.component';
import { HeroPageComponentComponent } from './pages/hero/hero-page-component/hero-page-component.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponentComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponentComponent,
  },
];

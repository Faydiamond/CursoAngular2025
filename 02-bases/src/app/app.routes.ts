import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

import { NotFoundComponent } from './pages/404/not-found.component';
import { DragonballComponent } from './pages/dragonball/dragonball-page.component';
import { not } from 'rxjs/internal/util/not';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dbz',
    component: DragonballComponent,
  },
  {
    path: 'super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

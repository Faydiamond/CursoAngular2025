import { Routes } from "@angular/router";
import { RegisterPage } from './pages/register-page/register-page';


export const authRoutes:Routes = [
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: RegisterPage
  },
  {
    path: '**',
    redirectTo: 'sign-up'
  }

];

export default authRoutes;

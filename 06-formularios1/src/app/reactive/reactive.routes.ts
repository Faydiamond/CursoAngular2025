import { Routes } from "@angular/router";
import { BasicPage } from "./pages/basic-page/basic-page";
import { DimamycPage } from "./pages/dimamyc-page/dimamyc-page";
import { SwitchesPage } from "./pages/switches-page/switches-page";


export const reactiveRoutes:Routes = [
  {
      path: '',

      children : [
        {
          path: 'basic',
          title: 'Basicos',
          component:BasicPage
        },
        {
          path: 'dynamic',
          title: 'Dinamicos',
          component:DimamycPage
        },
        {
          path: 'switches',
          title: 'Swuitches',
          component:SwitchesPage
        },
        {
          path:'**',
          redirectTo : 'basic'
        }
      ]
  }
];

import {  Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";



interface MenuItem {
  title: string,
  route: string
}

const ReactiveItems = reactiveRoutes[0].children ?? [] ; //aseguro mis rutas y evito undefined

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
})
export class SideMenu {

  constructor() {
    console.log( "Aqui " , this.reactiveMenu );
    console.log("  routes "  , reactiveRoutes[0].children);
  }

  reactiveMenu : MenuItem[] = ReactiveItems.filter(route=> route.path !== '**').map(route => ({
    route:  `reactive/${route.path}`,
    title: `${route.title}`, //aseguro que es string
  }));

  authMenu : MenuItem[] = [
    {
      title: 'Registro',
      route: 'auth'
    }
  ]

    countryMenu : MenuItem[] = [
    {
      title: 'paises',
      route: 'country'
    }
  ]

 }

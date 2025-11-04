import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from 'src/app/gifts/services/gifs';

interface MenuOption {
  icon: string;
  label: string;
  route: string;  // ← Correcto: con 'e' al final
  subLAbel: string;
}

@Component({
  selector: 'gifts-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

   gifService = inject(GifService);
  // Corregí el nombre de la variable también: menuOptions en lugar de menuOprions
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dasboard/trending',  // ← Correcto
      subLAbel: 'Gifts Pop'
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Search',
      route: '/dasboard/search',    // ← CORREGIDO: era "route" con 'a'
      subLAbel: 'Buscar Gifts'
    },
  ];

  constructor() {
    console.log('Menu options:', this.menuOptions); // ← Verifica en consola
    console.log('Number of items:', this.menuOptions.length);
  }

  //serachhistorykeys,crear opcuiones debajo del for
}

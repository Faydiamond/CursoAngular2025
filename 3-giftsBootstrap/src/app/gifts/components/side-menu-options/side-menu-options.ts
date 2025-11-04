import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuOption {
  icon: string,
  label:string,
  route:string,
  subLAbel:string
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css'
})
export class SideMenuOptions {
 menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',  // ← Correcto
      subLAbel: 'Gifts Pop'
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Search',
      route: '/dashboard/search',    // ← CORREGIDO: era "route" con 'a'
      subLAbel: 'Buscar Gifts'
    },
  ];
}

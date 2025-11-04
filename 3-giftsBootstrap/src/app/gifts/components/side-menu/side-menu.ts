import { Component } from '@angular/core';
import { SideHeader } from './side-header/side-header';
import { SideMenuOptions } from '../side-menu-options/side-menu-options';

@Component({
  selector: 'side-menu',
  imports: [SideHeader,SideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {

}

import {  Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SideMenuHeaderComponent } from '../../components/side-menu/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from "../../components/side-menu/side-menu-options/side-menu-options.component";
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashbord-page',
  imports: [RouterOutlet,  SideMenuComponent],
  templateUrl: './dashbord-page.component.html',

})
export default class DashbordPageComponent { }

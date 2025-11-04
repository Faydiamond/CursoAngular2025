import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-side-header',
  imports: [],
  templateUrl: './side-header.html',
  styleUrl: './side-header.css'
})
export class SideHeader {
envs = environment;
}

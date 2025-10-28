import { Injectable, signal } from '@angular/core';

export type avaliableCurrent = 'es'|'en'|'fr';

@Injectable({
  providedIn: 'root'
})

export class LocaleService {
  private current = signal<avaliableCurrent >('fr');

  constructor(){
    this.current.set(
      (localStorage.getItem('locale') as avaliableCurrent) ?? 'es'
    );
  }

  get getCurrent(){
    return this.current()
  }

  changeCurrent(cur: avaliableCurrent){
    //console.log({cur});
    localStorage.setItem('locale',cur);
    this.current.set(cur);
    window.location.reload();
  }

}

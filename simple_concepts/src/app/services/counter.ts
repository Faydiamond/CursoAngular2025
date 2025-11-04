import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Counter {
    count = signal(0);

  increase_count() {
    this.count.update( value=> value+5);
  }

  decrease_count(){
    if (this.count() == 0) return
    this.count.update(value => value-5)
  }

  reset_count(){
    this.count.set(0);
  }
}

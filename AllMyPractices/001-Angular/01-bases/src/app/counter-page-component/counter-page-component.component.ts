import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page-component',
  imports: [],
  templateUrl: './counter-page-component.component.html',
  styleUrl: './counter-page-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponentComponent {
  value = 0;
  counterSignal = signal(0);

  constructor() {
    setInterval(() => {
      console.log('Trick');
    }, 2000);
  }

  increaseBy(value: number) {
    if (this.value >= 0) {
      this.value += value;
      this.counterSignal.update((current) => current + value);
    }
  }

  decreaseBy(value: number) {
    if (this.value > 0) {
      this.value -= value;
      this.counterSignal.update((current) => current - value);
    }
  }
  resetCounter() {
    this.value = 0;
    this.counterSignal.set(0); //pone esto
  }
}

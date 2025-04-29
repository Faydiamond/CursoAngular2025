import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter: number | undefined = 5;
  counterSignal = signal(5);

  constructor() {
    setInterval(() => {
      if (this.counter === undefined) {
        this.counter = 0;
      }
      console.log(this.counter);

      this.counterSignal.update((value) => value + 1);

      console.log(`Counter signal: ${this.counterSignal()}`);

      this.counter += 1;
    }, 2500);
  }

  increaseNumber(): number {
    if (this.counter === undefined) {
      return 0;
    }
    return (this.counter += 5);
  }

  decreaseNumber(): number {
    if (this.counter === 0 || this.counter === undefined) {
      return 0;
    }
    return (this.counter -= 5);
  }
  reset(): number {
    return (this.counter = 5);
  }

  resetSignal() {
    this.counterSignal.set(5);
  }

  increaseNumberSignal() {
    this.counterSignal.update((current) => current + 5);
  }

  decreaseNumberSignal() {
    this.counterSignal.update((current) => current - 5);
  }
}

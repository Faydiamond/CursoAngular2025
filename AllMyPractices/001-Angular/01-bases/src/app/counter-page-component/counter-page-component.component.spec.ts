import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPageComponentComponent } from './counter-page-component.component';

describe('CounterPageComponentComponent', () => {
  let component: CounterPageComponentComponent;
  let fixture: ComponentFixture<CounterPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

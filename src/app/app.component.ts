import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterConsumer } from './+state/counter';
import { CounterFacade } from './+state/counter/counter.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  homeCounter$ = this.counterFacade.counter$(CounterConsumer.HOME);
  productCounter$ = this.counterFacade.counter$(CounterConsumer.PRODUCT);
  protected readonly CounterConsumer = CounterConsumer;

  constructor(public counterFacade: CounterFacade) {}
}

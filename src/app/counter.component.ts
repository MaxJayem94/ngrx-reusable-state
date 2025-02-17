import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterFacade } from './+state/counter/counter.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counterValue$ = this.counterFacade.counter$;

  constructor(public counterFacade: CounterFacade) {}
}

import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterActions } from './counter.actions';
import {
  COUNTER_CONSUMER_INJECTION_TOKEN,
  CounterConsumer,
} from './counter.reducer';
import { selectCounter } from './counter.selectors';

@Injectable({
  providedIn: 'root',
})
export class CounterFacade {
  constructor(
    private store: Store,
    @Inject(COUNTER_CONSUMER_INJECTION_TOKEN)
    public consumer: CounterConsumer,
  ) {}

  actions = counterActions(this.consumer);

  counter$ = this.store.select(selectCounter(this.consumer));

  increment() {
    this.store.dispatch(this.actions.incrementCounter());
  }

  decrement() {
    this.store.dispatch(this.actions.decrementCounter());
  }
}

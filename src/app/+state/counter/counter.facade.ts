import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterActions } from './counter.actions';
import { CounterConsumer } from './index';
import { selectCounter } from './trailers.selectors';

@Injectable({
  providedIn: 'root',
})
export class CounterFacade {
  constructor(private store: Store) {}

  counter$ = (featureKey: CounterConsumer) =>
    this.store.select(selectCounter(featureKey));

  increment(source: CounterConsumer) {
    const actions = counterActions(source);
    this.store.dispatch(actions.incrementCounter());
  }

  decrement(source: CounterConsumer) {
    const actions = counterActions(source);
    this.store.dispatch(actions.decrementCounter());
  }
}

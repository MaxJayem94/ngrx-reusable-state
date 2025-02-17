import { Inject, Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  OnIdentifyEffects,
} from '@ngrx/effects';
import { tap } from 'rxjs';
import { counterActions } from './counter.actions';
import {
  COUNTER_CONSUMER_INJECTION_TOKEN,
  CounterConsumer,
} from './counter.reducer';

@Injectable()
export class CounterEffects implements OnIdentifyEffects {
  constructor(
    private actions$: Actions,
    @Inject(COUNTER_CONSUMER_INJECTION_TOKEN)
    private consumer: CounterConsumer,
  ) {}

  logIncrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(counterActions(this.consumer).incrementCounter),
        tap(() =>
          console.log('Increment Action from consumer: ', this.consumer),
        ),
      ),
    {
      dispatch: false,
    },
  );

  ngrxOnIdentifyEffects(): CounterConsumer {
    return this.consumer;
  }
}

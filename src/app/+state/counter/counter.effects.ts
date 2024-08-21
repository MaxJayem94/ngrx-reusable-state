import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { counterActions } from './counter.actions';
import { CounterConsumer } from './index';
import { getConsumerFromActionType } from './trailers.helpers';

@Injectable()
export class CounterEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ...Object.values(CounterConsumer).map(
          (source) => counterActions(source).incrementAsyncCounter
        )
      ),
      switchMap((action) => {
        const source = getConsumerFromActionType(action.type);
        const actions = counterActions(source);

        return of(actions.incrementAsyncCounterSuccess());
      })
    );
  });

  constructor(private actions$: Actions) {}
}

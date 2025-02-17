import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CounterEffects } from './+state/counter/counter.effects';
import { CounterFacade } from './+state/counter/counter.facade';
import {
  COUNTER_CONSUMER_INJECTION_TOKEN,
  CounterConsumer,
  counterReducer,
  CounterState,
} from './+state/counter/counter.reducer';
import { CounterComponent } from './counter.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [
      provideState({
        name: CounterConsumer.HOME,
        reducer: (state: CounterState | undefined, action) =>
          counterReducer(CounterConsumer.HOME, state, action),
      }),
      {
        provide: COUNTER_CONSUMER_INJECTION_TOKEN,
        useValue: CounterConsumer.HOME,
      },
      provideEffects(CounterEffects),
      CounterFacade,
    ],
  },
  {
    path: 'products',
    component: CounterComponent,
    providers: [
      provideState({
        name: CounterConsumer.PRODUCTS,
        reducer: (state: CounterState | undefined, action) =>
          counterReducer(CounterConsumer.PRODUCTS, state, action),
      }),
      {
        provide: COUNTER_CONSUMER_INJECTION_TOKEN,
        useValue: CounterConsumer.PRODUCTS,
      },
      provideEffects(CounterEffects),
      CounterFacade,
    ],
  },
  {
    path: 'media',
    component: CounterComponent,
    providers: [
      provideState({
        name: CounterConsumer.MEDIA,
        reducer: (state: CounterState | undefined, action) =>
          counterReducer(CounterConsumer.MEDIA, state, action),
      }),
      {
        provide: COUNTER_CONSUMER_INJECTION_TOKEN,
        useValue: CounterConsumer.MEDIA,
      },
      provideEffects(CounterEffects),
      CounterFacade,
    ],
  },
];

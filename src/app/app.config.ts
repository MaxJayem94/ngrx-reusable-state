import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CounterConsumer } from './+state/counter';
import { CounterEffects } from './+state/counter/counter.effects';
import { CounterFacade } from './+state/counter/counter.facade';
import {
  counterReducer,
  CounterState,
} from './+state/counter/trailers.reducer';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState({
      name: CounterConsumer.HOME,
      reducer: (state: CounterState | undefined, action) =>
        counterReducer(CounterConsumer.HOME, state, action),
    }),
    provideState({
      name: CounterConsumer.PRODUCT,
      reducer: (state: CounterState | undefined, action) =>
        counterReducer(CounterConsumer.PRODUCT, state, action),
    }),
    provideEffects(CounterEffects),
    CounterFacade,
  ],
};

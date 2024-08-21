import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterConsumer } from './index';
import { CounterState } from './trailers.reducer';

const COUNTER_FEATURE_KEY = 'counter';

export const selectCounterFeature = (featureKey: CounterConsumer) =>
  createFeatureSelector<{ counter: CounterState }>(featureKey);

export const selectCounter = (featureKey: CounterConsumer) =>
  createSelector(
    selectCounterFeature(featureKey),
    (state: { counter: CounterState }) => state[COUNTER_FEATURE_KEY]
  );

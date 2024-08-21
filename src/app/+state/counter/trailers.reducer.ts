import { Action, createReducer, on } from '@ngrx/store';
import { counterActions } from './counter.actions';
import { CounterConsumer } from './index';

export interface CounterState {
  counter: number;
}

export const initialCountState: CounterState = {
  counter: 0,
};

const createCounterReducer = (source: CounterConsumer) => {
  const actions = counterActions(source);

  return createReducer(
    initialCountState,
    on(actions.incrementCounter, (state) => ({
      ...state,
      counter: state.counter + 1,
    })),
    on(actions.decrementCounter, (state) => ({
      ...state,
      counter: state.counter - 1,
    }))
  );
};

export function counterReducer(
  source: CounterConsumer,
  state: CounterState | undefined,
  action: Action
) {
  return createCounterReducer(source)(state, action);
}

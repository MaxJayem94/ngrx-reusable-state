import { createActionGroup, emptyProps } from '@ngrx/store';
import { CounterConsumer } from './index';

export const counterActions = (source: CounterConsumer) =>
  createActionGroup({
    source,
    events: {
      'Increment Counter': emptyProps(),
      'Increment Async Counter': emptyProps(),
      'Increment Async Counter Success': emptyProps(),
      'Decrement Counter': emptyProps(),
    },
  });

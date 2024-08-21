import { CounterConsumer } from './index';

export const getConsumerFromActionType = (
  actionType: string
): CounterConsumer => {
  const sources = Object.values(CounterConsumer);
  for (const source of sources) {
    if (actionType.includes(source)) {
      return source;
    }
  }
  throw new Error(`Unknown action type: ${actionType}`);
};

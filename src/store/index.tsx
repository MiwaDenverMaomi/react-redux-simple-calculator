import { createStore } from 'redux';
import reducers from '../reducers';

export const store = createStore(reducers);
// console.log();
console.log(store.getState());
type StateType = ReturnType<typeof store.getState>

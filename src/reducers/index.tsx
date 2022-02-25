import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';
import operatorReducer from './operatorReducer';
import operandReducer from './operandReducer';
import valueReducer from './valueReducer';

export type DataType = {
  displayedValue: string,
  operand: number,
  operator: string | null,
  isNextClear: boolean
};

export const initialState: DataType = {
  displayedValue: "0",
  operand: 0,
  operator: null,
  isNextClear: false
};


const reducers = combineReducers({
  buttonReducer,
  // valueReducer,
  // operatorReducer,
  // operandReducer
});

export default reducers;

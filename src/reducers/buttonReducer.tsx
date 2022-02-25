import { GET_BUTTON_VALUE } from '../actions/types';
import { initialState, DataType } from './';

const handleNumbers = (state: DataType, value: string): DataType => {
  if (state.isNextClear) {
    return {
      ...state,
      displayedValue: value,
      isNextClear: false
    }
  }
  if (state.displayedValue === "0") {
    return { ...state, displayedValue: value };
  }
  return {
    ...state,
    displayedValue: state.isNextClear ? `${value}` : `${state.displayedValue}${value}`
  };
}
const handleDot = (state: DataType, value: string) => {
  if (state.displayedValue.indexOf('.') === -1) {
    return {
      ...state,
      displayedValue: `${state.displayedValue}.`,
    }
  }
};

const handleOperators = (state: DataType, value: string): DataType => {
  if (state.operator === null) {
    return {
      displayedValue: state.displayedValue,
      operand: parseFloat(state.displayedValue),
      operator: value,
      isNextClear: true
    }
  }
  const result = calculate(state);
  return {
    displayedValue: `${result}`,
    operand: result,
    operator: value,
    isNextClear: true
  }
}
const handleModifiers = (state: DataType, value: string) => {
  if (value === "AC") {
    return {
      displayedValue: "0",
      operand: 0,
      operator: null,
      isNextClear: false
    }
  } else if (value === "Del") {
    return {
      ...state,
      displayedValue: state.displayedValue.length > 0 ? state.displayedValue.slice(0, -1) : "0",
    }
  }
  return state;
}
const handleEqual = (state: DataType, value: string) => {
  const result = calculate(state);
  return {
    displayedValue: `${result}`,
    operand: result,
    operator: null,
    isNextClear: true
  }
};
const calculate = (state: DataType) => {
  if (state.operator === "+") {
    return state.operand + parseFloat(state.displayedValue);
  } else if (state.operator === "-") {
    return state.operand - parseFloat(state.displayedValue);
  } else if (state.operator === "÷") {
    return state.operand / parseFloat(state.displayedValue);
  } else if (state.operator === "×") {
    return state.operand * parseFloat(state.displayedValue);
  } else {
    return state.operand;
  }
};
const buttonReducer = (state: DataType = initialState, action: any) => {
  switch (action.type) {
    case GET_BUTTON_VALUE:
      if (
        action.payload === "1" ||
        action.payload === "2" ||
        action.payload === "3" ||
        action.payload === "4" ||
        action.payload === "5" ||
        action.payload === "6" ||
        action.payload === "7" ||
        action.payload === "8" ||
        action.payload === "9" ||
        action.payload === "0"
      ) {
        return handleNumbers(state, action.payload);

      } else if (action.payload === ".") {
        return handleDot(state, action.payload);

      } else if (
        action.payload === "+" ||
        action.payload === "-" ||
        action.payload === "÷" ||
        action.payload === "×") {

        return handleOperators(state, action.payload);
      } else if (action.payload === "=") {

        return handleEqual(state, action.payload);
      } else if (
        action.payload === "AC" ||
        action.payload === "Del") {

        return handleModifiers(state, action.payload);
      }
      return state;
    default:
      return state;
  }
};

export default buttonReducer;

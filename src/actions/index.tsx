import { GET_BUTTON_VALUE } from "./types";
import { store } from "../store";

const dispatch = store.dispatch;

export const getButtonValue = (value: string): void => {
  console.log('getButtonValue');
  dispatch({ type: GET_BUTTON_VALUE, payload: value });
};

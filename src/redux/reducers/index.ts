import { combineReducers } from "redux";
//@ts-ignore
import { saunterReducer } from "./saunterReducer.ts";

export const reducers = combineReducers({
  saunterReducer: saunterReducer,
});

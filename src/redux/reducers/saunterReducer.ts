//@ts-ignore
import { ActionType, initalState } from "./saunterReducerTypes.ts";
//@ts-ignore
import { ActionsTypes } from "../actions/ActionsTypes.ts";

const inital: initalState = {
  saunterList: [],
};

export const saunterReducer = (state = inital, action: ActionType) => {
  console.log("123", action)
  switch (action.type) {
    case ActionsTypes.ADD_SAUNTER: {
      return { ...state, saunterList: action.payload };
    }
    case ActionsTypes.REMOVE_SAUNTER: {
      return { ...state, saunterList: state.saunterList.filter((item) => item.id !== action.payload.id) };
    }
    default:
      return state;
  }
};
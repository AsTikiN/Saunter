import { Saunter } from "../../types";
import { ActionsTypes } from "../actions/ActionsTypes";

export interface AddSaunter {
  type: ActionsTypes.ADD_SAUNTER,
  payload: {
    item: Saunter,
  }
}

export interface RemoveSaunter {
  type: ActionsTypes.REMOVE_SAUNTER,
  payload: {
    id: number;
  },
}

export type ActionType = AddSaunter | RemoveSaunter;

export interface initalState {
  saunterList: Saunter[],
}
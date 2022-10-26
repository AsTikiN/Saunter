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

export interface AddToFavoritesSaunter {
  type: ActionsTypes.ADD_TO_FAVORITES_SAUNTER,
  payload: {
    id: number;
  },
}

export interface SelectSaunter {
  type: ActionsTypes.SELECT_SAUNTER,
  payload: {
    id: number;
  },
}

export type ActionType = AddSaunter | RemoveSaunter | AddToFavoritesSaunter | SelectSaunter;

export interface initalState {
  saunterList: Saunter[],
  selectedItem: number | null
}
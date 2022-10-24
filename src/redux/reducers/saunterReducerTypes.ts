import { Saunder } from "../../types";

export interface AddSaunder {
  type: "ADD_SAUNDER",
  payload: {
    item: Saunder,
  }
}

export interface RemoveSaunder {
  type: "REMOVE_SAUNDER",
  payload: {
    id: number;
  },
}

export type ActionType = AddSaunder | RemoveSaunder;

export interface initalState {
  saunterList: Saunder[],
}
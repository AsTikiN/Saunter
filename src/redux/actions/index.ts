import { Saunter } from "../../types";
//@ts-ignore
import { ActionsTypes } from "../actions/ActionsTypes.ts";

export const addSaunter = (item: Saunter) => ({
  type: ActionsTypes.ADD_SAUNTER,
  payload: item,
});

export const removeSaunter = (index: number) => ({
  type: ActionsTypes.REMOVE_SAUNTER,
  payload: index,
});
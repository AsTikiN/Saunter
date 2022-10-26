import { ActionType, initalState } from "./saunterReducerTypes";
import { ActionsTypes } from "../actions/ActionsTypes";
import { Saunter } from "../../types";

const inital: initalState = {
  saunterList: [],
  selectedItem: null,
};

export const saunterReducer = (state = inital, action: ActionType) => {
  if(state.saunterList.length) {
    console.log("111", [...state.saunterList][0])
  
    const x = [...state.saunterList][0].isFavourite = true;
    console.log("111 222", x);
  }
  switch (action.type) {
    case ActionsTypes.ADD_SAUNTER: {
      return { ...state, saunterList: [...state.saunterList, action.payload] };
    }
    case ActionsTypes.REMOVE_SAUNTER: {
      return { ...state, saunterList: state.saunterList.filter((saunter: Saunter) => saunter.id !== action.payload)};
    }
    case ActionsTypes.ADD_TO_FAVORITES_SAUNTER: {
      return { 
        ...state,
        saunterList: [
          ...state.saunterList.slice(0, state.saunterList.findIndex((saunter: Saunter) => saunter.id === action.payload)),
        {
          ...state.saunterList[state.saunterList.findIndex((saunter: Saunter) => saunter.id === action.payload)],
          isFavourite: true
        },
          ...state.saunterList.slice(state.saunterList.findIndex((saunter: Saunter) => saunter.id === action.payload) + 1, state.saunterList.length),
        ]
      };
    }
    case ActionsTypes.SELECT_SAUNTER: {
      return {...state, selectedItem: action.payload}
    }
    default:
      return state;
  }
};
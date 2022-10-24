import { ActionType, initalState } from "./saunterReducerTypes";

const inital: initalState = {
  saunterList: [],
}

const saunerReducer = (state = inital, action: ActionType) => {
  switch (action.type) {
    case "ADD_SAUNDER": {
      return { ...state, saunterList: action.payload };
    }
    case "REMOVE_SAUNDER": {
      return { ...state, saunterList: state.saunterList.filter(item => item.id !== action.payload.id) };
    }
  }
  return state;
};
export default saunerReducer;
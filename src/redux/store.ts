import { createStore } from "redux";
//@ts-ignore
import { reducers } from "./reducers/index.ts";

const store = createStore(reducers, {});
  
export default store;

import React, { useEffect, createContext, Context } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;

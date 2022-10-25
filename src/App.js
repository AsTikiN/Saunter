import React from "react";
import Header from "./components/Header/Header.tsx";
import Body from "./components/Body.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;

import React, { createContext } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiO-Rrn1VDWomqcfomseNDLfN25AJojgs",
  authDomain: "saunter-85c4f.firebaseapp.com",
  projectId: "saunter-85c4f",
  storageBucket: "saunter-85c4f.appspot.com",
  messagingSenderId: "911543812337",
  appId: "1:911543812337:web:f89198d2a582cb3dbae950",
  measurementId: "G-0CETZ1RTQL",
  databaseUrl: "https://saunter-85c4f-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const DatabaseContext = createContext();

function App() {
  return (
    <Provider store={store}>
      <DatabaseContext.Provider value={database}>
        <Header />
        <Body />
      </DatabaseContext.Provider>
    </Provider>
  );
}

export default App;

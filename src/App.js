import React, { useEffect, createContext, Context } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { initializeApp} from "firebase/app";
import { getDatabase, onValue, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBu6IH2aVmyYtK38avg9bxbaZO5LG0qDcI",
  authDomain: "saunter-7520c.firebaseapp.com",
  projectId: "saunter-7520c",
  storageBucket: "saunter-7520c.appspot.com",
  messagingSenderId: "975188337326",
  appId: "1:975188337326:web:6e52791e188edaa4a9833f",
  measurementId: "G-96QYBW0JJG",
  databaseURL: "https://saunter-7520c-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const DatabaseContext =  createContext(database);

console.log(database);

function App() {
  
  useEffect(() => {
    const dbRef = ref(getDatabase());

    // onValue(ref(database, "saunters", (snap) => {
    //   console.log("snap", snap);
    // }))
  }, [])
  

  return (
    <Provider store={store}>
      <DatabaseContext.Provider value={DatabaseContext}>
        <Header />
        <Body />
      </DatabaseContext.Provider>
    </Provider>
  );
}

export default App;

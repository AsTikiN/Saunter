import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBu6IH2aVmyYtK38avg9bxbaZO5LG0qDcI",
  authDomain: "saunter-7520c.firebaseapp.com",
  projectId: "saunter-7520c",
  storageBucket: "saunter-7520c.appspot.com",
  messagingSenderId: "975188337326",
  appId: "1:975188337326:web:6e52791e188edaa4a9833f",
  measurementId: "G-96QYBW0JJG",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

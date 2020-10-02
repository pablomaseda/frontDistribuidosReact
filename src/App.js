import React from "react";
import Logged from "./Components/Logged";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Logged />
    </Provider>
  );
}

export default App;

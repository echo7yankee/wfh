import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

//jwt
import jwt from "jsonwebtoken";

//axips
import axios from "axios";

//redux stuff
import { Provider } from "react-redux";
import { logoutUser } from "./Redux/actions/authActions";
import { SET_AUTHENTICATED } from "./Redux/types";
import store from "./Redux/store";

try {
  const token = localStorage.getItem("FBIdToken");
  console.log(Date.now());

  if (token) {
    const decodedToken = jwt.decode(token);
    console.log(decodedToken.exp * 1000);

    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
    }

    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
  }
} catch (error) {
  console.log(error);
}

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

import React, { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// initiall state:
const initialState = {
  username: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  password: localStorage.getItem("password")
    ? localStorage.getItem("password")
    : ""
};

// create context:
export const AuthContext = createContext(initialState);

// provider component:
export function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("username", state.username);
    localStorage.setItem("password", state.password);
  }, [state]);

  // actions:
  function saveUserData(userData) {
    dispatch({ type: "SAVE_USER_DATA", payload: userData });
  }

  return (
    <AuthContext.Provider
      value={{
        username: state.username,
        password: state.password,
        saveUserData
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

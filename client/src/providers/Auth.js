import React, { useContext, useReducer, useCallback } from "react";

const AuthStateContext = React.createContext();

const initialState = {
  authenticated: false,
  user: null,
};

export const AuthStateProvider = ({ children }) => {
  const localStorage = window.localStorage;

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOGIN": {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...state,
            authenticated: true,
            user: action.user,
          })
        );
        return { ...state, authenticated: true, user: action.user };
      }
      case "LOGOUT": {
        localStorage.removeItem("user");
        return { ...initialState };
      }
      default:
        return state;
    }
  }, initialState);

  const userFromStorage = localStorage.getItem("user");
  const authState = userFromStorage ? JSON.parse(userFromStorage) : state;

  const value = {
    ...authState,
    dispatch: useCallback(dispatch, []),
  };

  return <AuthStateContext.Provider value={value} children={children} />;
};

export function useAuthState() {
  return useContext(AuthStateContext);
}

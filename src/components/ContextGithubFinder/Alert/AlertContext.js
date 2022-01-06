import { createContext, useContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContextApi = createContext();

export const AlertContext = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 3000);
  };

  return (
    <AlertContextApi.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContextApi.Provider>
  );
};

export default AlertContextApi;

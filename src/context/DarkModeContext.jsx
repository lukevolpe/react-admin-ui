import { createContext, useReducer } from 'react';
import DarkModeReducer from './DarkModeReducer';

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dmDispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dmDispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

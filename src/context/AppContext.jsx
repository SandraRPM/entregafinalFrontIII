import { createContext, useContext, useReducer } from 'react';
import AppReducer, { initialState } from './AppReducer';

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const obtenerListado = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();

      dispatch({ type: 'OBTENER_LISTADO', payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  const obtenerDetalle = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();

      dispatch({ type: 'OBTENER_DETALLE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  const cambiarTheme = (theme) => {
    dispatch({ type: 'CAMBIAR_THEME', payload: theme });
  };

  
  return (
    <AppContext.Provider
      value={{ ...state, obtenerListado, obtenerDetalle, cambiarTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

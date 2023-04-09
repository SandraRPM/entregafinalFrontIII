export const OBTENER_LISTADO = 'OBTENER_LISTADO';
export const OBTENER_DETALLE = 'OBTENER_DETALLE';
export const CAMBIAR_THEME = 'CAMBIAR_THEME';

export const initialState = {
  dentistas: [],
  detalle: null,
  theme: 'light',
};

// eslint-disable-next-line import/no-anonymous-default-export
const appReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case OBTENER_LISTADO:
      return {
        ...state,
        dentistas: payload,
      };
    case OBTENER_DETALLE:
      return {
        ...state,
        detalle: payload,
      };
    case CAMBIAR_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default appReducer;

import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  videos: [],
  categories: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: action.payload,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'ADD_VIDEO':
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case 'EDIT_VIDEO':
      return {
        ...state,
        videos: state.videos.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case 'DELETE_VIDEO':
      return {
        ...state,
        videos: state.videos.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

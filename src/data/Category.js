import React, { useReducer, useContext, createContext } from "react";

const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();

const addItem = (state, data) => {
  return [...state, data];
};

const intialCategory = ["Do First"];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(state, action.data);
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialCategory);
  return (
    <CategoryDispatchContext.Provider value={dispatch}>
      <CategoryStateContext.Provider value={state}>
        {children}
      </CategoryStateContext.Provider>
    </CategoryDispatchContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryStateContext);
export const useDispatchCategory = () => useContext(CategoryDispatchContext);

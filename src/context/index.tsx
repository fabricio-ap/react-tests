import React, { Dispatch, createContext, useReducer } from 'react';
import { Actions, mainReducer } from '~/reducer';
import { ProductType } from '~/reducer/products';
import { StoreType } from '~/reducer/store';

interface AppProviderProps {
  children: React.ReactNode;
}

export type InitialStateType = {
  products: ProductType[];
  store: StoreType[];
};

const initialState = {
  products: [],
  store: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

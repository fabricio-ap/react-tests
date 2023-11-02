import React, { Dispatch, createContext, useReducer } from 'react';
import { Actions, mainReducer } from '~/reducer';
import { PurchaseCartItemType } from '~/reducer/purchaseCart';
import { UserType } from '~/reducer/user';

interface AppProviderProps {
  children: React.ReactNode;
}

export type InitialStateType = {
  user: UserType;
  purchaseCart: PurchaseCartItemType[];
};

const initialState = {
  user: { name: '' },
  purchaseCart: [],
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

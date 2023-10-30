type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ADD_CART = 'ADD_CART',
}

export type StoreType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type StorePayload = {
  [Types.ADD_CART]: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };
};

export type StoreActions = ActionMap<StorePayload>[keyof ActionMap<StorePayload>];

export const storeReducer = (state: StoreType[], action: StoreActions) => {
  switch (action.type) {
    case Types.ADD_CART:
      console.log({ state });
      return state;

    default:
      return state;
  }
};

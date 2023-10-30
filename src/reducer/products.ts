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
  CREATE = 'CREATE_PRODUCT',
  DELETE = 'DELETE_PRODUCT',
}

// Product

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.CREATE]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.DELETE]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: ProductType[], action: ProductActions) => {
  switch (action.type) {
    case Types.CREATE:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.DELETE:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

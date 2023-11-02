import { Types } from '~/actions/purchaseCart';
import { PurchaseCartActions } from '~/actions/types';

export type PurchaseCartItemType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export const purchaseCartReducer = (state: PurchaseCartItemType[], action: PurchaseCartActions) => {
  switch (action.type) {
    case Types.ADD_CART:
      return [...state, action.payload];

    case Types.REMOVE_CART:
      return [...state.filter((item) => action.payload.id !== item.id)];

    default:
      return state;
  }
};

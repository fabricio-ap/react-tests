import { PurchaseCartItemType } from '~/reducer/purchaseCart';

export enum Types {
  ADD_CART = 'ADD_CART',
}

export type PurchaseCartPayload = {
  [Types.ADD_CART]: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };
};

export const addProduct = (payload: PurchaseCartItemType) => {
  return {
    type: Types.ADD_CART,
    payload,
  };
};

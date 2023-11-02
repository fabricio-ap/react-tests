import { PurchaseCartItemType } from '~/reducer/purchaseCart';

export enum Types {
  ADD_CART = 'ADD_CART',
  REMOVE_CART = 'REMOVE_CART',
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
  [Types.REMOVE_CART]: {
    id: number;
  };
};

export const addProduct = (payload: PurchaseCartItemType) => ({
  type: Types.ADD_CART,
  payload,
});

export const removeProduct = (payload: PurchaseCartItemType) => ({
  type: Types.REMOVE_CART,
  payload,
});

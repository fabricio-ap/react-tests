import { InitialStateType } from '~/context';
import { ProductActions, productReducer } from './products';
import { StoreActions, storeReducer } from './store';

export type Actions = ProductActions | StoreActions;

export const mainReducer = ({ products, store }: InitialStateType, action: Actions) => ({
  products: productReducer(products, action as ProductActions),
  store: storeReducer(store, action as StoreActions),
});

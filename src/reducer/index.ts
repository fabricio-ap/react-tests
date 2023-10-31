import { PurchaseCartActions, UserActions } from '~/actions/types';
import { InitialStateType } from '~/context';
import { purchaseCartReducer } from './purchaseCart';
import { userReducer } from './user';

export type Actions = UserActions | PurchaseCartActions;

export const mainReducer = ({ user, purchaseCart }: InitialStateType, action: Actions) => ({
  user: userReducer(user, action as UserActions),
  purchaseCart: purchaseCartReducer(purchaseCart, action as PurchaseCartActions),
});

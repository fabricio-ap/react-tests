import { PurchaseCartPayload } from './purchaseCart';
import { UserPayload } from './user';

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

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export type PurchaseCartActions =
  ActionMap<PurchaseCartPayload>[keyof ActionMap<PurchaseCartPayload>];

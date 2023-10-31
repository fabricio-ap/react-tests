import { UserActions } from '~/actions/types';
import { Types } from '~/actions/user';

export type UserType = {
  name: string;
};

export const userReducer = (state: UserType, action: UserActions) => {
  switch (action.type) {
    case Types.UPD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

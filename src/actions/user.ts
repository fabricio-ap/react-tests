export enum Types {
  UPD_NAME = 'UPD_NAME',
}

export type UserPayload = {
  [Types.UPD_NAME]: string;
};

export const changeName = (payload: string) => {
  return {
    type: Types.UPD_NAME,
    payload,
  };
};

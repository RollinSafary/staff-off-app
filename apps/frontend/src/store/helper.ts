import { PayloadAction } from '@reduxjs/toolkit';

export const defineReducers = <TState>() => {
  return <
    T extends {
      [K in keyof T]: (state: TState, action: PayloadAction<any>) => void;
    },
  >(
    reducers: T
  ) => reducers;
};

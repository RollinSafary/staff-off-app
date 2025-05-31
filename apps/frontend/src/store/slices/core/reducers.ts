import { PayloadAction } from '@reduxjs/toolkit';
import { ICoreSliceState } from '@reduxTypes/core';
import { defineReducers } from '@store/helper';

const reducers = defineReducers<ICoreSliceState>()({
  setIsInitialized: (state, action: PayloadAction<boolean>) => {
    state.isInitialized = action.payload;
  },
});

export default reducers;

import { PayloadAction } from '@reduxjs/toolkit';
import {
  type IViewsSliceState,
  type RedirectionProps,
  type IOpenedModal,
  type ModalName,
  type IToastNotification,
} from '@reduxTypes/views';
import { defineReducers } from '@store/helper';

const reducers = defineReducers<IViewsSliceState>()({
  setRedirection(state, action: PayloadAction<RedirectionProps>) {
    state.redirection = action.payload;
  },
  addModalToList<P>(state: IViewsSliceState, action: PayloadAction<IOpenedModal<P>>) {
    if (!state.modals.find((modal) => modal.name === action.payload.name)) {
      state.modals.push(action.payload);
    }
  },
  removeModalFromList(state: IViewsSliceState, action: PayloadAction<ModalName>) {
    state.modals = state.modals.filter((modal) => modal.name !== action.payload);
  },
  removeAllModalsFromList<P>(
    state: IViewsSliceState,
    action: PayloadAction<Array<IOpenedModal<P>>>
  ) {
    state.modals = action.payload;
  },
  updateToastNotificationState(state: IViewsSliceState, action: PayloadAction<IToastNotification>) {
    state.toastNotificationPopup = action.payload ? action.payload : { open: false, props: null };
  },
});

export default reducers;

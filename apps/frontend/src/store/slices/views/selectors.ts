import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '@store/index';

const selector = (state: RootState) => state.views;

export const redirection = createSelector([selector], (state) => state.redirection);
export const modals = createSelector([selector], (state) => state.modals);
export const toastNotificationPopUp = createSelector(
  [selector],
  (state) => state.toastNotificationPopup
);

export default {
  redirection,
  modals,
  toastNotificationPopUp,
};

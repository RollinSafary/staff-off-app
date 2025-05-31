import {
  type RedirectionProps,
  type IOpenedModal,
  type ModalName,
  type IToastNotification,
} from '@reduxTypes/views';
import slice from './slice';
import { AppDispatch } from '@store/index';

const { actions } = slice;

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(actions.setRedirection(value));
};

const openModal =
  <P>(value: IOpenedModal<P>) =>
  (dispatch: AppDispatch) => {
    dispatch(actions.addModalToList(value));
  };

const closeModal = (name: ModalName) => (dispatch: AppDispatch) => {
  dispatch(actions.removeModalFromList(name));
};

const closeAllModals = () => (dispatch: AppDispatch) => {
  dispatch(actions.removeAllModalsFromList([]));
};

const setToastNotificationPopUpState = (value: IToastNotification) => (dispatch: AppDispatch) => {
  dispatch(actions.updateToastNotificationState(value));
};

export default {
  setRedirectionState,
  openModal,
  closeModal,
  closeAllModals,
  setToastNotificationPopUpState,
};

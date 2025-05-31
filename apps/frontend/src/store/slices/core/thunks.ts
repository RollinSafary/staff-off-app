import FirebaseService from 'src/api';
import slice from './slice';
import { AppDispatch } from '@store/index';

const actions = slice.actions;

const initialize = () => async (dispatch: AppDispatch) => {
  try {
    const firebase = FirebaseService.getInstance();
    dispatch(actions.setIsInitialized(true));
  } catch (error) {
    console.error(error);
  }
};

export default { initialize };

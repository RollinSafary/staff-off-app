import FirebaseService from 'src/services/firebase-service';
import slice from './slice';
import { AppDispatch } from '@store/index';
import API from 'src/api';

const actions = slice.actions;

const initialize = () => async (dispatch: AppDispatch) => {
  try {
    const firebase = FirebaseService.getInstance();
    dispatch(actions.setIsInitialized(true));
    API.user.createUser({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password',
    });
  } catch (error) {
    console.error(error);
  }
};

export default { initialize };

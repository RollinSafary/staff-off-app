import { configureStore, PayloadAction } from '@reduxjs/toolkit';

import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

type SliceReducer<S, A> = (s: S, action: A) => any | ((s: S) => any);

export type SliceReducers<S> = Record<string, SliceReducer<S, PayloadAction>>;

export default store;

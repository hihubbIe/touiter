import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/slice';
import feedReducer from '../features/feed/slice';
import touitReducer from '../features/touit/slice';
import profileReducer from '../features/profile/slice';
import feedSearchReducer from '../features/feedSearch/slice';
import modalReducer from '../features/modal/slice';
import newTouitReducer from '../features/newTouit/slice';
import loginReducer from '../features/login/slice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    feed: feedReducer,
    touit: touitReducer,
    profile: profileReducer,
    feedSearch: feedSearchReducer,
    modal: modalReducer,
    newTouit: newTouitReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LoginState {
  mode: 'login' | 'register';
}

const initialState: LoginState = {
  mode: 'login',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    switch: (state) => {
      state.mode = state.mode === 'login' ? 'register' : 'login';
    },
  },
});

const selectMode = (state: RootState) => state.login.mode;

export const reducers = loginSlice.actions;
export const selectors = {
    selectMode
}

export default loginSlice.reducer;

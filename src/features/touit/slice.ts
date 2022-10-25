import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import User from '../../models/user.model';
export interface TouitState {
  touitUsers: User[];
}

const initialState: TouitState = {
  touitUsers: [],
};

export const touitSlice = createSlice({
  name: 'touit',
  initialState,
  reducers: {
    setOne: (state, action: PayloadAction<User>) => {
      state.touitUsers = [...state.touitUsers, action.payload];
    }
  },
});

const selectUserById = (state: RootState, id?: string) => {
  if (!id) return undefined;
  return state.touit.touitUsers.find(u => u.id === id);
}

export const reducers = touitSlice.actions;
export const selectors = {
  selectUserById
}

export default touitSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface MenuState {
  menuItemSelected: number;
}

const initialState: MenuState = {
  menuItemSelected: 0,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItemSelected: (state, action: PayloadAction<number>) => {
      state.menuItemSelected = action.payload;
    },
  },
});

const selectCount = (state: RootState) => state.menu.menuItemSelected;

export const reducers = menuSlice.actions;
export const selectors = {
    selectCount
}

export default menuSlice.reducer;

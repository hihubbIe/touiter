import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NewTouitState {
  input: string;
}

const initialState: NewTouitState = {
  input: '',
};

export const newTouitSlice = createSlice({
  name: 'newTouit',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

const selectInput = (state: RootState): string => state.newTouit.input;

export const reducers = newTouitSlice.actions;
export const selectors = {
  selectInput,
}

export default newTouitSlice.reducer;

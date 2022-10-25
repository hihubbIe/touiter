import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface FeedSearchState {
  filter: string;
}

const initialState: FeedSearchState = {
  filter: '',
};

export const feedSearchSlice = createSlice({
  name: 'feedSearch',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

const selectFilter = (state: RootState) => state.feedSearch.filter;

export const reducers = feedSearchSlice.actions;
export const selectors = {
    selectFilter
}

export default feedSearchSlice.reducer;

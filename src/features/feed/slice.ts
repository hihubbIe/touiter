import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Touit from '../../models/touit.model';

export interface FeedState {
    touits: Touit[];
}

const initialState: FeedState = {
    touits: [],
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setAll: (state, action: PayloadAction<Touit[]>) => {
      state.touits = action.payload;
    }
  },
});

const selectTouits = (state: RootState) => state.feed.touits.filter(touit => touit.content?.includes(state.feedSearch.filter));

export const reducers = feedSlice.actions;
export const selectors = {
    selectTouits
}

export default feedSlice.reducer;

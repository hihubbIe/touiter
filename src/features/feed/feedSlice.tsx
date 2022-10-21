import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Touit from '../../models/touit.model';
import messages from '../../static/messages.json';

export interface FeedState {
    touits: Touit[];
}

const initialState: FeedState = {
    touits: messages,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
});

const selectTouits = (state: RootState) => state.feed.touits;

export const selectors = {
    selectTouits
}

export default feedSlice.reducer;

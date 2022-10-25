import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import User from '../../models/user.model';
export interface ProfileState {
    profile: User;
}

const initialState: ProfileState = {
    profile: {
      _id: 'string',
      id: 'MilesEdgeworth',
      firstname: 'Miles',
      lastname: 'Edgeworth',
      email: 'milesedgeworth@outlook.fr',
      photo: 'https://images.freeimages.com/images/large-previews/51f/profile-1439243.jpg',
      profileMessage: 'Hello everyone ! 😊\nHope you have a great day and don\'t forget,\n#sweepstake !',
      creationDate: '2022-08-10',
      passwordHash: '6356e7bafccc105dd136f067',
    },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
  },
});

const selectProfile = (state: RootState) => state.profile.profile;

export const reducers = profileSlice.actions;
export const selectors = {
    selectProfile
}

export default profileSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ModalState {
  open: boolean;
  contentQueue: {type: string, props: any}[];
}

const initialState: ModalState = {
  open: false,
  contentQueue: [],
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<{type: string, props: any}>) => {
      state.open = true;
      state.contentQueue.push(action.payload);
    },
    setCloseModal: (state) => {
      state.contentQueue.pop();
      state.open = state.contentQueue.length !== 0;
    }
  },
});

const selectOpen = (state: RootState): boolean => state.modal.open;
const selectType = (state: RootState): string => {
  const modalQueueLength = state.modal.contentQueue.length;
  return modalQueueLength > 0 ? state.modal.contentQueue[modalQueueLength - 1].type : '';
}
const selectProps = (state: RootState): any => {
  const modalQueueLength = state.modal.contentQueue.length;
  return modalQueueLength > 0 ? state.modal.contentQueue[modalQueueLength - 1].props : {};
}

export const reducers = modalSlice.actions;
export const selectors = {
    selectOpen,
    selectType,
    selectProps,
}

export default modalSlice.reducer;

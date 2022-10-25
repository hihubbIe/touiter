import userService from '../../services/user.service';
import { reducers as modalReducers } from '../modal/slice';
import { SHOW_TOUIT_DETAILS, SHOW_USER_PROFILE } from '../modal/modalKeys';
import { reducers } from './slice';

export const getUser = (touitId: string) => async (dispatch: any) => {
  try {
    const res = await userService.findOne(touitId);
    dispatch(reducers.setOne(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const openDetails = (props: any) => async (dispatch: any) => {
  dispatch(modalReducers.setOpenModal({ type: SHOW_TOUIT_DETAILS , props}));
};

export const openProfile = (props: any) => async (dispatch: any) => {
  dispatch(modalReducers.setOpenModal({ type: SHOW_USER_PROFILE , props}));
};

import userService from '../../services/user.service';
import { reducers as modalReducers } from '../modal/slice';
import { SHOW_TOUIT_DETAILS, SHOW_USER_PROFILE } from '../modal/modalKeys';
import { reducers } from './slice';
import touitService from '../../services/touit.service';
import Touit from '../../models/touit.model';

export const getUser = (touitId: string) => async (dispatch: any) => {
  try {
    const res = await userService.findOne(touitId);
    dispatch(reducers.setOne(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const del = (touitId: string) => async (dispatch: any) => {
  return await touitService.del(touitId);
}

export const update = (touit: Touit, newContent: string) => async (dispatch: any) => {
  const updatedTouit = {
    id: touit.id,
    userid: touit.userid,
    content: newContent,
    date: touit.date,
    attachments: touit.attachments,
    replyTo: touit.replyTo,
    likes: touit.likes
  }
  return await touitService.put(updatedTouit);
}

export const openDetails = (props: any) => async (dispatch: any) => {
  dispatch(modalReducers.setOpenModal({ type: SHOW_TOUIT_DETAILS , props}));
};

export const openProfile = (props: any) => async (dispatch: any) => {
  dispatch(modalReducers.setOpenModal({ type: SHOW_USER_PROFILE , props}));
};

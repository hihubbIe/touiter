import Touit from '../../models/touit.model';
import touitService from '../../services/touit.service';
import { reducers as feedReducers } from '../feed/slice';
import { reducers } from './slice';

export const postTouit = (touit: Touit) => async (dispatch: any) => {
  try {
    const res = await touitService.post(touit);
    dispatch(feedReducers.addOne(res as unknown as Touit));
  } catch (err) {
    console.log(err);
  }
};

export const setInput = (input: string) => async (dispatch: any) => {
  dispatch(reducers.setInput(input));
}

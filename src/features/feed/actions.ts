import touitService from '../../services/touit.service';
import { reducers } from './slice';

export const retrieveTouits = () => async (dispatch: any) => {
  try {
    const res = await touitService.findAll();
    dispatch(reducers.setAll(res.data));
  } catch (err) {
    console.log(err);
  }
};

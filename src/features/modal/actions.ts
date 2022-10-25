import { reducers, selectors } from './slice';

export const setCloseModal = () => async (dispatch: any) => {
  dispatch(reducers.setCloseModal());
}

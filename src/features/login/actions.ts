import CreateUser from "../../models/createUser.model";
import userService from "../../services/user.service";
import { reducers } from "./slice";

export const signup = (user: CreateUser) => async (dispatch: any) => {
  try {
    const res = await userService.post(user);
    dispatch(reducers.switch());
  } catch (err) {
    console.log(err);
  }
};

export const login = (creds: {email: string, passwordHash: string}) => async (dispatch: any) => {
  try {
    //const res = await userService.post(user);
    //dispatch(reducers.switch());
  } catch (err) {
    console.log(err);
  }
};

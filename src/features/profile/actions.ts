import User from "../../models/user.model";
import userService from "../../services/user.service";
import { reducers } from "./slice";

export const updateProfile = (user: User) => async (dispatch: any) => {
  try {
    return await userService.put(user);
  } catch (err) {
    console.log(err);
  }
};

import { AUTH_ACTIONS } from "../types.d";
import { addToasterAlert } from "./UI.actions";

type userAuthData = {
  userName?: String;
  email: String;
  password?: String;
};

type userSocialLogin = {
  name?: String;
  email: String;
  password?: String;
  token: string;
  img: string;
};

export const userLoggedInStart = (userData: userAuthData) => {};

export const userLoggedInViaSocial = (userData: userSocialLogin) => {
  return (dispatch: any) => {
    dispatch(
      addToasterAlert({
        msg: `You successfully logged in!, welcome ${userData.name}!`,
        status: "success"
      })
    );
    dispatch({
      type: AUTH_ACTIONS.LOG_IN,
      payload: userData
    });
  };
};

export const userLoggedOutInStart = (userName: string) => {
  return {
    type: AUTH_ACTIONS.LOG_OUT,
    payload: userName
  };
};

import {
  saveToLocalStorage,
  fetchFromLocalStorage
} from "./../../helpers/util";
import { AUTH_ACTIONS } from "../types.d";
import { addToasterAlert } from "./UI.actions";
import http from "../../agnents/agent.service";

export const userLoggedInStart = (userData: userSocialLogin) => {
  return async (dispatch: any) => {
    const { data: userResponse } = await http.Auth.loginSocial(userData);
    saveToLocalStorage("token", userResponse.token);
    saveToLocalStorage("userId", userResponse._id);

    dispatch({
      type: AUTH_ACTIONS.LOG_IN,
      payload: userResponse
    });
  };
};

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

export const checkIfUserStillConnected = () => {
  return async (dispatch: any) => {
    const { data: userResponse } = await http.User.getCurrentUser();
    console.log("userResponse", userResponse);
    dispatch({
      type: AUTH_ACTIONS.LOG_IN,
      payload: userResponse
    });
  };
};

export const userLoggedOutInStart = (userName: string) => {
  return {
    type: AUTH_ACTIONS.LOG_OUT,
    payload: userName
  };
};

import {
  saveToLocalStorage,
  removeFromLocalStorage
} from "./../../helpers/util";
import { AUTH_ACTIONS, UI_ACTIONS } from "../types.d";
import { addToasterAlert } from "./UI.actions";
import http from "../../agnents/agent.service";

export const userLoggedInStart = (userData: userSocialLogin) => {
  return async (dispatch: any) => {
    const { data: userResponse } = await http.Auth.loginSocial(userData);
    saveToLocalStorage("fbtoken", userResponse.token);
    saveToLocalStorage("token", userResponse.appToken);
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

export const userLoggedOut = () => {
  return (dispatch: any) => {
    removeFromLocalStorage("fbtoken");
    removeFromLocalStorage("token");
    removeFromLocalStorage("userId");
    dispatch({
      type: UI_ACTIONS.NAVIGATE_HOME
    });
    dispatch({
      type: AUTH_ACTIONS.LOG_OUT,
      payload: null
    });
  };
};

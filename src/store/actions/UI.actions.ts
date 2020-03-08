import { UI_ACTIONS } from "./../types.d";

export const moveToHomeScreen = () => ({
  type: UI_ACTIONS.NAVIGATE_HOME
});

export const showLoader = () => ({
  type: UI_ACTIONS.SHOW_LOADER
});

export const hideLoader = () => ({
  type: UI_ACTIONS.HIDE_LOADER
});

export const addToasterAlert = (msg: toasterMessage) => ({
  type: UI_ACTIONS.ADD_TOASTER_ALERT,
  payload: msg
});

export const removeToasterAlert = (msgId?: Number) => ({
  type: UI_ACTIONS.REMOVE_TOASTER_ALERT,
  payload: msgId
});

export const showLogInModal = (status: Boolean) => ({
  type: UI_ACTIONS.SHOW_LOGIN,
  payload: status
});

export const trackRoute = (routePath: string) => ({
  type: UI_ACTIONS.TRACK_ROUTE,
  payload: routePath
});

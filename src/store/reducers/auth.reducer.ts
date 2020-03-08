import { AUTH_ACTIONS, UI_ACTIONS } from "./../types.d";

export default (state = [], action: any) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOG_OUT:
    case AUTH_ACTIONS.LOG_IN:
      return { ...state, activeUser: action.payload };
    default:
      return { ...state };
  }
};

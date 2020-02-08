import HTTP_CONST from "./agent.constant";
// import _ from "lodash";
// import { saveToLocalStorage } from './Util/Util';
import { apiRequestHandler } from "../index";

/**
 * Agents service to map Http request for Responsibilities.
 * Talks With the API class.
 * here you can manipulate the data before and after the Request.
 */
const Auth = {
  // login: async (user: any) => {
  //     const { email, password } = user;
  //     const data: any = await apiRequestHandler.post(`${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.AUTH.LOGIN}`, { email, password })
  //     if (data) {
  //         saveToLocalStorage({ token: data.data.token });
  //         return User.getCurrent(email);
  //     }
  //     return false;
  // }
};

const User = {
  // getCurrent: async (email: any) => {
  //     let user: any = await apiRequestHandler.post(`${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.USER.GET}`, { email })
  //     if (user) {
  //         saveToLocalStorage({ user: user.data.email });
  //         user = _.omit(user.data, ['password', '__v'])
  //         return user;
  //     }
  // }
};

const Challenge = {
  submitNewChallenge: async (challenge: any) => {
    const newChallenge: any = await apiRequestHandler.post(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.Challenge.newChallenge}`,
      { challenge, user: {} }
    );
  },
  getChallenge: async (challengeId: string) => {
    return await apiRequestHandler.get(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.Challenge.getChallenge}${challengeId}`
    );
  }
};

export default {
  Auth,
  User,
  Challenge
};

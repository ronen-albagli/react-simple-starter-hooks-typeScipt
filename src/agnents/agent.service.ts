import HTTP_CONST from "./agent.constant";
// import _ from "lodash";
// import { saveToLocalStorage } from './Util/Util';
import { apiRequestHandler } from "../index";
import { fetchFromLocalStorage } from "../helpers/util";

type user = {
  name: String;
  picture: Object;
  token: String;
  email: String;
  password?: String;
};

/**
 * Agents service to map Http request for Responsibilities.
 * Talks With the API class.
 * here you can manipulate the data before and after the Request.
 */
const Auth = {
  login: async (user: user) => {
    const { email, password } = user;
    const data: any = await apiRequestHandler.post(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.AUTH.LOGIN}`,
      { email, password }
    );
    return data;
    // if (data) {
    //   saveToLocalStorage({ token: data.data.token });
    //   return User.getCurrent(email);
    // }
  },
  loginSocial: async (user: userSocialLogin) => {
    try {
      const data: any = await apiRequestHandler.post(
        `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.AUTH.LOGIN}`,
        { user }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const User = {
  getCurrentUser: async () => {
    const userId = fetchFromLocalStorage("userId");
    const data: any = await apiRequestHandler.get(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.USER.GET}?id=${userId}`
    );
    return data;
  },
  getUserById: async (id: string) => {
    const data: any = await apiRequestHandler.get(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.AUTH.LOGIN}?id=${id}`
    );
    return data;
  }
};

const Challenge = {
  submitNewChallenge: async (challenge: any) => {
    const newChallenge: any = await apiRequestHandler.post(
      `${HTTP_CONST.BASE_URL.DEV}${HTTP_CONST.API_ROUTES.Challenge.newChallenge}`,
      { challenge, userId: fetchFromLocalStorage("userId") }
    );
    return newChallenge;
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

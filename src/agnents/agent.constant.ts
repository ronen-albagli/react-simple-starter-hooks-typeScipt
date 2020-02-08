export default {
  BASE_URL: {
    PROD: "",
    DEV: "http://localhost:8080"
  },

  API_ROUTES: {
    USER: {
      INSERT: "api/user/insert",
      GET: "api/user/get"
    },

    AUTH: {
      LOGIN: "api/user/login"
    },
    GEO: {
      INSERT: ""
    },
    Challenge: {
      newChallenge: "/api/battle/new-challenge",
      getChallenge: "/api/battle/getChallenge?id="
    }
  }
};

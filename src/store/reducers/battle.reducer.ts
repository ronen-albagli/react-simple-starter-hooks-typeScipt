import { CHALLENGE_ACTION } from "./../types.d";

export default (state = [], action: any) => {
  switch (action.type) {
    case CHALLENGE_ACTION.CREATE_NEW_CHALLENGE:
      return { ...state, ...action.payload };
    case CHALLENGE_ACTION.TEST_NEW_CODE:
      return { ...state, stats: action.payload };
    case CHALLENGE_ACTION.START_TEST_NEW_CODE:
      return { ...state, testing: action.payload };
    case CHALLENGE_ACTION.FINISH_TEST_NEW_CODE:
      return { ...state, testing: false, results: action.payload };
    case CHALLENGE_ACTION.GET_CHALLENGE: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};

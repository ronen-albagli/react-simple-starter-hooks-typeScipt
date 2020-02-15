import { CHALLENGE_ACTION } from "../types.d";
import {
  formatBattleState,
  formatBattleStateToSend
} from "../../helpers/validators";
import { compile } from "../../helpers/complier";
import {
  showLoader,
  hideLoader,
  addToasterAlert,
  showLogInModal
} from "./UI.actions";
import http from "../../agnents/agent.service";
import { fetchFromLocalStorage } from "../../helpers/util";

export const insertNewChallenge = (classificationData: any) => ({
  type: CHALLENGE_ACTION.CREATE_NEW_CHALLENGE,
  payload: classificationData
});

export const submitNewChallenge = (data: any) => {
  return async (dispatch: any) => {
    try {
      const userToken = fetchFromLocalStorage("token");
      if (userToken) {
        const response = await http.Challenge.submitNewChallenge(
          formatBattleStateToSend(data)
        );
        dispatch(insertNewChallenge(response));
      } else {
        dispatch(showLogInModal(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchChallengeAction = (challengeData: any) => {
  return {
    type: CHALLENGE_ACTION.CLEAR_CHALLENGE,
    payload: challengeData
  };
};

export const getChallenge = (challengeId: string) => {
  return async (dispatch: any) => {
    const { data: challenge } = await http.Challenge.getChallenge(challengeId);
    dispatch(fetchChallengeAction(challenge));
  };
};

export const clearChallenge = () => {
  return {
    type: CHALLENGE_ACTION.CLEAR_CHALLENGE,
    payload: {}
  };
};
export const testNewCode = (stats: boolean) => ({
  type: CHALLENGE_ACTION.TEST_NEW_CODE,
  payload: stats
});

export const startTestingCode = () => ({
  type: CHALLENGE_ACTION.START_TEST_NEW_CODE,
  payload: true
});

export const startTestCode = (battleState: any) => {
  return (dispatch: any) => {
    dispatch(showLoader());
    const battleFormated = formatBattleState(battleState);
    const results = compile(battleFormated);
    dispatch(finishTestCode(results));
    dispatch(hideLoader());
    if (results.correct) {
      dispatch(
        addToasterAlert({
          msg: "You got it Right!, you can submit now your challenge!",
          status: "success"
        })
      );
    } else {
      dispatch(
        addToasterAlert({
          msg: "Completion failed, try again,",
          status: "error"
        })
      );
    }
  };
};

export const finishTestCode = (results: battleResult) => ({
  type: CHALLENGE_ACTION.FINISH_TEST_NEW_CODE,
  payload: results
});

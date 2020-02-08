import { CHALLENGE_ACTION } from "../types.d";
import { formatBattleState } from "../../helpers/validators";
import { compile } from "../../helpers/complier";
import { showLoader, hideLoader, addToasterAlert } from "./UI.actions";
// import http from "../../agent/agent.service";

// export const insertNewChallenge = (classificationData: any) => ({
//   type: CHALLENGE_ACTION.CREATE_NEW_CHALLENGE,
//   payload: classificationData
// });

// export const submitNewChallenge = (data: any) => {
//   return async (dispatch: any) => {
//     try {
//       const response = await http.Challenge.submitNewChallenge(data);
//       dispatch(insertNewChallenge(response));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const fetchChallengeAction = (challengeData: any) => {
//   console.log("challengeData", challengeData);
//   return {
//     type: CHALLENGE_ACTION.GET_CHALLENGE,
//     payload: challengeData
//   };
// };

// export const getChallenge = (challengeId: string) => {
//   return async (dispatch: any) => {
//     const challenge = await http.Challenge.getChallenge(challengeId);
//     console.log("before", challenge);
//     dispatch(fetchChallengeAction(challenge));
//   };
// };

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
    setTimeout(() => {
      dispatch(hideLoader());
    }, 3000);
    console.log("in");
    dispatch(
      addToasterAlert({ msg: "test msg" + new Date(), status: "success" })
    );
  };
};

export const finishTestCode = (results: battleResult) => ({
  type: CHALLENGE_ACTION.FINISH_TEST_NEW_CODE,
  payload: results
});

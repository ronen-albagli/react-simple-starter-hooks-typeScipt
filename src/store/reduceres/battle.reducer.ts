// import { CHALLENGE_ACTION } from "../types.d";
// import http from "../../agent/agent.service";

export const testNewCode = (stats: boolean) => ({
  type: "TEST_NEW_CODE",
  payload: stats
});

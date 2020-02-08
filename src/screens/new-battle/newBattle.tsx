import React, { useState } from "react";
import FormBattle from "../../components/forms/battleForm";
import IDE from "../../components/IDE/IDE";
import { parseSecondToMin } from "../../helpers/time.helper";
import "./newBattle.scss";
import {
  startTestCode,
  startTestingCode,
  submitNewChallenge
} from "../../store/actions/battle.action";
import { connect } from "react-redux";
import TerminalIDE from "../../components/IDE/Termial";
import { stripFunction } from "../../helpers/striper";

type CodeState = {
  duration: any;
  description: any;
  challengeName: any;
  level: any;
  functionParams: any;
};

const NewBattle: React.FC = (props: any) => {
  const [battleState, setBattleState] = useState({
    step: 1,
    funcStr: "",
    userAnswer: "",
    newFormState: {}
  });

  const updateChallengeCode = (newCodeState?: CodeState, userCode?: string) => {
    if (newCodeState) {
      const {
        duration: { value: duration },
        functionParams: { value: params },
        description: { value: desc },
        challengeName: { value: funcName }
      } = newCodeState;
      let codeStr;
      codeStr = `  // ${desc} \n
  // You got ${parseSecondToMin(duration)} to complete this challenge\n
  function ${funcName} (${params}){
    ${battleState.userAnswer ? battleState.userAnswer : ""}
  }
    `;
      setBattleState({
        funcStr: codeStr,
        userAnswer: battleState.userAnswer,
        step: battleState.step,
        newFormState: { ...newCodeState }
      });
    } else {
      const strSplited = battleState.funcStr.split("){");
      const arr = [strSplited[0] + "){", userCode, "}"];
      const newState = { ...battleState };

      newState.funcStr = arr.join("");
      newState.step = 1;
      newState.userAnswer = userCode as any;
      setBattleState({ ...newState });
    }
  };

  const setUserAnswer = (userOutput: string) => {
    updateChallengeCode(undefined, userOutput);
  };

  const changeStep = (step: number) => {
    const newState = { ...battleState };
    newState.step = step;
    setBattleState({ ...newState });
  };

  const submitChallenge = () => {
    const newChallengeData = {
      ...battleState.newFormState,
      userAnswer: stripFunction(battleState.userAnswer)
    };
    props.dispatch(submitNewChallenge(newChallengeData));
  };

  const testUserCode = (userCode: string) => {
    const newState = { ...battleState };
    newState.userAnswer = userCode;
    setBattleState({ ...newState });
    props.dispatch(
      startTestCode({ ...battleState.newFormState, userAnswer: userCode })
    );
  };

  return (
    <div className="new-battle-container">
      <FormBattle
        updateCodeView={updateChallengeCode}
        changeStep={changeStep}
        onSubmit={submitChallenge}
        step={battleState.step}
        onTest={() => props.dispatch(startTestingCode())}
      />
      <div className="form-outputs">
        <IDE
          codeStr={battleState.funcStr}
          step={battleState.step}
          updateUserAnswer={setUserAnswer}
          isTesting={props.isTesting}
          testUserCode={testUserCode}
          ideKind={"code"}
        />

        <TerminalIDE ideKind={"terminal"} outputObj={props.testResults} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    testResults: state.battle.results,
    isTesting: state.battle.testing
  };
};

export default connect(mapStateToProps)(NewBattle);

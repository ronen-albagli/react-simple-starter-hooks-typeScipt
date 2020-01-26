import React, { useState } from "react";
import FormBattle from "../../components/forms/battleForm";
import IDE from "../../components/IDE/IDE";
import { parseSecondToMin } from "../../helpers/time.helper";
import { validateCodeInsert } from "../../helpers/validators";

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
    userAnswer: ""
  });

  const updateChallengeCode = (newCodeState: CodeState, userCode?: String) => {
    const {
      duration: { value: duration },
      level,
      functionParams: { value: params },
      description: { value: desc },
      challengeName: { value: funcName }
    } = newCodeState;

    const codeStr = `  // ${desc} \n
  // You got ${parseSecondToMin(duration)} to complete this challenge\n
  function ${funcName} (${params}){\n

  }
    `;
    setBattleState({
      funcStr: codeStr,
      userAnswer: battleState.userAnswer,
      step: battleState.step
    });
  };

  const updateUserAnswer = (userAnswer: string) => {
    validateCodeInsert(userAnswer, battleState.funcStr);
    console.log("userAnswer", userAnswer);
  };
  console.log(battleState.funcStr);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <FormBattle updateCodeView={updateChallengeCode} />
      <IDE codeStr={battleState.funcStr} change={updateUserAnswer} />
    </div>
  );
};

export default NewBattle;

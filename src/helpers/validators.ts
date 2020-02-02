import { stripFunction } from "./striper";
export const validateCodeInsert = (code: string, mainCode: string) => {
  if (code == mainCode) {
    return {
      valid: true,
      reason: ""
    };
  }
  return {
    valid: false,
    reason: "Function name cannot be changed!"
  };
};

export const formatBattleState = (battle: any) => {
  return {
    name: battle.challengeName.value,
    difficulty: battle.difficultly.value,
    duration: battle.duration.value,
    description: battle.description.value,
    parameters: battle.functionParams.value,
    test1: [
      { value: battle.paramA1.value, type: battle.typeA1 },
      { value: battle.paramA2.value, type: battle.typeA2 }
    ],
    test2: [
      { value: battle.paramB1.value, type: battle.typeB1 },
      { value: battle.paramB2.value, type: battle.typeB2 }
    ],
    test3: [
      { value: battle.paramC1.value, type: battle.typeC1 },
      { value: battle.paramC2.value, type: battle.typeC2 }
    ],
    desire1: battle.desireA,
    desire2: battle.desireB,
    desire3: battle.desireC,
    userAnswer: stripFunction(battle.userAnswer)
  };
};

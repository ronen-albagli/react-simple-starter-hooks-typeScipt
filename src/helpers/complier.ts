import sizeof from "object-sizeof";

export const compile = (battle: newChallenge) => {
  const { parameters, test1, test2, test3, userAnswer } = battle;

  const result: battleResult = {
    charLength: userAnswer.trim().length,
    correct: false,
    errors: undefined,
    runTime: "0",
    codeSize: ""
  };
  const paramsArr: Array<string> = parameters.split(",");
  // eslint-disable-next-line no-new-func
  const testFunc: Function = new Function(
    [...paramsArr] as any,
    userAnswer as string
  );

  [test1, test2, test3].forEach((test, counter: number) => {
    const inputArr = createTestCase(test);
    if (inputArr.length) {
      let answer;
      try {
        const StartTime = new Date();
        answer = testFunc(...inputArr);
        const endTime = new Date();
        result.runTime = ` ${new Date(
          (endTime as any) - (StartTime as any)
        ).getMilliseconds()} Milliseconds`;
      } catch (error) {
        result.errors = error;
      }
      const { value: desire } = (battle as any)[`desire${counter + 1}`];
      if (answer === desire) {
        result.correct = true;
      } else {
        result.correct = false;
      }
      result.codeSize = getBytes(userAnswer);
    }
  });
  return result;
};

const getBytes = (str: String) => {
  return sizeof(str) + " bytes";
};

const createTestCase = (inputs: Array<testCaseInput>) => {
  return inputs.map(input => convertInputType(input));
};

const convertInputType = (input: testCaseInput) => {
  switch (input.type.value) {
    case "Text":
      return input.value;
    case "Boolean":
      if (input.value === "true") return true;
      if (input.value === "false") return false;
    // eslint-disable-next-line no-fallthrough
    case "Number": {
      try {
        return parseInt(input.value);
      } catch (error) {
        console.log("Failed to parse input to number");
        return "ERROR";
      }
    }
    default:
      return input.value;
  }
};

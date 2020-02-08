type newChallenge = {
  name: String;
  difficulty: Number;
  duration: Number;
  description: String;
  parameters: String;
  test1: Array<testCaseInput>;
  test2: Array<testCaseInput>;
  test3: Array<testCaseInput>;
  desire1: String;
  desire2: String;
  desire3: String;
  userAnswer: String;
};

type testCaseInput = {
  value: string;
  type: any;
};

type battleResult = {
  charLength: Number;
  correct: Boolean;
  errors: any;
  runTime: String;
  codeSize: String;
};

type toasterMessage = {
  msg: String;
  status: String;
};

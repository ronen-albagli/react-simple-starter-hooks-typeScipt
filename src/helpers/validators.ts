export const validateCodeInsert = (code: string, mainCode: string) => {
  if (code.includes(mainCode)) {
    console.log("true");
    return {
      valid: true
    };
  }
  console.log("false");

  return {
    valid: false,
    reason: "Function name cannot be changed!"
  };
};

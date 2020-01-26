export const parseSecondToMin = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const time = seconds % 60;
  return `${min.toString().length === 1 ? `0${min}` : min}:${
    time.toString().length === 1 ? `0${time}` : time
  }`;
};

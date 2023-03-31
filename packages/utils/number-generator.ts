export const numberGenerator = (min: number, max: number): number => {
  if (min > max) {
    return 0;
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

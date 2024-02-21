const multiply = (first: number, second?: number): number => {
  if (!second) {
    return first * first;
  }
  return first * second;
};

const test = (param?: string) => {
  const t = param ?? multiply(5);
};

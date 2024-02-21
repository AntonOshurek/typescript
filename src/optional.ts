const multiply = (first: number, second?: number): number => {
  if (!second) {
    return first * first;
  }
  return first * second;
};

const test = (param?: string) => {
  //тут мы запишем или param или вызовем функцию, зависит от того, есть ли param или его нет.
  const t = param ?? multiply(5);
};

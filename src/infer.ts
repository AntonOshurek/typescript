const transaction: GetFirstArg<typeof runTransaction> = {
  fromto: ["1", "2"],
};

const runTransaction = (transaction: { fromto: [string, string] }): void => {
  console.log(transaction);
};

//достаём тип первого аргумента из функции
type GetFirstArg<T> = T extends (arg: infer Arg) => any ? Arg : never;
runTransaction(transaction);

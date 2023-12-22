interface IDataItem {
  id: number;
  name: string;
}

type DataArrayType = IDataItem[];

const adapter = <D extends Record<string, any>, K extends keyof D>(
  data: D[],
  key: K
): { [key: string]: D } => {
  let adaptedData: { [key: string]: D } = {};

  data.forEach((item) => {
    adaptedData[item[key]] = item;
  });

  return adaptedData;
};

const data: DataArrayType = [
  {
    id: 1,
    name: "anton",
  },
  {
    id: 2,
    name: "andrey",
  },
];

console.log(adapter(data, "id"));

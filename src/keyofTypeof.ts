//преобразование enum значений в union type для работы в функции
enum values {
  one,
  two,
  thre,
  four,
}
type ValuesType = keyof typeof values;
const testFunc = (value: ValuesType): void => {
  console.log(value);
};
testFunc("one");

//преобразование ключей объекта в union type
const user = {
  name: "anton",
  age: 29,
};

type userType = keyof typeof user;

//преобразование значений из массива строк в union type
const Roles = ["admin", "user", "owner"] as const;
type RolesType = (typeof Roles)[number];

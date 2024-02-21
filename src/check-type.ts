function log(toLog: string | number) {
  if (typeof toLog === "string") {
    console.log(toLog.toLocaleLowerCase());
  } else if (typeof toLog === "number") {
    console.log(toLog.toString().toLocaleLowerCase());
  }
}
// log("string to log");
// log(1);

//проверяем, есть ли нужное свойство в объекте
function logObjectItem(obj: { a: string } | { b: string }) {
  if ("a" in obj) {
    console.log(`${obj.a} - value in a obj param`);
  } else if ("b" in obj) {
    console.log(`${obj.b} - value in b obj param`);
  }
}
// logObjectItem({ a: "a param" });
//так можно проверять, тот ли объект попал к нам

interface IUser {
  name: string;
  password: string;
}
interface IAdmin {
  role: number;
}
const userTest: IUser | IAdmin = {
  name: "anton",
  password: "1234234",
  role: 2,
};

const isAdmin = (user: IUser | IAdmin): user is IAdmin => {
  //тут проверяем, есть ли поле role в объекте который мы получили
  //и если есть, то возвращаем true
  return "role" in user;
};
const isAdminAlternative = (user: IUser | IAdmin): user is IAdmin => {
  //та же самая функция, но тут мы можем проверять и вложенные свойства
  //т.к. мы явно привели тип к админу и можем проверить свойство на undefinde
  return (user as IAdmin).role !== undefined;
};

console.log(isAdmin(userTest));
console.log(isAdminAlternative(userTest));

//проверка строки через функцию
const isString = (x: string | number): x is string => {
  //is string вернёт boolean
  return typeof x === "string";
};

const logId = (id: string | number): void => {
  if (isString(id)) {
    console.log(`id - ${id} is string`);
  } else {
    console.log(id);
  }
};

//проверить на null можно через два восклицательных знака !!
const testNull = "null";
console.log(!!testNull);

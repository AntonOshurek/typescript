interface IUser {
  name: string;
}

const a = {};
assertUser(a);
//тут нет ошибки т.к. assertUser сделала проверку на то, что этот обхект именно IUser
a.name = "Anton";

//assert производит проверку что объект является пользователем
function assertUser(obj: unknown): asserts obj is IUser {
  if (typeof obj === "object" && !!obj && "name" in obj) {
    return;
  }
  throw new Error("obj isn't IUser");
}

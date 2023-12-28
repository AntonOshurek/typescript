class User {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(ageOrNumber?: string | number) {
    if (typeof ageOrNumber === "string") {
      this.name = ageOrNumber;
      this.age = 0;
    } else if (typeof ageOrNumber === "number") {
      this.name = "user";
      this.age = ageOrNumber;
    } else {
      this.name = "user";
      this.age = 0;
    }
  }
}

const userWithName = new User("anton");
const userWithoutName = new User();
const userWithAge = new User(33);

function compareStringOrNumber(first: string, second: string): string;
function compareStringOrNumber(first: number, second: number): string;
function compareStringOrNumber(
  first: string | number,
  second: string | number
): string {
  if (typeof first === "string" && typeof second === "string") {
    return first + second;
  } else if (typeof first === "number" && typeof second === "number") {
    return `${first} - ${second}`;
  } else {
    return "";
  }
}

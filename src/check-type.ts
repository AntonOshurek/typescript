function log(toLog: string | number) {
  if (typeof toLog === "string") {
    console.log(toLog.toLocaleLowerCase());
  } else if (typeof toLog === "number") {
    console.log(toLog.toString().toLocaleLowerCase());
  }
}

log("string to log");
log(1);

function logObjectItem(obj: { a: string } | { b: string }) {
  if ("a" in obj) {
    console.log(`${obj.a} - value in a obj param`);
  } else if ("b" in obj) {
    console.log(`${obj.b} - value in b obj param`);
  }
}

logObjectItem({ a: "a param" });

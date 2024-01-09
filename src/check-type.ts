function log(toLog: string | number) {
  if (typeof toLog === "string") {
    console.log(toLog.toLocaleLowerCase());
  } else if (typeof toLog === "number") {
    console.log(toLog.toString().toLocaleLowerCase());
  }
}

log("string to log");
log(1);

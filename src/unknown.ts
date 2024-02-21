async function getData() {
  try {
    await fetch("");
  } catch (error) {
    //тут у нас ошибка типа unknown (local var) error: unknown
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("something went wrong");
    }
  }
}

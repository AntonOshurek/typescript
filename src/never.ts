const generateErros = (message: string): never => {
  throw new Error(message);
};

type paymentAction = "refund" | "checkout";

const processAction = (action: paymentAction) => {
  switch (action) {
    case "refund":
      console.log("refund");
      break;
    case "checkout":
      console.log("checkout");
      break;
    default:
      const _: never = action;
      throw new Error("no such action");
  }
};

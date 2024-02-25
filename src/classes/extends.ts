class Payment {
  id: number;
  status: string;

  constructor(id: number) {
    this.id = id;
  }

  //comment this method for testing override errors!
  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment {
  databaseId: number;
  paydData: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    //save something
  }

  //we call super in method like we call super in construction
  //for launch method from extended class
  //for this case we need to use override method from TS!!!
  //when we use override, if we delete pay method from extended class we will get a error
  //but if we don't use override, we will not get any errors
  override pay(date?: Date) {
    // super.pay();
    if (date) {
      this.paydData = date;
    }
  }
}

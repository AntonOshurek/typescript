class ThisPayment {
  private date: Date = new Date();

  getDate(this: ThisPayment) {
    return this.date;
  }

  //when we use a arrow function we don't need to bind a context
  //but we dont use arrow functions inside instences of this class super.getDateArrow() DONT WORK!!!
  getDateArrow = () => {
    return this.date;
  };
}

const thisPayment = new ThisPayment();

const thisUser = {
  id: 1,
  //here, we need to bind a context for this function
  //because whe we will call this function, the function will take the context from current object
  paymentDate: thisPayment.getDate.bind(thisPayment),
  //when we use arrow function, we don't need to bind context because arrow function take context from the class
  paymentArrowDate: thisPayment.getDateArrow,
};

console.log(thisUser.paymentDate());

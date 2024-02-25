class Vehicle {
  public make: string;
  private damage: string[];
  private _model: string;
  protected run: number;
  #some: string;

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
  }

  addDamage(damage: string) {
    this.damage.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setDamage() {
    //#some, and all private properties aren't avilable from all instances classes
  }
}

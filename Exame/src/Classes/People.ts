import {DataBase} from "./Database";

class People {
  static count: number = 0;

  constructor() {
    People.count++;
    this.register(this);
  }

  private register(object: People): void {
    DataBase.add(object);
  }
}

export {People};
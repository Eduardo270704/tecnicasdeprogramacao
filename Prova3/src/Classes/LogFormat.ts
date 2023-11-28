import { Log } from "./Log";

export class LogFormat extends Log {
  constructor() {
    super();
  }
  format(): string {
    const day = this.date.getDate();
    const month = this.date.getMonth() + 1;
    const year = this.date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  toString(): string {
    return `${super.getId()};${this.format()}`;
  }
}

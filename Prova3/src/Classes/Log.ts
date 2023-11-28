export class Log {
  static count: number = 1;
  id: number;
  date: Date;
  constructor() {
    this.id = Log.count;
    Log.count++;
    this.date = new Date();
  }
  getId(): number {
    return this.id;
  }
  getDate(): Date {
    return this.date;
  }
  toString(): string {
    return `${this.id};${this.date.toISOString()}`;
  }
}

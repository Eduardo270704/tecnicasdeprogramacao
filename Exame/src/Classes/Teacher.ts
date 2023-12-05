import {People} from "./People"; 

class Teacher extends People {
  private id: number;
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    super(); 
    this.id = People.count;
    this.name = name;
    this.age = age;
  }

  toJSON(): { id: number; name: string; age: number } {
    return { id: this.id, name: this.name, age: this.age };
  }
}

export {Teacher};

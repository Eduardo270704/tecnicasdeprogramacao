import {People} from "./People"; 

class Student extends People {
  private id: number;
  private name: string;

  constructor(name: string) {
    super(); 
    this.id = People.count; 
    this.name = name;
  }

  toJSON(): { id: number; name: string } {
    return { id: this.id, name: this.name };
  }
}

export {Student};

export class Person {
  index: number;
  
  firstName: string = "";
  
  middleInitial: string;

  lastName: string = "";

  constructor (index: number) {
    this.index = index;
  }

  get isNameValid() {
    return this.firstName !== "" || this.lastName !== "";
  }
}

export class Person {
  index: number;
  
  firstName: string = "";
  
  middleInitial: string;

  lastName: string = "";

  sex: string = "";

  constructor (index: number) {
    this.index = index;
  }

  get isNameValid() {
    return this.firstName !== "" || this.lastName !== "";
  }

  get isSexValid() {
    return this.sex !== "";
  }
}

export class Person {
  index: number;
  
  firstName: string = "";
  
  middleInitial: string;

  lastName: string = "";

  sex: string = "";

  age: number;

  dobMonth: number;

  dobDay: number;

  dobYear: number;

  origin: string[] = [];

  race: string[] = [];

  livedElsewhere: string[];

  constructor (index: number) {
    this.index = index;
  }

  get isNameValid() {
    return this.firstName !== "" || this.lastName !== "";
  }

  get isSexValid() {
    return this.sex !== "";
  }

  get isAgeValid() {
    return true;
  }

  get isOriginValid() {
    return true;
  }

  get isRaceValid() {
    return true;
  }

  get isLivedElsewhereValid() {
    return true;
  }
}

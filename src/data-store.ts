import {Person} from './person';

export class DataStore {
  popCount: number;

  additionalPeople: string[] = [];

  homeOwnership: string = "";

  phoneNumber: string = "";

  people: Person[] = [];

  get hasNoPeople() {
    return this.people.length === 0;
  }

  getPerson(index) {
    if (index <= 0) {
      throw "invalid people index";
    }
    while (this.people.length < index) {
      this.people.push(new Person(this.people.length + 1));
    }
    return Promise.resolve(this.people[index - 1]);
  }
}

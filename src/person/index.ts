import {inject} from 'aurelia-framework';
import {Router, RouteConfig} from 'aurelia-router';
import {DataStore} from '../data-store';
import {Person} from '../person';

@inject(Router, DataStore)
export class DemographicPerson {
  isSubmitted: boolean = false;

  index: number;

  person: Person;

  question: string;

  constructor(private router: Router, private dataStore: DataStore) {  }

  activate(params: any, routeConfig: RouteConfig): Promise<any> {
    this.question = params.question || 'name';
    this.index = params.index || 1;
    this.isSubmitted = false;

    return this.dataStore.getPerson(this.index).then((person) => {
      this.person = person;
      routeConfig.navModel.setTitle('Person ' + this.index);
    });
  }

  get displayError() {
    if (!this.isSubmitted) {
      return false;
    }
    switch (this.question) {
      case 'name':
        return !this.person.isNameValid;
      case 'sex':
        return !this.person.isSexValid;
      case 'age':
        return !this.person.isAgeValid;
      case 'origin':
        return !this.person.isOriginValid;
      case 'race':
        return !this.person.isRaceValid;
      case 'livedElsewhere':
        return !this.person.isLivedElsewhereValid;
      default:
        return true;
    }
  }

  save() {
    this.isSubmitted = true;
    console.log(this.person);

    switch (this.question) {
      case 'name':
        if (this.person.isNameValid) {
          this.router.navigateToRoute('person', {index: this.index, question: 'sex'});
        }
        break;
      case 'sex':
        if (this.person.isSexValid) {
          this.router.navigateToRoute('person', {index: this.index, question: 'age'});
        }
        break;
      case 'age':
        if (this.person.isAgeValid) {
          this.router.navigateToRoute('person', {index: this.index, question: 'origin'});
        }
        break;
      case 'origin':
        if (this.person.isAgeValid) {
          this.router.navigateToRoute('person', {index: this.index, question: 'race'});
        }
        break;
      case 'race':
        if (this.person.isAgeValid) {
          this.router.navigateToRoute('person', {index: this.index, question: 'livedElsewhere'});
        }
        break;
      case 'livedElsewhere':
        if (this.person.isAgeValid) {
          this.router.navigateToRoute('demographics');
        }
        break;
      default:
        return false;
    }
  }
}

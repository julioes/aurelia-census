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
      default:
        return false;
    }
  }
}

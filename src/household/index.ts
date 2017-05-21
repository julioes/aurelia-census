import {inject} from 'aurelia-framework';
import {Router, RouteConfig} from 'aurelia-router';
import {DataStore} from '../data-store';

@inject(Router, DataStore)
export class Household {
  isSubmitted: boolean;

  question: number;

  constructor(private router: Router, private dataStore: DataStore) {  }

  activate(params: any, routeConfig: RouteConfig): Promise<any> {
    this.isSubmitted = false;
    this.question = Number(params.question || 1);
    if (this.question < 1 || this.question > 4) {
      this.question = 1;
    }

    routeConfig.navModel.setTitle('Household Questions');

    return Promise.resolve();
  }

  get displayError() {
    return this.isSubmitted && !this.isValid;
  }

  get isValid() {
    switch(this.question) {
      case 1:
        return this.dataStore.popCount !== undefined && this.dataStore.popCount > 0;
      case 2:
        return this.dataStore.additionalPeople.length > 0;
      case 3:
        return this.dataStore.homeOwnership !== "";
      case 4:
        return this.dataStore.phoneNumber !== "";
      default:
        return false;
    }    
  };

  save() {
    this.isSubmitted = true;
    
    if (this.isValid) {
      this.router.navigateToRoute('household', {question: this.question+1});
    }
  };
}

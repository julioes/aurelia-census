import {inject} from 'aurelia-framework';
import {Router, RouteConfig} from 'aurelia-router';
import {DataStore} from './data-store';
import {Person} from './person';

@inject(Router, DataStore)
export class Demograhics {

  constructor(private router: Router, private dataStore: DataStore) {  }

  activate(params: any, routeConfig: RouteConfig): Promise<any> {
    routeConfig.navModel.setTitle('Demographics');
    return Promise.resolve();
  }

  save() {
      this.router.navigateToRoute('person', {person: 1});
  };
}

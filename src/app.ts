import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'U.S. Census';
    config.map([
      { route: '', name: 'welcome', moduleId: 'welcome'},
      { route: 'household/:question?', name: 'household', moduleId: 'household/index'},
      { route: 'demographics', name: 'demographics', moduleId: 'demographics'},
      { route: 'person/:index?/:question?', name: 'person', moduleId: 'person/index'}
    ]);
  }
}

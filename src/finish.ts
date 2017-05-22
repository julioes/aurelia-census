import {inject} from 'aurelia-framework';
import {DataStore} from './data-store';

@inject(DataStore)
export class Finish {
  constructor(private dataStore: DataStore) { }
}
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){
  let users = [
  {id: 1, name: 'Joe Blow', description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."+
   "A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."}
  ]

  return users;
  }
}

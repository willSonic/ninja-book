import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

  @Injectable()
  export class RaceService {
     constructor(private _http: Http) {}

     list() {
          return this._http.get('http://localhost:9000/races').map(res => res.json());
     }

  }
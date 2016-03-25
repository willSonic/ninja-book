import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Pony} from '../../pony_class';

export class FakeRaceService {
    list() {
      return Observable.of([{ name: 'London' }, { name: 'BigTimer' }, { name: 'Wu-Tang' }]);
    }
}
import {Component} from 'angular2/core';
import {Directive} from 'angular2/core';
import {Input} from 'angular2/core';
import {Pony} from './pony_class';

@Component({
    selector: 'pony-cmp',
    template: `<div>{{pony.name}}</div>`
  })
  export class PonyCmp {
    @Input() pony: Pony;
  }


@Component({
    selector: 'myponies-cmp',
    template: `<div>
                 <h2>Passing Data</h2>
                  <pony-cmp *ngFor="#currentPony of someponies" [pony]="currentPony"></pony-cmp>
                 </div>
                 <hr/>`,
    directives: [PonyCmp]
})

  export class MyponiesCmp {
    someponies: Array<Pony> = [
      {id: 12, name: 'Fruit Punch'},
      {id: 13, name: 'Fiascal'},
      {id: 14, name: 'Bao Bop'},
      {id: 15, name: 'Turkish Delight'}
    ];
}
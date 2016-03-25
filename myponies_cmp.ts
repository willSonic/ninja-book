import {Component, Directive, EventEmitter} from 'angular2/core';
import {Pony} from './pony_class';
import {PonyCmp}   from './pony_cmp';
import {Flashy}   from './ngInit_flashy_cmp';

@Component({
    selector: 'myponies-cmp',
    template: `<div>
                  <h2>Passing Data</h2>
                  <pony-cmp *ngFor="#currentPony of ponies" initDirective [pony]="currentPony" (ponySelected)="betOnPony($event)"> </pony-cmp>
                </div>
                <hr/>`,
    directives: [PonyCmp, Flashy]
})

  export class MyponiesCmp {

    ponies: Array<Pony> = [
      new Pony(12, 'Fruit Punch'),
      new Pony(13, 'Fiascal'),
      new Pony(14, 'Bao Bop'),
      new Pony(15, 'Turkish Delight')
    ];

    betOnPony(pony){
         console.log("pony", pony);
    }
}
import {Component, Input, Output,EventEmitter} from 'angular2/core';
import {Pony} from './pony_class';

@Component({
    selector: 'pony-cmp',
    inputs: ['pony'],
    outputs: ['emitter:ponySelected'],
    template: `<div (click)="selectPony()">{{pony.name}}</div>`
  })

  export class PonyCmp {
    /**
     * using @INPUT and @OUTPUT creates un wanted event subscriberss.
     * Will break or create ERRRORS
     * when events are loaded in separate directives
     */
    //@Input() pony: Pony;
    //@Output() ponySelected: EventEmitter<Pony> = new EventEmitter<Pony>();
    pony: Pony;
    emitter: EventEmitter<Pony> = new EventEmitter<Pony>();

    /**
     * Selects a pony when the component is clicked.
     * Emits a custom event.
     */
    selectPony() {
      this.emitter.emit(this.pony);
     // using @INPUT and @OUTPUT creates un wanted event subscribers caused this.ponySelected to throw errors
      //this.ponySelected.emit(this.pony);
    }
  }



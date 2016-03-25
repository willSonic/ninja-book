import {Input, OnInit, Directive} from  'angular2/core';
import {Pony} from './pony_class';
//import {CORE_DIRECTIVES} from 'angular2/common';

@Directive({
    selector: '[initDirective]'
  })

  export class Flashy implements OnInit {

    @Input() pony: Pony;

    ngOnInit() {
      console.log(`[Flashy]--ngOnInit-- inputs are ${this.pony.name}`);
    }
  }

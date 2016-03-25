import {PLATFORM_PIPES, Input, OnChanges,SimpleChange, Directive} from  'angular2/core';
import {FromNowPipe} from './custompipes/fromnow_pipe';
import {Pony} from './pony_class';
//import {CORE_DIRECTIVES} from 'angular2/common';

//import simple change show here in docs https://github.com/angular/angular/blob/2.0.0-beta.12/modules/angular2/src/core/linker/interfaces.ts#L27-L79


@Directive({
    selector: '[changeDirective]'
  })

  export class Switchy implements OnChanges {

    @Input() tickleponies: Array<Pony>;

   /* listening for changes on entire array
      means ngOnChanges will fire once for each item
      in the array.
    */
    ngOnChanges(changes: {[myProp:string]: SimpleChange}) {
      let pevtobj = changes['tickleponies'].previousValue;
      let crntobj = changes['tickleponies'].currentValue;
      console.log('[Switchy]--ngOnChanges-- changed from',pevtobj);
      console.log('[Switchy]--ngOnChanges-- to', crntobj);
      console.log(`[Switchy]--ngOnChanges-- is it the first change? ${changes['tickleponies'].isFirstChange()}`);
    }
  }

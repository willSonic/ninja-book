import {Component, PLATFORM_PIPES, Input, provide, Directive} from 'angular2/core';
import {FromNowPipe} from './custompipes/fromnow_pipe';
import {Pony} from './pony_class';
import {Switchy}   from './ngOnChanges_Switchy_cmp';


  @Component({
    selector: 'ponies-cmp',
    inputs: ['pony'],
    providers: [provide(PLATFORM_PIPES, {useValue: FromNowPipe, multi: true})],
    template:  `<hr/>
                <h4> TicklePonies</h4>
                <ul>
                  <li *ngFor="#tickler of tickleponies;"  changeDirective [tickleponies]="tickleponies">
                        {{tickler.name}}
                  </li>
                </ul>
                <h4> Show Pony Array with Pipe using Slices</h4>
                <p>pony of ponies | slice:0:size </p>
                <div *ngFor="#pony of ponies | slice:0:size">{{pony.name}}</div>
                <br/>
                <p>pony of ponies | slice:2:size </p>
                <div *ngFor="#pony of ponies | slice:0:2">{{pony.name}}</div>
                <hr/>
                <h3>Number Formater</h3>
                <p>{{ 12345 | number }}  from just number </p>
                <p>{{ 12345 | number:'6.'}} from just number: '6.'</p>
                <p>{{ 12345 |  number:'.2'}} from just number: '.2'</p>
                <hr/>
                <h3> Custom Pipe for BirthDay</h3>
                  <p>{{ birthday | fromNow }}</p>
                <ul>
                  <button (click)="refreshPonies()">Refresh</button>
                  <li *ngFor="#pony of ponies; #isEven=even"
                        [style.color]="isEven ? 'green' : 'black'">
                        {{pony.name}}
                  </li>
                </ul>`,
    pipes: [FromNowPipe],
    directives:[Switchy]
  })
  export class PoniesCmp {

    @Input() tickleponies: Array<Pony>;

    setUp:boolean = false;

    somePonies: Array<Pony> = [
      new Pony(1, 'Sweet Potatoe'),
      new Pony(2, 'Candy Cane'),
      new Pony(3, 'Rainbow Dash'),
      new Pony(4, 'Pinkie Pie'),
      new Pony(5, 'DoubleDare'),
      new Pony(6, 'Full Monty')
    ];
    morePonies: Array<Pony> = [
       new Pony(7, 'Fluttershy'),
       new Pony(8, 'Rarity'),
       new Pony(9, 'Charity Case'),
       new Pony(10, 'Airforce 1')
    ];


     ponies: Array<Pony> =  this.somePonies;
     birthday: Date = new Date('2015-07-16T15:30:00');

     refreshPonies() {
         if(this.setUp){
           this.setUp  = false;
           this.ponies = this.somePonies;
         }else{
           this.setUp  = true;
           this.ponies = this.morePonies;
         }
         this.tickleponies = this.ponies;
     }

}
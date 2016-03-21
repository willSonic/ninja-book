import {Component} from 'angular2/core';
import {provide} from 'angular2/core';
import {PLATFORM_PIPES} from 'angular2/core';
import {FromNowPipe} from './custompipes/fromnow_pipe';
import {Directive} from 'angular2/core';
import {Pony} from './pony_class';


  @Component({
    selector: 'ponies-cmp',
    inputs: ['pony'],
    providers: [provide(PLATFORM_PIPES, {useValue: FromNowPipe, multi: true})],
    template:  `<hr/>
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
    pipes: [FromNowPipe]
  })
  export class PoniesCmp {

    ponies: Array<Pony> = [
      {id: 1, name: 'Sweet Potatoe'},
      {id: 2, name: 'Candy Cane'},
      {id: 3, name: 'Rainbow Dash'},
      {id: 4, name: 'Pinkie Pie'},
      {id: 5, name: 'DoubleDare'},
      {id: 6, name: 'Full Monty'}
    ];
    morePonies: Array<Pony> = [
      {id: 7, name: 'Fluttershy'},
      {id:8, name: 'Rarity'},
      {id:9, name: 'Charity Case'},
      {id:10, name: 'Airforce 1'}
    ];

     birthday: Date = new Date('2015-07-16T15:30:00');

     refreshPonies() {
         this.ponies = this.morePonies;
     }
}
import {Component} from 'angular2/core';
import {provide} from 'angular2/core';
import {PLATFORM_PIPES} from 'angular2/core';
import {FromNowPipe} from './custompipes/fromnow_pipe';

  @Component({
    selector: 'ponies-cmp',
    providers: [provide(PLATFORM_PIPES, {useValue: FromNowPipe, multi: true})],
    template:  `<hr/>
                <div *ngFor="#pony of ponies | slice:0:size">{{pony.name}}</div>
                <hr/>
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

     ponies: Array<any> = [{name: 'Rainbow Dash'}, {name: 'Pinkie Pie'},{name: 'DoubleDare'}, {name: 'Full Monty'}];

     birthday: Date = new Date('2015-07-16T15:30:00');

     refreshPonies() {
         this.ponies = [{name: 'Fluttershy'}, {name: 'Rarity'}, {name: 'Charity Case'}, {name: 'Airforce 1'}];
     }
}
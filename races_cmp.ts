// in another file, races_cmp.ts
  import {Component} from 'angular2/core';

  @Component({
    selector: 'races-cmp',
    template: `<div>
                  <h2>Races</h2>
                   <button (click)="refreshRaces($event)">Refresh the races list</button>
                   <ul *ngIf="races.length > 0">
                     <li *ngFor="#race of races; #i=index ">{{i}} - {{race.name}} </li>
                  </ul>
               </div>`
  })

  export class RacesCmp {

    myLittlePony: string = 'Bart';
    races: Array<any> = [];
    refreshRaces(event) {
      this.races = [{name: 'London'}, {name: 'Lyon'}];
    }
  }
// in another file, races_cmp.ts
  import {Component} from 'angular2/core';
  import {provide} from 'angular2/core';
  import {FakeRaceService} from './services/mocks/fakerace_service';
  import {RaceService} from './services/race_service';

  @Component({
    selector: 'races-cmp',
    providers: [provide(RaceService, {useClass: FakeRaceService})],
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
    races: any = [];
    constructor(private _raceService: RaceService) {  }
     list() {
      return this._raceService.list();
    }
    refreshRaces(event){
       console.log("Refresh Races Called");
       this.races =  this.list().value;
    }
  }
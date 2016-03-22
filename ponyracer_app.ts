import {Component}   from 'angular2/core';
import {provide} from 'angular2/core';
import 'rxjs/add/operator/share';
import {RaceService} from './services/race_service';
import {FakeRaceService} from './services/mocks/fakerace_service';
import {RacesCmp}      from './races_cmp';
import {PoniesCmp}     from './ponies_cmp';
import {PonyCmp}   from './pony_cmp';
import {MyponiesCmp}   from './myponies_cmp';

@Component({
    selector: 'ponyracer-app',
    providers: [provide(RaceService, {useClass: FakeRaceService})],
    template:  `
                <h2>PonyRacer</h2>
                <myponies-cmp></myponies-cmp>
                <races-cmp [hidden]="isHidden" (newRaceAvailable)="onNewRace($event)">{{flashyMessage}}</races-cmp>
                <ponies-cmp></ponies-cmp>
                <h5>{{numberOfUsers}} users</h5>
                <h5>Welcome {{user.name}}</h5>
                <h5>artist {{user.type}}</h5>
                <h5> flashy message = {{flashyMessage}}</h5>
                <button (click)="racerServiceList($event)">Get Race LIST </button>
                <p *ngIf="raceSerLis.length > 0">{{devTestData | json}}</p>
                 <ul *ngIf="raceSerLis.length > 0">
                     <li *ngFor="#race of raceSerLis; #i=index ">{{i}} - {{race.name}} </li>
                </ul>
               `,
    // declare all the components you use in your template
    directives: [RacesCmp, PoniesCmp, MyponiesCmp]
  })

export class PonyRacerApp {

    // add a constructor with RaceService
    constructor(private _raceService: RaceService) {}

    numberOfUsers: number = 146;

    newRaceAvailable: any =[];

    flashyMessage: string = '';

    isHidden: boolean = false;

    devTestData: any =[];

    raceSerLis: any =[];

    user: any = { name: 'Cédric' };

    racerServiceList(event) {
      this.devTestData = this._raceService.list();
      this.raceSerLis = this._raceService.list().value;
      console.log("this._raceService.list()", this.raceSerLis);
    }

    onNewRace(event){
      // add a flashy message for the user.
      console.log("Message Recieved");
      this.flashyMessage = 'Snuffa lufficus';
    };
}


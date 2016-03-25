import {Component}   from 'angular2/core';
import {provide} from 'angular2/core';
import 'rxjs/add/operator/share';
import {RaceService} from './services/race_service';
import {FakeRaceService} from './services/mocks/fakerace_service';
import {RacesCmp}      from './races_cmp';
import {PoniesCmp}     from './ponies_cmp';
import {PonyCmp}   from './pony_cmp';
import {MyponiesCmp}   from './myponies_cmp';
import {Switchy}   from './ngOnChanges_Switchy_cmp';
import {Pony} from './pony_class';

@Component({
    selector: 'ponyracer-app',
    providers: [provide(RaceService, {useClass: FakeRaceService})],
    template:  `<h1>Pony Testing</h1>
                <myponies-cmp></myponies-cmp>
                <races-cmp [hidden]="isHidden" (newRaceAvailable)="onNewRace($event)">{{flashyMessage}}</races-cmp>
                <ponies-cmp ></ponies-cmp>
                <h5>{{numberOfUsers}} users</h5>
                <h5>Welcome {{user.name}}</h5>
                <h5>artist {{user.type}}</h5>
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
    ponies: Array<Pony> = [
      new Pony(31, 'Shoots & Latters'),
      new Pony(32, 'Black Jack'),
      new Pony(33, 'Simon Says')
    ];
    // add a constructor with RaceService
    constructor(private _raceService: RaceService) {}

    numberOfUsers: number = 146;

    newRaceAvailable: any =[];

    flashyMessage: string = 'say-what';

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


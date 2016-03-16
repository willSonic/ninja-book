import {Component} from 'angular2/core';

import {RacesCmp} from './races_cmp';
import {PoniesCmp} from './ponies_cmp';

@Component({
    selector: 'ponyracer-app',
    template:  `
                <h5>PonyRacer</h5>
                <h5>{{numberOfUsers}} users</h5>
                <h5>Welcome {{user.name}}</h5>
                <h5>artist {{user.type}}</h5>
                <h5> flashy message = {{flashyMessage}}</h5>
                <races-cmp [hidden]="isHidden" (newRaceAvailable)="onNewRace($event)">{{flashyMessage}}</races-cmp>
                <ponies-cmp></ponies-cmp>
               `,
    // declare all the components you use in your template
    directives: [RacesCmp, PoniesCmp]
  })

export class PonyRacerApp {

    numberOfUsers: number = 146;

    newRaceAvailable: any =[];

    flashyMessage: string = '';

    isHidden: boolean = false;

    user: any = { name: 'Cédric' };

    onNewRace(event){
      // add a flashy message for the user.

      console.log("Message Recieved");
      this.flashyMessage = 'Snuffa lufficus';
    };
}


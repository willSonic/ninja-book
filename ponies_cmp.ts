import {Component} from 'angular2/core';
  @Component({
    selector: 'ponies-cmp',
    template:  `<ul>
                  <button (click)="refreshPonies()">Refresh</button>
                  <li *ngFor="#pony of ponies; #isEven=even"
                        [style.color]="isEven ? 'green' : 'black'">
                        {{pony.name}}
                  </li>
                </ul>`
  })
  export class PoniesCmp {

     ponies: Array<any> = [{name: 'Rainbow Dash'}, {name: 'Pinkie Pie'}];

     refreshPonies() {
      this.ponies = [{name: 'Fluttershy'}, {name: 'Rarity'}];
     }
}
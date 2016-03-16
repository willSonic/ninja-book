///<reference path="node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';

bootstrap(PonyRacerApp)
  .catch(err => console.log(err));

/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
import {HTTP_PROVIDERS} from 'angular2/http';
import {Http} from 'angular2/http';
import {provide} from 'angular2/core';
import {FakeRaceService} from './services/mocks/fakerace_service';
import {RaceService} from './services/race_service';
import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';

bootstrap(PonyRacerApp,  [
    HTTP_PROVIDERS,
    // we provide a fake service
    provide('IS_PROD', {useValue: true}),
    provide(RaceService, {
       useFactory: (IS_PROD, http) => IS_PROD ? new RaceService(http) : new FakeRaceService(),
       deps: ['IS_PROD', Http]
       })
    ])
  .catch(err => console.log(err));

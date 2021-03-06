/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
var http_1 = require('angular2/http');
var http_2 = require('angular2/http');
var core_1 = require('angular2/core');
var fakerace_service_1 = require('./services/mocks/fakerace_service');
var race_service_1 = require('./services/race_service');
var browser_1 = require('angular2/platform/browser');
var ponyracer_app_1 = require('./ponyracer_app');
browser_1.bootstrap(ponyracer_app_1.PonyRacerApp, [
    http_1.HTTP_PROVIDERS,
    // we provide a fake service
    core_1.provide('IS_PROD', { useValue: true }),
    core_1.provide(race_service_1.RaceService, {
        useFactory: function (IS_PROD, http) { return IS_PROD ? new race_service_1.RaceService(http) : new fakerace_service_1.FakeRaceService(); },
        deps: ['IS_PROD', http_2.Http]
    })
])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=bootstrap.js.map
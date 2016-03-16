///<reference path="node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var ponyracer_app_1 = require('./ponyracer_app');
browser_1.bootstrap(ponyracer_app_1.PonyRacerApp)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=bootstrap.js.map
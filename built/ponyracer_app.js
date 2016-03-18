var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
require('rxjs/add/operator/share');
var race_service_1 = require('./services/race_service');
var fakerace_service_1 = require('./services/mocks/fakerace_service');
var races_cmp_1 = require('./races_cmp');
var ponies_cmp_1 = require('./ponies_cmp');
var PonyRacerApp = (function () {
    // add a constructor with RaceService
    function PonyRacerApp(_raceService) {
        this._raceService = _raceService;
        this.numberOfUsers = 146;
        this.newRaceAvailable = [];
        this.flashyMessage = '';
        this.isHidden = false;
        this.devTestData = [];
        this.raceSerLis = [];
        this.user = { name: 'Cédric' };
    }
    PonyRacerApp.prototype.racerServiceList = function (event) {
        this.devTestData = this._raceService.list();
        this.raceSerLis = this._raceService.list().value;
        console.log("this._raceService.list()", this.raceSerLis);
    };
    PonyRacerApp.prototype.onNewRace = function (event) {
        // add a flashy message for the user.
        console.log("Message Recieved");
        this.flashyMessage = 'Snuffa lufficus';
    };
    ;
    PonyRacerApp = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            providers: [core_2.provide(race_service_1.RaceService, { useClass: fakerace_service_1.FakeRaceService })],
            template: "\n                <h5>PonyRacer</h5>\n                <h5>{{numberOfUsers}} users</h5>\n                <h5>Welcome {{user.name}}</h5>\n                <h5>artist {{user.type}}</h5>\n                <h5> flashy message = {{flashyMessage}}</h5>\n                <races-cmp [hidden]=\"isHidden\" (newRaceAvailable)=\"onNewRace($event)\">{{flashyMessage}}</races-cmp>\n                <ponies-cmp></ponies-cmp>\n                <button (click)=\"racerServiceList($event)\">Get Race LIST </button>\n                <p *ngIf=\"raceSerLis.length > 0\">{{devTestData | json}}</p>\n                 <ul *ngIf=\"raceSerLis.length > 0\">\n                     <li *ngFor=\"#race of raceSerLis; #i=index \">{{i}} - {{race.name}} </li>\n                </ul>\n               ",
            // declare all the components you use in your template
            directives: [races_cmp_1.RacesCmp, ponies_cmp_1.PoniesCmp]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerApp);
    return PonyRacerApp;
})();
exports.PonyRacerApp = PonyRacerApp;
//# sourceMappingURL=ponyracer_app.js.map
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
var race_service_1 = require('./services/race_service');
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
        this.raceSerLis = [];
        this.user = { name: 'Cédric' };
    }
    PonyRacerApp.prototype.racerServiceList = function () {
        this.raceSerLis = this._raceService.list();
        console.log("this._raceService.list()", this.raceSerLis);
        return this.raceSerLis;
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
            template: "\n                <h5>PonyRacer</h5>\n                <h5>{{numberOfUsers}} users</h5>\n                <h5>Welcome {{user.name}}</h5>\n                <h5>artist {{user.type}}</h5>\n                <h5> flashy message = {{flashyMessage}}</h5>\n                <races-cmp [hidden]=\"isHidden\" (newRaceAvailable)=\"onNewRace($event)\">{{flashyMessage}}</races-cmp>\n                <ponies-cmp></ponies-cmp>\n                <button (click)=\"racerServiceList($event)\">Race Service Listt</button>\n                <p>Racer LIST = {{raceSerLis}}</p>\n               ",
            // declare all the components you use in your template
            directives: [races_cmp_1.RacesCmp, ponies_cmp_1.PoniesCmp]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerApp);
    return PonyRacerApp;
})();
exports.PonyRacerApp = PonyRacerApp;
//# sourceMappingURL=ponyracer_app.js.map
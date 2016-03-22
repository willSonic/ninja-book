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
// in another file, races_cmp.ts
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
var fakerace_service_1 = require('./services/mocks/fakerace_service');
var race_service_1 = require('./services/race_service');
var RacesCmp = (function () {
    function RacesCmp(_raceService) {
        this._raceService = _raceService;
        this.myLittlePony = 'Bart';
        this.races = [];
    }
    RacesCmp.prototype.list = function () {
        return this._raceService.list();
    };
    RacesCmp.prototype.refreshRaces = function (event) {
        console.log("Refresh Races Called");
        this.races = this.list().value;
    };
    RacesCmp = __decorate([
        core_1.Component({
            selector: 'races-cmp',
            providers: [core_2.provide(race_service_1.RaceService, { useClass: fakerace_service_1.FakeRaceService })],
            template: "<div>\n                  <h2>Races</h2>\n                   <button (click)=\"refreshRaces($event)\">Refresh the races list</button>\n                   <ul *ngIf=\"races.length > 0\">\n                     <li *ngFor=\"#race of races; #i=index \">{{i}} - {{race.name}} </li>\n                  </ul>\n               </div>"
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], RacesCmp);
    return RacesCmp;
})();
exports.RacesCmp = RacesCmp;
//# sourceMappingURL=races_cmp.js.map
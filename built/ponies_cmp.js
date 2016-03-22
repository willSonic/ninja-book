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
var fromnow_pipe_1 = require('./custompipes/fromnow_pipe');
var pony_class_1 = require('./pony_class');
var PoniesCmp = (function () {
    function PoniesCmp() {
        this.ponies = [
            new pony_class_1.Pony(1, 'Sweet Potatoe'),
            new pony_class_1.Pony(2, 'Candy Cane'),
            new pony_class_1.Pony(3, 'Rainbow Dash'),
            new pony_class_1.Pony(4, 'Pinkie Pie'),
            new pony_class_1.Pony(5, 'DoubleDare'),
            new pony_class_1.Pony(6, 'Full Monty')
        ];
        this.morePonies = [
            new pony_class_1.Pony(7, 'Fluttershy'),
            new pony_class_1.Pony(8, 'Rarity'),
            new pony_class_1.Pony(9, 'Charity Case'),
            new pony_class_1.Pony(10, 'Airforce 1')
        ];
        this.birthday = new Date('2015-07-16T15:30:00');
    }
    PoniesCmp.prototype.refreshPonies = function () {
        this.ponies = this.morePonies;
    };
    PoniesCmp = __decorate([
        core_1.Component({
            selector: 'ponies-cmp',
            inputs: ['pony'],
            providers: [core_1.provide(core_1.PLATFORM_PIPES, { useValue: fromnow_pipe_1.FromNowPipe, multi: true })],
            template: "<hr/>\n                <h4> Show Pony Array with Pipe using Slices</h4>\n                <p>pony of ponies | slice:0:size </p>\n                <div *ngFor=\"#pony of ponies | slice:0:size\">{{pony.name}}</div>\n                <br/>\n                <p>pony of ponies | slice:2:size </p>\n                <div *ngFor=\"#pony of ponies | slice:0:2\">{{pony.name}}</div>\n                <hr/>\n                <h3>Number Formater</h3>\n                <p>{{ 12345 | number }}  from just number </p>\n                <p>{{ 12345 | number:'6.'}} from just number: '6.'</p>\n                <p>{{ 12345 |  number:'.2'}} from just number: '.2'</p>\n                <hr/>\n                <h3> Custom Pipe for BirthDay</h3>\n                  <p>{{ birthday | fromNow }}</p>\n                <ul>\n                  <button (click)=\"refreshPonies()\">Refresh</button>\n                  <li *ngFor=\"#pony of ponies; #isEven=even\"\n                        [style.color]=\"isEven ? 'green' : 'black'\">\n                        {{pony.name}}\n                  </li>\n                </ul>",
            pipes: [fromnow_pipe_1.FromNowPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], PoniesCmp);
    return PoniesCmp;
})();
exports.PoniesCmp = PoniesCmp;
//# sourceMappingURL=ponies_cmp.js.map
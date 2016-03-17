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
var PoniesCmp = (function () {
    function PoniesCmp() {
        this.ponies = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
    }
    PoniesCmp.prototype.refreshPonies = function () {
        this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
    };
    PoniesCmp = __decorate([
        core_1.Component({
            selector: 'ponies-cmp',
            template: "<ul>\n                  <button (click)=\"refreshPonies()\">Refresh</button>\n                  <li *ngFor=\"#pony of ponies; #isEven=even\"\n                        [style.color]=\"isEven ? 'green' : 'black'\">\n                        {{pony.name}}\n                  </li>\n                </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], PoniesCmp);
    return PoniesCmp;
})();
exports.PoniesCmp = PoniesCmp;
//# sourceMappingURL=ponies_cmp.js.map
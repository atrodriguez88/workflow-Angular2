System.register(['@angular/core', '@angular/platform-browser-dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1;
    var CountDownComponent, TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            CountDownComponent = (function () {
                function CountDownComponent() {
                    var _this = this;
                    this.seconds = 25;
                    setInterval(function () { return _this.handler(); }, 1000);
                }
                CountDownComponent.prototype.handler = function () {
                    if (--this.seconds < 1) {
                        this.seconds = 25;
                    }
                };
                CountDownComponent = __decorate([
                    core_1.Component({
                        selector: 'countdown',
                        template: "<h1> Time : {{seconds}} </h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountDownComponent);
                return CountDownComponent;
            }());
            TimerComponent = (function () {
                function TimerComponent() {
                }
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'time',
                        directives: [CountDownComponent],
                        template: '<countdown></countdown>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            platform_browser_dynamic_1.bootstrap(TimerComponent);
        }
    }
});

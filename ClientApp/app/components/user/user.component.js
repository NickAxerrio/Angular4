"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Userservice = require("../service/user.service");
var UserService = Userservice.UserService;
//import Herotype = require("../shared/hero.type");
//import Hero = Herotype.Hero;
//import Heroservice = require("../service/hero.service");
//import HeroService = Heroservice.HeroService;
var UserComponent = (function () {
    // Constructor
    //heroservice: HeroService;
    //constructor(heroService: HeroService) {
    //    this.heroservice = heroService
    //}
    function UserComponent(userService) {
        this.userService = userService;
        // Variables
        this.title = 'admin';
        //this.getHeroes(); -> use lifecycle method
    }
    // Methods
    // Lifecycle Methods
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
        this.userService.getUser(1).then(function (user) { return _this.user = user; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'my-user',
        template: require('./user.component.html'),
        providers: [UserService]
        //styleUrls: ['user.component.css'],
        //providers: [HeroService]
    }),
    __metadata("design:paramtypes", [UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map
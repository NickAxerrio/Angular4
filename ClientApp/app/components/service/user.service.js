"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Mockusers = require("./mock-users");
var USERS = Mockusers.USERS;
var UserService = (function () {
    function UserService() {
    }
    // Sync -> blocks ui when called use async with promises
    //getHeroes(): Hero[] {
    //    return Mockheroes.HEROES;
    //}
    UserService.prototype.getUser = function (id) {
        return this.getUsers().then(function (users) { return users.find(function (user) { return user.id === id; }); });
    };
    UserService.prototype.getUsers = function () {
        return Promise.resolve(USERS);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
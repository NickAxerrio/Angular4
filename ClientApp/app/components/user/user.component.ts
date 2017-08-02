import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Usertype = require("../shared/user.type");
import User = Usertype.User;
import Userservice = require("../service/user.service");
import UserService = Userservice.UserService;
//import Herotype = require("../shared/hero.type");
//import Hero = Herotype.Hero;
//import Heroservice = require("../service/hero.service");
//import HeroService = Heroservice.HeroService;

@Component({
    selector: 'my-user',
    template: require('./user.component.html'),
    providers: [UserService]
    //styleUrls: ['user.component.css'],
    //providers: [HeroService]
})



export class UserComponent implements OnInit {

    // Variables
    title = 'admin';
    user: User;

    // Constructor

    //heroservice: HeroService;
    //constructor(heroService: HeroService) {
    //    this.heroservice = heroService
    //}
    constructor(private userService: UserService) {
        //this.getHeroes(); -> use lifecycle method
    }

    // Methods


    // Lifecycle Methods
    ngOnInit(): void {
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
        this.userService.getUser(1).then(user => this.user = user);
    }
}






import { Injectable } from '@angular/core';
import Usertype = require("../shared/user.type");
import User = Usertype.User;
import Mockusers = require("./mock-users");
import USERS = Mockusers.USERS;

@Injectable()
export class UserService {
    // Sync -> blocks ui when called use async with promises
    //getHeroes(): Hero[] {
    //    return Mockheroes.HEROES;
    //}

    getUser(id: number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user.id === id));
    }

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
}
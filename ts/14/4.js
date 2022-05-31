"use strict";
{
    class Hd {
        constructor(name) {
            this.name = name;
        }
        info() { }
    }
    class User extends Hd {
        constructor(name) {
            super(name);
        }
        info() {
        }
    }
    new User('aa');
}

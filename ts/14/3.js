"use strict";
function sum(...args) {
    return args.reduce((s, n) => s + n, 0);
}
// console.log(sum(1, 2, 3))
var UserType;
(function (UserType) {
    UserType[UserType["BOY"] = 0] = "BOY";
    UserType[UserType["GIRL"] = 1] = "GIRL";
})(UserType || (UserType = {}));
console.log(UserType.GIRL);
let user = {
    sex: 1
};
let user11 = '后盾人';
user11 = 'houdunren.com';
let user22 = { name: '后盾人' };
user22.name = '后盾人';
let a = 'houdunren.com';
let b = 2030;
let f = [a, b, 'houdurnen.com', true, 100];
let aa = f[0];
aa = 'xj';
console.log(f);
// let houdunren = document.getElementById('d') as HTMLDivElement
// const body = document.querySelector('body') as HTMLBodyElement
// const bt = document.querySelector('#bt') as HTMLButtonElement
// bt.addEventListener('click', (e: Event) => {
//   e.preventDefault(); //因为设置了 e 的类型，所以会有完善的提示
//   body.insertAdjacentHTML('beforeend', "<div>后盾人-向军</div>")
// })
class Hd {
    constructor(name) {
        this.name = name;
    }
}
class User extends Hd {
    constructor(name) {
        super(name);
    }
    info() {
        return `你好 ${this.name}`;
    }
}
const hd1 = new User('后盾人');
console.log(hd1.info());

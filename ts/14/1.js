"use strict";
let hd = 'aa';
let name1 = 'aa';
let name2 = name1;
let age1 = '99';
let age2 = age1;
function show() {
}
console.log(show());
let name3 = undefined;
function fd() {
    throw new Error('111');
}
let name4 = 'hehe';
name4 = 'hha';
let fu = function (a, b, c = 'aaa') {
    return a + b + c;
};
fu(1, 2, 4);
let fu2;
fu2 = function () {
};

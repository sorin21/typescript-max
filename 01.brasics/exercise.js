"use strict";
// let banckAccount = {
//   money: 2000,
//   deposit(value) {
//     this.money += value
//   }
// };
var bankAccount = {
    money: 2000,
    // void = returns nothing
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sport", "Music"]
};
myself.bankAccount.deposit(3000);
console.log(myself);

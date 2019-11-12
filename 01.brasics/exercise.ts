// let banckAccount = {
//   money: 2000,
//   deposit(value) {
//     this.money += value
//   }
// };

// let myself = {
//   name: "Max",
//   banckAccount,
//   hobbies: ["Sport", "Music"]
// };

// myself.banckAccount.deposit(3000);

// console.log(myself);

type bankAccountObject = {money: number, deposit: (value: number) => void};

let bankAccount: bankAccountObject = {
  money: 2000,
  // void = returns nothing
  deposit(value: number): void {
    this.money += value
  }
};

let myself: {name: string, bankAccount: bankAccountObject, hobbies: string[]} = {
  name: "Max",
  bankAccount,
  hobbies: ["Sport", "Music"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
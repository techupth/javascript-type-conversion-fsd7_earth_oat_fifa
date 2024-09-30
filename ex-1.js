let accountBalance = 400;
let depositAmountFromUser = "10";

accountBalance = accountBalance + Number(depositAmountFromUser);
accountBalance = String(accountBalance)

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);

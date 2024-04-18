#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "enter your pin code", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select one of the options",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    //withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "enter your amount", type: "number" },
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
    }
    //if user select fast cash
    if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select option",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            myBalance -= fastcashAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log(`insufficient balance`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}

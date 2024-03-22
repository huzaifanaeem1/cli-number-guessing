#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessNumber",
        type: "number",
        message: "please guess a number between 1 to 10:",
    },
]);
if (answer.userguessNumber === randomNumber) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}

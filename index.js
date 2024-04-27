#! /usr/bin/env node
import inquirer from "inquirer";
console.log(" Welcome to  Word Counter Project");
//Making a object
let user_answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence"
    }
]);
//Using .trim() & .split() functions
let words = user_answer.sentence.trim().split(" ");
console.log(words);
//Using length method to count characters.
let countwords = words.length;
console.log(`There are ${countwords} words in your sentence`);

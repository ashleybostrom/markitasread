const fs = require("fs");
const util = require("util");
const inquirer = requirer("inquirer");
const generateReadme = require("")
const writeFileAsync 

//User questions to generate README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "proejctTitle",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a concise description of your project: ",
        },
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation for your proejct?",
        },
        {
            type: "input",
            name: "purpose",
            message: "Why did you build this project?",
        },
        {
            type: "input",
            name: "solve",
            message: "Why problem does it solve?",
        },
        {
            type: "input",
            name: "learn",
            message: "What did you learn?",
        },
        {
            type: "input",
            name: "unique",
            message: "What makes your project stand out?",
        },
    ])
}
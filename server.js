const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("")
const writeFile = 

//User questions to generate README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
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
            message: "What was your motivation for your project?",
        },
        {
            type: "input",
            name: "purpose",
            message: "Why did you build this project?",
        },
        {
            type: "input",
            name: "solve",
            message: "What problem does it solve?",
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
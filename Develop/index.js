// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log('Welcome to the README.md Generator!');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUsername', 
        message: 'What is your GitHub username? (Required)',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'What is your email address? (Required)', 
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        } 
    },
    {
        type: 'input', 
        name: 'title', 
        message: 'What is your project title? (Required)', 
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },  
    {
        type: 'input',
        name: 'description',
        message: 'Write a concise description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'motivation'
        message: 'What was your motivation for your project? (Required)',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            } else {
                console.log('Please enter your motivation for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project? (Required)',
        validate: purposeInput => {
            if (purposeInput) {
                return true;
            } else {
                console.log('Please enter your motivation for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problem does it solve? (Required)',
        validate: solveInput => {
            if (solveInput) {
                return true;
            } else {
                console.log('Please enter your motivation for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn? (Required)',
        validate: learnInput => {
            if (learnInput) {
                return true;
            } else {
                console.log('Please enter your motivation for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'unique',
        message: 'What makes your project stand out? (Required)',
        validate: uniqueInput => {
            if (uniqueInput) {
                return true;
            } else {
                console.log('Please enter your motivation for your project!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubUsername', 
        message: 'What is your GitHub username? (Required)',
    },
    {
        type: 'input', 
        name: 'emailInput', 
        message: 'What is your email address? (Required)', 
    },
    {
        type: 'input', 
        name: 'titleInput', 
        message: 'What is your project title? (Required)', 
    },  
    {
        type: 'input',
        name: 'description',
        message: 'Write a concise description of your project (Required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
    },
    { 
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: true
    },
    {
        type: 'list',
        name: 'licenseInput',
        message: 'Choose a license for your project.',
        choices: ['Apache','GNU', 'IBM', 'ISC', 'MIT', 'Mozilla'],
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

        console.log('newREADME.md file has now been generated.')
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {

        console.log(responses);
        writeToFile('newREADME.md', generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
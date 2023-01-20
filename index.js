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
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'emailInput', 
        message: 'What is your email address? (Required)', 
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your email address.');
                return false;
            }
        } 
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
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('README.md file has now been generated.')
    });
}

// Function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        if (err) {
            return console.log(err);
        }

        console.log(responses);
        writeToFile('README.md', generateMarkdown({responses}));
    });
}

// Function call to initialize app
init();
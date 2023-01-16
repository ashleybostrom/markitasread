// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./Develop/utils/generateMarkdown');

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
                console.log('Enter your GitHub username.');
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
                console.log('Enter your email address.');
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
                console.log('Give it a title to remember.');
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
                console.log('Tell us about your project.');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for your project? (Required)',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            } else {
                console.log('Enter your motivation, interest, or inspiration for your project.');
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
                console.log('We need to know the WHY behind your project.');
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
                console.log('Enlighten us on your problem solving skills in this project.');
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
                console.log('Please tell us what you learned from this project.');
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
                console.log('Please pique our interest for your own unique project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Provide steps so we can install your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for use.');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please list your collaborators, if any, with links to their GitHub profiles.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['Apache','GNU', 'IBM', 'ISC', 'MIT', 'Mozilla'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log('README.md file has now been generated.')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        //Inquirer prompts
        const userResponses = await inquirer.prompt(questions);
        console.log('Your responses: ', userResponses);
        console.log('Thank you for providing all the information needed to generate your README.md file.');

        //Call to generate markdown
        console.log('Generating...');
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        //Write to file
        await writeFileAsync('README.md', markdown);
    
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
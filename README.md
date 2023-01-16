# README Generator

This CLI App has been created to generate a README that follows all of the guidelines to contain all of the requirements for a high-quality and professional file. This application allows the developer to input solely the information needed then compiles the data with concise clarity. This allows the developer to spend more time on their actual programs and applications, streamlining their design and development process. 


## Table of Contents:
* [User Story](#userstory)
* [Acceptance Criteria](#acceptancecriteria)
* [Installation](#installation)
* [Usage](#usage)
* [Licensing](#licensing)
* [Walk-Through Video](#walkthroughvideo)
* [Credits](#credits)

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

### Prerequisite programs:  
* VS Code  
* GitBash (Windows) or Homebrew (Mac) 
* Node.js 

### How to start the project:  
1. **Copy link in code dropdown menu:** Copy the link with SSH key to clone the repo
1. **Clone:** In GitBash (Windows) or Terminal (Mac), type `git clone < $link >`
1. **NPM:** Type `npm init -y` to install NPM (Node Package Manager)
1. **Inquirer:** Type `npm i inquirer` to install npm's inquirer package

## Usage
Once the above steps are complete, the generator is ready.

In the VS Code terminal, type `node index.js`

Answer the questions to generate your README. Once complete, you will find it in the 'utils' folder.

## Licensing
* [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Walk-Through Video

## Credits
This README generator was created with some guidance from [edX Boot Camps Github](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
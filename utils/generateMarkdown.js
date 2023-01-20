  // License info

    function renderLicenseBadge(license) {

      if (data.license = 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      }
      else if (data.license = 'GNU GPL v3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      }
      else if (data.license = 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      } 
      else if (data.license = 'ISC License (ISC)') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      }
      else if (data.license = 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } 
      else if (data.license = 'IBM Public License Version 1.0') {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
      }
    }

// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${data.title}
  
  ## Description

  *The purpose of this project and what it achieves:*

  ${data.description}

  ## Table of Contents
 
  * [Installation](#installation)

  * [Usage](#usage)  

  * [Licensing](#licensing)  

  * [Credits](#credits)
  
  * [Questions](#questions)
  
  ## Installation
  
  *Steps needed to install and run the application:*
  
  ${data.installation}

  ## Usage

  *Instructions and potential use cases:*
  
  ${data.usage}
  
  ## Licensing
  
  ${renderLicenseBadge(data.license)}

  ## Credits
  
  *Please credit any contributors or cited sources here.*
  
  ${data.credits}

  ## Questions
   
  *For any questions, contact information is below:*
 
  GitHub: www.github.com/`+`${data.githubUsername} \n
    
  Email: ${data.emailAddress}
  `);
}

module.exports = generateMarkdown;
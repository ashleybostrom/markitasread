  // License info

    function renderLicenseBadge(licenseInput) {

      if (responses.licenseInput = 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      }
      else if (responses.licenseInput = 'GNU GPL v3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      }
      else if (responses.licenseInput = 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      } 
      else if (responses.licenseInput = 'ISC License (ISC)') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      }
      else if (responses.licenseInput = 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } 
      else if (responses.licenseInput = 'IBM Public License Version 1.0') {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
      }
    }

// function to generate markdown for README
function generateMarkdown(data) {
  return (`
  # ${responses.titleInput}
  
  ## Description

  *The purpose of this project and what it achieves:*

  ${responses.descriptionInput}

  ## Table of Contents
 
  * [Installation](#installation)

  * [Usage](#usage)  

  * [Licensing](#licensing)  

  * [Credits](#credits)
  
  * [Questions](#questions)
  
  ## Installation
  
  *Steps needed to install and run the application:*
  
  ${responses.installationInput}

  ## Usage

  *Instructions and potential use cases:*
  
  ${responses.usageInput}
  
  ## Licensing
  
  ${renderLicenseBadge(data.licenseInput)}

  ## Credits
  
  *Please credit any contributors or cited sources here.*
  
  ${responses.creditsInput}

  ## Questions
   
  *For any questions, contact information is below:*
 
  GitHub: www.github.com/`+`${responses.githubUsername} \n
    
  Email: ${responses.emailAddress}
  `);
}

module.exports = generateMarkdown;
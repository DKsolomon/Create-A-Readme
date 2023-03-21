// This function renders a license badge based on user input on which license was chosen.
// If no license was picked, an empty string is returned 
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache-2.0-brightgreen.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPL-3.0-yellow.svg)';
  } else if (license === 'BSL') {
    return '![License](https://img.shields.io/badge/License-Boost_1.0-orange.svg)';
  } else if (license === 'BSD 3.0') {
    return '![License](https://img.shields.io/badge/License-BSD_3.0--Clause-lightgrey.svg)';
  } else {
    return '';
  }
}


// This function returns the license link 
// If no license was picked, an empty string is returned
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'MIT Lisense. https://opensource.org/license/mit-0/';
  } else if (license === 'Apache 2.0') {
    return 'Apache 2.0 Lisense. https://opensource.org/license/apache-2-0/';
  } else if (license === 'GPL 3.0') {
    return 'GPL 3.0 Lisense. https://opensource.org/license/gpl-3-0/';
  } else if (license === 'BSL') {
    return 'BSL Lisense. https://opensource.org/license/bsl1-0-html/';
  } else if (license === 'BSD 3.0') {
    return 'BSD 3.0 Lisense. https://opensource.org/license/bsd-3-clause/';
  } else { 
    return '';
  }
}

// This function returns a pre built license section of the README
// If no license was picked, an empty string is returned
function renderLicenseSection(license) {
  if (license) {
    return `
    License
  This project is licensed under the ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// This function generates the markdown for the README based on user input to the questions
function generateMarkdown(data) {
  return `
  # ${data.title}

  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#licence)
  [Contribution](#contribution)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Contributions 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, please reach out to my email, or github page!

  Email: ${data.email}
  
  Github: ${data.github}


`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit-0/';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/license/apache-2-0/';
  } else if (license === 'GPL 3.0') {
    return 'https://opensource.org/license/gpl-3-0/';
  } else if (license === 'BSL') {
    return 'https://opensource.org/license/bsl1-0-html/';
  } else if (license === 'BSD 3.0') {
    return 'https://opensource.org/license/bsd-3-clause/';
  } else { 
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    License
  This project is licensed under the ${renderLicenseLink(license)} license.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
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

  ##License 
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

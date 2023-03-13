// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a description of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'If applicable, create a table of contents for your README:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contributers for your project', 
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Any testing instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licence is your project using?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSL', 'BSD 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Created Readme');
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();

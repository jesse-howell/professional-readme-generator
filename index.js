// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = inquirer.createPromptModule();

questions ([
    {
        type: 'input',
        message: 'Please enter your project name.',
        name: 'name',
        default: 'Your-Project-Title'
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

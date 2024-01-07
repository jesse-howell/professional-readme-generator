// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = inquirer.createPromptModule();

questions ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'description 1',
    },
    {
        type: 'input',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
        name: 'description 2',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'description 3',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'description 4',
    },
 
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

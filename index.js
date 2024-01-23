// TODO: Include packages needed for this application
// added fs to write file system, inquirer for cli interaction and generateMarkdown to import the generateMarkdown.js file
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// added question array to be answered in the cli
const questions = inquirer.createPromptModule();

questions ([
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is a description of your project? (Your motivation, why you built this, what problem this solves and what you learned.)',
    name: 'description',
},
{
    type: 'input',
    message: 'What is your table of contents for this readme?',
    name: 'table of contents',
},
{
    type: 'input',
    message: 'How do you install this project? (step-by-step)',
    name: 'installation',
},
{
    type: 'input',
    message: 'How do you use this project? Include screenshots as needed.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Can you provide links to your collaborators, third-party assets or tutorials used?',
    name: 'credits',
},
{
    type: 'input',
    message: 'Does this project have any features?',
    name: 'features',
},
{
    type: 'input',
    message: 'How would someone contribute if they could?',
    name: 'contribute',
},
{
    type: 'input',
    message: 'Can you provide some tests for your application?',
    name: 'tests',
},
{
    type: 'input',
    message: 'How can you be contacted if need be?',
    name: 'questions',
},
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 
};


// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

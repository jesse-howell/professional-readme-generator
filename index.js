// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const pressAnyKey = require('press-any-key');

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
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: (press enter to continue)', 
        name: 'description_1',
    },
    {    
        type: 'input',
        message: 'What was your motivation?',
        name: 'description_2',    
    },
    {    
        type: 'input',
        message: 'Why did you build this project?',
        name: 'description_3',
    },    
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'description_4',
    },
    {
        type: 'input',
        message: 'What did you learn?', 
        name: 'description_5',
    }, 
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage_1'
    },  
    {
        type: 'input',
        message: 'To add a screenshot, create an <code>assets/images</code> folder in your repository and upload your screenshot to it. (press enter to continue)',
        name: 'usage_2',
    },
    {
        type: 'input',
        message: 'Then, using the relative file path, add it to your README using the following syntax: <code>assets/images/screenshot.png</code>',
        name: 'usage_3',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits_1',
    },
    {
        type: 'input',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'credits_2',
    },
    {
        type: 'input',
        message: 'If you followed tutorials, include links to those here as well.',
        name: 'credits_3',
    },
    {
        type: 'input',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.',
        name: 'license_1',
    },
    {
        type: 'input',
        message: 'If you need help choosing a license, refer to <a href="https://choosealicense.com/">choosealicense.com</a>. (enter license url)',
        name: 'license_2',
    },
    {
        type: 'input',
        message: "Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing.",
        name: 'badges_1',
    },
    {
        type: 'input',
        message: "Check out the badges hosted by <a href='https://shields.io/'>shields.io</a>. You may not understand what they all represent now, but you will in time.",
        name: 'badges_2',
    },    
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
    },
    {
        type: 'input',
        message: "If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The <a href='https://www.contributor-covenant.org/'>Contributor Covenant</a> is an industry standard, but you can always write your own if you'd prefer.",
        name: 'features',
    },
    {
        type: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
])

// TODO: Create a function to write README file
// deleted html
// TODO: Create a function to initialize app

// Function call to initialize app
init();

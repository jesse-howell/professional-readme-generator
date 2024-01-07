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
        name: 'description_1',
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
    {
        type: 'input',
        message: 'How do you install your project? Provide step-by-step instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your project? Provide screenshots if needed.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who were your collaborators? Please link their GitHub profiles',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Please provide a license.',
        name: 'credits'
    },

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data);
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Minified version -->
         <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        <title>Professional Readme Generator</title>
    </head>
    <body>
        <header>
            <h1>${data.title}</h1>
        </header>
        <section>
            <article>
                <p>
                ${data.description_1}
                ${data.description 2}
                ${data.description3}
                ${data.description4}
                ${data.description5}
                ${data.description1}
                ${data.description1}
                </p>
            </article>
        </section>    
    </body>
    </html>`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

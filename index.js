// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const pressAnyKey = require('press-any-key');

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
.then((data) => {
    console.log(data);
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
                <h2>Description</h2>
                <p>
                    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
                    ${pressAnyKey(),data.description_1}
                    <ul>
                        <li>What was your motivation?</li>
                        <p>${data.description_2}</p>
                        <li>Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")</li>
                        <p>${data.description_3}</p>
                        <li>What problem does it solve?</li>
                        <p>${data.description_4}</p>
                        <li>What did you learn?</li>
                        <p>${data.description_5}</p>
                    </ul>
                </p>
                <h2>Table of Contents (Optional)</h2>
                <p>
                    If your README is long, add a table of contents to make it easy for users to find what they need.
                    <ul>
                        <li><a href="#installation">Installation</a></li>
                        <li><a href="#usage">Usage</a></li>
                        <li><a href="#credits">Credits</a></li>
                        <li><a href="#license">License</a></li>
                    </ul>
                </p>
                <h2>Installation</h2>
                <p>
                    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
                    <p>${data.installation}</p>
                </p>
                <h2>Usage</h2>
                <p>
                    Provide instructions and examples for use. Include screenshots as needed.
                    <p>${data.usage_1}</p>
                    <br>
                    To add a screenshot, create an <code>/assets/images</code> folder in your repository and upload your screenshot to it. <span>${pressAnyKey(),data.usage_2}</span> Then, using the relative file path, add it to your README using the following syntax:
                    <code>/assets/images/screenshot.png</code>
                    <br>
                    <br>
                    <br>
                    <img src="${data.usage_3}" alt="Readme generator screenshot">
                    <br>
                </p>  
                <h2>Credits</h2>
                <p>
                    List your collaborators, if any, with links to their GitHub profiles.
                    <p>${data.credits_1}</p>
                    <br>
                    <br>
                    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
                    <p>${data.credits_2}</p>
                    <br>
                    <br>
                    If you followed tutorials, include links to those here as well.
                    <p>${data.credits_3}</p>
                </p>
                <h2>License</h2>
                <p>
                    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to <a href="https://choosealicense.com/">choosealicense.com</a>. 
                    <p></p>
                </p>
                <p>
                    <br>
                    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
                    <br>
                </p> 
                <h2>Badges</h2>
                    <a href="https://img.shields.io/github/languages/top/nielsenjared/badmath">img.shields.io/badmath</a>
                    <br>
                    <br>
                    Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by <a href="https://shields.io/">shields.io</a>. You may not understand what they all represent now, but you will in time.
                    <p></p>
                </p>
                <h2>Features</h2>
                <p>
                    If your project has a lot of features, list them here.
                    <p></p>
                </p>
                <p>
                <h2>How to Contribute</h2>
                <p>
                    If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The <a href="https://www.contributor-covenant.org/">Contributor Covenant</a> is an industry standard, but you can always write your own if you'd prefer.
                    <p></p>
                </p>
                </p>
                <h2>Tests</h2>
                <p>
                    Go the extra mile and write tests for your application. Then provide examples on how to run them here.
                    <p></p>
                </p>
            </article>
        </section>
    </body>
    </html>`
    console.log(html);

        fs.writeFileSync('./output/index.html', html);
        
});
// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();

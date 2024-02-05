// TODO: Include packages needed for this application
// added fs to write file system, inquirer for cli interaction and generateMarkdown to import the generateMarkdown.js file
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// added question array to be answered in the cli

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "What is a description of your project? (Your motivation, why you built this, what problem this solves and what you learned.)",
    name: "description",
  },
//   {
//     type: "checkbox",
//     message: "What is your table of contents for this readme?",
//     name: "toc",
//     choices: [
//       "Description",
//       "Installation",
//       "Usage",
//       "Credits",
//       "License",
//       "Features",
//       "Contributing",
//       "Tests",
//       "Contact",
//     ],
//   },
  {
    type: "input",
    message: "How do you install this project? (step-by-step)",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use this project? Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message: "Can you provide links to your collaborators, third-party assets or tutorials used?",
    name: "credits",
  },
  {
    type: "input",
    message: "What license do you need?",
    name: "license",
  },
  {
    type: "input",
    message: "What badge do you need for this project?",
    name: "badge",
  },
  {
    type: "input",
    message: "Does this project have any features?",
    name: "features",
  },
  {
    type: "input",
    message: "How would someone contribute if they could?",
    name: "contribute",
  },
  {
    type: "input",
    message: "Can you provide some tests for your application?",
    name: "tests",
  },
  {
    type: "input",
    message: "How can you be contacted if need be?",
    name: "contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateMarkdown(data);
  fs.writeFileSync(fileName, readmeContent);
}

// TODO: Create a function to initialize app
function init() {
  const prompt = inquirer.createPromptModule();
  prompt(questions).then((data) => {
    writeToFile("./output/README.md", data);
    console.log(data);
  });
}

// Function call to initialize app
init();

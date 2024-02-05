// required packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// question array for inquirer prompt
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

// function writes data to README file
function writeToFile(fileName, data) {
  const md = generateMarkdown(data);
  fs.writeFileSync(fileName, md);
}

// function to initialize app
function init() {
  const prompt = inquirer.createPromptModule();
  prompt(questions).then((data) => {
    writeToFile("./output/README.md", data);
    console.log(data);
  });
}

// function call to initialize app
init();

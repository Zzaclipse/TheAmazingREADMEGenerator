// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`README.md`, generateMarkdown(fileName), (err) =>
    err ? console.error(err) : console.log("logged answers")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "filename?",
        name: "fn",
      },
      {
        type: "input",
        message: "data for test",
        name: "data",
      },
    ])
    .then((response) => writeToFile(response.fn, response.data));
}

// Function call to initialize app
init();

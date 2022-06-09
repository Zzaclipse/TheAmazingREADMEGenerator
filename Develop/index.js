const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README.md created")
  );
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the program filename?",
        name: "progfn",
      },
      {
        type: "input",
        message: "What your GitHub username?",
        name: "gitUser",
      },
      {
        type: "input",
        message: "What your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "Give a description of the application:",
        name: "desc",
      },
      {
        type: "input",
        message: "Explain how to use the application:",
        name: "explain",
      },
      {
        type: "input",
        message: "Explain how to test the application:",
        name: "test",
      },
      {
        type: "list",
        message: "Choose a license:",
        choices: ["MIT", "GNU", "Apache", "ISC"],
        name: "lic",
      },
    ])
    .then((response) => writeToFile("README", response));
}

// Function call to initialize app
init();

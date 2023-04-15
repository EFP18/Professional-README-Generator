// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  name: "Project Title",
  message: "What is the title of your README file?", 
},
{
  type: "input",
  name: "Description",
  message: "Write a description for your repository.", 
},
{
  type: "input",
  name: "Table of Contents",
  message: "Create a Table of Contents.", 
},
{
  type: "input",
  name: "Installation",
  message: "What are the installation instructions for your project?", 
},
{
  type: "input",
  name: "Usage",
  message: "What's the usage of your repository?", 
},
{
  type: "list",
  name: "License",
  message: "What license(s) does your repository have?", 
  choices: ['MIT', 'Microsoft Public License', 'Apache License 2.0'],
  // explanation for each license??
  // list of licenses
  // license badge at the top
  // do I need all license types?
},
{
  type: "input",
  name: "Contribution",
  message: "Who contributed to your project?", 
},
{
  type: "input",
  name: "Tests",
  message: "???", 
},
{
  type: "input",
  name: "Questions",
  message: "What is your GitHub profile?", 
  message: "What is your email address?", 

}];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


const askUserAndCreateReadme = async () => {
  try{
    const data = await inquirer.prompt(questions);
    console.log(data);

    await fs.promises.writeFile("README-autoCreated.md", JSON.stringify(data, null, '\t'));
    console.log("You have a README file!");

  } catch (err) {
    console.log(err);
  }
}

askUserAndCreateReadme()




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

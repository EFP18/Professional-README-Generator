// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Inquirer used to generate questions
const questions = [{
  type: 'input',
  name: 'Title',
  message: 'What is the title of your README file?', 
  // validate that the user has given an input for the non-optional questions
  // validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
},
{
  type: 'input',
  name: 'Description',
  message: 'Write a description for your repository.', 
  // validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
},
{
  type: 'confirm',
  name: 'Table of Contents',
  message: 'Would you like to have a Table of Contents in your README file?', 
  default: 'False',
  // should I include this?
},
{
  type: 'input',
  name: 'Installation',
  message: 'What are the installation instructions for your project?',
  // validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
},
{
  type: 'input',
  name: 'Usage',
  message: 'What is the usage of your repository?', 
},
{
  // list of licenses
  type: 'list',
  name: 'License',
  message: 'What license(s) does your repository have?', 
  choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  // explanation for each license??
  // list of licenses
  // license badge at the top
  // do I need all license types?
},
{
  type: 'input',
  name: 'Contributing',
  message: 'How can someone contribute to your repository?', 
},
{
  type: 'input',
  name: 'Tests',
  message: '???', 
},
{
  type: 'input',
  name: 'GitHub',
  message: 'What is your GitHub profile?', 
  // validate: (value) => {if(value){return true;} else {return 'Please add a project title.'}}
},
{
  type: 'input',
  name: 'Email',
  message: 'What is your email address?', 
// how to add multiple questions 
}];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


const askUserAndCreateReadme = async () => {
  try{
    const data = await inquirer.prompt(questions);
    // const tableOfContentTitles = await inquirer.prompt(data.name);
    // console.log(tableOfContentTitles)
    console.log(data);

    // create the readme file
    await fs.promises.writeFile('README-autoCreated.md', JSON.stringify(data, null, '\n\n'));
    console.log('You have a README file!');

  } catch (err) {
    console.log(err);
  }
}

askUserAndCreateReadme()

// if table of contents response=true, 
// if the other questions have been answered
// create a table of contents with the answered questions titles 


// license (large switch?)
// depending on which one was chosen, 
// pull its description, append it on the screen
// add badge on top of screen for it






// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// module.exports = questions;
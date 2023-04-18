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
  validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
},
{
  type: 'input',
  name: 'Description',
  message: 'Write a description for your repository.', 
  validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
},
{
  type: 'input',
  name: 'Installation',
  message: 'What are the installation instructions for your project?',
  validate: (value) => {if(value){return true;} else {return ('Please add a project title.')}}
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
  choices: [{
    name: 'GNU AGPLv3',
    value: 'AGPL_v3-blue'
  },
  {
    name: 'Mozilla Public License 2.0',
    value: 'MPL_2.0-brightgreen'
  }, 
  {
    name: 'Apache License 2.0',
    value: 'Apache_2.0-blue'
  }, 
  {
    name: 'MIT',
    value: 'MIT'
  }, 
  {
    name: 'Boost Software License 1.0',
    value: 'Boost_1.0-lightblue'
  }, 
  {
    name: 'The Unlicense',
    value: 'Unlicense-blue'
  }, 
  {
    name: 'My repository has no license.',
    value: ''
  }]
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
  validate: (value) => {if(value){return true;} else {return 'Please add a project title.'}}
},
{
  type: 'input',
  name: 'Email',
  message: 'What is your email address?', 
}];


const askUserAndCreateReadme = () => {
// take data from inquirer
  inquirer.prompt(questions).then((data, err) => {
    console.log(data);
    // create the readme file
    fs.writeFile('README-autoCreated.md', generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log('Your README file is ready!')
    );
  });
}

askUserAndCreateReadme()

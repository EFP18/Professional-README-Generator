# Professional README Generator

Example video of functionality: https://drive.google.com/file/d/1lb4fJH13DSwjOLlf2L5HMMAh5V9oTvQJ/view
GitHub: https://github.com/EFP18/Professional-README-Generator
Please refer to the other README file titled README-autoCreated.md for an example file generated using the application. 

## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

### Description
In this repository, I created a README generator using NodeJS and JavaScript. I used the inquirer library to create an array of questions for the user, and the fs library to create a new file using all the user input. I used the validate option in inquirer for certain questions that were not optional, to make sure that the user inputs the necessary information, and made additional checks in the generateMarkdown function to avoid adding information in the final README file that was not chosen by the user upon creation. Lastly, I created two functions to add a license badge and link at the top of the README file, based on the user choice. 

### Installation
In order to use this project, a user must clone the repository from GitHub and open it locally with VSCode. Once on VSCode, the user must right-click on the index.js file on the left-hand side of the screen, and click Open in Integrated Terminal. Once in the Terminal, the user needs to type node index.js, after which the questions will start appearing one by one and the README file will be created as a new file in the repository. 

### Usage
This repository can be used to create a README generator automatically, by just answering a series of questions on the Terminal. 

### Questions
* GitHub: http://github.com/https://github.com/EFP18
* Email: ester.p18@hotmail.com


# 09 Node.js Challenge: Professional README Generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 





The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.



WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

 

### Deliverables: 20%

* A sample README generated using the application must be submitted.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.



## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a README describing the project



# Professional README Generator
  ![License](https://img.shields.io/badge/License-Unlicense-blue.svg)

  http://unlicense.org/


  ##Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
    
  * [License](#license)
    
  
  
  * [Questions](#questions)

### Description
In this repository, I created a README generator using NodeJS and JavaScript. I used the inquirer library to create an array of questions for the user, and the fs library to create a new file using all the user input. I used the validate option in inquirer for certain questions that were not optional, to make sure that the user inputs the necessary information, and made additional checks in the generateMarkdown function to avoid adding information in the final README file that was not chosen by the user upon creation. Lastly, I created two functions to add a license badge and link at the top of the README file, based on the user choice. 

### Installation
In order to use this project, a user must clone the repository from GitHub and open it locally with VSCode. Once on VSCode, the user must right-click on the index.js file on the left-hand side of the screen, and click Open in Integrated Terminal. Once in the Terminal, the user can input their information and at the end of the questions the README file will be created as a new file in the repository. 

### Usage
  To create a README generator automatically, by just answering a series of questions on the Terminal. 

### License
  Unlicense-blue





### Questions
* GitHub: http://github.com/https://github.com/EFP18
*Email: ester.p18@hotmail.com


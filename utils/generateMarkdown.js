//Generate license badge 
function renderLicenseBadge(License) {
  // if (License === 'GNU AGPLv3') {
  //   return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  // }
  return `[![License](https://img.shields.io/badge/license-${License}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// readme template and format
// call of license badge and link
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
* GitHub: http://github.com/${data.GitHub}
* Email: ${data.Email}

`;
}


module.exports = generateMarkdown;


//Generate license badge 
function renderLicenseBadge(License) {
  if (!License) return '';
  return `[![License](https://img.shields.io/badge/license-${License}-blue.svg)`
  if (License === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === 'GNU AGPLv3') {
    return `https://www.gnu.org/licenses/agpl-3.0`
  } else if (License ==='Mozilla Public License 2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (License ==='The Unlicense') {
    return `http://unlicense.org/` 
  } else if (License ==='Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0` 
  } else if (License ==='MIT') {
    return `https://opensource.org/licenses/MIT` 
  } else if (License ==='Boost Software License 1.0') {
    return `https://www.boost.org/LICENSE_1_0.txt` 
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// readme template and format
// call of license badge and link
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}\n
  ${renderLicenseLink(data.License)}


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

${
  data.Tests ? 
  `## Tests
  ${data.Tests}` 
  : ''
}

## Questions
* GitHub: http://github.com/${data.GitHub}
* Email: ${data.Email}

`;
}


module.exports = generateMarkdown;


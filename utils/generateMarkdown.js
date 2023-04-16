// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// readme template and format
function generateMarkdown(data) {
  return `# ${data.Title}

  // if statement??
  // table of contents
  * [Description](#Description)
  * [Installation[(#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

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
${data.Questions}
* GitHub: ${data.Github}
* Email: ${data.Email}

`;
}


module.exports = generateMarkdown;

generateMarkdown()
//Generate license badge 
function renderLicenseBadge(License) {
  if (!License) return '';
  return `![License](https://img.shields.io/badge/License-${License}.svg)`
  // if (License === 'GNU AGPLv3') {
  //   return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === 'AGPL_v3-blue') {
    return `https://www.gnu.org/licenses/agpl-3.0`
  } else if (License ==='MPL_2.0-brightgreen') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (License ==='Unlicense-blue') {
    return `http://unlicense.org/` 
  } else if (License ==='Apache_2.0-blue') {
    return `https://opensource.org/licenses/Apache-2.0` 
  } else if (License ==='MIT') {
    return `https://opensource.org/licenses/MIT` 
  } else if (License ==='Boost_1.0-lightblue') {
    return `https://www.boost.org/LICENSE_1_0.txt` 
  } else if (License ==='') {
    return `` 
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// readme template and format
// call of license badge and link
// code checks to see what fields have been answered and which ones haven't

function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}\n
  ${renderLicenseLink(data.License)}\n

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  ${
    data.Usage ? 
    `* [Usage](#usage)
    ` 
    : ''
  }
  ${
    data.License ? 
    `* [License](#license)
    ` 
    : ''
  }
  ${
    data.Contributing ? 
    `* [Contributing](#contributing)
    ` 
    : ''
  }
  ${
    data.Tests ? 
    `* [Tests](#tests)
    ` 
    : ''
  }
  * [Questions](#questions)


### Description
${data.Description}

### Installation
${data.Installation}

${
  data.Usage ? 
  `### Usage
  ${data.Usage}` 
  : ''
}

${
  data.License ? 
  `### License
  ${data.License}` 
  : ''
}

${
  data.Contributing ? 
  `### Contributing
  ${data.Contributing}` 
  : ''
}

${
  data.Tests ? 
  `### Tests
  ${data.Tests}` 
  : ''
}

### Questions
* GitHub: http://github.com/${data.GitHub}
${
  data.Email ?
  `* Email: ${data.Email}`
  : ''
}
`;
}


module.exports = generateMarkdown;


// create license object to get the name of the licenses to appear in the license section
const licensesObj = {
  'AGPL_v3-blue': 'GNU AGPLv3',
  'MPL_2.0-brightgreen': 'Mozilla Public License 2.0',
  'Apache_2.0-blue': 'Apache License 2.0',
  'MIT': 'MIT',
  'Boost_1.0-lightblue': 'Boost Software License 1.0',
  'Unlicense-blue': 'The Unlicense'
}


//Generate license badge 
function renderLicenseBadge(License) {
  if (!License) return '';
  return `![License](https://img.shields.io/badge/License-${License}.svg)`

}

// function to show the link for the license chosen
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
    ${licensesObj[data.License]}` 
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


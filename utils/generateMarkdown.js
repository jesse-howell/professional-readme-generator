// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPL v3') {
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === 'Apache') {
    licenseBadge = '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = '';
if (license === 'MIT') {
  licenseLink  = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
} else if (license === 'GNU GPL v3') {
  licenseLink  = '[License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
} else if (license === 'Apache') {
  licenseLink  = '[License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
} else {
  licenseLink  = '';
  }
  return licenseLink;
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  const { license } = data;

  if (!license) {
    return '';
  }

return `
## License

This project is licensed under the [${renderLicenseBadge(license)} license](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.table_of_contents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data)}
  ## Features
  ${data.features}
  ## How to Contribute
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Contact for Questions
  ${data.contact}`;
}

module.exports = generateMarkdown;

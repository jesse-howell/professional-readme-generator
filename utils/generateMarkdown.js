// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license;
  let yourLicense = '';
  if (licenseBadge === 'MIT') {
    yourLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenseBadge === 'GNU GPL v3') {
    yourLicense = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (licenseBadge === 'Apache') {
    yourLicense = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    yourLicense = 'N/A'
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = license;
let yourLicense = '';
if (licenseLink === 'MIT') {
  yourLicense = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
} else if (licenseLink === 'GNU GPL v3') {
  yourLicense = '[License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
} else if (licenseLink === 'Apache') {
  yourLicense = '[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
} else {
  yourLicense = 'N/A'
  };
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.table_of_contents}

`;
}

module.exports = generateMarkdown;

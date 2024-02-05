// license badge function, returns empty string if no license needed
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPL v3") {
    licenseBadge =
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "Apache") {
    licenseBadge =
      "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// license link function, returns empty string if no license needed
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink =
      "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GNU GPL v3") {
    licenseLink =
      "[License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
  } else if (license === "Apache") {
    licenseLink =
      "[License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// function renders license section, returns empty string if no license data
function renderLicenseSection(data) {
  const { license } = data;

  if (!license) {
    return "";
  }

  return `
## License

This project is licensed under the [${renderLicenseBadge(
    license
  )}](${renderLicenseLink(license)}).
`;
}

// function generates markdown template for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Table of Contents

  - [Description](#descritpion)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#howtocontribute)
  - [Tests](#tests)
  - [Contact](#contact)

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
  ${data.contact}`
};

module.exports = generateMarkdown;

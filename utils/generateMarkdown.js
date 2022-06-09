function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This application is licened under MIT License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU") {
    return `This application is licened under General Public License v3.0

  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Apache") {
    return `This application is licened under Apache License 2.0

  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "ISC") {
    return `This application is licened under ISC License

  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

function generateMarkdown(data) {
  return `# ${data.progfn}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description

  ${data.desc}

  ## Installation
  You can clone the repository from this command:

  \`\`\`bash
  git clone https://github.com/${data.gitUser}/${data.progfn}.git
  \`\`\`

  ## Usage
  The application will be invoked in the command line by using the following command:

  \`\`\`bash
  node index.js
  \`\`\`

  ${data.explain}

## Contributing
If you would like to contribute to the application then please refer to the Contributor Covenant v2.1 

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
## Tests

${data.test}

## Questions

What is the developers github?

[${data.gitUser}](https://github.com/${data.gitUser})

Where can I reach the developer to ask additional questions?

${data.email}

## License

${renderLicenseSection(data.lic)}

`;
}

module.exports = generateMarkdown;

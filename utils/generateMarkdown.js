// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title of the project

  ${data.ProjectTitle} 
  
  ## Description
  
  ${data.ProjectDescription}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Installation
  
  The following necessary dependencies must be installed to run the application properly: ${data.Install}
  
  ## Usage 
  
  This application is used for ${data.Usage}
  
  ## License
  
  This project is license under the ${data.License} license.
  
  ## Contributors
  ${data.Contributors} Contributors
  
  ## Tests
  
  To run tests, you need to run the following command: ${data.Tests}

  # Questions

  If you have any questions about the repo, open an issue or contact ${data.GitHubUsername} directly ${data.GitHubEmail}.
`;
}

module.exports = generateMarkdown;

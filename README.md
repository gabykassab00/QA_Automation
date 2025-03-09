# Unit Testing with Jest and Mocking

Welcome to the world of [Jest](https://facebook.github.io/jest/) testing!

My goal is to gently introduce you to this world. Let's get started.


## Pre-requisites
* You will need to have access to the command-line, for Linux/Mac a Terminal or on Windows it will be a command prompt (`cmd`)
* You will need to have git installed: http://git-scm.com/downloads
* NodeJS & npm - https://nodejs.org **or** via NVM (https://github.com/creationix/nvm)
* yarn [optional] - https://yarnpkg.com


## Download

Just use `git` to clone the ssh version:

    git clone git@github.com:gabykassab00/QA_Automation.git

**Or** use `git` to clone the https version:

	git clone https://github.com/gabykassab00/QA_Automation.git

**Or** download the .zip archive and unzip it to the folder `QA_Automation`:

	https://codeload.github.com/gabykassab00/QA_Automation/zip/refs/heads/main


## Installation

On the command-line or Terminal, navigate to the root of the directory which you downloaded and run:

* If you have npm: `npm install`
* If you have yarn: `yarn install`

## Running tests

Here are a few commands you should now be able to run:

* Run Jest tests once: `npm test` or `yarn test`


## Assumptions and Approaches

* No Changes to Functions: The tests use the functions as they are, without adding extra checks. If the function doesn't handle errors, the tests check what happens now.

* Pseudo-Error Cases: For functions that don't throw errors, the third test case looks at unusual behavior instead of an exception, keeping the code the same.

* Mocking: The fetch API is faked using Jest's jest.fn() with simple success/failure values, so it doesn't make real network calls or use long timeouts.

## Additional Packages

* Jest: The only additional package used, installed as a dev dependency:
  *  Version: Latest available via npm install --save-dev jest.

* No other libraries or tools are required beyond what’s in a standard Node.js environment.
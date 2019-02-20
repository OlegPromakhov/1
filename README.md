# Testing framework for OOS-CA app

This testing framework is made on Cypress. 

### Setup Cypress locally
Install Cypress
Download Cypress Test Runner
Open new project

### Running tests
Put downloaded specs into `integration` folder
Click on each spec to run via Test Runner, tab `Tests`

### Specs description
`openspec.js` - validates opened app and checks visability of its header
`filterspec.js` - checks filter fields and buttons `Submit` and `Clear`
`dashspec.js` - checks ability to move member cards between the columns of dashboard and appearance of card navigation buttons. Test is a bit flaky, because it is written with a help of Selector Playground to try and test this Cypress functionality.




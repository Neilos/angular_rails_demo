README
======

Karma
------------

###Karma setup

First, ensure that npm (and node - which comes with npm) is installed.
Then install karma with the following command.

  `npm install karma --save-dev`

  `npm install karma-jasmine --save-dev` to write tests using the jasmine framework
  `npm install karma-chrome-launcher --save-dev` to run tests in chrome
  'npm install karma-firefox-launcher --save-dev' to run tests in firefox
  `npm install karma-phantomjs-launcher --save-dev` to run tests in the headless browser: phantomJS

To re-generate a configuration file for karma, run the command
  `karma init`
The command prompt will ask a number of questions to generate an appropriate configuration file. Answer all questions, and at the end amend the karma.conf.js file as necessary.

Install the following karma dependencies

###Running karma tests
Start the Karma server
  `karma start`
Open a browser with the given url (e.g. 'Karma v0.12.1 server started at http://localhost:9876/')


README
======

Karma
------------

###Karma setup

First, ensure that node and npm are installed.
Then install karma with the following command (may need to use `sudo` to install as the root user).

  `npm install karma`

Generate a configuration file for karma.
  `karma init`
The command prompt will ask a number of questions to generate an appropriate configuration file. Answer all questions, and at the end amend the karma.conf.js file as necessary.

Install any karma dependencies (e.g. 'karma-chrome-launcher', 'karma-jasmine')
  `npm install -g <name of karma module>`


###Running karma tests
Start the Karma server
  `karma start`
Open a browser with the given url (e.g. 'Karma v0.12.1 server started at http://localhost:9876/')



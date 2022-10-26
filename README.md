# WebdriverIO

## Introduction
This is an E2E framework for web application built on top of WebDriver.IO using JavaScript.
- We are using Page Factory pattern for UI separation.
- Mocha Testing Framework
-  For packaging the whole solution in the form of a container we are using Docker as our containerzation platform.
-  For CI pipelines we have added two different type of CI pipelines one is the Github Actions and the other one is the Bitbucket pipelines.

## How to run this project ?
Well there are two ways we can this project either using a npm command or using docker

### Execute by using NPM
- It's a simple command which you run from the main project directoy, which will simply run your tests inside test/spec folder.
<br />`npm run test`
- Or you can you can use `npx` with wdio.
<br />`npx wdio`
### Execute by using Docker
- Here you need to make sure that you have Docker installed and running on your machine.
- To start with you need to build the docker image of your project. Which can be done by using below command
<br />`docker build -t <image_name>`<br />
- You can give image name of your choice, for this project we are using `webdriver-io`
- Once you build the docker image of your project successfully, You need to run a container of the image, which you can do it by below command <br />
`docker run <image_name>` for e.g: `docker run webdriver-io`

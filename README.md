# slackbots
This is a simple NodeJS project for SlackBot using slackbots library

# Dependencies
## 1. slackbots (https://github.com/mishk0/slack-bot-api)
Node.js library for easy operation with the Slack API.
## 2. Axios (https://github.com/axios/axios)
A promise-based HTTP client for the browser and node.js.
## 3. Nodemon (https://github.com/remy/nodemon)
A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
## 4. Dotenv (https://github.com/motdotla/dotenv)
A zero-dependency module that loads environment variables from a .env file into process.env.

# How to start application
## 1. Install
```bash
$ npm install
```

## 2. Create Environment File
In order to run application you need to create .env file as below.


```bash
# BOT_TOKEN is Slackbot OAuth Token created from your Slack App settings
BOT_TOKEN=xoxb-1708377353319-1716408727814-xbYjf34vkOTHKPNARB11sod9

# BOT_NAME is Slackbot name
BOT_NAME=your bot name
```

## 3. Run
```bash
$ npm start
```
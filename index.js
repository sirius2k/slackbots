const Slackbot = require('slackbots')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

// README: App should be created with class one. https://api.slack.com/apps?new_classic_app=1
const bot = new Slackbot({
    token: `${process.env.BOT_TOKEN}`,
    name: `${process.env.BOT_NAME}`
})

const params = {
    icon_emoji: ':robot_face:'
}

bot.on('start', () => {
    bot.postMessageToChannel(
        `${process.env.CHANNEL}`,
        'This is a channel message.',
        params
    )

    bot.postMessageToUser(
        `${process.env.USER}`,
        'This is a private message.',
        params
    )

    bot.postMessageToGroup(
        `${process.env.GROUP}`,
        'This is a group message.',
        params
    )
})

bot.on('error', (err) => {
    console.log("Error : " + err)
})

bot.on('message', (data) => {
    if (data.type !== 'message') {
        return
    }

    handleMessage(data.text)
})

function handleMessage(message) {
    if (message === "help") {
        bot.postMessage(bot.getChannelId(), "Do you need a help?", params)
    }
    console.log("Handle : " + message)
}
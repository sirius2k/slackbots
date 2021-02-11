const Slackbot = require('slackbots')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

// README: App is needed to be created with class one. https://api.slack.com/apps?new_classic_app=1
const bot = new Slackbot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'Agiler'
})

const params = {
    icon_emoji: ':robot_face:'
}

bot.on('start', () => {
    bot.postMessageToChannel(
        '랜덤',
        '애자일 프로젝트를 도와주겠습니다.',
        params
    )

    bot.postMessageToUser(
        'redbrush',
        '개인 메시지',
        params
    )

    bot.postMessageToGroup(
        'random',
        '그룹 메시지',
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
        bot.postMessage(bot.getChannelId(), "도움이 필요하신가요?", params)
    }
    console.log("Handle : " + message)
}
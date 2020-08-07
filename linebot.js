const linebot = require('linebot');
const config = {
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
};
const bot = linebot(config);
const botName = process.env.BOT_NAME;
const service = require('./service');
module.exports = bot;

bot.on('message', async function (event) {
  try {
    if (event.type === 'message' && event.message && event.message.text) {
      const message = event.message.text.trim();
      if (message === botName)
        await event.reply('What trouble you bring now?');
      else if (message.indexOf(botName) === 0) {
        const command = parseCommand(message);
        await service.handleCommand(command, event);
      } else if (message.includes(botName))
        await event.reply('Huh?');
    }
  } catch (error) {
    console.log(error);
    await event.reply('Unknown Error  (x_x)');
  }
});

// event
// {
//   type: 'message',
//   replyToken: 'replyToken',
//   source: {
//     userId: 'userId',
//     groupId: 'groupId',
//     type: 'group',
//     profile: [Function],
//     member: [Function]
//   },
//   timestamp: 1596785042340,
//   mode: 'active',
//   message: {
//     type: 'text',
//     id: '12456661773182',
//     text: 'Hello',
//     content: [Function]
//   },
//   reply: [Function]
// }

const symbols = [ '!', ',', ':', '！', '，', '：' ];
function parseCommand (message) {
  let command = message.replace(botName, '').trim();
  if (symbols.includes(command.charAt(0)))
    command = command.substring(1);
  return command.trim();
}